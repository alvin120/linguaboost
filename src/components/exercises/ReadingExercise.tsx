'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/cn';
import { Exercise } from '@/lib/types';

interface Props {
  exercise: Exercise;
  onComplete: (correct: boolean, xp: number) => void;
}

export default function ReadingExercise({ exercise, onComplete }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showText, setShowText] = useState(true);

  const parts = exercise.question.split('**Question :**');
  const textPart = parts[0];
  const questionPart = parts[1] || exercise.question;

  const handleSelect = (option: string) => {
    if (showResult) return;
    setSelected(option);
    setShowResult(true);
    setTimeout(() => {
      onComplete(option === exercise.correctAnswer, exercise.xpReward);
    }, 1800);
  };

  const isCorrect = selected === exercise.correctAnswer;

  const renderText = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');
  };

  return (
    <div className="space-y-5">
      {/* Tab: Text / Question */}
      <div className="flex gap-2">
        <button
          onClick={() => setShowText(true)}
          className={cn(
            'flex-1 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer',
            showText ? 'bg-violet-600/30 text-violet-300 border border-violet-500/30' : 'bg-slate-800/60 text-slate-400'
          )}
        >
          Texte
        </button>
        <button
          onClick={() => setShowText(false)}
          className={cn(
            'flex-1 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer',
            !showText ? 'bg-violet-600/30 text-violet-300 border border-violet-500/30' : 'bg-slate-800/60 text-slate-400'
          )}
        >
          Question
        </button>
      </div>

      <AnimatePresence mode="wait">
        {showText ? (
          <motion.div
            key="text"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="glass-card rounded-2xl p-5 border border-white/8"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-emerald-400">📖</span>
              <span className="text-sm font-medium text-slate-300">Lisez attentivement</span>
            </div>
            <div
              className="text-slate-200 leading-relaxed text-sm italic"
              dangerouslySetInnerHTML={{ __html: renderText(textPart) }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="question"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="space-y-4"
          >
            <div className="glass-card rounded-2xl p-4">
              <p className="text-slate-200 font-medium">{questionPart?.trim()}</p>
            </div>
            <div className="space-y-2">
              {exercise.options?.map((option, index) => {
                const isSelected = selected === option;
                const correct = option === exercise.correctAnswer;

                return (
                  <motion.button
                    key={option}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.07 }}
                    whileHover={!showResult ? { x: 3 } : {}}
                    onClick={() => handleSelect(option)}
                    disabled={showResult}
                    className={cn(
                      'w-full option-btn p-3.5 rounded-xl text-left font-medium cursor-pointer',
                      'bg-slate-800/60 text-slate-200',
                      showResult && isSelected && isCorrect && 'correct',
                      showResult && isSelected && !isCorrect && 'incorrect',
                      showResult && !isSelected && correct && 'correct',
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-slate-700 flex items-center justify-center text-xs text-slate-400">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span>{option}</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              'rounded-2xl p-4 border',
              isCorrect ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                        : 'bg-orange-500/10 border-orange-500/30 text-orange-300'
            )}
          >
            <p className="font-bold mb-1">{isCorrect ? '✅ Correct !' : '❌ Pas tout à fait...'}</p>
            <p className="text-sm opacity-90">{exercise.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
