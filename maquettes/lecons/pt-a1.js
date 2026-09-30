// Lição A1 « Au café » — portugais (variantes Brésil / Portugal).
window.LECONS = window.LECONS || {};
window.LECONS['pt-A1'] = {
  niveau: 'A1', theme: 'Au café', etape1: 'Camille commande au café',
  intro: 'Camille entre dans un café, à {ville}.',
  indiceOrdre: 'le serveur accueille Camille, puis elle commande.',
  badge: { nom: 'Barista', icone: '☕' },
  lang: 'pt', langue: 'portugais', prof: 'rafael', profNom: 'Rafael', profInitiale: 'R',
  titre: 'Unidade 1 · No café',
  variantes: [
    { k: 'br', label: '🇧🇷 Brasil', speech: 'pt-BR', code: 'BR' },
    { k: 'pt', label: '🇵🇹 Portugal', speech: 'pt-PT', code: 'PT' }
  ],
  ville: { br: 'São Paulo', pt: 'Porto' },
  personnages: { C: { nom: 'Camille', init: 'CM' }, R: { nom: 'Serveur', init: 'S' } },
  noteVariantes: '<strong>🇧🇷 / 🇵🇹 Ce qui change selon la variante</strong><p style="margin:6px 0 0;font-size:15px;">Au Brésil, on dit « <i lang="pt-BR">por favor</i> » et « <i lang="pt-BR">pra viagem</i> » (à emporter) ; au Portugal, « <i lang="pt-PT">se faz favor</i> » et « <i lang="pt-PT">para levar</i> ». Côté gourmandises : <i lang="pt-BR">pão de queijo</i> 🇧🇷 ou <i lang="pt-PT">pastel de nata</i> 🇵🇹. On paie en réais ou en euros.</p>',

  dialogue: [
    { who: 'R', seg: ['Bom dia! O que vai ser?'],
      fr: 'Bonjour ! Qu\'est-ce que ce sera ?' },
    { who: 'C', seg: ['Bom dia. Um ', {w:'cafe'}, ', ', {d:{br:'por favor', pt:'se faz favor'}}, '.'],
      fr: 'Bonjour. Un café, s\'il vous plaît.' },
    { who: 'R', seg: ['E para comer?'],
      fr: 'Et pour manger ?' },
    { who: 'C', seg: [{d:{br:'Um pão de queijo.', pt:'Um pastel de nata.'}}],
      fr: 'Un pão de queijo, petit pain au fromage (Portugal : un pastel de nata, flan pâtissier).' },
    { who: 'R', seg: [{d:{br:'Pra comer aqui ou pra viagem?', pt:'É para comer aqui ou para levar?'}}],
      fr: 'Sur place ou à emporter ?' },
    { who: 'C', seg: ['Aqui. ', {w:'Quanto é'}, '?'],
      fr: 'Sur place. C\'est combien ?' },
    { who: 'R', seg: [{d:{br:'São doze reais.', pt:'São dois euros e vinte.'}}],
      fr: 'Ça fait 12 réais (Portugal : 2,20 euros).' },
    { who: 'C', seg: ['Posso pagar com ', {w:'cartao'}, '?'],
      fr: 'Je peux payer par carte ?' },
    { who: 'R', seg: [{d:{br:'Pode, sim. Aqui está a sua ', pt:'Pode, sim. Aqui tem a sua '}}, {w:'recibo'}, '.'],
      fr: 'Oui, bien sûr. Voici votre ticket.' },
    { who: 'C', seg: ['Muito ', {w:'obrigada'}, '!'],
      fr: 'Merci beaucoup !' },
    { who: 'R', seg: [{d:{br:'Por nada! Bom apetite!', pt:'De nada! Bom apetite!'}}],
      fr: 'De rien ! Bon appétit !' }
  ],

  glossaire: {
    cafe:        { word: {br:'cafezinho', pt:'café'}, tr: {br:'un petit café noir, souvent très sucré, offert partout au Brésil', pt:'un café (un expresso ; à Lisbonne, on dit aussi « uma bica »)'}, v: 0 },
    'Quanto é':  { word: 'Quanto é', tr: 'C\'est combien ? (pour demander le total)', v: 4 },
    cartao:      { word: 'cartão', ipa: {br:'/kaʁˈtɐ̃w/', pt:'/kɐɾˈtɐ̃w/'}, tr: 'la carte (bancaire). « ão » est une voyelle nasale : l\'air passe par le nez.', v: 5 },
    recibo:      { word: {br:'nota', pt:'fatura'}, tr: {br:'le ticket de caisse (la « nota fiscal »)', pt:'la facture, le ticket (on vous demande souvent votre NIF, le numéro fiscal)'}, v: 6 },
    obrigada:    { word: 'obrigada', tr: 'merci. Camille est une femme : elle dit « obrigada » ; un homme dit « obrigado ».', v: 9 }
  },

  vocabulaire: [
    { en: {br:'um cafezinho', pt:'um café'}, fr: 'un petit café', ex: {br:'Aceita um cafezinho?', pt:'Um café, se faz favor.'} },
    { en: 'O que vai ser?', fr: 'Qu\'est-ce que ce sera ?', ex: 'Bom dia! O que vai ser?' },
    { en: 'E para comer?', fr: 'Et pour manger ?', ex: 'E para comer, o que vai ser?' },
    { en: {br:'pra viagem', pt:'para levar'}, fr: 'à emporter', ex: {br:'Um café pra viagem, por favor.', pt:'Um café para levar, se faz favor.'} },
    { en: 'Quanto é?', fr: 'C\'est combien ?', ex: 'Com licença, quanto é?' },
    { en: 'Posso pagar com cartão?', fr: 'Je peux payer par carte ?', ex: 'Posso pagar com cartão, por favor?' },
    { en: {br:'a nota', pt:'a fatura'}, fr: 'le ticket / la facture', ex: {br:'Pode me dar a nota?', pt:'Quer fatura com NIF?'} },
    { en: {br:'por favor', pt:'se faz favor'}, fr: 's\'il vous plaît', ex: {br:'Um pão de queijo, por favor.', pt:'Um pastel de nata, se faz favor.'} },
    { en: 'um copo de água', fr: 'un verre d\'eau', ex: 'Um copo de água, por favor.' },
    { en: 'Muito obrigada! / Muito obrigado!', fr: 'Merci beaucoup ! (obrigada pour une femme, obrigado pour un homme)', ex: '—Muito obrigada! —De nada.' }
  ],

  comprehension: [
    { q: 'Que commande Camille ?',
      opts: ['Un café et quelque chose à manger', 'Un jus et un sandwich', 'Seulement un verre d\'eau'],
      a: 0, why: 'Un café, puis un pão de queijo 🇧🇷 ou un pastel de nata 🇵🇹.' },
    { q: 'Camille prend sa commande…',
      opts: ['Sur place', 'À emporter', 'Elle ne le dit pas'],
      a: 0, why: '« Aqui » = ici, sur place.' },
    { q: 'Comment paie-t-elle ?',
      opts: ['Par carte', 'En espèces', 'Elle ne paie pas'],
      a: 0, why: '« Posso pagar com cartão? » — « Pode, sim. »' }
  ],

  grammaireTitre: 'Le genre des noms : <span lang="pt">um / uma</span>, <span lang="pt">dois / duas</span>',
  grammaire: '<div class="rule"><strong>La règle</strong><br>« un / une » se dit <span lang="pt"><b>um</b></span> devant un nom <b>masculin</b> (<span lang="pt">um café, um pão</span>) et <span lang="pt"><b>uma</b></span> devant un nom <b>féminin</b> (<span lang="pt">uma água, uma torrada</span>).<br>Attention : « deux » aussi s\'accorde ! <span lang="pt"><b>dois</b></span> + masculin (<span lang="pt">dois cafés</span>), <span lang="pt"><b>duas</b></span> + féminin (<span lang="pt">duas águas</span>).</div>' +
    '<div class="table-scroll"><table class="g-table"><thead><tr><th>Portugais</th><th>Français</th><th>Genre</th></tr></thead><tbody>' +
    '<tr><td lang="pt">um café → dois cafés</td><td>un café → deux cafés</td><td>masculin</td></tr>' +
    '<tr><td lang="pt">uma água → duas águas</td><td>une eau → deux eaux</td><td>féminin</td></tr>' +
    '<tr><td lang="pt">um pão → dois pães</td><td>un pain → deux pains</td><td>masculin (pluriel irrégulier)</td></tr>' +
    '<tr><td lang="pt">uma viagem</td><td><b>un</b> voyage</td><td>féminin (≠ français !)</td></tr></tbody></table></div>' +
    '<h3 class="g-h3">🇫🇷 Comparaison avec le français</h3><p>Le genre est souvent le même qu\'en français, avec des exceptions : les mots en <b>-agem</b> sont féminins (<span lang="pt">a viagem, a mensagem, a garagem</span>). D\'où « <span lang="pt">pra viagem</span> » au Brésil : « pour le voyage », c\'est-à-dire à emporter.</p>' +
    '<h3 class="g-h3">⚠️ Erreurs typiques des francophones</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Erreur</th><th>Correction</th><th>Pourquoi</th></tr></thead><tbody>' +
    '<tr><td lang="pt"><del>uma café</del></td><td lang="pt"><ins>um café</ins></td><td><span lang="pt">café</span> est masculin.</td></tr>' +
    '<tr><td lang="pt"><del>dois águas</del></td><td lang="pt"><ins>duas águas</ins></td><td><span lang="pt">água</span> est féminin : <span lang="pt">duas</span>.</td></tr>' +
    '<tr><td lang="pt"><del>Obrigado! (dit par Camille)</del></td><td lang="pt"><ins>Obrigada!</ins></td><td>Une femme dit <span lang="pt">obrigada</span>.</td></tr></tbody></table></div>',
  exGrammaire: {
    phrase: '___ águas com gás, por favor.',
    options: ['Duas', 'Dois', 'Dos'], bonne: 'Duas',
    retours: {
      Duas: '✅ « água » est féminin : « duas águas ».',
      Dois: '❌ « dois » s\'emploie avec un nom masculin (dois cafés) ; « água » est féminin.',
      Dos: '❌ « dos » = « des / du » (de + os), pas « deux ».'
    }
  },

  trous: [
    { before: 'Queria', opts: ['um', 'uma', 'uns'], a: 'um', after: 'café, por favor.', why: '« café » est masculin : « um café ».' },
    { before: 'E', opts: ['uma', 'um', 'umas'], a: 'uma', after: 'torrada.', why: '« torrada » est féminin : « uma torrada ».' },
    { before: '', opts: ['Quanto', 'Quantos', 'Como'], a: 'Quanto', after: 'é?', why: '« Quanto é? » = « C\'est combien ? ».' },
    { before: '', opts: ['Dois', 'Duas', 'Dos'], a: 'Dois', after: 'pães de queijo, por favor.', why: '« pão » est masculin : « dois pães ».' }
  ],
  paires: { a: 'pão', b: 'pau',
    aide: 'Écoutez le mot, puis choisissez ce que vous avez entendu. <span lang="pt">pão</span> (pain) : voyelle nasale, l\'air passe par le nez ; <span lang="pt">pau</span> (bâton) : pas de nasale, comme « pa-ou ».' },

  jeuDeRole: {
    texte: 'Vous entrez dans un café. Commandez une boisson et quelque chose à manger, demandez le prix et payez. Rafael joue le serveur et vous corrige à la fin de la scène.',
    sujet: 'Au café : je commande une boisson et quelque chose à manger, je demande le prix et je paie. Tu joues le serveur.'
  },
  redaction: {
    consigne: 'Écrivez ce que vous dites pour commander <b>un jus d\'orange</b> (<i lang="pt-BR">um suco de laranja</i> 🇧🇷 / <i lang="pt-PT">um sumo de laranja</i> 🇵🇹) et <b>une tartine</b> (<i lang="pt">uma torrada</i>), puis demander <b>le prix</b>.',
    placeholder: 'Bom dia, …',
    criteres: [
      [/(suco|sumo)/, 'Le mot « suco » 🇧🇷 / « sumo » 🇵🇹'],
      [/torrada/, 'Le mot « torrada »'],
      [/uma torrada/, 'Le bon article : « uma torrada » (féminin)'],
      [/quanto/, 'La question du prix (Quanto é?)'],
      [/(por favor|se faz favor)/, '« por favor » / « se faz favor »'],
      [/(^|[^a-z])um torrada/, '« um torrada » (torrada est féminin : uma)', true]
    ],
    modele: { br: 'Bom dia! Um suco de laranja e uma torrada, por favor. Quanto é?', pt: 'Bom dia! Um sumo de laranja e uma torrada, se faz favor. Quanto é?' }
  },

  cultureTitre: 'Au café, au Brésil et au Portugal',
  culture: '<div class="card block"><h3 class="ex-title">☕ Le café, une institution</h3>' +
    '<p><b>🇧🇷 Brésil :</b> le <i lang="pt-BR">cafezinho</i>, petit café très sucré, est offert partout : au bureau, dans les magasins, chez les amis. Accepter est une marque de politesse. Pour payer, beaucoup utilisent le <i lang="pt-BR">Pix</i>, un virement instantané par QR code.</p>' +
    '<p style="margin:0;"><b>🇵🇹 Portugal :</b> on boit un expresso au comptoir, souvent debout, pour moins d\'un euro : <i lang="pt-PT">uma bica</i> à Lisbonne, <i lang="pt-PT">um cimbalino</i> à Porto. Les <i lang="pt-PT">pastelarias</i> vendent les fameux <i lang="pt-PT">pastéis de nata</i>.</p></div>' +
    '<div class="card block"><h3 class="ex-title">🗣️ Les mots qui changent</h3><div class="table-scroll"><table class="g-table"><thead><tr><th>Français</th><th>🇧🇷 Brésil</th><th>🇵🇹 Portugal</th></tr></thead><tbody>' +
    '<tr><td>le jus</td><td lang="pt-BR">o suco</td><td lang="pt-PT">o sumo</td></tr>' +
    '<tr><td>le serveur</td><td lang="pt-BR">o garçom</td><td lang="pt-PT">o empregado de mesa</td></tr>' +
    '<tr><td>la tasse</td><td lang="pt-BR">a xícara</td><td lang="pt-PT">a chávena</td></tr>' +
    '<tr><td>à emporter</td><td lang="pt-BR">pra viagem</td><td lang="pt-PT">para levar</td></tr></tbody></table></div></div>',
  cultureQuiz: [
    { q: 'Au Brésil, un « cafezinho », c\'est…',
      opts: ['Un petit café sucré, souvent offert', 'Un grand café au lait', 'Un café glacé'],
      a: 0, why: 'Le cafezinho est un geste d\'accueil au Brésil.' },
    { q: 'Au Portugal, « le jus » se dit…',
      opts: ['o sumo', 'o suco', 'a sopa'],
      a: 0, why: '« suco » au Brésil ; « a sopa » = la soupe.' }
  ],

  bilan: [
    { q: '« Un café, s\'il vous plaît. » (Brésil)', cible: true,
      opts: ['Um café, por favor.', 'Uma café, por favor.', 'Um café, para favor.'],
      a: 0, why: '« café » est masculin : « um café ».', rev: 'um café' },
    { q: 'Complétez : « ___ águas com gás »', cible: true,
      opts: ['duas', 'dois', 'dos'],
      a: 0, why: '« água » est féminin : « duas ».', rev: 'duas águas' },
    { q: '« C\'est combien ? »', cible: true,
      opts: ['Quanto é?', 'Quantos é?', 'Como é?'],
      a: 0, why: '« Como é? » = « Comment c\'est ? ».', rev: 'Quanto é?' },
    { q: 'Au Brésil, « à emporter » se dit…', cible: true,
      opts: ['pra viagem', 'pra aqui', 'de passeio'],
      a: 0, why: '« pra viagem » (pour le voyage) au Brésil, « para levar » au Portugal.', rev: {br:'pra viagem', pt:'para levar'} },
    { q: '« Je peux payer par carte ? »', cible: true,
      opts: ['Posso pagar com cartão?', 'Posso pagar por cartão?', 'Posso pago com cartão?'],
      a: 0, why: '« pagar com cartão », et « posso » + infinitif.', rev: 'Posso pagar com cartão?' },
    { q: 'Camille (une femme) dit merci :', cible: true,
      opts: ['Obrigada!', 'Obrigado!', 'Obrigados!'],
      a: 0, why: 'C\'est le genre de la personne qui parle qui compte.', rev: 'Muito obrigada!' },
    { q: '« Deux petits pains au fromage »', cible: true,
      opts: ['Dois pães de queijo', 'Duas pães de queijo', 'Dois pãos de queijo'],
      a: 0, why: '« pão » est masculin, et son pluriel est « pães ».', rev: 'dois pães de queijo' },
    { q: '« Bon appétit ! »', cible: true,
      opts: ['Bom apetite!', 'Boa apetite!', 'Bom comer!'],
      a: 0, why: '« apetite » est masculin : « bom apetite ».', rev: 'Bom apetite!' }
  ],

  conseil: '« <span lang="pt">Quanto é?</span> » : deux mots pour payer partout. Et au Brésil, si on vous offre un cafezinho, acceptez : c\'est une marque d\'accueil. Beleza?'
};
