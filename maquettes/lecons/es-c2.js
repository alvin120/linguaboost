// Lección C2 « Débat : le surtourisme » — espagnol (variantes Espagne / Amérique latine, ici le Mexique).
window.LECONS = window.LECONS || {};
window.LECONS['es-C2'] = {
  niveau: 'C2', theme: 'Débat : le surtourisme', etape1: 'Camille débat à la radio',
  intro: 'Devenue directrice d\'hôtel, Camille est invitée dans une émission de radio à {ville} pour débattre du surtourisme.',
  indiceOrdre: 'le présentateur présente le sujet, puis Camille répond.',
  badge: { nom: 'Maîtrise', icone: '🏆' },
  lang: 'es', langue: 'espagnol', prof: 'lucia', profNom: 'Lucía', profInitiale: 'L',
  titre: 'Unidad 15 · Un debate encendido',
  variantes: [
    { k: 'es', label: '🇪🇸 España', speech: 'es-ES', code: 'ES' },
    { k: 'latam', label: '🌎 Latam', speech: 'es-MX', code: 'LATAM' }
  ],
  ville: { es: 'Barcelone', latam: 'Mexico' },
  personnages: { C: { nom: 'Camille', init: 'CM' }, R: { nom: 'Présentateur', init: 'PR' } },
  noteVariantes: '<strong>🇪🇸 / 🌎 Ce qui change selon la variante</strong><p style="margin:6px 0 0;font-size:15px;">À ce niveau, les différences touchent le vocabulaire du quotidien : <i lang="es">pisos</i> et <i lang="es">alquileres</i> 🇪🇸, <i lang="es">departamentos</i> et <i lang="es">rentas</i> 🌎 (Mexique). Et bien sûr <i lang="es">vosotros</i> en Espagne, <i lang="es">ustedes</i> en Amérique latine.</p>',

  dialogue: [
    { who: 'R', seg: ['Bienvenidos de nuevo. Esta noche abordamos el turismo masivo. Camille, ¿bendición o maldición?'],
      fr: 'Rebonjour. Ce soir, nous abordons le tourisme de masse. Camille, bénédiction ou malédiction ?' },
    { who: 'C', seg: ['Pues es ', {w:'un arma de doble filo'}, '. ', {w:'Lo que me preocupa'}, ' no es el turismo en sí, sino cómo se concentra.'],
      fr: 'Eh bien, c\'est une arme à double tranchant. Ce qui m\'inquiète, ce n\'est pas le tourisme en soi, mais la façon dont il se concentre.' },
    { who: 'R', seg: ['Hay quien diría que los hoteles como el suyo forman parte del problema.'],
      fr: 'Certains diraient que des hôtels comme le vôtre font partie du problème.' },
    { who: 'C', seg: [{w:'No le falta razón'}, ', ', {w:'hasta cierto punto'}, '. Pero son ', {d:{es:'los pisos turísticos los que han disparado los alquileres', latam:'los departamentos turísticos los que han disparado las rentas'}}, '.'],
      fr: 'Vous n\'avez pas tort, jusqu\'à un certain point. Mais ce sont les locations touristiques qui ont fait flamber les loyers.' },
    { who: 'R', seg: ['Entonces, ¿qué ', {w:'plantea'}, ' usted?'],
      fr: 'Alors, que proposez-vous ?' },
    { who: 'C', seg: ['Repartir a los visitantes a lo largo del año. ', {w:'Por mucho que'}, ' nos cueste, hay que evitar que los vecinos se vayan de sus barrios.'],
      fr: 'Répartir les visiteurs sur toute l\'année. Aussi difficile que ce soit, il faut éviter que les habitants quittent leurs quartiers.' },
    { who: 'R', seg: ['¿No es ', {w:'más fácil decirlo que hacerlo'}, '?'],
      fr: 'N\'est-ce pas plus facile à dire qu\'à faire ?' },
    { who: 'C', seg: ['Claro, ', {w:'aunque'}, ' no sea fácil, ya se está haciendo en Ámsterdam, ', {w:'que yo sepa'}, '.'],
      fr: 'Bien sûr ; même si ce n\'est pas facile, ça se fait déjà à Amsterdam, à ma connaissance.' },
    { who: 'R', seg: ['Tendremos que dejarlo aquí. Gracias, Camille.'],
      fr: 'Nous allons devoir nous arrêter là. Merci, Camille.' },
    { who: 'C', seg: [{d:{es:'Gracias a vosotros por invitarme.', latam:'Gracias a ustedes por invitarme.'}}],
      fr: 'Merci à vous de m\'avoir invitée.' }
  ],

  glossaire: {
    'un arma de doble filo':        { word: 'un arma de doble filo', tr: 'une arme à double tranchant. « arma » est féminin, mais prend « un » devant le « a » tonique.', v: 0 },
    'Lo que me preocupa':           { word: 'Lo que me preocupa', tr: 'Ce qui m\'inquiète… (mise en relief : « Lo que… es… »)', v: 1 },
    'No le falta razón':            { word: 'No le falta razón', tr: 'Vous n\'avez pas tort (litt. « la raison ne vous manque pas »)', v: 2 },
    'hasta cierto punto':           { word: 'hasta cierto punto', tr: 'jusqu\'à un certain point', v: 3 },
    plantea:                        { word: 'plantea', tr: 'proposez, avancez (plantear una idea)', v: 5 },
    'Por mucho que':                { word: 'Por mucho que', tr: 'On a beau…, aussi… que (+ subjonctif) : « Por mucho que nos cueste » = même si ça nous coûte beaucoup.', v: 6 },
    'más fácil decirlo que hacerlo': { word: 'más fácil decirlo que hacerlo', tr: 'plus facile à dire qu\'à faire', v: 7 },
    aunque:                         { word: 'aunque', tr: 'même si. + subjonctif (« aunque no sea fácil ») : la difficulté est admise mais jugée secondaire.', v: 9 },
    'que yo sepa':                  { word: 'que yo sepa', tr: 'à ma connaissance (subjonctif figé)', v: 8 }
  },

  vocabulaire: [
    { en: 'Es un arma de doble filo.', fr: 'C\'est une arme à double tranchant.', ex: 'Las redes sociales son un arma de doble filo.' },
    { en: 'Lo que me preocupa es…', fr: 'Ce qui m\'inquiète, c\'est…', ex: 'Lo que me sorprende es la falta de datos.' },
    { en: 'No le falta razón.', fr: 'Vous n\'avez pas tort.', ex: 'No te falta razón, pero hay matices.' },
    { en: 'hasta cierto punto', fr: 'jusqu\'à un certain point', ex: 'Estoy de acuerdo hasta cierto punto.' },
    { en: 'dispararse (los precios)', fr: 'flamber, exploser', ex: {es:'Los precios se han disparado.', latam:'Los precios se dispararon.'} },
    { en: 'plantear una propuesta', fr: 'avancer une proposition', ex: 'Planteó una idea muy interesante.' },
    { en: 'Por mucho que + subjonctif', fr: 'On a beau…, aussi… que', ex: 'Por mucho que insistas, no cambiaré de opinión.' },
    { en: 'Es más fácil decirlo que hacerlo.', fr: 'C\'est plus facile à dire qu\'à faire.', ex: 'Ahorrar es más fácil decirlo que hacerlo.' },
    { en: 'que yo sepa', fr: 'à ma connaissance', ex: 'Que yo sepa, nadie se ha quejado.' },
    { en: 'aunque + subjonctif', fr: 'même si (hypothèse ou fait jugé secondaire)', ex: 'Aunque llueva, saldremos.' }
  ],

  comprehension: [
    { q: 'Pour Camille, le problème principal est…',
      opts: ['La concentration du tourisme', 'Le tourisme en lui-même', 'Le prix des hôtels'],
      a: 0, why: '« Lo que me preocupa no es el turismo en sí, sino cómo se concentra. »' },
    { q: 'D\'après elle, qu\'est-ce qui a fait flamber les loyers ?',
      opts: ['Les locations touristiques', 'Les grands hôtels', 'Les compagnies aériennes'],
      a: 0, why: '« Son los pisos / departamentos turísticos los que han disparado los alquileres / las rentas. »' },
    { q: 'Que propose-t-elle ?',
      opts: ['Répartir les visiteurs sur toute l\'année', 'Interdire les touristes', 'Augmenter les taxes de séjour'],
      a: 0, why: '« Repartir a los visitantes a lo largo del año. »' }
  ],

  grammaireTitre: 'Concéder et nuancer : <span lang="es">aunque, por mucho que</span> + subjonctif',
  grammaire: '<div class="rule"><strong>La règle</strong><br><span lang="es"><b>aunque + indicatif</b></span> : on reconnaît un fait réel (<span lang="es">Aunque es caro, lo compro</span> = il est cher, je le sais).<br><span lang="es"><b>aunque + subjonctif</b></span> : hypothèse, ou fait jugé sans importance (<span lang="es">Aunque sea caro, lo compro</span> = même s\'il est cher, peu importe).<br><span lang="es"><b>por mucho que / por más que</b> + subjonctif</span> : « on a beau… ».<br>Mise en relief : <span lang="es">Lo que me preocupa es… / Son los pisos los que…</span></div>' +
    '<div class="table-scroll"><table class="g-table"><thead><tr><th>Espagnol</th><th>Français</th><th>Nuance</th></tr></thead><tbody>' +
    '<tr><td lang="es">Aunque es difícil, lo haremos.</td><td>Bien que ce soit difficile, nous le ferons.</td><td>fait reconnu</td></tr>' +
    '<tr><td lang="es">Aunque sea difícil, lo haremos.</td><td>Même si c\'est difficile, nous le ferons.</td><td>peu importe</td></tr>' +
    '<tr><td lang="es">Por mucho que nos cueste…</td><td>Aussi difficile que ce soit…</td><td>concession forte</td></tr>' +
    '<tr><td lang="es">Que yo sepa, nadie se ha quejado.</td><td>À ma connaissance, personne ne s\'est plaint.</td><td>réserve</td></tr></tbody></table></div>' +
    '<h3 class="g-h3">🇫🇷 Comparaison avec le français</h3><p>Le français met l\'<b>indicatif</b> après « même si » ; l\'espagnol choisit entre indicatif et <b>subjonctif</b> selon ce que vous voulez dire. « On a beau insister » se traduit par <span lang="es">Por mucho que insistamos</span>, toujours avec le subjonctif.</p>' +
    '<h3 class="g-h3">⚠️ Erreurs typiques des francophones</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Erreur</th><th>Correction</th><th>Pourquoi</th></tr></thead><tbody>' +
    '<tr><td lang="es"><del>Por mucho que insistes…</del></td><td lang="es"><ins>Por mucho que insistas…</ins></td><td><span lang="es">por mucho que</span> + subjonctif.</td></tr>' +
    '<tr><td lang="es"><del>Que yo sé…</del></td><td lang="es"><ins>Que yo sepa…</ins></td><td>Expression figée au subjonctif.</td></tr>' +
    '<tr><td lang="es"><del>Lo cual me preocupa es…</del></td><td lang="es"><ins>Lo que me preocupa es…</ins></td><td><span lang="es">lo cual</span> reprend une phrase précédente.</td></tr></tbody></table></div>',
  exGrammaire: {
    phrase: 'Por mucho que nos ___, hay que actuar.',
    options: ['cueste', 'cuesta', 'costará'], bonne: 'cueste',
    retours: {
      cueste: '✅ « por mucho que » + subjonctif : « cueste ».',
      cuesta: '❌ Après « por mucho que », toujours le subjonctif : « cueste ».',
      'costará': '❌ Pas de futur ici : « por mucho que » + subjonctif présent.'
    }
  },

  trous: [
    { before: '', opts: ['Lo que', 'Lo cual', 'El que'], a: 'Lo que', after: 'me preocupa es la vivienda.', why: '« Lo que… es… » = « Ce qui… c\'est… ».' },
    { before: 'Que yo', opts: ['sepa', 'sé', 'sabré'], a: 'sepa', after: ', nadie se ha quejado.', why: 'Expression figée : « que yo sepa ».' },
    { before: 'Estoy de acuerdo hasta cierto', opts: ['punto', 'límite', 'nivel'], a: 'punto', after: '.', why: '« hasta cierto punto » = jusqu\'à un certain point.' },
    { before: 'Es', opts: ['un', 'una', 'uno'], a: 'un', after: 'arma de doble filo.', why: '« arma » est féminin, mais prend « un » devant le « a » tonique (comme « el agua »).' }
  ],
  paires: { a: 'ahí', b: 'hay',
    aide: 'Écoutez le mot, puis choisissez ce que vous avez entendu. <span lang="es">ahí</span> (là) : deux syllabes, accent sur le « Í » ; <span lang="es">hay</span> (il y a) : une seule syllabe, « aï ».' },

  jeuDeRole: {
    texte: 'Participez à un débat : défendez une position nuancée sur un sujet de société (surtourisme, télétravail, IA…), concédez des points et contre-argumentez. Lucía anime le débat et vous pousse dans vos retranchements.',
    sujet: 'Débat radio de niveau C2 sur le surtourisme. Tu joues la présentatrice : tu contredis mes arguments et tu me pousses à nuancer. Registre soutenu, expressions idiomatiques bienvenues.'
  },
  redaction: {
    consigne: 'Écrivez un paragraphe d\'opinion (4 ou 5 phrases) sur le surtourisme : <b>une concession</b> (<i lang="es">aunque / por mucho que</i> + subjonctif), <b>une mise en relief</b> (<i lang="es">Lo que me preocupa es…</i>) et <b>une nuance</b> (<i lang="es">hasta cierto punto</i>).',
    placeholder: 'El turismo masivo …',
    criteres: [
      [/lo que (me |nos )?[a-zá-úñ]+ es/, 'Une mise en relief (Lo que me preocupa es…)'],
      [/(por mucho que|por m[aá]s que|aunque) [a-zá-úñ ]{0,20}(sea|cueste|haya|guste|tenga|pueda|quiera|insistan?|digan?)([^a-zá-úñ]|$)/, 'Une concession + subjonctif (por mucho que nos cueste…)'],
      [/(hasta cierto punto|no le falta raz[oó]n|en cierta medida|que yo sepa)/, 'Une nuance (hasta cierto punto / que yo sepa…)'],
      [/(sin embargo|no obstante|ahora bien|dicho esto|aun as[ií])/, 'Un connecteur d\'opposition soutenu (sin embargo, no obstante…)'],
      [/(por mucho que|por m[aá]s que) [a-zá-úñ ]{0,15}(cuesta|es|hay|tiene)([^a-zá-úñ]|$)/, '« por mucho que » + indicatif (il faut le subjonctif)', true]
    ],
    modele: {
      es: 'Aunque el turismo genera empleo, lo que me preocupa es su concentración en pocos barrios. Son los pisos turísticos los que han disparado los alquileres y eso, hasta cierto punto, nos concierne a todos. Sin embargo, por mucho que nos cueste, hay que repartir a los visitantes a lo largo del año.',
      latam: 'Aunque el turismo genera empleo, lo que me preocupa es su concentración en pocos barrios. Son los departamentos turísticos los que han disparado las rentas y eso, hasta cierto punto, nos concierne a todos. Sin embargo, por mucho que nos cueste, hay que repartir a los visitantes a lo largo del año.'
    }
  },

  cultureTitre: 'Registres et expressions, en Espagne et en Amérique latine',
  culture: '<div class="card block"><h3 class="ex-title">🎚️ Changer de registre</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Soutenu</th><th>Courant</th><th>Familier</th></tr></thead><tbody lang="es">' +
    '<tr><td>La situación se ha deteriorado notablemente.</td><td>Las cosas han empeorado mucho.</td><td>Esto se ha ido al garete. (Espagne)</td></tr>' +
    '<tr><td>Discrepo de su planteamiento.</td><td>No estoy de acuerdo.</td><td>¡Ni de broma!</td></tr>' +
    '<tr><td>Resulta sumamente costoso.</td><td>Es muy caro.</td><td>Cuesta un ojo de la cara.</td></tr></tbody></table></div></div>' +
    '<div class="card block"><h3 class="ex-title">🗣️ Expressions : Espagne ou Amérique latine ?</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Expression</th><th>Où</th><th>Sens</th></tr></thead><tbody>' +
    '<tr><td lang="es">estar hasta las narices</td><td>🇪🇸</td><td>en avoir marre</td></tr>' +
    '<tr><td lang="es">tener mala leche</td><td>🇪🇸</td><td>avoir mauvais caractère</td></tr>' +
    '<tr><td lang="es">¡Qué padre!</td><td>🇲🇽</td><td>Génial !</td></tr>' +
    '<tr><td lang="es">estar en su salsa</td><td>partout</td><td>être dans son élément</td></tr>' +
    '<tr><td lang="es">ser pan comido</td><td>partout</td><td>être simple comme bonjour</td></tr></tbody></table></div></div>',
  cultureQuiz: [
    { q: 'Au Mexique, « ¡Qué padre! » veut dire…',
      opts: ['Génial !', 'Quel père !', 'Quelle horreur !'],
      a: 0, why: 'Expression mexicaine très courante pour dire que quelque chose est super.' },
    { q: '« Discrepo de su planteamiento » appartient au registre…',
      opts: ['Soutenu', 'Familier', 'Argotique'],
      a: 0, why: 'Une façon très formelle de dire « je ne suis pas d\'accord ».' }
  ],

  bilan: [
    { q: '« Ce qui m\'inquiète, c\'est le logement. »', cible: true,
      opts: ['Lo que me preocupa es la vivienda.', 'Lo cual me preocupa es la vivienda.', 'Que me preocupa es la vivienda.'],
      a: 0, why: 'Mise en relief : « Lo que… es… ».', rev: 'Lo que me preocupa es…' },
    { q: 'Complétez : « Por mucho que nos ___… »', cible: true,
      opts: ['cueste', 'cuesta', 'costará'],
      a: 0, why: '« por mucho que » + subjonctif.', rev: 'Por mucho que + subjonctif' },
    { q: '« C\'est une arme à double tranchant. »', cible: true,
      opts: ['Es un arma de doble filo.', 'Es una arma de doble filo.', 'Es un arma de dos cortes.'],
      a: 0, why: '« un arma » : article masculin devant le « a » tonique.', rev: 'Es un arma de doble filo.' },
    { q: '« À ma connaissance »', cible: true,
      opts: ['que yo sepa', 'que yo sé', 'a mi saber'],
      a: 0, why: 'Expression figée au subjonctif.', rev: 'que yo sepa' },
    { q: '« Vous n\'avez pas tort. »', cible: true,
      opts: ['No le falta razón.', 'No tiene torcido.', 'No le sobra razón.'],
      a: 0, why: '« No le falta razón » : la raison ne vous manque pas.', rev: 'No le falta razón.' },
    { q: '« Même s\'il pleut, nous sortirons. » (hypothèse)', cible: true,
      opts: ['Aunque llueva, saldremos.', 'Aunque lloverá, saldremos.', 'Aunque llovería, saldremos.'],
      a: 0, why: 'Hypothèse : aunque + subjonctif.', rev: 'aunque + subjonctif' },
    { q: 'Au Mexique, « ¡Qué padre! » signifie…',
      opts: ['Génial !', 'Mon Dieu !', 'Quel homme !'],
      a: 0, why: 'Expression mexicaine.' },
    { q: '« Plus facile à dire qu\'à faire »', cible: true,
      opts: ['más fácil decirlo que hacerlo', 'más fácil a decir que a hacer', 'más fácil que decirlo hacerlo'],
      a: 0, why: '« a decir / a hacer » est un calque du français.', rev: 'Es más fácil decirlo que hacerlo.' }
  ],

  conseil: '« Aunque » + subjonctif, c\'est la nuance des locuteurs C2 : « <span lang="es">Aunque sea caro, lo compro</span> » (peu importe le prix). Avec l\'indicatif, vous reconnaissez un fait : « <span lang="es">Aunque es caro…</span> ». ¡Qué nivel!'
};
