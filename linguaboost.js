/* ── Modal functions ─────────────────────── */
function openSignup() {
  var modal = document.getElementById('modal');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeSignup() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

function handleSignup(btn) {
  btn.textContent = '⏳ Création en cours...';
  btn.style.opacity = '0.7';
  btn.disabled = true;
  setTimeout(function () {
    btn.textContent = '✅ Compte créé ! Bienvenue !';
    btn.style.background = 'linear-gradient(135deg,#059669,#10B981)';
    setTimeout(function () { closeSignup(); btn.disabled = false; }, 1500);
  }, 1400);
}

/* ── Wire up all CTA buttons ─────────────── */
document.addEventListener('DOMContentLoaded', function () {

  /* All signup trigger buttons */
  document.querySelectorAll('[data-signup]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      openSignup();
    });
  });

  /* Signup submit button */
  var submitBtn = document.getElementById('signup-btn');
  if (submitBtn) {
    submitBtn.addEventListener('click', function () {
      handleSignup(submitBtn);
    });
  }

  /* Close button */
  var closeBtn = document.getElementById('modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeSignup);
  }

  /* Close on backdrop click */
  var modal = document.getElementById('modal');
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeSignup();
    });
  }

  /* "Déjà un compte" link */
  var loginLink = document.getElementById('login-link');
  if (loginLink) {
    loginLink.addEventListener('click', function (e) {
      e.preventDefault();
      closeSignup();
    });
  }

  /* ── Scroll animations ──────────────────── */
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e, i) {
      if (e.isIntersecting) {
        setTimeout(function () { e.target.classList.add('visible'); }, i * 80);
        if (e.target.id === 'progress-demo') {
          ['bar1', 'bar2', 'bar3', 'bar4'].forEach(function (id) {
            var el = document.getElementById(id);
            if (el) el.classList.add('played');
          });
        }
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(function (el) { observer.observe(el); });

  /* ── Nav scroll effect ──────────────────── */
  window.addEventListener('scroll', function () {
    var nav = document.querySelector('.nav-inner');
    if (!nav) return;
    nav.style.background = window.scrollY > 60
      ? 'rgba(10,15,30,.95)'
      : 'rgba(17,24,39,.85)';
  });

  /* ── Smooth anchor scroll ───────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (!href || href === '#' || href === '#cta') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Phone exercise interaction ─────────── */
  document.querySelectorAll('.phone-opt').forEach(function (opt) {
    opt.addEventListener('click', function () {
      document.querySelectorAll('.phone-opt').forEach(function (o) {
        o.classList.remove('correct');
      });
      opt.classList.add('correct');
    });
  });

  /* ── Language radio buttons ─────────────── */
  document.querySelectorAll('input[name="lang"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
      document.querySelectorAll('input[name="lang"]').forEach(function (r) {
        var div = r.nextElementSibling;
        if (!div) return;
        if (r.checked) {
          div.style.borderColor = 'rgba(139,92,246,.5)';
          div.style.background = 'rgba(139,92,246,.1)';
          div.style.color = '#C4B5FD';
        } else {
          div.style.borderColor = 'rgba(255,255,255,.08)';
          div.style.background = 'transparent';
          div.style.color = 'var(--muted)';
        }
      });
    });
  });

  /* ── Escape key closes modal ────────────── */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeSignup();
  });

});
