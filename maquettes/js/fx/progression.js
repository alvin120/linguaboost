// « Ma progression » (parcours.html) : série de jours, chemin d'aventure A1 → C2 en îles 3D
// qui s'illuminent au défilement, et étagère de badges (pièces 3D qui tournent).
// Données : js/progres.js (LBProgres). Langue : celle cochée dans le formulaire du parcours.
// Tout reste lisible sans les effets : liste ordonnée de liens, textes d'état explicites.
(function () {
  var box = document.getElementById('prog');
  if (!box || !window.LBProgres) return;
  var THEMES = { A1: 'Au café', A2: 'À l\'hôtel', B1: 'Réclamation à l\'hôtel', B2: 'Entretien d\'embauche', C1: 'Négociation commerciale', C2: 'Débat : le surtourisme' };
  var NOMS = { en: 'anglais', es: 'espagnol', pt: 'portugais' };
  var anime = function () { return window.LBFX && LBFX.on(); };

  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) { if (k === 'class') n.className = attrs[k]; else n.setAttribute(k, attrs[k]); });
    if (text != null) n.textContent = text;
    return n;
  }
  function choix(name, def) { var c = document.querySelector('input[name="' + name + '"]:checked'); return c ? c.value : def; }

  // Compteur animé de 0 à la valeur (le texte réel est dans aria-label, le chiffre animé est masqué).
  function compter(node, cible) {
    if (!anime() || !cible) { node.textContent = cible; return; }
    var t0 = null, d = Math.min(1200, 300 + cible * 60);
    (function f(t) {
      if (t0 === null) t0 = t;
      var k = Math.min(1, (t - t0) / d), e = 1 - Math.pow(1 - k, 3);
      node.textContent = Math.round(cible * e);
      if (k < 1) requestAnimationFrame(f);
    })(performance.now());
  }

  function stat(cls, ico, valeur, libelle) {
    var d = el('div', { class: 'stat ' + cls, role: 'group', 'aria-label': valeur + ' ' + libelle });
    d.appendChild(el('span', { class: 'stat-ico', 'aria-hidden': 'true' }, ico));
    var n = el('strong', { 'aria-hidden': 'true' }, '0');
    d.appendChild(n); d.appendChild(el('small', { 'aria-hidden': 'true' }, libelle));
    d._compter = function () { compter(n, valeur); };
    return d;
  }

  function rendre() {
    var lg = choix('langue', 'en'), actuel = choix('niveau', 'A2');
    var pr = LBProgres.lire(), serie = LBProgres.serie();
    var badges = 0;
    LBProgres.NIVEAUX.forEach(function (n) { var l = pr.lecons[lg + '-' + n]; if (l && l.badge) badges++; });
    box.innerHTML = '';

    // 1. Statistiques
    var stats = el('div', { class: 'stats' });
    var sSerie = stat('serie' + (LBProgres.aujourdhui() ? ' vive' : ''), '🔥', serie, serie > 1 ? 'jours de suite' : 'jour de suite');
    var sXp = stat('xp', '⚡', pr.xp, 'XP au total');
    var sBadges = stat('nb-badges', '🏅', badges, 'badge' + (badges > 1 ? 's' : '') + ' en ' + NOMS[lg]);
    [sSerie, sXp, sBadges].forEach(function (s) { stats.appendChild(s); });
    box.appendChild(stats);
    if (!serie) box.appendChild(el('p', { class: 'muted prog-astuce' }, 'Gagnez de l\'XP dans une leçon aujourd\'hui pour lancer votre série.'));
    else if (!LBProgres.aujourdhui()) box.appendChild(el('p', { class: 'muted prog-astuce' }, 'Faites un exercice aujourd\'hui pour garder votre série !'));

    // 2. Chemin d'aventure
    box.appendChild(el('h3', { class: 'prog-h3' }, 'Votre chemin en ' + NOMS[lg]));
    var chemin = el('ol', { class: 'chemin' });
    LBProgres.NIVEAUX.forEach(function (n, i) {
      var l = pr.lecons[lg + '-' + n] || {}, etat, txt;
      if (l.fini) { etat = 'fini'; txt = 'Terminée · ' + l.score + ' / ' + l.total + (l.badge ? ' · badge ' + l.badge.nom : ''); }
      else if (l.etape > 1) { etat = 'entame'; txt = 'En cours · étape ' + l.etape + ' sur 8'; }
      else if (n === actuel) { etat = 'actuel'; txt = 'Votre niveau : à commencer'; }
      else { etat = 'avenir'; txt = 'À découvrir'; }
      var li = el('li', { class: 'etape-chemin', 'data-etat': etat, style: '--i:' + i });
      var a = el('a', { href: 'lecon.html?langue=' + lg + '&niveau=' + n });
      var ile = el('span', { class: 'ile', 'aria-hidden': 'true' });
      ile.appendChild(el('span', { class: 'ile-sol' }));
      ile.appendChild(el('span', { class: 'ile-label' }, l.badge ? l.badge.icone : n));
      a.appendChild(ile);
      var t = el('span', { class: 'ile-txt' });
      t.appendChild(el('b', null, n + ' · ' + THEMES[n])); t.appendChild(el('small', null, txt));
      a.appendChild(t); li.appendChild(a); chemin.appendChild(li);
    });
    box.appendChild(chemin);

    // 3. Badges
    box.appendChild(el('h3', { class: 'prog-h3' }, 'Vos badges'));
    var etagere = el('ul', { class: 'badges' });
    LBProgres.NIVEAUX.forEach(function (n, i) {
      var l = pr.lecons[lg + '-' + n] || {}, b = l.badge;
      var li = el('li', { class: 'badge-item' + (b ? ' obtenu' : '') });
      var piece = el('span', { class: 'piece', 'aria-hidden': 'true', style: '--d:' + (-i * 0.9).toFixed(1) + 's' });
      for (var k = 0; k < 5; k++) piece.appendChild(el('i', { class: 'tranche', style: '--z:' + (k - 2) * 1.5 + 'px' }));
      piece.appendChild(el('span', { class: 'face avant' }, b ? b.icone : '?'));
      piece.appendChild(el('span', { class: 'face arriere' }, n));
      li.appendChild(piece);
      li.appendChild(el('span', { class: 'badge-nom' }, b ? b.nom : n));
      li.appendChild(el('span', { class: 'sr-only' }, b ? ' : badge obtenu (leçon ' + n + ')' : ' : badge pas encore obtenu'));
      etagere.appendChild(li);
    });
    box.appendChild(etagere);

    // Illumination au défilement + compteurs quand la carte devient visible.
    var vus = false;
    if (!anime() || !window.IntersectionObserver) {
      chemin.querySelectorAll('.etape-chemin').forEach(function (li) { li.classList.add('allume'); });
      [sSerie, sXp, sBadges].forEach(function (s) { s._compter(); });
      return;
    }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        if (e.target === stats && !vus) { vus = true; [sSerie, sXp, sBadges].forEach(function (s) { s._compter(); }); }
        else e.target.classList.add('allume');
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    io.observe(stats);
    chemin.querySelectorAll('.etape-chemin').forEach(function (li) { io.observe(li); });
  }

  var form = document.getElementById('form');
  if (form) form.addEventListener('change', function (e) { if (e.target.name === 'langue' || e.target.name === 'niveau') rendre(); });
  rendre();
})();
