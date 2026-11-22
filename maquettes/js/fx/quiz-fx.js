// Feedback des quiz : rebond et particules dorées sur une bonne réponse, tremblement sur une erreur
// (le tremblement est en CSS, déclenché par la classe .wrong). Aucun changement dans lecon.js :
// on écoute les clics sur .option au niveau du document, donc APRÈS le gestionnaire du bouton,
// qui a déjà posé .correct ou .wrong.
(function () {
  if (!window.LBFX) return;
  var canvas = null, ctx = null, parts = [], raf = 0;

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.option');
    if (!b || !LBFX.on()) return;
    if (b.classList.contains('correct')) {
      b.classList.remove('fx-hit'); void b.offsetWidth; // relance l'animation
      b.classList.add('fx-hit');
      eclat(b.getBoundingClientRect());
    }
  });

  // Badge débloqué en fin de leçon : grande gerbe autour de la pièce (après son entrée en rotation).
  var fin = document.getElementById('final-result');
  if (fin) new MutationObserver(function () {
    var b = fin.querySelector('.badge');
    if (!fin.hidden && b && LBFX.on()) setTimeout(function () { eclat(b.getBoundingClientRect(), 3); }, 900);
  }).observe(fin, { childList: true });

  // Gerbe de particules dorées depuis le bouton (canvas 2D plein écran, détruit à la fin).
  function eclat(r, fois) {
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.className = 'fx-particles'; canvas.setAttribute('aria-hidden', 'true');
      ctx = canvas.getContext('2d');
    }
    if (!canvas.isConnected) document.body.appendChild(canvas);
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = innerWidth * dpr; canvas.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    var css = getComputedStyle(document.documentElement);
    var couleurs = [css.getPropertyValue('--fx-gold').trim() || '#F5B83D', css.getPropertyValue('--fx-gold-deep').trim() || '#B7791F', '#FFE29A'];
    var n = (LBFX.level === 'lite' ? 14 : 34) * (fois || 1);
    for (var i = 0; i < n; i++) {
      var a = -Math.PI / 2 + (Math.random() - .5) * Math.PI * 1.1, v = 3 + Math.random() * 5;
      parts.push({
        x: r.left + r.width * (.2 + Math.random() * .6), y: r.top + r.height / 2,
        vx: Math.cos(a) * v, vy: Math.sin(a) * v, vie: 1,
        t: 2 + Math.random() * 3, rot: Math.random() * 6, c: couleurs[i % couleurs.length], etoile: i % 4 === 0
      });
    }
    if (!raf) raf = requestAnimationFrame(frame);
  }

  function frame() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    parts = parts.filter(function (p) { return p.vie > 0; });
    parts.forEach(function (p) {
      p.vy += .22; p.vx *= .985; p.x += p.vx; p.y += p.vy; p.rot += .15; p.vie -= .018;
      ctx.save(); ctx.globalAlpha = Math.max(p.vie, 0); ctx.fillStyle = p.c;
      ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      if (p.etoile) { ctx.font = (p.t * 4) + 'px sans-serif'; ctx.fillText('✦', 0, 0); }
      else ctx.fillRect(-p.t, -p.t / 2, p.t * 2, p.t);
      ctx.restore();
    });
    if (parts.length) raf = requestAnimationFrame(frame);
    else { raf = 0; canvas.remove(); }
  }
})();
