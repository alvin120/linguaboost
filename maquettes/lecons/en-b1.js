// Leçon B1 « Un problème à l'hôtel » — anglais (variantes US / UK).
window.LECONS = window.LECONS || {};
window.LECONS['en-B1'] = {
  niveau: 'B1', theme: 'Réclamation à l\'hôtel', etape1: 'Camille signale un problème',
  intro: 'Le lendemain matin, à {ville}, Camille appelle la réception : quelque chose ne va pas dans sa chambre.',
  indiceOrdre: 'la réception décroche, puis Camille explique le problème.',
  badge: { nom: 'Diplomate', icone: '🤝' },
  lang: 'en', langue: 'anglais', prof: 'emma', profNom: 'Emma', profInitiale: 'E',
  titre: 'Unit 7 · A problem with the room',
  variantes: [
    { k: 'us', label: '🇺🇸 US', speech: 'en-US', code: 'US' },
    { k: 'uk', label: '🇬🇧 UK', speech: 'en-GB', code: 'UK' }
  ],
  ville: { us: 'Chicago', uk: 'Manchester' },
  personnages: { C: { nom: 'Camille', init: 'CM' }, R: { nom: 'Réceptionniste', init: 'R' } },
  noteVariantes: '<strong>🇺🇸 / 🇬🇧 Ce qui change selon la variante</strong><p style="margin:6px 0 0;font-size:15px;">Au téléphone, l\'hôtel américain répond « <i lang="en">Front desk</i> », le britannique « <i lang="en">Reception</i> ». Les Britanniques disent souvent « <i lang="en">Cheers</i> » pour remercier, et la chambre 412 🇺🇸 est au même étage que la 312 🇬🇧.</p>',

  dialogue: [
    { who: 'R', seg: [{d:{us:'Front desk, this is Mark speaking. How can I help?', uk:'Reception, Mark speaking. How can I help?'}}],
      fr: 'Réception, Mark à l\'appareil. Que puis-je faire pour vous ?' },
    { who: 'C', seg: [{d:{us:'Hi, this is room 412. ', uk:'Hello, this is room 312. '}}, {w:"I'm afraid"}, ' the ', {w:'air conditioning'}, " isn't working."],
      fr: 'Bonjour, c\'est la chambre 412. Je crains que la climatisation ne marche pas.' },
    { who: 'R', seg: ["I'm sorry to hear that. How long has it been like that?"],
      fr: 'J\'en suis désolé. Depuis combien de temps est-ce comme ça ?' },
    { who: 'C', seg: ["It stopped working last night, and I've called twice ", {w:'since then'}, '.'],
      fr: 'Elle s\'est arrêtée hier soir, et j\'ai appelé deux fois depuis.' },
    { who: 'R', seg: ['I do apologize. Nobody has come up yet?'],
      fr: 'Je vous prie de nous excuser. Personne n\'est encore monté ?' },
    { who: 'C', seg: ['No, nobody has come. And I ', {w:"haven't slept"}, ' very well.'],
      fr: 'Non, personne n\'est venu. Et je n\'ai pas très bien dormi.' },
    { who: 'R', seg: ["I understand. I'll send ", {d:{us:'someone from maintenance', uk:'a technician'}}, ' right away.'],
      fr: 'Je comprends. J\'envoie quelqu\'un du service technique tout de suite.' },
    { who: 'C', seg: ['Thank you. ', {w:'Could I possibly'}, " change rooms if it can't be ", {w:'fixed'}, '?'],
      fr: 'Merci. Serait-il possible de changer de chambre si ça ne peut pas être réparé ?' },
    { who: 'R', seg: ['Of course. And ', {w:'to make up for it'}, ', breakfast is ', {w:'on the house'}, ' today.'],
      fr: 'Bien sûr. Et pour nous faire pardonner, le petit-déjeuner est offert aujourd\'hui.' },
    { who: 'C', seg: [{d:{us:"That's very kind of you. Thanks.", uk:"That's very kind of you. Cheers."}}],
      fr: 'C\'est très gentil. Merci.' },
    { who: 'R', seg: ["You're welcome. Again, sorry for the ", {w:'inconvenience'}, '.'],
      fr: 'Je vous en prie. Encore désolé pour le désagrément.' }
  ],

  glossaire: {
    "I'm afraid":        { word: "I'm afraid", ipa: '/aɪm əˈfreɪd/', tr: 'je crains que… : formule polie pour annoncer un problème (rien à voir avec la peur ici)', v: 0 },
    'air conditioning':  { word: 'air conditioning', tr: 'la climatisation', v: 1 },
    'since then':        { word: 'since then', ipa: '/sɪns ðɛn/', tr: 'depuis (ce moment-là)', v: 2 },
    "haven't slept":     { word: "haven't slept", tr: 'je n\'ai pas dormi. Present perfect : la conséquence se voit maintenant (Camille est fatiguée).', v: 3 },
    'Could I possibly':  { word: 'Could I possibly', tr: 'Serait-il possible que je… (très poli)', v: 4 },
    fixed:               { word: 'fixed', ipa: '/fɪkst/', tr: 'réparé', v: 5 },
    'to make up for it': { word: 'to make up for it', tr: 'pour compenser, pour se faire pardonner', v: 6 },
    'on the house':      { word: 'on the house', tr: 'offert par la maison', v: 7 },
    inconvenience:       { word: 'inconvenience', ipa: '/ˌɪnkənˈviːniəns/', tr: 'le désagrément, la gêne', v: 8 }
  },

  vocabulaire: [
    { en: "I'm afraid… isn't working.", fr: 'Je crains que… ne marche pas.', ex: "I'm afraid the shower isn't working." },
    { en: 'the air conditioning', fr: 'la climatisation', ex: 'The air conditioning is very noisy.' },
    { en: "I've called twice since then.", fr: 'J\'ai appelé deux fois depuis.', ex: "I've asked three times since this morning." },
    { en: "I haven't slept well.", fr: 'Je n\'ai pas bien dormi.', ex: "I haven't slept at all." },
    { en: 'Could I possibly change rooms?', fr: 'Serait-il possible de changer de chambre ?', ex: 'Could I possibly have a quieter room?' },
    { en: 'to be fixed', fr: 'être réparé', ex: 'Can it be fixed today?' },
    { en: 'to make up for it', fr: 'pour compenser', ex: 'To make up for it, dinner is free tonight.' },
    { en: 'on the house', fr: 'offert (par la maison)', ex: 'The drinks are on the house.' },
    { en: 'Sorry for the inconvenience.', fr: 'Désolé pour le désagrément.', ex: 'We apologize for the inconvenience.' },
    { en: {us:'maintenance', uk:'a technician'}, fr: 'le service technique / un technicien', ex: {us:"I'll call maintenance.", uk:"I'll send a technician."} }
  ],

  comprehension: [
    { q: 'Quel est le problème ?',
      opts: ['La climatisation ne marche pas', 'Il n\'y a pas d\'eau chaude', 'La chambre est sale'],
      a: 0, why: '« I\'m afraid the air conditioning isn\'t working. »' },
    { q: 'Qu\'a déjà fait Camille ?',
      opts: ['Elle a appelé deux fois', 'Elle est descendue à la réception', 'Elle a envoyé un e-mail'],
      a: 0, why: '« I\'ve called twice since then. »' },
    { q: 'Que propose l\'hôtel ?',
      opts: ['Un technicien, une autre chambre si besoin et le petit-déjeuner offert', 'Un remboursement complet', 'Une nuit gratuite'],
      a: 0, why: '« I\'ll send someone right away… breakfast is on the house today. »' }
  ],

  grammaireTitre: 'Raconter un problème : <span lang="en">present perfect</span> ou <span lang="en">past simple</span> ?',
  grammaire: '<div class="rule"><strong>La règle</strong><br><b>Past simple</b> (<span lang="en">it stopped, I called</span>) : action terminée à un <b>moment passé précis</b> (<span lang="en">last night, yesterday, at 10</span>).<br><b>Present perfect</b> (<span lang="en">have + participe passé : I\'ve called, nobody has come</span>) : passé <b>relié au présent</b>, sans date précise, souvent avec <span lang="en">since, for, yet, already, twice</span>.</div>' +
    '<div class="table-scroll"><table class="g-table"><thead><tr><th>Anglais</th><th>Français</th><th>Temps</th></tr></thead><tbody>' +
    '<tr><td lang="en">It stopped working last night.</td><td>Elle s\'est arrêtée hier soir.</td><td>past simple</td></tr>' +
    '<tr><td lang="en">I\'ve called twice since then.</td><td>J\'ai appelé deux fois depuis.</td><td>present perfect</td></tr>' +
    '<tr><td lang="en">Nobody has come yet.</td><td>Personne n\'est encore venu.</td><td>present perfect</td></tr>' +
    '<tr><td lang="en">I\'ve been here since Monday.</td><td>Je suis ici depuis lundi.</td><td>present perfect</td></tr></tbody></table></div>' +
    '<h3 class="g-h3">🇫🇷 Comparaison avec le français</h3><p>Le passé composé français correspond aux <b>deux</b> temps. Posez-vous la question : y a-t-il un moment précis dans le passé ? « Hier, j\'ai appelé » → <span lang="en">I called yesterday</span>. « J\'ai déjà appelé (et toujours rien) » → <span lang="en">I\'ve already called</span>. Et « depuis » + présent en français devient un present perfect : « Je suis ici depuis lundi » → <span lang="en">I\'ve been here since Monday</span>.</p>' +
    '<h3 class="g-h3">⚠️ Erreurs typiques des francophones</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Erreur</th><th>Correction</th><th>Pourquoi</th></tr></thead><tbody>' +
    '<tr><td lang="en"><del>I have called yesterday.</del></td><td lang="en"><ins>I called yesterday.</ins></td><td>Avec <span lang="en">yesterday</span> (moment précis) : past simple.</td></tr>' +
    '<tr><td lang="en"><del>I am here since Monday.</del></td><td lang="en"><ins>I\'ve been here since Monday.</ins></td><td>« depuis » : present perfect, pas présent.</td></tr>' +
    '<tr><td lang="en"><del>Nobody came yet.</del></td><td lang="en"><ins>Nobody has come yet.</ins></td><td><span lang="en">yet</span> relie au présent : present perfect.</td></tr></tbody></table></div>',
  exGrammaire: {
    phrase: '___ called reception three times since this morning.',
    options: ["I've", 'I', "I'm"], bonne: "I've",
    retours: {
      "I've": '✅ « since this morning » : le problème dure jusqu\'à maintenant → present perfect.',
      'I': '❌ « I called » ne va pas avec « since » : l\'action est reliée au présent, il faut « I\'ve called ».',
      "I'm": '❌ « I\'m called » voudrait dire « on m\'appelle » : il faut l\'auxiliaire « have ».'
    }
  },

  trous: [
    { before: 'It', opts: ['stopped', 'has stopped', 'stops'], a: 'stopped', after: 'working last night.', why: '« last night » = moment passé précis → past simple.' },
    { before: 'Nobody has come', opts: ['yet', 'already', 'since'], a: 'yet', after: '.', why: '« yet » = « encore » dans une phrase négative ou une question.' },
    { before: "I've been here", opts: ['since', 'for', 'during'], a: 'since', after: 'Monday.', why: '« since » + point de départ (Monday) ; « for » + durée (two days).' },
    { before: 'Could I', opts: ['possibly', 'possible', 'possibility'], a: 'possibly', after: 'change rooms?', why: '« Could I possibly…? » : l\'adverbe rend la demande très polie.' }
  ],
  paires: { a: 'walk', b: 'work',
    aide: 'Écoutez le mot, puis choisissez ce que vous avez entendu. <span lang="en">walk</span> (marcher) : un « o » long, et le « l » ne se prononce pas ; <span lang="en">work</span> (travailler) : un son proche de « eur ».' },

  jeuDeRole: {
    texte: 'Appelez la réception : votre chambre a un problème (bruit, douche, climatisation…). Expliquez depuis quand, ce que vous avez déjà fait, et demandez une solution. Emma joue le réceptionniste, poli mais pas toujours arrangeant.',
    sujet: 'À l\'hôtel : j\'appelle la réception pour me plaindre d\'un problème dans ma chambre. Tu joues le réceptionniste, poli mais qui ne cède pas tout de suite.'
  },
  redaction: {
    consigne: 'Écrivez un court e-mail à l\'hôtel : la douche <b>ne marche plus depuis hier</b>, vous <b>avez déjà appelé</b> la réception, et vous demandez <b>une solution</b>.',
    placeholder: 'Dear Sir or Madam, …',
    criteres: [
      [/\bi'?m afraid\b|\bunfortunately\b/, "Une formule pour annoncer le problème (I'm afraid… / Unfortunately…)"],
      [/\bshower\b/, 'Le mot « shower » (douche)'],
      [/\b(i'?ve|i have) (already )?(called|phoned|asked|contacted|told)\b/, "Le present perfect pour ce que vous avez déjà fait (I've called…)"],
      [/\b(yesterday|since)\b/, '« since » ou « yesterday » pour dire depuis quand'],
      [/\b(could|would|can) you\b|\bcould i\b/, 'Une demande polie (Could you… ? / Could I… ?)'],
      [/\bi have (called|phoned) yesterday\b/, '« I have called yesterday » (avec « yesterday » : I called)', true]
    ],
    modele: {
      us: "Dear Sir or Madam, I'm afraid the shower in room 412 hasn't worked since yesterday. I've already called the front desk twice, but nobody has come. Could you send someone today, or could I possibly change rooms? Kind regards, Camille Martin",
      uk: "Dear Sir or Madam, I'm afraid the shower in room 312 hasn't worked since yesterday. I've already called reception twice, but nobody has come. Could you send someone today, or could I possibly change rooms? Kind regards, Camille Martin"
    }
  },

  cultureTitre: 'Se plaindre poliment, à l\'anglaise',
  culture: '<div class="card block"><h3 class="ex-title">🫖 L\'art de l\'euphémisme</h3>' +
    '<p><b>🇬🇧 Royaume-Uni :</b> on adoucit presque tout. « <i lang="en">I\'m afraid…</i> », « <i lang="en">I was wondering if…</i> », « <i lang="en">It\'s a bit noisy</i> ». Attention : « <i lang="en">a bit</i> » ou « <i lang="en">not ideal</i> » signifient souvent un vrai problème !</p>' +
    '<p style="margin:0;"><b>🇺🇸 États-Unis :</b> on est plus direct, mais on reste positif et orienté solution : « <i lang="en">I\'d really appreciate it if you could…</i> ». Dans les deux pays, on parle du problème, jamais de la personne.</p></div>' +
    '<div class="card block"><h3 class="ex-title">🗣️ Adoucir une plainte</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Trop direct</th><th>Poli</th></tr></thead><tbody lang="en">' +
    '<tr><td>The shower is broken.</td><td>I\'m afraid the shower isn\'t working.</td></tr>' +
    '<tr><td>I want another room.</td><td>Could I possibly change rooms?</td></tr>' +
    '<tr><td>Fix it now.</td><td>Would you mind sending someone?</td></tr>' +
    '<tr><td>This is unacceptable.</td><td>This isn\'t quite what I expected.</td></tr></tbody></table></div></div>',
  cultureQuiz: [
    { q: 'Un Britannique dit : « The room is a bit noisy. » Il veut dire…',
      opts: ['La chambre est vraiment bruyante et ça le gêne', 'La chambre est très légèrement bruyante, rien de grave', 'Il aime le bruit'],
      a: 0, why: 'L\'euphémisme britannique : « a bit » cache souvent un vrai problème.' },
    { q: 'La formule la plus polie :',
      opts: ['Would you mind sending someone?', 'Send someone now.', 'You must send someone.'],
      a: 0, why: '« Would you mind + -ing? » = « Est-ce que ça vous dérangerait de… ? ».' }
  ],

  bilan: [
    { q: 'Complétez : « It ___ working last night. »', cible: true,
      opts: ['stopped', 'has stopped', 'was stop'],
      a: 0, why: '« last night » → past simple.', rev: 'It stopped working last night.' },
    { q: '« J\'ai appelé deux fois depuis. »', cible: true,
      opts: ["I've called twice since then.", 'I called twice since then.', 'I have call twice since.'],
      a: 0, why: '« since » relie au présent → present perfect.', rev: "I've called twice since then." },
    { q: '« Je crains que la douche ne marche pas. »', cible: true,
      opts: ["I'm afraid the shower isn't working.", "I fear the shower doesn't work.", "I'm scared the shower not works."],
      a: 0, why: '« I\'m afraid… » est la formule polie pour annoncer un problème.', rev: "I'm afraid… isn't working." },
    { q: '« Offert par la maison »', cible: true,
      opts: ['on the house', 'free of house', 'by the house'],
      a: 0, why: 'Expression figée : « on the house ».', rev: 'on the house' },
    { q: '« Serait-il possible de changer de chambre ? »', cible: true,
      opts: ['Could I possibly change rooms?', 'Can I possible change room?', 'Would I change a room?'],
      a: 0, why: '« Could I possibly + verbe ? » ; et on dit « change rooms » au pluriel.', rev: 'Could I possibly change rooms?' },
    { q: '« Je suis ici depuis lundi. »', cible: true,
      opts: ["I've been here since Monday.", "I'm here since Monday.", "I've been here for Monday."],
      a: 0, why: '« depuis » → present perfect + « since » (point de départ).', rev: "I've been here since Monday." },
    { q: 'Que signifie « to make up for it » ?',
      opts: ['Pour compenser', 'Pour se maquiller', 'Pour inventer une excuse'],
      a: 0, why: '« make up for something » = compenser quelque chose.', rev: 'to make up for it' },
    { q: '« Désolé pour le désagrément. »', cible: true,
      opts: ['Sorry for the inconvenience.', 'Sorry for the disagreement.', 'Sorry for the unpleasure.'],
      a: 0, why: '« disagreement » = désaccord (faux ami).', rev: 'Sorry for the inconvenience.' }
  ],

  conseil: '« <span lang="en">I\'m afraid…</span> » ne parle pas de peur : c\'est la façon la plus polie d\'annoncer une mauvaise nouvelle. « <span lang="en">I\'m afraid the Wi-Fi isn\'t working.</span> » Brilliant, isn\'t it?'
};
