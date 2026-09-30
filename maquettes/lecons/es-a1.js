// Lección A1 « Au café » — espagnol (variantes Espagne / Amérique latine, ici le Mexique).
window.LECONS = window.LECONS || {};
window.LECONS['es-A1'] = {
  niveau: 'A1', theme: 'Au café', etape1: 'Camille commande au café',
  intro: 'Camille entre dans un café, à {ville}.',
  indiceOrdre: 'le serveur accueille Camille, puis elle commande.',
  badge: { nom: 'Barista', icone: '☕' },
  lang: 'es', langue: 'espagnol', prof: 'lucia', profNom: 'Lucía', profInitiale: 'L',
  titre: 'Unidad 1 · En la cafetería',
  variantes: [
    { k: 'es', label: '🇪🇸 España', speech: 'es-ES', code: 'ES' },
    { k: 'latam', label: '🌎 Latam', speech: 'es-MX', code: 'LATAM' }
  ],
  ville: { es: 'Séville', latam: 'Mexico' },
  personnages: { C: { nom: 'Camille', init: 'CM' }, R: { nom: 'Serveur', init: 'S' } },
  noteVariantes: '<strong>🇪🇸 / 🌎 Ce qui change selon la variante</strong><p style="margin:6px 0 0;font-size:15px;">En Espagne, le serveur tutoie souvent le client (« <i lang="es">¿Qué te pongo?</i> ») : ce n\'est pas impoli. Au Mexique, il vouvoie (« <i lang="es">¿Qué le sirvo?</i> »). On paie en euros ou en pesos, et « bon appétit » se dit <i lang="es">¡Que aproveche!</i> 🇪🇸 ou <i lang="es">¡Buen provecho!</i> 🌎.</p>',

  dialogue: [
    { who: 'R', seg: [{d:{es:'¡Hola! ¿Qué te pongo?', latam:'¡Buenos días! ¿Qué le sirvo?'}}],
      fr: 'Bonjour ! Qu\'est-ce que je vous sers ?' },
    { who: 'C', seg: ['Hola. Un ', {w:'café con leche'}, ', por favor.'],
      fr: 'Bonjour. Un café au lait, s\'il vous plaît.' },
    { who: 'R', seg: ['¿Algo para comer?'],
      fr: 'Quelque chose à manger ?' },
    { who: 'C', seg: ['Sí, ', {d:{es:'una tostada con tomate', latam:'un pan dulce'}}, '.'],
      fr: 'Oui, une tartine à la tomate (Mexique : une brioche sucrée).' },
    { who: 'R', seg: [{d:{es:'¿Para tomar aquí o para llevar?', latam:'¿Para aquí o para llevar?'}}],
      fr: 'Sur place ou à emporter ?' },
    { who: 'C', seg: [{d:{es:'Para tomar aquí. ', latam:'Para aquí. '}}, {w:'¿Cuánto es?'}],
      fr: 'Sur place. C\'est combien ?' },
    { who: 'R', seg: [{d:{es:'Son cuatro euros con cincuenta.', latam:'Son ochenta pesos.'}}],
      fr: 'Ça fait 4,50 euros (Mexique : 80 pesos).' },
    { who: 'C', seg: ['¿Puedo pagar con ', {w:'tarjeta'}, '?'],
      fr: 'Je peux payer par carte ?' },
    { who: 'R', seg: [{d:{es:'Sí, claro. Aquí tienes el ', latam:'Sí, claro. Aquí tiene el '}}, {w:'ticket'}, '.'],
      fr: 'Oui, bien sûr. Voici le ticket.' },
    { who: 'C', seg: ['¡Muchas gracias!'],
      fr: 'Merci beaucoup !' },
    { who: 'R', seg: [{d:{es:'¡A ti! ¡Que aproveche!', latam:'¡Con gusto! ¡Buen provecho!'}}],
      fr: 'Merci à vous ! Bon appétit !' }
  ],

  glossaire: {
    'café con leche': { word: 'café con leche', tr: 'un café au lait, la boisson du petit-déjeuner en Espagne', v: 0 },
    '¿Cuánto es?':    { word: '¿Cuánto es?', ipa: '/ˈkwanto es/', tr: 'C\'est combien ? (pour demander le total à payer)', v: 4 },
    tarjeta:          { word: 'tarjeta', ipa: '/taɾˈxeta/', tr: 'la carte (bancaire). Le « j » se prononce comme un « r » raclé.', v: 5 },
    ticket:           { word: 'ticket', tr: 'le ticket de caisse', v: 6 }
  },

  vocabulaire: [
    { en: 'un café con leche', fr: 'un café au lait', ex: 'Un café con leche, por favor.' },
    { en: {es:'¿Qué te pongo?', latam:'¿Qué le sirvo?'}, fr: 'Qu\'est-ce que je vous sers ?', ex: {es:'Hola, ¿qué te pongo?', latam:'Buenos días, ¿qué le sirvo?'} },
    { en: '¿Algo para comer?', fr: 'Quelque chose à manger ?', ex: '¿Quiere algo para comer?' },
    { en: {es:'para tomar aquí', latam:'para aquí'}, fr: 'sur place', ex: {es:'Un café para tomar aquí.', latam:'Un café para aquí.'} },
    { en: '¿Cuánto es?', fr: 'C\'est combien ?', ex: 'Perdone, ¿cuánto es?' },
    { en: '¿Puedo pagar con tarjeta?', fr: 'Je peux payer par carte ?', ex: '¿Puedo pagar con tarjeta, por favor?' },
    { en: 'el ticket', fr: 'le ticket de caisse', ex: 'Aquí tiene el ticket.' },
    { en: 'para llevar', fr: 'à emporter', ex: 'Un café para llevar, por favor.' },
    { en: 'un vaso de agua', fr: 'un verre d\'eau', ex: 'Un vaso de agua, por favor.' },
    { en: {es:'¡Que aproveche!', latam:'¡Buen provecho!'}, fr: 'Bon appétit !', ex: {es:'¡Gracias! ¡Que aproveche!', latam:'¡Gracias! ¡Buen provecho!'} }
  ],

  comprehension: [
    { q: 'Que boit Camille ?',
      opts: ['Un café au lait', 'Un thé', 'Un jus d\'orange'],
      a: 0, why: '« Un café con leche, por favor. »' },
    { q: 'Camille prend sa commande…',
      opts: ['Sur place', 'À emporter', 'Elle ne le dit pas'],
      a: 0, why: '« Para tomar aquí » 🇪🇸 / « Para aquí » 🌎 = sur place.' },
    { q: 'Comment paie-t-elle ?',
      opts: ['Par carte', 'En espèces', 'Avec son téléphone'],
      a: 0, why: '« ¿Puedo pagar con tarjeta? » — « Sí, claro. »' }
  ],

  grammaireTitre: 'Le genre des noms : <span lang="es">un / una</span>',
  grammaire: '<div class="rule"><strong>La règle</strong><br>« un / une » se dit <span lang="es"><b>un</b></span> devant un nom <b>masculin</b> (<span lang="es">un café, un vaso</span>) et <span lang="es"><b>una</b></span> devant un nom <b>féminin</b> (<span lang="es">una tostada, una cerveza</span>).<br>En général, les noms en <b>-o</b> sont masculins et les noms en <b>-a</b> féminins. Au pluriel, on ajoute <b>-s</b> (<span lang="es">dos cafés</span>).</div>' +
    '<div class="table-scroll"><table class="g-table"><thead><tr><th>Espagnol</th><th>Français</th><th>Genre</th></tr></thead><tbody>' +
    '<tr><td lang="es">un café</td><td>un café</td><td>masculin</td></tr>' +
    '<tr><td lang="es">una tostada</td><td>une tartine</td><td>féminin (-a)</td></tr>' +
    '<tr><td lang="es">un vaso de agua</td><td>un verre d\'eau</td><td>masculin (-o)</td></tr>' +
    '<tr><td lang="es">la leche</td><td><b>le</b> lait</td><td>féminin (≠ français !)</td></tr></tbody></table></div>' +
    '<h3 class="g-h3">🇫🇷 Comparaison avec le français</h3><p>Le plus souvent, le genre est le même qu\'en français. Mais attention aux exceptions : <span lang="es">la leche</span> (le lait), <span lang="es">el color</span> (la couleur), <span lang="es">la sal</span> (le sel), <span lang="es">el equipo</span> (l\'équipe). Et pour demander le prix : <span lang="es">¿Cuánto es?</span> pour le total, <span lang="es">¿Cuánto cuesta?</span> pour un article.</p>' +
    '<h3 class="g-h3">⚠️ Erreurs typiques des francophones</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Erreur</th><th>Correction</th><th>Pourquoi</th></tr></thead><tbody>' +
    '<tr><td lang="es"><del>el leche</del></td><td lang="es"><ins>la leche</ins></td><td><span lang="es">leche</span> est féminin en espagnol.</td></tr>' +
    '<tr><td lang="es"><del>una café</del></td><td lang="es"><ins>un café</ins></td><td><span lang="es">café</span> est masculin.</td></tr>' +
    '<tr><td lang="es"><del>dos café</del></td><td lang="es"><ins>dos cafés</ins></td><td>Au pluriel, on ajoute <b>-s</b>.</td></tr></tbody></table></div>',
  exGrammaire: {
    phrase: '___ tostada con tomate, por favor.',
    options: ['Una', 'Un', 'Uno'], bonne: 'Una',
    retours: {
      Una: '✅ « tostada » est féminin (finit par -a) : « una tostada ».',
      Un: '❌ « tostada » est féminin (finit par -a) : on dit « una tostada ».',
      Uno: '❌ « uno » s\'emploie seul (« quiero uno ») ; devant un nom, on dit « un » ou « una ».'
    }
  },

  trous: [
    { before: 'Para mí,', opts: ['un', 'una', 'uno'], a: 'un', after: 'café con leche.', why: '« café » est masculin : « un café ».' },
    { before: 'Y', opts: ['una', 'un', 'uno'], a: 'una', after: 'botella de agua.', why: '« botella » est féminin : « una botella ».' },
    { before: '¿Puedo pagar', opts: ['con', 'en', 'por'], a: 'con', after: 'tarjeta?', why: '« pagar con tarjeta » = payer par carte.' },
    { before: 'Dos', opts: ['cafés', 'café', 'cafeses'], a: 'cafés', after: ', por favor.', why: 'Pluriel d\'un nom terminé par une voyelle : on ajoute -s.' }
  ],
  paires: { a: 'caro', b: 'carro',
    aide: 'Écoutez le mot, puis choisissez ce que vous avez entendu. <span lang="es">caro</span> (cher) : « r » simple, un seul battement de langue ; <span lang="es">carro</span> (chariot, voiture en Amérique latine) : « rr » roulé.' },

  jeuDeRole: {
    texte: 'Vous entrez dans un café. Commandez une boisson et quelque chose à manger, demandez le prix et payez. Lucía joue le serveur et vous corrige à la fin de la scène.',
    sujet: 'Au café : je commande une boisson et quelque chose à manger, je demande le prix et je paie. Tu joues le serveur.'
  },
  redaction: {
    consigne: 'Écrivez ce que vous dites pour commander <b>un thé</b> (<i lang="es">un té</i>) et <b>un croissant</b> (<i lang="es">un cruasán</i>), puis demander <b>le prix</b>.',
    placeholder: 'Hola, …',
    criteres: [
      [/(^|[^a-z])t[eé]([^a-z]|$)/, 'Le mot « té »'],
      [/(cruas[aá]n|croissant)/, 'Le mot « cruasán »'],
      [/un t[eé]([^a-z]|$)/, 'Le bon article : « un té » (masculin)'],
      [/cu[aá]nto/, 'La question du prix (¿Cuánto es?)'],
      [/por favor/, '« por favor »'],
      [/una (t[eé]|cruas|croissant)/, '« una » devant un nom masculin : on dit « un té », « un cruasán »', true]
    ],
    modele: { es: 'Hola, un té y un cruasán, por favor. ¿Cuánto es?', latam: 'Buenos días, un té y un cruasán, por favor. ¿Cuánto es?' }
  },

  cultureTitre: 'Au café, en Espagne et au Mexique',
  culture: '<div class="card block"><h3 class="ex-title">☕ Les habitudes</h3>' +
    '<p><b>🇪🇸 Espagne :</b> on commande un <i lang="es">café solo</i> (expresso), un <i lang="es">cortado</i> (avec un peu de lait) ou un <i lang="es">café con leche</i>. Le petit-déjeuner typique : <i lang="es">tostada con tomate y aceite</i>. Au bar, on paie souvent à la fin, au comptoir.</p>' +
    '<p style="margin:0;"><b>🇲🇽 Mexique :</b> goûtez le <i lang="es">café de olla</i>, à la cannelle, avec un <i lang="es">pan dulce</i> (par exemple une <i lang="es">concha</i>). Au restaurant, le pourboire de 10 à 15 % est d\'usage.</p></div>' +
    '<div class="card block"><h3 class="ex-title">🗣️ Les mots qui changent</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Français</th><th>🇪🇸 Espagne</th><th>🌎 Amérique latine</th></tr></thead><tbody>' +
    '<tr><td>le serveur</td><td lang="es">el camarero</td><td lang="es">el mesero</td></tr>' +
    '<tr><td>le jus</td><td lang="es">el zumo</td><td lang="es">el jugo</td></tr>' +
    '<tr><td>la paille</td><td lang="es">la pajita</td><td lang="es">el popote (Mexique)</td></tr>' +
    '<tr><td>le gâteau</td><td lang="es">la tarta</td><td lang="es">el pastel</td></tr></tbody></table></div></div>',
  cultureQuiz: [
    { q: 'En Espagne, un « cortado », c\'est…',
      opts: ['Un expresso avec un peu de lait', 'Un café coupé avec de l\'eau', 'Un grand café au lait'],
      a: 0, why: 'Le « cortado » est « coupé » d\'un nuage de lait.' },
    { q: 'Au Mexique, le serveur s\'appelle…',
      opts: ['el mesero', 'el camarero', 'el cocinero'],
      a: 0, why: '« camarero » en Espagne ; « cocinero » = cuisinier.' }
  ],

  bilan: [
    { q: '« Un café au lait, s\'il vous plaît. »', cible: true,
      opts: ['Un café con leche, por favor.', 'Una café con leche, por favor.', 'Un café de leche, por favor.'],
      a: 0, why: '« café » est masculin, et on dit « con leche ».', rev: 'un café con leche' },
    { q: 'Complétez : « ___ tostada »', cible: true,
      opts: ['una', 'un', 'uno'],
      a: 0, why: '« tostada » est féminin.', rev: 'una tostada' },
    { q: '« C\'est combien ? »', cible: true,
      opts: ['¿Cuánto es?', '¿Qué es?', '¿Cómo es?'],
      a: 0, why: '« ¿Qué es? » = « Qu\'est-ce que c\'est ? » ; « ¿Cómo es? » = « Comment c\'est ? ».', rev: '¿Cuánto es?' },
    { q: '« À emporter »', cible: true,
      opts: ['para llevar', 'para aquí', 'por llevar'],
      a: 0, why: '« para llevar » : pour emporter.', rev: 'para llevar' },
    { q: '« Je peux payer par carte ? »', cible: true,
      opts: ['¿Puedo pagar con tarjeta?', '¿Puedo pagar por tarjeta?', '¿Puedo pago con tarjeta?'],
      a: 0, why: '« pagar con tarjeta », et « puedo » + infinitif.', rev: '¿Puedo pagar con tarjeta?' },
    { q: 'En espagnol, « le lait » est…',
      opts: ['féminin : la leche', 'masculin : el leche', 'neutre : lo leche'],
      a: 0, why: 'Genre différent du français : « la leche ».', rev: 'la leche' },
    { q: '« Deux cafés »', cible: true,
      opts: ['Dos cafés', 'Dos café', 'Dos cafeses'],
      a: 0, why: 'Pluriel : on ajoute -s après une voyelle.', rev: 'dos cafés' },
    { q: '« Bon appétit ! »', cible: true,
      opts: [{es:'¡Que aproveche!', latam:'¡Buen provecho!'}, '¡Bueno apetito!', '¡Que aprovecha!'],
      a: 0, why: '« ¡Que aproveche! » 🇪🇸 ou « ¡Buen provecho! » 🌎.', rev: {es:'¡Que aproveche!', latam:'¡Buen provecho!'} }
  ],

  conseil: '« <span lang="es">¿Cuánto es?</span> » : deux mots pour payer partout, du bar à la boulangerie. Et en Espagne, si le serveur vous tutoie, ce n\'est pas impoli ! ¡Genial!'
};
