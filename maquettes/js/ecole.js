/* LinguaBoost — interactions du site vitrine (accueil.html) */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* En-tête : transparent puis opaque au scroll */
  var header = $('.site-header');
  function onScroll() { header.classList.toggle('is-scrolled', window.scrollY > 12); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Menu burger */
  var burger = $('.burger');
  var nav = $('#menu');
  function closeMenu() {
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Ouvrir le menu');
  }
  burger.addEventListener('click', function () {
    var open = !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    if (open) $('a', nav).focus();
  });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); burger.focus(); }
  });

  /* Mode sombre */
  var themeBtn = $('[data-theme-toggle]');
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');
  function isDark() { return root.dataset.theme ? root.dataset.theme === 'dark' : systemDark.matches; }
  function syncThemeLabel() { themeBtn.setAttribute('aria-label', isDark() ? 'Activer le mode clair' : 'Activer le mode sombre'); }
  themeBtn.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('lb-theme', next); } catch (e) {}
    syncThemeLabel();
  });
  syncThemeLabel();

  /* Prononciation (Web Speech API) */
  var canSpeak = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  if (!canSpeak) root.classList.add('no-speech');
  function speak(text, lang, btn) {
    if (!canSpeak) return;
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = 0.9;
    var voices = speechSynthesis.getVoices();
    var voice = voices.find(function (v) { return v.lang === lang; }) ||
                voices.find(function (v) { return v.lang.slice(0, 2) === lang.slice(0, 2); });
    if (voice) u.voice = voice;
    $$('.listen.is-speaking').forEach(function (b) { b.classList.remove('is-speaking'); });
    if (btn) {
      btn.classList.add('is-speaking');
      u.onend = u.onerror = function () { btn.classList.remove('is-speaking'); };
    }
    speechSynthesis.speak(u);
  }
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-say]');
    if (btn) speak(btn.dataset.say, btn.dataset.lang, btn);
  });

  /* Bulle « Bonjour » qui change de langue */
  var hellos = [
    { word: 'Bonjour', flag: 'fr', lang: 'fr-FR' },
    { word: 'Hello', flag: 'en', lang: 'en-GB' },
    { word: 'Hola', flag: 'es', lang: 'es-ES' },
    { word: 'Olá', flag: 'br', lang: 'pt-BR' },
    { word: '你好', flag: 'cn', lang: 'zh-CN' },
    { word: 'こんにちは', flag: 'jp', lang: 'ja-JP' }
  ];
  var hello = $('[data-hello]');
  var helloWord = $('[data-hello-word]');
  var helloFlag = $('[data-hello-flag] use');
  var helloIndex = 0;
  var helloPaused = false;
  function showHello(i) {
    var h = hellos[i];
    helloWord.textContent = h.word;
    helloWord.lang = h.lang;
    helloFlag.setAttribute('href', '#flag-' + h.flag);
  }
  function nextHello() {
    if (helloPaused || document.hidden) return;
    helloIndex = (helloIndex + 1) % hellos.length;
    if (reduceMotion.matches) { showHello(helloIndex); return; }
    helloWord.classList.add('is-out');
    setTimeout(function () {
      helloWord.classList.remove('is-out');
      showHello(helloIndex);
      helloWord.classList.add('is-in');
      setTimeout(function () { helloWord.classList.remove('is-in'); }, 350);
    }, 250);
  }
  // Rotation automatique mise en pause au survol / focus (WCAG 2.2.2) et si le mouvement est réduit
  if (!reduceMotion.matches) setInterval(nextHello, 2200);
  ['mouseenter', 'focusin'].forEach(function (ev) { hello.addEventListener(ev, function () { helloPaused = true; }); });
  ['mouseleave', 'focusout'].forEach(function (ev) { hello.addEventListener(ev, function () { helloPaused = false; }); });
  $('[data-hello-listen]').addEventListener('click', function () {
    var h = hellos[helloIndex];
    speak(h.word, h.lang, this);
  });
  // Sans animation : un clic sur la bulle passe à la langue suivante
  hello.addEventListener('click', function (e) {
    if (reduceMotion.matches && !e.target.closest('button')) { helloIndex = (helloIndex + 1) % hellos.length; showHello(helloIndex); }
  });

  /* Apparition des sections au scroll */
  var reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var siblings = $$('.reveal', el.parentElement);
        el.style.transitionDelay = Math.min(siblings.indexOf(el), 4) * 80 + 'ms';
        el.classList.add('is-visible');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* Ligne de progression de la méthode */
  var steps = $('[data-steps]');
  var stepsLine = $('[data-steps-line]');
  function drawSteps() {
    if (reduceMotion.matches) { stepsLine.style.setProperty('--p', 1); return; }
    var r = steps.getBoundingClientRect();
    var vh = window.innerHeight;
    var p = (vh * 0.75 - r.top) / (r.height + vh * 0.1);
    stepsLine.style.setProperty('--p', Math.max(0, Math.min(1, p)).toFixed(3));
  }
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { drawSteps(); ticking = false; });
  }, { passive: true });
  window.addEventListener('resize', drawSteps);
  drawSteps();

  /* Formulaire d'essai : préremplir langue et niveau */
  var trialLang = $('#trial-lang');
  var trialLevel = $('[data-trial-level]');
  document.addEventListener('click', function (e) {
    var link = e.target.closest('[data-pick-lang]');
    if (link) trialLang.value = link.dataset.pickLang;
  });

  /* Test de niveau */
  var quizData = {
    en: [
      { t: 'Complète :', f: 'I ___ from Lyon.', fl: 'en', o: ['is', 'am', 'are'], c: 1 },
      { t: 'Complète :', f: 'If I ___ more time, I would travel more.', fl: 'en', o: ['have', 'will have', 'had'], c: 2 },
      { t: 'Que veut dire', f: 'to touch base', fl: 'en', a: ' en réunion ?', o: ['Toucher le fond', 'Faire un point rapide', 'Poser les bases'], c: 1 }
    ],
    es: [
      { t: 'Complète :', f: 'Yo ___ francés.', fl: 'es', o: ['soy', 'es', 'estoy'], c: 0 },
      { t: 'Complète :', f: 'Cuando ___ a Madrid, te llamaré.', fl: 'es', o: ['llego', 'llegaré', 'llegue'], c: 2 },
      { t: 'Que veut dire', f: 'estar en las nubes', fl: 'es', a: ' ?', o: ['Être très heureux', 'Être dans la lune', 'Voyager en avion'], c: 1 }
    ],
    pt: [
      { t: 'Complète :', f: 'Eu ___ francês.', fl: 'pt-BR', o: ['é', 'sou', 'estou'], c: 1 },
      { t: 'Complète :', f: 'Se eu ___ mais tempo, viajaria mais.', fl: 'pt-BR', o: ['tivesse', 'tenho', 'terei'], c: 0 },
      { t: 'Que veut dire', f: 'dar um jeitinho', fl: 'pt-BR', a: ' ?', o: ['Donner un coup de main', 'Faire une blague', 'Trouver une solution astucieuse'], c: 2 }
    ],
    zh: [
      { t: 'Complète :', f: '我___法国人。(Wǒ ___ Fǎguó rén.)', fl: 'zh-CN', o: ['是 (shì)', '有 (yǒu)', '在 (zài)'], c: 0 },
      { t: 'Complète « Je suis déjà allé à Pékin » :', f: '我去___北京。', fl: 'zh-CN', o: ['着 (zhe)', '过 (guo)', '吗 (ma)'], c: 1 },
      { t: 'Que veut dire', f: '马马虎虎 (mǎmǎhūhū)', fl: 'zh-CN', a: ' ?', o: ['Très rapidement', 'Comme ci, comme ça', 'Monter à cheval'], c: 1 }
    ],
    ja: [
      { t: 'Quand dit-on', f: 'はじめまして (hajimemashite)', fl: 'ja', a: ' ?', o: ['Pour dire au revoir', 'En rencontrant quelqu\'un', 'Pour remercier'], c: 1 },
      { t: 'Complète « Je vais à Tokyo » :', f: '東京___行きます。', fl: 'ja', o: ['へ (e)', 'を (o)', 'が (ga)'], c: 0 },
      { t: 'À quoi sert', f: 'よろしくお願いします', fl: 'ja', a: ' ?', o: ['S\'excuser d\'un retard', 'Commander au restaurant', 'Demander une bonne collaboration'], c: 2 }
    ]
  };
  var levels = ['A1', 'A2', 'B1', 'B1', 'B2', 'C1', 'C2'];
  var scale = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  var verdicts = {
    A1: 'Tu pars de zéro ou presque, et c\'est parfait : tes premières phrases arrivent dès le premier cours.',
    A2: 'Tu as des bases. On va les dépoussiérer et te faire parler tout de suite.',
    B1: 'Tu te débrouilles. Il te manque surtout de la pratique orale pour oser vraiment.',
    B2: 'Tu es à l\'aise. On vise la fluidité en réunion et les nuances qui font la différence.',
    C1: 'Très bon niveau ! On peaufine ton style, ton accent et ton vocabulaire métier.',
    C2: 'Impressionnant. Avec un prof natif, on travaille l\'éloquence et les expressions idiomatiques.'
  };
  var langNames = { en: 'anglais', es: 'espagnol', pt: 'portugais', zh: 'chinois', ja: 'japonais' };
  var quiz = $('[data-quiz]');
  var qStep = $('[data-quiz-step]', quiz);
  var qResult = $('[data-quiz-result]', quiz);
  var qLegend = $('[data-quiz-q]', quiz);
  var qOptions = $('[data-quiz-options]', quiz);
  var qCount = $('[data-quiz-count]', quiz);
  var qBar = $('[data-quiz-bar]', quiz);
  var quizLang = 'en', qIndex = 0, score = 0;

  function renderQuestion() {
    var q = quizData[quizLang][qIndex];
    qCount.textContent = 'Question ' + (qIndex + 1) + ' sur 3';
    qBar.style.width = (qIndex / 3 * 100) + '%';
    qLegend.textContent = q.t + ' ';
    var f = document.createElement('span');
    f.lang = q.fl;
    f.textContent = q.f;
    qLegend.appendChild(f);
    if (q.a) qLegend.appendChild(document.createTextNode(q.a));
    qOptions.innerHTML = '';
    q.o.forEach(function (label, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'quiz-option';
      b.innerHTML = '<span class="key" aria-hidden="true">' + 'ABC'[i] + '</span>';
      var s = document.createElement('span');
      s.textContent = label;
      b.appendChild(s);
      b.addEventListener('click', function () { answer(i, b); });
      qOptions.appendChild(b);
    });
  }
  function answer(i, btn) {
    $$('.quiz-option', qOptions).forEach(function (b) { b.disabled = true; });
    btn.classList.add('is-chosen');
    if (i === quizData[quizLang][qIndex].c) score += qIndex + 1; // 1, 2 puis 3 points selon la difficulté
    setTimeout(function () {
      qIndex++;
      if (qIndex < 3) {
        renderQuestion();
        $('.quiz-option', qOptions).focus();
      } else {
        showResult();
      }
    }, reduceMotion.matches ? 0 : 280);
  }
  function showResult() {
    var level = levels[score];
    var pos = scale.indexOf(level);
    qBar.style.width = '100%';
    qStep.hidden = true;
    qResult.hidden = false;
    $('[data-level]', quiz).textContent = level;
    $('[data-verdict]', quiz).textContent = verdicts[level];
    $$('.gauge-scale li', quiz).forEach(function (li, i) { li.classList.toggle('is-current', i === pos); });
    var gauge = $('[data-gauge]', quiz);
    gauge.style.strokeDashoffset = 100;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { gauge.style.strokeDashoffset = 100 - (pos + 1) / 6 * 100; });
    });
    var cta = $('[data-quiz-cta]', quiz);
    cta.firstChild.textContent = 'Réserver mon essai en ' + langNames[quizLang] + ' (niveau ' + level + ') ';
    cta.dataset.pickLang = quizLang;
    trialLevel.value = level;
    cta.focus({ preventScroll: true });
  }
  function resetQuiz() {
    qIndex = 0;
    score = 0;
    qResult.hidden = true;
    qStep.hidden = false;
    renderQuestion();
  }
  $$('[data-quiz-lang]', quiz).forEach(function (b, i, all) {
    b.tabIndex = b.getAttribute('aria-checked') === 'true' ? 0 : -1;
    b.addEventListener('click', function () {
      all.forEach(function (x) { x.setAttribute('aria-checked', String(x === b)); x.tabIndex = x === b ? 0 : -1; });
      quizLang = b.dataset.quizLang;
      resetQuiz();
    });
    // Flèches clavier dans le groupe radio
    b.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      var n = all[(i + d + all.length) % all.length];
      n.click();
      n.focus();
    });
  });
  $('[data-quiz-restart]', quiz).addEventListener('click', function () { resetQuiz(); $('.quiz-option', qOptions).focus(); });
  renderQuestion();

  /* Bascule mensuel / trimestriel */
  $$('[data-billing]').forEach(function (b, _, all) {
    b.addEventListener('click', function () {
      var period = b.dataset.billing;
      all.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      $$('.amount').forEach(function (el) {
        el.classList.add('is-changing');
        setTimeout(function () { el.textContent = el.dataset[period]; el.classList.remove('is-changing'); }, reduceMotion.matches ? 0 : 180);
      });
      $$('.price-note').forEach(function (el) { el.textContent = el.dataset[period === 'month' ? 'noteMonth' : 'noteQuarter']; });
    });
  });

  /* Carrousels : langues, profs, témoignages (flèches, points, clavier, swipe natif) */
  $$('[data-carousel]').forEach(function (track) {
    var name = track.dataset.carousel;
    var items = $$(':scope > li', track);
    var prev = $('[data-carousel-prev="' + name + '"]');
    var next = $('[data-carousel-next="' + name + '"]');
    var dotsBox = $('[data-carousel-dots="' + name + '"]');
    var behavior = function () { return reduceMotion.matches ? 'auto' : 'smooth'; };

    function stepWidth() { return items[0].getBoundingClientRect().width + 20; }
    function slide(dir) {
      var perView = Math.max(1, Math.floor(track.clientWidth / stepWidth()));
      track.scrollBy({ left: dir * stepWidth() * perView, behavior: behavior() });
    }
    function goTo(i) {
      track.scrollTo({ left: items[i].offsetLeft - items[0].offsetLeft, behavior: behavior() });
    }

    var dots = items.map(function (item, i) {
      var d = document.createElement('button');
      d.type = 'button';
      d.setAttribute('aria-label', 'Aller à l\'élément ' + (i + 1) + ' sur ' + items.length);
      d.addEventListener('click', function () { goTo(i); });
      if (dotsBox) dotsBox.appendChild(d);
      return d;
    });

    function update() {
      var max = track.scrollWidth - track.clientWidth - 2;
      if (prev) prev.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = track.scrollLeft >= max;
      var current = Math.round(track.scrollLeft / stepWidth());
      if (track.scrollLeft >= max) current = items.length - 1;
      dots.forEach(function (d, i) { d.setAttribute('aria-current', String(i === current)); });
    }

    if (prev) prev.addEventListener('click', function () { slide(-1); });
    if (next) next.addEventListener('click', function () { slide(1); });
    track.addEventListener('keydown', function (e) {
      if (e.target !== track) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); slide(1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); slide(-1); }
    });
    var raf = 0;
    track.addEventListener('scroll', function () {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  });

  /* Formulaires (démo : pas d'envoi réel) */
  var emailOk = function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); };
  function setMsg(el, text, error) { el.textContent = text; el.classList.toggle('is-error', !!error); }

  var trialForm = $('[data-trial-form]');
  trialForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = $('#trial-name'), email = $('#trial-email'), msg = $('[data-trial-msg]');
    var badName = !name.value.trim(), badEmail = !emailOk(email.value.trim());
    name.setAttribute('aria-invalid', String(badName));
    email.setAttribute('aria-invalid', String(badEmail));
    if (badName || badEmail) {
      setMsg(msg, badName ? 'Dis-nous ton prénom pour qu\'on sache comment t\'appeler.' : 'Ton e-mail semble incomplet, tu peux vérifier ?', true);
      (badName ? name : email).focus();
      return;
    }
    var lang = trialLang.options[trialLang.selectedIndex].text.toLowerCase();
    setMsg(msg, 'C\'est noté, ' + name.value.trim() + ' ! On t\'envoie tes créneaux d\'essai en ' + lang + ' par e-mail dans quelques minutes.');
    trialForm.reset();
  });

  var newsForm = $('[data-news-form]');
  newsForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var input = $('#news-email'), msg = $('[data-news-msg]');
    if (!emailOk(input.value.trim())) {
      input.setAttribute('aria-invalid', 'true');
      setMsg(msg, 'Ton e-mail semble incomplet.', true);
      input.focus();
      return;
    }
    input.setAttribute('aria-invalid', 'false');
    setMsg(msg, 'Bienvenue ! Ta première expression arrive lundi.');
    newsForm.reset();
  });
})();

// Cours par niveau : le choix de la langue met à jour les titres et les liens.
(function () {
  var groupe = document.querySelector('.levels-langs');
  if (!groupe) return;
  var DATA = {
    en: { prof: 'Emma', lang: 'en', titres: { A1: 'Unit 1 · At the café', A2: 'Unit 3 · At the hotel', B1: 'Unit 7 · A problem with the room', B2: 'Unit 9 · The job interview', C1: 'Unit 12 · Closing the deal', C2: 'Unit 15 · A heated debate' } },
    es: { prof: 'Lucía', lang: 'es', titres: { A1: 'Unidad 1 · En la cafetería', A2: 'Unidad 3 · En el hotel', B1: 'Unidad 7 · Un problema con la habitación', B2: 'Unidad 9 · La entrevista de trabajo', C1: 'Unidad 12 · Cerrar el trato', C2: 'Unidad 15 · Un debate encendido' } },
    pt: { prof: 'Rafael', lang: 'pt-BR', titres: { A1: 'Unidade 1 · No café', A2: 'Unidade 3 · No hotel', B1: 'Unidade 7 · Um problema no quarto', B2: 'Unidade 9 · A entrevista de emprego', C1: 'Unidade 12 · Fechar o negócio', C2: 'Unidade 15 · Um debate aceso' } }
  };
  var boutons = Array.prototype.slice.call(groupe.querySelectorAll('[data-level-lang]'));
  function choisir(code, focus) {
    var d = DATA[code];
    boutons.forEach(function (b) {
      var actif = b.dataset.levelLang === code;
      b.setAttribute('aria-checked', actif ? 'true' : 'false');
      b.tabIndex = actif ? 0 : -1;
      if (actif && focus) b.focus();
    });
    document.querySelectorAll('.level-card').forEach(function (carte) {
      var n = carte.dataset.level, q = '?langue=' + code + '&niveau=' + n;
      var unite = carte.querySelector('[data-level-unit]');
      unite.textContent = d.titres[n];
      unite.lang = d.lang;
      carte.querySelector('[data-level-lecon]').href = 'lecon.html' + q;
      carte.querySelector('[data-level-3d]').href = 'cours-3d.html' + q;
      carte.querySelector('[data-level-prof]').textContent = d.prof;
    });
  }
  groupe.addEventListener('click', function (e) {
    var b = e.target.closest('[data-level-lang]');
    if (b) choisir(b.dataset.levelLang);
  });
  groupe.addEventListener('keydown', function (e) {
    var i = boutons.indexOf(document.activeElement);
    if (i < 0) return;
    var pas = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (!pas) return;
    e.preventDefault();
    choisir(boutons[(i + pas + boutons.length) % boutons.length].dataset.levelLang, true);
  });
  choisir('en');
})();
