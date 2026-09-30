// Lição C1 « Négociation commerciale » — portugais (variantes Brésil / Portugal).
window.LECONS = window.LECONS || {};
window.LECONS['pt-C1'] = {
  niveau: 'C1', theme: 'Négociation commerciale', etape1: 'Camille négocie avec une cliente',
  intro: 'Camille, devenue responsable des groupes dans un hôtel de {ville}, reçoit une cliente qui veut réserver pour un séminaire.',
  indiceOrdre: 'Camille accueille la cliente, puis celle-ci présente sa demande.',
  badge: { nom: 'Négociatrice', icone: '📈' },
  lang: 'pt', langue: 'portugais', prof: 'rafael', profNom: 'Rafael', profInitiale: 'R',
  titre: 'Unidade 12 · Fechar o negócio',
  variantes: [
    { k: 'br', label: '🇧🇷 Brasil', speech: 'pt-BR', code: 'BR' },
    { k: 'pt', label: '🇵🇹 Portugal', speech: 'pt-PT', code: 'PT' }
  ],
  ville: { br: 'São Paulo', pt: 'Lisbonne' },
  personnages: { C: { nom: 'Camille', init: 'CM' }, R: { nom: 'Cliente', init: 'CL' } },
  noteVariantes: '<strong>🇧🇷 / 🇵🇹 Ce qui change selon la variante</strong><p style="margin:6px 0 0;font-size:15px;">Au Portugal, à l\'oral, l\'imparfait remplace souvent le conditionnel (<i lang="pt-PT">podíamos</i> au lieu de <i lang="pt-PT">poderíamos</i>) ; on dit <i lang="pt-PT">estar a organizar</i>, <i lang="pt-PT">enviar-me</i> et <i lang="pt-PT">ter de</i>. Au Brésil : <i lang="pt-BR">estamos organizando</i>, <i lang="pt-BR">me enviar</i>, <i lang="pt-BR">ter que</i>.</p>',

  dialogue: [
    { who: 'C', seg: [{d:{br:'Obrigada por nos dedicar seu tempo, Sra. Ribeiro.', pt:'Obrigada por nos dedicar o seu tempo, Sra. Ribeiro.'}}],
      fr: 'Merci de nous consacrer votre temps, Madame Ribeiro.' },
    { who: 'R', seg: [{d:{br:'Imagina. Estamos organizando', pt:'Ora essa. Estamos a organizar'}}, ' um seminário de três dias para sessenta pessoas e, para ser sincera, os seus preços estão um pouco acima do nosso orçamento.'],
      fr: 'Je vous en prie. Nous organisons un séminaire de trois jours pour soixante personnes et, pour être franche, vos tarifs dépassent un peu notre budget.' },
    { who: 'C', seg: [{d:{br:'Entendo. Se vocês ', pt:'Compreendo. Se '}}, {w:'reservassem'}, ' os sessenta quartos, ', {d:{br:'poderíamos', pt:'podíamos'}}, ' oferecer quinze por cento de desconto.'],
      fr: 'Je comprends. Si vous réserviez les soixante chambres, nous pourrions vous offrir quinze pour cent de remise.' },
    { who: 'R', seg: ['Isso já muda tudo. ', {w:'Se tivéssemos sabido'}, ' antes, não teríamos procurado outros hotéis.'],
      fr: 'Ça change tout. Si nous l\'avions su plus tôt, nous n\'aurions pas cherché d\'autres hôtels.' },
    { who: 'C', seg: ['Fico contente. Também podemos incluir as salas de reunião, ', {w:'desde que'}, ' confirmem até sexta-feira.'],
      fr: 'J\'en suis ravie. Nous pouvons aussi inclure les salles de réunion, à condition que vous confirmiez d\'ici vendredi.' },
    { who: 'R', seg: ['Sexta-feira é um pouco ', {w:'apertado'}, '. ', {w:'Caso'}, ' confirmássemos na segunda, a oferta ', {w:'continuaria de pé'}, '?'],
      fr: 'Vendredi, c\'est un peu juste. Si jamais nous confirmions lundi, l\'offre tiendrait-elle toujours ?' },
    { who: 'C', seg: [{d:{br:'Teria que confirmar com minha diretora', pt:'Teria de confirmar com a minha diretora'}}, ', mas ', {w:'não creio que haja'}, ' problema.'],
      fr: 'Je devrais vérifier avec ma directrice, mais je ne crois pas qu\'il y ait de problème.' },
    { who: 'R', seg: [{d:{br:'Nesse caso, poderia me enviar uma ', pt:'Nesse caso, poderia enviar-me uma '}}, {w:'proposta por escrito'}, '?'],
      fr: 'Dans ce cas, pourriez-vous m\'envoyer une proposition écrite ?' },
    { who: 'C', seg: ['Com certeza. Ainda hoje estará no seu e-mail.'],
      fr: 'Bien sûr. Vous l\'aurez aujourd\'hui même dans votre boîte mail.' },
    { who: 'R', seg: ['Perfeito. Acho que estamos ', {w:'em sintonia'}, '.'],
      fr: 'Parfait. Je crois que nous sommes sur la même longueur d\'onde.' }
  ],

  glossaire: {
    reservassem:            { word: 'reservassem', tr: '(vous) réserviez : subjonctif imparfait. Hypothèse : « se + subjonctif imparfait + conditionnel ».', v: 1 },
    'Se tivéssemos sabido': { word: 'Se tivéssemos sabido', tr: 'Si nous avions su : plus-que-parfait du subjonctif (irréel du passé), suivi de « teríamos… ».', v: 2 },
    'desde que':            { word: 'desde que', tr: 'à condition que (+ subjonctif). Faux ami : ici, ce n\'est pas « depuis que » !', v: 3 },
    apertado:               { word: 'apertado', tr: 'serré, juste (pour un délai)', v: 4 },
    Caso:                   { word: 'Caso', tr: 'au cas où, si jamais (+ subjonctif)', v: 5 },
    'continuaria de pé':    { word: 'continuaria de pé', tr: 'tiendrait toujours (« continuar de pé » = rester valable)', v: 6 },
    'não creio que haja':   { word: 'não creio que haja', tr: 'je ne crois pas qu\'il y ait : « não creio que » + subjonctif', v: 7 },
    'proposta por escrito': { word: 'proposta por escrito', tr: 'une proposition écrite, un devis', v: 8 },
    'em sintonia':          { word: 'em sintonia', tr: 'sur la même longueur d\'onde', v: 9 }
  },

  vocabulaire: [
    { en: {br:'Obrigada por nos dedicar seu tempo.', pt:'Obrigada por nos dedicar o seu tempo.'}, fr: 'Merci de nous consacrer votre temps.', ex: {br:'Obrigado por me dedicar seu tempo.', pt:'Obrigado por me dedicar o seu tempo.'} },
    { en: {br:'Se vocês reservassem…, poderíamos…', pt:'Se reservassem…, podíamos…'}, fr: 'Si vous réserviez…, nous pourrions…', ex: {br:'Se pudéssemos, faríamos.', pt:'Se pudéssemos, fazíamos.'} },
    { en: 'Se tivéssemos sabido, teríamos…', fr: 'Si nous avions su, nous aurions…', ex: 'Se eu tivesse sabido, teria ligado.' },
    { en: 'desde que + subjonctif', fr: 'à condition que', ex: 'Incluímos as salas, desde que confirmem hoje.' },
    { en: 'É um pouco apertado.', fr: 'C\'est un peu juste.', ex: 'O prazo está apertado.' },
    { en: 'Caso + subjonctif', fr: 'Au cas où…, si jamais…', ex: {br:'Caso precise de algo, me avise.', pt:'Caso precise de algo, avise-me.'} },
    { en: 'A oferta continua de pé.', fr: 'L\'offre tient toujours.', ex: 'A proposta continua de pé?' },
    { en: 'Não creio que haja problema.', fr: 'Je ne crois pas qu\'il y ait de problème.', ex: 'Não creio que seja necessário.' },
    { en: 'uma proposta por escrito', fr: 'une proposition écrite', ex: {br:'Vou te mandar a proposta por escrito.', pt:'Vou enviar-lhe a proposta por escrito.'} },
    { en: 'estar em sintonia', fr: 'être sur la même longueur d\'onde', ex: 'Estamos em sintonia.' }
  ],

  comprehension: [
    { q: 'Que veut la cliente ?',
      opts: ['Organiser un séminaire de 3 jours pour 60 personnes', 'Réserver une chambre pour ses vacances', 'Annuler une réservation'],
      a: 0, why: '« um seminário de três dias para sessenta pessoas ».' },
    { q: 'Que propose Camille ?',
      opts: ['15 % de remise pour les 60 chambres, et les salles de réunion incluses', 'Une nuit gratuite', 'Le petit-déjeuner offert'],
      a: 0, why: '« quinze por cento de desconto… Também podemos incluir as salas de reunião ».' },
    { q: 'Sur quoi porte la fin de la négociation ?',
      opts: ['La date de confirmation : vendredi ou lundi', 'Le prix des repas', 'Le nombre de participants'],
      a: 0, why: '« Caso confirmássemos na segunda… »' }
  ],

  grammaireTitre: 'Hypothèses : <span lang="pt">se + subjonctif imparfait / plus-que-parfait</span>',
  grammaire: '<div class="rule"><strong>La règle</strong><br><b>Hypothèse</b> sur le présent ou le futur : <span lang="pt">se + subjonctif imparfait + conditionnel</span> (<span lang="pt">Se reservassem, poderíamos…</span>). Au Portugal, à l\'oral, l\'imparfait remplace souvent le conditionnel : <span lang="pt-PT">podíamos</span>.<br><b>Irréel du passé</b> : <span lang="pt">se + tivesse + participe, teria + participe</span>.<br><b>Condition</b> : <span lang="pt">desde que</span> + subjonctif (≠ « depuis que » !), <span lang="pt">caso</span> + subjonctif (si jamais). <b>Opinion négative</b> : <span lang="pt">não creio que</span> + subjonctif.</div>' +
    '<div class="table-scroll"><table class="g-table"><thead><tr><th>Portugais</th><th>Français</th><th>Structure</th></tr></thead><tbody>' +
    '<tr><td lang="pt">Se reservassem, poderíamos…</td><td>Si vous réserviez, nous pourrions…</td><td>se + subj. imparfait</td></tr>' +
    '<tr><td lang="pt">Se tivéssemos sabido, teríamos…</td><td>Si nous avions su, nous aurions…</td><td>se + subj. plus-que-parfait</td></tr>' +
    '<tr><td lang="pt">desde que confirmem</td><td>à condition que vous confirmiez</td><td>condition + subjonctif</td></tr>' +
    '<tr><td lang="pt">Caso confirmássemos…</td><td>Si jamais nous confirmions…</td><td>éventualité + subjonctif</td></tr></tbody></table></div>' +
    '<h3 class="g-h3">🇫🇷 Comparaison avec le français</h3><p>« Si » + <b>imparfait de l\'indicatif</b> en français devient <span lang="pt">se</span> + <b>imparfait du subjonctif</b> : « si nous réservions » → <span lang="pt">se reservássemos</span>. Le grand piège : <span lang="pt">desde que</span> + subjonctif veut dire « <b>à condition que</b> ».</p>' +
    '<h3 class="g-h3">⚠️ Erreurs typiques des francophones</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Erreur</th><th>Correction</th><th>Pourquoi</th></tr></thead><tbody>' +
    '<tr><td lang="pt"><del>Se reservaríamos…</del></td><td lang="pt"><ins>Se reservássemos…</ins></td><td>Jamais de conditionnel après <span lang="pt">se</span>.</td></tr>' +
    '<tr><td lang="pt"><del>Se teríamos sabido…</del></td><td lang="pt"><ins>Se tivéssemos sabido…</ins></td><td>Irréel du passé : subjonctif.</td></tr>' +
    '<tr><td lang="pt"><del>desde que vocês confirmam</del></td><td lang="pt"><ins>desde que vocês confirmem</ins></td><td><span lang="pt">desde que</span> (condition) + subjonctif.</td></tr></tbody></table></div>',
  exGrammaire: {
    phrase: 'Se ___ sabido antes, não teríamos procurado outros hotéis.',
    options: ['tivéssemos', 'teríamos', 'tínhamos'], bonne: 'tivéssemos',
    retours: {
      'tivéssemos': '✅ Irréel du passé : « se + tivéssemos + participe », puis « teríamos… ».',
      'teríamos': '❌ Jamais de conditionnel après « se » : il faut « tivéssemos ».',
      'tínhamos': '❌ « tínhamos sabido » est l\'indicatif (« nous avions su »). Après « se », pour l\'irréel : « tivéssemos ».'
    }
  },

  trous: [
    { before: {br:'Se vocês', pt:'Se'}, opts: ['reservassem', 'reservariam', 'reservam'], a: 'reservassem', after: 'sessenta quartos, faríamos um desconto.', why: 'se + subjonctif imparfait.' },
    { before: 'Incluímos as salas,', opts: ['desde que', 'desde quando', 'porque'], a: 'desde que', after: 'confirmem hoje.', why: '« desde que » + subjonctif = à condition que.' },
    { before: 'Não creio que', opts: ['haja', 'há', 'haverá'], a: 'haja', after: 'problema.', why: '« não creio que » + subjonctif.' },
    { before: 'A oferta continua de', opts: ['pé', 'mão', 'perna'], a: 'pé', after: '?', why: '« continuar de pé » = rester valable.' }
  ],
  paires: { a: 'sabia', b: 'sábia',
    aide: 'Écoutez le mot, puis choisissez ce que vous avez entendu. <span lang="pt">sabia</span> (il savait) : accent sur « BI » ; <span lang="pt">sábia</span> (sage, au féminin) : accent sur « SÁ ».' },

  jeuDeRole: {
    texte: 'Négociez un contrat : vous représentez un hôtel, et un client veut une remise pour un séminaire. Utilisez les hypothèses (se + subjonctif) et les conditions (desde que, caso). Rafael joue le client exigeant.',
    sujet: 'Négociation commerciale : je représente un hôtel, tu joues un client exigeant qui veut une remise pour un séminaire de 60 personnes. Registre professionnel soutenu.'
  },
  redaction: {
    consigne: 'Écrivez un e-mail professionnel au client pour confirmer l\'offre : <b>une remise sous condition</b> (<i lang="pt">desde que…</i>), <b>une hypothèse</b> (se + subjonctif imparfait) et <b>une formule de fin</b>.',
    placeholder: { br: 'Prezada Sra. Ribeiro, …', pt: 'Exma. Sra. Ribeiro, …' },
    criteres: [
      [/(desde que|contanto que|caso)/, 'Une condition + subjonctif (desde que… / caso…)'],
      [/se (voc[eê]s? )?[a-zà-úç]+(sse|ssem|ssemos)([^a-zà-úç]|$)/, 'Une hypothèse au subjonctif imparfait (se reservassem…)'],
      [/(desconto|\d+ ?%)/, 'La remise (desconto)'],
      [/(atenciosamente|cumprimentos|cordialmente)/, 'Une formule de fin'],
      [/se (voc[eê]s? )?[a-zà-úç]+(riam|ríamos|ria)([^a-zà-úç]|$)/, '« se » + conditionnel (il faut le subjonctif imparfait)', true]
    ],
    modele: {
      br: 'Prezada Sra. Ribeiro, obrigada por nos dedicar seu tempo. Se vocês reservassem os sessenta quartos, poderíamos oferecer quinze por cento de desconto, desde que confirmem até segunda-feira. As salas de reunião estariam incluídas. Atenciosamente, Camille Martin',
      pt: 'Exma. Sra. Ribeiro, obrigada por nos dedicar o seu tempo. Se reservassem os sessenta quartos, podíamos oferecer quinze por cento de desconto, desde que confirmem até segunda-feira. As salas de reunião estariam incluídas. Com os melhores cumprimentos, Camille Martin'
    }
  },

  cultureTitre: 'Négocier au Brésil et au Portugal',
  culture: '<div class="card block"><h3 class="ex-title">🤝 Deux styles</h3>' +
    '<p><b>🇧🇷 Brésil :</b> la relation d\'abord. On commence par parler de tout et de rien, et on évite le « <i lang="pt-BR">não</i> » direct. Les décisions peuvent être lentes, mais on trouve souvent une solution créative.</p>' +
    '<p style="margin:0;"><b>🇵🇹 Portugal :</b> plus formel et prudent. La hiérarchie compte (<i lang="pt-PT">Senhor Doutor, Senhora Engenheira</i>), les réunions commencent à l\'heure, mais les décisions prennent du temps.</p></div>' +
    '<div class="card block"><h3 class="ex-title">🔍 Ce qu\'on dit, ce qu\'on veut dire</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Ce qu\'on entend</th><th>Ce que ça veut souvent dire</th></tr></thead><tbody>' +
    '<tr><td lang="pt">Vamos ver.</td><td>Probablement non.</td></tr>' +
    '<tr><td lang="pt-BR">Vou pensar com carinho. (Brésil)</td><td>Pas convaincu.</td></tr>' +
    '<tr><td lang="pt-BR">Depois a gente vê isso. (Brésil)</td><td>On n\'en reparlera pas.</td></tr>' +
    '<tr><td lang="pt-PT">Temos de analisar. (Portugal)</td><td>Pas maintenant.</td></tr></tbody></table></div></div>',
  cultureQuiz: [
    { q: 'Au Brésil, « Vou pensar com carinho » signifie souvent…',
      opts: ['Probablement non', 'Oui, avec enthousiasme', 'Je vous aime bien'],
      a: 0, why: 'Une façon très douce d\'écarter une proposition.' },
    { q: 'Au Portugal, on s\'adresse à une ingénieure en disant…',
      opts: ['Senhora Engenheira', 'Senhora Chefe', 'Cara ingénieure'],
      a: 0, why: 'Les titres universitaires s\'emploient beaucoup au Portugal.' }
  ],

  bilan: [
    { q: '« Si nous avions su, nous n\'aurions pas cherché d\'autres hôtels. »', cible: true,
      opts: ['Se tivéssemos sabido, não teríamos procurado outros hotéis.', 'Se teríamos sabido, não tivéssemos procurado outros hotéis.', 'Se sabemos, não procuramos outros hotéis.'],
      a: 0, why: 'se + subjonctif plus-que-parfait, puis conditionnel.', rev: 'Se tivéssemos sabido, teríamos…' },
    { q: 'Complétez : « Se vocês ___ os sessenta quartos… »', cible: true,
      opts: ['reservassem', 'reservariam', 'reservaram'],
      a: 0, why: 'se + subjonctif imparfait.', rev: {br:'Se vocês reservassem…, poderíamos…', pt:'Se reservassem…, podíamos…'} },
    { q: '« à condition que vous confirmiez »', cible: true,
      opts: ['desde que confirmem', 'desde que confirmam', 'desde quando confirmem'],
      a: 0, why: '« desde que » (condition) + subjonctif.', rev: 'desde que + subjonctif' },
    { q: 'Que signifie « desde que » + subjonctif ?',
      opts: ['À condition que', 'Depuis que', 'Parce que'],
      a: 0, why: 'Faux ami : avec le subjonctif, c\'est une condition.', rev: 'desde que + subjonctif' },
    { q: '« Je ne crois pas qu\'il y ait de problème. »', cible: true,
      opts: ['Não creio que haja problema.', 'Não creio que há problema.', 'Não creio que haverá problema nenhum.'],
      a: 0, why: '« não creio que » + subjonctif.', rev: 'Não creio que haja problema.' },
    { q: '« L\'offre tient toujours ? »', cible: true,
      opts: ['A oferta continua de pé?', 'A oferta continua em pé de?', 'A oferta ainda aguenta?'],
      a: 0, why: 'Expression figée : « continuar de pé ».', rev: 'A oferta continua de pé.' },
    { q: 'Au Portugal, à l\'oral, « nous pourrions » se dit souvent…', cible: true,
      opts: ['podíamos', 'poderemos', 'pudemos'],
      a: 0, why: 'L\'imparfait remplace souvent le conditionnel au Portugal.', rev: {br:'poderíamos', pt:'podíamos'} },
    { q: '« Sur la même longueur d\'onde »', cible: true,
      opts: ['em sintonia', 'no mesmo comprimento', 'na mesma onda de'],
      a: 0, why: 'Expression courante : « estar em sintonia ».', rev: 'estar em sintonia' }
  ],

  conseil: 'Attention au faux ami « <span lang="pt">desde que</span> » : suivi du subjonctif, il veut dire « à condition que ». « <span lang="pt">Incluímos as salas, desde que confirmem hoje.</span> » Isso aí!'
};
