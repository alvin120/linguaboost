// Leçon A2 « À l'hôtel » — anglais (variantes US / UK).
// Un objet {us:…, uk:…} donne le texte propre à chaque variante ; une simple chaîne vaut pour les deux.
window.LECONS = window.LECONS || {};
window.LECONS.en = {
  lang: 'en', langue: 'anglais', prof: 'emma', profNom: 'Emma', profInitiale: 'E',
  titre: 'Unit 3 · At the hotel',
  variantes: [
    { k: 'us', label: '🇺🇸 US', speech: 'en-US', code: 'US' },
    { k: 'uk', label: '🇬🇧 UK', speech: 'en-GB', code: 'UK' }
  ],
  ville: { us: 'Boston', uk: 'Londres' },
  chambre: { us: '412', uk: '312' },
  personnages: { C: { nom: 'Camille', init: 'CM' }, R: { nom: 'Réceptionniste', init: 'R' } },
  noteVariantes: '<strong>🇺🇸 / 🇬🇧 Ce qui change selon la variante</strong><p style="margin:6px 0 0;font-size:15px;">Les passages <span class="diff">surlignés</span> changent entre l\'anglais américain et l\'anglais britannique. Basculez US / UK en haut de l\'écran pour comparer. Attention aux <b>étages</b> : aux États-Unis, le rez-de-chaussée s\'appelle <i lang="en">first floor</i>. Le 3ᵉ étage français est donc le <i lang="en">fourth floor</i> 🇺🇸, mais le <i lang="en">third floor</i> 🇬🇧.</p>',

  dialogue: [
    { who: 'R', seg: ['Good evening, welcome to the ', {d:{us:'Harbor', uk:'Harbour'}}, ' View Hotel. How can I help you?'],
      fr: 'Bonsoir, bienvenue au Harbor View Hotel. Que puis-je faire pour vous ?' },
    { who: 'C', seg: [{d:{us:'Hi, I have a ', uk:"Hello, I've got a "}}, {w:'reservation'}, ' ', {w:'under the name'}, ' Martin.'],
      fr: "Bonjour, j'ai une réservation au nom de Martin." },
    { who: 'R', seg: ['Let me check… Yes, Camille Martin, two nights, a double room. Could I see your ', {w:'ID'}, ', please?'],
      fr: "Je vérifie… Oui, Camille Martin, deux nuits, une chambre double. Puis-je voir votre pièce d'identité, s'il vous plaît ?" },
    { who: 'C', seg: ["Sure, here's my passport."],
      fr: 'Bien sûr, voici mon passeport.' },
    { who: 'R', seg: ['Thank you. Your room is on the ', {d:{us:'fourth floor, room 412', uk:'third floor, room 312'}}, '. ', {w:'Breakfast'}, ' is served from 6:30 to 10.'],
      fr: 'Merci. Votre chambre est au 3ᵉ étage, chambre {room}. Le petit-déjeuner est servi de 6 h 30 à 10 h.' },
    { who: 'C', seg: ['Great. Is there Wi-Fi in the room?'],
      fr: 'Super. Il y a le wifi dans la chambre ?' },
    { who: 'R', seg: ["Yes, it's free. The ", {w:'password'}, ' is on your ', {w:'key card'}, ' holder.'],
      fr: 'Oui, il est gratuit. Le mot de passe est sur la pochette de votre carte-clé.' },
    { who: 'C', seg: ['Perfect. And what time is ', {w:'checkout'}, '?'],
      fr: 'Parfait. Et à quelle heure faut-il libérer la chambre ?' },
    { who: 'R', seg: [{w:'checkoutCap'}, ' is at 11 a.m. If you need a late ', {w:'checkout'}, ', just call ', {d:{us:'the front desk', uk:'reception'}}, '.'],
      fr: 'Le départ est à 11 h. Si vous avez besoin de partir plus tard, appelez simplement la réception.' },
    { who: 'C', seg: [{d:{us:'Thanks a lot.', uk:'Thanks very much.'}}],
      fr: 'Merci beaucoup.' },
    { who: 'R', seg: ["You're welcome. Enjoy your ", {w:'stay'}, '!'],
      fr: 'Je vous en prie. Bon séjour !' }
  ],

  // v : index de l'expression de vocabulaire liée (ajoutée aux révisions depuis la bulle)
  glossaire: {
    reservation:      { word: {us:'reservation', uk:'booking'}, ipa: {us:'/ˌrɛzɚˈveɪʃən/', uk:'/ˈbʊkɪŋ/'}, tr: {us:'une réservation', uk:'une réservation (UK : on dit plus souvent « booking »)'}, v: 0 },
    'under the name': { word: 'under the name', ipa: {us:'/ˈʌndɚ ðə neɪm/', uk:'/ˈʌndə ðə neɪm/'}, tr: 'au nom de', v: 1 },
    ID:               { word: 'ID', ipa: '/ˌaɪˈdiː/', tr: "une pièce d'identité (abréviation de « identification »)", v: 2 },
    Breakfast:        { word: 'Breakfast', ipa: '/ˈbrɛkfəst/', tr: 'le petit-déjeuner (attention : « brek », pas « brèk-fast »)', v: 7 },
    password:         { word: 'password', ipa: {us:'/ˈpæswɝd/', uk:'/ˈpɑːswɜːd/'}, tr: 'le mot de passe' },
    'key card':       { word: 'key card', ipa: {us:'/ˈki kɑrd/', uk:'/ˈkiː kɑːd/'}, tr: 'la carte-clé', v: 4 },
    checkout:         { word: {us:'checkout', uk:'check-out'}, ipa: '/ˈtʃɛkaʊt/', tr: "le départ (l'heure à laquelle on libère la chambre)", v: 5 },
    checkoutCap:      { word: {us:'Checkout', uk:'Check-out'}, ipa: '/ˈtʃɛkaʊt/', tr: "le départ (l'heure à laquelle on libère la chambre)", v: 5 },
    stay:             { word: 'stay', ipa: '/steɪ/', tr: 'le séjour (aussi : rester, séjourner)', v: 10 }
  },

  vocabulaire: [
    { en: {us:'I have a reservation', uk:"I've got a booking"}, fr: "J'ai une réservation", ex: {us:'I have a reservation for two nights.', uk:"I've got a booking for two nights."} },
    { en: 'under the name…', fr: 'au nom de…', ex: 'The table is under the name Dubois.' },
    { en: 'Could I see your ID?', fr: "Puis-je voir votre pièce d'identité ?", ex: 'Could I see your ID, please?' },
    { en: {us:'the front desk', uk:'reception'}, fr: 'la réception', ex: {us:'Please call the front desk.', uk:'Please call reception.'} },
    { en: 'a key card', fr: 'une carte-clé', ex: "My key card doesn't work." },
    { en: {us:'checkout', uk:'check-out'}, fr: 'le départ (libérer la chambre)', ex: {us:'Checkout is at 11 a.m.', uk:'Check-out is at 11 a.m.'} },
    { en: {us:'a late checkout', uk:'a late check-out'}, fr: 'un départ tardif', ex: {us:'Can I have a late checkout?', uk:'Can I have a late check-out?'} },
    { en: 'Breakfast is served from… to…', fr: 'Le petit-déjeuner est servi de… à…', ex: 'Breakfast is served from 7 to 10.' },
    { en: {us:'the fourth floor', uk:'the third floor'}, fr: 'le 3ᵉ étage', ex: {us:'My room is on the fourth floor.', uk:'My room is on the third floor.'} },
    { en: 'Is there Wi-Fi in the room?', fr: 'Y a-t-il le wifi dans la chambre ?', ex: 'Is there Wi-Fi in the room?' },
    { en: 'Enjoy your stay!', fr: 'Bon séjour !', ex: 'Thank you, and enjoy your stay!' },
    { en: "You're welcome.", fr: 'Je vous en prie. / De rien.', ex: '"Thanks a lot!" — "You\'re welcome."' }
  ],

  comprehension: [
    { q: 'Que demande Camille à la réceptionniste ?',
      opts: ["S'il y a le wifi dans la chambre, et l'heure du départ", "L'heure du petit-déjeuner et le mot de passe", 'Une chambre plus grande'],
      a: 0, why: "Camille demande « Is there Wi-Fi in the room? », puis « what time is checkout? ». L'heure du petit-déjeuner, c'est la réceptionniste qui la donne sans qu'on la demande." },
    { q: 'À quelle heure Camille doit-elle libérer la chambre ?',
      opts: ['10 h', '11 h', '12 h'],
      a: 1, why: '« Checkout is at 11 a.m. » : a.m. = le matin. 10 h, c\'est la fin du petit-déjeuner.' },
    { q: 'Où se trouve le mot de passe du wifi ?',
      opts: ['À la réception', 'Sur la pochette de la carte-clé', 'Dans un e-mail'],
      a: 1, why: '« The password is on your key card holder. » Un holder, c\'est un étui ou une pochette.' }
  ],

  grammaireTitre: 'Demander poliment : <span lang="en">Can I…? / Could you…? / I\'d like…</span>',
  grammaire: '<div class="rule"><strong>La règle</strong><br><span lang="en"><b>Can</b> / <b>Could</b></span> + verbe à la base verbale, <b>sans <span lang="en">to</span></b> et <b>sans <span lang="en">do</span></b>.<br><span lang="en"><b>Could</b></span> est plus poli que <span lang="en"><b>can</b></span>. <span lang="en"><b>I\'d like</b></span> (= <span lang="en">I would like</span>) signifie « je voudrais ».</div>' +
    '<div class="table-scroll"><table class="g-table"><thead><tr><th>Anglais</th><th>Français</th><th>Registre</th></tr></thead><tbody lang="en">' +
    '<tr><td>Can I have a towel, please?</td><td lang="fr">Je peux avoir une serviette, s\'il vous plaît ?</td><td lang="fr">neutre</td></tr>' +
    '<tr><td>Could I see your ID, please?</td><td lang="fr">Puis-je voir votre pièce d\'identité ?</td><td lang="fr">poli</td></tr>' +
    '<tr><td>Could you call a taxi for me, please?</td><td lang="fr">Pourriez-vous m\'appeler un taxi ?</td><td lang="fr">poli</td></tr>' +
    '<tr><td>I\'d like a room with a view.</td><td lang="fr">Je voudrais une chambre avec vue.</td><td lang="fr">poli</td></tr></tbody></table></div>' +
    '<h3 class="g-h3">🇫🇷 Comparaison avec le français</h3><p>« Pourriez-vous… ? » se dit <span lang="en"><b>Could you…?</b></span>, et « Je voudrais… » se dit <span lang="en"><b>I\'d like…</b></span>. En anglais, <span lang="en"><b>I want</b></span> est beaucoup plus direct que « je veux » : à l\'hôtel ou au restaurant, il peut sembler impoli.</p>' +
    '<h3 class="g-h3">⚠️ Erreurs typiques des francophones</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Erreur</th><th>Correction</th><th>Pourquoi</th></tr></thead><tbody>' +
    '<tr><td lang="en"><del>Could I to see the room?</del></td><td lang="en"><ins>Could I see the room?</ins></td><td>Jamais de <span lang="en">to</span> après <span lang="en">can / could</span>.</td></tr>' +
    '<tr><td lang="en"><del>Do you can help me?</del></td><td lang="en"><ins>Can you help me?</ins></td><td>Pour la question, on inverse <span lang="en">can</span> et le sujet, sans <span lang="en">do</span>.</td></tr>' +
    '<tr><td lang="en"><del>I want a towel.</del></td><td lang="en"><ins>I\'d like a towel, please.</ins></td><td><span lang="en">I want</span> sonne comme un ordre.</td></tr></tbody></table></div>',
  exGrammaire: {
    phrase: { us: '___ I have a late checkout, please?', uk: '___ I have a late check-out, please?' },
    options: ['Could', 'Do', 'Would'], bonne: 'Could',
    retours: {
      Could: { us: '✅ « Could I have a late checkout, please? » : une demande polie.', uk: '✅ « Could I have a late check-out, please? » : une demande polie.' },
      Do: '❌ Avec « Do », il faudrait « Do you have… ? ». Pour demander quelque chose pour soi, on dit « Could I have… ? ».',
      Would: "❌ « Would I have » ne s'emploie pas pour une demande. On dit « Could I have… ? » ou « I'd like… »."
    }
  },

  trous: [
    { before: 'I have a reservation', opts: ['under', 'on', 'at'], a: 'under', after: 'the name Martin.', why: '« under the name… » = « au nom de… ».' },
    { before: 'Could I', opts: ['see', 'to see', 'seeing'], a: 'see', after: 'your ID, please?', why: 'Après could : la base verbale, sans « to ».' },
    { before: 'Breakfast is served', opts: ['from', 'since', 'between'], a: 'from', after: '6:30 to 10.', why: '« from… to… » = « de… à… ».' },
    { before: "You're welcome. Enjoy your", opts: ['stay', 'staying', 'rest'], a: 'stay', after: '!', why: '« Enjoy your stay! » = « Bon séjour ! ».' }
  ],
  paires: { a: 'stay', b: 'stair',
    aide: 'Écoutez le mot, puis choisissez ce que vous avez entendu. <span lang="en">stay</span> /steɪ/ (séjour) finit par le son « eï » ; <span lang="en">stair</span> (marche d\'escalier) finit par un son « èr ».' },

  jeuDeRole: {
    texte: 'Vous arrivez à l\'hôtel, mais la réceptionniste ne trouve pas votre réservation. Expliquez la situation, donnez votre nom et trouvez une solution, poliment. Emma joue la réceptionniste et vous corrige à la fin de la scène.',
    sujet: "À l'hôtel : j'arrive pour mon séjour, mais la réception ne trouve pas ma réservation. Tu joues la réceptionniste."
  },
  redaction: {
    consigne: 'Vous êtes dans votre chambre. Écrivez un court message à la réception pour demander <b>un départ tardif</b> et <b>une serviette en plus</b>.',
    placeholder: 'Hello, …',
    criteres: [
      [/\b(could|can|may) (i|you|we)\b|\bi'?d like\b|\bi would like\b/, "Une formule polie (Could I… ? / Could you… ? / I'd like…)"],
      [/\bplease\b/, '« please »'],
      [/\blate check-?out\b|\bcheck(-| )?out (later|at)\b/, { us: 'La demande de départ tardif (a late checkout)', uk: 'La demande de départ tardif (a late check-out)' }],
      [/\btowels?\b/, 'Le mot « towel » (serviette)'],
      [/\bi want\b/, '« I want » (trop direct, à éviter)', true]
    ],
    modele: {
      us: 'Hello, this is room 412. Could I have a late checkout tomorrow, please? And could you bring me an extra towel? Thank you!',
      uk: 'Hello, this is room 312. Could I have a late check-out tomorrow, please? And could you bring me an extra towel? Thank you!'
    }
  },

  cultureTitre: 'À l\'hôtel, aux États-Unis et au Royaume-Uni',
  culture: '<div class="card block"><h3 class="ex-title">💵 Les pourboires</h3>' +
    '<p><b>🇺🇸 États-Unis :</b> le pourboire (<i lang="en">tip</i>) fait partie des usages. À l\'hôtel, on donne souvent 1 à 2 dollars par bagage au bagagiste (<i lang="en">bellhop</i>) et quelques dollars par nuit pour la femme de chambre (<i lang="en">housekeeping</i>), laissés dans la chambre. Au restaurant, 15 à 20 % de l\'addition est la norme.</p>' +
    '<p style="margin:0;"><b>🇬🇧 Royaume-Uni :</b> le pourboire à l\'hôtel n\'est pas attendu. Au restaurant, vérifiez l\'addition : un <i lang="en">service charge</i> (souvent 10 à 12,5 %) est parfois déjà inclus. Sinon, environ 10 % est un geste apprécié.</p></div>' +
    '<div class="card block"><h3 class="ex-title">🏢 Les étages</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>En France</th><th>🇬🇧 Royaume-Uni</th><th>🇺🇸 États-Unis</th></tr></thead><tbody>' +
    '<tr><td>rez-de-chaussée</td><td lang="en">ground floor</td><td lang="en">first floor</td></tr>' +
    '<tr><td>1ᵉʳ étage</td><td lang="en">first floor</td><td lang="en">second floor</td></tr>' +
    '<tr><td>3ᵉ étage</td><td lang="en">third floor</td><td lang="en">fourth floor</td></tr></tbody></table></div>' +
    '<p class="note" style="margin:10px 0 0;">Dans l\'ascenseur (<i lang="en">lift</i> 🇬🇧, <i lang="en">elevator</i> 🇺🇸), le rez-de-chaussée britannique est souvent marqué « G ».</p></div>',
  cultureQuiz: [
    { q: 'Au Royaume-Uni, à l\'hôtel, le pourboire est…',
      opts: ['Pas attendu', 'Obligatoire : 20 %', 'Inclus dans le prix de la chambre, à préciser au départ'],
      a: 0, why: 'Au Royaume-Uni, on ne donne généralement pas de pourboire à l\'hôtel. Aux États-Unis, en revanche, c\'est l\'usage.' },
    { q: 'Votre chambre est au « second floor » à New York. En France, ce serait…',
      opts: ['Le 2ᵉ étage', 'Le 1ᵉʳ étage', 'Le rez-de-chaussée'],
      a: 1, why: 'Aux États-Unis, le rez-de-chaussée est le « first floor », donc le « second floor » est notre 1ᵉʳ étage.' }
  ],

  bilan: [
    { q: '« Je voudrais une chambre avec vue. »', cible: true,
      opts: ["I'd like a room with a view.", 'I want a room with view.', 'I would like have a room with a view.'],
      a: 0, why: "« I'd like… » est la formule polie. « I want » sonne comme un ordre.", rev: "I'd like a room with a view." },
    { q: 'Complétez : « Could I ___ your ID, please? »', cible: true,
      opts: ['see', 'to see', 'seeing'],
      a: 0, why: 'Après can / could : base verbale, sans « to ».', rev: 'Could I see your ID?' },
    { q: 'Au Royaume-Uni, le rez-de-chaussée se dit…', cible: true,
      opts: ['ground floor', 'first floor', 'zero floor'],
      a: 0, why: '« ground floor » 🇬🇧, « first floor » 🇺🇸.', rev: 'ground floor' },
    { q: '« Bon séjour ! »', cible: true,
      opts: ['Enjoy your stay!', 'Good stay!', 'Have a nice trip!'],
      a: 0, why: '« Enjoy your stay! » est la formule de l\'hôtel. « Have a nice trip! » se dit à quelqu\'un qui part en voyage.', rev: 'Enjoy your stay!' },
    { q: '« Checkout is at 11 a.m. » signifie…',
      opts: ['Il faut libérer la chambre à 11 h', "L'arrivée est possible à partir de 11 h", 'Le petit-déjeuner est servi jusqu\'à 11 h'],
      a: 0, why: '« checkout » = le départ, l\'heure où l\'on rend la chambre. L\'arrivée se dit « check-in ».', rev: {us:'checkout', uk:'check-out'} },
    { q: 'Quelle phrase est correcte ?', cible: true,
      opts: ['Can you help me?', 'Do you can help me?', 'Can you to help me?'],
      a: 0, why: 'Pour poser la question, on inverse « can » et le sujet, sans « do » et sans « to ».', rev: 'Can you help me?' },
    { q: 'Où appelez-vous pour demander un départ tardif ?', cible: true,
      opts: [{us:'The front desk', uk:'Reception'}, 'The lobby bar', 'The key card'],
      a: 0, why: '« the front desk » 🇺🇸 ou « reception » 🇬🇧 : la réception.', rev: {us:'the front desk', uk:'reception'} },
    { q: '« J\'ai une réservation au nom de Martin. »', cible: true,
      opts: ['I have a reservation under the name Martin.', 'I have a reservation on the name Martin.', 'I have a reservation at the name of Martin.'],
      a: 0, why: '« under the name… » est une formule toute faite.', rev: 'under the name…' }
  ],

  conseil: '« <span lang="en">Under the name</span> » : c\'est la formule toute faite pour donner le nom d\'une réservation. Retenez-la en bloc, elle sert aussi au restaurant !'
};
