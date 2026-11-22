// Visualiseur d'onde audio en 3D (relief d'ondes qui défile en profondeur), en bas à droite :
// - « Écoute » pendant la lecture d'une voix (speechSynthesis). Le son de la synthèse vocale
//   n'est pas accessible au Web Audio : l'onde est simulée, rythmée par les mots prononcés.
// - « À vous » pendant la reconnaissance vocale (SpeechRecognition) : vraie onde du micro,
//   analysée localement (rien n'est enregistré ni envoyé).
// À charger AVANT lecon.js / professeur.js : on enveloppe speechSynthesis.speak et
// SpeechRecognition sans toucher à ces scripts. Inactif si html[data-fx="off"].
(function () {
  if (!window.LBFX || !LBFX.on()) return;
  var lite = LBFX.level === 'lite';
  var BARRES = 32, RANGS = lite ? 8 : 16;

  var boite = null, cv, ctx, label, raf = 0, mode = null, histo = [], energie = 0;
  var micro = null; // { stream, analyser, data, ctx }

  function creer() {
    boite = document.createElement('div');
    boite.className = 'onde'; boite.setAttribute('aria-hidden', 'true');
    label = document.createElement('span'); label.className = 'onde-label';
    cv = document.createElement('canvas'); ctx = cv.getContext('2d');
    boite.appendChild(label); boite.appendChild(cv);
    document.body.appendChild(boite);
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = 200 * dpr; cv.height = 64 * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function afficher(m) {
    if (m === 'ecoute' && mode === 'micro') return; // le micro a la priorité
    if (!boite) creer();
    mode = m; boite.dataset.mode = m;
    label.textContent = m === 'micro' ? '🎙️ À vous' : '🔊 Écoute';
    boite.classList.add('on');
    if (!raf) raf = requestAnimationFrame(frame);
  }
  function masquer(m) {
    if (mode !== m) return;
    mode = null;
    if (boite) boite.classList.remove('on');
  }

  // Amplitudes de la rangée suivante (0..1).
  function rangee(t) {
    var r = new Array(BARRES);
    if (mode === 'micro' && micro) {
      micro.analyser.getByteFrequencyData(micro.data);
      var n = micro.data.length;
      for (var i = 0; i < BARRES; i++) {
        // Bandes logarithmiques (la voix est surtout dans les graves / médiums).
        var a = Math.floor(Math.pow(i / BARRES, 1.8) * n * .6), b = Math.max(a + 1, Math.floor(Math.pow((i + 1) / BARRES, 1.8) * n * .6));
        var s = 0; for (var k = a; k < b; k++) s += micro.data[k];
        r[i] = Math.min(1, s / (b - a) / 200);
      }
    } else if (mode === 'ecoute') {
      energie = Math.max(.25, energie * .93);
      var syll = .55 + .45 * Math.pow(Math.sin(t * .0135), 2);
      for (var j = 0; j < BARRES; j++) {
        var x = j / (BARRES - 1), cloche = Math.exp(-Math.pow((x - .35) / .28, 2));
        var bruit = .5 + .5 * Math.sin(t * .011 + j * 1.7) * Math.sin(t * .0071 + j * .9);
        r[j] = cloche * bruit * syll * energie;
      }
    } else for (var z = 0; z < BARRES; z++) r[z] = 0;
    return r;
  }

  function frame(t) {
    histo.unshift(rangee(t));
    if (histo.length > RANGS) histo.length = RANGS;
    var W = 200, H = 64, css = getComputedStyle(boite);
    var coul = mode === 'micro' ? css.getPropertyValue('--fx-gold').trim() : css.getPropertyValue('--accent').trim();
    ctx.clearRect(0, 0, W, H);
    // Du fond (plus ancien) vers l'avant : chaque rangée est décalée, réduite et estompée.
    for (var k = histo.length - 1; k >= 0; k--) {
      var row = histo[k], ech = 1 - k * .035, base = H - 6 - k * 2.6, dx = 12 + k * 3.2;
      var larg = (W - 30) * ech / BARRES;
      ctx.globalAlpha = Math.max(0, 1 - k / RANGS) * (k ? .55 : 1);
      ctx.fillStyle = coul;
      for (var i = 0; i < BARRES; i++) {
        var h = Math.max(1.5, row[i] * 42 * ech);
        ctx.fillRect(dx + i * larg, base - h, Math.max(1, larg - 1.6), h);
      }
    }
    ctx.globalAlpha = 1;
    var calme = histo.every(function (r) { return r.every(function (v) { return v < .02; }); });
    if (!mode && calme) { raf = 0; return; }
    raf = requestAnimationFrame(frame);
  }

  // ---- Écoute : synthèse vocale ----
  var synth = window.speechSynthesis;
  if (synth && synth.speak) {
    var speak = synth.speak.bind(synth), suivi = 0;
    synth.speak = function (u) {
      try {
        u.addEventListener('start', function () { energie = 1; afficher('ecoute'); });
        u.addEventListener('boundary', function () { energie = 1; }); // un mot de plus
      } catch (e) {}
      // Fin : plus robuste de surveiller « speaking » (cancel() ne déclenche pas toujours « end »).
      clearInterval(suivi);
      suivi = setInterval(function () { if (!synth.speaking && !synth.pending) { clearInterval(suivi); masquer('ecoute'); } }, 250);
      return speak(u);
    };
  }

  // ---- Parole : reconnaissance vocale + micro ----
  function ouvrirMicro() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return;
    navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } }).then(function (stream) {
      if (mode !== 'micro') { stream.getTracks().forEach(function (t) { t.stop(); }); return; }
      var AC = window.AudioContext || window.webkitAudioContext, ac = new AC();
      var an = ac.createAnalyser(); an.fftSize = 256; an.smoothingTimeConstant = .7;
      ac.createMediaStreamSource(stream).connect(an);
      micro = { stream: stream, analyser: an, data: new Uint8Array(an.frequencyBinCount), ctx: ac };
    }).catch(function () { /* micro refusé : la reconnaissance affiche déjà le message */ });
  }
  function fermerMicro() {
    if (micro) { micro.stream.getTracks().forEach(function (t) { t.stop(); }); micro.ctx.close(); micro = null; }
    masquer('micro');
  }
  ['SpeechRecognition', 'webkitSpeechRecognition'].forEach(function (nom) {
    var Base = window[nom];
    if (!Base) return;
    function Reco() {
      var r = new Base();
      var start = r.start.bind(r);
      r.start = function () { start(); afficher('micro'); ouvrirMicro(); };
      r.addEventListener('end', fermerMicro);
      r.addEventListener('error', fermerMicro);
      return r;
    }
    Reco.prototype = Base.prototype;
    window[nom] = Reco;
  });
})();
