// Leçon B2 « Entretien d'embauche » — anglais (variantes US / UK).
window.LECONS = window.LECONS || {};
window.LECONS['en-B2'] = {
  niveau: 'B2', theme: 'Entretien d\'embauche', etape1: 'Camille passe un entretien',
  intro: 'Camille postule comme responsable de l\'accueil dans un hôtel de {ville}. Son entretien commence.',
  indiceOrdre: 'le recruteur accueille Camille, puis lui demande de se présenter.',
  badge: { nom: 'Recrutée', icone: '💼' },
  lang: 'en', langue: 'anglais', prof: 'emma', profNom: 'Emma', profInitiale: 'E',
  titre: 'Unit 9 · The job interview',
  variantes: [
    { k: 'us', label: '🇺🇸 US', speech: 'en-US', code: 'US' },
    { k: 'uk', label: '🇬🇧 UK', speech: 'en-GB', code: 'UK' }
  ],
  ville: { us: 'San Francisco', uk: 'Édimbourg' },
  personnages: { C: { nom: 'Camille', init: 'CM' }, R: { nom: 'Recruteur', init: 'R' } },
  noteVariantes: '<strong>🇺🇸 / 🇬🇧 Ce qui change selon la variante</strong><p style="margin:6px 0 0;font-size:15px;">Le CV se dit <i lang="en">résumé</i> 🇺🇸 et <i lang="en">CV</i> 🇬🇧 ; le planning, <i lang="en">schedule</i> 🇺🇸 et <i lang="en">rota</i> 🇬🇧 ; la réception, <i lang="en">front desk</i> 🇺🇸 et <i lang="en">reception desk</i> 🇬🇧.</p>',

  dialogue: [
    { who: 'R', seg: ['Thanks for coming in, Camille. Could you tell me a bit about yourself?'],
      fr: 'Merci d\'être venue, Camille. Pouvez-vous me parler un peu de vous ?' },
    { who: 'C', seg: ["Of course. I've ", {w:'been working'}, ' in hospitality for six years, mostly on the ', {d:{us:'front desk', uk:'reception desk'}}, '.'],
      fr: 'Bien sûr. Je travaille dans l\'hôtellerie depuis six ans, surtout à la réception.' },
    { who: 'R', seg: ['And what have you been doing ', {w:'lately'}, '?'],
      fr: 'Et que faites-vous ces derniers temps ?' },
    { who: 'C', seg: ["For the past two years, I've been managing a small team in Lyon, and I've trained four new receptionists."],
      fr: 'Depuis deux ans, je dirige une petite équipe à Lyon, et j\'ai formé quatre nouveaux réceptionnistes.' },
    { who: 'R', seg: ['Impressive. How do you ', {w:'handle'}, ' difficult guests?'],
      fr: 'Impressionnant. Comment gérez-vous les clients difficiles ?' },
    { who: 'C', seg: ['I listen first, ', {w:'acknowledge'}, ' the problem, and then I focus on a solution. Staying calm is key.'],
      fr: 'J\'écoute d\'abord, je reconnais le problème, puis je me concentre sur une solution. Rester calme, c\'est essentiel.' },
    { who: 'R', seg: ['Why do you want to ', {w:'move abroad'}, '?'],
      fr: 'Pourquoi voulez-vous partir à l\'étranger ?' },
    { who: 'C', seg: ["I'm really ", {w:'looking forward to'}, ' working in an international environment, and your hotel has an excellent reputation.'],
      fr: 'J\'ai vraiment hâte de travailler dans un environnement international, et votre hôtel a une excellente réputation.' },
    { who: 'R', seg: [{d:{us:"I've read your résumé carefully. Do you have any questions for us?", uk:"I've read your CV carefully. Do you have any questions for us?"}}],
      fr: 'J\'ai lu votre CV attentivement. Avez-vous des questions ?' },
    { who: 'C', seg: ['Yes. What would my ', {d:{us:'schedule', uk:'rota'}}, ' look like, and when could I ', {w:'expect to hear back'}, '?'],
      fr: 'Oui. À quoi ressemblerait mon planning, et quand pourrais-je avoir une réponse ?' },
    { who: 'R', seg: ["We'll ", {w:'get back to you'}, ' by the end of the week.'],
      fr: 'Nous reviendrons vers vous d\'ici la fin de la semaine.' }
  ],

  glossaire: {
    'been working':        { word: 'been working', tr: 'present perfect continuous : action commencée dans le passé qui continue (« je travaille depuis… »)', v: 0 },
    lately:                { word: 'lately', ipa: '/ˈleɪtli/', tr: 'ces derniers temps (≠ « lastly » = enfin, pour conclure)', v: 1 },
    handle:                { word: 'handle', ipa: '/ˈhændəl/', tr: 'gérer, s\'occuper de', v: 3 },
    acknowledge:           { word: 'acknowledge', ipa: '/əkˈnɒlɪdʒ/', tr: 'reconnaître (un problème, un sentiment). Le « k » ne se prononce pas.', v: 4 },
    'move abroad':         { word: 'move abroad', tr: 'partir vivre à l\'étranger', v: 5 },
    'looking forward to':  { word: 'looking forward to', tr: 'avoir hâte de. Attention : suivi de -ing (to est une préposition).', v: 6 },
    'expect to hear back': { word: 'expect to hear back', tr: 's\'attendre à avoir une réponse', v: 8 },
    'get back to you':     { word: 'get back to you', tr: 'revenir vers vous, vous recontacter', v: 9 }
  },

  vocabulaire: [
    { en: "I've been working in hospitality for six years.", fr: 'Je travaille dans l\'hôtellerie depuis six ans.', ex: "I've been living in Lyon since 2019." },
    { en: 'lately', fr: 'ces derniers temps', ex: 'What have you been doing lately?' },
    { en: 'to manage a team', fr: 'diriger une équipe', ex: "I've been managing a team of five." },
    { en: 'to handle difficult guests', fr: 'gérer des clients difficiles', ex: 'She handles complaints very well.' },
    { en: 'to acknowledge a problem', fr: 'reconnaître un problème', ex: "First, acknowledge the guest's frustration." },
    { en: 'to move abroad', fr: 'partir vivre à l\'étranger', ex: 'I moved abroad when I was 25.' },
    { en: "I'm looking forward to working with you.", fr: 'J\'ai hâte de travailler avec vous.', ex: "I'm looking forward to hearing from you." },
    { en: {us:'a résumé', uk:'a CV'}, fr: 'un CV', ex: {us:'I sent my résumé last week.', uk:'I sent my CV last week.'} },
    { en: 'to hear back', fr: 'avoir une réponse, avoir des nouvelles', ex: 'When can I expect to hear back?' },
    { en: 'to get back to someone', fr: 'revenir vers quelqu\'un', ex: "I'll get back to you tomorrow." }
  ],

  comprehension: [
    { q: 'Depuis combien de temps Camille travaille-t-elle dans l\'hôtellerie ?',
      opts: ['Six ans', 'Deux ans', 'Quatre ans'],
      a: 0, why: '« I\'ve been working in hospitality for six years. » Deux ans, c\'est depuis quand elle dirige une équipe.' },
    { q: 'Que fait-elle face à un client difficile ?',
      opts: ['Elle écoute, reconnaît le problème et cherche une solution', 'Elle appelle son responsable', 'Elle propose un remboursement'],
      a: 0, why: '« I listen first, acknowledge the problem, and then I focus on a solution. »' },
    { q: 'Quand aura-t-elle une réponse ?',
      opts: ['D\'ici la fin de la semaine', 'Le lendemain', 'Dans un mois'],
      a: 0, why: '« We\'ll get back to you by the end of the week. »' }
  ],

  grammaireTitre: 'Parler de son parcours : <span lang="en">present perfect continuous</span>',
  grammaire: '<div class="rule"><strong>La règle</strong><br><b>have / has been + -ing</b> : une action commencée dans le passé et qui <b>continue</b> (<span lang="en">I\'ve been working here for six years</span>). On insiste sur la durée, l\'activité.<br><b>Present perfect simple</b> : un <b>résultat</b> ou une <b>quantité</b> (<span lang="en">I\'ve trained four receptionists</span>).<br>Les verbes d\'état (<span lang="en">know, like, be, own</span>) ne prennent pas la forme continue : <span lang="en">I\'ve known her for years</span>.</div>' +
    '<div class="table-scroll"><table class="g-table"><thead><tr><th>Anglais</th><th>Français</th><th>Pourquoi</th></tr></thead><tbody>' +
    '<tr><td lang="en">I\'ve been working here for six years.</td><td>Je travaille ici depuis six ans.</td><td>durée, action qui continue</td></tr>' +
    '<tr><td lang="en">I\'ve been managing a team since 2023.</td><td>Je dirige une équipe depuis 2023.</td><td>since + point de départ</td></tr>' +
    '<tr><td lang="en">I\'ve trained four receptionists.</td><td>J\'ai formé quatre réceptionnistes.</td><td>résultat chiffré : forme simple</td></tr>' +
    '<tr><td lang="en">I\'ve known her for years.</td><td>Je la connais depuis des années.</td><td>verbe d\'état : forme simple</td></tr></tbody></table></div>' +
    '<h3 class="g-h3">🇫🇷 Comparaison avec le français</h3><p>« Je travaille ici <b>depuis</b> six ans » : le français met le verbe au <b>présent</b>, l\'anglais au <b>present perfect</b>. Ne dites jamais <span lang="en">I work here since…</span> : c\'est l\'erreur qui trahit immédiatement un francophone en entretien.</p>' +
    '<h3 class="g-h3">⚠️ Erreurs typiques des francophones</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Erreur</th><th>Correction</th><th>Pourquoi</th></tr></thead><tbody>' +
    '<tr><td lang="en"><del>I work here since 2019.</del></td><td lang="en"><ins>I\'ve been working here since 2019.</ins></td><td>« depuis » : present perfect.</td></tr>' +
    '<tr><td lang="en"><del>I\'ve been knowing her for years.</del></td><td lang="en"><ins>I\'ve known her for years.</ins></td><td><span lang="en">know</span> est un verbe d\'état.</td></tr>' +
    '<tr><td lang="en"><del>I\'m looking forward to work with you.</del></td><td lang="en"><ins>I\'m looking forward to working with you.</ins></td><td>Après <span lang="en">look forward to</span> : -ing.</td></tr></tbody></table></div>',
  exGrammaire: {
    phrase: '___ in hospitality for six years.',
    options: ["I've been working", 'I work', "I'm working"], bonne: "I've been working",
    retours: {
      "I've been working": '✅ Action commencée il y a six ans et qui continue : present perfect continuous.',
      'I work': '❌ Avec « for six years » (depuis), il faut le present perfect : « I\'ve been working ».',
      "I'm working": '❌ Le présent continu décrit ce qui se passe maintenant, pas une durée depuis le passé.'
    }
  },

  trous: [
    { before: "I've been", opts: ['working', 'worked', 'work'], a: 'working', after: 'here since 2020.', why: '« have been + -ing ».' },
    { before: "I've known her", opts: ['for', 'since', 'during'], a: 'for', after: 'ten years.', why: '« for » + durée ; « since » + point de départ.' },
    { before: "I'm looking forward to", opts: ['meeting', 'meet', 'met'], a: 'meeting', after: 'the team.', why: '« to » est une préposition : on met -ing.' },
    { before: 'We will get', opts: ['back', 'over', 'on'], a: 'back', after: 'to you by Friday.', why: '« get back to someone » = recontacter quelqu\'un.' }
  ],
  paires: { a: 'hired', b: 'fired',
    aide: 'Écoutez le mot, puis choisissez ce que vous avez entendu. <span lang="en">hired</span> (embauché) : « h » soufflé ; <span lang="en">fired</span> (licencié) : « f ». À ne pas confondre en entretien !' },

  jeuDeRole: {
    texte: 'Passez un entretien d\'embauche pour un poste dans le tourisme : présentez votre parcours, répondez aux questions et posez les vôtres. Emma joue la recruteuse et vous donne un retour à la fin.',
    sujet: 'Entretien d\'embauche pour un poste dans l\'hôtellerie ou le tourisme. Tu joues la recruteuse : pose des questions classiques et au moins une question piège.'
  },
  redaction: {
    consigne: 'Écrivez 3 ou 4 phrases pour vous présenter dans une lettre de motivation : <b>depuis combien de temps</b> vous faites votre métier, <b>une réussite</b>, et <b>pourquoi ce poste</b>.',
    placeholder: 'Dear Hiring Manager, …',
    criteres: [
      [/\b(i'?ve|i have) been \w+ing\b/, "Le present perfect continuous (I've been working…)"],
      [/\b(for|since) \w+/, '« for » ou « since » pour la durée'],
      [/\b(i'?ve|i have) (managed|trained|led|organi[sz]ed|developed|created|improved|increased|won|helped)\b/, "Une réussite au present perfect (I've trained / I've managed…)"],
      [/\blooking forward to \w+ing\b|\bi would (love|like) to\b|\bi'?d (love|like) to\b/, "Votre motivation (I'm looking forward to + -ing / I'd love to…)"],
      [/\bi work (here|in \w+) since\b/, '« I work … since » (il faut le present perfect)', true]
    ],
    modele: {
      us: "Dear Hiring Manager, I've been working in hospitality for six years, and I've been managing a small team since 2023. I've trained four new receptionists. I'd love to join your hotel, and I'm looking forward to hearing from you. Sincerely, Camille Martin",
      uk: "Dear Hiring Manager, I've been working in hospitality for six years, and I've been managing a small team since 2023. I've trained four new receptionists. I'd love to join your hotel, and I'm looking forward to hearing from you. Yours sincerely, Camille Martin"
    }
  },

  cultureTitre: 'Les entretiens, aux États-Unis et au Royaume-Uni',
  culture: '<div class="card block"><h3 class="ex-title">💼 Le CV et l\'entretien</h3>' +
    '<p><b>🇺🇸 États-Unis :</b> un <i lang="en">résumé</i> d\'une page, sans photo, sans âge ni situation familiale (lois anti-discrimination). On met en avant des résultats chiffrés et on « se vend » avec assurance.</p>' +
    '<p style="margin:0;"><b>🇬🇧 Royaume-Uni :</b> un <i lang="en">CV</i> de deux pages, sans photo non plus, et une <i lang="en">cover letter</i>. Le ton est plus modeste. Dans les deux pays, on envoie un e-mail de remerciement après l\'entretien.</p></div>' +
    '<div class="card block"><h3 class="ex-title">🗣️ Les mots qui changent</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Français</th><th>🇺🇸 États-Unis</th><th>🇬🇧 Royaume-Uni</th></tr></thead><tbody>' +
    '<tr><td>un CV</td><td lang="en">a résumé</td><td lang="en">a CV</td></tr>' +
    '<tr><td>le planning</td><td lang="en">the schedule</td><td lang="en">the rota</td></tr>' +
    '<tr><td>les congés</td><td lang="en">vacation</td><td lang="en">holiday</td></tr>' +
    '<tr><td>être licencié (économique)</td><td lang="en">to be laid off</td><td lang="en">to be made redundant</td></tr></tbody></table></div></div>',
  cultureQuiz: [
    { q: 'Aux États-Unis, sur un CV, on met…',
      opts: ['Ni photo ni âge', 'Une photo récente', 'Sa date de naissance et sa situation familiale'],
      a: 0, why: 'Les lois anti-discrimination poussent à retirer tout ce qui n\'est pas professionnel.' },
    { q: 'Au Royaume-Uni, « to be made redundant » veut dire…',
      opts: ['Être licencié pour raisons économiques', 'Être promu', 'Démissionner'],
      a: 0, why: '« redundant » = en surnombre ; aux États-Unis, on dit « to be laid off ».' }
  ],

  bilan: [
    { q: '« Je travaille ici depuis six ans. »', cible: true,
      opts: ["I've been working here for six years.", 'I work here since six years.', "I'm working here for six years."],
      a: 0, why: '« depuis » + durée : present perfect continuous + « for ».', rev: "I've been working in hospitality for six years." },
    { q: 'Complétez : « I\'m looking forward to ___ from you. »', cible: true,
      opts: ['hearing', 'hear', 'heard'],
      a: 0, why: 'Après « look forward to » : -ing.', rev: "I'm looking forward to working with you." },
    { q: '« Je la connais depuis des années. »', cible: true,
      opts: ["I've known her for years.", "I've been knowing her for years.", 'I know her since years.'],
      a: 0, why: '« know » est un verbe d\'état : pas de forme continue.', rev: "I've known her for years." },
    { q: '« Nous reviendrons vers vous vendredi. »', cible: true,
      opts: ["We'll get back to you on Friday.", "We'll come back to you Friday.", "We'll return you on Friday."],
      a: 0, why: '« get back to someone » = recontacter.', rev: 'to get back to someone' },
    { q: 'Que signifie « to handle complaints » ?',
      opts: ['Gérer les réclamations', 'Ignorer les plaintes', 'Porter plainte'],
      a: 0, why: '« handle » = gérer ; « complaint » = réclamation, plainte d\'un client.', rev: 'to handle difficult guests' },
    { q: 'Aux États-Unis, un CV se dit…', cible: true,
      opts: ['a résumé', 'a curriculum', 'a vita'],
      a: 0, why: '« résumé » 🇺🇸 (faux ami !), « CV » 🇬🇧.', rev: {us:'a résumé', uk:'a CV'} },
    { q: '« J\'ai formé quatre réceptionnistes. » (résultat)', cible: true,
      opts: ["I've trained four receptionists.", "I've been training four receptionists.", "I'm training four receptionists since."],
      a: 0, why: 'Un résultat chiffré : present perfect simple.', rev: "I've trained four receptionists." },
    { q: '« Ces derniers temps »', cible: true,
      opts: ['lately', 'lastly', 'late'],
      a: 0, why: '« lastly » = enfin (pour conclure) ; « late » = en retard.', rev: 'lately' }
  ],

  conseil: '« <span lang="en">I\'m looking forward to…</span> » est suivi de -ing, car « to » est ici une préposition : « <span lang="en">I\'m looking forward to hearing from you</span> ». C\'est LA phrase de fin d\'un e-mail professionnel.'
};
