// Leçon C2 « Débat : le surtourisme » — anglais (variantes US / UK).
window.LECONS = window.LECONS || {};
window.LECONS['en-C2'] = {
  niveau: 'C2', theme: 'Débat : le surtourisme', etape1: 'Camille débat à la radio',
  intro: 'Devenue directrice d\'hôtel, Camille est invitée dans une émission de radio à {ville} pour débattre du surtourisme.',
  indiceOrdre: 'l\'animateur présente le sujet, puis Camille répond.',
  badge: { nom: 'Maîtrise', icone: '🏆' },
  lang: 'en', langue: 'anglais', prof: 'emma', profNom: 'Emma', profInitiale: 'E',
  titre: 'Unit 15 · A heated debate',
  variantes: [
    { k: 'us', label: '🇺🇸 US', speech: 'en-US', code: 'US' },
    { k: 'uk', label: '🇬🇧 UK', speech: 'en-GB', code: 'UK' }
  ],
  ville: { us: 'Seattle', uk: 'Bristol' },
  personnages: { C: { nom: 'Camille', init: 'CM' }, R: { nom: 'Animateur', init: 'AN' } },
  noteVariantes: '<strong>🇺🇸 / 🇬🇧 Ce qui change selon la variante</strong><p style="margin:6px 0 0;font-size:15px;">À ce niveau, les variantes se jouent sur l\'orthographe (<i lang="en">neighborhood</i> 🇺🇸 / <i lang="en">neighbourhood</i> 🇬🇧) et sur les idiomes : certains sont typiquement américains (<i lang="en">take a rain check</i>), d\'autres typiquement britanniques (<i lang="en">it\'s not my cup of tea</i>).</p>',

  dialogue: [
    { who: 'R', seg: ["Welcome back. Tonight we're tackling overtourism. Camille, is tourism a blessing or a curse?"],
      fr: 'Rebonjour. Ce soir, nous nous attaquons au surtourisme. Camille, le tourisme est-il une bénédiction ou une malédiction ?' },
    { who: 'C', seg: ["Well, it's ", {w:'a double-edged sword'}, '. ', {w:'What worries me'}, " isn't tourism itself, but the way it's concentrated."],
      fr: 'Eh bien, c\'est une arme à double tranchant. Ce qui m\'inquiète, ce n\'est pas le tourisme en soi, mais la façon dont il se concentre.' },
    { who: 'R', seg: ['Some would argue that hotels like yours are part of the problem.'],
      fr: 'Certains diraient que des hôtels comme le vôtre font partie du problème.' },
    { who: 'C', seg: ["That's ", {w:'a fair point'}, ', ', {w:'up to a point'}, ". It's short-term rentals that have driven rents ", {w:'through the roof'}, ', though.'],
      fr: 'C\'est un argument recevable, jusqu\'à un certain point. Mais ce sont les locations de courte durée qui ont fait flamber les loyers.' },
    { who: 'R', seg: ['So what would you ', {w:'put forward'}, '?'],
      fr: 'Alors, que proposeriez-vous ?' },
    { who: 'C', seg: ['Spreading visitors out over the year. ', {w:'The last thing'}, ' we want is to ', {w:'price out'}, ' the very people who make a ', {d:{us:'neighborhood', uk:'neighbourhood'}}, ' worth visiting.'],
      fr: 'Étaler les visiteurs sur l\'année. La dernière chose que nous voulons, c\'est chasser par les prix ceux-là mêmes qui font qu\'un quartier vaut la peine d\'être visité.' },
    { who: 'R', seg: ["Isn't that ", {w:'easier said than done'}, '?'],
      fr: 'N\'est-ce pas plus facile à dire qu\'à faire ?' },
    { who: 'C', seg: ['Of course. But ', {w:'not only'}, " is it feasible, it's already happening in Amsterdam."],
      fr: 'Bien sûr. Mais non seulement c\'est faisable, mais ça se fait déjà à Amsterdam.' },
    { who: 'R', seg: [{d:{us:"We'll have to leave it there. Thanks, Camille.", uk:"We'll have to leave it there, I'm afraid. Cheers, Camille."}}],
      fr: 'Nous allons devoir nous arrêter là. Merci, Camille.' },
    { who: 'C', seg: ['Thank you for having me.'],
      fr: 'Merci de m\'avoir invitée.' }
  ],

  glossaire: {
    'a double-edged sword':  { word: 'a double-edged sword', tr: 'une arme à double tranchant', v: 0 },
    'What worries me':       { word: 'What worries me', tr: 'Ce qui m\'inquiète… (phrase clivée : « What… is… »)', v: 1 },
    'a fair point':          { word: 'a fair point', tr: 'un argument recevable, une remarque juste', v: 2 },
    'up to a point':         { word: 'up to a point', tr: 'jusqu\'à un certain point', v: 3 },
    'through the roof':      { word: 'through the roof', tr: '(prix) flamber, exploser', v: 4 },
    'put forward':           { word: 'put forward', tr: 'proposer, avancer (une idée)', v: 5 },
    'The last thing':        { word: 'The last thing', tr: 'La dernière chose que… (« The last thing we want is… »)', v: 6 },
    'price out':             { word: 'price out', tr: 'chasser par les prix (rendre un lieu inabordable)', v: 7 },
    'easier said than done': { word: 'easier said than done', tr: 'plus facile à dire qu\'à faire', v: 8 },
    'not only':              { word: 'not only', tr: 'non seulement. En tête de phrase, il entraîne l\'inversion : « Not only is it… »', v: 9 }
  },

  vocabulaire: [
    { en: "It's a double-edged sword.", fr: 'C\'est une arme à double tranchant.', ex: 'Social media is a double-edged sword.' },
    { en: 'What worries me is…', fr: 'Ce qui m\'inquiète, c\'est…', ex: 'What surprises me is the lack of data.' },
    { en: "That's a fair point.", fr: 'C\'est un argument recevable.', ex: "That's a fair point, but consider the long term." },
    { en: 'up to a point', fr: 'jusqu\'à un certain point', ex: 'I agree with you up to a point.' },
    { en: 'to go through the roof', fr: 'flamber, exploser', ex: 'Prices have gone through the roof.' },
    { en: 'to put forward an idea', fr: 'avancer une idée', ex: 'She put forward a bold proposal.' },
    { en: 'The last thing we want is…', fr: 'La dernière chose que nous voulons, c\'est…', ex: 'The last thing we need is another delay.' },
    { en: 'to be priced out (of)', fr: 'être chassé par les prix', ex: 'Young people are being priced out of the city.' },
    { en: 'easier said than done', fr: 'plus facile à dire qu\'à faire', ex: 'Saving money is easier said than done.' },
    { en: 'Not only is it…, (but) it…', fr: 'Non seulement c\'est…, mais…', ex: "Not only is it cheaper, it's also faster." }
  ],

  comprehension: [
    { q: 'Pour Camille, le problème principal est…',
      opts: ['La concentration du tourisme', 'Le tourisme en lui-même', 'Le prix des hôtels'],
      a: 0, why: '« What worries me isn\'t tourism itself, but the way it\'s concentrated. »' },
    { q: 'D\'après elle, qu\'est-ce qui a fait flamber les loyers ?',
      opts: ['Les locations de courte durée', 'Les grands hôtels', 'Les compagnies aériennes'],
      a: 0, why: '« It\'s short-term rentals that have driven rents through the roof. »' },
    { q: 'Que propose-t-elle ?',
      opts: ['Étaler les visiteurs sur toute l\'année', 'Interdire les touristes', 'Augmenter les taxes de séjour'],
      a: 0, why: '« Spreading visitors out over the year. »' }
  ],

  grammaireTitre: 'Mettre en relief : phrases clivées et inversion',
  grammaire: '<div class="rule"><strong>La règle</strong><br>Pour insister, on « clive » la phrase :<br><span lang="en"><b>What</b> + proposition + <b>is</b>…</span> (<span lang="en">What worries me is the rent.</span>)<br><span lang="en"><b>It is / It was</b> + élément + <b>that / who</b>…</span> (<span lang="en">It\'s short-term rentals that…</span>)<br><span lang="en"><b>The last / only thing</b>… <b>is</b>…</span><br>Avec un mot négatif ou restrictif en tête (<span lang="en">not only, never, rarely, little</span>), on <b>inverse</b> le sujet et l\'auxiliaire : <span lang="en">Not only is it feasible… / Never have I seen…</span></div>' +
    '<div class="table-scroll"><table class="g-table"><thead><tr><th>Neutre</th><th>Mis en relief</th></tr></thead><tbody lang="en">' +
    '<tr><td>The concentration worries me.</td><td>What worries me is the concentration.</td></tr>' +
    '<tr><td>Short-term rentals drove rents up.</td><td>It was short-term rentals that drove rents up.</td></tr>' +
    '<tr><td>It is feasible and it is already happening.</td><td>Not only is it feasible, it\'s already happening.</td></tr>' +
    '<tr><td>I have never seen so many tourists.</td><td>Never have I seen so many tourists.</td></tr></tbody></table></div>' +
    '<h3 class="g-h3">🇫🇷 Comparaison avec le français</h3><p>« <b>Ce qui</b> m\'inquiète, <b>c\'est</b>… » = <span lang="en">What worries me is…</span>, sans pronom <span lang="en">it</span>. « <b>C\'est</b>… <b>qui</b>… » = <span lang="en">It\'s… that…</span> pour une chose, <span lang="en">It\'s… who…</span> pour une personne. Le français n\'inverse pas après « non seulement » : c\'est le piège.</p>' +
    '<h3 class="g-h3">⚠️ Erreurs typiques des francophones</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Erreur</th><th>Correction</th><th>Pourquoi</th></tr></thead><tbody>' +
    '<tr><td lang="en"><del>What it worries me is…</del></td><td lang="en"><ins>What worries me is…</ins></td><td>Pas de <span lang="en">it</span> : <span lang="en">what</span> est le sujet.</td></tr>' +
    '<tr><td lang="en"><del>Not only it is feasible…</del></td><td lang="en"><ins>Not only is it feasible…</ins></td><td>Négation en tête : inversion.</td></tr>' +
    '<tr><td lang="en"><del>It\'s the rentals who have…</del></td><td lang="en"><ins>It\'s the rentals that have…</ins></td><td><span lang="en">who</span> est réservé aux personnes.</td></tr></tbody></table></div>',
  exGrammaire: {
    phrase: 'Not only ___ feasible, it is already happening.',
    options: ['is it', 'it is', 'it'], bonne: 'is it',
    retours: {
      'is it': '✅ « Not only » en tête de phrase : inversion de l\'auxiliaire et du sujet.',
      'it is': '❌ C\'est l\'ordre de la phrase française. Après « Not only » en tête, on inverse : « is it ».',
      'it': '❌ Il manque le verbe : « Not only is it feasible… ».'
    }
  },

  trous: [
    { before: '', opts: ['What', 'That', 'Which'], a: 'What', after: 'worries me is the lack of housing.', why: '« What… is… » = « Ce qui… c\'est… ».' },
    { before: "It's the short-term rentals", opts: ['that', 'who', 'what'], a: 'that', after: 'have driven rents up.', why: '« It\'s + chose + that… ».' },
    { before: 'Never', opts: ['have I seen', 'I have seen', 'I saw'], a: 'have I seen', after: 'so many tourists.', why: 'Négation en tête : inversion.' },
    { before: 'Rents have gone through the', opts: ['roof', 'ceiling', 'sky'], a: 'roof', after: '.', why: 'Expression idiomatique : « go through the roof ».' }
  ],
  paires: { a: 'thought', b: 'taught',
    aide: 'Écoutez le mot, puis choisissez ce que vous avez entendu. <span lang="en">thought</span> (pensé) : « th », la langue entre les dents ; <span lang="en">taught</span> (enseigné) : un « t » simple.' },

  jeuDeRole: {
    texte: 'Participez à un débat : défendez une position nuancée sur un sujet de société (surtourisme, télétravail, IA…), concédez des points et contre-argumentez. Emma joue l\'animatrice et vous pousse dans vos retranchements.',
    sujet: 'Débat radio de niveau C2 sur le surtourisme. Tu joues l\'animatrice : tu contredis mes arguments et tu me pousses à nuancer. Registre soutenu, idiomes bienvenus.'
  },
  redaction: {
    consigne: 'Écrivez un court paragraphe d\'opinion (4 ou 5 phrases) sur le surtourisme : <b>une concession</b>, <b>une phrase clivée</b> (What… is… / It\'s… that…) et <b>une inversion</b> (Not only…).',
    placeholder: 'Overtourism is …',
    criteres: [
      [/\bwhat [a-z' ,]{2,40}\b(is|was)\b/, 'Une phrase clivée avec « What… is… »'],
      [/\bit('s| is| was) [a-z' -]{2,40} (that|who)\b/, 'Une phrase clivée avec « It\'s… that… »'],
      [/\bnot only (is|are|was|were|do|does|did|has|have|can|will|would)\b|\bnever (have|has|had|did|do)\b|\brarely (do|does|did|have|has|is|are)\b|\blittle (do|does|did)\b/, 'Une inversion (Not only is… / Never have…)'],
      [/\b(admittedly|granted|that said|while it'?s true|although|even though|up to a point|a fair point)\b/, 'Une concession (Admittedly… / That said…)'],
      [/\bnot only it (is|was)\b|\bwhat it (worries|bothers|surprises|annoys)\b/, 'Une construction calquée sur le français (Not only it is… / What it worries…)', true]
    ],
    modele: {
      us: "Admittedly, tourism brings jobs and money. What worries me, though, is how concentrated it has become. It's short-term rentals that have driven rents through the roof in many neighborhoods. Not only is spreading visitors out feasible, it's already happening. The last thing we want is to price out the locals.",
      uk: "Admittedly, tourism brings jobs and money. What worries me, though, is how concentrated it has become. It's short-term rentals that have driven rents through the roof in many neighbourhoods. Not only is spreading visitors out feasible, it's already happening. The last thing we want is to price out the locals."
    }
  },

  cultureTitre: 'Registres et idiomes',
  culture: '<div class="card block"><h3 class="ex-title">🎚️ Changer de registre</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Soutenu</th><th>Courant</th><th>Familier</th></tr></thead><tbody lang="en">' +
    '<tr><td>The situation has deteriorated considerably.</td><td>Things have got much worse.</td><td>Things have gone downhill big time.</td></tr>' +
    '<tr><td>We must address this issue.</td><td>We need to deal with this.</td><td>We\'ve got to sort this out.</td></tr>' +
    '<tr><td>I beg to differ.</td><td>I don\'t agree.</td><td>No way!</td></tr></tbody></table></div></div>' +
    '<div class="card block"><h3 class="ex-title">🇺🇸 / 🇬🇧 Des idiomes bien à eux</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Idiome</th><th>Où</th><th>Sens</th></tr></thead><tbody>' +
    '<tr><td lang="en">to take a rain check</td><td>🇺🇸</td><td>remettre à plus tard</td></tr>' +
    '<tr><td lang="en">a ballpark figure</td><td>🇺🇸</td><td>un chiffre approximatif</td></tr>' +
    '<tr><td lang="en">it\'s not my cup of tea</td><td>🇬🇧</td><td>ce n\'est pas mon truc</td></tr>' +
    '<tr><td lang="en">Bob\'s your uncle</td><td>🇬🇧</td><td>et voilà, le tour est joué</td></tr>' +
    '<tr><td lang="en">to cost an arm and a leg</td><td>🇺🇸 🇬🇧</td><td>coûter les yeux de la tête</td></tr></tbody></table></div></div>',
  cultureQuiz: [
    { q: '« I beg to differ » appartient au registre…',
      opts: ['Soutenu', 'Familier', 'Argotique'],
      a: 0, why: 'C\'est une façon très polie de dire « je ne suis pas d\'accord ».' },
    { q: 'Aux États-Unis, « Let\'s take a rain check » veut dire…',
      opts: ['Remettons ça à plus tard', 'Vérifions la météo', 'Prenons un parapluie'],
      a: 0, why: 'À l\'origine, un billet pour un match de baseball reporté à cause de la pluie.' }
  ],

  bilan: [
    { q: '« Ce qui m\'inquiète, c\'est le manque de logements. »', cible: true,
      opts: ['What worries me is the lack of housing.', 'What it worries me is the lack of housing.', 'That worries me is the lack of housing.'],
      a: 0, why: '« What » est le sujet : pas de « it ».', rev: 'What worries me is…' },
    { q: 'Complétez : « Not only ___ feasible… »', cible: true,
      opts: ['is it', 'it is', 'it'],
      a: 0, why: 'Négation en tête : inversion.', rev: 'Not only is it…, (but) it…' },
    { q: '« C\'est une arme à double tranchant. »', cible: true,
      opts: ["It's a double-edged sword.", "It's a two-sided knife.", "It's a double-cutting weapon."],
      a: 0, why: 'Expression figée : « a double-edged sword ».', rev: "It's a double-edged sword." },
    { q: '« Je suis d\'accord, jusqu\'à un certain point. »', cible: true,
      opts: ['I agree, up to a point.', 'I agree, until a certain point.', 'I agree, to some point of view.'],
      a: 0, why: 'Expression figée : « up to a point ».', rev: 'up to a point' },
    { q: '« Les loyers ont flambé. »', cible: true,
      opts: ['Rents have gone through the roof.', 'Rents have gone through the ceiling.', 'Rents have burnt up.'],
      a: 0, why: '« to go through the roof ».', rev: 'to go through the roof' },
    { q: '« Jamais je n\'ai vu autant de touristes. » (soutenu)', cible: true,
      opts: ['Never have I seen so many tourists.', 'Never I have seen so many tourists.', 'Never I saw so much tourists.'],
      a: 0, why: '« Never » en tête : inversion ; « many » avec un nom dénombrable.', rev: 'Never have I seen…' },
    { q: '« Plus facile à dire qu\'à faire »', cible: true,
      opts: ['easier said than done', 'easier to say than make', 'more easy said than done'],
      a: 0, why: 'Expression figée.', rev: 'easier said than done' },
    { q: 'Au Royaume-Uni, « it\'s not my cup of tea » veut dire…',
      opts: ['Ce n\'est pas mon truc', 'Je ne bois pas de thé', 'Ce n\'est pas mon tour'],
      a: 0, why: 'Idiome britannique très courant.' }
  ],

  conseil: 'Au niveau C2, ce n\'est plus la grammaire qui fait la différence, c\'est le registre. « <span lang="en">I beg to differ</span> » en réunion, « <span lang="en">No way!</span> » entre amis : savoir passer de l\'un à l\'autre, c\'est ça, la maîtrise. Brilliant!'
};
