// Leçon C1 « Négociation commerciale » — anglais (variantes US / UK).
window.LECONS = window.LECONS || {};
window.LECONS['en-C1'] = {
  niveau: 'C1', theme: 'Négociation commerciale', etape1: 'Camille négocie avec une cliente',
  intro: 'Camille, devenue responsable des groupes dans un hôtel de {ville}, reçoit une cliente qui veut réserver pour un séminaire.',
  indiceOrdre: 'Camille accueille la cliente, puis celle-ci présente sa demande.',
  badge: { nom: 'Négociatrice', icone: '📈' },
  lang: 'en', langue: 'anglais', prof: 'emma', profNom: 'Emma', profInitiale: 'E',
  titre: 'Unit 12 · Closing the deal',
  variantes: [
    { k: 'us', label: '🇺🇸 US', speech: 'en-US', code: 'US' },
    { k: 'uk', label: '🇬🇧 UK', speech: 'en-GB', code: 'UK' }
  ],
  ville: { us: 'Boston', uk: 'Londres' },
  personnages: { C: { nom: 'Camille', init: 'CM' }, R: { nom: 'Cliente', init: 'CL' } },
  noteVariantes: '<strong>🇺🇸 / 🇬🇧 Ce qui change selon la variante</strong><p style="margin:6px 0 0;font-size:15px;">À ce niveau, les différences sont surtout d\'orthographe et de ponctuation : <i lang="en">program</i> 🇺🇸 / <i lang="en">programme</i> 🇬🇧, et <i lang="en">Ms.</i> avec un point 🇺🇸, <i lang="en">Ms</i> sans point 🇬🇧.</p>',

  dialogue: [
    { who: 'C', seg: ['Thank you for ', {w:'taking the time'}, ' to meet with us, ', {d:{us:'Ms. Hughes', uk:'Ms Hughes'}}, '.'],
      fr: 'Merci de prendre le temps de nous rencontrer, Madame Hughes.' },
    { who: 'R', seg: ["My pleasure. We're planning a three-day seminar for sixty people, and frankly, your rates are a little above our budget."],
      fr: 'Avec plaisir. Nous organisons un séminaire de trois jours pour soixante personnes et, franchement, vos tarifs dépassent un peu notre budget.' },
    { who: 'C', seg: ['I understand. ', {w:'Should you'}, ' book all sixty rooms, we could offer a fifteen percent discount.'],
      fr: 'Je comprends. Si vous réserviez les soixante chambres, nous pourrions vous offrir quinze pour cent de remise.' },
    { who: 'R', seg: ["That's a step in the right direction. ", {w:'Had we known'}, " about this offer earlier, we wouldn't have considered other venues."],
      fr: 'C\'est un pas dans la bonne direction. Si nous avions connu cette offre plus tôt, nous n\'aurions pas envisagé d\'autres lieux.' },
    { who: 'C', seg: ["I'm glad to hear that. We could also include the meeting rooms, ", {w:'provided that'}, ' you confirm by Friday.'],
      fr: 'J\'en suis ravie. Nous pourrions aussi inclure les salles de réunion, à condition que vous confirmiez d\'ici vendredi.' },
    { who: 'R', seg: ['Friday is ', {w:'tight'}, '. ', {w:'Were we to'}, ' confirm on Monday, would the offer still ', {w:'stand'}, '?'],
      fr: 'Vendredi, c\'est serré. Si nous confirmions lundi, l\'offre tiendrait-elle toujours ?' },
    { who: 'C', seg: ["I'd have to check with my manager, but I'm ", {w:'fairly confident'}, ' we can ', {w:'accommodate'}, ' that.'],
      fr: 'Je devrais vérifier avec ma responsable, mais je suis assez confiante : nous pourrons l\'accepter.' },
    { who: 'R', seg: ['In that case, could you send me a ', {w:'written proposal'}, ' with the full ', {d:{us:'program', uk:'programme'}}, '?'],
      fr: 'Dans ce cas, pourriez-vous m\'envoyer une proposition écrite avec le programme complet ?' },
    { who: 'C', seg: ["Absolutely. You'll have it by the end of the day."],
      fr: 'Absolument. Vous l\'aurez d\'ici la fin de la journée.' },
    { who: 'R', seg: ["Perfect. I think we're ", {w:'on the same page'}, '.'],
      fr: 'Parfait. Je pense que nous sommes sur la même longueur d\'onde.' }
  ],

  glossaire: {
    'taking the time':   { word: 'taking the time', tr: 'prendre le temps', v: 0 },
    'Should you':        { word: 'Should you', tr: 'Si jamais vous… Inversion soutenue de « If you should… »', v: 1 },
    'Had we known':      { word: 'Had we known', tr: 'Si nous avions su. Inversion soutenue de « If we had known… »', v: 2 },
    'provided that':     { word: 'provided that', ipa: '/prəˈvaɪdɪd ðæt/', tr: 'à condition que', v: 3 },
    tight:               { word: 'tight', ipa: '/taɪt/', tr: 'serré, juste (pour un délai)', v: 4 },
    'Were we to':        { word: 'Were we to', tr: 'Si nous devions… Inversion soutenue de « If we were to… »', v: 5 },
    stand:               { word: 'stand', tr: 'tenir, rester valable (pour une offre)', v: 6 },
    'fairly confident':  { word: 'fairly confident', tr: 'assez confiant(e), plutôt sûr(e)', v: 7 },
    accommodate:         { word: 'accommodate', ipa: '/əˈkɒmədeɪt/', tr: 'répondre favorablement à (une demande), s\'adapter à', v: 8 },
    'written proposal':  { word: 'written proposal', tr: 'une proposition écrite, un devis' },
    'on the same page':  { word: 'on the same page', tr: 'sur la même longueur d\'onde, d\'accord', v: 9 }
  },

  vocabulaire: [
    { en: 'Thank you for taking the time to…', fr: 'Merci de prendre le temps de…', ex: 'Thank you for taking the time to read this.' },
    { en: 'Should you need anything, …', fr: 'Si vous aviez besoin de quoi que ce soit, …', ex: 'Should you have any questions, please contact me.' },
    { en: 'Had we known, we would have…', fr: 'Si nous avions su, nous aurions…', ex: 'Had I known, I would have called you.' },
    { en: 'provided that…', fr: 'à condition que…', ex: 'We can do it, provided that you confirm today.' },
    { en: 'The deadline is tight.', fr: 'Le délai est serré.', ex: 'Friday is a bit tight for us.' },
    { en: 'Were we to…, would…?', fr: 'Si nous devions…, est-ce que… ?', ex: 'Were you to cancel, there would be a fee.' },
    { en: 'The offer still stands.', fr: 'L\'offre tient toujours.', ex: 'Does your offer still stand?' },
    { en: "I'm fairly confident that…", fr: 'Je suis assez confiante que…', ex: "I'm fairly confident we'll reach an agreement." },
    { en: 'to accommodate a request', fr: 'répondre favorablement à une demande', ex: 'We can easily accommodate groups of sixty.' },
    { en: "We're on the same page.", fr: 'Nous sommes sur la même longueur d\'onde.', ex: "Let's make sure we're on the same page." }
  ],

  comprehension: [
    { q: 'Que veut la cliente ?',
      opts: ['Organiser un séminaire de 3 jours pour 60 personnes', 'Réserver une chambre pour ses vacances', 'Annuler une réservation'],
      a: 0, why: '« a three-day seminar for sixty people ».' },
    { q: 'Que propose Camille ?',
      opts: ['15 % de remise pour les 60 chambres, et les salles de réunion incluses', 'Une nuit gratuite', 'Le petit-déjeuner offert'],
      a: 0, why: '« a fifteen percent discount… We could also include the meeting rooms ».' },
    { q: 'Sur quoi porte la fin de la négociation ?',
      opts: ['La date de confirmation : vendredi ou lundi', 'Le prix des repas', 'Le nombre de participants'],
      a: 0, why: '« Friday is tight. Were we to confirm on Monday… »' }
  ],

  grammaireTitre: 'Le registre soutenu : l\'inversion dans les conditions',
  grammaire: '<div class="rule"><strong>La règle</strong><br>En anglais formel, on supprime <span lang="en">if</span> et on <b>inverse</b> le sujet et l\'auxiliaire :<br><span lang="en">If you should need… → <b>Should you</b> need…</span> (éventualité)<br><span lang="en">If we had known… → <b>Had we</b> known…</span> (irréel du passé)<br><span lang="en">If we were to confirm… → <b>Were we to</b> confirm…</span> (hypothèse)<br>Le sens ne change pas : c\'est le ton qui devient plus professionnel.</div>' +
    '<div class="table-scroll"><table class="g-table"><thead><tr><th>Courant</th><th>Soutenu</th><th>Français</th></tr></thead><tbody lang="en">' +
    '<tr><td>If you need help, call me.</td><td>Should you need help, call me.</td><td lang="fr">Si vous avez besoin d\'aide, appelez-moi.</td></tr>' +
    '<tr><td>If we had known, we would have come.</td><td>Had we known, we would have come.</td><td lang="fr">Si nous avions su, nous serions venus.</td></tr>' +
    '<tr><td>If they cancelled, we would lose money.</td><td>Were they to cancel, we would lose money.</td><td lang="fr">S\'ils annulaient, nous perdrions de l\'argent.</td></tr>' +
    '<tr><td>as long as you confirm</td><td>provided that you confirm</td><td lang="fr">à condition que vous confirmiez</td></tr></tbody></table></div>' +
    '<h3 class="g-h3">🇫🇷 Comparaison avec le français</h3><p>Le français connaît aussi l\'inversion littéraire (« Eussions-nous su… »), mais elle est très rare. En anglais, <span lang="en">Should you…</span> est au contraire très fréquent dans les e-mails professionnels : c\'est la marque d\'un anglais C1 soigné.</p>' +
    '<h3 class="g-h3">⚠️ Erreurs typiques des francophones</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Erreur</th><th>Correction</th><th>Pourquoi</th></tr></thead><tbody>' +
    '<tr><td lang="en"><del>If had we known…</del></td><td lang="en"><ins>Had we known…</ins></td><td>Avec l\'inversion, <span lang="en">if</span> disparaît.</td></tr>' +
    '<tr><td lang="en"><del>Should you needed anything…</del></td><td lang="en"><ins>Should you need anything…</ins></td><td>Après <span lang="en">should</span> : base verbale.</td></tr>' +
    '<tr><td lang="en"><del>Were we confirm on Monday…</del></td><td lang="en"><ins>Were we to confirm on Monday…</ins></td><td><span lang="en">Were + sujet + to</span> + verbe.</td></tr></tbody></table></div>',
  exGrammaire: {
    phrase: '___ you need any further information, please let me know.',
    options: ['Should', 'Would', 'Had'], bonne: 'Should',
    retours: {
      Should: '✅ « Should you need… » = « Si vous aviez besoin… », version soutenue de « If you need… ».',
      Would: '❌ « Would » ne s\'emploie pas en inversion pour une condition. On dit « Should you need… ».',
      Had: '❌ « Had you… » exprime l\'irréel du passé (« Had you told me… ») ; ici, c\'est une éventualité : « Should ».'
    }
  },

  trous: [
    { before: '', opts: ['Had', 'Have', 'Should'], a: 'Had', after: 'we known, we would have booked earlier.', why: 'Irréel du passé : Had + sujet + participe passé.' },
    { before: 'Were we', opts: ['to', 'for', 'that'], a: 'to', after: 'confirm on Monday, would the offer stand?', why: '« Were + sujet + to + verbe ».' },
    { before: 'We can include the rooms,', opts: ['provided', 'provide', 'providing to'], a: 'provided', after: 'that you confirm by Friday.', why: '« provided that » = à condition que.' },
    { before: "I think we're on the same", opts: ['page', 'line', 'wave'], a: 'page', after: '.', why: 'Expression idiomatique : « on the same page ».' }
  ],
  paires: { a: 'desert', b: 'dessert',
    aide: 'Écoutez le mot, puis choisissez ce que vous avez entendu. <span lang="en">desert</span> (désert) : accent sur « DE » ; <span lang="en">dessert</span> (le dessert) : accent sur « SERT ».' },

  jeuDeRole: {
    texte: 'Négociez un contrat : vous représentez un hôtel, et une cliente veut une remise pour un séminaire. Utilisez les formules soutenues (Should you…, provided that…). Emma joue la cliente exigeante.',
    sujet: 'Négociation commerciale : je représente un hôtel, tu joues une cliente exigeante qui veut une remise pour un séminaire de 60 personnes. Registre professionnel soutenu.'
  },
  redaction: {
    consigne: 'Écrivez un e-mail professionnel à la cliente pour confirmer l\'offre : <b>une remise sous condition</b>, <b>une date limite</b> et <b>une formule soutenue</b> avec inversion (Should you…).',
    placeholder: 'Dear Ms Hughes, …',
    criteres: [
      [/\bshould you\b|\bwere you to\b|\bhad (you|we) \w+/, 'Une inversion soutenue (Should you… / Were you to…)'],
      [/\bprovided (that)?\b|\bas long as\b|\bon condition that\b/, 'Une condition (provided that…)'],
      [/\b\d+ ?(%|percent|per cent)|\bdiscount\b/, 'La remise (discount, 15 %)'],
      [/\bby (monday|tuesday|wednesday|thursday|friday|the end)\b|\bdeadline\b/, 'Une date limite (by Monday…)'],
      [/\b(kind regards|best regards|yours sincerely|sincerely)\b/, 'Une formule de fin professionnelle'],
      [/\bif should you\b|\bif had we\b|\bif were we\b/, '« if » + inversion (avec l\'inversion, on enlève « if »)', true]
    ],
    modele: {
      us: 'Dear Ms. Hughes, Thank you for taking the time to meet with us. As discussed, we can offer a 15% discount on all sixty rooms, provided that you confirm by Monday. The meeting rooms would be included. Should you need any further information, please let me know. Best regards, Camille Martin',
      uk: 'Dear Ms Hughes, Thank you for taking the time to meet with us. As discussed, we can offer a 15% discount on all sixty rooms, provided that you confirm by Monday. The meeting rooms would be included. Should you need any further information, please let me know. Kind regards, Camille Martin'
    }
  },

  cultureTitre: 'Négocier à l\'américaine et à la britannique',
  culture: '<div class="card block"><h3 class="ex-title">🤝 Deux styles</h3>' +
    '<p><b>🇺🇸 États-Unis :</b> direct et orienté résultats. On parle chiffres rapidement, on cherche le <i lang="en">win-win</i> et on reformule pour vérifier (« <i lang="en">So what I\'m hearing is…</i> »). Un « non » peut être dit franchement.</p>' +
    '<p style="margin:0;"><b>🇬🇧 Royaume-Uni :</b> indirect. Le désaccord se cache derrière la politesse : il faut savoir décoder.</p></div>' +
    '<div class="card block"><h3 class="ex-title">🔍 Ce qu\'ils disent, ce qu\'ils veulent dire 🇬🇧</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Ce qu\'on entend</th><th>Ce que ça veut souvent dire</th></tr></thead><tbody>' +
    '<tr><td lang="en">That\'s an interesting proposal.</td><td>Je ne suis pas convaincu.</td></tr>' +
    '<tr><td lang="en">I\'ll bear it in mind.</td><td>Je vais probablement l\'oublier.</td></tr>' +
    '<tr><td lang="en">With all due respect…</td><td>Je pense que vous avez tort.</td></tr>' +
    '<tr><td lang="en">Perhaps you could consider…</td><td>Faites-le.</td></tr></tbody></table></div></div>',
  cultureQuiz: [
    { q: 'Un Britannique répond : « I\'ll bear it in mind. » Cela veut souvent dire…',
      opts: ['Probablement non', 'Oui, c\'est d\'accord', 'Il en parle à son chef demain'],
      a: 0, why: 'Formule polie qui enterre souvent la proposition.' },
    { q: '« With all due respect… » annonce…',
      opts: ['Un désaccord', 'Un compliment', 'Une question'],
      a: 0, why: 'Malgré les apparences, la formule introduit un désaccord marqué.' }
  ],

  bilan: [
    { q: '« Si nous avions su, nous aurions réservé plus tôt. » (soutenu)', cible: true,
      opts: ['Had we known, we would have booked earlier.', 'Had we know, we would booked earlier.', 'If had we known, we would have booked earlier.'],
      a: 0, why: 'Had + sujet + participe passé, sans « if ».', rev: 'Had we known, we would have…' },
    { q: 'Complétez : « ___ you need anything, please let me know. »', cible: true,
      opts: ['Should', 'Would', 'Could'],
      a: 0, why: '« Should you need… » = « Si vous aviez besoin… ».', rev: 'Should you need anything, …' },
    { q: '« à condition que vous confirmiez d\'ici vendredi »', cible: true,
      opts: ['provided that you confirm by Friday', 'provided you will confirmed Friday', 'providing that you confirming Friday'],
      a: 0, why: '« provided that » + présent.', rev: 'provided that…' },
    { q: '« L\'offre tient toujours. »', cible: true,
      opts: ['The offer still stands.', 'The offer still holds on.', 'The offer is still standing up.'],
      a: 0, why: 'Expression figée : « the offer stands ».', rev: 'The offer still stands.' },
    { q: '« Nous sommes sur la même longueur d\'onde. »', cible: true,
      opts: ["We're on the same page.", "We're on the same wave.", "We're on the same length."],
      a: 0, why: 'Expression idiomatique : « on the same page ».', rev: "We're on the same page." },
    { q: 'Que signifie « the deadline is tight » ?',
      opts: ['Le délai est serré', 'La date est fixée', 'Le délai est dépassé'],
      a: 0, why: '« tight » = serré.', rev: 'The deadline is tight.' },
    { q: '« Si nous devions confirmer lundi… »', cible: true,
      opts: ['Were we to confirm on Monday…', 'Were we confirm on Monday…', 'Was we to confirm on Monday…'],
      a: 0, why: '« Were + sujet + to + verbe ».', rev: 'Were we to…, would…?' },
    { q: 'Aux États-Unis, « programme » s\'écrit…', cible: true,
      opts: ['program', 'programme', 'programm'],
      a: 0, why: '« program » 🇺🇸, « programme » 🇬🇧 (sauf « computer program », écrit « program » partout).', rev: {us:'program', uk:'programme'} }
  ],

  conseil: '« <span lang="en">Should you have any questions…</span> » : placez cette phrase à la fin de vos e-mails professionnels, elle sonne immédiatement plus soutenu que « <span lang="en">If you have any questions</span> ». Spot on!'
};
