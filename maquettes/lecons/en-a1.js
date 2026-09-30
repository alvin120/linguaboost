// Leçon A1 « Au café » — anglais (variantes US / UK).
window.LECONS = window.LECONS || {};
window.LECONS['en-A1'] = {
  niveau: 'A1', theme: 'Au café', etape1: 'Camille commande au café',
  intro: 'Camille entre dans un café, à {ville}.',
  indiceOrdre: 'le serveur accueille Camille, puis elle commande.',
  badge: { nom: 'Barista', icone: '☕' },
  lang: 'en', langue: 'anglais', prof: 'emma', profNom: 'Emma', profInitiale: 'E',
  titre: 'Unit 1 · At the café',
  variantes: [
    { k: 'us', label: '🇺🇸 US', speech: 'en-US', code: 'US' },
    { k: 'uk', label: '🇬🇧 UK', speech: 'en-GB', code: 'UK' }
  ],
  ville: { us: 'New York', uk: 'Londres' },
  personnages: { C: { nom: 'Camille', init: 'CM' }, R: { nom: 'Serveur', init: 'S' } },
  noteVariantes: '<strong>🇺🇸 / 🇬🇧 Ce qui change selon la variante</strong><p style="margin:6px 0 0;font-size:15px;">Les passages <span class="diff">surlignés</span> changent entre l\'anglais américain et britannique. « Sur place ou à emporter ? » se dit <i lang="en">for here or to go?</i> 🇺🇸 mais <i lang="en">to eat in or take away?</i> 🇬🇧. Et on paie en dollars ou en livres (<i lang="en">pounds</i>).</p>',

  dialogue: [
    { who: 'R', seg: [{d:{us:'Hi! What can I get you?', uk:'Hello! What can I get you?'}}],
      fr: 'Bonjour ! Qu\'est-ce que je vous sers ?' },
    { who: 'C', seg: ['Hi. Can I have a ', {w:'coffee'}, ', please?'],
      fr: 'Bonjour. Je peux avoir un café, s\'il vous plaît ?' },
    { who: 'R', seg: ['Sure. Small or large?'],
      fr: 'Bien sûr. Petit ou grand ?' },
    { who: 'C', seg: ['Small, please. And ', {d:{us:'a muffin', uk:'a scone'}}, '.'],
      fr: 'Un petit, s\'il vous plaît. Et un muffin (UK : un scone, un petit pain anglais).' },
    { who: 'R', seg: ['Is that ', {d:{us:'for here or to go', uk:'to eat in or take away'}}, '?'],
      fr: 'C\'est pour consommer sur place ou à emporter ?' },
    { who: 'C', seg: [{d:{us:'For here', uk:'To eat in'}}, ', please. ', {w:'How much is it'}, '?'],
      fr: 'Sur place, s\'il vous plaît. C\'est combien ?' },
    { who: 'R', seg: [{d:{us:"That's six fifty.", uk:"That's four pounds fifty."}}],
      fr: 'Ça fait 6,50 dollars (UK : 4,50 livres).' },
    { who: 'C', seg: ['Here you are. Can I pay by ', {w:'card'}, '?'],
      fr: 'Voilà. Je peux payer par carte ?' },
    { who: 'R', seg: ['Yes, of course. Here is your ', {w:'receipt'}, '.'],
      fr: 'Oui, bien sûr. Voici votre ticket.' },
    { who: 'C', seg: ['Thank you!'],
      fr: 'Merci !' },
    { who: 'R', seg: [{d:{us:"You're welcome. Have a nice day!", uk:'No problem. Have a lovely day!'}}],
      fr: 'Je vous en prie. Bonne journée !' }
  ],

  glossaire: {
    coffee:           { word: 'coffee', ipa: {us:'/ˈkɔfi/', uk:'/ˈkɒfi/'}, tr: 'un café', v: 0 },
    'How much is it': { word: 'How much is it', ipa: '/haʊ mʌtʃ ɪz ɪt/', tr: 'C\'est combien ? (pour demander un prix)', v: 4 },
    card:             { word: 'card', ipa: {us:'/kɑrd/', uk:'/kɑːd/'}, tr: 'la carte (bancaire)', v: 5 },
    receipt:          { word: 'receipt', ipa: '/rɪˈsiːt/', tr: 'le ticket de caisse. Le « p » ne se prononce pas !', v: 6 }
  },

  vocabulaire: [
    { en: 'Can I have a coffee, please?', fr: 'Je peux avoir un café, s\'il vous plaît ?', ex: 'Can I have a tea, please?' },
    { en: 'small / medium / large', fr: 'petit / moyen / grand', ex: 'A large coffee, please.' },
    { en: {us:'a muffin', uk:'a scone'}, fr: 'une pâtisserie (muffin 🇺🇸, scone 🇬🇧)', ex: {us:'A blueberry muffin, please.', uk:'A scone with jam, please.'} },
    { en: {us:'for here or to go?', uk:'to eat in or take away?'}, fr: 'sur place ou à emporter ?', ex: {us:'Is that for here or to go?', uk:'Is that to eat in or take away?'} },
    { en: 'How much is it?', fr: 'C\'est combien ?', ex: 'How much is the muffin?' },
    { en: 'Can I pay by card?', fr: 'Je peux payer par carte ?', ex: 'Can I pay by card, please?' },
    { en: 'the receipt', fr: 'le ticket de caisse', ex: 'Here is your receipt.' },
    { en: 'Here you are.', fr: 'Voilà. / Tenez. (en donnant quelque chose)', ex: '"Here you are." — "Thank you!"' },
    { en: 'Have a nice day!', fr: 'Bonne journée !', ex: 'Thanks, have a nice day!' },
    { en: 'a glass of water', fr: 'un verre d\'eau', ex: 'Can I have a glass of water, please?' }
  ],

  comprehension: [
    { q: 'Que commande Camille ?',
      opts: ['Un petit café et une pâtisserie', 'Un grand thé', 'Un café et un verre d\'eau'],
      a: 0, why: '« Can I have a coffee? » puis « Small, please. And a muffin / a scone. »' },
    { q: 'Où Camille mange-t-elle ?',
      opts: ['Sur place', 'À emporter', 'Elle ne mange pas'],
      a: 0, why: '« For here » 🇺🇸 / « To eat in » 🇬🇧 = sur place.' },
    { q: 'Comment paie-t-elle ?',
      opts: ['Par carte', 'En espèces', 'Elle ne paie pas'],
      a: 0, why: '« Can I pay by card? » — « Yes, of course. »' }
  ],

  grammaireTitre: 'Commander : <span lang="en">a / an</span> et « <span lang="en">Can I have…?</span> »',
  grammaire: '<div class="rule"><strong>La règle</strong><br>Pour dire « un / une », on emploie <span lang="en"><b>a</b></span> devant un <b>son consonne</b> (<span lang="en">a coffee, a muffin</span>) et <span lang="en"><b>an</b></span> devant un <b>son voyelle</b> (<span lang="en">an orange juice, an egg</span>).<br>Pour commander : <span lang="en"><b>Can I have</b> + a / an + nom + <b>please</b>?</span></div>' +
    '<div class="table-scroll"><table class="g-table"><thead><tr><th>Anglais</th><th>Français</th><th>Pourquoi</th></tr></thead><tbody>' +
    '<tr><td lang="en">a tea</td><td>un thé</td><td>« t » : son consonne</td></tr>' +
    '<tr><td lang="en">an orange juice</td><td>un jus d\'orange</td><td>« o » : son voyelle</td></tr>' +
    '<tr><td lang="en">an hour</td><td>une heure</td><td>le « h » est muet : son voyelle</td></tr>' +
    '<tr><td lang="en">a university</td><td>une université</td><td>« you » : son consonne</td></tr></tbody></table></div>' +
    '<h3 class="g-h3">🇫🇷 Comparaison avec le français</h3><p>En anglais, <span lang="en">a / an</span> ne change pas selon le genre : <span lang="en">a coffee</span> (un café), <span lang="en">a beer</span> (une bière). Ce qui compte, c\'est le <b>son</b> du mot suivant, pas la lettre.</p>' +
    '<h3 class="g-h3">⚠️ Erreurs typiques des francophones</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Erreur</th><th>Correction</th><th>Pourquoi</th></tr></thead><tbody>' +
    '<tr><td lang="en"><del>a orange juice</del></td><td lang="en"><ins>an orange juice</ins></td><td>« orange » commence par un son voyelle.</td></tr>' +
    '<tr><td lang="en"><del>I want a coffee.</del></td><td lang="en"><ins>Can I have a coffee, please?</ins></td><td><span lang="en">I want</span> sonne comme un ordre.</td></tr>' +
    '<tr><td lang="en"><del>Can I to have a tea?</del></td><td lang="en"><ins>Can I have a tea?</ins></td><td>Jamais de <span lang="en">to</span> après <span lang="en">can</span>.</td></tr></tbody></table></div>',
  exGrammaire: {
    phrase: 'Can I have ___ orange juice, please?',
    options: ['an', 'a', 'the'], bonne: 'an',
    retours: {
      an: '✅ « an orange juice » : « orange » commence par un son voyelle.',
      a: '❌ « orange » commence par un son voyelle : on dit « an orange juice ».',
      the: '❌ « the » = « le / la » : pour commander, on dit « a / an ».'
    }
  },

  trous: [
    { before: 'Can I', opts: ['have', 'has', 'having'], a: 'have', after: 'a coffee, please?', why: 'Après « Can I », le verbe reste à la base : « have ».' },
    { before: 'Can I have', opts: ['an', 'a', 'the'], a: 'an', after: 'egg sandwich?', why: '« egg » commence par un son voyelle : « an ».' },
    { before: 'How', opts: ['much', 'many', 'long'], a: 'much', after: 'is it?', why: '« How much…? » = « Combien ça coûte ? ».' },
    { before: 'Can I pay', opts: ['by', 'in', 'of'], a: 'by', after: 'card?', why: '« pay by card » = payer par carte.' }
  ],
  paires: { a: 'ship', b: 'sheep',
    aide: 'Écoutez le mot, puis choisissez ce que vous avez entendu. <span lang="en">ship</span> (bateau) : « i » court et relâché ; <span lang="en">sheep</span> (mouton) : « i » long et tendu, comme « ii ».' },

  jeuDeRole: {
    texte: 'Vous entrez dans un café. Commandez une boisson et quelque chose à manger, demandez le prix et payez. Emma joue le serveur et vous corrige à la fin de la scène.',
    sujet: 'Au café : je commande une boisson et quelque chose à manger, je demande le prix et je paie. Tu joues le serveur.'
  },
  redaction: {
    consigne: 'Écrivez ce que vous dites au serveur pour commander <b>un thé</b> et <b>un croissant</b>, puis demander <b>le prix</b>.',
    placeholder: 'Hi, …',
    criteres: [
      [/\bcan i have\b|\bcould i have\b|\bi'?d like\b/, "Une formule pour commander (Can I have… ? / I'd like…)"],
      [/\bplease\b/, '« please »'],
      [/\ba tea\b/, '« a tea »'],
      [/\ba croissant\b/, '« a croissant »'],
      [/\bhow much\b/, 'La question du prix (How much…?)'],
      [/\bi want\b/, '« I want » (trop direct, à éviter)', true]
    ],
    modele: { us: 'Hi! Can I have a tea and a croissant, please? How much is it?', uk: 'Hello! Can I have a tea and a croissant, please? How much is it?' }
  },

  cultureTitre: 'Au café, aux États-Unis et au Royaume-Uni',
  culture: '<div class="card block"><h3 class="ex-title">🧾 Commander et payer</h3>' +
    '<p><b>🇺🇸 États-Unis :</b> dans un <i lang="en">coffee shop</i>, on commande et on paie au comptoir. On vous demande souvent votre prénom, écrit sur le gobelet, puis on vous appelle. Un pot à pourboires (<i lang="en">tip jar</i>) est souvent posé près de la caisse : ce n\'est pas obligatoire.</p>' +
    '<p style="margin:0;"><b>🇬🇧 Royaume-Uni :</b> le thé est une institution, souvent servi avec du lait. Au pub, on commande au bar : pas de service à table. Et « <i lang="en">Cheers!</i> » veut aussi dire « merci ».</p></div>' +
    '<div class="card block"><h3 class="ex-title">🗣️ Les mots qui changent</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Français</th><th>🇺🇸 États-Unis</th><th>🇬🇧 Royaume-Uni</th></tr></thead><tbody>' +
    '<tr><td>à emporter</td><td lang="en">to go</td><td lang="en">take away</td></tr>' +
    '<tr><td>l\'addition</td><td lang="en">the check</td><td lang="en">the bill</td></tr>' +
    '<tr><td>un biscuit</td><td lang="en">a cookie</td><td lang="en">a biscuit</td></tr>' +
    '<tr><td>des frites</td><td lang="en">fries</td><td lang="en">chips</td></tr>' +
    '<tr><td>des chips</td><td lang="en">chips</td><td lang="en">crisps</td></tr></tbody></table></div></div>',
  cultureQuiz: [
    { q: 'Au Royaume-Uni, « chips » désigne…',
      opts: ['Des frites', 'Des chips', 'Des biscuits'],
      a: 0, why: '« chips » 🇬🇧 = frites (🇺🇸 « fries ») ; les chips se disent « crisps » au Royaume-Uni.' },
    { q: 'Aux États-Unis, « to go » après une commande signifie…',
      opts: ['À emporter', 'Sur place', 'Allons-y'],
      a: 0, why: '« A coffee to go » = un café à emporter.' }
  ],

  bilan: [
    { q: '« Je peux avoir un café, s\'il vous plaît ? »', cible: true,
      opts: ['Can I have a coffee, please?', 'I want coffee.', 'Can I to have a coffee?'],
      a: 0, why: '« Can I have…, please? » est la formule polie, sans « to ».', rev: 'Can I have a coffee, please?' },
    { q: 'Complétez : « ___ orange juice »', cible: true,
      opts: ['an', 'a', 'the'],
      a: 0, why: '« orange » commence par un son voyelle : « an ».', rev: 'an orange juice' },
    { q: '« C\'est combien ? »', cible: true,
      opts: ['How much is it?', 'How many is it?', 'What costs it?'],
      a: 0, why: '« How much » pour un prix ; « how many » pour compter des choses.', rev: 'How much is it?' },
    { q: 'Aux États-Unis, « à emporter » se dit…', cible: true,
      opts: ['to go', 'to leave', 'to carry'],
      a: 0, why: '« to go » 🇺🇸, « take away » 🇬🇧.', rev: {us:'to go', uk:'take away'} },
    { q: '« Voilà, tenez. » (en donnant l\'argent)', cible: true,
      opts: ['Here you are.', 'Here are you.', 'Hold it.'],
      a: 0, why: '« Here you are » : ordre des mots fixe.', rev: 'Here you are.' },
    { q: '« Le ticket de caisse »', cible: true,
      opts: ['the receipt', 'the ticket', 'the recipe'],
      a: 0, why: '« ticket » = billet ; « recipe » = recette de cuisine (faux ami).', rev: 'the receipt' },
    { q: 'Complétez : « Can I pay ___ card? »', cible: true,
      opts: ['by', 'in', 'of'],
      a: 0, why: '« pay by card » = payer par carte.', rev: 'Can I pay by card?' },
    { q: '« Bonne journée ! »', cible: true,
      opts: ['Have a nice day!', 'Good journey!', 'Nice to meet you!'],
      a: 0, why: '« Nice to meet you » = « Enchanté » ; « journey » = voyage.', rev: 'Have a nice day!' }
  ],

  conseil: '« <span lang="en">Can I have…, please?</span> » : avec cette seule formule, vous pouvez commander partout, au café comme au restaurant. Et n\'oubliez jamais le « <span lang="en">please</span> » !'
};
