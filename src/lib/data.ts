import { User, Unit, Exercise, LeaderboardEntry } from './types';

export const mockUser: User = {
  id: '1',
  name: 'Alexandre',
  email: 'alexandre@example.com',
  avatar: 'A',
  streak: 12,
  xp: 2450,
  gems: 340,
  hearts: 4,
  maxHearts: 5,
  level: 8,
  league: 'gold',
  weeklyXP: 580,
  badges: [
    { id: '1', name: 'Premier Pas', description: 'Premier exercice complété', icon: '🌟', color: '#F59E0B' },
    { id: '2', name: 'Semaine de Feu', description: '7 jours consécutifs', icon: '🔥', color: '#EF4444' },
    { id: '3', name: 'Vocabulaire Pro', description: '100 mots appris', icon: '📚', color: '#8B5CF6' },
    { id: '4', name: 'Oreille Fine', description: '50 exercices d\'écoute', icon: '👂', color: '#06B6D4' },
    { id: '5', name: 'Orateur', description: '25 exercices de prononciation', icon: '🎤', color: '#10B981' },
  ],
  languages: [
    { language: 'english', level: 'B1', xp: 2450, totalXP: 3000, wordsLearned: 342, streak: 12 },
    { language: 'spanish', level: 'A2', xp: 890, totalXP: 1500, wordsLearned: 128, streak: 5 },
    { language: 'portuguese', level: 'A1', xp: 210, totalXP: 750, wordsLearned: 34, streak: 2 },
  ],
};

export const englishUnits: Unit[] = [
  {
    id: 'u1',
    title: 'Greetings & Basics',
    titleFr: 'Salutations & Bases',
    icon: '👋',
    level: 'A1',
    color: '#10B981',
    description: 'Apprenez à vous présenter et à saluer en anglais',
    lessons: [
      { id: 'l1', unitId: 'u1', title: 'Hello & Goodbye', type: 'vocabulary', status: 'completed', xpReward: 10, duration: 5 },
      { id: 'l2', unitId: 'u1', title: 'My name is...', type: 'grammar', status: 'completed', xpReward: 15, duration: 7 },
      { id: 'l3', unitId: 'u1', title: 'Where are you from?', type: 'speaking', status: 'completed', xpReward: 20, duration: 8 },
      { id: 'l4', unitId: 'u1', title: 'Common Phrases', type: 'listening', status: 'completed', xpReward: 15, duration: 6 },
      { id: 'l5', unitId: 'u1', title: 'Mini Story', type: 'reading', status: 'completed', xpReward: 20, duration: 10 },
    ],
  },
  {
    id: 'u2',
    title: 'Numbers & Colors',
    titleFr: 'Chiffres & Couleurs',
    icon: '🔢',
    level: 'A1',
    color: '#F97316',
    description: 'Maîtrisez les chiffres et les couleurs fondamentaux',
    lessons: [
      { id: 'l6', unitId: 'u2', title: '1 to 100', type: 'vocabulary', status: 'completed', xpReward: 10, duration: 5 },
      { id: 'l7', unitId: 'u2', title: 'Counting Things', type: 'grammar', status: 'completed', xpReward: 15, duration: 7 },
      { id: 'l8', unitId: 'u2', title: 'Rainbow Colors', type: 'vocabulary', status: 'in_progress', xpReward: 10, duration: 5 },
      { id: 'l9', unitId: 'u2', title: 'Color Descriptions', type: 'reading', status: 'locked', xpReward: 15, duration: 8 },
      { id: 'l10', unitId: 'u2', title: 'Phone Numbers', type: 'listening', status: 'locked', xpReward: 20, duration: 10 },
    ],
  },
  {
    id: 'u3',
    title: 'Family & People',
    titleFr: 'Famille & Personnes',
    icon: '👨‍👩‍👧',
    level: 'A1',
    color: '#8B5CF6',
    description: 'Parlez de votre famille et des personnes autour de vous',
    lessons: [
      { id: 'l11', unitId: 'u3', title: 'My Family', type: 'vocabulary', status: 'locked', xpReward: 10, duration: 5 },
      { id: 'l12', unitId: 'u3', title: 'Possessives', type: 'grammar', status: 'locked', xpReward: 15, duration: 7 },
      { id: 'l13', unitId: 'u3', title: 'Family Descriptions', type: 'reading', status: 'locked', xpReward: 20, duration: 10 },
      { id: 'l14', unitId: 'u3', title: 'Family Conversations', type: 'listening', status: 'locked', xpReward: 15, duration: 8 },
      { id: 'l15', unitId: 'u3', title: 'Talk About Family', type: 'speaking', status: 'locked', xpReward: 25, duration: 12 },
    ],
  },
  {
    id: 'u4',
    title: 'Daily Routine',
    titleFr: 'Routine Quotidienne',
    icon: '☀️',
    level: 'A2',
    color: '#F59E0B',
    description: 'Décrivez votre journée type en anglais',
    lessons: [
      { id: 'l16', unitId: 'u4', title: 'Morning Activities', type: 'vocabulary', status: 'locked', xpReward: 15, duration: 7 },
      { id: 'l17', unitId: 'u4', title: 'Present Simple', type: 'grammar', status: 'locked', xpReward: 20, duration: 10 },
      { id: 'l18', unitId: 'u4', title: 'A Day in London', type: 'reading', status: 'locked', xpReward: 25, duration: 12 },
      { id: 'l19', unitId: 'u4', title: 'Morning News', type: 'listening', status: 'locked', xpReward: 20, duration: 10 },
      { id: 'l20', unitId: 'u4', title: 'My Daily Routine', type: 'speaking', status: 'locked', xpReward: 30, duration: 15 },
    ],
  },
  {
    id: 'u5',
    title: 'Food & Restaurants',
    titleFr: 'Nourriture & Restaurants',
    icon: '🍽️',
    level: 'A2',
    color: '#06B6D4',
    description: 'Commandez un repas et parlez de vos aliments préférés',
    lessons: [
      { id: 'l21', unitId: 'u5', title: 'Food Vocabulary', type: 'vocabulary', status: 'locked', xpReward: 15, duration: 7 },
      { id: 'l22', unitId: 'u5', title: 'I would like...', type: 'grammar', status: 'locked', xpReward: 20, duration: 10 },
      { id: 'l23', unitId: 'u5', title: 'A Restaurant Menu', type: 'reading', status: 'locked', xpReward: 25, duration: 12 },
      { id: 'l24', unitId: 'u5', title: 'At the Restaurant', type: 'listening', status: 'locked', xpReward: 20, duration: 10 },
      { id: 'l25', unitId: 'u5', title: 'Order Your Meal', type: 'speaking', status: 'locked', xpReward: 30, duration: 15 },
    ],
  },
  {
    id: 'u6',
    title: 'Travel & Transport',
    titleFr: 'Voyage & Transport',
    icon: '✈️',
    level: 'B1',
    color: '#EC4899',
    description: 'Planifiez et vivez vos voyages en anglais',
    lessons: [
      { id: 'l26', unitId: 'u6', title: 'Transport Words', type: 'vocabulary', status: 'locked', xpReward: 20, duration: 10 },
      { id: 'l27', unitId: 'u6', title: 'Future Plans', type: 'grammar', status: 'locked', xpReward: 25, duration: 12 },
      { id: 'l28', unitId: 'u6', title: 'Travel Blog', type: 'reading', status: 'locked', xpReward: 30, duration: 15 },
      { id: 'l29', unitId: 'u6', title: 'Airport Announcements', type: 'listening', status: 'locked', xpReward: 25, duration: 12 },
      { id: 'l30', unitId: 'u6', title: 'Plan a Trip', type: 'speaking', status: 'locked', xpReward: 35, duration: 18 },
    ],
  },
];

export const spanishUnits: Unit[] = [
  {
    id: 'su1',
    title: 'Saludos y Básicos',
    titleFr: 'Salutations & Bases',
    icon: '👋',
    level: 'A1',
    color: '#10B981',
    description: 'Les premières bases de l\'espagnol',
    lessons: [
      { id: 'sl1', unitId: 'su1', title: 'Hola y Adiós', type: 'vocabulary', status: 'completed', xpReward: 10, duration: 5 },
      { id: 'sl2', unitId: 'su1', title: 'Me llamo...', type: 'grammar', status: 'completed', xpReward: 15, duration: 7 },
      { id: 'sl3', unitId: 'su1', title: 'Pronunciación', type: 'speaking', status: 'in_progress', xpReward: 20, duration: 8 },
      { id: 'sl4', unitId: 'su1', title: 'Frases Comunes', type: 'listening', status: 'locked', xpReward: 15, duration: 6 },
      { id: 'sl5', unitId: 'su1', title: 'Mini Historia', type: 'reading', status: 'locked', xpReward: 20, duration: 10 },
    ],
  },
  {
    id: 'su2',
    title: 'Ser y Estar',
    titleFr: 'Être (Ser vs Estar)',
    icon: '⚖️',
    level: 'A1',
    color: '#F97316',
    description: 'La différence cruciale entre ser et estar',
    lessons: [
      { id: 'sl6', unitId: 'su2', title: 'Ser Basics', type: 'grammar', status: 'locked', xpReward: 15, duration: 8 },
      { id: 'sl7', unitId: 'su2', title: 'Estar Basics', type: 'grammar', status: 'locked', xpReward: 15, duration: 8 },
      { id: 'sl8', unitId: 'su2', title: 'Ser vs Estar', type: 'reading', status: 'locked', xpReward: 20, duration: 10 },
      { id: 'sl9', unitId: 'su2', title: 'Practice Dialogue', type: 'listening', status: 'locked', xpReward: 20, duration: 10 },
      { id: 'sl10', unitId: 'su2', title: 'Describing People', type: 'speaking', status: 'locked', xpReward: 25, duration: 12 },
    ],
  },
];

export const vocabularyExercises: Exercise[] = [
  {
    id: 'v1',
    type: 'vocabulary',
    question: 'Comment dit-on "pomme" en anglais ?',
    options: ['Orange', 'Apple', 'Banana', 'Grape'],
    correctAnswer: 'Apple',
    explanation: '"Apple" vient du vieil anglais "æppel". C\'est l\'un des mots les plus fondamentaux en anglais !',
    imageUrl: '🍎',
    xpReward: 10,
  },
  {
    id: 'v2',
    type: 'vocabulary',
    question: 'Que signifie "butterfly" en français ?',
    options: ['Abeille', 'Libellule', 'Papillon', 'Coccinelle'],
    correctAnswer: 'Papillon',
    explanation: '"Butterfly" — un mot poétique qui décrit cet insecte coloré qui vole gracieusement.',
    imageUrl: '🦋',
    xpReward: 10,
  },
  {
    id: 'v3',
    type: 'vocabulary',
    question: 'Sélectionnez la traduction correcte de "rain"',
    options: ['Neige', 'Nuage', 'Soleil', 'Pluie'],
    correctAnswer: 'Pluie',
    explanation: '"Rain" — la pluie en anglais. Souvenir : "It\'s raining cats and dogs !" = Il pleut des cordes !',
    imageUrl: '🌧️',
    xpReward: 10,
  },
];

export const grammarExercises: Exercise[] = [
  {
    id: 'g1',
    type: 'grammar',
    question: 'Choisissez la forme correcte : "She ___ to school every day."',
    options: ['go', 'goes', 'going', 'gone'],
    correctAnswer: 'goes',
    explanation: 'Avec "she/he/it", on ajoute -s au verbe au présent simple. "She goes" est la forme correcte.',
    xpReward: 15,
  },
  {
    id: 'g2',
    type: 'grammar',
    question: 'Mettez les mots dans l\'ordre : [the / is / cat / sleeping / on / couch / the]',
    options: [
      'The sleeping cat is on the couch',
      'The cat is sleeping on the couch',
      'Is the cat sleeping the on couch',
      'On the couch the cat is sleeping',
    ],
    correctAnswer: 'The cat is sleeping on the couch',
    explanation: 'Structure: Sujet + be + verbe-ing + préposition + lieu. "The cat is sleeping on the couch" est parfaitement correct !',
    xpReward: 15,
  },
  {
    id: 'g3',
    type: 'grammar',
    question: 'Transformez en négatif : "I like coffee."',
    options: [
      "I don't like coffee.",
      "I not like coffee.",
      "I doesn't like coffee.",
      "I am not like coffee.",
    ],
    correctAnswer: "I don't like coffee.",
    explanation: 'Pour former le négatif avec "I", on utilise "don\'t" + infinitif. "I don\'t like coffee" est la bonne réponse.',
    xpReward: 15,
  },
];

export const readingExercises: Exercise[] = [
  {
    id: 'r1',
    type: 'reading',
    question: `**Lisez ce texte et répondez :**

*"Hi! My name is Sarah. I'm 25 years old and I live in London. I work as a teacher at a primary school. Every morning, I wake up at 7 AM, have breakfast, and take the subway to work. I love my job because children are very funny and creative. In my free time, I enjoy reading books and going for walks in the park."*

**Question :** À quelle heure Sarah se réveille-t-elle ?`,
    options: ['6h00', '7h00', '8h00', '9h00'],
    correctAnswer: '7h00',
    explanation: 'Le texte dit "I wake up at 7 AM" — elle se réveille à 7h du matin.',
    xpReward: 20,
  },
];

export const listeningExercises: Exercise[] = [
  {
    id: 'li1',
    type: 'listening',
    question: 'Écoutez et choisissez ce que dit le locuteur :',
    options: [
      'The weather is nice today.',
      'The weather is bad today.',
      'The weather was nice yesterday.',
      'I like the weather here.',
    ],
    correctAnswer: 'The weather is nice today.',
    explanation: 'Le locuteur dit "The weather is nice today" — il commente la météo du jour.',
    audioUrl: 'demo',
    xpReward: 20,
  },
];

export const speakingExercises: Exercise[] = [
  {
    id: 'sp1',
    type: 'speaking',
    question: 'Répétez cette phrase à voix haute :',
    correctAnswer: 'Hello, my name is Alex and I am learning English.',
    explanation: 'Excellent travail ! Concentrez-vous sur la prononciation du "th" dans "the" et l\'intonation montante.',
    xpReward: 25,
  },
];

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, user: { name: 'Marie L.', avatar: 'M', league: 'diamond' }, weeklyXP: 1240 },
  { rank: 2, user: { name: 'Pierre D.', avatar: 'P', league: 'diamond' }, weeklyXP: 1180 },
  { rank: 3, user: { name: 'Sophie B.', avatar: 'S', league: 'gold' }, weeklyXP: 980 },
  { rank: 4, user: { name: 'Thomas R.', avatar: 'T', league: 'gold' }, weeklyXP: 890 },
  { rank: 5, user: { name: 'Emma V.', avatar: 'E', league: 'gold' }, weeklyXP: 820 },
  { rank: 6, user: { name: 'Alexandre', avatar: 'A', league: 'gold' }, weeklyXP: 580, isCurrentUser: true },
  { rank: 7, user: { name: 'Lucas M.', avatar: 'L', league: 'silver' }, weeklyXP: 540 },
  { rank: 8, user: { name: 'Chloé P.', avatar: 'C', league: 'silver' }, weeklyXP: 490 },
  { rank: 9, user: { name: 'Hugo F.', avatar: 'H', league: 'silver' }, weeklyXP: 430 },
  { rank: 10, user: { name: 'Léa N.', avatar: 'L', league: 'bronze' }, weeklyXP: 380 },
];

export const languageInfo = {
  english: {
    name: 'Anglais',
    flag: '🇬🇧',
    nativeName: 'English',
    color: '#3B82F6',
    gradient: 'from-blue-600 to-cyan-500',
    speakers: '1.5 milliard',
    difficulty: 'Facile',
  },
  spanish: {
    name: 'Espagnol',
    flag: '🇪🇸',
    nativeName: 'Español',
    color: '#EF4444',
    gradient: 'from-red-600 to-orange-500',
    speakers: '500 millions',
    difficulty: 'Facile',
  },
  portuguese: {
    name: 'Portugais',
    flag: '🇧🇷',
    nativeName: 'Português',
    color: '#10B981',
    gradient: 'from-emerald-600 to-teal-500',
    speakers: '250 millions',
    difficulty: 'Moyen',
  },
};

export const streakCalendar = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  hasActivity: i < 12 && i !== 4 && i !== 9,
  xp: i < 12 ? Math.floor(Math.random() * 100) + 20 : 0,
}));
