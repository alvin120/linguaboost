'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/cn';
import { Exercise } from '@/lib/types';

interface Props {
  exercise: Exercise;
  onComplete: (correct: boolean, xp: number) => void;
}

export default function GrammarExercise({ exercise, onComplete }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

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
      {/* Grammar badge */}
      <div className="flex justify-center">
        <span className="px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-sm font-medium">
          Grammaire
        </span>
      </div>

      {/* Question */}
      <div className="glass-card rounded-2xl p-6 text-center">
        <p className="text-lg font-medium text-slate-100 leading-relaxed">{exercise.question}</p>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {exercise.options?.map((option, index) => {
          const isSelected = selected === option;
          const correct = option === exercise.correctAnswer;

          return (
            <motion.button
              key={option}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={!showResult ? { x: 4 } : {}}
              whileTap={!showResult ? { scale: 0.99 } : {}}
              onClick={() => handleSelect(option)}
              disabled={showResult}
              className={cn(
                'w-full option-btn p-4 rounded-2xl text-left font-medium transition-all cursor-pointer',
                'bg-slate-800/60 text-slate-200',
                showResult && isSelected && isCorrect && 'correct',
                showResult && isSelected && !isCorrect && 'incorrect',
                showResult && !isSelected && correct && 'correct',
              )}
            >
              <div className="flex items-center gap-3">
                <span className={cn(
                  'w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all',
                  showResult && isSelected && isCorrect ? 'bg-emerald-500 text-white' :
                  showResult && isSelected && !isCorrect ? 'bg-red-500 text-white' :
                  showResult && correct ? 'bg-emerald-500 text-white' :
                  'bg-slate-700 text-slate-400'
                )}>
                  {showResult && isSelected ? (isCorrect ? '✓' : '✗') :
                   showResult && correct ? '✓' :
                   String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1">{option}</span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Explanation */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              'rounded-2xl p-5 border',
              isCorrect
                ? 'bg-emerald-500/10 border-emerald-500/30'
                : 'bg-orange-500/10 border-orange-500/30'
            )}
          >
            <div className="flex gap-3">
              <span className="text-2xl flex-shrink-0">{isCorrect ? '⭐' : '📚'}</span>
              <div>
                <p className={cn('font-bold mb-1', isCorrect ? 'text-emerald-300' : 'text-orange-300')}>
                  {isCorrect ? 'Parfait ! +' + exercise.xpReward + ' XP' : 'Bonne tentative !'}
                </p>
                <p className="text-sm text-slate-300">{exercise.explanation}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
