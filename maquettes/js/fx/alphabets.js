// Arrière-plan : lettres des alphabets du monde (latin, cyrillique, grec, arabe, devanagari,
// kana, kanji, hangeul…) qui flottent en profondeur, avec une parallaxe très légère au défilement.
// Couche fixe décorative derrière le contenu (aria-hidden, pointer-events: none). Polices système
// uniquement : aucun téléchargement. Inactif si html[data-fx="off"] ; moins de lettres en « lite ».
(function () {
  if (!window.LBFX || !LBFX.on()) return;
  var GLYPHES = ['ñ', 'ç', 'ã', 'ß', 'é', 'Ж', 'Я', 'Ω', 'λ', 'ع', 'ش', 'ह', 'अ', 'あ', 'カ', '字', '語', '한', 'ก', 'ü', 'ø', 'ê', 'Ł', 'ש'];
  var n = LBFX.level === 'lite' ? 10 : (innerWidth < 720 ? 12 : 22);

  // Tirage pseudo-aléatoire reproductible : même décor à chaque visite.
  var graine = 7;
  function alea() { graine = (graine * 16807) % 2147483647; return (graine - 1) / 2147483646; }

  var couche = document.createElement('div');
  couche.className = 'fx-glyphes'; couche.setAttribute('aria-hidden', 'true');
  var items = [];
  for (var i = 0; i < n; i++) {
    var d = .15 + alea() * .85; // profondeur : 1 = proche (grand, net, rapide)
    var s = document.createElement('span');
    s.textContent = GLYPHES[i % GLYPHES.length];
    s.style.left = (alea() * 96).toFixed(1) + '%';
    s.style.fontSize = (28 + d * 70).toFixed(0) + 'px';
    s.style.opacity = (.035 + d * .07).toFixed(3);
    s.style.setProperty('--rot', ((alea() - .5) * 30).toFixed(0) + 'deg');
    couche.appendChild(s);
    items.push({ el: s, d: d, y0: alea() });
  }
  document.body.insertBefore(couche, document.body.firstChild);

  // Position verticale : boucle sur la hauteur de l'écran ; les lettres proches défilent plus vite.
  var raf = 0;
  function placer() {
    raf = 0;
    var h = innerHeight + 160, sy = scrollY;
    items.forEach(function (it) {
      var y = ((it.y0 * h - sy * (.08 + it.d * .25)) % h + h) % h - 80;
      it.el.style.transform = 'translate3d(0,' + y.toFixed(1) + 'px,0) rotate(var(--rot))';
    });
  }
  addEventListener('scroll', function () { if (!raf && LBFX.on()) raf = requestAnimationFrame(placer); }, { passive: true });
  addEventListener('resize', placer);
  placer();
})();
