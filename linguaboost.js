/* ── Scroll animations ──────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      if (e.target.id === 'progress-demo') {
        ['bar1','bar2','bar3','bar4'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.classList.add('played');
        });
      }
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ── Modal ──────────────────────────────── */
function openSignup() {
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeSignup() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
  document.body.style.overflow = '';
}
document.querySelectorAll('a[href="#cta"]').forEach(a => {
  a.addEventListener('click', e => { e.preventDefault(); openSignup(); });
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSignup(); });

function handleSignup() {
  const btn = event.currentTarget;
  btn.textContent = '⏳ Création en cours...';
  btn.style.opacity = '.7';
  setTimeout(() => {
    btn.textContent = '✅ Compte créé ! Bienvenue !';
    btn.style.background = 'linear-gradient(135deg,#059669,#10B981)';
    setTimeout(() => closeSignup(), 1500);
  }, 1400);
}

/* ── Nav scroll effect ──────────────────── */
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav-inner');
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(10,15,30,.95)';
  } else {
    nav.style.background = 'rgba(17,24,39,.85)';
  }
});

/* ── Smooth anchor scroll ───────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#cta') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── Phone exercise interaction ─────────── */
document.querySelectorAll('.phone-opt').forEach(opt => {
  opt.addEventListener('click', function() {
    document.querySelectorAll('.phone-opt').forEach(o => o.classList.remove('correct'));
    this.classList.add('correct');
  });
});

/* ── Language radio buttons ─────────────── */
document.querySelectorAll('input[name="lang"]').forEach(radio => {
  radio.addEventListener('change', function() {
    document.querySelectorAll('input[name="lang"]').forEach(r => {
      const div = r.nextElementSibling;
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
