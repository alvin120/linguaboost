// Lección B2 « Entretien d'embauche » — espagnol (variantes Espagne / Amérique latine, ici le Mexique).
window.LECONS = window.LECONS || {};
window.LECONS['es-B2'] = {
  niveau: 'B2', theme: 'Entretien d\'embauche', etape1: 'Camille passe un entretien',
  intro: 'Camille postule comme responsable de l\'accueil dans un hôtel de {ville}. Son entretien commence.',
  indiceOrdre: 'la recruteuse accueille Camille, puis lui demande de se présenter.',
  badge: { nom: 'Recrutée', icone: '💼' },
  lang: 'es', langue: 'espagnol', prof: 'lucia', profNom: 'Lucía', profInitiale: 'L',
  titre: 'Unidad 9 · La entrevista de trabajo',
  variantes: [
    { k: 'es', label: '🇪🇸 España', speech: 'es-ES', code: 'ES' },
    { k: 'latam', label: '🌎 Latam', speech: 'es-MX', code: 'LATAM' }
  ],
  ville: { es: 'Valence', latam: 'Mexico' },
  personnages: { C: { nom: 'Camille', init: 'CM' }, R: { nom: 'Recruteuse', init: 'R' } },
  noteVariantes: '<strong>🇪🇸 / 🌎 Ce qui change selon la variante</strong><p style="margin:6px 0 0;font-size:15px;">L\'hôtellerie se dit <i lang="es">hostelería</i> 🇪🇸 et <i lang="es">hotelería</i> 🌎. Au Mexique, « raconter » se dit souvent <i lang="es">platicar</i> (« <i lang="es">Platíqueme de usted</i> »). Et on retrouve le passé : <i lang="es">He leído</i> 🇪🇸 / <i lang="es">Revisé</i> 🌎.</p>',

  dialogue: [
    { who: 'R', seg: [{d:{es:'Gracias por venir, Camille. Cuénteme un poco sobre usted.', latam:'Gracias por venir, Camille. Platíqueme un poco sobre usted.'}}],
      fr: 'Merci d\'être venue, Camille. Parlez-moi un peu de vous.' },
    { who: 'C', seg: ['Con mucho gusto. ', {w:'Llevo'}, ' seis años trabajando en ', {d:{es:'hostelería', latam:'hotelería'}}, ', sobre todo en recepción.'],
      fr: 'Avec plaisir. Je travaille dans l\'hôtellerie depuis six ans, surtout à la réception.' },
    { who: 'R', seg: ['¿Y qué busca en un nuevo puesto?'],
      fr: 'Et que recherchez-vous dans un nouveau poste ?' },
    { who: 'C', seg: ['Busco un puesto que me ', {w:'permita'}, ' crecer y en el que ', {w:'pueda'}, ' usar mis idiomas.'],
      fr: 'Je cherche un poste qui me permette d\'évoluer et où je puisse utiliser mes langues.' },
    { who: 'R', seg: ['¿Cómo reacciona cuando un cliente ', {w:'se queja'}, '?'],
      fr: 'Comment réagissez-vous quand un client se plaint ?' },
    { who: 'C', seg: ['Primero escucho. Es importante que el cliente ', {w:'se sienta'}, ' comprendido; luego propongo una solución.'],
      fr: 'D\'abord, j\'écoute. Il est important que le client se sente compris ; ensuite, je propose une solution.' },
    { who: 'R', seg: [{d:{es:'He leído su currículum con atención. ¿Tiene alguna pregunta?', latam:'Revisé su currículum con atención. ¿Tiene alguna pregunta?'}}],
      fr: 'J\'ai lu votre CV attentivement. Avez-vous des questions ?' },
    { who: 'C', seg: ['Sí. ¿Cómo sería el ', {w:'horario'}, '? Y, si me seleccionan, ¿cuándo empezaría?'],
      fr: 'Oui. Comment seraient les horaires ? Et si vous me sélectionnez, quand est-ce que je commencerais ?' },
    { who: 'R', seg: ['Cuando ', {w:'terminemos'}, ' las entrevistas, ', {d:{es:'le llamaremos', latam:'le marcaremos'}}, '. ¡Mucha suerte!'],
      fr: 'Quand nous aurons terminé les entretiens, nous vous appellerons. Bonne chance !' },
    { who: 'C', seg: ['Muchas gracias por su tiempo. Quedo ', {w:'a la espera'}, ' de sus noticias.'],
      fr: 'Merci beaucoup pour votre temps. J\'attends de vos nouvelles.' }
  ],

  glossaire: {
    Llevo:        { word: 'Llevo', tr: '« llevar + durée + gérondif » = faire quelque chose depuis… : « Llevo seis años trabajando » = je travaille depuis six ans.', v: 0 },
    permita:      { word: 'permita', tr: 'qu\'il me permette (subjonctif de permitir). Après « busco un puesto que… », subjonctif : le poste n\'est pas encore trouvé.', v: 2 },
    pueda:        { word: 'pueda', tr: 'que je puisse (subjonctif de poder)', v: 2 },
    'se queja':   { word: 'se queja', tr: 'se plaint (quejarse)', v: 3 },
    'se sienta':  { word: 'se sienta', tr: 'se sente (subjonctif de sentirse). Après « es importante que », toujours le subjonctif.', v: 4 },
    horario:      { word: 'horario', tr: 'les horaires', v: 7 },
    terminemos:   { word: 'terminemos', tr: 'nous aurons terminé (subjonctif). Après « cuando » + futur, le subjonctif est obligatoire.', v: 6 },
    'a la espera': { word: 'a la espera', tr: 'dans l\'attente', v: 8 }
  },

  vocabulaire: [
    { en: 'Llevo seis años trabajando en…', fr: 'Je travaille dans… depuis six ans.', ex: 'Llevo dos años viviendo en Lyon.' },
    { en: {es:'la hostelería', latam:'la hotelería'}, fr: 'l\'hôtellerie', ex: {es:'Trabajo en hostelería.', latam:'Trabajo en hotelería.'} },
    { en: 'Busco un puesto que me permita…', fr: 'Je cherche un poste qui me permette…', ex: 'Busco un trabajo que sea flexible.' },
    { en: 'quejarse', fr: 'se plaindre', ex: 'El cliente se quejó del ruido.' },
    { en: 'Es importante que + subjonctif', fr: 'Il est important que…', ex: 'Es importante que el cliente se sienta escuchado.' },
    { en: 'el currículum', fr: 'le CV', ex: 'Le envío mi currículum.' },
    { en: 'Cuando terminemos…', fr: 'Quand nous aurons terminé…', ex: 'Cuando llegues, llámame.' },
    { en: 'el horario', fr: 'les horaires', ex: '¿Cuál es el horario de trabajo?' },
    { en: 'Quedo a la espera de sus noticias.', fr: 'Dans l\'attente de vos nouvelles.', ex: 'Quedo a la espera de su respuesta.' },
    { en: 'crecer profesionalmente', fr: 'évoluer professionnellement', ex: 'Quiero crecer profesionalmente.' }
  ],

  comprehension: [
    { q: 'Depuis combien de temps Camille travaille-t-elle dans l\'hôtellerie ?',
      opts: ['Six ans', 'Deux ans', 'Dix ans'],
      a: 0, why: '« Llevo seis años trabajando en hostelería. »' },
    { q: 'Que cherche-t-elle ?',
      opts: ['Un poste pour évoluer et utiliser ses langues', 'Un meilleur salaire', 'Moins d\'heures de travail'],
      a: 0, why: '« Busco un puesto que me permita crecer y en el que pueda usar mis idiomas. »' },
    { q: 'Quand l\'appellera-t-on ?',
      opts: ['Quand les entretiens seront terminés', 'Le lendemain', 'Dans un mois'],
      a: 0, why: '« Cuando terminemos las entrevistas, le llamaremos. »' }
  ],

  grammaireTitre: 'Le subjonctif présent : <span lang="es">que me permita, que se sienta</span>',
  grammaire: '<div class="rule"><strong>La règle</strong><br>On emploie le <b>subjonctif</b> :<br>• après un souhait, une nécessité, un jugement : <span lang="es">quiero que, es importante que, espero que</span> ;<br>• dans une relative qui décrit quelque chose de <b>recherché</b>, pas encore trouvé : <span lang="es">busco un puesto que me permita…</span> ;<br>• après <span lang="es">cuando</span> pour parler du <b>futur</b> : <span lang="es">cuando termine…</span><br>Formation : radical du présent (1ʳᵉ personne) + terminaisons « inversées » : <span lang="es">hablar → hable</span>, <span lang="es">comer → coma</span>, <span lang="es">tener → tenga</span>, <span lang="es">poder → pueda</span>.</div>' +
    '<div class="table-scroll"><table class="g-table"><thead><tr><th>Indicatif (réel)</th><th>Subjonctif (souhaité, futur)</th></tr></thead><tbody lang="es">' +
    '<tr><td>Tengo un puesto que me permite crecer.</td><td>Busco un puesto que me permita crecer.</td></tr>' +
    '<tr><td>Cuando termino, descanso. (habitude)</td><td>Cuando termine, le llamaré. (futur)</td></tr>' +
    '<tr><td>Sé que el cliente está contento.</td><td>Es importante que el cliente esté contento.</td></tr></tbody></table></div>' +
    '<h3 class="g-h3">🇫🇷 Comparaison avec le français</h3><p>Comme en français, on dit « il est important que + subjonctif ». Mais <b>après « quand »</b>, le français met le futur (« quand je terminerai ») et l\'espagnol le <b>subjonctif</b> : <span lang="es">cuando termine</span>, jamais <span lang="es">cuando terminaré</span>.</p>' +
    '<h3 class="g-h3">⚠️ Erreurs typiques des francophones</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Erreur</th><th>Correction</th><th>Pourquoi</th></tr></thead><tbody>' +
    '<tr><td lang="es"><del>Cuando terminaré, le llamo.</del></td><td lang="es"><ins>Cuando termine, le llamo.</ins></td><td><span lang="es">cuando</span> + futur : subjonctif.</td></tr>' +
    '<tr><td lang="es"><del>Es importante que el cliente se siente comprendido.</del></td><td lang="es"><ins>… que el cliente se sienta comprendido.</ins></td><td><span lang="es">es importante que</span> + subjonctif.</td></tr>' +
    '<tr><td lang="es"><del>Busco un trabajo que es flexible.</del></td><td lang="es"><ins>Busco un trabajo que sea flexible.</ins></td><td>Chose recherchée : subjonctif.</td></tr></tbody></table></div>',
  exGrammaire: {
    phrase: 'Busco un puesto que me ___ usar mis idiomas.',
    options: ['permita', 'permite', 'permitirá'], bonne: 'permita',
    retours: {
      permita: '✅ Le poste est recherché, pas encore trouvé : subjonctif « permita ».',
      permite: '❌ L\'indicatif décrirait un poste qui existe déjà. Ici, on le cherche : « permita ».',
      'permitirá': '❌ Pas de futur dans cette relative : l\'espagnol emploie le subjonctif présent.'
    }
  },

  trous: [
    { before: '', opts: ['Llevo', 'Hago', 'Estoy'], a: 'Llevo', after: 'tres años trabajando aquí.', why: '« llevar + durée + gérondif » = depuis.' },
    { before: 'Es importante que usted', opts: ['tenga', 'tiene', 'tendrá'], a: 'tenga', after: 'experiencia.', why: '« es importante que » + subjonctif.' },
    { before: 'Cuando', opts: ['termine', 'terminaré', 'termino'], a: 'termine', after: 'la entrevista, le llamaré.', why: '« cuando » + futur → subjonctif.' },
    { before: 'Quedo a la', opts: ['espera', 'esperanza', 'atención'], a: 'espera', after: 'de sus noticias.', why: 'Formule figée de fin de lettre.' }
  ],
  paires: { a: 'hable', b: 'hablé',
    aide: 'Écoutez le mot, puis choisissez ce que vous avez entendu. <span lang="es">hable</span> (que je parle, subjonctif) : accent sur « HA » ; <span lang="es">hablé</span> (j\'ai parlé) : accent sur « BLÉ ».' },

  jeuDeRole: {
    texte: 'Passez un entretien d\'embauche pour un poste dans le tourisme : présentez votre parcours, dites ce que vous cherchez (avec le subjonctif !) et posez vos questions. Lucía joue la recruteuse et vous donne un retour à la fin.',
    sujet: 'Entretien d\'embauche pour un poste dans l\'hôtellerie ou le tourisme. Tu joues la recruteuse : pose des questions classiques et au moins une question piège.'
  },
  redaction: {
    consigne: 'Écrivez 3 ou 4 phrases de lettre de motivation : <b>depuis combien de temps</b> vous faites votre métier (<i lang="es">llevo…</i>), <b>le poste que vous cherchez</b> (<i lang="es">busco un puesto que…</i> + subjonctif) et une <b>formule de fin</b>.',
    placeholder: 'Estimados señores: …',
    criteres: [
      [/llevo [a-z]+ (a[ñn]os|meses)/, '« llevo + durée » (llevo seis años…)'],
      [/busco (un|una) [a-zá-úñ]+ que/, '« busco un… que » (ce que vous cherchez)'],
      [/que (me )?(permita|pueda|sea|tenga|ofrezca|d[eé]|ayude)([^a-zá-úñ]|$)/, 'Un verbe au subjonctif (permita, pueda, sea…)'],
      [/(a la espera|un saludo|saludos|atentamente|cordialmente)/, 'Une formule de fin (Quedo a la espera… / Atentamente)'],
      [/busco (un|una) [a-zá-úñ]+ que (me )?(permite|puede|es)([^a-zá-úñ]|$)/, 'Indicatif après « busco un… que » (il faut le subjonctif)', true]
    ],
    modele: {
      es: 'Estimados señores: llevo seis años trabajando en hostelería, sobre todo en recepción. Busco un puesto que me permita crecer y en el que pueda usar mis idiomas. Quedo a la espera de sus noticias. Atentamente, Camille Martin',
      latam: 'Estimados señores: llevo seis años trabajando en hotelería, sobre todo en recepción. Busco un puesto que me permita crecer y en el que pueda usar mis idiomas. Quedo a la espera de sus noticias. Saludos cordiales, Camille Martin'
    }
  },

  cultureTitre: 'Les entretiens, en Espagne et au Mexique',
  culture: '<div class="card block"><h3 class="ex-title">💼 Les codes</h3>' +
    '<p><b>🇪🇸 Espagne :</b> le <i lang="es">currículum</i> comporte encore souvent une photo, sans que ce soit obligatoire. L\'entretien est assez direct, et on passe vite du <i lang="es">usted</i> au <i lang="es">tú</i>. On parle du <i lang="es">contrato indefinido</i> (CDI).</p>' +
    '<p style="margin:0;"><b>🇲🇽 Mexique :</b> la présentation et la hiérarchie comptent beaucoup. On appelle volontiers les diplômés <i lang="es">licenciado / licenciada</i>. Les recommandations personnelles (<i lang="es">las palancas</i>) jouent un grand rôle.</p></div>' +
    '<div class="card block"><h3 class="ex-title">🗣️ Les mots du travail</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Français</th><th>🇪🇸 Espagne</th><th>🌎 Amérique latine</th></tr></thead><tbody>' +
    '<tr><td>un CDI</td><td lang="es">un contrato indefinido</td><td lang="es">un contrato por tiempo indeterminado</td></tr>' +
    '<tr><td>l\'ordinateur</td><td lang="es">el ordenador</td><td lang="es">la computadora</td></tr>' +
    '<tr><td>le boulot (familier)</td><td lang="es">el curro</td><td lang="es">la chamba (Mexique)</td></tr>' +
    '<tr><td>travailler (familier)</td><td lang="es">currar</td><td lang="es">chambear (Mexique)</td></tr></tbody></table></div></div>',
  cultureQuiz: [
    { q: 'Au Mexique, « licenciado » désigne…',
      opts: ['Une personne diplômée de l\'université (titre de politesse)', 'Une personne licenciée', 'Un chômeur'],
      a: 0, why: 'Faux ami : « licenciado » = diplômé ; « licencié » se dit « despedido ».' },
    { q: 'En Espagne, « un contrato indefinido », c\'est…',
      opts: ['Un CDI', 'Un contrat flou', 'Un stage'],
      a: 0, why: '« indefinido » = à durée indéterminée.' }
  ],

  bilan: [
    { q: '« Je travaille ici depuis trois ans. »', cible: true,
      opts: ['Llevo tres años trabajando aquí.', 'Estoy trabajando aquí desde tres años.', 'Hago tres años que trabajo aquí.'],
      a: 0, why: '« llevar + durée + gérondif » ; « desde » exige un point de départ, pas une durée.', rev: 'Llevo seis años trabajando en…' },
    { q: 'Complétez : « Busco un puesto que me ___ crecer. »', cible: true,
      opts: ['permita', 'permite', 'permitirá'],
      a: 0, why: 'Chose recherchée : subjonctif.', rev: 'Busco un puesto que me permita…' },
    { q: '« Quand je terminerai, je vous appellerai. »', cible: true,
      opts: ['Cuando termine, le llamaré.', 'Cuando terminaré, le llamaré.', 'Cuando termino, le llamaré.'],
      a: 0, why: '« cuando » + futur : subjonctif.', rev: 'Cuando terminemos…' },
    { q: '« Il est important que le client se sente compris. »', cible: true,
      opts: ['Es importante que el cliente se sienta comprendido.', 'Es importante que el cliente se siente comprendido.', 'Es importante que el cliente sentirse comprendido.'],
      a: 0, why: '« es importante que » + subjonctif.', rev: 'Es importante que + subjonctif' },
    { q: '« Dans l\'attente de vos nouvelles. »', cible: true,
      opts: ['Quedo a la espera de sus noticias.', 'Quedo en la esperanza de sus noticias.', 'Espero mucho sus novedades.'],
      a: 0, why: 'Formule figée de fin de lettre.', rev: 'Quedo a la espera de sus noticias.' },
    { q: '« Se plaindre »', cible: true,
      opts: ['quejarse', 'plañirse', 'plantearse'],
      a: 0, why: '« plantearse » = se poser (une question).', rev: 'quejarse' },
    { q: 'Au Mexique, « licenciado » veut dire…',
      opts: ['diplômé de l\'université', 'licencié', 'chômeur'],
      a: 0, why: 'Faux ami : « licencié » = « despedido ».' },
    { q: '« le CV »', cible: true,
      opts: ['el currículum', 'la carrera', 'el título'],
      a: 0, why: '« la carrera » = les études ; « el título » = le diplôme.', rev: 'el currículum' }
  ],

  conseil: '« <span lang="es">Llevo + durée + gérondif</span> » est la façon la plus naturelle, à l\'oral, de dire « depuis » : « <span lang="es">Llevo seis años trabajando en recepción</span> ». Parfait pour commencer un entretien. ¡Mucha suerte!'
};
