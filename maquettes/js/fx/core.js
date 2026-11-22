// Effets visuels : socle commun, chargé dans <head> avant l'affichage.
// Fixe html[data-fx] selon l'appareil, les préférences et le groupe du test A/B :
//   full : tous les effets ; lite : effets légers (appareil faible, économie de données) ;
//   off  : aucun effet animé (prefers-reduced-motion, ou groupe « sobre » du test A/B), repli 2D.
// Forçable pour les tests : ?fx=full|lite|off (mémorisé dans localStorage « lb-fx »), ?fx=auto pour revenir
// au réglage automatique. Un visiteur qui force un niveau n'est pas compté dans la mesure (js/mesure.js).
(function () {
  // Test A/B : la moitié des visiteurs (tirage au sort mémorisé) voit le site sans effets, pour mesurer
  // leur impact. À activer seulement quand supabase/mesure.sql est en place (sinon on prive la moitié
  // des visiteurs des effets sans rien mesurer). Voir docs/06-mesure-impact.md.
  var AB_ACTIF = false;

  var root = document.documentElement;
  var NIVEAUX = ['full', 'lite', 'off'];
  var reduit = window.matchMedia ? matchMedia('(prefers-reduced-motion: reduce)') : null;

  function force() {
    var m = /[?&]fx=(full|lite|off|auto)\b/.exec(location.search);
    try {
      if (m && m[1] === 'auto') { localStorage.removeItem('lb-fx'); return null; }
      if (m) { localStorage.setItem('lb-fx', m[1]); return m[1]; }
      var v = localStorage.getItem('lb-fx'); if (NIVEAUX.indexOf(v) !== -1) return v;
    } catch (e) { if (m && m[1] !== 'auto') return m[1]; }
    return null;
  }

  // Groupe du test A/B, tiré au sort une fois par navigateur.
  function groupe() {
    if (!AB_ACTIF) return 'fx';
    try {
      var g = localStorage.getItem('lb-ab');
      if (g !== 'fx' && g !== 'sobre') { g = Math.random() < .5 ? 'fx' : 'sobre'; localStorage.setItem('lb-ab', g); }
      return g;
    } catch (e) { return 'fx'; }
  }

  var forceLe = force(), g = groupe();
  function detecter() {
    if (forceLe) return forceLe;
    if (g === 'sobre') return 'off';
    if (reduit && reduit.matches) return 'off';
    var c = navigator.connection, faible =
      (c && c.saveData) ||
      (navigator.deviceMemory && navigator.deviceMemory <= 2) ||
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2);
    return faible ? 'lite' : 'full';
  }

  var webgl = null;
  window.LBFX = {
    level: detecter(),
    groupe: g,           // 'fx' ou 'sobre'
    force: !!forceLe,    // niveau forcé à la main : exclu de la mesure
    // Vrai si les effets sont actifs (full ou lite).
    on: function () { return this.level !== 'off'; },
    // Test WebGL paresseux : il crée un contexte, on ne le fait qu'en cas de besoin.
    webgl: function () {
      if (webgl === null) {
        try { var cv = document.createElement('canvas'); webgl = !!(cv.getContext('webgl2') || cv.getContext('webgl')); }
        catch (e) { webgl = false; }
      }
      return webgl;
    }
  };
  root.dataset.fx = LBFX.level;

  // Si l'utilisateur active « réduire les animations » en cours de route, on suit.
  if (reduit && reduit.addEventListener) reduit.addEventListener('change', function () {
    LBFX.level = detecter(); root.dataset.fx = LBFX.level;
  });
})();
