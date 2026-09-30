// Lección B1 « Un problème à l'hôtel » — espagnol (variantes Espagne / Amérique latine, ici le Mexique).
window.LECONS = window.LECONS || {};
window.LECONS['es-B1'] = {
  niveau: 'B1', theme: 'Réclamation à l\'hôtel', etape1: 'Camille signale un problème',
  intro: 'Le lendemain matin, à {ville}, Camille appelle la réception : quelque chose ne va pas dans sa chambre.',
  indiceOrdre: 'la réception décroche, puis Camille explique le problème.',
  badge: { nom: 'Diplomate', icone: '🤝' },
  lang: 'es', langue: 'espagnol', prof: 'lucia', profNom: 'Lucía', profInitiale: 'L',
  titre: 'Unidad 7 · Un problema con la habitación',
  variantes: [
    { k: 'es', label: '🇪🇸 España', speech: 'es-ES', code: 'ES' },
    { k: 'latam', label: '🌎 Latam', speech: 'es-MX', code: 'LATAM' }
  ],
  ville: { es: 'Barcelone', latam: 'Mexico' },
  personnages: { C: { nom: 'Camille', init: 'CM' }, R: { nom: 'Recepcionista', init: 'R' } },
  noteVariantes: '<strong>🇪🇸 / 🌎 Ce qui change selon la variante</strong><p style="margin:6px 0 0;font-size:15px;">C\'est la grande différence de cette leçon : pour ce qui s\'est passé <b>aujourd\'hui</b>, on dit en Espagne « <i lang="es">esta mañana <b>he llamado</b></i> » (pretérito perfecto) et au Mexique « <i lang="es">esta mañana <b>llamé</b></i> » (indefinido). Basculez pour comparer les passages surlignés.</p>',

  dialogue: [
    { who: 'R', seg: [{d:{es:'Recepción, buenos días. ¿En qué puedo ayudarle?', latam:'Recepción, buenos días. ¿En qué le puedo ayudar?'}}],
      fr: 'Réception, bonjour. Que puis-je faire pour vous ?' },
    { who: 'C', seg: ['Buenos días, llamo de la habitación 305. El ', {w:'aire acondicionado'}, ' no funciona.'],
      fr: 'Bonjour, j\'appelle de la chambre 305. La climatisation ne marche pas.' },
    { who: 'R', seg: [{d:{es:'Vaya, lo siento mucho.', latam:'Uy, lo siento mucho.'}}, ' ¿Desde cuándo no funciona?'],
      fr: 'Oh, je suis vraiment désolé. Depuis quand ça ne marche pas ?' },
    { who: 'C', seg: ['Desde anoche. Y ', {d:{es:'esta mañana he llamado', latam:'esta mañana llamé'}}, ' dos veces, pero no ', {d:{es:'ha venido', latam:'vino'}}, ' nadie.'],
      fr: 'Depuis hier soir. Et ce matin, j\'ai appelé deux fois, mais personne n\'est venu.' },
    { who: 'R', seg: [{w:'Le pido disculpas'}, '. ', {w:'Enseguida'}, ' le mando a un técnico.'],
      fr: 'Je vous présente mes excuses. Je vous envoie un technicien tout de suite.' },
    { who: 'C', seg: ['Gracias. Es que hacía mucho calor y ', {d:{es:'no he dormido nada esta noche', latam:'no dormí nada anoche'}}, '.'],
      fr: 'Merci. C\'est qu\'il faisait très chaud et je n\'ai pas dormi de la nuit.' },
    { who: 'R', seg: ['Lo entiendo perfectamente. Si no se puede ', {w:'arreglar'}, ', le cambiamos de habitación.'],
      fr: 'Je comprends parfaitement. Si ça ne peut pas être réparé, nous vous changeons de chambre.' },
    { who: 'C', seg: ['¿', {w:'Sería posible'}, ' tener una habitación más tranquila?'],
      fr: 'Serait-il possible d\'avoir une chambre plus calme ?' },
    { who: 'R', seg: ['Por supuesto. Y ', {w:'para compensar'}, ', ', {d:{es:'hoy el desayuno lo invita la casa', latam:'hoy el desayuno es cortesía de la casa'}}, '.'],
      fr: 'Bien sûr. Et pour compenser, le petit-déjeuner d\'aujourd\'hui est offert par la maison.' },
    { who: 'C', seg: ['Muy amable, muchas gracias.'],
      fr: 'Très aimable, merci beaucoup.' },
    { who: 'R', seg: ['A usted. Y ', {w:'disculpe las molestias'}, '.'],
      fr: 'Merci à vous. Et excusez-nous pour le désagrément.' }
  ],

  glossaire: {
    'aire acondicionado':    { word: 'aire acondicionado', tr: 'la climatisation', v: 0 },
    'Le pido disculpas':     { word: 'Le pido disculpas', tr: 'Je vous présente mes excuses (très poli)', v: 4 },
    Enseguida:               { word: 'Enseguida', ipa: '/enseˈɣiða/', tr: 'tout de suite (faux ami : « ensuite » se dit « después » ou « luego »)', v: 5 },
    arreglar:                { word: 'arreglar', ipa: '/areˈɣlaɾ/', tr: 'réparer', v: 6 },
    'Sería posible':         { word: 'Sería posible', tr: 'Serait-il possible (conditionnel, très poli)', v: 7 },
    'para compensar':        { word: 'para compensar', tr: 'pour compenser', v: 8 },
    'disculpe las molestias': { word: 'disculpe las molestias', tr: 'excusez le dérangement, désolé pour le désagrément', v: 9 }
  },

  vocabulaire: [
    { en: 'El aire acondicionado no funciona.', fr: 'La climatisation ne marche pas.', ex: 'La ducha no funciona.' },
    { en: '¿Desde cuándo?', fr: 'Depuis quand ?', ex: '¿Desde cuándo no funciona?' },
    { en: {es:'Esta mañana he llamado dos veces.', latam:'Esta mañana llamé dos veces.'}, fr: 'Ce matin, j\'ai appelé deux fois.', ex: {es:'Hoy he hablado con recepción.', latam:'Hoy hablé con recepción.'} },
    { en: {es:'No ha venido nadie.', latam:'No vino nadie.'}, fr: 'Personne n\'est venu.', ex: {es:'Todavía no ha venido nadie.', latam:'Todavía no vino nadie.'} },
    { en: 'Le pido disculpas.', fr: 'Je vous présente mes excuses.', ex: 'Le pido disculpas por el retraso.' },
    { en: 'enseguida', fr: 'tout de suite', ex: 'Enseguida vuelvo.' },
    { en: 'arreglar', fr: 'réparer', ex: '¿Pueden arreglar la ducha hoy?' },
    { en: '¿Sería posible…?', fr: 'Serait-il possible… ?', ex: '¿Sería posible cambiar de habitación?' },
    { en: 'para compensar', fr: 'pour compenser', ex: 'Para compensar, le invitamos a cenar.' },
    { en: 'Disculpe las molestias.', fr: 'Désolé pour le désagrément.', ex: 'Disculpe las molestias, señora.' }
  ],

  comprehension: [
    { q: 'Quel est le problème ?',
      opts: ['La climatisation ne marche pas', 'Il n\'y a pas d\'eau chaude', 'La chambre est sale'],
      a: 0, why: '« El aire acondicionado no funciona. »' },
    { q: 'Qu\'a déjà fait Camille ?',
      opts: ['Elle a appelé deux fois', 'Elle est descendue à la réception', 'Elle a envoyé un e-mail'],
      a: 0, why: '« Esta mañana he llamado / llamé dos veces. »' },
    { q: 'Que propose l\'hôtel ?',
      opts: ['Un technicien, une autre chambre si besoin et le petit-déjeuner offert', 'Un remboursement complet', 'Une nuit gratuite'],
      a: 0, why: 'Un technicien « enseguida », une autre chambre si ça ne peut pas être réparé, et le petit-déjeuner offert.' }
  ],

  grammaireTitre: 'Raconter un problème : <span lang="es">pretérito perfecto</span> ou <span lang="es">indefinido</span> ?',
  grammaire: '<div class="rule"><strong>La règle</strong><br><b>Indefinido</b> (<span lang="es">llamé, vino</span>) : action terminée à un moment passé précis (<span lang="es">ayer, anoche, el lunes</span>).<br><b>Pretérito perfecto</b> (<span lang="es">he llamado, ha venido</span>) : <b>en Espagne</b>, pour un passé récent, dans une période pas encore terminée (<span lang="es">hoy, esta mañana, esta semana</span>). <b>En Amérique latine</b>, on emploie surtout l\'indefinido, même pour aujourd\'hui.<br><b>Imperfecto</b> (<span lang="es">hacía, estaba</span>) : pour décrire la situation, le décor.</div>' +
    '<div class="table-scroll"><table class="g-table"><thead><tr><th>🇪🇸 Espagne</th><th>🌎 Amérique latine</th><th>Français</th></tr></thead><tbody>' +
    '<tr><td lang="es">Esta mañana he llamado.</td><td lang="es">Esta mañana llamé.</td><td>Ce matin, j\'ai appelé.</td></tr>' +
    '<tr><td lang="es">Ayer llamé.</td><td lang="es">Ayer llamé.</td><td>Hier, j\'ai appelé.</td></tr>' +
    '<tr><td lang="es">Todavía no ha venido nadie.</td><td lang="es">Todavía no vino nadie.</td><td>Personne n\'est encore venu.</td></tr>' +
    '<tr><td lang="es">Hacía mucho calor.</td><td lang="es">Hacía mucho calor.</td><td>Il faisait très chaud.</td></tr></tbody></table></div>' +
    '<h3 class="g-h3">🇫🇷 Comparaison avec le français</h3><p>Le passé composé français correspond aux deux. Avec <span lang="es">ayer</span>, <span lang="es">anoche</span> ou une date passée, c\'est toujours l\'indefinido, même en Espagne : « Hier, j\'ai appelé » → <span lang="es">Ayer llamé</span>. Et « depuis » + présent reste au présent en espagnol : <span lang="es">No funciona desde anoche</span>.</p>' +
    '<h3 class="g-h3">⚠️ Erreurs typiques des francophones</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Erreur</th><th>Correction</th><th>Pourquoi</th></tr></thead><tbody>' +
    '<tr><td lang="es"><del>Ayer he llamado.</del></td><td lang="es"><ins>Ayer llamé.</ins></td><td>Avec <span lang="es">ayer</span> : indefinido.</td></tr>' +
    '<tr><td lang="es"><del>No funcionó desde anoche.</del></td><td lang="es"><ins>No funciona desde anoche.</ins></td><td>Le problème continue : présent + <span lang="es">desde</span>.</td></tr>' +
    '<tr><td lang="es"><del>Estaba mucho calor.</del></td><td lang="es"><ins>Hacía mucho calor.</ins></td><td>Pour la météo, on emploie <span lang="es">hacer</span>.</td></tr></tbody></table></div>',
  exGrammaire: {
    phrase: 'Ayer ___ a recepción, pero nadie contestó.',
    options: ['llamé', 'he llamado', 'llamaba'], bonne: 'llamé',
    retours: {
      'llamé': '✅ « ayer » = moment passé terminé → indefinido, en Espagne comme en Amérique latine.',
      'he llamado': '❌ Avec « ayer », on n\'emploie pas le pretérito perfecto, même en Espagne.',
      'llamaba': '❌ L\'imperfecto décrit une habitude ou un décor ; ici, c\'est une action ponctuelle.'
    }
  },

  trous: [
    { before: 'Cuando llegué, la habitación', opts: ['estaba', 'estuvo', 'ha estado'], a: 'estaba', after: 'sucia.', why: 'On décrit l\'état de la chambre à l\'arrivée : imperfecto « estaba ».' },
    { before: 'El aire no funciona', opts: ['desde', 'hace', 'durante'], a: 'desde', after: 'anoche.', why: '« desde » + point de départ (anoche) ; « hace » + durée (hace dos horas).' },
    { before: '¿Sería', opts: ['posible', 'posiblemente', 'posibilidad'], a: 'posible', after: 'cambiar de habitación?', why: '« ¿Sería posible + infinitif? » = « Serait-il possible de… ? ».' },
    { before: 'Le pido', opts: ['disculpas', 'excusas', 'perdones'], a: 'disculpas', after: 'por las molestias.', why: '« pedir disculpas » = présenter ses excuses.' }
  ],
  paires: { a: 'hablo', b: 'habló',
    aide: 'Écoutez le mot, puis choisissez ce que vous avez entendu. <span lang="es">hablo</span> (je parle) : accent sur « HA » ; <span lang="es">habló</span> (il a parlé) : accent sur « BLO ». L\'accent écrit change le sens et le temps !' },

  jeuDeRole: {
    texte: 'Appelez la réception : votre chambre a un problème (bruit, douche, climatisation…). Expliquez depuis quand, ce que vous avez déjà fait, et demandez une solution, avec usted. Lucía joue la réceptionniste.',
    sujet: 'À l\'hôtel : j\'appelle la réception pour me plaindre d\'un problème dans ma chambre. Tu joues la réceptionniste, polie mais qui ne cède pas tout de suite.'
  },
  redaction: {
    consigne: 'Écrivez un court e-mail à l\'hôtel : la douche (<i lang="es">la ducha</i>) <b>ne marche plus depuis hier</b>, vous <b>avez déjà appelé</b> la réception, et vous demandez <b>une solution</b>.',
    placeholder: 'Estimado señor: …',
    criteres: [
      [/ducha/, 'Le mot « ducha »'],
      [/(no funciona|est[aá] rota|no sale agua)/, 'La description du problème (no funciona…)'],
      [/desde (ayer|anoche)/, '« desde ayer » pour dire depuis quand'],
      [/(he llamado|llam[eé]|he hablado|habl[eé]|he avisado|avis[eé])/, 'Ce que vous avez déjà fait (he llamado / llamé…)'],
      [/(podr[ií]an|podr[ií]a|ser[ií]a posible|le agradecer[ií]a)/, 'Une demande polie (¿Podrían…? / ¿Sería posible…?)'],
      [/ayer he llamado/, '« ayer he llamado » (avec « ayer » : llamé)', true]
    ],
    modele: {
      es: 'Estimado señor: le escribo porque la ducha de la habitación 305 no funciona desde ayer. Esta mañana he llamado dos veces a recepción, pero no ha venido nadie. ¿Podrían enviar a un técnico hoy? Si no, ¿sería posible cambiar de habitación? Un saludo, Camille Martin',
      latam: 'Estimado señor: le escribo porque la ducha de la habitación 305 no funciona desde ayer. Esta mañana llamé dos veces a recepción, pero no vino nadie. ¿Podrían enviar a un técnico hoy? Si no, ¿sería posible cambiar de habitación? Saludos, Camille Martin'
    }
  },

  cultureTitre: 'Se plaindre poliment, en Espagne et au Mexique',
  culture: '<div class="card block"><h3 class="ex-title">🗣️ Le ton</h3>' +
    '<p><b>🇪🇸 Espagne :</b> on est assez direct. Dire clairement ce qui ne va pas n\'est pas impoli, tant qu\'on reste courtois. La petite formule « <i lang="es">Mire, es que…</i> » (« Écoutez, c\'est que… ») adoucit l\'entrée en matière.</p>' +
    '<p style="margin:0;"><b>🇲🇽 Mexique :</b> on adoucit beaucoup plus : diminutifs (« <i lang="es">un problemita</i> »), « <i lang="es">¿Me haría el favor de…?</i> », et on évite la confrontation. Le <i lang="es">usted</i> est de rigueur avec le personnel.</p></div>' +
    '<div class="card block"><h3 class="ex-title">🗣️ Adoucir une plainte</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Trop direct</th><th>Poli</th></tr></thead><tbody lang="es">' +
    '<tr><td>La ducha está rota.</td><td>Es que la ducha no funciona.</td></tr>' +
    '<tr><td>Quiero otra habitación.</td><td>¿Sería posible cambiar de habitación?</td></tr>' +
    '<tr><td>Arréglelo ya.</td><td>¿Me haría el favor de enviar a alguien?</td></tr>' +
    '<tr><td>Es inaceptable.</td><td>No estoy muy contenta con…</td></tr></tbody></table></div></div>',
  cultureQuiz: [
    { q: 'Au Mexique, dire « tengo un problemita », c\'est…',
      opts: ['Présenter un vrai problème de façon adoucie', 'Dire que le problème est sans importance', 'Parler d\'un problème de maths'],
      a: 0, why: 'Le diminutif adoucit la demande, sans forcément minimiser le problème.' },
    { q: 'La formule la plus polie :',
      opts: ['¿Me haría el favor de enviar a alguien?', 'Envíe a alguien ya.', 'Tiene que enviar a alguien.'],
      a: 0, why: '« ¿Me haría el favor de…? » = « Auriez-vous l\'amabilité de… ? ».' }
  ],

  bilan: [
    { q: 'Complétez (en Espagne) : « Esta mañana ___ dos veces. »', cible: true,
      opts: ['he llamado', 'llamaba', 'llamaré'],
      a: 0, why: 'En Espagne, « esta mañana » (période pas terminée) → pretérito perfecto.', rev: {es:'Esta mañana he llamado dos veces.', latam:'Esta mañana llamé dos veces.'} },
    { q: '« Hier, j\'ai appelé la réception. »', cible: true,
      opts: ['Ayer llamé a recepción.', 'Ayer he llamado a recepción.', 'Ayer llamaba a recepción.'],
      a: 0, why: 'Avec « ayer » : indefinido partout.', rev: 'Ayer llamé a recepción.' },
    { q: '« La climatisation ne marche pas depuis hier soir. »', cible: true,
      opts: ['El aire acondicionado no funciona desde anoche.', 'El aire acondicionado no funcionó desde anoche.', 'El aire acondicionado no funciona hace anoche.'],
      a: 0, why: 'Le problème continue : présent + « desde ».', rev: 'El aire acondicionado no funciona.' },
    { q: '« Serait-il possible de changer de chambre ? »', cible: true,
      opts: ['¿Sería posible cambiar de habitación?', '¿Sería posible de cambiar de habitación?', '¿Es posiblemente cambiar de habitación?'],
      a: 0, why: 'Pas de « de » après « sería posible ».', rev: '¿Sería posible…?' },
    { q: '« Il faisait très chaud. »', cible: true,
      opts: ['Hacía mucho calor.', 'Estaba mucho calor.', 'Era mucho calor.'],
      a: 0, why: 'La météo avec « hacer », à l\'imperfecto pour décrire.', rev: 'Hacía mucho calor.' },
    { q: '« Désolé pour le désagrément. »', cible: true,
      opts: ['Disculpe las molestias.', 'Disculpe los desagrados.', 'Perdone la molestación.'],
      a: 0, why: 'Formule figée : « disculpe las molestias ».', rev: 'Disculpe las molestias.' },
    { q: 'Que signifie « enseguida » ?',
      opts: ['Tout de suite', 'Ensuite', 'En silence'],
      a: 0, why: 'Faux ami : « ensuite » = « después » ou « luego ».', rev: 'enseguida' },
    { q: 'En Amérique latine, « Personne n\'est venu » se dit surtout…', cible: true,
      opts: ['No vino nadie.', 'No venía nadie.', 'No viene nadie.'],
      a: 0, why: 'En Amérique latine, l\'indefinido domine, même pour aujourd\'hui.', rev: {es:'No ha venido nadie.', latam:'No vino nadie.'} }
  ],

  conseil: '« <span lang="es">Es que…</span> » est la formule magique pour expliquer un problème sans agresser : « <span lang="es">Es que la ducha no funciona</span> ». Ça adoucit tout. ¡Pruébalo!'
};
