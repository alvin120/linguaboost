// Lição B1 « Un problème à l'hôtel » — portugais (variantes Brésil / Portugal).
window.LECONS = window.LECONS || {};
window.LECONS['pt-B1'] = {
  niveau: 'B1', theme: 'Réclamation à l\'hôtel', etape1: 'Camille signale un problème',
  intro: 'Le lendemain matin, à {ville}, Camille appelle la réception : quelque chose ne va pas dans sa chambre.',
  indiceOrdre: 'la réception décroche, puis Camille explique le problème.',
  badge: { nom: 'Diplomate', icone: '🤝' },
  lang: 'pt', langue: 'portugais', prof: 'rafael', profNom: 'Rafael', profInitiale: 'R',
  titre: 'Unidade 7 · Um problema no quarto',
  variantes: [
    { k: 'br', label: '🇧🇷 Brasil', speech: 'pt-BR', code: 'BR' },
    { k: 'pt', label: '🇵🇹 Portugal', speech: 'pt-PT', code: 'PT' }
  ],
  ville: { br: 'Rio de Janeiro', pt: 'Lisbonne' },
  personnages: { C: { nom: 'Camille', init: 'CM' }, R: { nom: 'Recepcionista', init: 'R' } },
  noteVariantes: '<strong>🇧🇷 / 🇵🇹 Ce qui change selon la variante</strong><p style="margin:6px 0 0;font-size:15px;">Pour une action en cours, le Brésil dit « <i lang="pt-BR">não está funcionando</i> » (gérondif) et le Portugal « <i lang="pt-PT">não está a funcionar</i> » (<i>a</i> + infinitif). « Réparer » se dit <i lang="pt-BR">consertar</i> 🇧🇷 et plutôt <i lang="pt-PT">reparar</i> 🇵🇹.</p>',

  dialogue: [
    { who: 'R', seg: [{d:{br:'Recepção, bom dia. Em que posso ajudar?', pt:'Receção, bom dia. Em que posso ajudar?'}}],
      fr: 'Réception, bonjour. Que puis-je faire pour vous ?' },
    { who: 'C', seg: ['Bom dia, falo do quarto 305. O ', {w:'ar-condicionado'}, {d:{br:' não está funcionando.', pt:' não está a funcionar.'}}],
      fr: 'Bonjour, j\'appelle de la chambre 305. La climatisation ne marche pas.' },
    { who: 'R', seg: ['Sinto muito. ', {w:'Desde quando'}, '?'],
      fr: 'Je suis désolé. Depuis quand ?' },
    { who: 'C', seg: ['Desde ontem à noite. ', {w:'Liguei'}, ' duas vezes hoje de manhã, mas ninguém ', {w:'veio'}, '.'],
      fr: 'Depuis hier soir. J\'ai appelé deux fois ce matin, mais personne n\'est venu.' },
    { who: 'R', seg: [{d:{br:'Peço desculpas', pt:'Peço desculpa'}}, '. Vou mandar um técnico ', {w:'agora mesmo'}, '.'],
      fr: 'Je vous présente mes excuses. J\'envoie un technicien tout de suite.' },
    { who: 'C', seg: ['Obrigada. ', {w:'Fazia'}, ' muito calor e eu não dormi nada.'],
      fr: 'Merci. Il faisait très chaud et je n\'ai pas dormi du tout.' },
    { who: 'R', seg: ['Compreendo. Se não for possível ', {w:'consertar'}, ', mudamos a senhora de quarto.'],
      fr: 'Je comprends. Si on ne peut pas réparer, nous vous changeons de chambre.' },
    { who: 'C', seg: [{w:'Seria possível'}, ' um quarto mais tranquilo?'],
      fr: 'Serait-il possible d\'avoir une chambre plus calme ?' },
    { who: 'R', seg: ['Claro. E para compensar, o ', {d:{br:'café da manhã', pt:'pequeno-almoço'}}, ' de hoje é ', {w:'por conta da casa'}, '.'],
      fr: 'Bien sûr. Et pour compenser, le petit-déjeuner d\'aujourd\'hui est offert par la maison.' },
    { who: 'C', seg: ['Muito gentil, obrigada.'],
      fr: 'Très gentil, merci.' },
    { who: 'R', seg: ['Nós é que agradecemos. E ', {w:'desculpe'}, '.'],
      fr: 'C\'est nous qui vous remercions. Et excusez-nous pour le désagrément.' }
  ],

  glossaire: {
    'ar-condicionado': { word: 'ar-condicionado', tr: 'la climatisation', v: 0 },
    'Desde quando':    { word: 'Desde quando', tr: 'Depuis quand', v: 1 },
    Liguei:            { word: 'Liguei', tr: 'j\'ai appelé (pretérito perfeito de « ligar » : action terminée)', v: 2 },
    veio:              { word: 'veio', tr: 'est venu (pretérito perfeito de « vir », irrégulier)', v: 3 },
    'agora mesmo':     { word: 'agora mesmo', tr: 'tout de suite', v: 4 },
    Fazia:             { word: 'Fazia', tr: 'il faisait (imperfeito : on décrit la situation)', v: 5 },
    consertar:         { word: {br:'consertar', pt:'reparar'}, tr: {br:'réparer (au Portugal : « reparar » ou « arranjar »)', pt:'réparer (au Brésil : « consertar »)'}, v: 6 },
    'Seria possível':  { word: 'Seria possível', tr: 'Serait-il possible (conditionnel, très poli)', v: 7 },
    'por conta da casa': { word: 'por conta da casa', tr: 'offert par la maison', v: 8 },
    desculpe:          { word: {br:'desculpe o incômodo', pt:'desculpe o incómodo'}, tr: 'excusez le dérangement, désolé pour le désagrément', v: 9 }
  },

  vocabulaire: [
    { en: {br:'O ar-condicionado não está funcionando.', pt:'O ar-condicionado não está a funcionar.'}, fr: 'La climatisation ne marche pas.', ex: {br:'O chuveiro não está funcionando.', pt:'O chuveiro não está a funcionar.'} },
    { en: 'Desde quando?', fr: 'Depuis quand ?', ex: 'Desde quando está assim?' },
    { en: 'Liguei duas vezes.', fr: 'J\'ai appelé deux fois.', ex: {br:'Liguei para a recepção hoje.', pt:'Liguei para a receção hoje.'} },
    { en: 'Ninguém veio.', fr: 'Personne n\'est venu.', ex: 'Ninguém veio ajudar.' },
    { en: 'agora mesmo', fr: 'tout de suite', ex: 'Vou agora mesmo.' },
    { en: 'Fazia muito calor.', fr: 'Il faisait très chaud.', ex: 'Fazia frio no quarto.' },
    { en: {br:'consertar', pt:'reparar'}, fr: 'réparer', ex: {br:'Vocês podem consertar o chuveiro?', pt:'Podem reparar o chuveiro?'} },
    { en: 'Seria possível…?', fr: 'Serait-il possible… ?', ex: 'Seria possível mudar de quarto?' },
    { en: 'por conta da casa', fr: 'offert par la maison', ex: 'A sobremesa é por conta da casa.' },
    { en: {br:'Desculpe o incômodo.', pt:'Desculpe o incómodo.'}, fr: 'Désolé pour le désagrément.', ex: {br:'Desculpe o incômodo, senhora.', pt:'Desculpe o incómodo, minha senhora.'} }
  ],

  comprehension: [
    { q: 'Quel est le problème ?',
      opts: ['La climatisation ne marche pas', 'Il n\'y a pas d\'eau chaude', 'La chambre est sale'],
      a: 0, why: '« O ar-condicionado não está funcionando / a funcionar. »' },
    { q: 'Qu\'a déjà fait Camille ?',
      opts: ['Elle a appelé deux fois', 'Elle est descendue à la réception', 'Elle a envoyé un e-mail'],
      a: 0, why: '« Liguei duas vezes hoje de manhã. »' },
    { q: 'Que propose l\'hôtel ?',
      opts: ['Un technicien, une autre chambre si besoin et le petit-déjeuner offert', 'Un remboursement complet', 'Une nuit gratuite'],
      a: 0, why: 'Un technicien « agora mesmo », une autre chambre si besoin, et le petit-déjeuner « por conta da casa ».' }
  ],

  grammaireTitre: 'Raconter un problème : <span lang="pt">pretérito perfeito</span> ou <span lang="pt">imperfeito</span> ?',
  grammaire: '<div class="rule"><strong>La règle</strong><br><b>Perfeito</b> (<span lang="pt">liguei, veio, dormi</span>) : action ponctuelle, terminée.<br><b>Imperfeito</b> (<span lang="pt">fazia, estava, era</span>) : le décor, la description, l\'habitude.<br>Action en cours dans le passé : <span lang="pt-BR">estava dormindo</span> 🇧🇷 / <span lang="pt-PT">estava a dormir</span> 🇵🇹.</div>' +
    '<div class="table-scroll"><table class="g-table"><thead><tr><th>Portugais</th><th>Français</th><th>Temps</th></tr></thead><tbody>' +
    '<tr><td lang="pt">Liguei duas vezes.</td><td>J\'ai appelé deux fois.</td><td>perfeito</td></tr>' +
    '<tr><td lang="pt">Ninguém veio.</td><td>Personne n\'est venu.</td><td>perfeito</td></tr>' +
    '<tr><td lang="pt">Fazia muito calor.</td><td>Il faisait très chaud.</td><td>imperfeito</td></tr>' +
    '<tr><td lang="pt">Quando cheguei, o quarto estava sujo.</td><td>Quand je suis arrivée, la chambre était sale.</td><td>les deux</td></tr></tbody></table></div>' +
    '<h3 class="g-h3">🇫🇷 Comparaison avec le français</h3><p>Le passé composé français se traduit presque toujours par le <b>perfeito</b> : « J\'ai appelé ce matin » → <span lang="pt">Liguei hoje de manhã</span>. Piège : <span lang="pt">tenho ligado</span> ne veut pas dire « j\'ai appelé », mais « j\'appelle régulièrement ces temps-ci ».</p>' +
    '<h3 class="g-h3">⚠️ Erreurs typiques des francophones</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Erreur</th><th>Correction</th><th>Pourquoi</th></tr></thead><tbody>' +
    '<tr><td lang="pt"><del>Tenho ligado ontem.</del></td><td lang="pt"><ins>Liguei ontem.</ins></td><td><span lang="pt">tenho + particípio</span> = répétition jusqu\'à maintenant.</td></tr>' +
    '<tr><td lang="pt"><del>Estava muito calor.</del></td><td lang="pt"><ins>Fazia muito calor.</ins></td><td>Pour la météo, on emploie <span lang="pt">fazer</span>.</td></tr>' +
    '<tr><td lang="pt"><del>Ninguém não veio.</del></td><td lang="pt"><ins>Ninguém veio.</ins></td><td>Pas de « não » quand <span lang="pt">ninguém</span> est avant le verbe.</td></tr></tbody></table></div>',
  exGrammaire: {
    phrase: { br: 'Ontem eu ___ para a recepção três vezes.', pt: 'Ontem ___ para a receção três vezes.' },
    options: ['liguei', 'tenho ligado', 'ligava'], bonne: 'liguei',
    retours: {
      liguei: '✅ Action terminée, à un moment précis (ontem) → perfeito.',
      'tenho ligado': '❌ « tenho ligado » = « j\'appelle régulièrement ces derniers temps » : impossible avec « ontem ».',
      ligava: '❌ L\'imperfeito sert au décor ou à l\'habitude ; ici, ce sont trois appels précis → perfeito.'
    }
  },

  trous: [
    { before: 'Quando cheguei, o quarto', opts: ['estava', 'esteve', 'está'], a: 'estava', after: 'sujo.', why: 'On décrit l\'état de la chambre à l\'arrivée : imperfeito « estava ».' },
    { before: 'O ar-condicionado não funciona', opts: ['desde', 'há', 'durante'], a: 'desde', after: 'ontem.', why: '« desde » + point de départ (ontem) ; « há » + durée (há dois dias).' },
    { before: '', opts: ['Ninguém', 'Nenhum', 'Nada'], a: 'Ninguém', after: 'veio ajudar.', why: '« ninguém » = personne ; « nada » = rien.' },
    { before: 'Seria', opts: ['possível', 'possivelmente', 'possibilidade'], a: 'possível', after: 'mudar de quarto?', why: '« Seria possível + infinitif? » = « Serait-il possible de… ? ».' }
  ],
  paires: { a: 'pais', b: 'país',
    aide: 'Écoutez le mot, puis choisissez ce que vous avez entendu. <span lang="pt">pais</span> (parents) : une seule syllabe, « païs » ; <span lang="pt">país</span> (pays) : deux syllabes, « pa-IS », accent sur le i.' },

  jeuDeRole: {
    texte: 'Appelez la réception : votre chambre a un problème (bruit, douche, climatisation…). Expliquez depuis quand, ce que vous avez déjà fait, et demandez une solution. Rafael joue le réceptionniste.',
    sujet: 'À l\'hôtel : j\'appelle la réception pour me plaindre d\'un problème dans ma chambre. Tu joues le réceptionniste, poli mais qui ne cède pas tout de suite.'
  },
  redaction: {
    consigne: 'Écrivez un court e-mail à l\'hôtel : la douche (<i lang="pt">o chuveiro</i>) <b>ne marche plus depuis hier</b>, vous <b>avez déjà appelé</b> la réception, et vous demandez <b>une solution</b>.',
    placeholder: { br: 'Prezados, …', pt: 'Exmos. Senhores, …' },
    criteres: [
      [/chuveiro/, 'Le mot « chuveiro »'],
      [/(n[aã]o (est[aá]|funciona)|avariad|quebrad|estragad)/, 'La description du problème (não funciona…)'],
      [/desde ontem/, '« desde ontem » pour dire depuis quand'],
      [/(liguei|telefonei|falei|avisei|pedi)/, 'Ce que vous avez déjà fait, au perfeito (liguei…)'],
      [/(poderiam|poderia|seria poss[ií]vel|agradeceria)/, 'Une demande polie (Poderiam…? / Seria possível…?)'],
      [/tenho ligado ontem/, '« tenho ligado ontem » (avec « ontem » : liguei)', true]
    ],
    modele: {
      br: 'Prezados, o chuveiro do quarto 305 não funciona desde ontem. Liguei duas vezes para a recepção hoje de manhã, mas ninguém veio. Poderiam mandar um técnico hoje? Se não for possível, seria possível mudar de quarto? Atenciosamente, Camille Martin',
      pt: 'Exmos. Senhores, o chuveiro do quarto 305 não funciona desde ontem. Liguei duas vezes para a receção hoje de manhã, mas ninguém veio. Poderiam mandar um técnico hoje? Se não for possível, seria possível mudar de quarto? Com os melhores cumprimentos, Camille Martin'
    }
  },

  cultureTitre: 'Se plaindre poliment, au Brésil et au Portugal',
  culture: '<div class="card block"><h3 class="ex-title">🗣️ Le ton</h3>' +
    '<p><b>🇧🇷 Brésil :</b> on évite le conflit direct. Le ton reste chaleureux, avec « <i lang="pt-BR">por gentileza</i> » et des diminutifs (« <i lang="pt-BR">um probleminha</i> »). On cherche une solution arrangeante : c\'est le fameux <i lang="pt-BR">jeitinho</i>.</p>' +
    '<p style="margin:0;"><b>🇵🇹 Portugal :</b> plus formel. On dit « <i lang="pt-PT">o senhor / a senhora</i> », et à l\'écrit « <i lang="pt-PT">Exmos. Senhores</i> ». Bon à savoir : tout commerce doit tenir un <i lang="pt-PT">Livro de Reclamações</i>, le registre officiel des réclamations.</p></div>' +
    '<div class="card block"><h3 class="ex-title">🗣️ Adoucir une plainte</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Trop direct</th><th>Poli</th></tr></thead><tbody lang="pt">' +
    '<tr><td>Quero outro quarto.</td><td>Seria possível mudar de quarto?</td></tr>' +
    '<tr><td>Conserte isso já.</td><td>O senhor poderia mandar alguém, por gentileza?</td></tr>' +
    '<tr><td>É inaceitável.</td><td>Não estou muito satisfeita com…</td></tr>' +
    '<tr><td>Vocês erraram.</td><td>Acho que houve um engano.</td></tr></tbody></table></div></div>',
  cultureQuiz: [
    { q: 'Au Portugal, le « Livro de Reclamações » est…',
      opts: ['Un registre officiel de réclamations, obligatoire dans les commerces', 'Un livre d\'or pour les compliments', 'Un guide touristique'],
      a: 0, why: 'Tout commerce doit le proposer ; les réclamations sont transmises aux autorités.' },
    { q: 'La formule la plus polie :',
      opts: ['O senhor poderia mandar alguém, por gentileza?', 'Mande alguém já.', 'Vocês têm que mandar alguém.'],
      a: 0, why: '« Poderia » (conditionnel) + « por gentileza » : très poli.' }
  ],

  bilan: [
    { q: 'Complétez : « Ontem ___ duas vezes. »', cible: true,
      opts: ['liguei', 'tenho ligado', 'ligava'],
      a: 0, why: '« ontem » + action terminée → perfeito.', rev: 'Liguei duas vezes.' },
    { q: '« Il faisait très chaud. »', cible: true,
      opts: ['Fazia muito calor.', 'Era muito calor.', 'Tinha muito calor.'],
      a: 0, why: 'La météo avec « fazer », à l\'imperfeito pour décrire.', rev: 'Fazia muito calor.' },
    { q: '« Personne n\'est venu. »', cible: true,
      opts: ['Ninguém veio.', 'Ninguém não veio.', 'Nenhum veio.'],
      a: 0, why: 'Pas de double négation quand « ninguém » est avant le verbe.', rev: 'Ninguém veio.' },
    { q: '« Depuis quand ? »', cible: true,
      opts: ['Desde quando?', 'Há quando?', 'Desde quanto?'],
      a: 0, why: '« desde quando » = depuis quand.', rev: 'Desde quando?' },
    { q: '« Serait-il possible de changer de chambre ? »', cible: true,
      opts: ['Seria possível mudar de quarto?', 'Seria possível de mudar de quarto?', 'Será possivelmente mudar de quarto?'],
      a: 0, why: 'Pas de « de » après « seria possível ».', rev: 'Seria possível…?' },
    { q: '« Offert par la maison »', cible: true,
      opts: ['por conta da casa', 'de graça da casa', 'pela casa'],
      a: 0, why: 'Expression figée : « por conta da casa ».', rev: 'por conta da casa' },
    { q: 'Au Portugal, « la climatisation ne marche pas » :', cible: true,
      opts: ['O ar-condicionado não está a funcionar.', 'O ar-condicionado não está funcionando.', 'O ar-condicionado não funcionando.'],
      a: 0, why: '« estar a + infinitif » au Portugal ; « estar + gérondif » au Brésil.', rev: {br:'O ar-condicionado não está funcionando.', pt:'O ar-condicionado não está a funcionar.'} },
    { q: '« Désolé pour le désagrément. »', cible: true,
      opts: [{br:'Desculpe o incômodo.', pt:'Desculpe o incómodo.'}, 'Desculpe a incomodidade.', 'Perdão pelo desagrado.'],
      a: 0, why: 'Formule figée : « desculpe o incômodo » 🇧🇷 / « incómodo » 🇵🇹.', rev: {br:'Desculpe o incômodo.', pt:'Desculpe o incómodo.'} }
  ],

  conseil: '« <span lang="pt-BR">Estar fazendo</span> » 🇧🇷 ou « <span lang="pt-PT">estar a fazer</span> » 🇵🇹 ? Les deux veulent dire « être en train de faire ». Choisissez votre variante et restez-y. Mandou bem!'
};
