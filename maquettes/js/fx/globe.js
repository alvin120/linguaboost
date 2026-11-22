// Globe 3D du hero (accueil) : globe en points WebGL (cobe, vendor/cobe.js) derrière la maquette
// du téléphone. Il tourne lentement, se fait pivoter à la souris ou au doigt, et des bulles
// « Hello / ¡Hola! / Olá! / Bonjour » apparaissent sur les pays visibles.
// - Chargé en différé (après le chargement de la page, quand le hero est visible) : ne pèse pas sur le LCP.
// - Rendu suspendu quand le hero sort de l'écran ou que l'onglet est masqué.
// - data-fx="off" ou écran < 960 px : rien (version actuelle). Sans WebGL : simple halo en CSS.
// Décoratif : aria-hidden, le contenu du hero reste inchangé pour les lecteurs d'écran et le SEO.

var LIEUX = [
  { id: 'paris', loc: [48.85, 2.35], mot: 'Bonjour', lang: 'fr', cle: 'brand' },
  { id: 'londres', loc: [51.5, -0.13], mot: 'Hello!', lang: 'en', cle: 'en' },
  { id: 'newyork', loc: [40.71, -74.0], mot: 'Hi there!', lang: 'en', cle: 'en' },
  { id: 'sydney', loc: [-33.87, 151.2], mot: "G'day!", lang: 'en', cle: 'en' },
  { id: 'dublin', loc: [53.35, -6.26], mot: 'Hiya!', lang: 'en', cle: 'en' },
  { id: 'madrid', loc: [40.42, -3.7], mot: '¡Hola!', lang: 'es', cle: 'es' },
  { id: 'mexico', loc: [19.43, -99.13], mot: '¡Qué onda!', lang: 'es', cle: 'es' },
  { id: 'buenosaires', loc: [-34.6, -58.38], mot: '¡Che, hola!', lang: 'es', cle: 'es' },
  { id: 'bogota', loc: [4.71, -74.07], mot: '¡Buenas!', lang: 'es', cle: 'es' },
  { id: 'lisbonne', loc: [38.72, -9.14], mot: 'Olá!', lang: 'pt', cle: 'pt' },
  { id: 'saopaulo', loc: [-23.55, -46.63], mot: 'Oi, tudo bem?', lang: 'pt', cle: 'pt' },
  { id: 'luanda', loc: [-8.84, 13.23], mot: 'Olá!', lang: 'pt', cle: 'pt' },
  { id: 'macao', loc: [22.2, 113.54], mot: 'Olá!', lang: 'pt', cle: 'pt' },
  { id: 'delhi', loc: [28.61, 77.21], mot: 'Hello!', lang: 'en', cle: 'en' },
  { id: 'lecap', loc: [-33.92, 18.42], mot: 'Howzit!', lang: 'en', cle: 'en' }
];
var MAX_BULLES = 3;
var ELEVATION = 0.02; // hauteur des repères au-dessus du globe (unités cobe)

var hero = document.querySelector('.hero');
var phone = hero && hero.querySelector('.phone');
// Réservé aux écrans larges : sur mobile le téléphone (pleine largeur) masquerait le globe.
if (hero && phone && window.LBFX && LBFX.on() && matchMedia('(min-width: 960px)').matches) {
  // Scène : le téléphone passe au premier plan, le globe derrière (même cellule de grille).
  var scene = document.createElement('div');
  scene.className = 'globe-scene';
  phone.parentNode.insertBefore(scene, phone);
  var boite = document.createElement('div');
  boite.className = 'globe'; boite.setAttribute('aria-hidden', 'true');
  scene.appendChild(boite); scene.appendChild(phone);

  if (!LBFX.webgl()) boite.classList.add('globe-fallback');
  else {
    var demarrer = function () {
      var vu = new IntersectionObserver(function (es) {
        if (es[0].isIntersecting) { vu.disconnect(); import('../../vendor/cobe.js').then(function (m) { lancer(m.default); }); }
      });
      vu.observe(boite);
    };
    var plusTard = function () { (window.requestIdleCallback || setTimeout)(demarrer, { timeout: 1500 }); };
    if (document.readyState === 'complete') plusTard(); else addEventListener('load', plusTard);
  }
}

function rgb(hex) {
  var m = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(hex.trim());
  return m ? [1, 2, 3].map(function (i) { return parseInt(m[i], 16) / 255; }) : [1, 1, 1];
}

function lancer(createGlobe) {
  var lite = LBFX.level === 'lite';
  var canvas = document.createElement('canvas');
  boite.appendChild(canvas);
  var dpr = Math.min(window.devicePixelRatio || 1, lite ? 1 : 2);
  var css = getComputedStyle(document.documentElement);

  function palette() {
    var sombre = css.getPropertyValue('color-scheme').trim() === 'dark';
    return {
      dark: sombre ? 1 : 0,
      baseColor: sombre ? [0.32, 0.30, 0.40] : [0.96, 0.94, 1],
      glowColor: sombre ? [0.25, 0.20, 0.42] : [0.97, 0.96, 0.99],
      mapBrightness: sombre ? 4 : 6,
      markerColor: rgb(css.getPropertyValue('--fx-gold'))
    };
  }

  var taille = 0, phi = -2.3, theta = 0.22, vitesse = 0.0022;
  var p = palette();
  var globe = createGlobe(canvas, {
    devicePixelRatio: dpr, width: 600 * dpr, height: 600 * dpr,
    phi: phi, theta: theta, dark: p.dark, diffuse: 1.2, mapSamples: lite ? 9000 : 16000,
    mapBrightness: p.mapBrightness, baseColor: p.baseColor, markerColor: p.markerColor, glowColor: p.glowColor,
    // Repères sans « id » : sinon cobe crée des <div> d'ancrage déplacés à chaque image.
    markers: LIEUX.map(function (l) { return { location: l.loc, size: l.cle === 'brand' ? 0.05 : 0.04 }; }),
    markerElevation: ELEVATION, opacity: 0.85
  });
  // cobe 2.0.1 réécrit à chaque image une feuille « :root{…} » ajoutée à <head> à la création,
  // ce qui force le recalcul des styles de toute la page. Inutile ici : on la détache du document.
  var feuille = document.head.lastElementChild;
  if (feuille && feuille.tagName === 'STYLE') feuille.remove();

  // Position à l'écran des repères : même projection que cobe (canvas carré, scale 1, offset 0).
  var vecteurs = {}, ecran = {};
  LIEUX.forEach(function (l) {
    var la = l.loc[0] * Math.PI / 180, lo = l.loc[1] * Math.PI / 180 - Math.PI, c = Math.cos(la), r = 0.8 + ELEVATION;
    vecteurs[l.id] = [-c * Math.cos(lo) * r, Math.sin(la) * r, c * Math.sin(lo) * r];
  });
  function projeter() {
    var ct = Math.cos(theta), st = Math.sin(theta), cp = Math.cos(phi), sp = Math.sin(phi);
    LIEUX.forEach(function (l) {
      var v = vecteurs[l.id], x = cp * v[0] + sp * v[2], y = sp * st * v[0] + ct * v[1] - cp * st * v[2];
      var devant = -sp * ct * v[0] + st * v[1] + cp * ct * v[2] >= 0 || x * x + y * y >= .64;
      ecran[l.id] = { x: (x + 1) / 2 * taille, y: (1 - y) / 2 * taille, v: devant };
    });
  }

  // Bulles (décoratives)
  var bulles = {};
  LIEUX.forEach(function (l) {
    var b = document.createElement('span');
    b.className = 'globe-bulle'; b.lang = l.lang; b.dataset.cle = l.cle; b.textContent = l.mot;
    canvas.parentNode.appendChild(b); bulles[l.id] = b;
  });

  // Zone couverte par le téléphone (en px dans le repère du globe), recalculée au redimensionnement.
  var cache = null;
  function mesurer() {
    var g = canvas.getBoundingClientRect(), t = phone.getBoundingClientRect();
    taille = g.width;
    cache = { l: t.left - g.left, r: t.right - g.left, t: t.top - g.top, b: t.bottom - g.top, estompe: matchMedia('(min-width: 960px)').matches, w: {} };
    LIEUX.forEach(function (l) { cache.w[l.id] = bulles[l.id].offsetWidth || 90; }); // largeurs lues une fois (pas à chaque image)
  }
  addEventListener('resize', function () { cache = null; });

  // Glisser pour faire tourner (pan-y laisse le défilement vertical au doigt).
  var glisse = null, elan = 0, survol = null;
  var glisseMesure = false;
  canvas.addEventListener('pointerdown', function (e) {
    glisse = { x: e.clientX, phi: phi }; elan = 0; canvas.setPointerCapture(e.pointerId);
    if (!glisseMesure && window.LBMesure) { glisseMesure = true; LBMesure.evt('globe', { action: 'glisser' }); }
  });
  canvas.addEventListener('pointermove', function (e) {
    if (glisse) {
      var nphi = glisse.phi + (e.clientX - glisse.x) / taille * 3;
      elan = nphi - phi; phi = nphi;
    } else survol = proche(e);
  });
  function lacher() { glisse = null; }
  canvas.addEventListener('pointerup', lacher); canvas.addEventListener('pointercancel', lacher);
  canvas.addEventListener('pointerleave', function () { survol = null; });
  canvas.addEventListener('click', function (e) { survol = proche(e); });

  function proche(e) {
    var g = canvas.getBoundingClientRect(), x = e.clientX - g.left, y = e.clientY - g.top, best = null, d0 = 36 * 36;
    LIEUX.forEach(function (l) {
      var q = ecran[l.id]; if (!q || !q.v) return;
      var d = (q.x - x) * (q.x - x) + (q.y - y) * (q.y - y);
      if (d < d0) { d0 = d; best = l.id; }
    });
    return best;
  }

  // Thème clair / sombre : on suit les changements.
  function retheme() { css = getComputedStyle(document.documentElement); var q = palette(); globe.update(q); }
  new MutationObserver(retheme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', retheme);

  // Boucle de rendu, suspendue hors écran / onglet masqué.
  var actif = true, raf = 0, dernier = 0, pas = lite ? 33 : 0;
  function frame(t) {
    raf = requestAnimationFrame(frame);
    if (t - dernier < pas) return;
    dernier = t;
    if (!glisse) { phi += vitesse + elan; elan *= 0.92; }
    globe.update({ phi: phi, theta: theta });
    if (!cache) mesurer();
    projeter();
    // Bulles affichées : le repère survolé, puis au plus MAX_BULLES autres, ni cachées par le
    // téléphone, ni dans la zone estompée, ni chevauchant une bulle déjà placée.
    var places = [], ordre = survol ? [survol] : [];
    LIEUX.forEach(function (l) { if (l.id !== survol) ordre.push(l.id); });
    ordre.forEach(function (id) {
      var b = bulles[id], q = ecran[id], ok = false;
      if (q.v) {
        var r = { l: q.x - 10, r: q.x - 10 + cache.w[id], t: q.y - 46, b: q.y - 14 };
        var cache_ = r.r > cache.l && r.l < cache.r && r.b > cache.t && r.t < cache.b;
        var estompe = cache.estompe && q.x < taille * .3; // texte du hero à gauche
        var chevauche = places.some(function (o) { return r.l < o.r + 6 && r.r > o.l - 6 && r.t < o.b + 4 && r.b > o.t - 4; });
        ok = id === survol || (!cache_ && !estompe && !chevauche && places.length < MAX_BULLES);
        if (ok) places.push(r);
        b.style.transform = 'translate(' + q.x.toFixed(1) + 'px,' + q.y.toFixed(1) + 'px)';
      }
      b.classList.toggle('on', ok);
    });
  }
  function basculer() {
    var doit = actif && !document.hidden && LBFX.on();
    if (doit && !raf) raf = requestAnimationFrame(frame);
    if (!doit && raf) { cancelAnimationFrame(raf); raf = 0; }
  }
  new IntersectionObserver(function (es) { actif = es[0].isIntersecting; basculer(); }).observe(boite);
  document.addEventListener('visibilitychange', basculer);
  requestAnimationFrame(function () { canvas.classList.add('pret'); });
  basculer();
}
