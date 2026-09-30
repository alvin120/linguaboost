// Lição B2 « Entretien d'embauche » — portugais (variantes Brésil / Portugal).
window.LECONS = window.LECONS || {};
window.LECONS['pt-B2'] = {
  niveau: 'B2', theme: 'Entretien d\'embauche', etape1: 'Camille passe un entretien',
  intro: 'Camille postule comme responsable de l\'accueil dans un hôtel de {ville}. Son entretien commence.',
  indiceOrdre: 'le recruteur accueille Camille, puis lui demande de se présenter.',
  badge: { nom: 'Recrutée', icone: '💼' },
  lang: 'pt', langue: 'portugais', prof: 'rafael', profNom: 'Rafael', profInitiale: 'R',
  titre: 'Unidade 9 · A entrevista de emprego',
  variantes: [
    { k: 'br', label: '🇧🇷 Brasil', speech: 'pt-BR', code: 'BR' },
    { k: 'pt', label: '🇵🇹 Portugal', speech: 'pt-PT', code: 'PT' }
  ],
  ville: { br: 'Florianópolis', pt: 'Faro' },
  personnages: { C: { nom: 'Camille', init: 'CM' }, R: { nom: 'Recruteur', init: 'R' } },
  noteVariantes: '<strong>🇧🇷 / 🇵🇹 Ce qui change selon la variante</strong><p style="margin:6px 0 0;font-size:15px;">Au Brésil : <i lang="pt-BR">você</i>, <i lang="pt-BR">meus idiomas</i>, <i lang="pt-BR">contato</i>. Au Portugal : on évite <i lang="pt-PT">você</i> (verbe seul ou <i lang="pt-PT">si</i>), on met l\'article devant le possessif (<i lang="pt-PT">os meus idiomas</i>) et on écrit <i lang="pt-PT">contacto</i>.</p>',

  dialogue: [
    { who: 'R', seg: [{d:{br:'Obrigado por ter vindo, Camille. Fale um pouco sobre você.', pt:'Obrigado por ter vindo, Camille. Fale-me um pouco de si.'}}],
      fr: 'Merci d\'être venue, Camille. Parlez-moi un peu de vous.' },
    { who: 'C', seg: [{d:{br:'Claro. Trabalho com hotelaria ', pt:'Claro. Trabalho em hotelaria '}}, {w:'há'}, ' seis anos, principalmente na ', {d:{br:'recepção', pt:'receção'}}, '.'],
      fr: 'Bien sûr. Je travaille dans l\'hôtellerie depuis six ans, surtout à la réception.' },
    { who: 'R', seg: [{d:{br:'E por que você quer mudar de emprego?', pt:'E porque quer mudar de emprego?'}}],
      fr: 'Et pourquoi voulez-vous changer d\'emploi ?' },
    { who: 'C', seg: ['Quero um cargo em que eu ', {w:'possa'}, ' crescer e usar ', {d:{br:'meus', pt:'os meus'}}, ' idiomas.'],
      fr: 'Je veux un poste où je puisse évoluer et utiliser mes langues.' },
    { who: 'R', seg: [{d:{br:'Como você reage quando um hóspede reclama?', pt:'Como reage quando um hóspede se queixa?'}}],
      fr: 'Comment réagissez-vous quand un client se plaint ?' },
    { who: 'C', seg: ['Primeiro, escuto. É importante que o hóspede ', {w:'se sinta'}, ' ouvido. Depois, proponho uma solução.'],
      fr: 'D\'abord, j\'écoute. Il est important que le client se sente écouté. Ensuite, je propose une solution.' },
    { who: 'R', seg: [{d:{br:'Li seu currículo com atenção. Tem alguma pergunta?', pt:'Li o seu currículo com atenção. Tem alguma pergunta?'}}],
      fr: 'J\'ai lu votre CV attentivement. Avez-vous des questions ?' },
    { who: 'C', seg: ['Sim. Se eu ', {w:'for'}, ' selecionada, quando poderia começar?'],
      fr: 'Oui. Si je suis sélectionnée, quand pourrais-je commencer ?' },
    { who: 'R', seg: ['Quando ', {w:'terminarmos'}, ' as entrevistas, ', {d:{br:'entraremos em contato', pt:'entraremos em contacto'}}, '.'],
      fr: 'Quand nous aurons terminé les entretiens, nous vous recontacterons.' },
    { who: 'C', seg: [{d:{br:'Muito obrigada. Fico no aguardo do seu retorno.', pt:'Muito obrigada. Fico a aguardar o vosso contacto.'}}],
      fr: 'Merci beaucoup. J\'attends votre réponse.' }
  ],

  glossaire: {
    'há':        { word: 'há', tr: '« há + durée » = depuis, avec le présent : « trabalho aqui há seis anos » = je travaille ici depuis six ans.', v: 0 },
    possa:       { word: 'possa', tr: 'je puisse (subjonctif présent de poder) : « um cargo em que eu possa… », le poste n\'est pas encore trouvé.', v: 2 },
    'se sinta':  { word: 'se sinta', tr: 'se sente (subjonctif) : après « é importante que », toujours le subjonctif.', v: 4 },
    for:         { word: 'for', tr: 'je serai (futur du subjonctif de « ser ») : « Se eu for selecionada » = si je suis sélectionnée.', v: 5 },
    terminarmos: { word: 'terminarmos', tr: 'nous aurons terminé (futur du subjonctif) : après « quando » + futur.', v: 6 }
  },

  vocabulaire: [
    { en: {br:'Trabalho com hotelaria há seis anos.', pt:'Trabalho em hotelaria há seis anos.'}, fr: 'Je travaille dans l\'hôtellerie depuis six ans.', ex: 'Moro em Lyon há três anos.' },
    { en: 'mudar de emprego', fr: 'changer d\'emploi', ex: 'Quero mudar de emprego este ano.' },
    { en: 'um cargo em que eu possa…', fr: 'un poste où je puisse…', ex: 'Procuro um trabalho em que eu possa viajar.' },
    { en: {br:'reclamar', pt:'queixar-se'}, fr: 'se plaindre', ex: {br:'O hóspede reclamou do barulho.', pt:'O hóspede queixou-se do barulho.'} },
    { en: 'É importante que + subjonctif', fr: 'Il est important que…', ex: {br:'É importante que você chegue cedo.', pt:'É importante que chegue cedo.'} },
    { en: 'Se eu for selecionada…', fr: 'Si je suis sélectionnée…', ex: {br:'Se você quiser, podemos conversar amanhã.', pt:'Se quiser, podemos conversar amanhã.'} },
    { en: 'Quando terminarmos…', fr: 'Quand nous aurons terminé…', ex: {br:'Quando você chegar, me liga.', pt:'Quando chegar, ligue-me.'} },
    { en: 'o currículo', fr: 'le CV', ex: {br:'Enviei meu currículo ontem.', pt:'Enviei o meu currículo ontem.'} },
    { en: {br:'entrar em contato', pt:'entrar em contacto'}, fr: 'prendre contact, recontacter', ex: {br:'Vamos entrar em contato em breve.', pt:'Vamos entrar em contacto em breve.'} },
    { en: {br:'Fico no aguardo.', pt:'Fico a aguardar.'}, fr: 'Dans l\'attente de votre réponse.', ex: {br:'Fico no aguardo do seu retorno.', pt:'Fico a aguardar o vosso contacto.'} }
  ],

  comprehension: [
    { q: 'Depuis combien de temps Camille travaille-t-elle dans l\'hôtellerie ?',
      opts: ['Six ans', 'Deux ans', 'Dix ans'],
      a: 0, why: '« Trabalho… há seis anos. »' },
    { q: 'Pourquoi veut-elle changer d\'emploi ?',
      opts: ['Pour évoluer et utiliser ses langues', 'Pour gagner plus', 'Pour travailler moins'],
      a: 0, why: '« Quero um cargo em que eu possa crescer e usar meus idiomas. »' },
    { q: 'Que demande-t-elle à la fin ?',
      opts: ['Quand elle pourrait commencer', 'Le salaire', 'Le nombre de jours de congé'],
      a: 0, why: '« Se eu for selecionada, quando poderia começar? »' }
  ],

  grammaireTitre: 'Le futur du subjonctif : <span lang="pt">se eu for, quando terminarmos</span>',
  grammaire: '<div class="rule"><strong>La règle</strong><br>Ce temps <b>n\'existe pas en français</b>. On l\'emploie après <span lang="pt"><b>se</b></span> (si) et <span lang="pt"><b>quando</b></span> (quand) pour parler du <b>futur</b>.<br>Formation : 3ᵉ personne du pluriel du passé simple, sans <b>-ram</b>, + <b>-r, -res, -r, -rmos, -rem</b> :<br><span lang="pt">eles foram → se eu for</span> ; <span lang="pt">eles puderam → quando eu puder</span> ; <span lang="pt">eles terminaram → quando nós terminarmos</span>.<br>Et le <b>subjonctif présent</b> après « <span lang="pt">é importante que</span> » ou dans une relative de souhait (<span lang="pt">um cargo em que eu possa…</span>).</div>' +
    '<div class="table-scroll"><table class="g-table"><thead><tr><th>Portugais</th><th>Français</th><th>Temps</th></tr></thead><tbody>' +
    '<tr><td lang="pt">Se eu for selecionada, começo em maio.</td><td>Si je suis sélectionnée, je commence en mai.</td><td>futur du subjonctif</td></tr>' +
    '<tr><td lang="pt">Quando puder, ligue.</td><td>Quand vous pourrez, appelez.</td><td>futur du subjonctif</td></tr>' +
    '<tr><td lang="pt">Quando terminarmos, entramos em contato.</td><td>Quand nous aurons terminé, nous vous contacterons.</td><td>futur du subjonctif</td></tr>' +
    '<tr><td lang="pt">É importante que o hóspede se sinta ouvido.</td><td>Il est important que le client se sente écouté.</td><td>subjonctif présent</td></tr></tbody></table></div>' +
    '<h3 class="g-h3">🇫🇷 Comparaison avec le français</h3><p>« <b>Si</b> + présent » en français (« si je suis sélectionnée ») devient <span lang="pt"><b>se + futur du subjonctif</b></span> : <span lang="pt">se eu for selecionada</span>. « <b>Quand</b> + futur » (« quand nous aurons terminé ») devient <span lang="pt">quando terminarmos</span>.</p>' +
    '<h3 class="g-h3">⚠️ Erreurs typiques des francophones</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Erreur</th><th>Correction</th><th>Pourquoi</th></tr></thead><tbody>' +
    '<tr><td lang="pt"><del>Se eu sou selecionada…</del></td><td lang="pt"><ins>Se eu for selecionada…</ins></td><td><span lang="pt">se</span> + futur : futur du subjonctif.</td></tr>' +
    '<tr><td lang="pt"><del>Quando eu vou poder…</del></td><td lang="pt"><ins>Quando eu puder…</ins></td><td><span lang="pt">quando</span> + futur : futur du subjonctif.</td></tr>' +
    '<tr><td lang="pt"><del>É importante que ele se sente ouvido.</del></td><td lang="pt"><ins>É importante que ele se sinta ouvido.</ins></td><td><span lang="pt">é importante que</span> + subjonctif présent.</td></tr></tbody></table></div>',
  exGrammaire: {
    phrase: 'Se eu ___ selecionada, começo em maio.',
    options: ['for', 'sou', 'seja'], bonne: 'for',
    retours: {
      for: '✅ Après « se », pour le futur : futur du subjonctif « for ».',
      sou: '❌ Le présent de l\'indicatif ne va pas après « se » quand on parle du futur : « se eu for ».',
      seja: '❌ « seja » est le subjonctif présent (« espero que seja… ») ; après « se », c\'est « for ».'
    }
  },

  trous: [
    { before: 'Trabalho aqui', opts: ['há', 'desde', 'faz de'], a: 'há', after: 'seis anos.', why: '« há + durée » = depuis ; « desde » + point de départ (desde 2019).' },
    { before: 'Quando nós', opts: ['terminarmos', 'terminamos', 'terminaremos'], a: 'terminarmos', after: 'as entrevistas, vamos ligar.', why: '« quando » + futur : futur du subjonctif.' },
    { before: 'É importante que o hóspede se', opts: ['sinta', 'sente', 'sentir'], a: 'sinta', after: 'bem.', why: '« é importante que » + subjonctif présent.' },
    { before: {br:'Se você', pt:'Se'}, opts: ['puder', 'pode', 'poder'], a: 'puder', after: ', venha amanhã.', why: 'Futur du subjonctif de « poder » : « puder ».' }
  ],
  paires: { a: 'pode', b: 'pôde',
    aide: 'Écoutez le mot, puis choisissez ce que vous avez entendu. <span lang="pt">pode</span> (il peut) : « o » ouvert, comme dans « porte » ; <span lang="pt">pôde</span> (il a pu) : « o » fermé, comme dans « eau ». L\'accent circonflexe marque le passé !' },

  jeuDeRole: {
    texte: 'Passez un entretien d\'embauche pour un poste dans le tourisme : présentez votre parcours, dites ce que vous cherchez et posez vos questions (avec « se eu for… »). Rafael joue le recruteur et vous donne un retour à la fin.',
    sujet: 'Entretien d\'embauche pour un poste dans l\'hôtellerie ou le tourisme. Tu joues le recruteur : pose des questions classiques et au moins une question piège.'
  },
  redaction: {
    consigne: 'Écrivez 3 ou 4 phrases de lettre de motivation : <b>depuis combien de temps</b> vous faites votre métier (<i lang="pt">há…</i>), <b>ce que vous cherchez</b> (<i lang="pt">um cargo em que eu possa…</i>) et <b>une phrase avec « se eu for… »</b>.',
    placeholder: { br: 'Prezados, …', pt: 'Exmos. Senhores, …' },
    criteres: [
      [/h[aá] [a-z]+ (anos|meses)/, '« há + durée » (há seis anos)'],
      [/(cargo|emprego|trabalho|posto) (em que|onde)/, 'Ce que vous cherchez (um cargo em que…)'],
      [/(possa|seja|tenha|consiga|permita)([^a-zà-úç]|$)/, 'Un verbe au subjonctif présent (possa, seja…)'],
      [/se (eu )?(for|puder|tiver|estiver|quiser)([^a-zà-úç]|$)/, 'Une condition au futur du subjonctif (se eu for…)'],
      [/se (eu )?(sou|posso|tenho) (selecionad|contratad|escolhid)/, '« se eu sou… » (il faut le futur du subjonctif : se eu for)', true]
    ],
    modele: {
      br: 'Prezados, trabalho com hotelaria há seis anos, principalmente na recepção. Procuro um cargo em que eu possa crescer e usar meus idiomas. Se eu for selecionada, posso começar em maio. Atenciosamente, Camille Martin',
      pt: 'Exmos. Senhores, trabalho em hotelaria há seis anos, sobretudo na receção. Procuro um cargo em que possa crescer e usar os meus idiomas. Se for selecionada, posso começar em maio. Com os melhores cumprimentos, Camille Martin'
    }
  },

  cultureTitre: 'Les entretiens, au Brésil et au Portugal',
  culture: '<div class="card block"><h3 class="ex-title">💼 Les codes</h3>' +
    '<p><b>🇧🇷 Brésil :</b> l\'ambiance est souvent chaleureuse et on passe vite au <i lang="pt-BR">você</i>. Les recommandations comptent beaucoup (on dit en plaisantant que le meilleur diplôme, c\'est le « QI » : <i lang="pt-BR">quem indica</i>). Un emploi formel se fait avec la <i lang="pt-BR">carteira assinada</i>.</p>' +
    '<p style="margin:0;"><b>🇵🇹 Portugal :</b> plus formel. On donne volontiers leur titre aux diplômés (<i lang="pt-PT">Senhor Doutor, Senhora Engenheira</i>). Ponctualité et sobriété sont appréciées.</p></div>' +
    '<div class="card block"><h3 class="ex-title">🗣️ Les mots du travail</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Français</th><th>🇧🇷 Brésil</th><th>🇵🇹 Portugal</th></tr></thead><tbody>' +
    '<tr><td>un CDI</td><td lang="pt-BR">um contrato por tempo indeterminado</td><td lang="pt-PT">um contrato sem termo</td></tr>' +
    '<tr><td>l\'équipe</td><td lang="pt-BR">a equipe</td><td lang="pt-PT">a equipa</td></tr>' +
    '<tr><td>le contact</td><td lang="pt-BR">o contato</td><td lang="pt-PT">o contacto</td></tr>' +
    '<tr><td>un petit boulot</td><td lang="pt-BR">um bico</td><td lang="pt-PT">um biscate</td></tr></tbody></table></div></div>',
  cultureQuiz: [
    { q: 'Au Brésil, « carteira assinada » signifie…',
      opts: ['Un emploi déclaré, avec contrat officiel', 'Un portefeuille signé', 'Une carte bancaire'],
      a: 0, why: 'Le carnet de travail signé par l\'employeur = emploi formel, avec droits sociaux.' },
    { q: 'Au Portugal, « l\'équipe » se dit…',
      opts: ['a equipa', 'a equipe', 'o time'],
      a: 0, why: '« a equipe » ou « o time » au Brésil.' }
  ],

  bilan: [
    { q: 'Complétez : « Se eu ___ selecionada… »', cible: true,
      opts: ['for', 'sou', 'seja'],
      a: 0, why: 'Après « se », pour le futur : futur du subjonctif.', rev: 'Se eu for selecionada…' },
    { q: '« Quand nous aurons terminé les entretiens… »', cible: true,
      opts: ['Quando terminarmos as entrevistas…', 'Quando terminaremos as entrevistas…', 'Quando vamos terminar as entrevistas…'],
      a: 0, why: '« quando » + futur : futur du subjonctif.', rev: 'Quando terminarmos…' },
    { q: '« Je travaille ici depuis six ans. »', cible: true,
      opts: ['Trabalho aqui há seis anos.', 'Trabalho aqui desde seis anos.', 'Estou trabalhando aqui por seis anos desde.'],
      a: 0, why: '« há » + durée ; « desde » + point de départ.', rev: {br:'Trabalho com hotelaria há seis anos.', pt:'Trabalho em hotelaria há seis anos.'} },
    { q: '« Il est important que le client se sente écouté. »', cible: true,
      opts: ['É importante que o hóspede se sinta ouvido.', 'É importante que o hóspede se sente ouvido.', 'É importante que o hóspede sentir-se ouvido.'],
      a: 0, why: '« é importante que » + subjonctif présent.', rev: 'É importante que + subjonctif' },
    { q: '« Un poste où je puisse évoluer »', cible: true,
      opts: ['um cargo em que eu possa crescer', 'um cargo em que eu posso crescer', 'um cargo que eu poder crescer'],
      a: 0, why: 'Chose recherchée : subjonctif « possa ».', rev: 'um cargo em que eu possa…' },
    { q: 'Au Portugal, « contact » s\'écrit…', cible: true,
      opts: ['contacto', 'contato', 'contacte'],
      a: 0, why: '« contato » au Brésil, « contacto » au Portugal.', rev: {br:'entrar em contato', pt:'entrar em contacto'} },
    { q: '« Si vous pouvez, venez demain. » (Brésil)', cible: true,
      opts: ['Se você puder, venha amanhã.', 'Se você pode, venha amanhã.', 'Se você poder, venha amanhã.'],
      a: 0, why: 'Futur du subjonctif irrégulier : « puder ».', rev: 'Se você puder…' },
    { q: 'Que veut dire « pôde » (avec l\'accent) ?',
      opts: ['il a pu', 'il peut', 'il pourra'],
      a: 0, why: 'L\'accent circonflexe distingue le passé « pôde » du présent « pode ».' }
  ],

  conseil: 'Le futur du subjonctif n\'existe pas en français, mais Brésiliens et Portugais l\'utilisent tous les jours : « <span lang="pt">Se você quiser…</span> », « <span lang="pt">Quando puder…</span> ». Apprenez-le avec ces petites phrases toutes faites. Mandou bem!'
};
