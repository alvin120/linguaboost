// Script de la page lecon.html
(function () {
  // ---- Leçon choisie : lecon.html?langue=en|es|pt&niveau=A1|A2|B1 ----
  // Sans paramètre, on suit « Mon parcours » (parcours.html), sinon anglais A2.
  var NOMS = { en: 'Anglais', es: 'Espagnol', pt: 'Portugais' };
  var ORDRE = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  var params = new URLSearchParams(location.search), parcours = null;
  try { parcours = JSON.parse(localStorage.getItem('lb-parcours')); } catch (e) {}
  var LANGUE = params.get('langue') || (parcours && parcours.langue);
  if (!NOMS[LANGUE]) LANGUE = 'en';
  function niveauxDispo(lg) { return ORDRE.filter(function (n) { return window.LECONS[lg + '-' + n]; }); }
  // Niveau demandé, ramené au niveau disponible le plus proche (B2 → B1…).
  function niveauLecon(lg, voulu) {
    var dispo = niveauxDispo(lg), i = ORDRE.indexOf(voulu);
    if (i < 0) return dispo.indexOf('A2') !== -1 ? 'A2' : dispo[0];
    for (var k = i; k >= 0; k--) if (dispo.indexOf(ORDRE[k]) !== -1) return ORDRE[k];
    return dispo[0];
  }
  var NIVEAU = niveauLecon(LANGUE, params.get('niveau') || (parcours && parcours.langue === LANGUE ? parcours.niveau : 'A2'));
  var ID = LANGUE + '-' + NIVEAU;
  var L = window.LECONS[ID];
  document.documentElement.dataset.lang = LANGUE;

  // Modifications faites dans l'éditeur (editeur.html), enregistrées dans ce navigateur.
  var CLE_PERSO = 'lb-lecon-perso-' + ID, perso = null;
  try { perso = JSON.parse(localStorage.getItem(CLE_PERSO)); } catch (e) {}
  if (perso && typeof perso === 'object') {
    ['titre', 'theme', 'etape1', 'intro', 'conseil', 'dialogue', 'vocabulaire', 'comprehension', 'bilan'].forEach(function (k) {
      if (perso[k] != null) L[k] = perso[k];
    });
  } else perso = null;

  var dialogue = L.dialogue, glossary = L.glossaire, vocab = L.vocabulaire;
  var steps = ['Découverte', 'Compréhension', 'Vocabulaire', 'Grammaire', 'Pratique', 'Production', 'Culture', 'Bilan'];

  // ---- État ----
  var state = { variant: L.variantes[0].k, step: 1, rate: 1, xp: 0, saved: [] };
  var CLE_VARIANTE = 'lb-variant-' + LANGUE;
  try { var sv = localStorage.getItem(CLE_VARIANTE); if (L.variantes.some(function (x) { return x.k === sv; })) state.variant = sv; } catch (e) {}

  function variante() { return L.variantes.filter(function (x) { return x.k === state.variant; })[0]; }
  // Un objet indexé par variante renvoie le texte de la variante choisie.
  function pick(x) { return (x && typeof x === 'object' && !Array.isArray(x) && !(x instanceof RegExp)) ? x[state.variant] : x; }
  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    for (var k in attrs || {}) { if (k === 'class') n.className = attrs[k]; else n.setAttribute(k, attrs[k]); }
    if (text != null) n.textContent = text;
    return n;
  }
  function lineText(line) {
    return line.seg.map(function (s) {
      if (typeof s === 'string') return s;
      if (s.d) return s.d[state.variant];
      return pick(glossary[s.w].word);
    }).join('');
  }
  function shuffled(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  // ---- Textes fixes de la leçon ----
  document.title = L.titre + ' — Leçon ' + NIVEAU;
  document.getElementById('lesson-title').textContent = L.titre;
  document.getElementById('lvl-pill').textContent = NIVEAU;
  document.getElementById('lesson-theme').textContent = L.theme;
  document.getElementById('banner').textContent = "Version de démonstration : leçon d'" + L.langue + ' ' + NIVEAU + '.';
  document.getElementById('h-1').textContent = L.etape1;
  document.getElementById('h-3').textContent = L.vocabulaire.length + ' expressions · ' + L.theme.toLowerCase();
  var seuil = Math.ceil(L.bilan.length * 0.75);
  document.getElementById('bilan-intro').textContent = L.bilan.length + ' questions. Les expressions ratées sont ajoutées à vos révisions. ' + seuil + ' bonnes réponses ou plus : badge « ' + L.badge.nom + ' » !';
  // Sélecteur de niveau : change de leçon en gardant la langue.
  var selNiv = document.getElementById('level-select');
  niveauxDispo(LANGUE).forEach(function (n) {
    var o = el('option', { value: n }, 'Niveau ' + n); if (n === NIVEAU) o.selected = true; selNiv.appendChild(o);
  });
  selNiv.addEventListener('change', function () { location.href = 'lecon.html?langue=' + LANGUE + '&niveau=' + selNiv.value; });
  // Lien vers l'éditeur, et retour à l'original si la leçon a été modifiée.
  document.getElementById('edit-link').href = 'editeur.html?lecon=' + ID;
  if (perso) {
    document.getElementById('edit-text').textContent = 'Vous avez modifié cette leçon (dans ce navigateur).';
    var reset = document.getElementById('edit-reset'); reset.hidden = false;
    reset.addEventListener('click', function () {
      if (!confirm('Supprimer vos modifications et revenir à la leçon d\'origine ?')) return;
      try { localStorage.removeItem(CLE_PERSO); } catch (e) {}
      location.reload();
    });
  }
  document.getElementById('variants').setAttribute('aria-label', "Variante d'" + L.langue);
  L.variantes.forEach(function (v) {
    var b = el('button', { type: 'button', 'data-variant': v.k, 'aria-pressed': 'false' }, v.label);
    b.addEventListener('click', function () { setVariant(v.k); });
    document.getElementById('variants').appendChild(b);
  });
  document.getElementById('variant-note').innerHTML = L.noteVariantes;
  document.getElementById('h-4').innerHTML = L.grammaireTitre;
  document.getElementById('grammar').innerHTML = L.grammaire;
  document.getElementById('pairs-title').innerHTML = '3. Paires minimales : <span lang="' + L.lang + '">' + L.paires.a + '</span> ou <span lang="' + L.lang + '">' + L.paires.b + '</span> ?';
  document.getElementById('pairs-help').innerHTML = L.paires.aide;
  [L.paires.a, L.paires.b].forEach(function (w, i) {
    var b = el('button', { class: 'option', type: 'button', 'data-pair': w, disabled: '' });
    b.appendChild(el('span', { class: 'key', 'aria-hidden': 'true' }, 'AB'[i]));
    b.appendChild(el('span', { lang: L.lang }, w));
    document.getElementById('pairs-opts').appendChild(b);
  });
  document.getElementById('roleplay-title').textContent = '🎭 Jeu de rôle avec ' + L.profNom;
  document.getElementById('roleplay-text').textContent = L.jeuDeRole.texte;
  document.getElementById('write-consigne').innerHTML = L.redaction.consigne;
  var write = document.getElementById('write'); write.lang = L.lang;
  document.getElementById('h-7').textContent = L.cultureTitre;
  document.getElementById('culture').innerHTML = L.culture;
  document.getElementById('tip-avatar').textContent = L.profInitiale;
  document.getElementById('tip-title').textContent = 'Le conseil de ' + L.profNom;
  // Un texte modifié dans l'éditeur est affiché tel quel (jamais interprété comme du HTML).
  if (perso && perso.conseil != null) document.getElementById('tip-text').textContent = L.conseil;
  else document.getElementById('tip-text').innerHTML = L.conseil;
  document.getElementById('ask-text').textContent = 'Demandez à ' + L.profNom + " d'expliquer une phrase du dialogue.";
  document.getElementById('ask-link').href = 'professeur.html?prof=' + L.prof + '&niveau=' + NIVEAU;
  ['order-picked', 'order-pool', 'gaps', 'gram-ex', 'pop-word'].forEach(function (id) { document.getElementById(id).lang = L.lang; });
  Object.keys(NOMS).forEach(function (k) {
    if (k === LANGUE || !niveauxDispo(k).length) return;
    document.getElementById('other-langs').appendChild(el('a', { class: 'btn btn-ghost btn-sm', href: 'lecon.html?langue=' + k + '&niveau=' + NIVEAU }, NOMS[k]));
  });

  // ---- Synthèse vocale (voix du navigateur) ----
  var synth = window.speechSynthesis;
  // Voix exacte (es-MX), sinon une voix de la même langue (es-ES, es-US…).
  function voicesFor(lang) {
    if (!synth) return [];
    var all = synth.getVoices(), norm = function (v) { return v.lang.replace('_', '-').toLowerCase(); };
    var exact = all.filter(function (v) { return norm(v) === lang.toLowerCase(); });
    if (exact.length) return exact;
    var base = lang.split('-')[0].toLowerCase();
    return all.filter(function (v) { return norm(v).split('-')[0] === base; });
  }
  function updateTtsNote() {
    var note = document.getElementById('tts-note');
    if (!synth) { note.textContent = "Votre navigateur ne permet pas la lecture audio. Essayez avec Chrome, Edge ou Safari."; return; }
    if (synth.getVoices().length && !voicesFor(variante().speech).length) {
      note.textContent = "⚠️ Aucune voix en " + L.langue + " n'est installée sur cet appareil : la lecture risque d'être muette ou avec un mauvais accent. Utilisez Chrome ou Edge (voix en ligne incluses), ou ajoutez une voix dans Windows : Paramètres → Heure et langue → Voix.";
    } else {
      note.textContent = "Démo : voix de synthèse du navigateur. En production, l'audio est enregistré par des natifs.";
    }
  }
  function speak(text, who, onend) {
    if (!synth) { if (onend) onend(); return; }
    var u = new SpeechSynthesisUtterance(text);
    u.lang = variante().speech;
    u.rate = state.rate * 0.95;
    var vs = voicesFor(u.lang);
    if (vs.length) u.voice = who === 'C' ? vs[Math.min(1, vs.length - 1)] : vs[0];
    if (onend) { u.onend = onend; u.onerror = onend; }
    synth.speak(u);
  }
  if (synth) synth.addEventListener ? synth.addEventListener('voiceschanged', updateTtsNote) : (synth.onvoiceschanged = updateTtsNote);

  // ---- Rendu : transcription ----
  function renderTranscript() {
    var box = document.getElementById('transcript');
    box.innerHTML = '';
    dialogue.forEach(function (line, i) {
      var perso = L.personnages[line.who];
      var row = el('div', { class: 'line', id: 'line-' + i });
      var who = el('span', { class: 'who' + (line.who === 'C' ? ' guest' : ''), 'aria-hidden': 'true' }, perso.init);
      var text = el('div', { class: 'text' });
      text.appendChild(el('span', { class: 'name' }, perso.nom));
      var target = el('span', { class: 'en', lang: L.lang });
      line.seg.forEach(function (s) {
        if (typeof s === 'string') target.appendChild(document.createTextNode(s));
        else if (s.d) target.appendChild(el('span', { class: 'diff', title: 'Varie selon la variante' }, s.d[state.variant]));
        else target.appendChild(el('button', { class: 'word', type: 'button', 'data-key': s.w, 'aria-haspopup': 'dialog' }, pick(glossary[s.w].word)));
      });
      var play = el('button', { class: 'line-play', type: 'button', 'aria-label': 'Écouter cette réplique' }, '🔊');
      play.addEventListener('click', function () { if (synth) synth.cancel(); speak(lineText(line), line.who); });
      target.appendChild(document.createTextNode(' ')); target.appendChild(play);
      text.appendChild(target);
      text.appendChild(el('span', { class: 'fr' }, line.fr.replace('{room}', pick(L.chambre) || '')));
      row.appendChild(who); row.appendChild(text);
      box.appendChild(row);
    });
    document.getElementById('intro-1').textContent = L.intro.split('{ville}').join(pick(L.ville) || '');
  }

  document.getElementById('toggle-fr').addEventListener('change', function (e) {
    document.getElementById('transcript').classList.toggle('show-fr', e.target.checked);
  });

  var playing = false;
  document.getElementById('play-all').addEventListener('click', function () {
    var btn = this;
    if (!synth) return;
    if (playing) { synth.cancel(); playing = false; btn.textContent = '▶ Écouter tout'; clearSpeaking(); return; }
    playing = true; btn.textContent = '■ Arrêter';
    var i = 0;
    (function next() {
      clearSpeaking();
      if (!playing || i >= dialogue.length) { playing = false; btn.textContent = '▶ Écouter tout'; return; }
      document.getElementById('line-' + i).classList.add('speaking');
      var line = dialogue[i++];
      speak(lineText(line), line.who, next);
    })();
  });
  function clearSpeaking() { document.querySelectorAll('.line.speaking').forEach(function (n) { n.classList.remove('speaking'); }); }

  document.querySelectorAll('[data-rate]').forEach(function (b) {
    b.addEventListener('click', function () {
      state.rate = parseFloat(b.dataset.rate);
      document.querySelectorAll('[data-rate]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
    });
  });

  // ---- Popover des mots ----
  var pop = document.getElementById('popover'), currentWord = null, lastTrigger = null;
  document.getElementById('transcript').addEventListener('click', function (e) {
    var b = e.target.closest('.word'); if (!b) return;
    var g = glossary[b.dataset.key];
    currentWord = { en: pick(g.word), save: g.v != null && vocab[g.v] ? pick(vocab[g.v].en) : pick(g.word) };
    document.getElementById('pop-word').textContent = pick(g.word);
    document.getElementById('pop-ipa').textContent = (g.ipa ? pick(g.ipa) + ' · ' : '') + variante().label;
    document.getElementById('pop-tr').textContent = pick(g.tr);
    pop.hidden = false;
    var r = b.getBoundingClientRect(), w = pop.offsetWidth, h = pop.offsetHeight;
    var left = Math.max(16, Math.min(r.left, window.innerWidth - w - 16));
    var top = r.bottom + 8 + h > window.innerHeight ? r.top - h - 8 : r.bottom + 8;
    pop.style.left = left + 'px'; pop.style.top = Math.max(8, top) + 'px';
    lastTrigger = b;
    document.getElementById('pop-audio').focus();
  });
  function closePop() { pop.hidden = true; if (lastTrigger) lastTrigger.focus(); }
  document.getElementById('pop-close').addEventListener('click', closePop);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !pop.hidden) closePop(); });
  document.addEventListener('click', function (e) { if (!pop.hidden && !pop.contains(e.target) && !e.target.closest('.word')) pop.hidden = true; });
  document.getElementById('pop-audio').addEventListener('click', function () { if (currentWord) speak(currentWord.en, 'R'); });
  document.getElementById('pop-add').addEventListener('click', function () { if (currentWord) { addSaved(currentWord.save); renderVocab(); } closePop(); });

  function addSaved(text) {
    if (state.saved.indexOf(text) !== -1) return;
    state.saved.push(text);
    var ul = document.getElementById('saved'); ul.innerHTML = '';
    state.saved.forEach(function (s) { ul.appendChild(el('li', { lang: L.lang }, '• ' + s)); });
  }

  // ---- QCM (compréhension, culture, bilan) ----
  // Une question marquée « cible » a ses réponses dans la langue étudiée.
  function renderQuestions(boxId, items, shuffle, onDone) {
    var box = document.getElementById(boxId); box.innerHTML = '';
    var answered = 0, good = 0, missed = [];
    items.forEach(function (item, qi) {
      var wrap = el('div', { class: 'question' });
      var fs = el('fieldset');
      fs.appendChild(el('legend', null, (qi + 1) + '. ' + item.q));
      var opts = el('div', { class: 'options' });
      var fb = el('p', { class: 'feedback', hidden: '', 'aria-live': 'polite' });
      var order = item.opts.map(function (o, i) { return i; });
      if (shuffle) order = shuffled(order);
      order.forEach(function (oi, pos) {
        var b = el('button', { class: 'option', type: 'button', 'data-i': oi });
        b.appendChild(el('span', { class: 'key', 'aria-hidden': 'true' }, 'ABC'[pos]));
        b.appendChild(el('span', item.cible ? { lang: L.lang } : null, pick(item.opts[oi])));
        b.addEventListener('click', function () {
          var ok = oi === item.a;
          opts.querySelectorAll('.option').forEach(function (x) {
            x.disabled = true;
            if (Number(x.dataset.i) === item.a) x.classList.add('correct');
          });
          if (!ok) b.classList.add('wrong');
          fb.hidden = false;
          fb.className = 'feedback ' + (ok ? 'ok' : 'ko');
          fb.textContent = (ok ? '✅ Bravo ! ' : '❌ Pas tout à fait. ') + item.why;
          if (ok) { good++; addXp(10); } else if (item.rev) missed.push(pick(item.rev));
          if (++answered === items.length && onDone) onDone(good, missed);
        });
        opts.appendChild(b);
      });
      fs.appendChild(opts); wrap.appendChild(fs); wrap.appendChild(fb);
      box.appendChild(wrap);
    });
  }

  // ---- Vocabulaire ----
  function renderVocab() {
    var ul = document.getElementById('vocab'); ul.innerHTML = '';
    vocab.forEach(function (v) {
      var li = el('li', { class: 'card' });
      var play = el('button', { class: 'icon-btn', type: 'button', 'aria-label': 'Écouter : ' + pick(v.en) }, '🔊');
      play.addEventListener('click', function () { speak(pick(v.en).replace(/…/g, ''), 'R'); });
      var mid = el('div');
      var expr = el('div', { class: 'expr', lang: L.lang }, pick(v.en));
      if (typeof v.en === 'object') expr.appendChild(el('span', { class: 'pill pill-neutral', style: 'margin-left:8px;font-size:11px;' }, variante().label));
      mid.appendChild(expr);
      mid.appendChild(el('div', { class: 'tr' }, v.fr));
      mid.appendChild(el('div', { class: 'ex', lang: L.lang }, pick(v.ex)));
      var deja = state.saved.indexOf(pick(v.en)) !== -1;
      var add = el('button', { class: 'icon-btn add-btn', type: 'button', 'aria-pressed': deja ? 'true' : 'false', 'aria-label': 'Ajouter aux révisions : ' + pick(v.en) }, deja ? '✓' : '＋');
      add.addEventListener('click', function () { addSaved(pick(v.en)); add.setAttribute('aria-pressed', 'true'); add.textContent = '✓'; });
      li.appendChild(play); li.appendChild(mid); li.appendChild(add);
      ul.appendChild(li);
    });
  }

  // ---- Grammaire : exercice ----
  var gapXp = false, EG = L.exGrammaire;
  function renderGramEx() {
    var box = document.getElementById('gram-ex'); box.innerHTML = '';
    var parts = pick(EG.phrase).split('___');
    if (parts[0]) box.appendChild(el('span', null, parts[0].trim()));
    var sel = el('select', { id: 'gap', class: 'gap-select', 'aria-label': 'Choisissez le mot manquant' });
    sel.appendChild(el('option', { value: '' }, '…'));
    EG.options.forEach(function (o) { sel.appendChild(el('option', { value: o }, o)); });
    box.appendChild(sel);
    box.appendChild(el('span', null, parts[1].trim()));
    document.getElementById('gap-fb').hidden = true;
    sel.addEventListener('change', function () {
      var fb = document.getElementById('gap-fb'), v = sel.value;
      if (!v) { fb.hidden = true; return; }
      fb.hidden = false;
      fb.className = 'feedback ' + (v === EG.bonne ? 'ok' : 'ko');
      fb.textContent = pick(EG.retours[v]);
      if (v === EG.bonne && !gapXp) { gapXp = true; addXp(10); }
    });
  }

  // ---- Étape 5 : remettre le dialogue dans l'ordre ----
  var ORDER_N = 5, picked = [], orderPool = [], orderXp = false;
  function renderOrder() {
    var pool = document.getElementById('order-pool'), list = document.getElementById('order-picked');
    pool.innerHTML = ''; list.innerHTML = '';
    document.getElementById('order-fb').hidden = true;
    picked.forEach(function (idx, pos) {
      var li = el('li'), b = el('button', { class: 'line-btn', type: 'button', 'aria-label': 'Retirer : ' + lineText(dialogue[idx]) }, lineText(dialogue[idx]));
      b.addEventListener('click', function () { picked.splice(pos, 1); renderOrder(); });
      li.appendChild(b); list.appendChild(li);
    });
    orderPool.forEach(function (idx) {
      if (picked.indexOf(idx) !== -1) return;
      var b = el('button', { class: 'line-btn', type: 'button' }, lineText(dialogue[idx]));
      b.addEventListener('click', function () { picked.push(idx); renderOrder(); });
      pool.appendChild(b);
    });
  }
  function resetOrder() {
    var ids = []; for (var i = 0; i < ORDER_N; i++) ids.push(i);
    do { orderPool = shuffled(ids); } while (orderPool.join() === ids.join());
    picked = []; renderOrder();
  }
  document.getElementById('order-reset').addEventListener('click', resetOrder);
  document.getElementById('order-check').addEventListener('click', function () {
    var fb = document.getElementById('order-fb'); fb.hidden = false;
    if (picked.length < ORDER_N) { fb.className = 'feedback ko'; fb.textContent = 'Choisissez les ' + ORDER_N + ' répliques avant de vérifier.'; return; }
    var bad = picked.filter(function (idx, pos) { return idx !== pos; }).length;
    if (!bad) {
      fb.className = 'feedback ok'; fb.textContent = '✅ Parfait, le dialogue est dans le bon ordre !';
      if (!orderXp) { orderXp = true; addXp(10); }
    } else {
      fb.className = 'feedback ko';
      fb.textContent = '❌ ' + bad + ' réplique' + (bad > 1 ? 's sont mal placées' : ' est mal placée') + '. Indice : ' + L.indiceOrdre;
    }
  });

  // ---- Étape 5 : phrases à compléter ----
  var gapsXp = false;
  function renderGaps() {
    var box = document.getElementById('gaps'), prev = {};
    box.querySelectorAll('select').forEach(function (s) { prev[s.id] = s.value; });
    box.innerHTML = '';
    L.trous.forEach(function (g, i) {
      var row = el('div', { class: 'gap-line' });
      row.appendChild(el('span', null, pick(g.before)));
      var sel = el('select', { class: 'gap-select', id: 'g-' + i, 'aria-label': 'Mot manquant, phrase ' + (i + 1) });
      sel.appendChild(el('option', { value: '' }, '…'));
      g.opts.forEach(function (o) { sel.appendChild(el('option', { value: o }, o)); });
      if (prev['g-' + i]) sel.value = prev['g-' + i];
      row.appendChild(sel);
      row.appendChild(el('span', null, pick(g.after)));
      box.appendChild(row);
    });
  }
  document.getElementById('gaps-check').addEventListener('click', function () {
    var fb = document.getElementById('gaps-fb'), ok = 0, notes = [];
    L.trous.forEach(function (g, i) {
      var sel = document.getElementById('g-' + i), right = sel.value === g.a;
      sel.classList.toggle('correct', right); sel.classList.toggle('wrong', !right);
      if (right) ok++; else notes.push((i + 1) + '. ' + g.why);
    });
    fb.hidden = false; fb.className = 'feedback ' + (ok === L.trous.length ? 'ok' : 'ko');
    fb.textContent = ok === L.trous.length ? '✅ ' + ok + ' / ' + ok + ', bravo !' : ok + ' / ' + L.trous.length + '. ' + notes.join(' ');
    if (ok === L.trous.length && !gapsXp) { gapsXp = true; addXp(10); }
  });

  // ---- Étape 5 : paires minimales ----
  var pair = { target: null, done: 0, good: 0 };
  if (!synth) {
    document.getElementById('pairs-play').disabled = true;
    document.getElementById('pairs-help').textContent = "Votre navigateur ne permet pas la lecture audio de cet exercice. Essayez avec Chrome, Edge ou Safari.";
  }
  document.getElementById('pairs-play').addEventListener('click', function () {
    if (!pair.target) pair.target = Math.random() < 0.5 ? L.paires.a : L.paires.b;
    synth.cancel(); speak(pair.target, 'R');
    document.querySelectorAll('[data-pair]').forEach(function (b) { b.disabled = false; b.classList.remove('correct', 'wrong'); });
    document.getElementById('pairs-fb').hidden = true;
  });
  document.getElementById('pairs-opts').addEventListener('click', function (e) {
    var b = e.target.closest('[data-pair]'); if (!b || !pair.target) return;
    var ok = b.dataset.pair === pair.target, fb = document.getElementById('pairs-fb');
    document.querySelectorAll('[data-pair]').forEach(function (x) { x.disabled = true; if (x.dataset.pair === pair.target) x.classList.add('correct'); });
    if (!ok) b.classList.add('wrong');
    pair.done++; if (ok) { pair.good++; addXp(2); }
    fb.hidden = false; fb.className = 'feedback ' + (ok ? 'ok' : 'ko');
    fb.textContent = (ok ? "✅ Oui, c'était « " : "❌ Non, c'était « ") + pair.target + ' ». Touchez « Écouter un mot » pour continuer.';
    document.getElementById('pairs-score').textContent = pair.good + ' / ' + pair.done;
    pair.target = null;
  });

  // ---- Étape 5 : shadowing ----
  var Reco = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (Reco) document.getElementById('shadow-help').textContent += ' Touchez 🎙️ pour vérifier ce que le micro a compris (Chrome ou Edge).';
  // Mots sans accents ni ponctuation, pour comparer ce qui a été dit.
  function words(s) {
    return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9' ]/g, ' ').split(/\s+/).filter(Boolean);
  }
  function renderShadow() {
    var ul = document.getElementById('shadow'); ul.innerHTML = '';
    dialogue.forEach(function (line) {
      if (line.who !== 'C') return;
      var txt = lineText(line), li = el('li');
      li.appendChild(el('span', { lang: L.lang }, txt + ' '));
      var play = el('button', { class: 'line-play', type: 'button', 'aria-label': 'Écouter : ' + txt }, '🔊');
      play.addEventListener('click', function () { if (synth) { synth.cancel(); speak(txt, 'C'); } });
      li.appendChild(play);
      var said = el('span', { class: 'said', 'aria-live': 'polite' });
      if (Reco) {
        var mic = el('button', { class: 'line-play', type: 'button', 'aria-label': 'Répéter au micro : ' + txt }, '🎙️');
        mic.addEventListener('click', function () {
          var r = new Reco(); r.lang = variante().speech;
          said.textContent = '🎙️ Je vous écoute…';
          r.onresult = function (ev) {
            var heard = ev.results[0][0].transcript, target = words(txt), got = words(heard);
            var hit = target.filter(function (w) { return got.indexOf(w) !== -1; }).length;
            var pct = Math.round(hit / target.length * 100);
            said.textContent = 'Compris : « ' + heard + ' » · ' + pct + ' % des mots reconnus' + (pct >= 80 ? ' ✅' : '. Réécoutez et réessayez.');
            if (pct >= 80) addXp(2);
          };
          r.onerror = function (ev) {
            said.textContent = ev.error === 'not-allowed' || ev.error === 'service-not-allowed'
              ? "Micro refusé : autorisez l'accès au micro (icône à gauche de l'adresse du site)."
              : ev.error === 'no-speech' ? "Je n'ai rien entendu : touchez 🎙️ et parlez tout de suite." : 'Micro indisponible (' + ev.error + ').';
          };
          r.start();
        });
        li.appendChild(mic);
      }
      li.appendChild(said);
      ul.appendChild(li);
    });
  }

  // ---- Étape 6 : production ----
  function updateRoleplayLink() {
    var q = 'prof=' + L.prof + '&mode=jeu_de_role&niveau=' + NIVEAU + '&objectif=voyage&variante=' + variante().code + '&sujet=' + encodeURIComponent(L.jeuDeRole.sujet);
    document.getElementById('roleplay-link').href = 'professeur.html?' + q;
  }
  var writeXp = false;
  document.getElementById('write-check').addEventListener('click', function () {
    var t = document.getElementById('write').value.toLowerCase(), fb = document.getElementById('write-fb');
    fb.hidden = false; fb.innerHTML = '';
    if (t.trim().split(/\s+/).length < 5) { fb.className = 'feedback ko'; fb.textContent = 'Écrivez au moins une ou deux phrases complètes.'; return; }
    var ul = el('ul', { class: 'checklist' }), ok = 0, need = 0;
    L.redaction.criteres.forEach(function (c) {
      var found = c[0].test(t);
      if (c[2]) { if (found) ul.appendChild(el('li', null, '⚠️ ' + pick(c[1]))); return; }
      need++; if (found) ok++;
      ul.appendChild(el('li', null, (found ? '✅ ' : '⬜ ') + pick(c[1])));
    });
    fb.className = 'feedback ' + (ok === need ? 'ok' : 'ko');
    fb.appendChild(el('strong', null, ok === need ? 'Très bon message !' : ok + ' / ' + need + ' éléments présents.'));
    fb.appendChild(ul);
    fb.appendChild(el('p', { lang: L.lang, style: 'margin:8px 0 0;' }, 'Modèle : ' + pick(L.redaction.modele)));
    if (ok === need && !writeXp) { writeXp = true; addXp(10); }
  });

  // ---- Étapes 7 et 8 : culture et bilan ----
  function renderFinal() {
    document.getElementById('final-result').hidden = true;
    renderQuestions('final-quiz', L.bilan, true, function (good, missed) {
      missed.forEach(addSaved);
      var box = document.getElementById('final-result'); box.innerHTML = ''; box.hidden = false;
      var passed = good >= seuil;
      if (passed) box.appendChild(el('div', { class: 'badge', 'aria-hidden': 'true' }, L.badge.icone));
      box.appendChild(el('h3', null, passed ? 'Badge « ' + L.badge.nom + ' » débloqué !' : 'Leçon terminée'));
      box.appendChild(el('p', null, 'Score : ' + good + ' / ' + L.bilan.length + ' · ' + state.xp + ' XP gagnés dans cette leçon.'));
      box.appendChild(el('p', { class: 'muted' }, missed.length ? missed.length + ' expression(s) ajoutée(s) à vos révisions (colonne de droite).' : 'Aucune erreur : rien à ajouter aux révisions.'));
      var act = el('div', { class: 'ex-actions', style: 'justify-content:center;' });
      var again = el('button', { class: 'btn btn-ghost', type: 'button' }, 'Refaire le bilan');
      again.addEventListener('click', function () { renderFinal(); document.getElementById('h-8').scrollIntoView(); });
      act.appendChild(again);
      act.appendChild(el('a', { class: 'btn btn-primary', href: document.getElementById('roleplay-link').getAttribute('href') }, 'Pratiquer avec ' + L.profNom));
      act.appendChild(el('a', { class: 'btn btn-ghost', href: 'accueil.html' }, "Retour à l'accueil"));
      box.appendChild(act);
      box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  // ---- Navigation entre étapes ----
  function renderSteps() {
    var ol = document.getElementById('steps'); ol.innerHTML = '';
    steps.forEach(function (name, i) {
      var n = i + 1;
      var b = el('button', { class: 'step-btn' + (n < state.step ? ' done' : ''), type: 'button' });
      if (n === state.step) b.setAttribute('aria-current', 'step');
      b.appendChild(el('span', { class: 'num', 'aria-hidden': 'true' }, n < state.step ? '✓' : String(n)));
      b.appendChild(el('span', null, name));
      b.addEventListener('click', function () { go(n); });
      var li = el('li'); li.appendChild(b); ol.appendChild(li);
    });
  }
  function go(n) {
    state.step = Math.max(1, Math.min(steps.length, n));
    document.querySelectorAll('.panel').forEach(function (p) { p.classList.toggle('active', p.id === 'step-' + state.step); });
    document.getElementById('progress-bar').style.width = (state.step / steps.length * 100) + '%';
    document.getElementById('prev').disabled = state.step === 1;
    document.getElementById('next').disabled = state.step === steps.length;
    renderSteps();
    window.scrollTo({ top: 0 });
    var h = document.getElementById('h-' + state.step);
    h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true });
  }
  document.getElementById('prev').addEventListener('click', function () { go(state.step - 1); });
  document.getElementById('next').addEventListener('click', function () { go(state.step + 1); });

  function addXp(n) { state.xp += n; document.getElementById('xp').textContent = '+' + state.xp + ' XP'; }

  // ---- Variante ----
  function setVariant(v) {
    state.variant = v;
    try { localStorage.setItem(CLE_VARIANTE, v); } catch (e) {}
    document.querySelectorAll('[data-variant]').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.variant === v); });
    if (synth) synth.cancel(); playing = false; document.getElementById('play-all').textContent = '▶ Écouter tout';
    pop.hidden = true;
    write.placeholder = pick(L.redaction.placeholder);
    renderTranscript(); renderVocab(); renderGramEx(); renderGaps(); resetOrder(); renderShadow(); updateRoleplayLink(); updateTtsNote();
  }

  // ---- Thème ----
  document.getElementById('theme-toggle').addEventListener('click', function () {
    var root = document.documentElement;
    var dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('lb-theme', root.dataset.theme); } catch (e) {}
  });

  setVariant(state.variant);
  renderQuestions('quiz', L.comprehension, true);
  renderQuestions('culture-quiz', L.cultureQuiz, true);
  renderFinal(); renderSteps(); go(1);
  document.getElementById('h-1').removeAttribute('tabindex');
})();
