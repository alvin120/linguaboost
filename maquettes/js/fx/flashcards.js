// Flashcards de l'étape Vocabulaire : un paquet de cartes qui se retournent en 3D
// (expression → traduction + exemple), avec écoute et tri « Je savais » / « À revoir ».
// Construit à partir de la liste #vocab rendue par lecon.js (aucune donnée dupliquée) :
// « Écouter » et « À revoir » réutilisent les boutons 🔊 et ＋ de la liste.
// La liste reste disponible via le sélecteur Cartes / Liste. Fonctionne aussi en data-fx="off"
// (retournement instantané).
(function () {
  var liste = document.getElementById('vocab');
  if (!liste) return;
  var CLE = 'lb-vocab-mode';
  var anime = function () { return window.LBFX && LBFX.on(); };
  function mesurer(action) { if (window.LBMesure) LBMesure.evt('carte', { action: action }); }

  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) { if (k === 'class') n.className = attrs[k]; else n.setAttribute(k, attrs[k]); });
    if (text != null) n.textContent = text;
    return n;
  }

  var mode = 'cartes';
  try { if (localStorage.getItem(CLE) === 'liste') mode = 'liste'; } catch (e) {}

  // ---- Structure ----
  var box = el('div', { class: 'fc' });
  var bar = el('div', { class: 'fc-bar' });
  var seg = el('div', { class: 'segmented', role: 'group', 'aria-label': 'Affichage du vocabulaire' });
  var bCartes = el('button', { type: 'button' }, 'Cartes'), bListe = el('button', { type: 'button' }, 'Liste');
  seg.appendChild(bCartes); seg.appendChild(bListe);
  var compteur = el('p', { class: 'fc-count' });
  bar.appendChild(seg); bar.appendChild(compteur);
  var zone = el('div');
  var annonce = el('p', { class: 'sr-only', 'aria-live': 'polite' });
  box.appendChild(bar); box.appendChild(zone); box.appendChild(annonce);
  liste.parentNode.insertBefore(box, liste);

  bCartes.addEventListener('click', function () { setMode('cartes'); });
  bListe.addEventListener('click', function () { setMode('liste'); });

  function setMode(m) {
    mode = m;
    try { localStorage.setItem(CLE, m); } catch (e) {}
    bCartes.setAttribute('aria-pressed', m === 'cartes'); bListe.setAttribute('aria-pressed', m === 'liste');
    liste.hidden = m === 'cartes'; zone.hidden = compteur.hidden = m !== 'cartes';
  }

  // ---- Paquet ----
  var cartes = [], i = 0, sues = 0, aRevoir = 0;

  function lire() {
    return Array.prototype.map.call(liste.children, function (li) {
      var expr = li.querySelector('.expr');
      return {
        mot: expr ? expr.firstChild.textContent : '', lang: expr ? expr.getAttribute('lang') : null,
        tr: (li.querySelector('.tr') || {}).textContent || '', ex: (li.querySelector('.ex') || {}).textContent || '',
        ecouter: li.querySelector('.icon-btn:not(.add-btn)'), ajouter: li.querySelector('.add-btn')
      };
    });
  }

  function rendre(entree) {
    zone.innerHTML = '';
    if (i >= cartes.length) return fin();
    var c = cartes[i];
    compteur.textContent = 'Carte ' + (i + 1) + ' sur ' + cartes.length;

    var deck = el('div', { class: 'fc-deck' });
    var pile = el('div', { class: 'fc-stack', 'aria-hidden': 'true', 'data-left': Math.min(cartes.length - i - 1, 2) });
    pile.appendChild(el('span')); pile.appendChild(el('span'));
    var carte = el('button', { class: 'fc-card' + (entree && anime() ? ' fc-in' : ''), type: 'button', 'aria-pressed': 'false',
      'aria-label': 'Carte ' + (i + 1) + ' : ' + c.mot + '. Retourner pour voir la traduction.' });
    var inner = el('span', { class: 'fc-inner' });
    var recto = el('span', { class: 'fc-face fc-front', 'aria-hidden': 'true' });
    recto.appendChild(el('span', { class: 'fc-word', lang: c.lang }, c.mot));
    recto.appendChild(el('span', { class: 'fc-hint' }, 'Touchez pour retourner'));
    var verso = el('span', { class: 'fc-face fc-back', 'aria-hidden': 'true' });
    verso.appendChild(el('span', { class: 'fc-tr' }, c.tr));
    verso.appendChild(el('span', { class: 'fc-ex', lang: c.lang }, c.ex));
    inner.appendChild(recto); inner.appendChild(verso); carte.appendChild(inner);
    carte.addEventListener('click', function () {
      var r = carte.getAttribute('aria-pressed') !== 'true';
      carte.setAttribute('aria-pressed', r);
      annonce.textContent = r ? c.tr + '. Exemple : ' + c.ex : c.mot;
      if (r) mesurer('retourner');
    });
    deck.appendChild(pile); deck.appendChild(carte);

    var actions = el('div', { class: 'fc-actions' });
    var ecouter = el('button', { class: 'btn btn-ghost btn-sm', type: 'button' }, '🔊 Écouter');
    ecouter.addEventListener('click', function () { if (c.ecouter) c.ecouter.click(); });
    var revoir = el('button', { class: 'btn btn-ghost btn-sm', type: 'button' }, '🔁 À revoir');
    revoir.addEventListener('click', function () {
      if (c.ajouter && c.ajouter.getAttribute('aria-pressed') !== 'true') c.ajouter.click();
      aRevoir++; mesurer('revoir'); suivante(carte, 'left', 'Ajoutée à vos révisions.');
    });
    var savais = el('button', { class: 'btn btn-primary btn-sm', type: 'button' }, '✓ Je savais');
    savais.addEventListener('click', function () { sues++; mesurer('savais'); suivante(carte, 'right', ''); });
    actions.appendChild(ecouter); actions.appendChild(revoir); actions.appendChild(savais);

    zone.appendChild(deck); zone.appendChild(actions);
  }

  function suivante(carte, sens, msg) {
    i++;
    var go = function () { rendre(true); var c = zone.querySelector('.fc-card'); if (c) c.focus({ preventScroll: true }); };
    annonce.textContent = msg;
    if (!anime()) return go();
    carte.classList.add('fc-out-' + sens);
    setTimeout(go, 280);
  }

  function fin() {
    compteur.textContent = cartes.length + ' cartes vues';
    var d = el('div', { class: 'card fc-done' });
    d.appendChild(el('strong', null, sues + ' / ' + cartes.length));
    d.appendChild(el('p', { class: 'muted' }, aRevoir ? aRevoir + ' expression(s) ajoutée(s) à vos révisions.' : 'Vous connaissiez tout. Bravo !'));
    var again = el('button', { class: 'btn btn-primary btn-sm', type: 'button' }, 'Recommencer le paquet');
    again.addEventListener('click', function () { i = sues = aRevoir = 0; rendre(true); });
    d.appendChild(again);
    zone.appendChild(d);
    annonce.textContent = 'Paquet terminé : ' + sues + ' sur ' + cartes.length + ' connues.';
  }

  // lecon.js re-rend la liste (changement de variante, ajout depuis la bulle) : on suit.
  function sync() {
    var avant = cartes.length;
    cartes = lire();
    if (cartes.length !== avant) i = sues = aRevoir = 0;
    rendre(false);
  }
  new MutationObserver(sync).observe(liste, { childList: true });
  sync();
  setMode(mode);
})();
