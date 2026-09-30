// Lição A2 « À l'hôtel » — portugais (variantes Brésil / Portugal).
window.LECONS = window.LECONS || {};
window.LECONS['pt-A2'] = {
  niveau: 'A2', theme: "À l'hôtel", etape1: "Camille arrive à son hôtel",
  intro: "Camille arrive le soir à son hôtel, à {ville}.",
  indiceOrdre: "le réceptionniste accueille Camille, puis Camille donne son nom.",
  badge: { nom: 'Check-in', icone: '🛎️' },
  lang: 'pt', langue: 'portugais', prof: 'rafael', profNom: 'Rafael', profInitiale: 'R',
  titre: 'Unidade 3 · No hotel',
  variantes: [
    { k: 'br', label: '🇧🇷 Brasil', speech: 'pt-BR', code: 'BR' },
    { k: 'pt', label: '🇵🇹 Portugal', speech: 'pt-PT', code: 'PT' }
  ],
  ville: { br: 'São Paulo', pt: 'Lisbonne' },
  chambre: '305',
  personnages: { C: { nom: 'Camille', init: 'CM' }, R: { nom: 'Recepcionista', init: 'R' } },
  noteVariantes: '<strong>🇧🇷 / 🇵🇹 Ce qui change selon la variante</strong><p style="margin:6px 0 0;font-size:15px;">Les passages <span class="diff">surlignés</span> changent entre le portugais du Brésil et celui du Portugal. Basculez en haut de l\'écran pour comparer. Le petit-déjeuner se dit <i lang="pt-BR">café da manhã</i> 🇧🇷 mais <i lang="pt-PT">pequeno-almoço</i> 🇵🇹, et le mot de passe <i lang="pt-BR">senha</i> 🇧🇷 mais <i lang="pt-PT">palavra-passe</i> 🇵🇹. Au Portugal, on met aussi l\'article devant le possessif : <i lang="pt-PT">o seu quarto</i>.</p>',

  dialogue: [
    { who: 'R', seg: [{d:{br:'Boa noite, seja bem-vinda ao Hotel Mirante. Em que posso ajudar?', pt:'Boa noite, bem-vinda ao Hotel Mirante. Em que posso ajudar?'}}],
      fr: 'Bonsoir, bienvenue à l\'hôtel Mirante. Que puis-je faire pour vous ?' },
    { who: 'C', seg: ['Boa noite. Tenho uma ', {w:'reserva'}, ' ', {w:'em nome de'}, ' Martin.'],
      fr: "Bonsoir. J'ai une réservation au nom de Martin." },
    { who: 'R', seg: ['Um momento… Sim, Camille Martin, duas noites, um ', {w:'quarto de casal'}, '. ', {d:{br:'Posso ver seu passaporte', pt:'Posso ver o seu passaporte'}}, ', por favor?'],
      fr: 'Un instant… Oui, Camille Martin, deux nuits, une chambre double. Puis-je voir votre passeport, s\'il vous plaît ?' },
    { who: 'C', seg: ['Claro, aqui está.'],
      fr: 'Bien sûr, le voici.' },
    { who: 'R', seg: ['Obrigado. ', {d:{br:'Seu quarto', pt:'O seu quarto'}}, ' é o 305, no terceiro andar. O ', {w:'cafe'}, ' é servido das 7h às 10h.'],
      fr: 'Merci. Votre chambre est la 305, au 3ᵉ étage. Le petit-déjeuner est servi de 7 h à 10 h.' },
    { who: 'C', seg: [{d:{br:'Ótimo. Tem wi-fi no quarto?', pt:'Ótimo. Há wi-fi no quarto?'}}],
      fr: 'Super. Il y a le wifi dans la chambre ?' },
    { who: 'R', seg: [{d:{br:'Tem, sim, e é grátis.', pt:'Há, sim, e é gratuito.'}}, ' A ', {w:'senha'}, ' está no ', {w:'cartao'}, '.'],
      fr: 'Oui, et il est gratuit. Le mot de passe est sur la carte de la chambre.' },
    { who: 'C', seg: ['Perfeito. E a que horas é o ', {w:'check-out'}, '?'],
      fr: 'Parfait. Et à quelle heure faut-il libérer la chambre ?' },
    { who: 'R', seg: [{d:{br:'O check-out é ao meio-dia. Se precisar sair mais tarde, é só ligar para a recepção.', pt:'O check-out é ao meio-dia. Se precisar de sair mais tarde, basta ligar para a receção.'}}],
      fr: 'Le départ est à midi. Si vous avez besoin de partir plus tard, il suffit d\'appeler la réception.' },
    { who: 'C', seg: ['Muito ', {w:'obrigada'}, '!'],
      fr: 'Merci beaucoup !' },
    { who: 'R', seg: [{d:{br:'De nada. Tenha uma ótima ', pt:'De nada. Tenha uma excelente '}}, {w:'estadia'}, '!'],
      fr: 'Je vous en prie. Bon séjour !' }
  ],

  glossaire: {
    reserva:           { word: 'reserva', ipa: {br:'/ʁeˈzɛʁvɐ/', pt:'/ʁɨˈzɛɾvɐ/'}, tr: 'une réservation', v: 0 },
    'em nome de':      { word: 'em nome de', tr: 'au nom de', v: 1 },
    'quarto de casal': { word: 'quarto de casal', tr: 'une chambre double (avec un grand lit)', v: 2 },
    cafe:              { word: {br:'café da manhã', pt:'pequeno-almoço'}, tr: {br:'le petit-déjeuner (au Portugal : « pequeno-almoço »)', pt:'le petit-déjeuner (au Brésil : « café da manhã »)'}, v: 7 },
    senha:             { word: {br:'senha', pt:'palavra-passe'}, tr: {br:'le mot de passe (au Portugal : « palavra-passe »)', pt:'le mot de passe (au Brésil : « senha »)'} },
    cartao:            { word: 'cartão do quarto', tr: 'la carte-clé de la chambre. « ão » est une voyelle nasale, comme « an » suivi d\'un petit « ou ».', v: 5 },
    'check-out':       { word: 'check-out', tr: "le départ (l'heure à laquelle on libère la chambre)", v: 6 },
    obrigada:          { word: 'obrigada', tr: 'merci. Une femme dit « obrigada », un homme « obrigado ».', v: 11 },
    estadia:           { word: 'estadia', tr: 'le séjour', v: 10 }
  },

  vocabulaire: [
    { en: 'Tenho uma reserva', fr: "J'ai une réservation", ex: 'Tenho uma reserva para duas noites.' },
    { en: 'em nome de…', fr: 'au nom de…', ex: 'A mesa está em nome de Dubois.' },
    { en: 'um quarto de casal', fr: 'une chambre double', ex: {br:'Vocês têm um quarto de casal para hoje?', pt:'Têm um quarto de casal para hoje?'} },
    { en: {br:'Posso ver seu passaporte?', pt:'Posso ver o seu passaporte?'}, fr: 'Puis-je voir votre passeport ?', ex: {br:'Posso ver seu passaporte, por favor?', pt:'Posso ver o seu passaporte, por favor?'} },
    { en: {br:'a recepção', pt:'a receção'}, fr: 'la réception', ex: {br:'Ligue para a recepção, por favor.', pt:'Ligue para a receção, por favor.'} },
    { en: 'o cartão do quarto', fr: 'la carte-clé', ex: {br:'Meu cartão do quarto não funciona.', pt:'O meu cartão do quarto não funciona.'} },
    { en: 'o check-out', fr: 'le départ (libérer la chambre)', ex: 'O check-out é ao meio-dia.' },
    { en: {br:'O café da manhã é servido das… às…', pt:'O pequeno-almoço é servido das… às…'}, fr: 'Le petit-déjeuner est servi de… à…', ex: {br:'O café da manhã é servido das 7h às 10h.', pt:'O pequeno-almoço é servido das 7h às 10h.'} },
    { en: 'no terceiro andar', fr: 'au 3ᵉ étage', ex: {br:'Meu quarto fica no terceiro andar.', pt:'O meu quarto fica no terceiro andar.'} },
    { en: {br:'Tem wi-fi no quarto?', pt:'Há wi-fi no quarto?'}, fr: 'Y a-t-il le wifi dans la chambre ?', ex: {br:'Tem wi-fi no quarto?', pt:'Há wi-fi no quarto?'} },
    { en: {br:'Tenha uma ótima estadia!', pt:'Tenha uma excelente estadia!'}, fr: 'Bon séjour !', ex: {br:'Obrigado, e tenha uma ótima estadia!', pt:'Obrigado, e tenha uma excelente estadia!'} },
    { en: 'Muito obrigada! / Muito obrigado!', fr: 'Merci beaucoup ! (obrigada pour une femme, obrigado pour un homme)', ex: '—Muito obrigada! —De nada.' }
  ],

  comprehension: [
    { q: 'Que demande Camille au réceptionniste ?',
      opts: ["S'il y a le wifi dans la chambre, et l'heure du départ", "L'heure du petit-déjeuner et le mot de passe", 'Une chambre plus grande'],
      a: 0, why: 'Camille demande s\'il y a le wifi, puis « a que horas é o check-out? ». L\'heure du petit-déjeuner, c\'est le réceptionniste qui la donne.' },
    { q: 'À quelle heure Camille doit-elle libérer la chambre ?',
      opts: ['10 h', 'Midi', '7 h'],
      a: 1, why: '« O check-out é ao meio-dia » : meio-dia = midi. 10 h, c\'est la fin du petit-déjeuner.' },
    { q: 'Où se trouve le mot de passe du wifi ?',
      opts: ['À la réception', 'Sur la carte de la chambre', 'Dans un e-mail'],
      a: 1, why: 'Le mot de passe « está no cartão do quarto ».' }
  ],

  grammaireTitre: 'Demander poliment : <span lang="pt">Posso…? / Poderia…? / Queria…</span>',
  grammaire: '<div class="rule"><strong>La règle</strong><br><span lang="pt"><b>Posso</b></span> + infinitif (« je peux… ? ») pour demander la permission. <span lang="pt"><b>Pode</b></span> / <span lang="pt"><b>Poderia</b></span> + infinitif pour demander à quelqu\'un de faire quelque chose ; <span lang="pt"><b>poderia</b></span> (conditionnel) est plus poli.<br><span lang="pt"><b>Queria…</b></span> (très courant) ou <span lang="pt"><b>Gostaria de…</b></span> signifient « je voudrais ».</div>' +
    '<div class="table-scroll"><table class="g-table"><thead><tr><th>Portugais</th><th>Français</th><th>Registre</th></tr></thead><tbody lang="pt">' +
    '<tr><td>Posso ver o quarto?</td><td lang="fr">Je peux voir la chambre ?</td><td lang="fr">neutre</td></tr>' +
    '<tr><td>Poderia chamar um táxi, por favor?</td><td lang="fr">Pourriez-vous appeler un taxi ?</td><td lang="fr">poli</td></tr>' +
    '<tr><td>Queria mais uma toalha, por favor.</td><td lang="fr">Je voudrais une serviette de plus.</td><td lang="fr">poli</td></tr>' +
    '<tr><td>Gostaria de um quarto com vista.</td><td lang="fr">J\'aimerais une chambre avec vue.</td><td lang="fr">poli</td></tr></tbody></table></div>' +
    '<h3 class="g-h3">🇫🇷 Comparaison avec le français</h3><p>« Pourriez-vous… ? » se dit <span lang="pt"><b>Poderia…?</b></span>, sans pronom. Au Brésil, on dit facilement <span lang="pt-BR">você</span> ; au Portugal, avec un inconnu, on évite <span lang="pt-PT">você</span> : on dit <span lang="pt-PT">o senhor / a senhora</span>, ou on omet le sujet (<span lang="pt-PT">Pode chamar…?</span>).</p>' +
    '<h3 class="g-h3">⚠️ Erreurs typiques des francophones</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Erreur</th><th>Correction</th><th>Pourquoi</th></tr></thead><tbody>' +
    '<tr><td lang="pt"><del>Gostaria um quarto com vista.</del></td><td lang="pt"><ins>Gostaria de um quarto com vista.</ins></td><td>On dit toujours <span lang="pt">gostar <b>de</b></span>.</td></tr>' +
    '<tr><td lang="pt"><del>Eu quero uma toalha.</del></td><td lang="pt"><ins>Queria uma toalha, por favor.</ins></td><td><span lang="pt">Quero</span> sonne comme un ordre.</td></tr>' +
    '<tr><td lang="pt"><del>Obrigado! (dit par Camille)</del></td><td lang="pt"><ins>Obrigada!</ins></td><td>Une femme dit <span lang="pt">obrigada</span>, un homme <span lang="pt">obrigado</span>.</td></tr></tbody></table></div>',
  exGrammaire: {
    phrase: '___ chamar um táxi, por favor?',
    options: ['Poderia', 'Gostaria', 'Tenho'], bonne: 'Poderia',
    retours: {
      Poderia: '✅ « Poderia chamar um táxi, por favor? » : une demande polie.',
      Gostaria: '❌ « Gostaria de » = « j\'aimerais » : on dirait « Gostaria de um táxi ». Pour demander à quelqu\'un de faire quelque chose : « Poderia… ? ».',
      Tenho: '❌ « Tenho » = « j\'ai » : la phrase n\'a pas de sens.'
    }
  },

  trous: [
    { before: 'Tenho uma reserva', opts: ['em nome de', 'no nome de', 'ao nome de'], a: 'em nome de', after: 'Martin.', why: '« em nome de » = « au nom de ».' },
    { before: 'Gostaria', opts: ['de', 'a', 'em'], a: 'de', after: 'um quarto com vista.', why: 'On dit toujours « gostar de ».' },
    { before: {br:'O café da manhã é servido', pt:'O pequeno-almoço é servido'}, opts: ['das', 'de', 'entre'], a: 'das', after: '7h às 10h.', why: '« das… às… » = « de… à… » (de + as = das).' },
    { before: 'Muito', opts: ['obrigada', 'obrigado', 'obrigadas'], a: 'obrigada', after: '! (c\'est Camille qui parle)', why: 'Camille est une femme : elle dit « obrigada ».' }
  ],
  paires: { a: 'avó', b: 'avô',
    aide: 'Écoutez le mot, puis choisissez ce que vous avez entendu. <span lang="pt">avó</span> (grand-mère) : « o » ouvert, comme dans « porte » ; <span lang="pt">avô</span> (grand-père) : « o » fermé, comme dans « eau ».' },

  jeuDeRole: {
    texte: 'Vous arrivez à l\'hôtel, mais le réceptionniste ne trouve pas votre réservation. Expliquez la situation, donnez votre nom et trouvez une solution, poliment. Rafael joue le réceptionniste et vous corrige à la fin de la scène.',
    sujet: "À l'hôtel : j'arrive pour mon séjour, mais la réception ne trouve pas ma réservation. Tu joues le réceptionniste."
  },
  redaction: {
    consigne: 'Vous êtes dans votre chambre. Écrivez un court message à la réception pour demander à <b>partir plus tard</b> et <b>une serviette en plus</b> (<i lang="pt">uma toalha</i>).',
    placeholder: 'Bom dia, …',
    criteres: [
      [/(poderia|pode|posso|queria|gostaria)/, 'Une formule polie (Poderia…? / Posso…? / Queria… / Gostaria de…)'],
      [/por favor/, '« por favor »'],
      [/(mais tarde|check-?out tardio|late check-?out)/, 'La demande de départ tardif (sair mais tarde / check-out mais tarde)'],
      [/toalhas?/, 'Le mot « toalha » (serviette)'],
      [/\bquero\b/, '« quero » (un peu direct : préférez « queria »)', true]
    ],
    modele: {
      br: 'Bom dia, aqui é a Camille Martin, do quarto 305. Posso fazer o check-out mais tarde amanhã? E poderia me trazer mais uma toalha, por favor? Muito obrigada!',
      pt: 'Bom dia, fala a Camille Martin, do quarto 305. Posso fazer o check-out mais tarde amanhã? E poderia trazer-me mais uma toalha, por favor? Muito obrigada!'
    }
  },

  cultureTitre: 'À l\'hôtel, au Brésil et au Portugal',
  culture: '<div class="card block"><h3 class="ex-title">💶 Le pourboire (<span lang="pt">a gorjeta</span>)</h3>' +
    '<p><b>🇧🇷 Brésil :</b> au restaurant, 10 % de service (« <i lang="pt-BR">os 10%</i> ») sont en général ajoutés à l\'addition. Ils sont facultatifs, mais presque tout le monde les paie. À l\'hôtel, le pourboire n\'est pas obligatoire.</p>' +
    '<p style="margin:0;"><b>🇵🇹 Portugal :</b> le pourboire n\'est pas obligatoire. On laisse la monnaie, ou 5 à 10 % si le service a plu.</p>' +
    '<p class="note" style="margin:10px 0 0;">⚠️ Faux ami : « <span lang="pt">propina</span> » veut dire « pot-de-vin » au Brésil et « frais d\'inscription » au Portugal. Le pourboire, c\'est « <span lang="pt">gorjeta</span> ».</p></div>' +
    '<div class="card block"><h3 class="ex-title">🗣️ Les mots qui changent</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Français</th><th>🇧🇷 Brésil</th><th>🇵🇹 Portugal</th></tr></thead><tbody>' +
    '<tr><td>le petit-déjeuner</td><td lang="pt-BR">o café da manhã</td><td lang="pt-PT">o pequeno-almoço</td></tr>' +
    '<tr><td>le mot de passe</td><td lang="pt-BR">a senha</td><td lang="pt-PT">a palavra-passe</td></tr>' +
    '<tr><td>la réception</td><td lang="pt-BR">a recepção</td><td lang="pt-PT">a receção</td></tr>' +
    '<tr><td>le téléphone portable</td><td lang="pt-BR">o celular</td><td lang="pt-PT">o telemóvel</td></tr>' +
    '<tr><td>le bus</td><td lang="pt-BR">o ônibus</td><td lang="pt-PT">o autocarro</td></tr></tbody></table></div></div>',
  cultureQuiz: [
    { q: 'Au Brésil, les « 10 % » ajoutés à l\'addition du restaurant sont…',
      opts: ['Le service, facultatif mais habituel', 'Une taxe obligatoire', 'Une réduction pour les touristes'],
      a: 0, why: 'Les « 10% » correspondent au service : ils sont facultatifs, mais presque toujours payés.' },
    { q: '« Le pourboire » se dit…',
      opts: ['a gorjeta', 'a propina', 'o troco'],
      a: 0, why: '« propina » est un faux ami (pot-de-vin ou frais d\'inscription), et « o troco », c\'est la monnaie rendue.' }
  ],

  bilan: [
    { q: '« Je voudrais une chambre avec vue. »', cible: true,
      opts: ['Gostaria de um quarto com vista.', 'Gostaria um quarto com vista.', 'Eu quero quarto com vista.'],
      a: 0, why: 'On dit « gostar de », et « Eu quero » sonne direct.', rev: 'Gostaria de um quarto com vista.' },
    { q: 'Complétez : « Tenho uma reserva ___ Martin. »', cible: true,
      opts: ['em nome de', 'no nome de', 'ao nome de'],
      a: 0, why: '« em nome de » = « au nom de ».', rev: 'em nome de…' },
    { q: 'Au Portugal, « le petit-déjeuner » se dit…', cible: true,
      opts: ['o pequeno-almoço', 'o café da manhã', 'o almoço'],
      a: 0, why: '« café da manhã » au Brésil ; « o almoço », c\'est le déjeuner.', rev: 'o pequeno-almoço' },
    { q: '« Bon séjour ! »', cible: true,
      opts: [{br:'Tenha uma ótima estadia!', pt:'Tenha uma excelente estadia!'}, 'Boa viagem!', 'Bom apetite!'],
      a: 0, why: '« Boa viagem! » = « Bon voyage ! » ; « Bom apetite! » = « Bon appétit ! ».', rev: {br:'Tenha uma ótima estadia!', pt:'Tenha uma excelente estadia!'} },
    { q: '« O check-out é ao meio-dia » signifie…',
      opts: ['Il faut libérer la chambre à midi', "L'arrivée est possible à partir de midi", 'Le petit-déjeuner est servi jusqu\'à midi'],
      a: 0, why: '« meio-dia » = midi, et le « check-out » est le départ.', rev: 'o check-out' },
    { q: 'Camille remercie le réceptionniste. Elle dit…', cible: true,
      opts: ['Muito obrigada!', 'Muito obrigado!', 'Muito obrigados!'],
      a: 0, why: 'C\'est le genre de la personne qui parle qui compte : une femme dit « obrigada ».', rev: 'Muito obrigada!' },
    { q: 'Quelle phrase est correcte ?', cible: true,
      opts: [{br:'Poderia chamar um táxi para mim, por favor?', pt:'Poderia chamar-me um táxi, por favor?'}, 'Poderia de chamar um táxi?', 'Posso você chamar um táxi?'],
      a: 0, why: '« Poderia » + infinitif, sans préposition.', rev: 'Poderia chamar um táxi?' },
    { q: 'Au Brésil, « le mot de passe » se dit…', cible: true,
      opts: ['a senha', 'a palavra-passe', 'o passe'],
      a: 0, why: '« senha » au Brésil, « palavra-passe » au Portugal.', rev: {br:'a senha', pt:'a palavra-passe'} }
  ],

  conseil: '« <span lang="pt">Obrigado</span> » ou « <span lang="pt">obrigada</span> » ? Ça dépend de <b>qui parle</b> : un homme dit <i>obrigado</i>, une femme <i>obrigada</i>, même si elle parle à un homme. Isso aí!'
};
