// Progression de l'apprenant, gardée dans ce navigateur (localStorage « lb-progres »).
// Alimentée par lecon.js, affichée par js/fx/progression.js (Mon parcours).
// Format : { jours: ['AAAA-MM-JJ', …], xp: 0,
//            lecons: { 'en-A2': { etape: 3, fini: true, score: 4, total: 5, badge: { nom, icone }, date } } }
// Pourra être synchronisé avec Supabase plus tard sans changer cette API.
(function () {
  var CLE = 'lb-progres';
  var NIVEAUX = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  function jour(d) {
    d = d || new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function lire() {
    var p = null;
    try { p = JSON.parse(localStorage.getItem(CLE)); } catch (e) {}
    p = p && typeof p === 'object' ? p : {};
    if (!Array.isArray(p.jours)) p.jours = [];
    if (typeof p.xp !== 'number') p.xp = 0;
    if (!p.lecons || typeof p.lecons !== 'object') p.lecons = {};
    return p;
  }
  function ecrire(p) { try { localStorage.setItem(CLE, JSON.stringify(p)); } catch (e) {} }
  function lecon(p, lg, niv) { var k = lg + '-' + niv; return p.lecons[k] || (p.lecons[k] = { etape: 0, fini: false }); }
  // Mesure d'audience (js/mesure.js), si elle est chargée : une étape vue compte une fois par page.
  var etapesVues = {};
  function mesurer(n, p) { if (window.LBMesure) LBMesure.evt(n, p); }

  window.LBProgres = {
    NIVEAUX: NIVEAUX,
    lire: lire,
    // De l'XP gagnée aujourd'hui : compte pour la série de jours.
    activite: function (xp) {
      var p = lire(), j = jour();
      if (p.jours.indexOf(j) === -1) { p.jours.push(j); p.jours = p.jours.slice(-400); }
      p.xp += xp || 0;
      ecrire(p);
    },
    // Étape la plus avancée atteinte dans une leçon.
    etape: function (lg, niv, n) {
      var p = lire(), l = lecon(p, lg, niv);
      if (n > l.etape) { l.etape = n; ecrire(p); }
      if (!etapesVues[n]) { etapesVues[n] = true; mesurer('lecon_etape', { lecon: lg + '-' + niv, etape: n }); }
    },
    // Bilan terminé ; badge = { nom, icone } si le seuil est atteint (on garde le meilleur résultat).
    terminer: function (lg, niv, score, total, badge) {
      var p = lire(), l = lecon(p, lg, niv);
      l.fini = true; l.date = jour();
      if (l.score == null || score > l.score) { l.score = score; l.total = total; }
      if (badge) l.badge = { nom: badge.nom, icone: badge.icone };
      ecrire(p);
      mesurer('lecon_fin', { lecon: lg + '-' + niv, score: score, total: total, badge: !!badge, duree_s: Math.round(performance.now() / 1000) });
    },
    // Jours consécutifs avec de l'activité, jusqu'à aujourd'hui (ou hier : la série n'est pas encore perdue).
    serie: function () {
      var jours = lire().jours, d = new Date(), n = 0;
      if (jours.indexOf(jour(d)) === -1) d.setDate(d.getDate() - 1);
      while (jours.indexOf(jour(d)) !== -1) { n++; d.setDate(d.getDate() - 1); }
      return n;
    },
    aujourdhui: function () { return lire().jours.indexOf(jour()) !== -1; }
  };
})();
