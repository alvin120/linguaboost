'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/cn';
import { Exercise } from '@/lib/types';

interface Props {
  exercise: Exercise;
  onComplete: (correct: boolean, xp: number) => void;
}

export default function VocabularyExercise({ exercise, onComplete }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleSelect = (option: string) => {
    if (showResult) return;
    setSelected(option);
    setShowResult(true);
    setTimeout(() => {
      onComplete(option === exercise.correctAnswer, exercise.xpReward);
    }, 1800);
  };

  const isCorrect = selected === exercise.correctAnswer;

  return (
    <div className="space-y-6">
      {/* Flashcard */}
      <div className="flex justify-center">
        <motion.div
          className="relative w-48 h-48 cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="relative w-full h-full"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 glass-card rounded-3xl flex flex-col items-center justify-center border border-violet-500/30 gap-3"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <span className="text-6xl">{exercise.imageUrl}</span>
              <p className="text-xs text-slate-400">Cliquez pour voir</p>
            </div>
            {/* Back */}
            <div
              className="absolute inset-0 glass-card rounded-3xl flex flex-col items-center justify-center border border-emerald-500/30 gap-2"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <span className="text-3xl font-bold text-white">{exercise.correctAnswer as string}</span>
              <p className="text-sm text-emerald-400">/æpəl/</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Question */}
      <div className="text-center">
        <p className="text-lg font-medium text-slate-200">{exercise.question}</p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3">
        {exercise.options?.map((option, index) => {
          const isSelected = selected === option;
          const correct = option === exercise.correctAnswer;

          return (
            <motion.button
              key={option}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={!showResult ? { scale: 1.02, y: -2 } : {}}
              whileTap={!showResult ? { scale: 0.98 } : {}}
              onClick={() => handleSelect(option)}
              disabled={showResult}
              className={cn(
                'option-btn p-4 rounded-2xl text-left font-medium transition-all cursor-pointer',
                'bg-slate-800/60 text-slate-200',
                !showResult && 'hover:border-violet-500/50 hover:bg-violet-500/10',
                showResult && isSelected && isCorrect && 'correct',
                showResult && isSelected && !isCorrect && 'incorrect',
                showResult && !isSelected && correct && 'correct',
              )}
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-400">
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
                {showResult && isSelected && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto text-lg"
                  >
                    {isCorrect ? '✅' : '❌'}
                  </motion.span>
                )}
                {showResult && !isSelected && correct && (
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto text-lg">✅</motion.span>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Explanation */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={cn(
              'rounded-2xl p-4 border',
              isCorrect
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                : 'bg-red-500/10 border-red-500/30 text-red-300'
            )}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{isCorrect ? '🎯' : '💡'}</span>
              <div>
                <p className="font-bold mb-1">{isCorrect ? 'Excellent !' : 'Pas tout à fait...'}</p>
                <p className="text-sm opacity-90">{exercise.explanation}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
