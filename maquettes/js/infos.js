// Script de la page infos.html
  document.getElementById('theme-toggle').addEventListener('click', function () {
    var root = document.documentElement;
    var dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('lb-theme', root.dataset.theme); } catch (e) {}
  });

// Opposition à la mesure d'audience (js/mesure.js).
(function () {
  var c = document.getElementById('mesure-ok'), etat = document.getElementById('mesure-etat');
  if (!c || !window.LBMesure) return;
  var signal = navigator.globalPrivacyControl === true || navigator.doNotTrack === '1' || window.doNotTrack === '1';
  function maj() {
    c.checked = LBMesure.actif();
    etat.textContent = signal ? 'Votre navigateur demande à ne pas être suivi : la mesure est désactivée.'
      : c.checked ? 'Merci ! Vous participez à la mesure anonyme.' : 'Vous ne participez pas à la mesure d\'audience.';
  }
  c.disabled = signal;
  c.addEventListener('change', function () { LBMesure.refuser(!c.checked); maj(); });
  maj();
})();
