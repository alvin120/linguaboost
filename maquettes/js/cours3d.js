// Script de la page cours-3d.html : un cours guidé par le professeur, dans la salle 3D (js/cours3d-scene.js).
// Le cours est construit à partir des données de la leçon (lecons/*.js) : accueil, dialogue, vocabulaire,
// grammaire, quiz et conclusion. Le professeur parle avec la synthèse vocale du navigateur.
(async function () {
  var $ = function (id) { return document.getElementById(id); };
  var NOMS = { en: 'anglais', es: 'espagnol', pt: 'portugais' };
  var ORDRE = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  var BONJOUR = { en: 'Hello!', es: '¡Hola!', pt: 'Olá!' };
  var BRAVO = { en: 'Well done!', es: '¡Muy bien!', pt: 'Muito bem!' };

  // ---- Leçon choisie : cours-3d.html?langue=en&niveau=A1 (même logique que lecon.js) ----
  var params = new URLSearchParams(location.search), parcours = null;
  try { parcours = JSON.parse(localStorage.getItem('lb-parcours')); } catch (e) {}
  var LANGUE = params.get('langue') || (parcours && parcours.langue);
  if (!NOMS[LANGUE]) LANGUE = 'en';
  function niveauxDispo(lg) { return ORDRE.filter(function (n) { return window.LECONS[lg + '-' + n]; }); }
  function niveauLecon(lg, voulu) {
    var dispo = niveauxDispo(lg), i = ORDRE.indexOf(voulu);
    if (i < 0) return dispo.indexOf('A2') !== -1 ? 'A2' : dispo[0];
    for (var k = i; k >= 0; k--) if (dispo.indexOf(ORDRE[k]) !== -1) return ORDRE[k];
    return dispo[0];
  }
  var NIVEAU = niveauLecon(LANGUE, params.get('niveau') || (parcours && parcours.langue === LANGUE ? parcours.niveau : 'A1'));
  var L = window.LECONS[LANGUE + '-' + NIVEAU];
  document.documentElement.dataset.lang = LANGUE;

  var variant = L.variantes[0].k;
  try { var sv = localStorage.getItem('lb-variant-' + LANGUE); if (L.variantes.some(function (x) { return x.k === sv; })) variant = sv; } catch (e) {}
  function v() { return L.variantes.filter(function (x) { return x.k === variant; })[0]; }
  function pick(x) { return (x && typeof x === 'object' && !Array.isArray(x)) ? x[variant] : x; }
  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    for (var k in attrs || {}) { if (k === 'class') n.className = attrs[k]; else n.setAttribute(k, attrs[k]); }
    if (text != null) n.textContent = text;
    return n;
  }
  function texteHTML(html) { var d = document.createElement('div'); d.innerHTML = html; return d.textContent.replace(/\s+/g, ' ').trim(); }
  // Découpe un passage HTML en morceaux à lire en français ou dans la langue cible (balises lang="…").
  function morceaux(html) {
    var d = document.createElement('div'), out = [];
    d.innerHTML = html.replace(/<br\s*\/?>/gi, ' . ');
    (function parcourir(n, cible) {
      if (n.nodeType === 3) {
        var t = n.textContent.replace(/\s+/g, ' ');
        if (!t.trim()) return;
        var dernier = out[out.length - 1];
        if (dernier && dernier.cible === cible) dernier.t += t; else out.push({ cible: cible, t: t });
        return;
      }
      var lg = n.getAttribute && n.getAttribute('lang');
      var c = lg ? lg !== 'fr' : cible;
      n.childNodes.forEach(function (x) { parcourir(x, c); });
    })(d, false);
    return out.map(function (m) { return { cible: m.cible, t: m.t.replace(/[«»"]/g, '').replace(/\s+/g, ' ').trim() }; })
      .filter(function (m) { return /[\p{L}\d]/u.test(m.t); });
  }
  function ligneDialogue(line) {
    return line.seg.map(function (s) {
      if (typeof s === 'string') return s;
      if (s.d) return s.d[variant];
      return pick(L.glossaire[s.w].word);
    }).join('');
  }
  function melanger(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  // ---- En-tête ----
  var PROF = L.profNom, FEM = L.prof !== 'rafael';
  document.title = 'Cours 3D avec ' + PROF + ' — ' + L.titre;
  $('top-avatar').textContent = L.profInitiale;
  $('top-name').textContent = 'Cours 3D avec ' + PROF;
  $('top-info').textContent = NOMS[LANGUE].charAt(0).toUpperCase() + NOMS[LANGUE].slice(1) + ' ' + NIVEAU + ' · ' + L.theme;
  $('start-title').textContent = L.titre;
  $('start-sub').textContent = PROF + ', ' + (FEM ? 'ta professeure' : 'ton professeur') + " d'" + NOMS[LANGUE] + ', te fait le cours : dialogue, vocabulaire, grammaire et quiz. Environ 10 minutes.';
  var selNiv = $('level-select');
  niveauxDispo(LANGUE).forEach(function (n) { var o = el('option', { value: n }, 'Niveau ' + n); if (n === NIVEAU) o.selected = true; selNiv.appendChild(o); });
  selNiv.addEventListener('change', function () { location.href = 'cours-3d.html?langue=' + LANGUE + '&niveau=' + selNiv.value; });
  var selLg = $('lang-select');
  ['en', 'es', 'pt'].forEach(function (k) { var o = el('option', { value: k }, NOMS[k].charAt(0).toUpperCase() + NOMS[k].slice(1)); if (k === LANGUE) o.selected = true; selLg.appendChild(o); });
  selLg.addEventListener('change', function () { location.href = 'cours-3d.html?langue=' + selLg.value + '&niveau=' + NIVEAU; });
  L.variantes.forEach(function (x) {
    var b = el('button', { type: 'button', 'aria-pressed': String(x.k === variant) }, x.label);
    b.addEventListener('click', function () {
      variant = x.k;
      try { localStorage.setItem('lb-variant-' + LANGUE, variant); } catch (e) {}
      $('variants').querySelectorAll('button').forEach(function (n) { n.setAttribute('aria-pressed', String(n === b)); });
      construire(); if (demarre) aller(Math.min(idx, etapes.length - 1));
    });
    $('variants').appendChild(b);
  });
  $('link-lecon').href = 'lecon.html?langue=' + LANGUE + '&niveau=' + NIVEAU;
  $('link-prof').href = 'professeur.html?prof=' + L.prof + '&niveau=' + NIVEAU;
  $('link-prof').textContent = 'Parler avec ' + PROF;

  // ---- Scène 3D ----
  var scene = window.THREE ? window.Classe3D.creer($('stage-canvas'), L.prof) : null;
  if (!scene) {
    $('stage').classList.add('no-3d');
    $('no-3d-msg').hidden = false;
    scene = { tableau: function () {}, parler: function () {}, impulsion: function () {}, geste: function () {}, humeur: function () {} };
  }

  // ---- Voix ----
  var synth = window.speechSynthesis || null, muet = false, vitesse = 1;
  function voixPour(lang) {
    if (!synth) return null;
    var norm = function (x) { return x.lang.replace('_', '-').toLowerCase(); }, toutes = synth.getVoices();
    return toutes.filter(function (x) { return norm(x) === lang.toLowerCase(); })[0] ||
      toutes.filter(function (x) { return norm(x).split('-')[0] === lang.split('-')[0].toLowerCase(); })[0] || null;
  }
  if (synth) synth.getVoices();
  // Dit une phrase ; renvoie une promesse résolue à la fin (ou à l'interruption).
  // Sans voix (son coupé, navigateur sans synthèse), on anime la bouche pendant un temps de lecture estimé.
  function dire(texte, cible, opts) {
    opts = opts || {};
    $('sub-who').textContent = opts.qui || PROF;
    var sub = $('sub-text');
    sub.textContent = texte; sub.lang = cible ? L.lang : 'fr';
    sub.classList.toggle('cible', !!cible);
    return new Promise(function (resolve) {
      var fini = false;
      function fin() { if (fini) return; fini = true; scene.parler(false); clearTimeout(garde); resolve(); }
      var lang = cible ? v().speech : 'fr-FR';
      var voix = voixPour(lang);
      var duree = Math.max(1200, texte.length * 62 / vitesse);
      var garde;
      scene.parler(true);
      if (muet || !synth || (!voix && synth.getVoices().length)) {
        if (!muet && synth && !voix) avertirVoix(cible);
        garde = setTimeout(fin, duree);
        enCours = { annuler: fin };
        return;
      }
      var u = new SpeechSynthesisUtterance(texte);
      u.lang = lang; if (voix) u.voice = voix;
      u.rate = vitesse * (cible ? 0.92 : 1);
      u.pitch = opts.pitch || 1;
      u.onboundary = function () { scene.impulsion(); };
      u.onend = fin; u.onerror = fin;
      // Certains navigateurs n'envoient jamais « onend » : garde-fou.
      garde = setTimeout(fin, duree * 2.5 + 4000);
      enCours = { annuler: function () { synth.cancel(); fin(); } };
      synth.speak(u);
    });
  }
  var averti = {};
  function avertirVoix(cible) {
    var k = cible ? 'cible' : 'fr';
    if (averti[k]) return; averti[k] = true;
    var box = $('voice-warn');
    box.hidden = false;
    box.textContent = 'Aucune voix en ' + (cible ? NOMS[LANGUE] : 'français') + " n'est installée sur cet appareil : " + PROF +
      ' parle en sous-titres. Pour l\'entendre, utilise Chrome ou Edge (voix en ligne incluses), ou ajoute une voix dans Windows : Paramètres → Heure et langue → Voix.';
  }
  var enCours = null;
  function couper() {
    if (enCours) { var c = enCours; enCours = null; c.annuler(); }
    if (recoEnCours) { var x = recoEnCours; recoEnCours = null; x.annuler(); }
    if (synth) synth.cancel();
  }

  // ---- Micro : le professeur écoute l'élève répéter (reconnaissance vocale du navigateur) ----
  var Reco = window.SpeechRecognition || window.webkitSpeechRecognition;
  var micro = !!Reco, recoEnCours = null, SEUIL_OK = 0.85;
  function normaliser(s) {
    return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[’`]/g, "'")
      .replace(/[^\p{L}\p{N}' ]+/gu, ' ').replace(/\s+/g, ' ').trim();
  }
  function distance(a, b) {
    var d = [], i, j;
    for (i = 0; i <= a.length; i++) d[i] = [i];
    for (j = 1; j <= b.length; j++) d[0][j] = j;
    for (i = 1; i <= a.length; i++) for (j = 1; j <= b.length; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[a.length][b.length];
  }
  function memeMot(a, b) { return a === b || (a.length >= 5 && distance(a, b) <= 1); }
  // Compare la phrase attendue et ce qui a été entendu, mot à mot (plus longue sous-suite commune).
  function evaluer(attendu, dit) {
    var mots = attendu.split(/\s+/).map(function (t) { return { t: t, n: normaliser(t) }; }).filter(function (m) { return m.n; });
    var entendus = normaliser(dit).split(' ').filter(Boolean);
    var A = mots.length, B = entendus.length, T = [], i, j;
    for (i = 0; i <= A; i++) { T[i] = []; for (j = 0; j <= B; j++) T[i][j] = 0; }
    for (i = A - 1; i >= 0; i--) for (j = B - 1; j >= 0; j--)
      T[i][j] = memeMot(mots[i].n, entendus[j]) ? T[i + 1][j + 1] + 1 : Math.max(T[i + 1][j], T[i][j + 1]);
    i = 0; j = 0;
    while (i < A && j < B) {
      if (memeMot(mots[i].n, entendus[j])) { mots[i].ok = true; i++; j++; }
      else if (T[i + 1][j] >= T[i][j + 1]) i++; else j++;
    }
    var bons = mots.filter(function (m) { return m.ok; }).length;
    return { texte: dit, score: A ? bons / A : 0, mots: mots };
  }
  function ecouter(attendu) {
    return new Promise(function (resolve) {
      var rec = new Reco(), fini = false, candidats = [], garde;
      rec.lang = v().speech; rec.interimResults = true; rec.maxAlternatives = 3; rec.continuous = false;
      function fin(x) { if (fini) return; fini = true; clearTimeout(garde); recoEnCours = null; try { rec.abort(); } catch (e) {} resolve(x); }
      rec.onresult = function (ev) {
        var debut = '', n = ev.results.length;
        for (var i = 0; i < n - 1; i++) debut += ev.results[i][0].transcript + ' ';
        candidats = [];
        for (var a = 0; a < ev.results[n - 1].length; a++) candidats.push((debut + ev.results[n - 1][a].transcript).trim());
        $('repeat-status').textContent = '🎙️ « ' + candidats[0] + ' »';
      };
      rec.onerror = function (ev) {
        if (ev.error === 'no-speech') return fin(evaluer(attendu, ''));
        if (ev.error === 'not-allowed' || ev.error === 'service-not-allowed') {
          micro = false; $('mic').checked = false;
          afficherAvert("Le micro est bloqué : autorise-le dans la barre d'adresse du navigateur (icône 🔒 ou 🎙️), puis réactive « Micro ».");
        } else if (ev.error === 'network') afficherAvert("La reconnaissance vocale a besoin d'internet. Le cours continue sans correction de prononciation.");
        else if (ev.error === 'language-not-supported') afficherAvert("Ce navigateur ne reconnaît pas la voix en " + NOMS[LANGUE] + '. Essaie Chrome ou Edge.');
        fin(null);
      };
      rec.onend = function () {
        if (!candidats.length) return fin(evaluer(attendu, ''));
        // On garde l'alternative la plus proche de la phrase attendue.
        fin(candidats.map(function (c) { return evaluer(attendu, c); }).sort(function (x, y) { return y.score - x.score; })[0]);
      };
      garde = setTimeout(function () { try { rec.stop(); } catch (e) {} }, Math.max(5000, attendu.length * 130));
      recoEnCours = { annuler: function () { fin(null); } };
      try { rec.start(); } catch (e) { fin(null); }
    });
  }
  function afficherAvert(t) { var b = $('voice-warn'); b.hidden = false; b.textContent = t; }
  function afficherResultat(res) {
    var box = $('repeat-result'); box.innerHTML = ''; box.hidden = false;
    var ligne = el('p', { class: 'said-words', lang: L.lang });
    res.mots.forEach(function (m) { ligne.appendChild(el('span', { class: m.ok ? 'w-ok' : 'w-ko' }, m.t)); ligne.appendChild(document.createTextNode(' ')); });
    box.appendChild(ligne);
    var pct = Math.round(res.score * 100);
    box.appendChild(el('p', { class: 'said' }, res.texte ? 'Tu as dit : « ' + res.texte + ' » · ' + pct + ' % des mots reconnus' : "Je n'ai rien entendu."));
  }
  async function momentRepeter(expr, r, essai) {
    scene.geste('ecoute'); scene.humeur('neutre');
    $('repeat').hidden = false; $('repeat-expr').textContent = expr; $('repeat-result').hidden = true;
    if (!micro) {
      $('repeat-status').textContent = '';
      await pause(Math.max(2200, expr.length * 110));
      if (r === run) { $('repeat').hidden = true; scene.geste('montre'); }
      return null;
    }
    $('repeat-status').textContent = '🎙️ Je t\'écoute…';
    var res = await ecouter(expr);
    if (r !== run || !res) { if (r === run) { $('repeat-status').textContent = ''; scene.geste('montre'); } return null; }
    $('repeat-status').textContent = res.score >= SEUIL_OK ? '✅ Bien prononcé !' : res.score >= 0.5 ? '🟠 Presque' : '🔁 À retravailler';
    afficherResultat(res);
    var phrase;
    if (res.score >= SEUIL_OK) {
      scene.humeur('content'); scene.geste('bravo');
      phrase = essai === 1 ? 'Parfait !' : "Bravo, c'est beaucoup mieux !";
    } else {
      scene.humeur('pensif'); scene.geste('explique');
      if (essai === 2) phrase = res.score >= 0.5 ? "C'est presque ça. On continue, tu pourras réécouter plus tard." : "Ce n'est pas grave, on continue. Tu pourras réécouter cette expression plus tard.";
      else if (!res.texte) phrase = "Je ne t'ai pas entendu. Écoute encore, puis répète.";
      else phrase = res.score >= 0.5 ? 'Presque ! Les mots en rouge sont à revoir. Écoute encore :' : 'Pas tout à fait. Écoute bien :';
    }
    await dire(phrase, false);
    return res;
  }
  function pause(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

  // ---- Construction du cours ----
  // Une étape = { chap, tableau, phrases: [{ t, cible, qui, pitch }], geste, humeur, repeter, quiz }
  var etapes = [], chapitres = [];
  function P(t, cible, extra) { var p = { t: t, cible: !!cible }; for (var k in extra || {}) p[k] = extra[k]; return p; }
  function construire() {
    etapes = []; chapitres = [];
    function chap(nom) { chapitres.push({ nom: nom, debut: etapes.length }); }
    var ville = L.ville ? pick(L.ville) : '';
    var intro = (L.intro || '').replace('{ville}', ville);

    chap('Accueil');
    etapes.push({
      geste: 'salut', humeur: 'content',
      tableau: { titre: L.titre, lignes: [{ t: 'Niveau ' + NIVEAU + ' · ' + L.theme, style: 'petit' }, { t: BONJOUR[LANGUE], style: 'grand' }, { t: L.etape1, style: 'texte' }] },
      phrases: [P(BONJOUR[LANGUE], true), P('Bonjour ! Je suis ' + PROF + ', ' + (FEM ? 'ta professeure' : 'ton professeur') + " d'" + NOMS[LANGUE] + '.'),
        P("Aujourd'hui, leçon de niveau " + NIVEAU + ' : ' + L.theme.toLowerCase() + '. ' + intro),
        P("On va écouter un dialogue, apprendre le vocabulaire, voir un point de grammaire, et finir par un petit quiz. C'est parti !")]
    });

    chap('Dialogue');
    etapes.push({
      geste: 'montre',
      tableau: { titre: 'Le dialogue', lignes: [{ t: L.etape1, style: 'texte' }, { t: 'Écoute bien, puis répète dans ta tête.', style: 'fr' }] },
      phrases: [P('Écoute bien le dialogue. Je lis chaque réplique, et la traduction est au tableau.')]
    });
    L.dialogue.forEach(function (line, i) {
      var perso = L.personnages[line.who] || { nom: '' }, texte = ligneDialogue(line);
      etapes.push({
        geste: 'explique',
        tableau: { titre: 'Dialogue · ' + (i + 1) + ' / ' + L.dialogue.length, lignes: [{ t: perso.nom + ' :', style: 'petit' }, { t: texte, style: 'cible' }, { t: line.fr, style: 'fr' }] },
        phrases: [P(texte, true, { qui: perso.nom + ' (lu par ' + PROF + ')', pitch: line.who === 'C' ? 1.12 : 0.9 })]
      });
    });

    chap('Vocabulaire');
    var voc = L.vocabulaire.slice(0, 8);
    etapes.push({
      geste: 'explique',
      tableau: { titre: 'Vocabulaire', lignes: [{ t: voc.length + ' expressions à retenir', style: 'texte' }, { t: 'Écoute, puis répète à voix haute.', style: 'fr' }] },
      phrases: [P('Maintenant, le vocabulaire. Je dis chaque expression, et toi, tu la répètes à voix haute.')]
    });
    voc.forEach(function (x, i) {
      var expr = pick(x.en).replace(/…/g, ''), ex = pick(x.ex);
      var lignes = [{ t: pick(x.en), style: 'grand' }, { t: x.fr, style: 'fr' }];
      if (ex) lignes.push({ t: 'Ex. : ' + ex, style: 'texte' });
      etapes.push({
        geste: 'montre', repeter: expr,
        tableau: { titre: 'Vocabulaire · ' + (i + 1) + ' / ' + voc.length, lignes: lignes },
        phrases: [P(expr, true), P(x.fr.replace(/\(.*?\)/g, '')), P('Répète !'), P(expr, true)]
      });
    });

    chap('Grammaire');
    var gTitre = texteHTML(L.grammaireTitre);
    var d = document.createElement('div'); d.innerHTML = L.grammaire;
    var regle = d.querySelector('.rule'), regleHTML = regle ? regle.innerHTML.replace(/<strong>La règle<\/strong>(<br>)?/i, '') : L.grammaire;
    var exemples = [];
    d.querySelectorAll('tbody tr').forEach(function (tr, k) {
      if (k >= 4) return;
      var td = tr.querySelectorAll('td');
      if (td.length >= 2) exemples.push({ t: td[0].textContent.trim() + '  →  ' + td[1].textContent.trim(), style: 'texte' });
    });
    etapes.push({
      geste: 'explique',
      tableau: { titre: gTitre, lignes: [{ t: texteHTML(regleHTML), style: 'texte' }] },
      phrases: [P('Passons à la grammaire : ' + gTitre.replace(/[«»"]/g, '') + '.')].concat(morceaux(regleHTML).map(function (m) { return P(m.t, m.cible); }))
    });
    if (exemples.length) etapes.push({
      geste: 'montre',
      tableau: { titre: 'Exemples', lignes: exemples },
      phrases: [P('Quelques exemples au tableau.')].concat(exemples.map(function (e) {
        var parts = e.t.split('  →  '); return P(parts[0], true);
      }))
    });

    chap('Quiz');
    var quiz = L.bilan.slice(0, 5);
    etapes.push({
      geste: 'explique', humeur: 'content',
      tableau: { titre: 'Quiz', lignes: [{ t: quiz.length + ' questions', style: 'texte' }, { t: 'Réponds avec les boutons sous la salle de classe.', style: 'fr' }] },
      phrases: [P('À toi de jouer ! ' + quiz.length + ' petites questions. Réponds avec les boutons sous la salle de classe.')]
    });
    quiz.forEach(function (q, i) {
      var opts = melanger(q.opts.map(function (o, k) { return { t: pick(o), bon: k === q.a }; }));
      etapes.push({
        geste: 'ecoute',
        tableau: { titre: 'Question ' + (i + 1) + ' / ' + quiz.length, lignes: [{ t: q.q, style: 'texte' }].concat(opts.map(function (o, k) { return { t: 'ABC'[k] + '.  ' + o.t, style: 'option' }; })) },
        phrases: [P(q.q.replace(/[«»"]/g, ''))],
        quiz: { opts: opts, why: q.why, cible: q.cible, n: i }
      });
    });

    chap('Conclusion');
    etapes.push({ fin: true, geste: 'bravo', humeur: 'content', tableau: null, phrases: [] });
    renderChapitres();
  }

  // ---- Déroulé ----
  var idx = 0, run = 0, demarre = false, enPause = false, scores = {};
  function renderChapitres() {
    var ol = $('chapters'); ol.innerHTML = '';
    chapitres.forEach(function (c, k) {
      var li = el('li'), b = el('button', { class: 'chap-btn', type: 'button', 'data-k': k });
      b.appendChild(el('span', { class: 'num', 'aria-hidden': 'true' }, String(k + 1)));
      b.appendChild(el('span', null, c.nom));
      b.addEventListener('click', function () { if (!demarre) commencer(); aller(c.debut); });
      li.appendChild(b); ol.appendChild(li);
    });
    majChapitre();
  }
  function chapitreDe(i) { var k = 0; chapitres.forEach(function (c, j) { if (c.debut <= i) k = j; }); return k; }
  function majChapitre() {
    var k = chapitreDe(idx);
    document.querySelectorAll('.chap-btn').forEach(function (b, j) {
      if (j === k && demarre) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current');
      b.classList.toggle('done', j < k);
    });
    $('progress-bar').style.width = (demarre ? Math.round(idx / Math.max(1, etapes.length - 1) * 100) : 0) + '%';
    $('prev').disabled = idx === 0;
    $('next').disabled = idx >= etapes.length - 1;
  }
  function majTableauTexte(t) {
    var box = $('board-text'); box.innerHTML = '';
    if (!t) return;
    box.appendChild(el('strong', null, t.titre));
    t.lignes.forEach(function (l) { var p = el('p', { class: 'b-' + l.style }, l.t); if (l.style === 'cible' || l.style === 'grand' || l.style === 'option') p.lang = L.lang; box.appendChild(p); });
  }

  function aller(i) {
    run++; couper();
    idx = Math.max(0, Math.min(etapes.length - 1, i));
    enPause = false; majPause();
    jouer(run);
  }

  async function jouer(r) {
    var e = etapes[idx];
    majChapitre();
    $('answers').innerHTML = ''; $('answers').hidden = true;
    $('repeat').hidden = true; $('end-card').hidden = true;
    scene.humeur(e.humeur || 'neutre');
    scene.geste(e.geste || 'repos');
    if (e.fin) return conclure(r);
    scene.tableau(e.tableau); majTableauTexte(e.tableau);
    if (window.LBProgres && idx === 0) LBProgres.activite(0);
    await pause(350);
    for (var k = 0; k < e.phrases.length; k++) {
      if (r !== run) return;
      var p = e.phrases[k];
      var essai1 = null;
      if (k === e.phrases.length - 1 && e.repeter) {
        // Moment où l'élève répète ; avec le micro, le professeur écoute et corrige.
        essai1 = await momentRepeter(e.repeter, r, 1);
        if (r !== run) return;
        if (essai1 && essai1.score >= SEUIL_OK) break; // parfait : pas besoin de redonner le modèle
      }
      await dire(p.t, p.cible, p);
      if (r !== run) return;
      await pause(p.cible ? 380 : 220);
      if (essai1) { // deuxième essai après avoir réentendu le modèle
        await momentRepeter(e.repeter, r, 2);
        if (r !== run) return;
      }
    }
    if (r !== run) return;
    if (e.quiz) {
      var ok = await poserQuestion(e.quiz, r);
      if (r !== run) return;
      if (ok) { scene.humeur('content'); scene.geste('bravo'); await dire(pick(BRAVO[LANGUE]) , true); }
      else {
        scene.humeur('pensif'); scene.geste('explique');
        var bonne = e.quiz.opts.filter(function (o) { return o.bon; })[0].t;
        await dire('Pas tout à fait. La bonne réponse :', false);
        if (r !== run) return;
        await dire(bonne, !!e.quiz.cible);
      }
      if (r !== run) return;
      await dire(e.quiz.why.replace(/[«»"]/g, ''), false);
      if (r !== run) return;
      await pause(600);
    }
    if (r !== run) return;
    if (idx < etapes.length - 1) { idx++; jouer(r); }
  }

  function poserQuestion(q, r) {
    return new Promise(function (resolve) {
      var box = $('answers'); box.innerHTML = ''; box.hidden = false;
      box.appendChild(el('p', { class: 'answers-label' }, 'Ta réponse :'));
      var grille = el('div', { class: 'answers-grid' }); box.appendChild(grille);
      q.opts.forEach(function (o, k) {
        var b = el('button', { class: 'option', type: 'button' });
        b.appendChild(el('span', { class: 'key', 'aria-hidden': 'true' }, 'ABC'[k]));
        var s = el('span', null, o.t); if (q.cible) s.lang = L.lang; b.appendChild(s);
        b.addEventListener('click', function () {
          if (r !== run) return;
          couper();
          grille.querySelectorAll('button').forEach(function (x, j) { x.disabled = true; if (q.opts[j].bon) x.classList.add('correct'); });
          if (!o.bon) b.classList.add('wrong');
          scores[q.n] = o.bon;
          resolve(o.bon);
        });
        grille.appendChild(b);
      });
      grille.querySelector('button').focus({ preventScroll: true });
    });
  }

  async function conclure(r) {
    var total = L.bilan.slice(0, 5).length, bons = Object.keys(scores).filter(function (k) { return scores[k]; }).length;
    var repondu = Object.keys(scores).length;
    var t = { titre: 'Bravo !', lignes: [
      { t: repondu ? 'Quiz : ' + bons + ' / ' + total : 'Cours terminé', style: 'grand' },
      { t: texteHTML(L.conseil), style: 'texte' }
    ] };
    scene.tableau(t); majTableauTexte(t);
    if (window.LBProgres && repondu) LBProgres.activite(bons * 10 + 10);
    $('end-score').textContent = repondu ? bons + ' bonne' + (bons > 1 ? 's' : '') + ' réponse' + (bons > 1 ? 's' : '') + ' sur ' + total + (bons ? ' · +' + (bons * 10 + 10) + ' XP' : '') : 'Tu as suivi le cours jusqu\'au bout.';
    $('end-card').hidden = false;
    await pause(300);
    var phrases = [P(repondu ? (bons >= Math.ceil(total * 0.75) ? 'Excellent travail !' : 'Bon travail !') + ' Tu as ' + bons + ' bonne' + (bons > 1 ? 's' : '') + ' réponse' + (bons > 1 ? 's' : '') + ' sur ' + total + '.' : 'Et voilà, le cours est terminé !'),
      P('Mon conseil :')].concat(morceaux(L.conseil).map(function (m) { return P(m.t, m.cible); }))
      .concat([P('Pour aller plus loin, ouvre la leçon complète, ou viens parler avec moi. À bientôt !')]);
    for (var k = 0; k < phrases.length; k++) {
      if (r !== run) return;
      await dire(phrases[k].t, phrases[k].cible);
      await pause(200);
    }
    if (r === run) scene.geste('salut');
  }

  // ---- Commandes ----
  function majPause() {
    $('pause').textContent = enPause ? '▶ Reprendre' : '⏸ Pause';
    $('pause').setAttribute('aria-pressed', String(enPause));
  }
  function commencer() {
    if (demarre) return;
    demarre = true;
    $('start').hidden = true;
    $('controls').hidden = false;
    if (window.LBMesure) LBMesure.evt('cours3d_debut', { lecon: LANGUE + '-' + NIVEAU });
  }
  $('start-btn').addEventListener('click', function () { commencer(); aller(0); });
  $('pause').addEventListener('click', function () {
    if (!enPause) { enPause = true; run++; couper(); scene.parler(false); majPause(); $('sub-text').textContent = 'En pause.'; }
    else aller(idx); // reprend l'étape en cours depuis le début
  });
  $('prev').addEventListener('click', function () { aller(idx - 1); });
  $('next').addEventListener('click', function () { aller(idx + 1); });
  $('replay').addEventListener('click', function () { aller(idx); });
  $('restart').addEventListener('click', function () { scores = {}; aller(0); });
  $('sound').addEventListener('change', function () { muet = !$('sound').checked; aller(idx); });
  document.querySelectorAll('[data-rate]').forEach(function (b) {
    b.addEventListener('click', function () {
      vitesse = Number(b.dataset.rate);
      document.querySelectorAll('[data-rate]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
    });
  });
  document.addEventListener('keydown', function (e) {
    if (!demarre || /INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); aller(idx + 1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); aller(idx - 1); }
  });
  if (Reco) {
    $('mic-label').hidden = false; $('mic-note').hidden = false;
    $('mic').addEventListener('change', function () { micro = $('mic').checked; });
  }
  if (!synth) { $('sound').checked = false; $('sound').disabled = true; muet = true; avertirVoix(false); }
  window.addEventListener('pagehide', couper);

  $('theme-toggle').addEventListener('click', function () {
    var root = document.documentElement;
    var dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('lb-theme', root.dataset.theme); } catch (e) {}
  });

  construire();
  scene.tableau({ titre: L.titre, lignes: [{ t: 'Niveau ' + NIVEAU + ' · ' + L.theme, style: 'petit' }, { t: BONJOUR[LANGUE], style: 'grand' }, { t: 'Appuie sur « Commencer le cours ».', style: 'fr' }] });
  scene.geste('salut');
})();
