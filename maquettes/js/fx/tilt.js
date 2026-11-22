// Inclinaison 3D et reflet au survol des éléments [data-tilt] (souris ou stylet uniquement :
// au doigt, fx.css applique un simple enfoncement). Inactif si html[data-fx="off"].
(function () {
  if (!window.LBFX || !LBFX.on()) return;
  var MAX = 8; // degrés

  document.querySelectorAll('[data-tilt]').forEach(function (card) {
    var raf = 0, px = 0, py = 0;

    function appliquer() {
      raf = 0;
      var r = card.getBoundingClientRect();
      var x = (px - r.left) / r.width, y = (py - r.top) / r.height; // 0..1
      card.style.setProperty('--ry', ((x - .5) * 2 * MAX).toFixed(2) + 'deg');
      card.style.setProperty('--rx', ((.5 - y) * 2 * MAX).toFixed(2) + 'deg');
      card.style.setProperty('--mx', (x * 100).toFixed(1) + '%');
      card.style.setProperty('--my', (y * 100).toFixed(1) + '%');
    }

    card.addEventListener('pointermove', function (e) {
      if (e.pointerType === 'touch' || !LBFX.on()) return;
      px = e.clientX; py = e.clientY;
      card.classList.add('is-tilting');
      if (!raf) raf = requestAnimationFrame(appliquer);
    });
    card.addEventListener('pointerleave', function () {
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
      card.classList.remove('is-tilting');
      card.style.removeProperty('--rx'); card.style.removeProperty('--ry');
    });
  });
})();
