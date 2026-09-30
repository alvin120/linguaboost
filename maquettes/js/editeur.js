// Script de la page editeur.html
(function () {
  var NOMS = { en: 'Anglais', es: 'Espagnol', pt: 'Portugais' };
  var CHAMPS = ['titre', 'theme', 'etape1', 'intro', 'conseil', 'dialogue', 'vocabulaire', 'comprehension', 'bilan'];
  var MAX = 600; // longueur maximale d'un texte
  var $ = function (id) { return document.getElementById(id); };
  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) { if (k === 'class') n.className = attrs[k]; else n.setAttribute(k, attrs[k]); });
    if (text != null) n.textContent = text;
    return n;
  }
  function clone(x) { return JSON.parse(JSON.stringify(x)); }
  function lire(cle) { try { return JSON.parse(localStorage.getItem(cle)); } catch (e) { return null; } }

  // ---- Choix de la leçon ----
  var ids = Object.keys(window.LECONS).sort();
  ids.forEach(function (id) {
    var L = window.LECONS[id];
    $('lecon').appendChild(el('option', { value: id }, NOMS[L.lang] + ' ' + L.niveau + ' · ' + L.theme));
  });
  var ID = new URLSearchParams(location.search).get('lecon');
  if (ids.indexOf(ID) === -1) ID = 'en-A2';
  $('lecon').value = ID;
  $('lecon').addEventListener('change', function () {
    if (sale && !confirm('Vous avez des modifications non enregistrées. Changer de leçon quand même ?')) { $('lecon').value = ID; return; }
    history.replaceState(null, '', 'editeur.html?lecon=' + $('lecon').value);
    charger($('lecon').value);
  });

  var O, V, D, sale = false; // leçon d'origine, variantes, données en cours d'édition
  function cle() { return 'lb-lecon-perso-' + ID; }
  function pick(x, k) { return (x && typeof x === 'object') ? x[k] : x; }

  function charger(id) {
    ID = id; O = window.LECONS[id]; V = O.variantes;
    document.documentElement.dataset.lang = O.lang;
    var perso = lire(cle());
    D = {};
    CHAMPS.forEach(function (c) { D[c] = perso && perso[c] != null ? perso[c] : clone(O[c]); });
    // Le conseil d'origine contient un peu de mise en forme : on l'édite en texte simple.
    if (!(perso && perso.conseil != null)) D.conseil = D.conseil.replace(/<[^>]+>/g, '');
    $('preview').href = 'lecon.html?langue=' + O.lang + '&niveau=' + O.niveau;
    $('status').className = 'status' + (perso ? ' custom' : '');
    $('status').textContent = perso
      ? '✏️ Cette leçon contient vos modifications' + (perso.maj ? ' (enregistrées le ' + perso.maj + ')' : '') + '. « Original » les supprime.'
      : 'Leçon d\'origine, sans modification.';
    sale = false; message('');
    rendre();
  }

  // ---- Champs ----
  function champ(label, valeur, multi, onInput, lang) {
    var f = el('label', { class: 'f' }); f.appendChild(el('span', null, label));
    var i = el(multi ? 'textarea' : 'input', { maxlength: String(MAX) }); i.value = valeur == null ? '' : valeur;
    if (lang) i.lang = lang;
    i.addEventListener('input', function () { onInput(i.value); sale = true; message(''); });
    f.appendChild(i); return f;
  }
  // Un champ par variante (ex. 🇺🇸 US / 🇬🇧 UK) : identiques → une seule chaîne, sinon un objet par variante.
  function champVariante(label, valeur, multi, onChange) {
    var box = el('div', { class: 'vgrid two' }), vals = {};
    V.forEach(function (v) {
      vals[v.k] = pick(valeur, v.k) || '';
      box.appendChild(champ(label + ' · ' + v.label, vals[v.k], multi, function (t) {
        vals[v.k] = t;
        var tous = V.map(function (x) { return vals[x.k]; });
        onChange(tous.every(function (t2) { return t2 === tous[0]; }) ? tous[0] : Object.assign({}, vals));
      }, O.lang));
    });
    return box;
  }
  function entete(titre, liste, index, min) {
    var h = el('div', { class: 'item-head' }); h.appendChild(el('span', null, titre));
    var b = el('button', { class: 'btn btn-ghost btn-sm', type: 'button', 'aria-label': 'Supprimer : ' + titre }, '🗑️');
    b.addEventListener('click', function () {
      if (liste.length <= min) { message('Il faut garder au moins ' + min + ' élément(s) ici.', true); return; }
      liste.splice(index, 1); sale = true; rendre();
    });
    h.appendChild(b); return h;
  }

  // Texte d'une réplique pour une variante (mots du glossaire compris).
  function texteLigne(line, k) {
    return line.seg.map(function (s) {
      if (typeof s === 'string') return s;
      if (s.d) return s.d[k];
      var g = O.glossaire[s.w]; return g ? pick(g.word, k) : '';
    }).join('');
  }

  function rendre() {
    // Général
    var g = $('s-general'); g.innerHTML = '';
    g.appendChild(champ('Titre de la leçon', D.titre, false, function (t) { D.titre = t; }));
    g.appendChild(champ('Thème (affiché sous le titre)', D.theme, false, function (t) { D.theme = t; }));
    g.appendChild(champ('Titre de l\'étape 1', D.etape1, false, function (t) { D.etape1 = t; }));
    g.appendChild(champ('Introduction ({ville} sera remplacé par la ville)', D.intro, true, function (t) { D.intro = t; }));
    g.appendChild(champ('Conseil du professeur', D.conseil, true, function (t) { D.conseil = t; }));

    // Dialogue
    var d = $('s-dialogue'); d.innerHTML = '';
    D.dialogue.forEach(function (line, i) {
      var it = el('div', { class: 'item' });
      it.appendChild(entete('Réplique ' + (i + 1), D.dialogue, i, 5));
      var f = el('label', { class: 'f' }); f.appendChild(el('span', null, 'Qui parle ?'));
      var s = el('select');
      [['C', O.personnages.C.nom], ['R', O.personnages.R.nom]].forEach(function (p) { var o = el('option', { value: p[0] }, p[1]); if (line.who === p[0]) o.selected = true; s.appendChild(o); });
      s.addEventListener('change', function () { line.who = s.value; sale = true; });
      f.appendChild(s); it.appendChild(f);
      var textes = {}; V.forEach(function (v) { textes[v.k] = texteLigne(line, v.k); });
      it.appendChild(champVariante('Texte', textes, true, function (val) {
        // Texte modifié : la réplique devient un texte simple (ou un texte par variante).
        line.seg = [typeof val === 'string' ? val : { d: val }];
      }));
      it.appendChild(champ('Traduction française', line.fr, true, function (t) { line.fr = t; }));
      d.appendChild(it);
    });

    // Vocabulaire
    var vb = $('s-vocabulaire'); vb.innerHTML = '';
    D.vocabulaire.forEach(function (v, i) {
      var it = el('div', { class: 'item' });
      it.appendChild(entete('Expression ' + (i + 1), D.vocabulaire, i, 3));
      it.appendChild(champVariante('Expression', v.en, false, function (val) { v.en = val; }));
      it.appendChild(champ('Traduction', v.fr, false, function (t) { v.fr = t; }));
      it.appendChild(champVariante('Exemple', v.ex, false, function (val) { v.ex = val; }));
      vb.appendChild(it);
    });

    renderQuestions('comprehension', 'Question', 2);
    renderQuestions('bilan', 'Question du bilan', 4);
  }

  function renderQuestions(cleListe, titre, min) {
    var box = $('s-' + cleListe); box.innerHTML = '';
    D[cleListe].forEach(function (q, i) {
      var it = el('div', { class: 'item' });
      it.appendChild(entete(titre + ' ' + (i + 1), D[cleListe], i, min));
      it.appendChild(champ('Question', q.q, false, function (t) { q.q = t; }));
      var opts = el('div', { class: 'opts' });
      var nom = cleListe + '-' + i + '-' + Math.random().toString(36).slice(2);
      q.opts.forEach(function (o, oi) {
        var row = el('div', { class: 'opt' });
        var r = el('input', { type: 'radio', name: nom, 'aria-label': 'Bonne réponse : réponse ' + (oi + 1) }); r.checked = q.a === oi;
        r.addEventListener('change', function () { q.a = oi; sale = true; });
        row.appendChild(r);
        row.appendChild(champVariante('Réponse ' + (oi + 1) + (q.a === oi ? ' (bonne)' : ''), o, false, function (val) { q.opts[oi] = val; }));
        opts.appendChild(row);
      });
      it.appendChild(opts);
      it.appendChild(champ('Explication (affichée après la réponse)', q.why, true, function (t) { q.why = t; }));
      box.appendChild(it);
    });
  }

  document.querySelectorAll('[data-add]').forEach(function (b) {
    b.addEventListener('click', function () {
      var k = b.dataset.add;
      if (k === 'dialogue') D.dialogue.push({ who: 'C', seg: [''], fr: '' });
      if (k === 'vocabulaire') D.vocabulaire.push({ en: '', fr: '', ex: '' });
      if (k === 'comprehension' || k === 'bilan') D[k].push({ q: '', opts: ['', '', ''], a: 0, why: '', cible: k === 'bilan' });
      sale = true; rendre();
      var items = $('s-' + k).querySelectorAll('.item'); items[items.length - 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

  // ---- Vérification (aussi pour les fichiers importés) ----
  function texte(x) { return typeof x === 'string' && x.length <= MAX; }
  function texteVariante(x) {
    if (texte(x)) return true;
    return x && typeof x === 'object' && !Array.isArray(x) && V.every(function (v) { return texte(x[v.k]); }) && Object.keys(x).length === V.length;
  }
  function plein(x) { return V.every(function (v) { return String(pick(x, v.k) || '').trim() !== ''; }); }
  function question(q, bilan) {
    return q && texte(q.q) && q.q.trim() && Array.isArray(q.opts) && q.opts.length === 3 && q.opts.every(texteVariante) && q.opts.every(plein) &&
      [0, 1, 2].indexOf(q.a) !== -1 && texte(q.why) && (q.rev == null || texteVariante(q.rev));
  }
  function segOk(s) { return texte(s) || (s && typeof s === 'object' && (s.d ? texteVariante(s.d) : typeof s.w === 'string' && O.glossaire[s.w])); }
  // Renvoie un message d'erreur, ou null si les données sont valides.
  function verifier(x) {
    if (!x || typeof x !== 'object') return 'Fichier illisible.';
    var inconnus = Object.keys(x).filter(function (k) { return CHAMPS.indexOf(k) === -1 && k !== 'maj' && k !== 'lecon'; });
    if (inconnus.length) return 'Champs inconnus : ' + inconnus.join(', ') + '.';
    for (var i = 0; i < 5; i++) { var c = CHAMPS[i]; if (x[c] != null && !texte(x[c])) return 'Le champ « ' + c + ' » doit être un texte court.'; }
    if (x.dialogue != null) {
      if (!Array.isArray(x.dialogue) || x.dialogue.length < 5) return 'Le dialogue doit avoir au moins 5 répliques.';
      if (!x.dialogue.some(function (l) { return l && l.who === 'C'; })) return 'Il faut au moins une réplique de Camille.';
      for (var j = 0; j < x.dialogue.length; j++) {
        var l = x.dialogue[j];
        if (!l || ['C', 'R'].indexOf(l.who) === -1 || !Array.isArray(l.seg) || !l.seg.every(segOk) || !texte(l.fr)) return 'Réplique ' + (j + 1) + ' invalide.';
        if (!V.every(function (v) { return texteLigne(l, v.k).trim(); })) return 'Réplique ' + (j + 1) + ' : le texte est vide.';
      }
    }
    if (x.vocabulaire != null) {
      if (!Array.isArray(x.vocabulaire) || x.vocabulaire.length < 3) return 'Il faut au moins 3 expressions.';
      for (var k = 0; k < x.vocabulaire.length; k++) {
        var v = x.vocabulaire[k];
        if (!v || !texteVariante(v.en) || !plein(v.en) || !texte(v.fr) || !texteVariante(v.ex)) return 'Expression ' + (k + 1) + ' incomplète.';
      }
    }
    var listes = [['comprehension', 2, 'compréhension'], ['bilan', 4, 'bilan']];
    for (var m = 0; m < listes.length; m++) {
      var nomL = listes[m][0], val = x[nomL];
      if (val == null) continue;
      if (!Array.isArray(val) || val.length < listes[m][1]) return 'Il faut au moins ' + listes[m][1] + ' questions (' + listes[m][2] + ').';
      for (var n = 0; n < val.length; n++) if (!question(val[n])) return 'Question ' + (n + 1) + ' (' + listes[m][2] + ') incomplète : question, 3 réponses et bonne réponse.';
    }
    return null;
  }

  // ---- Enregistrer, exporter, importer ----
  function message(t, erreur) { $('msg').textContent = t; $('msg').className = 'msg' + (t ? (erreur ? ' ko' : ' ok') : ''); }
  function preparer() {
    var x = clone(D);
    // Au bilan, la réponse ratée ajoutée aux révisions = la bonne réponse.
    x.bilan.forEach(function (q) { q.rev = q.opts[q.a]; q.cible = q.cible !== false; });
    x.maj = new Date().toISOString().slice(0, 10);
    return x;
  }
  $('save').addEventListener('click', function () {
    var x = preparer(), err = verifier(x);
    if (err) return message('⚠️ ' + err, true);
    try { localStorage.setItem(cle(), JSON.stringify(x)); } catch (e) { return message("⚠️ Impossible d'enregistrer dans ce navigateur (navigation privée ?).", true); }
    sale = false;
    $('status').className = 'status custom';
    $('status').textContent = '✏️ Cette leçon contient vos modifications (enregistrées le ' + x.maj + '). « Original » les supprime.';
    message('✅ Enregistré. Ouvrez « Voir la leçon » pour tester.');
  });
  $('reset').addEventListener('click', function () {
    if (!confirm('Supprimer toutes vos modifications de cette leçon et revenir à l\'original ?')) return;
    try { localStorage.removeItem(cle()); } catch (e) {}
    charger(ID); message('↺ Leçon d\'origine rétablie.');
  });
  $('export').addEventListener('click', function () {
    var x = preparer(); x.lecon = ID;
    var url = URL.createObjectURL(new Blob([JSON.stringify(x, null, 2)], { type: 'application/json' }));
    var a = el('a', { href: url, download: 'lecon-' + ID + '.json' }); document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    message('⬇️ Fichier « lecon-' + ID + '.json » téléchargé.');
  });
  $('import').addEventListener('click', function () { $('import-file').click(); });
  $('import-file').addEventListener('change', function () {
    var f = this.files[0]; this.value = '';
    if (!f) return;
    if (f.size > 300000) return message('⚠️ Fichier trop gros.', true);
    f.text().then(function (t) {
      var x; try { x = JSON.parse(t); } catch (e) { return message('⚠️ Ce fichier n\'est pas un export de leçon valide.', true); }
      if (x && x.lecon && x.lecon !== ID) {
        if (ids.indexOf(x.lecon) === -1) return message('⚠️ Leçon inconnue dans ce fichier.', true);
        $('lecon').value = x.lecon; history.replaceState(null, '', 'editeur.html?lecon=' + x.lecon); charger(x.lecon);
      }
      var err = verifier(x);
      if (err) return message('⚠️ Import refusé : ' + err, true);
      CHAMPS.forEach(function (c) { if (x[c] != null) D[c] = x[c]; });
      sale = true; rendre();
      message('⬆️ Fichier importé. Vérifiez puis cliquez sur « Enregistrer ».');
    });
  });
  window.addEventListener('beforeunload', function (e) { if (sale) { e.preventDefault(); e.returnValue = ''; } });

  $('theme-toggle').addEventListener('click', function () {
    var root = document.documentElement;
    var dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('lb-theme', root.dataset.theme); } catch (e) {}
  });

  charger(ID);
})();
