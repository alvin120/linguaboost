// Lección A2 « À l'hôtel » — espagnol (variantes Espagne / Amérique latine, ici le Mexique).
window.LECONS = window.LECONS || {};
window.LECONS['es-A2'] = {
  niveau: 'A2', theme: "À l'hôtel", etape1: "Camille arrive à son hôtel",
  intro: "Camille arrive le soir à son hôtel, à {ville}.",
  indiceOrdre: "la réceptionniste accueille Camille, puis Camille donne son nom.",
  badge: { nom: 'Check-in', icone: '🛎️' },
  lang: 'es', langue: 'espagnol', prof: 'lucia', profNom: 'Lucía', profInitiale: 'L',
  titre: 'Unidad 3 · En el hotel',
  variantes: [
    { k: 'es', label: '🇪🇸 España', speech: 'es-ES', code: 'ES' },
    { k: 'latam', label: '🌎 Latam', speech: 'es-MX', code: 'LATAM' }
  ],
  ville: { es: 'Madrid', latam: 'Mexico' },
  chambre: '305',
  personnages: { C: { nom: 'Camille', init: 'CM' }, R: { nom: 'Recepcionista', init: 'R' } },
  noteVariantes: '<strong>🇪🇸 / 🌎 Ce qui change selon la variante</strong><p style="margin:6px 0 0;font-size:15px;">Les passages <span class="diff">surlignés</span> changent entre l\'espagnol d\'Espagne et celui d\'Amérique latine (ici, le Mexique). Basculez en haut de l\'écran pour comparer. Au Mexique, on dit <i lang="es">reservación</i> plutôt que <i lang="es">reserva</i>, <i lang="es">piso</i> plutôt que <i lang="es">planta</i> pour l\'étage, et on répond souvent « <i lang="es">Con gusto</i> » à un merci.</p>',

  dialogue: [
    { who: 'R', seg: ['Buenas noches, bienvenida al Hotel Mirador. ¿En qué puedo ayudarle?'],
      fr: 'Bonsoir, bienvenue à l\'hôtel Mirador. Que puis-je faire pour vous ?' },
    { who: 'C', seg: ['Buenas noches. Tengo una ', {w:'reserva'}, ' ', {w:'a nombre de'}, ' Martin.'],
      fr: "Bonsoir. J'ai une réservation au nom de Martin." },
    { who: 'R', seg: ['A ver… Sí, Camille Martin, dos noches, una ', {w:'habitación doble'}, '. ¿Me permite su ', {w:'pasaporte'}, ', por favor?'],
      fr: 'Voyons… Oui, Camille Martin, deux nuits, une chambre double. Puis-je voir votre passeport, s\'il vous plaît ?' },
    { who: 'C', seg: ['Claro, aquí tiene.'],
      fr: 'Bien sûr, tenez.' },
    { who: 'R', seg: ['Gracias. Su habitación es la 305, en ', {d:{es:'la tercera planta', latam:'el tercer piso'}}, '. El ', {w:'desayuno'}, ' se sirve de 7 a 10.'],
      fr: 'Merci. Votre chambre est la 305, au 3ᵉ étage. Le petit-déjeuner est servi de 7 h à 10 h.' },
    { who: 'C', seg: ['Perfecto. ¿Hay wifi en la habitación?'],
      fr: 'Parfait. Il y a le wifi dans la chambre ?' },
    { who: 'R', seg: ['Sí, es gratis. La ', {w:'contraseña'}, ' está en su ', {w:'tarjeta'}, '.'],
      fr: 'Oui, il est gratuit. Le mot de passe est sur votre carte de chambre.' },
    { who: 'C', seg: ['Genial. ¿Y a qué hora es la ', {w:'salida'}, '?'],
      fr: 'Super. Et à quelle heure faut-il libérer la chambre ?' },
    { who: 'R', seg: ['La salida es a las 12. Si necesita salir más tarde, ', {d:{es:'llame a recepción', latam:'marque a la recepción'}}, '.'],
      fr: 'Le départ est à midi. Si vous avez besoin de partir plus tard, appelez la réception.' },
    { who: 'C', seg: [{d:{es:'Vale, muchas gracias.', latam:'Muchas gracias, muy amable.'}}],
      fr: 'D\'accord, merci beaucoup.' },
    { who: 'R', seg: [{d:{es:'De nada', latam:'Con gusto'}}, '. ¡Que disfrute ', {d:{es:'de su ', latam:'su '}}, {w:'estancia'}, '!'],
      fr: 'Je vous en prie. Bon séjour !' }
  ],

  glossaire: {
    reserva:            { word: {es:'reserva', latam:'reservación'}, ipa: {es:'/reˈseɾβa/', latam:'/reseɾβaˈsjon/'}, tr: {es:'une réservation', latam:'une réservation (au Mexique, on dit souvent « reservación »)'}, v: 0 },
    'a nombre de':      { word: 'a nombre de', ipa: '/a ˈnombɾe ðe/', tr: 'au nom de (attention : « en nombre de » veut dire « de la part de »)', v: 1 },
    'habitación doble': { word: 'habitación doble', ipa: {es:'/aβitaˈθjon ˈdoβle/', latam:'/aβitaˈsjon ˈdoβle/'}, tr: 'une chambre double', v: 2 },
    pasaporte:          { word: 'pasaporte', ipa: '/pasaˈpoɾte/', tr: 'le passeport', v: 3 },
    desayuno:           { word: 'desayuno', ipa: '/desaˈʝuno/', tr: 'le petit-déjeuner', v: 7 },
    contraseña:         { word: 'contraseña', ipa: '/kontɾaˈseɲa/', tr: 'le mot de passe' },
    tarjeta:            { word: 'tarjeta', ipa: '/taɾˈxeta/', tr: 'la carte (ici : la carte-clé de la chambre). Le « j » se prononce comme un « r » raclé.', v: 5 },
    salida:             { word: 'salida', ipa: '/saˈliða/', tr: "le départ (l'heure à laquelle on libère la chambre)", v: 6 },
    estancia:           { word: 'estancia', ipa: {es:'/esˈtanθja/', latam:'/esˈtansja/'}, tr: 'le séjour', v: 10 }
  },

  vocabulaire: [
    { en: {es:'Tengo una reserva', latam:'Tengo una reservación'}, fr: "J'ai une réservation", ex: {es:'Tengo una reserva para dos noches.', latam:'Tengo una reservación para dos noches.'} },
    { en: 'a nombre de…', fr: 'au nom de…', ex: 'La mesa está a nombre de Dubois.' },
    { en: 'una habitación doble', fr: 'une chambre double', ex: '¿Tiene una habitación doble para esta noche?' },
    { en: '¿Me permite su pasaporte?', fr: 'Puis-je voir votre passeport ?', ex: '¿Me permite su pasaporte, por favor?' },
    { en: 'la recepción', fr: 'la réception', ex: {es:'Llame a recepción, por favor.', latam:'Marque a la recepción, por favor.'} },
    { en: 'la tarjeta de la habitación', fr: 'la carte-clé', ex: 'Mi tarjeta no funciona.' },
    { en: 'la salida', fr: 'le départ (libérer la chambre)', ex: 'La salida es a las 12.' },
    { en: 'El desayuno se sirve de… a…', fr: 'Le petit-déjeuner est servi de… à…', ex: 'El desayuno se sirve de 7 a 10.' },
    { en: {es:'la tercera planta', latam:'el tercer piso'}, fr: 'le 3ᵉ étage', ex: {es:'Mi habitación está en la tercera planta.', latam:'Mi habitación está en el tercer piso.'} },
    { en: '¿Hay wifi en la habitación?', fr: 'Y a-t-il le wifi dans la chambre ?', ex: '¿Hay wifi en la habitación?' },
    { en: {es:'¡Que disfrute de su estancia!', latam:'¡Que disfrute su estancia!'}, fr: 'Bon séjour !', ex: {es:'Gracias, ¡y que disfrute de su estancia!', latam:'Gracias, ¡y que disfrute su estancia!'} },
    { en: {es:'De nada.', latam:'Con gusto.'}, fr: 'Je vous en prie. / De rien.', ex: {es:'—¡Muchas gracias! —De nada.', latam:'—¡Muchas gracias! —Con gusto.'} }
  ],

  comprehension: [
    { q: 'Que demande Camille à la réceptionniste ?',
      opts: ["S'il y a le wifi dans la chambre, et l'heure du départ", "L'heure du petit-déjeuner et le mot de passe", 'Une chambre plus grande'],
      a: 0, why: 'Camille demande « ¿Hay wifi en la habitación? », puis « ¿a qué hora es la salida? ». L\'heure du petit-déjeuner, c\'est la réceptionniste qui la donne.' },
    { q: 'À quelle heure Camille doit-elle libérer la chambre ?',
      opts: ['10 h', '12 h', '7 h'],
      a: 1, why: '« La salida es a las 12. » 10 h, c\'est la fin du petit-déjeuner.' },
    { q: 'Où se trouve le mot de passe du wifi ?',
      opts: ['À la réception', 'Sur la carte de la chambre', 'Dans un e-mail'],
      a: 1, why: '« La contraseña está en su tarjeta. »' }
  ],

  grammaireTitre: 'Demander poliment : <span lang="es">¿Me permite…? / ¿Podría…? / Quisiera…</span>',
  grammaire: '<div class="rule"><strong>La règle</strong><br>À l\'hôtel, on vouvoie avec <span lang="es"><b>usted</b></span> : le verbe se met à la <b>3ᵉ personne</b> (<span lang="es">¿Puede…?</span> = « Pouvez-vous… ? »).<br><span lang="es"><b>¿Podría</b></span> + infinitif (conditionnel) est plus poli que <span lang="es"><b>¿Puede…?</b></span>. <span lang="es"><b>Quisiera</b></span> ou <span lang="es"><b>Me gustaría</b></span> signifient « je voudrais ».</div>' +
    '<div class="table-scroll"><table class="g-table"><thead><tr><th>Espagnol</th><th>Français</th><th>Registre</th></tr></thead><tbody lang="es">' +
    '<tr><td>¿Puede darme una toalla, por favor?</td><td lang="fr">Pouvez-vous me donner une serviette ?</td><td lang="fr">neutre</td></tr>' +
    '<tr><td>¿Me permite su pasaporte?</td><td lang="fr">Puis-je voir votre passeport ?</td><td lang="fr">poli</td></tr>' +
    '<tr><td>¿Podría llamar un taxi, por favor?</td><td lang="fr">Pourriez-vous appeler un taxi ?</td><td lang="fr">poli</td></tr>' +
    '<tr><td>Quisiera una habitación con vistas.</td><td lang="fr">Je voudrais une chambre avec vue.</td><td lang="fr">poli</td></tr></tbody></table></div>' +
    '<h3 class="g-h3">🇫🇷 Comparaison avec le français</h3><p>« Pourriez-vous… ? » se dit <span lang="es"><b>¿Podría…?</b></span> : pas besoin de pronom, <span lang="es">usted</span> est sous-entendu. « Je voudrais… » se dit <span lang="es"><b>Quisiera…</b></span>. <span lang="es"><b>Quiero</b></span> (« je veux ») passe entre amis, mais sonne direct à la réception.</p>' +
    '<h3 class="g-h3">⚠️ Erreurs typiques des francophones</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Erreur</th><th>Correction</th><th>Pourquoi</th></tr></thead><tbody>' +
    '<tr><td lang="es"><del>¿Podría a llamar un taxi?</del></td><td lang="es"><ins>¿Podría llamar un taxi?</ins></td><td>Pas de préposition entre <span lang="es">poder</span> et l\'infinitif.</td></tr>' +
    '<tr><td lang="es"><del>¿Puedes darme la llave?</del></td><td lang="es"><ins>¿Puede darme la llave?</ins></td><td>À l\'hôtel, on vouvoie : <span lang="es">usted</span> + 3ᵉ personne.</td></tr>' +
    '<tr><td lang="es"><del>Quiero una toalla.</del></td><td lang="es"><ins>Quisiera una toalla, por favor.</ins></td><td><span lang="es">Quiero</span> sonne comme un ordre.</td></tr></tbody></table></div>',
  exGrammaire: {
    phrase: '¿___ darme otra toalla, por favor?',
    options: ['Podría', 'Quisiera', 'Tengo'], bonne: 'Podría',
    retours: {
      'Podría': '✅ « ¿Podría darme otra toalla, por favor? » : une demande polie.',
      'Quisiera': '❌ « Quisiera » = « je voudrais » : on dirait « Quisiera otra toalla ». Pour demander à quelqu\'un de faire quelque chose : « ¿Podría darme… ? ».',
      'Tengo': '❌ « Tengo » = « j\'ai » : la phrase n\'a pas de sens.'
    }
  },

  trous: [
    { before: {es:'Tengo una reserva', latam:'Tengo una reservación'}, opts: ['a nombre de', 'en nombre de', 'al nombre de'], a: 'a nombre de', after: 'Martin.', why: '« a nombre de » = « au nom de » (« en nombre de » = « de la part de »).' },
    { before: '¿Me', opts: ['permite', 'permito', 'permiten'], a: 'permite', after: 'su pasaporte, por favor?', why: 'Avec usted, le verbe est à la 3ᵉ personne du singulier.' },
    { before: 'El desayuno se sirve', opts: ['de', 'desde', 'entre'], a: 'de', after: '7 a 10.', why: '« de… a… » = « de… à… ».' },
    { before: 'Mi habitación', opts: ['está', 'es', 'hay'], a: 'está', after: {es:'en la tercera planta.', latam:'en el tercer piso.'}, why: 'Pour situer un lieu, on emploie « estar » : « está en… ».' }
  ],
  paires: { a: 'pero', b: 'perro',
    aide: 'Écoutez le mot, puis choisissez ce que vous avez entendu. <span lang="es">pero</span> (mais) : un « r » simple, un seul battement de langue ; <span lang="es">perro</span> (chien) : « rr » roulé, plusieurs battements.' },

  jeuDeRole: {
    texte: 'Vous arrivez à l\'hôtel, mais le réceptionniste ne trouve pas votre réservation. Expliquez la situation, donnez votre nom et trouvez une solution, poliment (avec usted). Lucía joue la réceptionniste et vous corrige à la fin de la scène.',
    sujet: "À l'hôtel : j'arrive pour mon séjour, mais la réception ne trouve pas ma réservation. Tu joues la réceptionniste."
  },
  redaction: {
    consigne: 'Vous êtes dans votre chambre. Écrivez un court message à la réception pour demander à <b>partir plus tard</b> et <b>une serviette en plus</b> (<i lang="es">una toalla</i>).',
    placeholder: 'Buenos días, …',
    criteres: [
      [/(podr[ií]a|puede|quisiera|me gustar[ií]a|ser[ií]a posible)/, 'Une formule polie (¿Podría…? / ¿Puede…? / Quisiera… / Me gustaría…)'],
      [/por favor/, '« por favor »'],
      [/(m[aá]s tarde|salida tard[ií]a|late check-?out)/, 'La demande de départ tardif (salir más tarde)'],
      [/toallas?/, 'Le mot « toalla » (serviette)'],
      [/\bquiero\b/, '« quiero » (un peu direct : préférez « quisiera »)', true]
    ],
    modele: 'Buenos días, soy Camille Martin, de la habitación 305. ¿Sería posible salir más tarde mañana? ¿Y podría traerme una toalla más, por favor? ¡Muchas gracias!'
  },

  cultureTitre: 'À l\'hôtel, en Espagne et au Mexique',
  culture: '<div class="card block"><h3 class="ex-title">💶 Le pourboire (<span lang="es">la propina</span>)</h3>' +
    '<p><b>🇪🇸 Espagne :</b> le pourboire n\'est pas obligatoire. À l\'hôtel, il est rare ; au restaurant, on laisse souvent la petite monnaie, ou 5 à 10 % si le service a été agréable.</p>' +
    '<p style="margin:0;"><b>🇲🇽 Mexique :</b> la <span lang="es">propina</span> fait partie des usages : environ 10 à 15 % au restaurant, et quelques pesos pour le bagagiste (<i lang="es">maletero</i>) et la femme de chambre (<i lang="es">camarista</i>).</p></div>' +
    '<div class="card block"><h3 class="ex-title">🗣️ Les mots qui changent</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Français</th><th>🇪🇸 Espagne</th><th>🌎 Amérique latine</th></tr></thead><tbody>' +
    '<tr><td>une réservation</td><td lang="es">una reserva</td><td lang="es">una reservación (Mexique)</td></tr>' +
    '<tr><td>l\'étage</td><td lang="es">la planta</td><td lang="es">el piso</td></tr>' +
    '<tr><td>le téléphone portable</td><td lang="es">el móvil</td><td lang="es">el celular</td></tr>' +
    '<tr><td>prendre un taxi</td><td lang="es">coger un taxi</td><td lang="es">tomar un taxi</td></tr>' +
    '<tr><td>vous (pluriel)</td><td lang="es">vosotros (familier), ustedes (poli)</td><td lang="es">ustedes (toujours)</td></tr></tbody></table></div>' +
    '<p class="note" style="margin:10px 0 0;">Attention : en Amérique latine, évitez « <span lang="es">coger</span> », qui a un sens vulgaire dans plusieurs pays. Et en Espagne, on dîne tard : souvent vers 21 h ou 22 h.</p></div>',
  cultureQuiz: [
    { q: 'En Espagne, à quelle heure dîne-t-on souvent ?',
      opts: ['Vers 21 h ou plus tard', 'Vers 18 h', 'Vers 19 h'],
      a: 0, why: 'En Espagne, le déjeuner est vers 14 h et le dîner (la cena) vers 21 h ou 22 h.' },
    { q: 'Au Mexique, pour dire « prendre un taxi », on dit plutôt…',
      opts: ['tomar un taxi', 'coger un taxi', 'llevar un taxi'],
      a: 0, why: '« coger » est à éviter en Amérique latine : dans plusieurs pays, il a un sens vulgaire.' }
  ],

  bilan: [
    { q: '« Je voudrais une chambre avec vue. »', cible: true,
      opts: [{es:'Quisiera una habitación con vistas.', latam:'Quisiera una habitación con vista.'}, 'Yo quiero habitación con vistas.', 'Quisiera a una habitación con vistas.'],
      a: 0, why: '« Quisiera… » est la formule polie, et on garde l\'article « una ».', rev: {es:'Quisiera una habitación con vistas.', latam:'Quisiera una habitación con vista.'} },
    { q: 'Complétez : « ¿Me ___ su pasaporte, por favor? »', cible: true,
      opts: ['permite', 'permito', 'permitir'],
      a: 0, why: 'Avec usted, le verbe est à la 3ᵉ personne.', rev: '¿Me permite su pasaporte?' },
    { q: 'En Espagne, « le 3ᵉ étage » se dit…', cible: true,
      opts: ['la tercera planta', 'el tercer suelo', 'la tercera casa'],
      a: 0, why: '« la planta » en Espagne, « el piso » en Amérique latine.', rev: {es:'la tercera planta', latam:'el tercer piso'} },
    { q: '« Bon séjour ! »', cible: true,
      opts: [{es:'¡Que disfrute de su estancia!', latam:'¡Que disfrute su estancia!'}, '¡Buen viaje!', '¡Que aproveche!'],
      a: 0, why: '« ¡Buen viaje! » = « Bon voyage ! » ; « ¡Que aproveche! » = « Bon appétit ! ».', rev: {es:'¡Que disfrute de su estancia!', latam:'¡Que disfrute su estancia!'} },
    { q: '« La salida es a las 12. » signifie…',
      opts: ['Il faut libérer la chambre à midi', "L'arrivée est possible à partir de midi", 'Le petit-déjeuner est servi jusqu\'à midi'],
      a: 0, why: '« la salida » = le départ, l\'heure où l\'on rend la chambre. L\'arrivée se dit « la llegada ».', rev: 'la salida' },
    { q: 'À la réception, quelle phrase est correcte ?', cible: true,
      opts: ['¿Podría llamar un taxi, por favor?', '¿Podría a llamar un taxi?', '¿Podrías tú a llamar un taxi?'],
      a: 0, why: 'Pas de préposition entre « poder » et l\'infinitif, et on vouvoie avec usted.', rev: '¿Podría llamar un taxi?' },
    { q: 'Où appelez-vous pour demander à partir plus tard ?', cible: true,
      opts: ['la recepción', 'el desayuno', 'la tarjeta'],
      a: 0, why: '« la recepción » = la réception.', rev: 'la recepción' },
    { q: '« J\'ai une réservation au nom de Martin. »', cible: true,
      opts: [{es:'Tengo una reserva a nombre de Martin.', latam:'Tengo una reservación a nombre de Martin.'}, {es:'Tengo una reserva en nombre de Martin.', latam:'Tengo una reservación en nombre de Martin.'}, {es:'Soy una reserva a nombre de Martin.', latam:'Soy una reservación a nombre de Martin.'}],
      a: 0, why: '« a nombre de… » est la formule toute faite (« en nombre de » = « de la part de »).', rev: 'a nombre de…' }
  ],

  conseil: '« <span lang="es">A nombre de</span> » : c\'est la formule pour donner le nom d\'une réservation. Elle sert aussi au restaurant : « <span lang="es">Tengo una mesa a nombre de…</span> » ¡Muy útil!'
};
