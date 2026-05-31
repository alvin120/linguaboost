export type Language = 'english' | 'spanish' | 'portuguese';
export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type ExerciseType = 'vocabulary' | 'grammar' | 'reading' | 'listening' | 'speaking';
export type LessonStatus = 'locked' | 'available' | 'in_progress' | 'completed';
export type League = 'bronze' | 'silver' | 'gold' | 'diamond';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  streak: number;
  xp: number;
  gems: number;
  hearts: number;
  maxHearts: number;
  level: number;
  languages: UserLanguage[];
  badges: Badge[];
  league: League;
  weeklyXP: number;
}

export interface UserLanguage {
  language: Language;
  level: Level;
  xp: number;
  totalXP: number;
  wordsLearned: number;
  streak: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  unlockedAt?: Date;
}

export interface Unit {
  id: string;
  title: string;
  titleFr: string;
  icon: string;
  level: Level;
  color: string;
  lessons: Lesson[];
  description: string;
}

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  type: ExerciseType;
  status: LessonStatus;
  xpReward: number;
  duration: number;
}

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
  audioUrl?: string;
  imageUrl?: string;
  xpReward: number;
}

export interface LeaderboardEntry {
  rank: number;
  user: {
    name: string;
    avatar: string;
    league: League;
  };
  weeklyXP: number;
  isCurrentUser?: boolean;
}

export interface DailyGoal {
  minutes: number;
  completed: number;
  target: number;
}
