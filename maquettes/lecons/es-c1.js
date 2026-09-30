// Lección C1 « Négociation commerciale » — espagnol (variantes Espagne / Amérique latine, ici le Mexique).
window.LECONS = window.LECONS || {};
window.LECONS['es-C1'] = {
  niveau: 'C1', theme: 'Négociation commerciale', etape1: 'Camille négocie avec une cliente',
  intro: 'Camille, devenue responsable des groupes dans un hôtel de {ville}, reçoit une cliente qui veut réserver pour un séminaire.',
  indiceOrdre: 'Camille accueille la cliente, puis celle-ci présente sa demande.',
  badge: { nom: 'Négociatrice', icone: '📈' },
  lang: 'es', langue: 'espagnol', prof: 'lucia', profNom: 'Lucía', profInitiale: 'L',
  titre: 'Unidad 12 · Cerrar el trato',
  variantes: [
    { k: 'es', label: '🇪🇸 España', speech: 'es-ES', code: 'ES' },
    { k: 'latam', label: '🌎 Latam', speech: 'es-MX', code: 'LATAM' }
  ],
  ville: { es: 'Madrid', latam: 'Mexico' },
  personnages: { C: { nom: 'Camille', init: 'CM' }, R: { nom: 'Cliente', init: 'CL' } },
  noteVariantes: '<strong>🇪🇸 / 🌎 Ce qui change selon la variante</strong><p style="margin:6px 0 0;font-size:15px;">« C\'est un peu juste » se dit <i lang="es">nos pilla un poco justo</i> 🇪🇸 (familier) et <i lang="es">nos queda un poco justo</i> 🌎. « Sur la même longueur d\'onde » : <i lang="es">en la misma onda</i> 🇪🇸 ou <i lang="es">en la misma sintonía</i> 🌎.</p>',

  dialogue: [
    { who: 'C', seg: ['Gracias por ', {w:'dedicarnos'}, ' su tiempo, señora Robles.'],
      fr: 'Merci de nous consacrer votre temps, Madame Robles.' },
    { who: 'R', seg: ['Un placer. Organizamos un seminario de tres días para sesenta personas y, la verdad, sus tarifas se salen un poco de nuestro presupuesto.'],
      fr: 'Avec plaisir. Nous organisons un séminaire de trois jours pour soixante personnes et, à vrai dire, vos tarifs dépassent un peu notre budget.' },
    { who: 'C', seg: ['Lo entiendo. Si ', {w:'reservaran'}, ' las sesenta habitaciones, podríamos ofrecerles un quince por ciento de descuento.'],
      fr: 'Je comprends. Si vous réserviez les soixante chambres, nous pourrions vous offrir quinze pour cent de remise.' },
    { who: 'R', seg: ['Eso ya es otra cosa. ', {w:'Si lo hubiéramos sabido'}, ' antes, no habríamos mirado otros hoteles.'],
      fr: 'Ça change tout. Si nous l\'avions su plus tôt, nous n\'aurions pas regardé d\'autres hôtels.' },
    { who: 'C', seg: ['Me alegra oírlo. También podríamos incluir las salas de reuniones, ', {w:'siempre y cuando'}, ' confirmen antes del viernes.'],
      fr: 'J\'en suis ravie. Nous pourrions aussi inclure les salles de réunion, à condition que vous confirmiez avant vendredi.' },
    { who: 'R', seg: ['El viernes ', {d:{es:'nos pilla un poco justo', latam:'nos queda un poco justo'}}, '. ¿Y si ', {w:'confirmáramos'}, ' el lunes? ¿', {w:'Seguiría en pie'}, ' la oferta?'],
      fr: 'Vendredi, c\'est un peu juste pour nous. Et si nous confirmions lundi ? L\'offre tiendrait-elle toujours ?' },
    { who: 'C', seg: ['Tendría que consultarlo con mi directora, pero ', {w:'no creo que haya'}, ' problema.'],
      fr: 'Je devrais en parler à ma directrice, mais je ne pense pas qu\'il y ait de problème.' },
    { who: 'R', seg: ['En ese caso, ¿podría enviarme una ', {w:'propuesta por escrito'}, '?'],
      fr: 'Dans ce cas, pourriez-vous m\'envoyer une proposition écrite ?' },
    { who: 'C', seg: ['Por supuesto. La tendrá hoy mismo en su correo.'],
      fr: 'Bien sûr. Vous l\'aurez aujourd\'hui même dans votre boîte mail.' },
    { who: 'R', seg: [{d:{es:'Perfecto. Creo que estamos en la misma onda.', latam:'Perfecto. Creo que estamos en la misma sintonía.'}}],
      fr: 'Parfait. Je crois que nous sommes sur la même longueur d\'onde.' }
  ],

  glossaire: {
    dedicarnos:                { word: 'dedicarnos', tr: 'nous consacrer', v: 0 },
    reservaran:                { word: 'reservaran', tr: '(vous) réserviez : subjonctif imparfait. Hypothèse : « si + subjonctif imparfait + conditionnel ».', v: 1 },
    'Si lo hubiéramos sabido': { word: 'Si lo hubiéramos sabido', tr: 'Si nous l\'avions su : plus-que-parfait du subjonctif (irréel du passé), suivi du conditionnel passé « habríamos… ».', v: 2 },
    'siempre y cuando':        { word: 'siempre y cuando', tr: 'à condition que (+ subjonctif)', v: 3 },
    confirmáramos:             { word: 'confirmáramos', tr: 'nous confirmions (subjonctif imparfait)', v: 5 },
    'Seguiría en pie':         { word: 'Seguiría en pie', tr: 'tiendrait toujours (« seguir en pie » = rester valable)', v: 6 },
    'no creo que haya':        { word: 'no creo que haya', tr: 'je ne pense pas qu\'il y ait : « no creo que » + subjonctif', v: 7 },
    'propuesta por escrito':   { word: 'propuesta por escrito', tr: 'une proposition écrite, un devis', v: 8 }
  },

  vocabulaire: [
    { en: 'Gracias por dedicarnos su tiempo.', fr: 'Merci de nous consacrer votre temps.', ex: 'Muchas gracias por dedicarme su tiempo.' },
    { en: 'Si reservaran…, podríamos…', fr: 'Si vous réserviez…, nous pourrions…', ex: 'Si pudiéramos, lo haríamos.' },
    { en: 'Si lo hubiéramos sabido, habríamos…', fr: 'Si nous l\'avions su, nous aurions…', ex: 'Si me lo hubieras dicho, te habría ayudado.' },
    { en: 'siempre y cuando + subjonctif', fr: 'à condition que', ex: 'Se lo incluimos, siempre y cuando confirmen hoy.' },
    { en: {es:'Nos pilla un poco justo.', latam:'Nos queda un poco justo.'}, fr: 'C\'est un peu juste pour nous.', ex: {es:'El jueves nos pilla un poco justo.', latam:'El jueves nos queda un poco justo.'} },
    { en: '¿Y si confirmáramos el lunes?', fr: 'Et si nous confirmions lundi ?', ex: '¿Y si lo dejáramos para mañana?' },
    { en: 'La oferta sigue en pie.', fr: 'L\'offre tient toujours.', ex: '¿Sigue en pie la oferta?' },
    { en: 'No creo que haya problema.', fr: 'Je ne pense pas qu\'il y ait de problème.', ex: 'No creo que sea necesario.' },
    { en: 'una propuesta por escrito', fr: 'une proposition écrite', ex: 'Le envío la propuesta por escrito.' },
    { en: {es:'estar en la misma onda', latam:'estar en la misma sintonía'}, fr: 'être sur la même longueur d\'onde', ex: {es:'Estamos en la misma onda.', latam:'Estamos en la misma sintonía.'} }
  ],

  comprehension: [
    { q: 'Que veut la cliente ?',
      opts: ['Organiser un séminaire de 3 jours pour 60 personnes', 'Réserver une chambre pour ses vacances', 'Annuler une réservation'],
      a: 0, why: '« un seminario de tres días para sesenta personas ».' },
    { q: 'Que propose Camille ?',
      opts: ['15 % de remise pour les 60 chambres, et les salles de réunion incluses', 'Une nuit gratuite', 'Le petit-déjeuner offert'],
      a: 0, why: '« un quince por ciento de descuento… También podríamos incluir las salas de reuniones ».' },
    { q: 'Sur quoi porte la fin de la négociation ?',
      opts: ['La date de confirmation : vendredi ou lundi', 'Le prix des repas', 'Le nombre de participants'],
      a: 0, why: '« ¿Y si confirmáramos el lunes? »' }
  ],

  grammaireTitre: 'Hypothèses : <span lang="es">si + subjonctif imparfait / plus-que-parfait</span>',
  grammaire: '<div class="rule"><strong>La règle</strong><br><b>Hypothèse</b> sur le présent ou le futur : <span lang="es">si + subjonctif imparfait + conditionnel</span> (<span lang="es">Si reservaran, podríamos…</span>).<br><b>Irréel du passé</b> : <span lang="es">si + plus-que-parfait du subjonctif + conditionnel passé</span> (<span lang="es">Si lo hubiéramos sabido, no habríamos…</span>). Variante soutenue : <span lang="es">De haberlo sabido…</span><br><b>Condition</b> : <span lang="es">siempre y cuando / con tal de que</span> + subjonctif. <b>Opinion négative</b> : <span lang="es">no creo que</span> + subjonctif.</div>' +
    '<div class="table-scroll"><table class="g-table"><thead><tr><th>Espagnol</th><th>Français</th><th>Structure</th></tr></thead><tbody>' +
    '<tr><td lang="es">Si reservaran, podríamos…</td><td>Si vous réserviez, nous pourrions…</td><td>si + subj. imparfait</td></tr>' +
    '<tr><td lang="es">Si lo hubiéramos sabido, no habríamos…</td><td>Si nous l\'avions su, nous n\'aurions pas…</td><td>si + subj. plus-que-parfait</td></tr>' +
    '<tr><td lang="es">siempre y cuando confirmen</td><td>à condition que vous confirmiez</td><td>condition + subjonctif</td></tr>' +
    '<tr><td lang="es">No creo que haya problema.</td><td>Je ne pense pas qu\'il y ait de problème.</td><td>opinion négative + subj.</td></tr></tbody></table></div>' +
    '<h3 class="g-h3">🇫🇷 Comparaison avec le français</h3><p>« Si » + <b>imparfait de l\'indicatif</b> en français devient « si » + <b>imparfait du subjonctif</b> en espagnol : « si vous réserviez » → <span lang="es">si reservaran</span>. Et jamais de conditionnel après « si » : <span lang="es">si reservarían</span> est une faute.</p>' +
    '<h3 class="g-h3">⚠️ Erreurs typiques des francophones</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Erreur</th><th>Correction</th><th>Pourquoi</th></tr></thead><tbody>' +
    '<tr><td lang="es"><del>Si reservarían…</del></td><td lang="es"><ins>Si reservaran…</ins></td><td>Jamais de conditionnel après <span lang="es">si</span>.</td></tr>' +
    '<tr><td lang="es"><del>Si lo habríamos sabido…</del></td><td lang="es"><ins>Si lo hubiéramos sabido…</ins></td><td>Irréel du passé : subjonctif plus-que-parfait.</td></tr>' +
    '<tr><td lang="es"><del>No creo que hay problema.</del></td><td lang="es"><ins>No creo que haya problema.</ins></td><td><span lang="es">no creo que</span> + subjonctif.</td></tr></tbody></table></div>',
  exGrammaire: {
    phrase: 'Si lo ___ sabido antes, no habríamos mirado otros hoteles.',
    options: ['hubiéramos', 'habríamos', 'habíamos'], bonne: 'hubiéramos',
    retours: {
      'hubiéramos': '✅ Irréel du passé : « si + hubiéramos + participe », puis « habríamos… ».',
      'habríamos': '❌ Jamais de conditionnel après « si » : il faut « hubiéramos ».',
      'habíamos': '❌ L\'indicatif ne convient pas ici : c\'est une hypothèse irréelle, donc « hubiéramos ».'
    }
  },

  trous: [
    { before: 'Si', opts: ['reservaran', 'reservarían', 'reservan'], a: 'reservaran', after: 'sesenta habitaciones, les haríamos un descuento.', why: 'si + subjonctif imparfait + conditionnel.' },
    { before: 'Incluimos las salas,', opts: ['siempre y cuando', 'siempre que no', 'cuando siempre'], a: 'siempre y cuando', after: 'confirmen hoy.', why: '« siempre y cuando » + subjonctif = à condition que.' },
    { before: 'No creo que', opts: ['haya', 'hay', 'habrá'], a: 'haya', after: 'ningún problema.', why: '« no creo que » + subjonctif.' },
    { before: '¿Sigue en', opts: ['pie', 'mano', 'marcha'], a: 'pie', after: 'la oferta?', why: '« seguir en pie » = rester valable.' }
  ],
  paires: { a: 'papa', b: 'papá',
    aide: 'Écoutez le mot, puis choisissez ce que vous avez entendu. <span lang="es">papa</span> (pomme de terre en Amérique latine, ou le pape) : accent sur le premier « PA » ; <span lang="es">papá</span> (papa) : accent sur le dernier « PÁ ».' },

  jeuDeRole: {
    texte: 'Négociez un contrat : vous représentez un hôtel, et une cliente veut une remise pour un séminaire. Utilisez les hypothèses (si + subjonctif) et les conditions (siempre y cuando). Lucía joue la cliente exigeante.',
    sujet: 'Négociation commerciale : je représente un hôtel, tu joues une cliente exigeante qui veut une remise pour un séminaire de 60 personnes. Registre professionnel soutenu.'
  },
  redaction: {
    consigne: 'Écrivez un e-mail professionnel à la cliente pour confirmer l\'offre : <b>une remise sous condition</b> (<i lang="es">siempre y cuando…</i>), <b>une hypothèse</b> (si + subjonctif imparfait) et <b>une formule de fin</b>.',
    placeholder: 'Estimada señora Robles: …',
    criteres: [
      [/(siempre y cuando|siempre que|con tal de que|a condici[oó]n de que)/, 'Une condition + subjonctif (siempre y cuando…)'],
      [/si [a-zá-úñ]+(ra|ran|ramos|se|sen|semos)([^a-zá-úñ]|$)/, 'Une hypothèse au subjonctif imparfait (si reservaran…)'],
      [/(descuento|\d+ ?%)/, 'La remise (descuento)'],
      [/(saludo|saludos|atentamente|cordialmente)/, 'Une formule de fin'],
      [/si [a-zá-úñ]+(r[ií]a|r[ií]an|r[ií]amos)([^a-zá-úñ]|$)/, '« si » + conditionnel (il faut le subjonctif imparfait)', true]
    ],
    modele: {
      es: 'Estimada señora Robles: le agradezco que nos dedicara su tiempo. Si reservaran las sesenta habitaciones, podríamos ofrecerles un quince por ciento de descuento, siempre y cuando confirmen antes del lunes. Las salas de reuniones estarían incluidas. Quedo a su disposición. Un cordial saludo, Camille Martin',
      latam: 'Estimada señora Robles: le agradezco que nos dedicara su tiempo. Si reservaran las sesenta habitaciones, podríamos ofrecerles un quince por ciento de descuento, siempre y cuando confirmen antes del lunes. Las salas de reuniones estarían incluidas. Quedo a sus órdenes. Saludos cordiales, Camille Martin'
    }
  },

  cultureTitre: 'Négocier en Espagne et au Mexique',
  culture: '<div class="card block"><h3 class="ex-title">🤝 Deux styles</h3>' +
    '<p><b>🇪🇸 Espagne :</b> la discussion est directe et animée ; on s\'interrompt volontiers, ce n\'est pas impoli. Les décisions remontent souvent à la direction, et les repas d\'affaires sont longs.</p>' +
    '<p style="margin:0;"><b>🇲🇽 Mexique :</b> la relation personnelle passe d\'abord (<i lang="es">la confianza</i>). On évite le « non » frontal : il faut savoir le lire entre les lignes.</p></div>' +
    '<div class="card block"><h3 class="ex-title">🔍 Ce qu\'on dit, ce qu\'on veut dire</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Ce qu\'on entend</th><th>Ce que ça veut souvent dire</th></tr></thead><tbody>' +
    '<tr><td lang="es">Déjeme ver qué puedo hacer.</td><td>Ce sera difficile.</td></tr>' +
    '<tr><td lang="es">Ahorita lo reviso. (Mexique)</td><td>Plus tard… peut-être.</td></tr>' +
    '<tr><td lang="es">Lo vamos a estudiar.</td><td>Probablement non.</td></tr>' +
    '<tr><td lang="es">Es una propuesta interesante, pero…</td><td>Non.</td></tr></tbody></table></div></div>',
  cultureQuiz: [
    { q: 'Au Mexique, « ahorita » peut vouloir dire…',
      opts: ['Tout de suite… ou beaucoup plus tard', 'Maintenant, sans exception', 'Hier'],
      a: 0, why: 'Le diminutif de « ahora » est célèbre pour son élasticité !' },
    { q: 'En négociation, « Lo vamos a estudiar » signifie souvent…',
      opts: ['Probablement non', 'Oui, c\'est signé', 'Nous allons à l\'université'],
      a: 0, why: 'Une façon polie de repousser une proposition.' }
  ],

  bilan: [
    { q: '« Si nous l\'avions su, nous n\'aurions pas regardé d\'autres hôtels. »', cible: true,
      opts: ['Si lo hubiéramos sabido, no habríamos mirado otros hoteles.', 'Si lo habríamos sabido, no hubiéramos mirado otros hoteles.', 'Si lo sabríamos, no miraríamos otros hoteles.'],
      a: 0, why: 'si + subjonctif plus-que-parfait, puis conditionnel passé.', rev: 'Si lo hubiéramos sabido, habríamos…' },
    { q: 'Complétez : « Si ___ las sesenta habitaciones… »', cible: true,
      opts: ['reservaran', 'reservarían', 'reservarán'],
      a: 0, why: 'si + subjonctif imparfait.', rev: 'Si reservaran…, podríamos…' },
    { q: '« à condition que vous confirmiez aujourd\'hui »', cible: true,
      opts: ['siempre y cuando confirmen hoy', 'siempre y cuando confirman hoy', 'cuando siempre confirmen hoy'],
      a: 0, why: '« siempre y cuando » + subjonctif.', rev: 'siempre y cuando + subjonctif' },
    { q: '« Je ne pense pas qu\'il y ait de problème. »', cible: true,
      opts: ['No creo que haya problema.', 'No creo que hay problema.', 'No pienso que habrá problema.'],
      a: 0, why: '« no creo que » + subjonctif.', rev: 'No creo que haya problema.' },
    { q: '« L\'offre tient toujours ? »', cible: true,
      opts: ['¿Sigue en pie la oferta?', '¿Sigue de pie la oferta?', '¿Tiene todavía la oferta?'],
      a: 0, why: '« seguir en pie » (abstrait) ; « de pie » = debout.', rev: 'La oferta sigue en pie.' },
    { q: '« Une proposition écrite »', cible: true,
      opts: ['una propuesta por escrito', 'una proposición escrita a mano', 'una propuesta de escritura'],
      a: 0, why: 'Expression courante : « por escrito ».', rev: 'una propuesta por escrito' },
    { q: 'Au Mexique, « ahorita » peut vouloir dire…',
      opts: ['tout de suite… ou bien plus tard', 'hier soir', 'jamais de la vie'],
      a: 0, why: 'Tout dépend du contexte et du ton !' },
    { q: '« Et si nous confirmions lundi ? »', cible: true,
      opts: ['¿Y si confirmáramos el lunes?', '¿Y si confirmaríamos el lunes?', '¿Y si confirmamos el lunes pasado?'],
      a: 0, why: 'Hypothèse : si + subjonctif imparfait.', rev: '¿Y si confirmáramos el lunes?' }
  ],

  conseil: '« Si + subjonctif imparfait », jamais « si + conditionnel » : « <span lang="es">Si reservaran, podríamos…</span> ». C\'est LA faute qui trahit un francophone, et les examinateurs du DELE C1 la repèrent tout de suite.'
};
