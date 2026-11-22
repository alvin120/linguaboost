// Mesure d'audience anonyme, pour évaluer l'impact des effets 3D (test A/B, voir docs/06-mesure-impact.md).
// Chargé dans <head> après js/fx/core.js. Les événements partent par lots vers /api/evenements.
//
// Ce qui est envoyé : un identifiant aléatoire (renouvelé après 13 mois), le groupe A/B, le niveau
// d'effets, mobile ou non, la page et des faits d'usage (étape de leçon, bonne / mauvaise réponse,
// temps actif, Core Web Vitals…). Jamais de texte saisi, de nom, d'adresse e-mail ni d'adresse IP.
// Rien n'est envoyé si le visiteur s'y oppose (infos.html#cookies), si le navigateur envoie
// Global Privacy Control ou Do Not Track, ou si le niveau d'effets est forcé à la main (?fx=…).
(function () {
  var URL_API = '/api/evenements';
  var TREIZE_MOIS = 395 * 864e5;
  var page = (location.pathname.split('/').pop() || 'accueil.html').replace(/\.html$/, '') || 'accueil';

  function lire(k, store) { try { return (store || localStorage).getItem(k); } catch (e) { return null; } }
  function ecrire(k, v, store) { try { (store || localStorage).setItem(k, v); } catch (e) {} }
  function uuid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16);
    });
  }

  function refuse() {
    return lire('lb-mesure') === 'non' || navigator.globalPrivacyControl === true ||
      navigator.doNotTrack === '1' || window.doNotTrack === '1' || !window.LBFX || LBFX.force;
  }

  var file = [], minuterie = 0;
  var api = window.LBMesure = {
    actif: function () { return !refuse(); },
    // Opposition (true) ou retrait de l'opposition (false), depuis infos.html.
    refuser: function (oui) {
      if (oui) { ecrire('lb-mesure', 'non'); file = []; try { localStorage.removeItem('lb-mesure-id'); } catch (e) {} }
      else { try { localStorage.removeItem('lb-mesure'); } catch (e) {} }
    },
    evt: function (n, p) {
      if (refuse()) return;
      file.push({ n: n, page: page, p: p || {} });
      if (file.length >= 20) envoyer();
      else if (!minuterie) minuterie = setTimeout(envoyer, 15000);
    }
  };

  function visiteur() {
    var v = null;
    try { v = JSON.parse(lire('lb-mesure-id')); } catch (e) {}
    if (!v || !v.id || Date.now() - v.depuis > TREIZE_MOIS) { v = { id: uuid(), depuis: Date.now() }; ecrire('lb-mesure-id', JSON.stringify(v)); }
    return v.id;
  }
  function session() {
    var s = lire('lb-mesure-session', sessionStorage);
    if (!s) { s = uuid(); ecrire('lb-mesure-session', s, sessionStorage); }
    return s;
  }

  function envoyer() {
    clearTimeout(minuterie); minuterie = 0;
    if (!file.length || refuse()) { file = []; return; }
    var lot = JSON.stringify({
      v: visiteur(), s: session(), g: LBFX.groupe, fx: LBFX.level,
      m: !!(window.matchMedia && matchMedia('(pointer: coarse)').matches), e: file.splice(0, 50)
    });
    var ok = false;
    try { ok = navigator.sendBeacon && navigator.sendBeacon(URL_API, new Blob([lot], { type: 'text/plain' })); } catch (e) {}
    if (!ok) try { fetch(URL_API, { method: 'POST', body: lot, keepalive: true, headers: { 'Content-Type': 'text/plain' } }); } catch (e) {}
    if (file.length) envoyer();
  }

  // ---- Événements automatiques ----
  api.evt('page');

  // Temps actif (onglet visible), envoyé avec les Core Web Vitals quand la page est quittée ou masquée.
  var actif = 0, depuis = document.hidden ? 0 : performance.now();
  var vitals = { lcp: 0, cls: 0, inp: 0 }, vitalsEnvoyes = false;
  function observer(type, f, opts) {
    try { new PerformanceObserver(function (l) { l.getEntries().forEach(f); }).observe(Object.assign({ type: type, buffered: true }, opts)); } catch (e) {}
  }
  observer('largest-contentful-paint', function (e) { vitals.lcp = Math.round(e.startTime); });
  observer('layout-shift', function (e) { if (!e.hadRecentInput) vitals.cls += e.value; });
  // INP approché : la plus longue interaction de la page (suffisant pour un 75e centile sur de nombreuses visites).
  observer('event', function (e) { if (e.interactionId && e.duration > vitals.inp) vitals.inp = Math.round(e.duration); }, { durationThreshold: 16 });

  function quitter() {
    if (depuis) { actif += performance.now() - depuis; depuis = 0; }
    if (actif > 500) api.evt('temps', { actif_s: Math.min(Math.round(actif / 1000), 7200) });
    actif = 0;
    if (!vitalsEnvoyes && vitals.lcp) {
      vitalsEnvoyes = true;
      api.evt('vitals', { lcp: vitals.lcp, cls: Math.round(vitals.cls * 1000) / 1000, inp: vitals.inp });
    }
    envoyer();
  }
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) quitter(); else depuis = performance.now();
  });
  addEventListener('pagehide', quitter);

  // Clics : réponses aux quiz des leçons (lues après le gestionnaire de la page) et boutons d'action.
  var ZONES = { quiz: 'comprehension', 'culture-quiz': 'culture', 'final-quiz': 'bilan', 'pairs-opts': 'paires' };
  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target : null;
    if (!t) return;
    var opt = t.closest('.option');
    if (opt && page === 'lecon') {
      var conteneur = opt.closest('#quiz, #culture-quiz, #final-quiz, #pairs-opts');
      if (conteneur) setTimeout(function () {
        if (opt.classList.contains('correct') || opt.classList.contains('wrong'))
          api.evt('quiz', { zone: ZONES[conteneur.id], juste: opt.classList.contains('correct') });
      }, 0);
    }
    var a = t.closest('a.btn');
    if (a) {
      var u = new URL(a.href, location.href), sec = a.closest('section[id], header, nav');
      api.evt('cta', {
        cible: u.pathname.split('/').pop() + (u.searchParams.get('langue') ? '?langue=' + u.searchParams.get('langue') : ''),
        zone: !sec ? 'autre' : sec.classList.contains('hero') ? 'hero' : (sec.id || sec.tagName.toLowerCase())
      });
    }
  });
})();
