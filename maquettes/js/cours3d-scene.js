// Salle de classe 3D et professeur animé (Three.js, vendor/three.min.js).
// Utilisé par js/cours3d.js. API : Classe3D.creer(canvas, prof) → { tableau, parler, impulsion, geste, humeur, regarder }.
// Le professeur est fait de formes simples (pas de modèle à télécharger) : la page reste légère et marche hors ligne.
(function () {
  var REDUIT = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Apparence des trois professeurs (mêmes clés que professeur.js).
  var LOOKS = {
    emma:   { peau: 0xF1C7A5, cheveux: 0xA8722F, haut: 0x2F5FD0, bas: 0x1F2A44, coiffure: 'carre' },
    lucia:  { peau: 0xD9A07A, cheveux: 0x2A1A12, haut: 0xD0561C, bas: 0x2B2B33, coiffure: 'chignon' },
    rafael: { peau: 0x9C6B4B, cheveux: 0x1C120D, haut: 0x0E8A5E, bas: 0x24303F, coiffure: 'court', barbe: true }
  };

  function mat(couleur, opts) {
    var o = { color: couleur, roughness: 0.85, metalness: 0 };
    for (var k in opts || {}) o[k] = opts[k];
    return new THREE.MeshStandardMaterial(o);
  }
  function maille(geo, m, x, y, z, ombre) {
    var n = new THREE.Mesh(geo, m);
    n.position.set(x || 0, y || 0, z || 0);
    if (ombre !== false) { n.castShadow = true; n.receiveShadow = true; }
    return n;
  }
  function lerp(a, b, t) { return a + (b - a) * t; }

  // ---------- Le tableau : une texture dessinée sur un canvas ----------
  function Tableau() {
    var c = document.createElement('canvas');
    c.width = 1536; c.height = 928;
    this.canvas = c; this.ctx = c.getContext('2d');
    this.texture = new THREE.CanvasTexture(c);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.texture.anisotropy = 4;
    this.contenu = null; this.visible = 0; this.total = 0;
    this.fond();
  }
  Tableau.prototype.fond = function () {
    var g = this.ctx, w = this.canvas.width, h = this.canvas.height;
    var grad = g.createRadialGradient(w * 0.45, h * 0.4, 50, w / 2, h / 2, w * 0.75);
    grad.addColorStop(0, '#2C5A49'); grad.addColorStop(1, '#1D3D33');
    g.fillStyle = grad; g.fillRect(0, 0, w, h);
    // Traces de craie effacée, fixes (graine déterministe).
    var s = 7;
    function rnd() { s = (s * 9301 + 49297) % 233280; return s / 233280; }
    g.strokeStyle = 'rgba(255,255,255,0.035)'; g.lineWidth = 40; g.lineCap = 'round';
    for (var i = 0; i < 14; i++) {
      var x = rnd() * w, y = rnd() * h;
      g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + 120, y - 60 + rnd() * 120, x + 160 + rnd() * 260, y + rnd() * 40); g.stroke();
    }
  };
  // contenu = { titre, lignes: [{ t, style: 'cible'|'fr'|'grand'|'option'|'texte'|'petit' }] }
  Tableau.prototype.ecrire = function (contenu) {
    this.contenu = contenu;
    this.total = (contenu.titre || '').length + contenu.lignes.reduce(function (n, l) { return n + l.t.length; }, 0);
    this.visible = REDUIT ? this.total : 0;
    this.dessiner();
  };
  var STYLES = {
    grand:  { font: '700 84px Inter, sans-serif', couleur: '#FFE7A0', hauteur: 100 },
    cible:  { font: '600 60px Inter, sans-serif', couleur: '#FFE7A0', hauteur: 74 },
    fr:     { font: 'italic 500 46px Inter, sans-serif', couleur: '#CFE6DA', hauteur: 60 },
    texte:  { font: '500 46px Inter, sans-serif', couleur: '#F5F2E8', hauteur: 60 },
    option: { font: '600 52px Inter, sans-serif', couleur: '#F5F2E8', hauteur: 70 },
    petit:  { font: '500 36px Inter, sans-serif', couleur: '#A9C9BA', hauteur: 48 }
  };
  function couper(g, texte, largeur) {
    var mots = texte.split(' '), lignes = [], cur = '';
    mots.forEach(function (m) {
      var essai = cur ? cur + ' ' + m : m;
      if (g.measureText(essai).width > largeur && cur) { lignes.push(cur); cur = m; } else cur = essai;
    });
    if (cur) lignes.push(cur);
    return lignes;
  }
  Tableau.prototype.dessiner = function () {
    var g = this.ctx, w = this.canvas.width, c = this.contenu;
    this.fond();
    if (!c) { this.texture.needsUpdate = true; return; }
    var reste = this.visible, marge = 96, y = 120;
    function tracer(t, x) { var n = Math.max(0, Math.min(t.length, reste)); reste -= t.length; if (n) g.fillText(t.slice(0, n), x, y); }
    g.textBaseline = 'alphabetic';
    if (c.titre) {
      g.font = '700 58px Fraunces, Georgia, serif'; g.fillStyle = '#F5F2E8';
      tracer(c.titre, marge);
      // Soulignement à la craie
      g.strokeStyle = 'rgba(245,242,232,0.5)'; g.lineWidth = 4;
      g.beginPath(); g.moveTo(marge, y + 22); g.lineTo(marge + Math.min(g.measureText(c.titre).width, w - 2 * marge), y + 18); g.stroke();
      y += 56;
    }
    // y = haut de la ligne ; la ligne de base est placée selon la taille de chaque style (pas de chevauchement).
    for (var i = 0; i < c.lignes.length && y < this.canvas.height - 80; i++) {
      var l = c.lignes[i], st = STYLES[l.style] || STYLES.texte;
      g.font = st.font; g.fillStyle = st.couleur;
      var morceaux = couper(g, l.t, w - 2 * marge - (l.style === 'option' ? 20 : 0));
      for (var k = 0; k < morceaux.length; k++) {
        y += st.hauteur * 0.8;
        tracer(morceaux[k] + (k < morceaux.length - 1 ? ' ' : ''), marge);
        y += st.hauteur * 0.2;
      }
      y += l.style === 'option' ? 6 : 16;
    }
    this.texture.needsUpdate = true;
  };
  Tableau.prototype.avancer = function (dt) {
    if (!this.contenu || this.visible >= this.total) return;
    this.visible = Math.min(this.total, this.visible + dt * 320);
    this.dessiner();
  };

  // ---------- Le professeur ----------
  function Professeur(cle) {
    var L = LOOKS[cle] || LOOKS.emma;
    var racine = new THREE.Group();
    var peau = mat(L.peau, { roughness: 0.7 }), cheveux = mat(L.cheveux, { roughness: 0.95 });
    var haut = mat(L.haut), bas = mat(L.bas), chaussure = mat(0x1A1A1A);

    // Jambes et chaussures
    [-0.11, 0.11].forEach(function (x) {
      racine.add(maille(new THREE.CylinderGeometry(0.075, 0.065, 0.84, 14), bas, x, 0.44, 0));
      racine.add(maille(new THREE.BoxGeometry(0.12, 0.07, 0.24), chaussure, x, 0.035, 0.04));
    });
    // Buste (respire)
    var buste = new THREE.Group(); buste.position.y = 0.86; racine.add(buste);
    var torse = maille(new THREE.CapsuleGeometry(0.235, 0.42, 8, 20), haut, 0, 0.3, 0);
    torse.scale.set(1.05, 1, 0.72); buste.add(torse);
    buste.add(maille(new THREE.CylinderGeometry(0.06, 0.07, 0.12, 12), peau, 0, 0.62, 0));
    // Col
    var col = maille(new THREE.TorusGeometry(0.085, 0.022, 8, 20), haut, 0, 0.57, 0);
    col.rotation.x = Math.PI / 2; buste.add(col);

    // Tête
    var tete = new THREE.Group(); tete.position.set(0, 0.8, 0); buste.add(tete);
    var crane = maille(new THREE.SphereGeometry(0.165, 32, 24), peau);
    crane.scale.set(1, 1.12, 1.02); tete.add(crane);
    [-1, 1].forEach(function (s) {
      tete.add(maille(new THREE.SphereGeometry(0.035, 12, 10), peau, s * 0.163, 0.0, 0));
    });
    tete.add(maille(new THREE.SphereGeometry(0.026, 12, 10), peau, 0, -0.01, 0.17));
    // Yeux (clignent) et sourcils (expressions)
    var yeux = [], sourcils = [];
    var blanc = mat(0xFFFFFF, { roughness: 0.3 }), pupille = mat(0x2A2118, { roughness: 0.2 });
    [-1, 1].forEach(function (s) {
      var oeil = new THREE.Group(); oeil.position.set(s * 0.06, 0.035, 0.145);
      oeil.add(maille(new THREE.SphereGeometry(0.031, 16, 12), blanc, 0, 0, 0, false));
      oeil.add(maille(new THREE.SphereGeometry(0.019, 12, 10), pupille, 0, 0, 0.02, false));
      tete.add(oeil); yeux.push(oeil);
      var sc = maille(new THREE.BoxGeometry(0.055, 0.011, 0.012), cheveux, s * 0.062, 0.085, 0.158, false);
      tete.add(sc); sourcils.push(sc);
    });
    // Bouche : l'ouverture suit la voix ; le sourire apparaît selon l'humeur.
    var bouche = maille(new THREE.SphereGeometry(0.03, 16, 12), mat(0x6B2424, { roughness: 0.6 }), 0, -0.075, 0.158, false);
    bouche.scale.set(1.25, 0.12, 0.35); tete.add(bouche);
    var sourire = maille(new THREE.TorusGeometry(0.036, 0.006, 6, 20, Math.PI), mat(0x8A3A36), 0, -0.062, 0.16, false);
    sourire.rotation.z = Math.PI; tete.add(sourire);

    // Coiffure
    var calotte = maille(new THREE.SphereGeometry(0.178, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.52), cheveux, 0, 0.03, -0.01);
    calotte.scale.set(1.04, 1.12, 1.07); calotte.rotation.x = -0.42; tete.add(calotte); // dégage le front
    if (L.coiffure === 'carre') {
      var arriere = maille(new THREE.CylinderGeometry(0.185, 0.2, 0.24, 24, 1, true, Math.PI * 0.3, Math.PI * 1.4), cheveux, 0, -0.07, -0.01);
      arriere.material = mat(L.cheveux, { roughness: 0.95, side: THREE.DoubleSide }); tete.add(arriere);
      var frange = maille(new THREE.SphereGeometry(0.172, 24, 8, Math.PI * 0.18, Math.PI * 0.64, Math.PI * 0.2, Math.PI * 0.14), cheveux, 0, 0.04, 0.012);
      tete.add(frange);
    } else if (L.coiffure === 'chignon') {
      tete.add(maille(new THREE.SphereGeometry(0.085, 20, 16), cheveux, 0, 0.13, -0.15));
    }
    if (L.barbe) {
      var barbe = maille(new THREE.SphereGeometry(0.172, 32, 12, Math.PI * 0.05, Math.PI * 0.9, Math.PI * 0.56, Math.PI * 0.3), cheveux, 0, 0.0, 0.0);
      // La tranche de sphère va de 0,05π à 0,95π autour de l'axe vertical : elle est donc côté visage (+z).
      barbe.scale.set(1.03, 1.12, 1.04);
      tete.add(barbe);
      tete.add(maille(new THREE.BoxGeometry(0.09, 0.014, 0.02), cheveux, 0, -0.05, 0.163, false));
    }

    // Bras : épaule → coude → main, chacun un pivot.
    function bras(s) {
      var epaule = new THREE.Group(); epaule.position.set(s * 0.29, 0.53, 0); buste.add(epaule);
      epaule.add(maille(new THREE.SphereGeometry(0.075, 14, 12), haut));
      epaule.add(maille(new THREE.CylinderGeometry(0.062, 0.055, 0.3, 12), haut, 0, -0.16, 0));
      var coude = new THREE.Group(); coude.position.y = -0.31; epaule.add(coude);
      coude.add(maille(new THREE.CylinderGeometry(0.048, 0.042, 0.27, 12), peau, 0, -0.14, 0));
      coude.add(maille(new THREE.SphereGeometry(0.05, 12, 10), peau, 0, -0.3, 0));
      return { epaule: epaule, coude: coude };
    }
    var bd = bras(-1), bg = bras(1); // bd : côté x négatif (main droite du prof), bg : côté x positif

    this.racine = racine; this.buste = buste; this.tete = tete; this.yeux = yeux;
    this.sourcils = sourcils; this.bouche = bouche; this.sourire = sourire; this.bd = bd; this.bg = bg;
    this.ouverture = 0; this.impulsion = 0; this.parle = false;
    this.geste = 'repos'; this.debutGeste = 0; this.humeur = 'neutre';
    this.prochainClin = 2; this.clin = 0; this.regard = 0;
  }

  // Angles cibles des bras pour chaque geste (rotation.x / rotation.z de l'épaule, rotation.x du coude).
  Professeur.prototype.poses = function (t) {
    var g = this.geste, dt = t - this.debutGeste, onde = Math.sin(t * 9);
    var p = { bd: [0.05, -0.12, -0.15], bg: [0.05, 0.12, -0.15], tete: 0, buste: 0 };
    if (g === 'salut') {
      p.bd = [-0.1, -2.5, -0.35 + onde * 0.35];
      if (dt > 2.6) this.geste = 'repos';
    } else if (g === 'montre') {
      p.bg = [-0.45, 1.5, -0.2]; p.tete = 0.55; p.buste = 0.18;
    } else if (g === 'explique') {
      var a = Math.sin(t * 2.2) * 0.12;
      p.bd = [-0.35 + a, -0.25, -1.25 - a]; p.bg = [-0.35 - a, 0.25, -1.2 + a];
    } else if (g === 'bravo') {
      p.bd = [-0.2, -2.3, -0.5]; p.bg = [-0.2, 2.3, -0.5];
      if (dt > 1.8) this.geste = 'explique';
    } else if (g === 'ecoute') {
      p.bd = [-0.3, -0.35, -1.9]; p.bg = [0.05, 0.12, -0.15]; p.tete = -0.12;
    }
    return p;
  };
  Professeur.prototype.maj = function (t, dt) {
    var vit = Math.min(1, dt * 6), mouv = REDUIT ? 0.3 : 1;
    // Respiration et léger balancement
    this.buste.position.y = 0.86 + Math.sin(t * 1.6) * 0.006 * mouv;
    var p = this.poses(t);
    this.racine.rotation.y = lerp(this.racine.rotation.y, 0.35 + p.buste, vit * 0.5);
    this.buste.rotation.z = Math.sin(t * 0.7) * 0.015 * mouv;
    [['bd', p.bd], ['bg', p.bg]].forEach(function (e) {
      var b = this[e[0]], a = e[1];
      b.epaule.rotation.x = lerp(b.epaule.rotation.x, a[0], vit);
      b.epaule.rotation.z = lerp(b.epaule.rotation.z, a[1], vit);
      b.coude.rotation.x = lerp(b.coude.rotation.x, a[2], vit);
    }, this);
    // Tête : regarde l'élève (la caméra), ou le tableau pendant « montre »
    var cibleY = p.tete + this.regard + Math.sin(t * 0.9) * 0.05 * mouv;
    this.tete.rotation.y = lerp(this.tete.rotation.y, cibleY, vit * 0.7);
    this.tete.rotation.x = lerp(this.tete.rotation.x, (this.parle ? Math.sin(t * 3.1) * 0.04 : 0.02) * mouv, vit);
    this.tete.rotation.z = lerp(this.tete.rotation.z, this.humeur === 'pensif' ? 0.12 : Math.sin(t * 0.5) * 0.03 * mouv, vit * 0.5);
    // Bouche
    this.impulsion = Math.max(0, this.impulsion - dt * 4);
    var cible = this.parle ? 0.25 + 0.55 * Math.abs(Math.sin(t * 13 + Math.sin(t * 4.7) * 2)) + this.impulsion * 0.4 : 0;
    this.ouverture = lerp(this.ouverture, Math.min(1, cible), Math.min(1, dt * 18));
    this.bouche.scale.y = 0.12 + this.ouverture * 0.75;
    var content = this.humeur === 'content';
    this.sourire.visible = !this.parle || content;
    this.sourire.scale.set(content ? 1.25 : 1, content ? 1.4 : 0.8, 1);
    // Sourcils : levés quand content, froncés d'un côté quand pensif
    this.sourcils[0].position.y = lerp(this.sourcils[0].position.y, content ? 0.097 : 0.085, vit);
    this.sourcils[1].position.y = lerp(this.sourcils[1].position.y, content ? 0.097 : (this.humeur === 'pensif' ? 0.1 : 0.085), vit);
    this.sourcils[0].rotation.z = lerp(this.sourcils[0].rotation.z, this.humeur === 'pensif' ? -0.25 : 0, vit);
    // Clignements
    this.prochainClin -= dt;
    if (this.prochainClin <= 0) { this.clin = 0.16; this.prochainClin = 2 + Math.random() * 3.5; }
    this.clin = Math.max(0, this.clin - dt);
    var ferme = this.clin > 0 ? Math.max(0.08, Math.abs(this.clin - 0.08) / 0.08) : 1;
    this.yeux.forEach(function (o) { o.scale.y = ferme; });
  };

  // ---------- La salle ----------
  function creer(canvas, cleProf) {
    var renderer;
    try { renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true }); }
    catch (e) { return null; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0xDCE6F0);
    scene.fog = new THREE.Fog(0xDCE6F0, 9, 18);
    var camera = new THREE.PerspectiveCamera(40, 16 / 9, 0.1, 50);
    var cibleCam = new THREE.Vector3(-0.35, 1.35, -0.4);

    scene.add(new THREE.HemisphereLight(0xFFFFFF, 0xB59B7E, 1.25));
    var soleil = new THREE.DirectionalLight(0xFFF3E0, 2.2);
    soleil.position.set(-3.5, 5.5, 4);
    soleil.castShadow = true;
    soleil.shadow.mapSize.set(1024, 1024);
    soleil.shadow.camera.left = -5; soleil.shadow.camera.right = 5;
    soleil.shadow.camera.top = 5; soleil.shadow.camera.bottom = -2;
    soleil.shadow.bias = -0.0005; soleil.shadow.normalBias = 0.02;
    scene.add(soleil);
    var lampe = new THREE.PointLight(0xFFE2B8, 6, 7, 2); lampe.position.set(0.6, 3.1, 0.2); scene.add(lampe);

    // Sol, murs
    var sol = maille(new THREE.PlaneGeometry(16, 12), mat(0xC69C72, { roughness: 0.75 }), 0, 0, 1, false);
    sol.rotation.x = -Math.PI / 2; sol.receiveShadow = true; scene.add(sol);
    // Lattes du parquet
    var lattes = mat(0xB48862, { roughness: 0.8 });
    for (var i = -7; i <= 7; i++) {
      var l = maille(new THREE.BoxGeometry(0.012, 0.002, 12), lattes, i * 0.55, 0.001, 1, false);
      l.receiveShadow = true; scene.add(l);
    }
    var mur = maille(new THREE.PlaneGeometry(16, 6), mat(0xEEF1F5, { roughness: 0.95 }), 0, 3, -2, false);
    mur.receiveShadow = true; scene.add(mur);
    var plinthe = maille(new THREE.BoxGeometry(16, 0.14, 0.04), mat(0xFFFFFF), 0, 0.07, -1.98, false); scene.add(plinthe);
    var murG = maille(new THREE.PlaneGeometry(10, 6), mat(0xE3E9F0, { roughness: 0.95 }), -4.6, 3, 2, false);
    murG.rotation.y = Math.PI / 2; murG.receiveShadow = true; scene.add(murG);

    // Tableau noir avec cadre en bois
    var tableau = new Tableau();
    var bois = mat(0x7A5434, { roughness: 0.7 });
    var cadre = maille(new THREE.BoxGeometry(3.12, 1.92, 0.08), bois, 0.65, 1.78, -1.95); scene.add(cadre);
    var surface = new THREE.Mesh(new THREE.PlaneGeometry(2.98, 1.8), new THREE.MeshStandardMaterial({ map: tableau.texture, roughness: 0.9 }));
    surface.position.set(0.65, 1.78, -1.905); surface.receiveShadow = true; scene.add(surface);
    scene.add(maille(new THREE.BoxGeometry(3.0, 0.04, 0.12), bois, 0.65, 0.8, -1.86));
    scene.add(maille(new THREE.BoxGeometry(0.12, 0.025, 0.025), mat(0xFFFFFF), 0.1, 0.835, -1.85));
    scene.add(maille(new THREE.BoxGeometry(0.16, 0.04, 0.06), mat(0x3A3A3A), 0.4, 0.84, -1.85));

    // Fenêtre à gauche
    var ciel = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 1.5), new THREE.MeshBasicMaterial({ color: 0xBFE0FF }));
    ciel.position.set(-2.6, 2.0, -1.99); scene.add(ciel);
    var cadreF = mat(0xFFFFFF, { roughness: 0.5 });
    [[0, 0.75, 1.4, 0.06], [0, -0.75, 1.4, 0.06], [0, 0, 1.4, 0.04], [-0.67, 0, 0.06, 1.56], [0.67, 0, 0.06, 1.56], [0, 0, 0.04, 1.56]].forEach(function (b) {
      scene.add(maille(new THREE.BoxGeometry(b[2], b[3], 0.06), cadreF, -2.6 + b[0], 2.0 + b[1], -1.96, false));
    });
    var lumiereF = new THREE.SpotLight(0xDDEEFF, 4, 7, 0.6, 0.8); lumiereF.position.set(-2.6, 2.2, -1.6);
    lumiereF.target.position.set(-1.6, 0, 1); scene.add(lumiereF); scene.add(lumiereF.target);

    // Horloge
    var horloge = maille(new THREE.CylinderGeometry(0.22, 0.22, 0.04, 32), mat(0xFFFFFF), 2.75, 2.55, -1.97);
    horloge.rotation.x = Math.PI / 2; scene.add(horloge);
    scene.add(maille(new THREE.TorusGeometry(0.22, 0.02, 8, 32), mat(0x2A2A2A), 2.75, 2.55, -1.95, false));
    var aiguilleH = maille(new THREE.BoxGeometry(0.02, 0.12, 0.01), mat(0x2A2A2A), 0, 0.05, 0, false);
    var aiguilleM = maille(new THREE.BoxGeometry(0.014, 0.17, 0.01), mat(0x2A2A2A), 0, 0.075, 0, false);
    var pivotH = new THREE.Group(); pivotH.position.set(2.75, 2.55, -1.94); pivotH.add(aiguilleH); scene.add(pivotH);
    var pivotM = new THREE.Group(); pivotM.position.set(2.75, 2.55, -1.935); pivotM.add(aiguilleM); scene.add(pivotM);

    // Bureau avec globe et livres
    var bureau = new THREE.Group(); bureau.position.set(-2.55, 0, 0.1); bureau.rotation.y = 0.25; scene.add(bureau);
    bureau.add(maille(new THREE.BoxGeometry(1.3, 0.06, 0.7), bois, 0, 0.76, 0));
    [[-0.6, -0.3], [0.6, -0.3], [-0.6, 0.3], [0.6, 0.3]].forEach(function (p) {
      bureau.add(maille(new THREE.BoxGeometry(0.06, 0.74, 0.06), bois, p[0], 0.37, p[1]));
    });
    var couleurLangue = { emma: 0x1D4ED8, lucia: 0xC2410C, rafael: 0x047857 }[cleProf] || 0x1F6FD1;
    var globe = maille(new THREE.SphereGeometry(0.15, 24, 18), mat(couleurLangue, { roughness: 0.5 }), 0.35, 1.0, 0);
    bureau.add(globe);
    bureau.add(maille(new THREE.CylinderGeometry(0.02, 0.07, 0.12, 12), mat(0x3A3A3A), 0.35, 0.83, 0));
    [[0xE4572E, 0.07], [0xF2C14E, 0.06], [0x4D9DE0, 0.08]].forEach(function (b, k) {
      bureau.add(maille(new THREE.BoxGeometry(0.42, b[1], 0.3), mat(b[0]), -0.3, 0.79 + b[1] / 2 + k * 0.075, 0));
    });
    // Plante
    var plante = new THREE.Group(); plante.position.set(2.55, 0, -1.3); scene.add(plante);
    plante.add(maille(new THREE.CylinderGeometry(0.2, 0.15, 0.4, 20), mat(0xE8DCCB), 0, 0.2, 0));
    var feuille = mat(0x3E8E5A, { roughness: 0.8, flatShading: true });
    [[0, 0.62, 0, 0.3], [0.13, 0.85, 0.05, 0.22], [-0.12, 0.8, -0.04, 0.2]].forEach(function (f) {
      plante.add(maille(new THREE.IcosahedronGeometry(f[3], 0), feuille, f[0], f[1], f[2]));
    });

    var prof = new Professeur(cleProf);
    prof.racine.position.set(-1.35, 0, 0.35);
    prof.racine.rotation.y = 0.35;
    scene.add(prof.racine);

    // ---- Caméra : on peut tourner un peu autour de la scène (glisser horizontalement) ----
    var vueDist = 4.2;
    var yaw = 0, pitch = 0, yawCible = 0, pitchCible = 0, distBase = 4.2, drag = null;
    canvas.addEventListener('pointerdown', function (e) { drag = { x: e.clientX, y: e.clientY, yaw: yawCible, pitch: pitchCible }; });
    window.addEventListener('pointermove', function (e) {
      if (!drag) return;
      yawCible = Math.max(-0.55, Math.min(0.55, drag.yaw - (e.clientX - drag.x) * 0.004));
      pitchCible = Math.max(-0.12, Math.min(0.25, drag.pitch + (e.clientY - drag.y) * 0.002));
    });
    window.addEventListener('pointerup', function () { drag = null; });
    canvas.addEventListener('dblclick', function () { yawCible = 0; pitchCible = 0; });

    function taille() {
      var w = canvas.clientWidth, h = canvas.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      // En portrait, on recule pour garder le professeur et le tableau dans le cadre.
      distBase = vueDist * Math.max(1, Math.min(2.1, 1.6 / camera.aspect));
      camera.fov = camera.aspect < 1 ? 50 : 40;
      camera.updateProjectionMatrix();
    }
    if (window.ResizeObserver) new ResizeObserver(taille).observe(canvas);
    else window.addEventListener('resize', taille);
    taille();

    var horlogeT = new THREE.Clock(), actif = true;
    function boucle() {
      if (!actif) return;
      requestAnimationFrame(boucle);
      var dt = Math.min(0.05, horlogeT.getDelta()), t = horlogeT.elapsedTime;
      yaw = lerp(yaw, yawCible, Math.min(1, dt * 6)); pitch = lerp(pitch, pitchCible, Math.min(1, dt * 6));
      var oscill = REDUIT ? 0 : Math.sin(t * 0.25) * 0.04;
      var a = yaw + oscill;
      camera.position.set(cibleCam.x + Math.sin(a) * distBase, cibleCam.y + 0.25 + pitch * distBase, cibleCam.z + Math.cos(a) * distBase);
      camera.lookAt(cibleCam);
      prof.maj(t, dt);
      tableau.avancer(dt);
      var d = new Date();
      pivotM.rotation.z = -d.getMinutes() / 60 * Math.PI * 2;
      pivotH.rotation.z = -((d.getHours() % 12) + d.getMinutes() / 60) / 12 * Math.PI * 2;
      if (!REDUIT) globe.rotation.y += dt * 0.4;
      renderer.render(scene, camera);
    }
    boucle();

    return {
      tableau: function (contenu) { tableau.ecrire(contenu); },
      parler: function (oui) { prof.parle = !!oui; },
      impulsion: function () { prof.impulsion = 1; },
      geste: function (nom) { prof.geste = nom || 'repos'; prof.debutGeste = horlogeT.elapsedTime; },
      humeur: function (nom) { prof.humeur = nom || 'neutre'; },
      // Cadrage (tests) : distance et point visé.
      vue: function (d, x, y, z) { vueDist = d; if (x != null) cibleCam.set(x, y, z); taille(); },
      arreter: function () { actif = false; renderer.dispose(); }
    };
  }

  window.Classe3D = { creer: creer };
})();
