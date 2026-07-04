'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/cn';

/* ─────────────────── DATA ─────────────────── */

interface Rule {
  id: string;
  title: string;
  icon: string;
  color: string;
  formula?: string;
  explanation: string;
  examples: Array<{ en: string; fr: string; correct?: boolean }>;
  tip?: string;
  common_mistakes?: string;
}

interface Section {
  level: string;
  label: string;
  color: string;
  icon: string;
  rules: Rule[];
}

const sections: Section[] = [
  {
    level: 'A1',
    label: 'Débutant',
    color: '#10B981',
    icon: '🌱',
    rules: [
      {
        id: 'to-be',
        title: 'Le verbe To Be (être)',
        icon: '🔤',
        color: '#10B981',
        formula: 'I am · You are · He/She/It is · We/They are',
        explanation: 'To be est le verbe le plus fondamental en anglais. Il s\'utilise pour parler de l\'identité, de la profession, des caractéristiques et de la nationalité.',
        examples: [
          { en: 'I am a student.', fr: 'Je suis étudiant(e).', correct: true },
          { en: 'She is French.', fr: 'Elle est française.', correct: true },
          { en: 'We are happy.', fr: 'Nous sommes heureux.', correct: true },
          { en: 'I is tired.', fr: '(incorrect)', correct: false },
        ],
        tip: 'Contractions courantes : I\'m, You\'re, He\'s, She\'s, We\'re, They\'re',
        common_mistakes: 'Ne jamais dire "I is" ou "She am" — chaque pronom a sa propre forme.',
      },
      {
        id: 'articles',
        title: 'Les Articles (a / an / the)',
        icon: '📝',
        color: '#3B82F6',
        formula: 'a + consonne · an + voyelle · the = défini',
        explanation: '"A/An" (article indéfini) s\'utilise pour quelque chose de non spécifique. "The" (article défini) s\'utilise quand on parle d\'une chose précise ou déjà mentionnée.',
        examples: [
          { en: 'I have a cat.', fr: 'J\'ai un chat. (n\'importe lequel)', correct: true },
          { en: 'I have an apple.', fr: 'J\'ai une pomme. (an avant voyelle)', correct: true },
          { en: 'The cat is on the sofa.', fr: 'Le chat est sur le canapé. (chat précis)', correct: true },
          { en: 'I have a apple.', fr: '(incorrect — voyelle)', correct: false },
        ],
        tip: 'An s\'utilise devant une voyelle sonore : an apple, an orange, an hour (le h est muet)',
        common_mistakes: '"A" vs "An" : ce qui compte c\'est le son, pas la lettre. "An hour" (h muet), mais "a university" (son "you").',
      },
      {
        id: 'present-simple-a1',
        title: 'Présent Simple — Affirmation',
        icon: '✅',
        color: '#8B5CF6',
        formula: 'I/You/We/They + V · He/She/It + V + -s',
        explanation: 'Le présent simple exprime les habitudes, routines, vérités générales et faits permanents.',
        examples: [
          { en: 'I play football every Sunday.', fr: 'Je joue au foot tous les dimanches.', correct: true },
          { en: 'She works in Paris.', fr: 'Elle travaille à Paris.', correct: true },
          { en: 'The sun rises in the east.', fr: 'Le soleil se lève à l\'est.', correct: true },
          { en: 'He play tennis.', fr: '(incorrect — il faut "plays")', correct: false },
        ],
        tip: 'Ajoutez -es après : go → goes, do → does, watch → watches, fix → fixes',
        common_mistakes: 'Oublier le -s avec he/she/it est l\'erreur n°1 des débutants.',
      },
      {
        id: 'present-simple-neg',
        title: 'Présent Simple — Négatif & Questions',
        icon: '❓',
        color: '#F97316',
        formula: 'don\'t / doesn\'t + V · Do / Does + sujet + V ?',
        explanation: 'Pour former une phrase négative ou une question au présent simple, on utilise l\'auxiliaire do/does.',
        examples: [
          { en: 'I don\'t eat meat.', fr: 'Je ne mange pas de viande.', correct: true },
          { en: 'She doesn\'t like coffee.', fr: 'Elle n\'aime pas le café.', correct: true },
          { en: 'Do you speak English?', fr: 'Est-ce que tu parles anglais ?', correct: true },
          { en: 'Does he plays chess?', fr: '(incorrect — pas de -s après does)', correct: false },
        ],
        tip: 'Après does/doesn\'t, le verbe revient à sa forme de base : "She doesn\'t PLAY" (pas "plays")',
      },
      {
        id: 'plurals',
        title: 'Le Pluriel des Noms',
        icon: '🔢',
        color: '#06B6D4',
        formula: '+s · +es · -y→-ies · irréguliers',
        explanation: 'La règle générale est d\'ajouter -s, mais il existe des exceptions importantes.',
        examples: [
          { en: 'cat → cats, book → books', fr: 'règle générale : +s', correct: true },
          { en: 'box → boxes, bus → buses', fr: 'après s/x/sh/ch : +es', correct: true },
          { en: 'city → cities, baby → babies', fr: 'voyelle + y : -ies', correct: true },
          { en: 'child → children, man → men, foot → feet', fr: 'irréguliers à mémoriser', correct: true },
        ],
        tip: 'Irréguliers importants : child/children, person/people, tooth/teeth, mouse/mice, sheep/sheep',
      },
      {
        id: 'possessives',
        title: 'Les Adjectifs Possessifs',
        icon: '👤',
        color: '#EC4899',
        formula: 'my · your · his · her · its · our · their',
        explanation: 'Les adjectifs possessifs précèdent toujours un nom et s\'accordent avec le possesseur, pas le possédé.',
        examples: [
          { en: 'My name is Sarah.', fr: 'Mon nom est Sarah.', correct: true },
          { en: 'His car is red. (= the man\'s car)', fr: 'Sa voiture est rouge. (à lui)', correct: true },
          { en: 'Her cat is cute. (= the woman\'s cat)', fr: 'Son chat est mignon. (à elle)', correct: true },
          { en: 'The dog lost it\'s bone.', fr: '(incorrect — its sans apostrophe)', correct: false },
        ],
        tip: 'Its (possessif) ≠ It\'s (it is). "The cat licks ITS paw" vs "IT\'S raining".',
      },
    ],
  },
  {
    level: 'A2',
    label: 'Élémentaire',
    color: '#3B82F6',
    icon: '📗',
    rules: [
      {
        id: 'present-continuous',
        title: 'Présent Continu',
        icon: '🎬',
        color: '#3B82F6',
        formula: 'to be (am/is/are) + V-ing',
        explanation: 'Le présent continu décrit une action en cours au moment où l\'on parle, ou une situation temporaire.',
        examples: [
          { en: 'I am studying right now.', fr: 'Je suis en train d\'étudier là maintenant.', correct: true },
          { en: 'She is working from home this week.', fr: 'Elle travaille de chez elle cette semaine.', correct: true },
          { en: 'They are not watching TV.', fr: 'Ils ne regardent pas la télé.', correct: true },
          { en: 'I am knowing the answer.', fr: '(incorrect — stative verb)', correct: false },
        ],
        tip: 'Verbes d\'état (stative verbs) n\'acceptent pas le -ing : know, like, want, love, believe, understand.',
        common_mistakes: '"Now/at the moment/this week/currently" → indice du présent continu.',
      },
      {
        id: 'past-simple',
        title: 'Passé Simple',
        icon: '⏪',
        color: '#8B5CF6',
        formula: 'V + -ed (régulier) · V2 (irrégulier)',
        explanation: 'Le passé simple exprime une action terminée dans le passé, à un moment précis.',
        examples: [
          { en: 'I visited Paris last year.', fr: 'J\'ai visité Paris l\'année dernière.', correct: true },
          { en: 'She went to the market yesterday.', fr: 'Elle est allée au marché hier. (go → went)', correct: true },
          { en: 'I didn\'t see the film.', fr: 'Je n\'ai pas vu le film.', correct: true },
          { en: 'Did you went to school?', fr: '(incorrect — après did, forme de base)', correct: false },
        ],
        tip: 'Irréguliers essentiels : go/went, come/came, see/saw, do/did, have/had, make/made, take/took, get/got',
        common_mistakes: 'Après "did/didn\'t", le verbe revient à la BASE : "Did you GO?" (pas "went").',
      },
      {
        id: 'future-will',
        title: 'Futur avec Will',
        icon: '🔮',
        color: '#F59E0B',
        formula: 'will + V (base) · won\'t + V',
        explanation: '"Will" exprime une décision spontanée, une promesse, une prédiction ou une certitude.',
        examples: [
          { en: 'I will call you tomorrow. (promesse)', fr: 'Je t\'appellerai demain.', correct: true },
          { en: 'It will rain later. (prédiction)', fr: 'Il va pleuvoir plus tard.', correct: true },
          { en: 'I won\'t forget your birthday.', fr: 'Je n\'oublierai pas ton anniversaire.', correct: true },
          { en: 'She will goes to the gym.', fr: '(incorrect — infinitif sans to après will)', correct: false },
        ],
        tip: 'will = décision spontanée / going to = plan prévu à l\'avance',
      },
      {
        id: 'future-going-to',
        title: 'Futur avec Going To',
        icon: '📅',
        color: '#10B981',
        formula: 'am/is/are + going to + V',
        explanation: '"Going to" exprime un plan prévu à l\'avance ou une prédiction basée sur des indices visibles.',
        examples: [
          { en: 'I am going to travel to Japan next summer.', fr: 'Je vais voyager au Japon l\'été prochain. (plan)', correct: true },
          { en: 'Look at those clouds — it\'s going to rain!', fr: 'Regarde ces nuages — il va pleuvoir ! (indice visible)', correct: true },
          { en: 'They are not going to come.', fr: 'Ils ne vont pas venir.', correct: true },
        ],
        tip: 'Indice de plan : "next week / next year / this summer / I\'ve decided to..."',
      },
      {
        id: 'comparatives',
        title: 'Comparatifs et Superlatifs',
        icon: '📊',
        color: '#EC4899',
        formula: 'adj + -er (than) · more + adj (than) · the + adj + -est · the most + adj',
        explanation: 'Les comparatifs permettent de comparer deux éléments. Les superlatifs expriment le maximum dans un groupe.',
        examples: [
          { en: 'Paris is bigger than Lyon.', fr: 'Paris est plus grand que Lyon.', correct: true },
          { en: 'This film is more interesting than that one.', fr: 'Ce film est plus intéressant que l\'autre.', correct: true },
          { en: 'Everest is the highest mountain in the world.', fr: 'L\'Everest est la montagne la plus haute du monde.', correct: true },
          { en: 'She is more tall than me.', fr: '(incorrect — adjectif court = -er)', correct: false },
        ],
        tip: 'Adjectifs courts (1-2 syllabes) : -er/-est. Adjectifs longs : more/most. Irréguliers : good→better→best, bad→worse→worst',
      },
      {
        id: 'modals',
        title: 'Les Modaux (can / must / should)',
        icon: '⚙️',
        color: '#F97316',
        formula: 'sujet + modal + V (base sans to)',
        explanation: 'Les verbes modaux expriment la capacité, l\'obligation, la permission ou le conseil. Ils sont invariables.',
        examples: [
          { en: 'I can swim. / I can\'t fly.', fr: 'Je sais nager. / Je ne sais pas voler.', correct: true },
          { en: 'You must wear a seatbelt.', fr: 'Vous devez porter une ceinture. (obligation)', correct: true },
          { en: 'You should see a doctor.', fr: 'Tu devrais voir un médecin. (conseil)', correct: true },
          { en: 'She can swims.', fr: '(incorrect — pas de -s après modal)', correct: false },
        ],
        tip: 'could = can au passé / couldn\'t = can\'t au passé / should have = regret ou reproche',
        common_mistakes: 'Jamais de "to" après un modal : "I must to go" → FAUX. "I must go" → CORRECT.',
      },
      {
        id: 'there-is',
        title: 'There is / There are',
        icon: '📍',
        color: '#06B6D4',
        formula: 'There is + singulier · There are + pluriel',
        explanation: '"There is/are" s\'utilise pour indiquer l\'existence ou la présence de quelque chose.',
        examples: [
          { en: 'There is a bank near here.', fr: 'Il y a une banque près d\'ici.', correct: true },
          { en: 'There are 30 students in the class.', fr: 'Il y a 30 élèves dans la classe.', correct: true },
          { en: 'Is there a hospital nearby?', fr: 'Y a-t-il un hôpital à proximité ?', correct: true },
          { en: 'There is many cars.', fr: '(incorrect — pluriel = there ARE)', correct: false },
        ],
        tip: 'There was / There were = passé. There will be = futur.',
      },
    ],
  },
  {
    level: 'B1',
    label: 'Intermédiaire',
    color: '#8B5CF6',
    icon: '📘',
    rules: [
      {
        id: 'present-perfect',
        title: 'Present Perfect',
        icon: '🔗',
        color: '#8B5CF6',
        formula: 'have/has + participe passé (V3)',
        explanation: 'Le present perfect relie le passé et le présent. Il s\'utilise pour les expériences de vie, les actions récentes ou les situations qui durent encore.',
        examples: [
          { en: 'I have visited Japan. (expérience)', fr: 'J\'ai (déjà) visité le Japon.', correct: true },
          { en: 'She has just called me.', fr: 'Elle vient de m\'appeler. (just = venir de)', correct: true },
          { en: 'Have you ever eaten sushi?', fr: 'As-tu jamais mangé des sushis ?', correct: true },
          { en: 'I have seen him yesterday.', fr: '(incorrect — date précise → past simple)', correct: false },
        ],
        tip: 'Marqueurs : ever, never, already, yet, just, since, for, recently → présent perfect. Marqueurs : yesterday, last year, in 2020 → past simple.',
        common_mistakes: 'Never/ever → present perfect. "Have you ever been to London?" pas "Did you ever go?"',
      },
      {
        id: 'past-continuous',
        title: 'Passé Continu',
        icon: '🌊',
        color: '#06B6D4',
        formula: 'was/were + V-ing',
        explanation: 'Le passé continu décrit une action en cours dans le passé, souvent interrompue par une autre action.',
        examples: [
          { en: 'I was sleeping when the phone rang.', fr: 'Je dormais quand le téléphone a sonné.', correct: true },
          { en: 'While she was cooking, I was reading.', fr: 'Pendant qu\'elle cuisinait, je lisais.', correct: true },
          { en: 'They were watching TV at 8 pm.', fr: 'Ils regardaient la télé à 20h.', correct: true },
        ],
        tip: 'Structure classique : "was/were + -ing" (continu) + "when" + "simple past" (interruption)',
      },
      {
        id: 'first-conditional',
        title: 'Conditionnel Type 1',
        icon: '1️⃣',
        color: '#10B981',
        formula: 'If + présent simple, will + V',
        explanation: 'Le premier conditionnel exprime une condition réelle, une situation probable ou possible dans le futur.',
        examples: [
          { en: 'If it rains, I will take an umbrella.', fr: 'S\'il pleut, je prendrai un parapluie.', correct: true },
          { en: 'If you study hard, you will pass the exam.', fr: 'Si tu travailles dur, tu réussiras l\'examen.', correct: true },
          { en: 'Will you call me if you are late?', fr: 'Tu m\'appelleras si tu es en retard ?', correct: true },
          { en: 'If it will rain, I will stay home.', fr: '(incorrect — après "if", présent simple)', correct: false },
        ],
        tip: 'La proposition en "if" utilise TOUJOURS le présent simple, jamais "will".',
      },
      {
        id: 'passive',
        title: 'La Voix Passive',
        icon: '🔄',
        color: '#F97316',
        formula: 'be (conjugué) + participe passé (V3)',
        explanation: 'La voix passive met l\'accent sur l\'action ou l\'objet plutôt que sur le sujet. On l\'utilise quand l\'auteur de l\'action est inconnu, sans importance ou évident.',
        examples: [
          { en: 'The Eiffel Tower was built in 1889.', fr: 'La Tour Eiffel a été construite en 1889.', correct: true },
          { en: 'English is spoken in many countries.', fr: 'L\'anglais est parlé dans beaucoup de pays.', correct: true },
          { en: 'The letter will be sent tomorrow.', fr: 'La lettre sera envoyée demain.', correct: true },
          { en: 'The book was writed by Rowling.', fr: '(incorrect — "written" not "writed")', correct: false },
        ],
        tip: 'Pour préciser l\'auteur de l\'action : by + agent. "The house was built by my father."',
      },
      {
        id: 'relative-clauses',
        title: 'Les Propositions Relatives',
        icon: '🔗',
        color: '#F59E0B',
        formula: 'who (personnes) · which/that (choses) · where (lieux)',
        explanation: 'Les propositions relatives apportent des informations supplémentaires sur un nom.',
        examples: [
          { en: 'The woman who lives next door is a doctor.', fr: 'La femme qui habite à côté est médecin.', correct: true },
          { en: 'The book that I read was amazing.', fr: 'Le livre que j\'ai lu était incroyable.', correct: true },
          { en: 'This is the city where I was born.', fr: 'C\'est la ville où je suis né(e).', correct: true },
          { en: 'The man which called you is here.', fr: '(incorrect — "which" pour les personnes)', correct: false },
        ],
        tip: 'Restrictive (sans virgule) : donne une info essentielle. Non-restrictive (avec virgule) : info supplémentaire optionnelle.',
      },
      {
        id: 'gerund-infinitive',
        title: 'Gérondif vs Infinitif',
        icon: '⚖️',
        color: '#EC4899',
        formula: 'V + -ing (gérondif) · to + V (infinitif)',
        explanation: 'Certains verbes sont suivis du gérondif (V-ing), d\'autres de l\'infinitif (to V), et certains peuvent accepter les deux.',
        examples: [
          { en: 'I enjoy swimming. (enjoy → toujours -ing)', fr: 'J\'aime nager.', correct: true },
          { en: 'She decided to leave early. (decide → toujours to)', fr: 'Elle a décidé de partir tôt.', correct: true },
          { en: 'I stopped smoking. (stopped doing)', fr: 'J\'ai arrêté de fumer.', correct: true },
          { en: 'I enjoy to swim.', fr: '(incorrect)', correct: false },
        ],
        tip: '-ing après : enjoy, finish, avoid, consider, keep, mind, suggest, admit, deny, practise. "to" après : want, need, decide, agree, plan, hope, promise, refuse.',
      },
    ],
  },
  {
    level: 'B2',
    label: 'Avancé',
    color: '#F97316',
    icon: '📕',
    rules: [
      {
        id: 'second-conditional',
        title: 'Conditionnel Type 2',
        icon: '2️⃣',
        color: '#F97316',
        formula: 'If + past simple, would + V',
        explanation: 'Le deuxième conditionnel exprime une situation imaginaire, improbable ou contraire à la réalité présente.',
        examples: [
          { en: 'If I had a million euros, I would travel the world.', fr: 'Si j\'avais un million d\'euros, je voyagerais dans le monde.', correct: true },
          { en: 'If I were you, I would apologize.', fr: 'Si j\'étais toi, je m\'excuserais.', correct: true },
          { en: 'What would you do if you won the lottery?', fr: 'Que ferais-tu si tu gagnais à la loterie ?', correct: true },
          { en: 'If I would have money, I would buy a car.', fr: '(incorrect — "would" ne va pas dans la condition)', correct: false },
        ],
        tip: 'Après "if" au cond. 2, on dit "If I WERE" (subjonctif) même avec I/he/she — plus formel et correct.',
      },
      {
        id: 'third-conditional',
        title: 'Conditionnel Type 3',
        icon: '3️⃣',
        color: '#EF4444',
        formula: 'If + past perfect, would have + V3',
        explanation: 'Le troisième conditionnel exprime une situation contraire à la réalité passée — quelque chose qui ne s\'est pas passé.',
        examples: [
          { en: 'If I had studied, I would have passed.', fr: 'Si j\'avais étudié, j\'aurais réussi. (mais je n\'ai pas étudié)', correct: true },
          { en: 'She wouldn\'t have been late if she had left earlier.', fr: 'Elle n\'aurait pas été en retard si elle était partie plus tôt.', correct: true },
          { en: 'If he had called, I would have answered.', fr: 'S\'il avait appelé, j\'aurais répondu.', correct: true },
          { en: 'If I would have known, I would have told you.', fr: '(incorrect — "had known" required)', correct: false },
        ],
        tip: 'Le cond. 3 exprime toujours un REGRET ou une hypothèse irréelle sur le PASSÉ.',
      },
      {
        id: 'reported-speech',
        title: 'Discours Rapporté',
        icon: '💬',
        color: '#8B5CF6',
        formula: 'Recul d\'un temps : présent → imparfait · passé → plus-que-parfait',
        explanation: 'Le discours rapporté transforme les paroles directes en paroles indirectes. Les temps verbaux reculent d\'un cran.',
        examples: [
          { en: '"I am tired." → She said she WAS tired.', fr: 'Direct → Indirect (présent → passé)', correct: true },
          { en: '"I will call." → He said he WOULD call.', fr: 'will → would', correct: true },
          { en: '"I have finished." → She said she HAD finished.', fr: 'present perfect → past perfect', correct: true },
          { en: '"Can you help?" → She asked if I COULD help.', fr: 'can → could (question indirecte)', correct: true },
        ],
        tip: 'Pronoms, expressions de temps et de lieu changent aussi : I→he/she, here→there, now→then, today→that day.',
      },
      {
        id: 'phrasal-verbs',
        title: 'Les Phrasal Verbs',
        icon: '🚀',
        color: '#06B6D4',
        formula: 'verbe + particule(s) → nouveau sens',
        explanation: 'Les phrasal verbs sont des combinaisons verbe + préposition/adverbe dont le sens est souvent différent de celui du verbe seul.',
        examples: [
          { en: 'give up = abandonner · "Don\'t give up!"', fr: 'Ne renonce pas !', correct: true },
          { en: 'look up = chercher · "Look it up in a dictionary."', fr: 'Cherche-le dans un dictionnaire.', correct: true },
          { en: 'break down = tomber en panne · "My car broke down."', fr: 'Ma voiture est tombée en panne.', correct: true },
          { en: 'turn on ↔ turn off · pick up ↔ put down', fr: 'Paires opposées courantes', correct: true },
        ],
        tip: 'Les plus importants : get up, get on/off, find out, carry out, take off, put off, go through, come across, bring up, run out of.',
      },
      {
        id: 'perfect-continuous',
        title: 'Parfaits Continus',
        icon: '⏳',
        color: '#F59E0B',
        formula: 'have been + V-ing (durée jusqu\'à maintenant)',
        explanation: 'Le present perfect continuous insiste sur la durée d\'une action qui a commencé dans le passé et continue ou vient de s\'arrêter.',
        examples: [
          { en: 'I have been learning English for 3 years.', fr: 'J\'apprends l\'anglais depuis 3 ans. (et je continue)', correct: true },
          { en: 'She\'s been working here since 2020.', fr: 'Elle travaille ici depuis 2020.', correct: true },
          { en: 'Why are you tired? I\'ve been running.', fr: 'Pourquoi tu es fatigué ? Je courais.', correct: true },
          { en: 'I have been knowing him for years.', fr: '(incorrect — "know" est stative)', correct: false },
        ],
        tip: 'for = durée ("for 3 years") · since = point de départ ("since 2020")',
      },
    ],
  },
  {
    level: 'ÉCRIT',
    label: 'Expression Écrite',
    color: '#EC4899',
    icon: '✍️',
    rules: [
      {
        id: 'formal-letter',
        title: 'La Lettre Formelle',
        icon: '📬',
        color: '#EC4899',
        formula: 'En-tête → Objet → Corps → Formule de politesse → Signature',
        explanation: 'La lettre formelle (ou l\'email formel) suit une structure précise avec un vocabulaire soutenu.',
        examples: [
          { en: 'Ouverture : Dear Mr/Mrs + nom (si connu) · Dear Sir/Madam (si inconnu)', fr: 'Formule d\'appel', correct: true },
          { en: 'Corps p.1 : I am writing to + raison (apply for / complain about / enquire about)', fr: 'Objet de la lettre', correct: true },
          { en: 'Corps p.2-3 : développement des arguments avec connecteurs (Furthermore, However, Therefore)', fr: 'Développement', correct: true },
          { en: 'Clôture : Yours sincerely (nom connu) · Yours faithfully (inconnu)', fr: 'Formule de politesse', correct: true },
        ],
        tip: 'Éviter : contractions (I\'m → I am), argot, mots trop courts (get → obtain, do → carry out, show → demonstrate).',
      },
      {
        id: 'informal-letter',
        title: 'La Lettre / L\'Email Informel',
        icon: '💌',
        color: '#F97316',
        formula: 'Salutation → Nouvelles → Contenu → Conclusion → Au revoir',
        explanation: 'L\'email informel s\'adresse à un(e) ami(e) ou membre de la famille. Le ton est détendu, les contractions sont acceptées.',
        examples: [
          { en: 'Ouverture : Hi Tom, / Hey Sarah, / Dear Mum,', fr: 'Salutation amicale', correct: true },
          { en: 'Introduction : How are you? / Hope you\'re well! / Great to hear from you!', fr: 'Prendre des nouvelles', correct: true },
          { en: 'Contenu : Anyway, ... / By the way, ... / I wanted to tell you that...', fr: 'Transition vers le sujet', correct: true },
          { en: 'Clôture : Take care! / Looking forward to hearing from you! / Write back soon!', fr: 'Formule de fin', correct: true },
        ],
        tip: 'Les contractions sont NORMALES en informel : I\'m, it\'s, don\'t, won\'t, etc.',
      },
      {
        id: 'connectors',
        title: 'Les Connecteurs Logiques',
        icon: '🔗',
        color: '#8B5CF6',
        formula: 'Addition · Opposition · Cause/Conséquence · Illustration · Concession',
        explanation: 'Les connecteurs permettent d\'organiser les idées et de donner de la cohérence à un texte.',
        examples: [
          { en: 'Addition : Furthermore, Moreover, In addition, Also, Besides', fr: 'De plus, Également, En outre', correct: true },
          { en: 'Opposition : However, Nevertheless, On the other hand, Although, Despite', fr: 'Cependant, Néanmoins, D\'un autre côté', correct: true },
          { en: 'Cause/Conséquence : Therefore, As a result, Consequently, Due to, Since', fr: 'Donc, Par conséquent, En raison de', correct: true },
          { en: 'Illustration : For example, For instance, Such as, Namely', fr: 'Par exemple, À savoir', correct: true },
        ],
        tip: 'Éviter les répétitions de "and", "but", "so" — les remplacer par des connecteurs variés pour un texte plus riche.',
      },
      {
        id: 'opinion-essay',
        title: 'L\'Essai Argumentatif',
        icon: '📝',
        color: '#10B981',
        formula: 'Introduction → Thèse → Antithèse → Synthèse → Conclusion',
        explanation: 'L\'essai argumentatif présente et défend un point de vue ou explore plusieurs perspectives sur un sujet.',
        examples: [
          { en: 'Introduction : hook + contexte + thèse (thesis statement)', fr: 'Accroche + présentation du sujet + position', correct: true },
          { en: 'Corps 1 : argument principal + exemple + explication', fr: 'Each paragraph = 1 idea + evidence + comment', correct: true },
          { en: 'Corps 2 : contre-argument (On the other hand...) + réfutation', fr: 'Show balance by addressing opposing views', correct: true },
          { en: 'Conclusion : restate thesis + summary + perspective finale', fr: 'Ne pas introduire de nouvelles idées', correct: true },
        ],
        tip: 'Phrases d\'opinion : In my view, I believe that, It seems to me that, I would argue that, From my perspective.',
        common_mistakes: 'Éviter "I think" répété — alterner avec : I believe, I consider, I argue, It is my view that.',
      },
      {
        id: 'describing-image',
        title: 'Décrire une Image',
        icon: '🖼️',
        color: '#06B6D4',
        formula: 'Général → Détail → Interprétation',
        explanation: 'Pour décrire une image en anglais, on commence par le plan général, on détaille les éléments, puis on interprète.',
        examples: [
          { en: 'Plan général : The picture shows / In the foreground, we can see / The image depicts...', fr: 'Vue d\'ensemble', correct: true },
          { en: 'Localisation : in the background / on the left/right / in the centre / at the top/bottom', fr: 'Positionnement', correct: true },
          { en: 'Personnes : A man who appears to be / She seems to be / They look like...', fr: 'Description des personnes', correct: true },
          { en: 'Interprétation : This image suggests / It seems that / The mood/atmosphere is... / I think this photo was taken...', fr: 'Analyse et ressenti', correct: true },
        ],
        tip: 'Utiliser le présent simple ou continu pour décrire : "There is a man standing in front of a building."',
      },
      {
        id: 'email-writing',
        title: 'L\'Email Professionnel',
        icon: '📧',
        color: '#F59E0B',
        formula: 'Sujet clair → Salutation → Contexte → Demande → Remerciements → Signature',
        explanation: 'L\'email professionnel doit être concis, clair et poli. Chaque paragraphe a une fonction précise.',
        examples: [
          { en: 'Objet : "Application for Marketing Manager position" / "Request for information about..."', fr: 'Objet précis et informatif', correct: true },
          { en: 'Contexte : I am contacting you regarding / I saw your advertisement / Following our meeting...', fr: 'Etablir le contexte rapidement', correct: true },
          { en: 'Demande : I would be grateful if you could / Could you please / I would appreciate it if...', fr: 'Formules de demande polies', correct: true },
          { en: 'Pièce jointe : Please find attached / I have attached / Enclosed please find...', fr: 'Mentionner les pièces jointes', correct: true },
        ],
        tip: 'Subject line essentiel : concis et spécifique. "Meeting request" est trop vague. "Meeting request – Q3 budget review, 15 July" est parfait.',
      },
    ],
  },
];

/* ─────────────────── COMPONENT ─────────────────── */

function RuleCard({ rule, index }: { rule: Rule; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="glass-card rounded-2xl overflow-hidden border border-white/8 transition-all duration-300"
      style={{ borderColor: open ? `${rule.color}35` : undefined }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-4 sm:p-5 flex items-center gap-3 text-left cursor-pointer"
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
          style={{ background: `${rule.color}18`, border: `1px solid ${rule.color}30` }}
        >
          {rule.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-white text-sm sm:text-base">{rule.title}</h3>
          {rule.formula && (
            <p className="text-xs text-slate-500 mt-0.5 font-mono truncate">{rule.formula}</p>
          )}
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-slate-400 shrink-0"
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-5 space-y-4 border-t border-white/6">
              {/* Explanation */}
              <p className="text-slate-300 text-sm leading-relaxed pt-4">{rule.explanation}</p>

              {/* Formula box */}
              {rule.formula && (
                <div
                  className="rounded-xl p-3 font-mono text-sm text-center font-bold"
                  style={{ background: `${rule.color}12`, border: `1px solid ${rule.color}30`, color: rule.color }}
                >
                  {rule.formula}
                </div>
              )}

              {/* Examples */}
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Exemples</p>
                {rule.examples.map((ex, i) => (
                  <div
                    key={i}
                    className={cn(
                      'rounded-xl p-3 flex items-start gap-2.5 border',
                      ex.correct === false
                        ? 'bg-red-500/8 border-red-500/25'
                        : 'bg-emerald-500/8 border-emerald-500/20'
                    )}
                  >
                    <span className="text-sm shrink-0 mt-0.5">
                      {ex.correct === false ? '❌' : '✅'}
                    </span>
                    <div>
                      <p className="text-white text-sm font-medium">{ex.en}</p>
                      <p className="text-slate-400 text-xs mt-0.5 italic">{ex.fr}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tip */}
              {rule.tip && (
                <div className="rounded-xl p-3 flex items-start gap-2.5 bg-amber-500/8 border border-amber-500/25">
                  <span className="text-sm shrink-0">💡</span>
                  <p className="text-amber-200 text-sm leading-relaxed">{rule.tip}</p>
                </div>
              )}

              {/* Common mistakes */}
              {rule.common_mistakes && (
                <div className="rounded-xl p-3 flex items-start gap-2.5 bg-violet-500/8 border border-violet-500/25">
                  <span className="text-sm shrink-0">⚠️</span>
                  <p className="text-violet-200 text-sm leading-relaxed">{rule.common_mistakes}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function GrammarPage() {
  const [activeLevel, setActiveLevel] = useState('A1');

  const activeSection = sections.find(s => s.level === activeLevel)!;

  return (
    <div className="min-h-screen pb-24 lg:pb-10">
      <div className="max-w-2xl mx-auto px-4 py-6 lg:py-8">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
            <span>📖</span> Grammaire & Expression
          </h1>
          <p className="text-slate-400 text-sm mt-1">Toutes les règles essentielles de A1 à B2</p>
        </div>

        {/* Level tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1 scrollbar-hide">
          {sections.map(s => (
            <motion.button
              key={s.level}
              onClick={() => setActiveLevel(s.level)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={cn(
                'flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-all shrink-0',
                activeLevel === s.level
                  ? 'text-white'
                  : 'glass border border-white/10 text-slate-400 hover:text-slate-200'
              )}
              style={activeLevel === s.level ? {
                background: `linear-gradient(135deg, ${s.color}40, ${s.color}20)`,
                border: `1px solid ${s.color}50`,
                boxShadow: `0 0 20px ${s.color}25`,
                color: s.color,
              } : {}}
            >
              <span>{s.icon}</span>
              <span>{s.level}</span>
              <span className="hidden sm:inline text-slate-400 font-normal">— {s.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Section header */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLevel}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="glass-card rounded-2xl p-4 mb-5 flex items-center gap-3 border"
              style={{ borderColor: `${activeSection.color}30`, background: `${activeSection.color}08` }}
            >
              <span className="text-2xl">{activeSection.icon}</span>
              <div>
                <h2 className="font-black text-white">Niveau {activeSection.level} — {activeSection.label}</h2>
                <p className="text-xs text-slate-400">{activeSection.rules.length} règles · Cliquez pour développer</p>
              </div>
              <span
                className="ml-auto px-2.5 py-1 rounded-full text-xs font-bold shrink-0"
                style={{ background: `${activeSection.color}20`, color: activeSection.color, border: `1px solid ${activeSection.color}40` }}
              >
                {activeSection.rules.length} règles
              </span>
            </div>

            <div className="space-y-3">
              {activeSection.rules.map((rule, i) => (
                <RuleCard key={rule.id} rule={rule} index={i} />
              ))}
            </div>

            {/* Practice CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 glass-card rounded-2xl p-5 border border-violet-500/20 text-center"
            >
              <p className="text-white font-bold mb-1">Prêt à pratiquer ?</p>
              <p className="text-slate-400 text-sm mb-4">Testez ces règles avec des exercices interactifs</p>
              <Link href="/learn/english">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 bg-linear-to-r from-violet-600 to-cyan-500 rounded-xl font-bold text-white cursor-pointer"
                >
                  Faire des exercices →
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
