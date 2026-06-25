'use client';
import { useState, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  vocabularyExercises, grammarExercises, readingExercises,
  listeningExercises, speakingExercises, englishUnits, spanishUnits,
} from '@/lib/data';
import { Exercise } from '@/lib/types';
import VocabularyExercise from '@/components/exercises/VocabularyExercise';
import GrammarExercise from '@/components/exercises/GrammarExercise';
import ReadingExercise from '@/components/exercises/ReadingExercise';
import ListeningExercise from '@/components/exercises/ListeningExercise';
import SpeakingExercise from '@/components/exercises/SpeakingExercise';
import Mascot from '@/components/Mascot';
import Confetti from '@/components/Confetti';
import { cn } from '@/lib/cn';

const allExercises: Exercise[] = [
  ...vocabularyExercises,
  ...grammarExercises,
  ...readingExercises,
  ...listeningExercises,
  ...speakingExercises,
];

export default function LessonPage({ params }: { params: Promise<{ language: string; lessonId: string }> }) {
  const { language, lessonId } = use(params);

  const allLessons = [...englishUnits, ...spanishUnits].flatMap(u => u.lessons);
  const lesson = allLessons.find(l => l.id === lessonId);
  const typePool = allExercises.filter(e => !lesson || e.type === lesson.type);
  const exercises = typePool.length >= 3 ? typePool.slice(0, 3) : allExercises.slice(0, 3);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hearts, setHearts] = useState(5);
  const [xpGained, setXpGained] = useState(0);
  const [results, setResults] = useState<Array<{ correct: boolean; xp: number }>>([]);
  const [phase, setPhase] = useState<'exercise' | 'summary'>('exercise');
  const [showConfetti, setShowConfetti] = useState(false);

  const current = exercises[currentIndex];
  const progress = (currentIndex / Math.max(exercises.length, 1)) * 100;

  const handleComplete = (correct: boolean, xp: number) => {
    if (!correct) setHearts(h => Math.max(0, h - 1));
    const earned = correct ? xp : 0;
    setXpGained(g => g + earned);
    setResults(r => [...r, { correct, xp: earned }]);

    setTimeout(() => {
      if (currentIndex + 1 >= exercises.length) {
        setShowConfetti(true);
        setPhase('summary');
        setTimeout(() => setShowConfetti(false), 3500);
      } else {
        setCurrentIndex(i => i + 1);
      }
    }, 1900);
  };

  const accuracy = results.length > 0
    ? Math.round((results.filter(r => r.correct).length / results.length) * 100)
    : 0;

  /* ── Summary screen ── */
  if (phase === 'summary') {
    return (
      <div className="min-h-screen pb-24 lg:pb-10 flex items-center justify-center px-4">
        <Confetti active={showConfetti} />
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-6">
            <motion.div
              animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center mb-4"
            >
              <Mascot mood={accuracy >= 70 ? 'celebrating' : 'happy'} size="xl" />
            </motion.div>
            <h2 className="text-3xl font-black text-white">
              {accuracy >= 90 ? 'Parfait !' : accuracy >= 70 ? 'Bien joué !' : 'Continue !'}
            </h2>
            <p className="text-slate-400 mt-1">Leçon terminée</p>
          </div>

          <div className="glass-card rounded-2xl lg:rounded-3xl p-6 mb-4 border border-violet-500/20">
            <div className="grid grid-cols-3 gap-4 mb-5">
              <div className="text-center">
                <p className="text-3xl font-black gradient-text">+{xpGained}</p>
                <p className="text-xs text-slate-400 mt-0.5">XP gagnés</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-emerald-400">{accuracy}%</p>
                <p className="text-xs text-slate-400 mt-0.5">Précision</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-black mt-1">
                  {'❤️'.repeat(hearts)}{'🖤'.repeat(5 - hearts)}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Vies</p>
              </div>
            </div>

            <div className="space-y-2">
              {results.map((r, i) => (
                <div key={i} className={cn(
                  'flex items-center justify-between px-4 py-2.5 rounded-xl',
                  r.correct ? 'bg-emerald-500/10' : 'bg-red-500/10'
                )}>
                  <div className="flex items-center gap-2">
                    <span>{r.correct ? '✅' : '❌'}</span>
                    <span className="text-sm text-slate-300">Exercice {i + 1}</span>
                  </div>
                  <span className={cn('text-sm font-bold', r.correct ? 'text-emerald-400' : 'text-red-400')}>
                    {r.correct ? `+${r.xp} XP` : '0 XP'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* AI feedback */}
          <div className="glass-card rounded-2xl p-4 mb-5 border border-cyan-500/20">
            <div className="flex items-start gap-3">
              <span className="text-lg shrink-0">🤖</span>
              <div>
                <p className="text-sm font-bold text-cyan-300 mb-1">Analyse IA</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Points forts : bonne compréhension du vocabulaire.
                  À améliorer : prononciation des mots en &quot;-tion&quot;.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Link href={`/learn/${language}`} className="flex-1">
              <motion.button whileHover={{ scale: 1.02 }} className="w-full py-4 glass border border-white/10 rounded-2xl font-medium text-slate-300 cursor-pointer">
                ← Retour
              </motion.button>
            </Link>
            <Link href={`/learn/${language}`} className="flex-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full py-4 bg-linear-to-r from-violet-600 to-cyan-500 rounded-2xl font-bold text-white cursor-pointer"
              >
                Suite →
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!current) return (
    <div className="flex items-center justify-center h-screen text-slate-400">Leçon introuvable</div>
  );

  /* ── Exercise screen ── */
  return (
    <div className="min-h-screen pb-24 lg:pb-10">
      <div className="max-w-xl mx-auto px-4 py-5">

        {/* Top bar */}
        <div className="flex items-center gap-3 mb-5">
          <Link href={`/learn/${language}`}>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 cursor-pointer shrink-0 transition-colors"
            >
              ✕
            </motion.button>
          </Link>

          <div className="flex-1 relative">
            <div className="h-3.5 bg-slate-800 rounded-full overflow-hidden border border-white/5">
              <motion.div
                className="h-full rounded-full relative overflow-hidden"
                style={{ background: 'linear-gradient(90deg, #8B5CF6, #06B6D4)' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <div className="absolute inset-0 animate-shimmer" />
              </motion.div>
            </div>
            <div className="flex justify-between text-[10px] text-slate-500 mt-0.5 px-0.5">
              <span>{currentIndex + 1}/{exercises.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>

          <div className="flex gap-0.5 shrink-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.span
                key={i}
                animate={i === (5 - hearts) && hearts < 5 ? { scale: [1, 1.6, 1] } : {}}
                transition={{ duration: 0.4 }}
                className={cn('text-base', i < hearts ? '' : 'opacity-20 grayscale')}
              >
                ❤️
              </motion.span>
            ))}
          </div>

          <motion.div
            key={xpGained}
            initial={xpGained > 0 ? { scale: 1.3 } : {}}
            animate={{ scale: 1 }}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl border shrink-0"
            style={{ background: 'rgba(234,179,8,0.15)', borderColor: 'rgba(234,179,8,0.35)' }}
          >
            <span className="text-yellow-400 text-sm">⭐</span>
            <span className="text-yellow-400 font-black text-sm">{xpGained}</span>
          </motion.div>
        </div>

        {/* Exercise */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.28 }}
          >
            {current.type === 'vocabulary' && <VocabularyExercise exercise={current} onComplete={handleComplete} />}
            {current.type === 'grammar' && <GrammarExercise exercise={current} onComplete={handleComplete} />}
            {current.type === 'reading' && <ReadingExercise exercise={current} onComplete={handleComplete} />}
            {current.type === 'listening' && <ListeningExercise exercise={current} onComplete={handleComplete} />}
            {current.type === 'speaking' && <SpeakingExercise exercise={current} onComplete={handleComplete} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
