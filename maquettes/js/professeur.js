// Script de la page professeur.html
(function () {
  var PROFS = {
    emma:   { nom: 'Emma',   initiale: 'E', lang: 'en', langue: 'Anglais',   variantes: [['UK', '🇬🇧 Royaume-Uni', 'en-GB'], ['US', '🇺🇸 États-Unis', 'en-US']] },
    lucia:  { nom: 'Lucía',  initiale: 'L', lang: 'es', langue: 'Espagnol',  variantes: [['ES', '🇪🇸 Espagne', 'es-ES'], ['LATAM', '🌎 Amérique latine', 'es-MX']] },
    rafael: { nom: 'Rafael', initiale: 'R', lang: 'pt', langue: 'Portugais', variantes: [['BR', '🇧🇷 Brésil', 'pt-BR'], ['PT', '🇵🇹 Portugal', 'pt-PT']] }
  };
  var MODES = { conversation: 'Conversation', jeu_de_role: 'Jeu de rôle', grammaire: 'Grammaire', correction_texte: 'Correction de texte', simulation_examen: "Simulation d'examen", prononciation: 'Prononciation' };
  var OUVERTURE = "[Début de séance. Salue-moi et lance l'activité choisie, en respectant mon niveau.]";
  var FIN = "J'ai terminé pour aujourd'hui. Tu peux me faire le bilan de la séance ?";

  var $ = function (id) { return document.getElementById(id); };
  var state = { prof: 'emma', session: null, history: [], busy: false, saved: [] };

  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) { if (k === 'class') n.className = attrs[k]; else n.setAttribute(k, attrs[k]); });
    if (text != null) n.textContent = text;
    return n;
  }
  function variantInfo() { return PROFS[state.prof].variantes.filter(function (v) { return v[0] === $('f-variante').value; })[0]; }

  // ---- Configuration ----
  function selectProf(key) {
    state.prof = key;
    document.querySelectorAll('.prof-opt').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.prof === key); });
    document.documentElement.dataset.lang = PROFS[key].lang;
    var sel = $('f-variante'); sel.innerHTML = '';
    PROFS[key].variantes.forEach(function (v) { sel.appendChild(el('option', { value: v[0] }, v[1])); });
    $('top-avatar').textContent = PROFS[key].initiale;
  }
  document.querySelectorAll('.prof-opt').forEach(function (b) { b.addEventListener('click', function () { selectProf(b.dataset.prof); }); });

  // Réglages pré-remplis par un lien (?prof=lucia&mode=jeu_de_role&niveau=B1&variante=LATAM&sujet=…),
  // sinon par « Mon parcours » (parcours.html).
  var params = new URLSearchParams(location.search), parcours = null;
  try { parcours = JSON.parse(localStorage.getItem('lb-parcours')); } catch (e) {}
  var PROF_DE_LANGUE = { en: 'emma', es: 'lucia', pt: 'rafael' };
  selectProf(PROFS[params.get('prof')] ? params.get('prof') : (parcours && PROF_DE_LANGUE[parcours.langue]) || 'emma');
  var memeLangue = parcours && PROF_DE_LANGUE[parcours.langue] === state.prof;
  function preRemplir(id, valeur) {
    var sel = $(id);
    if (valeur && Array.prototype.some.call(sel.options, function (o) { return (o.value || o.textContent) === valeur; })) sel.value = valeur;
  }
  preRemplir('f-variante', params.get('variante') || (memeLangue && parcours.variante));
  preRemplir('f-niveau', params.get('niveau') || (memeLangue && parcours.niveau));
  preRemplir('f-mode', params.get('mode'));
  preRemplir('f-objectif', params.get('objectif') || (parcours && parcours.objectif));
  $('f-prenom').value = (params.get('prenom') || (parcours && parcours.prenom) || '').slice(0, 40);
  $('f-interets').value = (params.get('interets') || (parcours && parcours.interets) || '').slice(0, 200);
  var sujet = (params.get('sujet') || '').slice(0, 300);
  if (sujet) OUVERTURE = OUVERTURE.replace(/\]$/, ' Situation demandée : ' + sujet + ']');

  $('start').addEventListener('click', function () {
    state.session = {
      prof: state.prof, variante: $('f-variante').value, niveau: $('f-niveau').value, mode: $('f-mode').value,
      canal: $('f-vocal').checked ? 'vocal' : 'texte', objectif: $('f-objectif').value,
      prenom: $('f-prenom').value.trim(), interets: $('f-interets').value.trim()
    };
    $('autospeak').checked = state.session.canal === 'vocal';
    $('top-name').textContent = PROFS[state.prof].nom;
    majInfo();
    $('setup').hidden = true; $('chat').classList.add('on'); $('end').hidden = false; $('niveaux').hidden = false;
    state.history = [{ role: 'user', content: OUVERTURE }];
    envoyer();
  });
  function majInfo() {
    var p = PROFS[state.prof], v = variantInfo(), i = NIVEAUX.indexOf(state.session.niveau);
    $('top-info').textContent = p.langue + ' · ' + v[1] + ' · ' + state.session.niveau + ' · ' + MODES[state.session.mode];
    $('lvl-down').disabled = i <= 0; $('lvl-up').disabled = i >= NIVEAUX.length - 1;
  }

  // ---- Changer de niveau pendant la séance ----
  var NIVEAUX = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  function changerNiveau(sens) {
    if (state.busy || !state.session) return;
    var i = NIVEAUX.indexOf(state.session.niveau) + sens;
    if (i < 0 || i >= NIVEAUX.length) return;
    state.session.niveau = NIVEAUX[i];
    majInfo();
    var avis = el('p', { class: 'notice', role: 'status' }, (sens > 0 ? '⬆️ Plus difficile : ' : '⬇️ Plus facile : ') + 'niveau ' + NIVEAUX[i] + '.');
    $('thread').appendChild(avis);
    state.history.push({ role: 'user', content: '[Réglage de la séance : je passe au niveau ' + NIVEAUX[i] + '. Adapte ta façon de parler, tes explications et tes exercices à ce niveau à partir de maintenant, dis-le-moi en une phrase, puis continue l\'activité.]' });
    envoyer();
  }
  $('lvl-down').addEventListener('click', function () { changerNiveau(-1); });
  $('lvl-up').addEventListener('click', function () { changerNiveau(1); });

  // ---- Échanges ----
  function envoyer() {
    if (location.protocol === 'file:') {
      return afficherErreur("Le professeur IA a besoin d'un serveur. Lance « npm run dev » dans le dossier du projet, puis ouvre http://localhost:3000/maquettes/professeur.html (ou utilise le site déployé sur Vercel).");
    }
    state.busy = true; $('send').disabled = true;
    var typing = el('p', { class: 'typing' }, PROFS[state.prof].nom + ' écrit…');
    $('thread').appendChild(typing); typing.scrollIntoView({ block: 'end' });
    var body = Object.assign({}, state.session, { messages: state.history });
    // Au-delà de 90 s, on abandonne plutôt que de laisser « … écrit » sans fin.
    var ctrl = window.AbortController ? new AbortController() : null;
    var minuteur = ctrl && setTimeout(function () { ctrl.abort(); }, 90000);
    fetch('/api/professeur', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), signal: ctrl && ctrl.signal })
      .then(function (r) {
        return r.json().catch(function () {
          if (r.status === 404 || r.status === 405 || r.status === 501) {
            return { erreur: "Cette page n'est pas servie par le serveur du projet, donc le professeur IA n'est pas joignable. Utilise le site en ligne (linguaboost-prototype.vercel.app) ou lance « npm run dev » puis ouvre http://localhost:3000/maquettes/professeur.html.", fatale: true };
          }
          return { erreur: 'Réponse du serveur illisible (code ' + r.status + ').' };
        });
      })
      .then(function (res) {
        if (res.erreur || !res.donnees) return echec(res.erreur || 'Erreur inconnue.', res.fatale);
        state.history.push({ role: 'assistant', content: res.brut });
        afficherReponse(res.donnees);
      })
      .catch(function (err) {
        echec(err && err.name === 'AbortError'
          ? PROFS[state.prof].nom + " met trop de temps à répondre. Réessaie, ou envoie une demande plus courte."
          : 'Impossible de joindre le serveur. Vérifie ta connexion internet.');
      })
      .then(function () { clearTimeout(minuteur); typing.remove(); state.busy = false; $('send').disabled = false; $('input').focus(); });
  }

  // Le message non traité est mis de côté : le bouton « Réessayer » le renvoie tel quel.
  function echec(msg, fatale) {
    var enAttente = state.history.pop();
    afficherErreur(msg, fatale ? null : function () {
      state.history.push(enAttente);
      envoyer();
    });
  }

  function afficherErreur(msg, reessayer) {
    var e = el('div', { class: 'error', role: 'alert' });
    e.appendChild(document.createTextNode('⚠️ ' + msg + ' '));
    if (reessayer) {
      var b = el('button', { class: 'btn btn-ghost btn-sm', type: 'button', style: 'margin-top:8px;' }, '↻ Réessayer');
      b.addEventListener('click', function () { if (state.busy) return; e.remove(); reessayer(); });
      e.appendChild(b);
    }
    $('thread').appendChild(e); e.scrollIntoView({ block: 'end' });
  }

  function afficherReponse(d) {
    var box = el('div', { class: 'msg bot' });
    var lang = variantInfo()[2];
    var bubble = el('div', { class: 'bubble', lang: lang });
    bubble.appendChild(document.createTextNode(d.reponse));
    if (d.question_relance) bubble.appendChild(el('span', { class: 'relance' }, d.question_relance));
    box.appendChild(bubble);
    var toSpeak = (d.reponse + ' ' + (d.question_relance || '')).trim();
    if (window.speechSynthesis) {
      var sp = el('button', { class: 'speak', type: 'button' }, '🔊 Écouter');
      sp.addEventListener('click', function () { parler(toSpeak); });
      box.appendChild(sp);
    }

    if (d.corrections && d.corrections.length) {
      var p = el('div', { class: 'panel' }); p.appendChild(el('h3', null, '✏️ Corrections'));
      var wrap = el('div', { class: 'table-scroll' }), t = el('table');
      t.innerHTML = '<thead><tr><th>Tu as écrit</th><th>Forme correcte</th><th>Pourquoi</th></tr></thead>';
      var tb = el('tbody');
      d.corrections.forEach(function (c) {
        var tr = el('tr');
        var a = el('td', { lang: lang }); a.appendChild(el('del', null, c.original));
        var b = el('td', { lang: lang }); b.appendChild(el('ins', null, c.correction));
        var w = el('td'); w.appendChild(document.createTextNode(c.explication + ' ')); w.appendChild(el('span', { class: 'tag' }, c.type.replace('_', ' ')));
        tr.appendChild(a); tr.appendChild(b); tr.appendChild(w); tb.appendChild(tr);
      });
      t.appendChild(tb); wrap.appendChild(t); p.appendChild(wrap); box.appendChild(p);
    }
    if (d.version_naturelle || d.a_toi) {
      var n = el('div', { class: 'panel' }), nb = el('div', { class: 'body' });
      if (d.version_naturelle) nb.appendChild(el('div', { lang: lang }, '💡 Plus naturel : ' + d.version_naturelle));
      if (d.a_toi) nb.appendChild(el('div', null, '🔁 À toi : ' + d.a_toi));
      n.appendChild(nb); box.appendChild(n);
    }
    if (d.vocabulaire_nouveau && d.vocabulaire_nouveau.length) box.appendChild(panneauVocab('📚 Nouveau vocabulaire', d.vocabulaire_nouveau, lang));
    if (d.score_estime) {
      box.appendChild(el('div', { class: 'estimate' }, '📊 ' + d.score_estime.examen + ' : ' + d.score_estime.score + '. ' + d.score_estime.detail + ' (estimation indicative, pas un résultat officiel)'));
    }
    if (d.bilan) box.appendChild(panneauBilan(d.bilan, lang));

    $('thread').appendChild(box);
    box.scrollIntoView({ block: 'start', behavior: 'smooth' });
    if ($('autospeak').checked) parler(toSpeak);
    if (d.fin_de_seance) { $('end').hidden = true; }
  }

  function panneauVocab(titre, items, lang) {
    var p = el('div', { class: 'panel' }); p.appendChild(el('h3', null, titre));
    var body = el('div', { class: 'body' }), chips = el('div', { class: 'chips' });
    items.forEach(function (v) {
      var deja = state.saved.indexOf(v.terme) !== -1;
      var c = el('button', { class: 'chip', type: 'button', 'aria-pressed': deja ? 'true' : 'false', title: v.exemple, lang: lang }, (deja ? '✓ ' : '＋ ') + v.terme + ' = ' + v.traduction);
      c.addEventListener('click', function () {
        if (state.saved.indexOf(v.terme) === -1) state.saved.push(v.terme);
        c.setAttribute('aria-pressed', 'true'); c.textContent = '✓ ' + v.terme + ' = ' + v.traduction;
      });
      chips.appendChild(c);
    });
    body.appendChild(chips);
    body.appendChild(el('p', { class: 'note', style: 'margin:4px 0 0;' }, 'Touche une expression pour l\'ajouter à tes révisions.'));
    p.appendChild(body); return p;
  }

  function panneauBilan(b, lang) {
    var p = el('div', { class: 'panel' }); p.appendChild(el('h3', null, '🏁 Bilan de la séance · niveau estimé ' + b.niveau_seance + ' (indicatif)'));
    var body = el('div', { class: 'body' });
    body.appendChild(el('strong', null, '✅ Réussi'));
    b.points_reussis.forEach(function (x) { body.appendChild(el('div', null, '• ' + x)); });
    if (b.erreurs.length) {
      body.appendChild(el('strong', null, '🔁 À retravailler'));
      b.erreurs.forEach(function (x) {
        var d = el('div', { lang: lang }); d.appendChild(el('del', null, x.erreur)); d.appendChild(document.createTextNode(' → ')); d.appendChild(el('ins', null, x.correction));
        body.appendChild(d);
      });
    }
    body.appendChild(el('strong', null, '💡 Conseil pour la prochaine fois'));
    body.appendChild(el('div', null, b.conseil));
    p.appendChild(body);
    var wrap = el('div'); wrap.appendChild(p);
    if (b.flashcards.length) wrap.appendChild(panneauVocab('🗂️ À ajouter aux flashcards', b.flashcards, lang));
    return wrap;
  }

  $('composer').addEventListener('submit', function (e) {
    e.preventDefault();
    var txt = $('input').value.trim();
    if (!txt || state.busy) return;
    $('thread').appendChild(el('p', { class: 'msg me', lang: variantInfo()[2] }, txt));
    state.history.push({ role: 'user', content: txt });
    $('input').value = '';
    envoyer();
  });
  $('input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); $('composer').requestSubmit(); }
  });
  $('end').addEventListener('click', function () {
    if (state.busy) return;
    $('thread').appendChild(el('p', { class: 'msg me' }, FIN));
    state.history.push({ role: 'user', content: FIN });
    envoyer();
  });

  // ---- Voix (navigateur) ----
  // Voix exacte (pt-PT), sinon une voix de la même langue (pt-BR) : beaucoup d'appareils n'ont pas toutes les variantes.
  function voixPour(lang) {
    var norm = function (v) { return v.lang.replace('_', '-').toLowerCase(); }, toutes = speechSynthesis.getVoices();
    return toutes.filter(function (v) { return norm(v) === lang.toLowerCase(); })[0] ||
      toutes.filter(function (v) { return norm(v).split('-')[0] === lang.split('-')[0].toLowerCase(); })[0] || null;
  }
  var avertiVoix = false;
  function parler(texte) {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(texte);
    u.lang = variantInfo()[2];
    var voix = voixPour(u.lang);
    if (voix) u.voice = voix;
    else if (speechSynthesis.getVoices().length && !avertiVoix) {
      avertiVoix = true;
      afficherErreur("Aucune voix en " + PROFS[state.prof].langue.toLowerCase() + " n'est installée sur cet appareil : la lecture risque d'être muette ou avec un mauvais accent. Utilise Chrome ou Edge (voix en ligne incluses), ou ajoute une voix dans Windows : Paramètres → Heure et langue → Voix.");
    }
    speechSynthesis.speak(u);
  }
  if (window.speechSynthesis) speechSynthesis.getVoices(); // lance le chargement des voix
  var Reco = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (Reco) {
    var reco = null;
    $('mic').hidden = false;
    $('mic').addEventListener('click', function () {
      if (reco) { reco.stop(); return; }
      reco = new Reco();
      reco.lang = variantInfo()[2]; reco.interimResults = true;
      var base = $('input').value;
      reco.onresult = function (ev) {
        var t = ''; for (var i = 0; i < ev.results.length; i++) t += ev.results[i][0].transcript;
        $('input').value = (base ? base + ' ' : '') + t;
      };
      reco.onend = function () { reco = null; $('mic').setAttribute('aria-pressed', 'false'); };
      reco.onerror = function (ev) {
        if (ev.error === 'no-speech' || ev.error === 'aborted') return;
        afficherErreur(ev.error === 'not-allowed' || ev.error === 'service-not-allowed'
          ? "Micro refusé : autorise l'accès au micro (icône à gauche de l'adresse du site), puis réessaie."
          : ev.error === 'language-not-supported'
            ? 'La dictée dans cette langue n\'est pas prise en charge par ce navigateur. Essaie avec Chrome ou Edge.'
            : 'Micro indisponible (' + ev.error + '). Essaie avec Chrome ou Edge.');
      };
      $('mic').setAttribute('aria-pressed', 'true');
      reco.start();
    });
  }

  $('theme-toggle').addEventListener('click', function () {
    var root = document.documentElement;
    var dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('lb-theme', root.dataset.theme); } catch (e) {}
  });
})();
