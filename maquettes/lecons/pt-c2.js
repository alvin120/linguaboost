// Lição C2 « Débat : le surtourisme » — portugais (variantes Brésil / Portugal).
window.LECONS = window.LECONS || {};
window.LECONS['pt-C2'] = {
  niveau: 'C2', theme: 'Débat : le surtourisme', etape1: 'Camille débat à la radio',
  intro: 'Devenue directrice d\'hôtel, Camille est invitée dans une émission de radio à {ville} pour débattre du surtourisme.',
  indiceOrdre: 'le présentateur présente le sujet, puis Camille répond.',
  badge: { nom: 'Maîtrise', icone: '🏆' },
  lang: 'pt', langue: 'portugais', prof: 'rafael', profNom: 'Rafael', profInitiale: 'R',
  titre: 'Unidade 15 · Um debate aceso',
  variantes: [
    { k: 'br', label: '🇧🇷 Brasil', speech: 'pt-BR', code: 'BR' },
    { k: 'pt', label: '🇵🇹 Portugal', speech: 'pt-PT', code: 'PT' }
  ],
  ville: { br: 'Rio de Janeiro', pt: 'Lisbonne' },
  personnages: { C: { nom: 'Camille', init: 'CM' }, R: { nom: 'Présentateur', init: 'PR' } },
  noteVariantes: '<strong>🇧🇷 / 🇵🇹 Ce qui change selon la variante</strong><p style="margin:6px 0 0;font-size:15px;">« Tourisme de masse » : <i lang="pt-BR">turismo de massa</i> 🇧🇷 / <i lang="pt-PT">turismo de massas</i> 🇵🇹 ; les loyers : <i lang="pt-BR">os aluguéis</i> 🇧🇷 / <i lang="pt-PT">as rendas</i> 🇵🇹 ; <i lang="pt-BR">Amsterdã</i> 🇧🇷 / <i lang="pt-PT">Amesterdão</i> 🇵🇹 ; <i lang="pt-BR">está acontecendo</i> 🇧🇷 / <i lang="pt-PT">está a acontecer</i> 🇵🇹.</p>',

  dialogue: [
    { who: 'R', seg: [{d:{br:'Boa noite e bem-vindos de volta. Hoje vamos falar de turismo de massa. Camille, bênção ou maldição?', pt:'Boa noite e bem-vindos de volta. Hoje vamos falar de turismo de massas. Camille, bênção ou maldição?'}}],
      fr: 'Bonsoir et rebonjour. Aujourd\'hui, nous parlons du tourisme de masse. Camille, bénédiction ou malédiction ?' },
    { who: 'C', seg: ['Olha, é uma ', {w:'faca de dois gumes'}, '. ', {w:'O que me preocupa'}, ' não é o turismo em si, mas a forma como se concentra.'],
      fr: 'Écoutez, c\'est une arme à double tranchant. Ce qui m\'inquiète, ce n\'est pas le tourisme en soi, mais la façon dont il se concentre.' },
    { who: 'R', seg: [{w:'Há quem diga'}, ' que hotéis como o seu fazem parte do problema.'],
      fr: 'Certains disent que des hôtels comme le vôtre font partie du problème.' },
    { who: 'C', seg: [{w:'Não deixa de ter razão'}, ', ', {w:'até certo ponto'}, '. ', {d:{br:'Mas foram as locações de curta duração que fizeram disparar os aluguéis.', pt:'Mas foi o alojamento local que fez disparar as rendas.'}}],
      fr: 'Vous n\'avez pas tort, jusqu\'à un certain point. Mais ce sont les locations de courte durée qui ont fait flamber les loyers.' },
    { who: 'R', seg: [{d:{br:'Então, o que você propõe?', pt:'Então, o que propõe?'}}],
      fr: 'Alors, que proposez-vous ?' },
    { who: 'C', seg: ['Distribuir os visitantes ao longo do ano. ', {w:'Por mais que'}, ' nos custe, ', {d:{br:'temos que', pt:'temos de'}}, ' evitar que os moradores saiam dos bairros.'],
      fr: 'Répartir les visiteurs sur toute l\'année. Aussi difficile que ce soit, nous devons éviter que les habitants quittent les quartiers.' },
    { who: 'R', seg: ['Isso não é ', {w:'mais fácil dizer do que fazer'}, '?'],
      fr: 'N\'est-ce pas plus facile à dire qu\'à faire ?' },
    { who: 'C', seg: ['Claro. ', {w:'Ainda que'}, ' não seja fácil, ', {d:{br:'já está acontecendo em Amsterdã', pt:'já está a acontecer em Amesterdão'}}, ', ', {w:'que eu saiba'}, '.'],
      fr: 'Bien sûr. Même si ce n\'est pas facile, ça se fait déjà à Amsterdam, à ma connaissance.' },
    { who: 'R', seg: [{d:{br:'Vamos ter que parar por aqui. Obrigado, Camille.', pt:'Vamos ter de ficar por aqui. Obrigado, Camille.'}}],
      fr: 'Nous allons devoir nous arrêter là. Merci, Camille.' },
    { who: 'C', seg: ['Obrigada eu pelo convite.'],
      fr: 'C\'est moi qui vous remercie pour l\'invitation.' }
  ],

  glossaire: {
    'faca de dois gumes':           { word: 'faca de dois gumes', tr: 'une arme à double tranchant (litt. « un couteau à deux tranchants »)', v: 0 },
    'O que me preocupa':            { word: 'O que me preocupa', tr: 'Ce qui m\'inquiète… (mise en relief : « O que… é… »)', v: 1 },
    'Há quem diga':                 { word: 'Há quem diga', tr: 'Certains disent… : « há quem » + subjonctif', v: 5 },
    'Não deixa de ter razão':       { word: 'Não deixa de ter razão', tr: 'Vous n\'avez pas tort (litt. « vous ne cessez pas d\'avoir raison »)', v: 2 },
    'até certo ponto':              { word: 'até certo ponto', tr: 'jusqu\'à un certain point', v: 3 },
    'Por mais que':                 { word: 'Por mais que', tr: 'On a beau…, aussi… que (+ subjonctif) : « Por mais que nos custe » = même si ça nous coûte.', v: 6 },
    'mais fácil dizer do que fazer': { word: 'mais fácil dizer do que fazer', tr: 'plus facile à dire qu\'à faire', v: 7 },
    'Ainda que':                    { word: 'Ainda que', tr: 'Même si (+ subjonctif) : « Ainda que não seja fácil… »', v: 9 },
    'que eu saiba':                 { word: 'que eu saiba', tr: 'à ma connaissance (subjonctif figé)', v: 8 }
  },

  vocabulaire: [
    { en: 'É uma faca de dois gumes.', fr: 'C\'est une arme à double tranchant.', ex: 'As redes sociais são uma faca de dois gumes.' },
    { en: 'O que me preocupa é…', fr: 'Ce qui m\'inquiète, c\'est…', ex: 'O que me surpreende é a falta de dados.' },
    { en: 'Não deixa de ter razão.', fr: 'Vous n\'avez pas tort.', ex: 'Não deixa de ter razão, mas há nuances.' },
    { en: 'até certo ponto', fr: 'jusqu\'à un certain point', ex: 'Concordo até certo ponto.' },
    { en: {br:'Os aluguéis dispararam.', pt:'As rendas dispararam.'}, fr: 'Les loyers ont flambé.', ex: 'Os preços dispararam.' },
    { en: 'Há quem diga que…', fr: 'Certains disent que…', ex: 'Há quem diga que é impossível.' },
    { en: 'Por mais que + subjonctif', fr: 'On a beau…, aussi… que', ex: 'Por mais que eu tente, não consigo.' },
    { en: 'É mais fácil dizer do que fazer.', fr: 'C\'est plus facile à dire qu\'à faire.', ex: 'Poupar é mais fácil dizer do que fazer.' },
    { en: 'que eu saiba', fr: 'à ma connaissance', ex: {br:'Que eu saiba, ninguém reclamou.', pt:'Que eu saiba, ninguém se queixou.'} },
    { en: 'ainda que + subjonctif', fr: 'même si', ex: 'Ainda que chova, vamos sair.' }
  ],

  comprehension: [
    { q: 'Pour Camille, le problème principal est…',
      opts: ['La concentration du tourisme', 'Le tourisme en lui-même', 'Le prix des hôtels'],
      a: 0, why: '« O que me preocupa não é o turismo em si, mas a forma como se concentra. »' },
    { q: 'D\'après elle, qu\'est-ce qui a fait flamber les loyers ?',
      opts: ['Les locations de courte durée', 'Les grands hôtels', 'Les compagnies aériennes'],
      a: 0, why: '« as locações de curta duração » 🇧🇷 / « o alojamento local » 🇵🇹.' },
    { q: 'Que propose-t-elle ?',
      opts: ['Répartir les visiteurs sur toute l\'année', 'Interdire les touristes', 'Augmenter les taxes de séjour'],
      a: 0, why: '« Distribuir os visitantes ao longo do ano. »' }
  ],

  grammaireTitre: 'Concéder et nuancer : <span lang="pt">ainda que, por mais que</span> + subjonctif',
  grammaire: '<div class="rule"><strong>La règle</strong><br><span lang="pt"><b>Por mais que / por muito que</b> + subjonctif</span> : « on a beau… » (<span lang="pt">Por mais que nos custe…</span>).<br><span lang="pt"><b>Ainda que / mesmo que / embora</b> + subjonctif</span> : « même si, bien que » (<span lang="pt">Ainda que não seja fácil…</span>).<br><span lang="pt"><b>Há quem</b> + subjonctif</span> : « certains… » (<span lang="pt">Há quem diga…</span>). <span lang="pt"><b>Que eu saiba</b></span> : « à ma connaissance ».<br>Mise en relief : <span lang="pt">O que me preocupa é… / Foram as locações que…</span></div>' +
    '<div class="table-scroll"><table class="g-table"><thead><tr><th>Portugais</th><th>Français</th><th>Nuance</th></tr></thead><tbody>' +
    '<tr><td lang="pt">Ainda que não seja fácil, vamos tentar.</td><td>Même si ce n\'est pas facile, nous allons essayer.</td><td>concession</td></tr>' +
    '<tr><td lang="pt">Por mais que nos custe…</td><td>Aussi difficile que ce soit…</td><td>concession forte</td></tr>' +
    '<tr><td lang="pt">Há quem diga que é impossível.</td><td>Certains disent que c\'est impossible.</td><td>opinion d\'autrui</td></tr>' +
    '<tr><td lang="pt">Que eu saiba, ninguém reclamou.</td><td>À ma connaissance, personne ne s\'est plaint.</td><td>réserve</td></tr></tbody></table></div>' +
    '<h3 class="g-h3">🇫🇷 Comparaison avec le français</h3><p>Le français met l\'<b>indicatif</b> après « même si » ; le portugais met le <b>subjonctif</b> après <span lang="pt">ainda que</span> et <span lang="pt">mesmo que</span> : « même si ce n\'est pas facile » → <span lang="pt">ainda que não seja fácil</span>.</p>' +
    '<h3 class="g-h3">⚠️ Erreurs typiques des francophones</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Erreur</th><th>Correction</th><th>Pourquoi</th></tr></thead><tbody>' +
    '<tr><td lang="pt"><del>Ainda que não é fácil…</del></td><td lang="pt"><ins>Ainda que não seja fácil…</ins></td><td><span lang="pt">ainda que</span> + subjonctif.</td></tr>' +
    '<tr><td lang="pt"><del>Por mais que nos custa…</del></td><td lang="pt"><ins>Por mais que nos custe…</ins></td><td><span lang="pt">por mais que</span> + subjonctif.</td></tr>' +
    '<tr><td lang="pt"><del>Que eu sei…</del></td><td lang="pt"><ins>Que eu saiba…</ins></td><td>Expression figée au subjonctif.</td></tr></tbody></table></div>',
  exGrammaire: {
    phrase: { br: 'Ainda que não ___ fácil, já está funcionando.', pt: 'Ainda que não ___ fácil, já está a funcionar.' },
    options: ['seja', 'é', 'será'], bonne: 'seja',
    retours: {
      seja: '✅ « ainda que » + subjonctif : « seja ».',
      'é': '❌ C\'est l\'indicatif, comme en français. Après « ainda que », le portugais exige le subjonctif : « seja ».',
      'será': '❌ Pas de futur ici : « ainda que » + subjonctif présent.'
    }
  },

  trous: [
    { before: '', opts: ['O que', 'Que', 'O qual'], a: 'O que', after: {br:'me preocupa é a moradia.', pt:'me preocupa é a habitação.'}, why: '« O que… é… » = « Ce qui… c\'est… ».' },
    { before: 'Por mais que nos', opts: ['custe', 'custa', 'custará'], a: 'custe', after: {br:', temos que agir.', pt:', temos de agir.'}, why: '« por mais que » + subjonctif.' },
    { before: 'Que eu', opts: ['saiba', 'sei', 'saberei'], a: 'saiba', after: {br:', ninguém reclamou.', pt:', ninguém se queixou.'}, why: 'Expression figée : « que eu saiba ».' },
    { before: 'É uma faca de dois', opts: ['gumes', 'lados', 'cortes'], a: 'gumes', after: '.', why: 'Expression idiomatique : « faca de dois gumes ».' }
  ],
  paires: { a: 'secretaria', b: 'secretária',
    aide: 'Écoutez le mot, puis choisissez ce que vous avez entendu. <span lang="pt">secretaria</span> (le secrétariat) : accent sur « RI » ; <span lang="pt">secretária</span> (la secrétaire) : accent sur « TÁ ».' },

  jeuDeRole: {
    texte: 'Participez à un débat : défendez une position nuancée sur un sujet de société (surtourisme, télétravail, IA…), concédez des points et contre-argumentez. Rafael anime le débat et vous pousse dans vos retranchements.',
    sujet: 'Débat radio de niveau C2 sur le surtourisme. Tu joues le présentateur : tu contredis mes arguments et tu me pousses à nuancer. Registre soutenu, expressions idiomatiques bienvenues.'
  },
  redaction: {
    consigne: 'Écrivez un paragraphe d\'opinion (4 ou 5 phrases) sur le surtourisme : <b>une concession</b> (<i lang="pt">ainda que / por mais que</i> + subjonctif), <b>une mise en relief</b> (<i lang="pt">O que me preocupa é…</i>) et <b>une nuance</b> (<i lang="pt">até certo ponto</i>).',
    placeholder: { br: 'O turismo de massa …', pt: 'O turismo de massas …' },
    criteres: [
      [/o que (me |nos )?[a-zà-úç]+ [eé] /, 'Une mise en relief (O que me preocupa é…)'],
      [/(por mais que|por muito que|ainda que|mesmo que|embora) [a-zà-úç ]{0,20}(seja|custe|haja|tenha|possa|queira|goste|traga|esteja)([^a-zà-úç]|$)/, 'Une concession + subjonctif (ainda que seja…)'],
      [/(at[eé] certo ponto|n[aã]o deixa de ter raz[aã]o|em certa medida|que eu saiba)/, 'Une nuance (até certo ponto / que eu saiba…)'],
      [/(no entanto|contudo|todavia|ainda assim|dito isto|dito isso)/, 'Un connecteur d\'opposition soutenu (no entanto, contudo…)'],
      [/(ainda que|por mais que|mesmo que) [a-zà-úç ]{0,15}(é|custa|há|tem)([^a-zà-úç]|$)/, 'Indicatif après « ainda que / por mais que » (il faut le subjonctif)', true]
    ],
    modele: {
      br: 'Ainda que o turismo traga emprego, o que me preocupa é a sua concentração em poucos bairros. Foram as locações de curta duração que fizeram disparar os aluguéis e, até certo ponto, todos temos responsabilidade. No entanto, por mais que nos custe, temos que distribuir os visitantes ao longo do ano.',
      pt: 'Ainda que o turismo traga emprego, o que me preocupa é a sua concentração em poucos bairros. Foi o alojamento local que fez disparar as rendas e, até certo ponto, todos temos responsabilidade. No entanto, por mais que nos custe, temos de distribuir os visitantes ao longo do ano.'
    }
  },

  cultureTitre: 'Registres et expressions, au Brésil et au Portugal',
  culture: '<div class="card block"><h3 class="ex-title">🎚️ Changer de registre</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Soutenu</th><th>Courant</th><th>Familier</th></tr></thead><tbody lang="pt">' +
    '<tr><td>A situação deteriorou-se consideravelmente.</td><td>As coisas pioraram muito.</td><td>Foi tudo por água abaixo.</td></tr>' +
    '<tr><td>Discordo da sua posição.</td><td>Não concordo.</td><td>Nem pensar!</td></tr>' +
    '<tr><td>É extremamente dispendioso.</td><td>É muito caro.</td><td>Custa os olhos da cara.</td></tr></tbody></table></div></div>' +
    '<div class="card block"><h3 class="ex-title">🗣️ Expressions : Brésil ou Portugal ?</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Expression</th><th>Où</th><th>Sens</th></tr></thead><tbody>' +
    '<tr><td lang="pt">pagar o pato</td><td>partout</td><td>payer les pots cassés</td></tr>' +
    '<tr><td lang="pt">tirar o cavalinho da chuva</td><td>partout</td><td>se faire une raison, renoncer</td></tr>' +
    '<tr><td lang="pt-BR">chutar o balde</td><td>🇧🇷</td><td>tout envoyer promener</td></tr>' +
    '<tr><td lang="pt-PT">estar com os azeites</td><td>🇵🇹</td><td>être de mauvaise humeur</td></tr>' +
    '<tr><td lang="pt-PT">Fixe!</td><td>🇵🇹</td><td>Génial !</td></tr></tbody></table></div></div>',
  cultureQuiz: [
    { q: 'Au Portugal, « Fixe! » veut dire…',
      opts: ['Génial !', 'Arrête-toi !', 'C\'est réparé'],
      a: 0, why: 'Expression portugaise très courante chez les jeunes (et les moins jeunes).' },
    { q: '« Pagar o pato » signifie…',
      opts: ['Payer les pots cassés', 'Acheter un canard', 'Payer l\'addition'],
      a: 0, why: 'Litt. « payer le canard » : subir les conséquences de la faute des autres.' }
  ],

  bilan: [
    { q: '« Ce qui m\'inquiète, c\'est… »', cible: true,
      opts: ['O que me preocupa é…', 'Que me preocupa é…', 'O qual me preocupa é…'],
      a: 0, why: 'Mise en relief : « O que… é… ».', rev: 'O que me preocupa é…' },
    { q: 'Complétez : « Por mais que nos ___… »', cible: true,
      opts: ['custe', 'custa', 'custará'],
      a: 0, why: '« por mais que » + subjonctif.', rev: 'Por mais que + subjonctif' },
    { q: '« C\'est une arme à double tranchant. »', cible: true,
      opts: ['É uma faca de dois gumes.', 'É uma arma de duplo corte.', 'É uma faca de dois lados.'],
      a: 0, why: 'Expression figée : « faca de dois gumes ».', rev: 'É uma faca de dois gumes.' },
    { q: '« À ma connaissance »', cible: true,
      opts: ['que eu saiba', 'que eu sei', 'ao meu saber'],
      a: 0, why: 'Expression figée au subjonctif.', rev: 'que eu saiba' },
    { q: '« Même si ce n\'est pas facile… »', cible: true,
      opts: ['Ainda que não seja fácil…', 'Ainda que não é fácil…', 'Ainda que não será fácil…'],
      a: 0, why: '« ainda que » + subjonctif.', rev: 'ainda que + subjonctif' },
    { q: '« Certains disent que c\'est impossible. »', cible: true,
      opts: ['Há quem diga que é impossível.', 'Há quem diz que é impossível.', 'Tem quem dizer que é impossível.'],
      a: 0, why: '« há quem » + subjonctif.', rev: 'Há quem diga que…' },
    { q: 'Au Portugal, « Amsterdam » s\'écrit…', cible: true,
      opts: ['Amesterdão', 'Amsterdã', 'Amsterdam'],
      a: 0, why: '« Amsterdã » au Brésil, « Amesterdão » au Portugal.', rev: {br:'Amsterdã', pt:'Amesterdão'} },
    { q: '« Payer les pots cassés »', cible: true,
      opts: ['pagar o pato', 'pagar os vasos', 'pagar o prato'],
      a: 0, why: 'Expression idiomatique : « pagar o pato ».', rev: 'pagar o pato' }
  ],

  conseil: '« <span lang="pt">Há quem diga…</span> », « <span lang="pt">que eu saiba</span> », « <span lang="pt">por mais que</span> »… Ces petites formules au subjonctif sont la signature d\'un portugais C2. Placez-les naturellement et vous sonnerez comme un natif. Mandou muito bem!'
};
