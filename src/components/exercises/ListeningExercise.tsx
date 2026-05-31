'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/cn';
import { Exercise } from '@/lib/types';

interface Props {
  exercise: Exercise;
  onComplete: (correct: boolean, xp: number) => void;
}

export default function ListeningExercise({ exercise, onComplete }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [showSubtitles, setShowSubtitles] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [waveProgress, setWaveProgress] = useState(0);

  const simulateAudio = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setWaveProgress(0);
    setPlayCount(p => p + 1);
    const duration = 3000 / speed;
    const step = 100 / (duration / 50);
    intervalRef.current = setInterval(() => {
      setWaveProgress(p => {
        if (p >= 100) {
          clearInterval(intervalRef.current!);
          setIsPlaying(false);
          return 100;
        }
        return p + step;
      });
    }, 50);
  };

  const handleSelect = (option: string) => {
    if (showResult || playCount === 0) return;
    setSelected(option);
    setShowResult(true);
    setTimeout(() => {
      onComplete(option === exercise.correctAnswer, exercise.xpReward);
    }, 1800);
  };

  const isCorrect = selected === exercise.correctAnswer;
  const bars = Array.from({ length: 24 }, (_, i) => ({
    height: Math.sin(i * 0.5) * 40 + 20 + Math.random() * 20,
  }));

  return (
    <div className="space-y-6">
      {/* Audio Player */}
      <div className="glass-card rounded-3xl p-6 border border-cyan-500/20">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-sm text-cyan-400 font-medium">Audio natif · UK English</span>
        </div>

        {/* Waveform */}
        <div className="flex items-center gap-1 h-14 mb-4">
          {bars.map((bar, i) => {
            const isActive = (i / bars.length) * 100 <= waveProgress;
            return (
              <motion.div
                key={i}
                className={cn('rounded-full flex-1', isActive ? 'bg-cyan-400' : 'bg-slate-600')}
                style={{ height: bar.height }}
                animate={isPlaying && isActive ? { scaleY: [1, 1.3, 1] } : {}}
                transition={{ duration: 0.3, delay: i * 0.02, repeat: isPlaying ? Infinity : 0 }}
              />
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={simulateAudio}
            disabled={isPlaying}
            className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white cursor-pointer disabled:opacity-50"
          >
            {isPlaying ? (
              <span className="w-3 h-3 rounded-sm bg-white" />
            ) : (
              <svg viewBox="0 0 24 24" className="w-5 h-5 ml-0.5" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </motion.button>

          {/* Speed selector */}
          <div className="flex gap-1">
            {[0.75, 1, 1.25].map(s => (
              <button
                key={s}
                onClick={() => setSpeed(s)}
                className={cn(
                  'px-2 py-1 rounded-lg text-xs font-medium cursor-pointer',
                  speed === s ? 'bg-cyan-500/30 text-cyan-300' : 'text-slate-400 hover:text-slate-200'
                )}
              >
                {s}x
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowSubtitles(!showSubtitles)}
            className={cn(
              'ml-auto px-3 py-1 rounded-lg text-xs cursor-pointer transition-all',
              showSubtitles ? 'bg-violet-500/30 text-violet-300' : 'text-slate-400 hover:text-slate-200'
            )}
          >
            CC
          </button>
        </div>

        {/* Subtitles */}
        <AnimatePresence>
          {showSubtitles && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 pt-3 border-t border-white/8"
            >
              <p className="text-sm text-slate-300 italic">"{exercise.correctAnswer}"</p>
            </motion.div>
          )}
        </AnimatePresence>

        {playCount === 0 && (
          <p className="text-center text-xs text-slate-500 mt-2">
            Appuyez sur lecture pour écouter
          </p>
        )}
      </div>

      {/* Question */}
      <p className="text-slate-300 font-medium">{exercise.question}</p>

      {/* Options */}
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
              onClick={() => handleSelect(option)}
              disabled={showResult || playCount === 0}
              className={cn(
                'w-full option-btn p-4 rounded-xl text-left cursor-pointer',
                'bg-slate-800/60 text-slate-200',
                playCount === 0 && 'opacity-50',
                showResult && isSelected && isCorrect && 'correct',
                showResult && isSelected && !isCorrect && 'incorrect',
                showResult && !isSelected && correct && 'correct',
              )}
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-slate-700 text-slate-400 flex items-center justify-center text-xs">
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
              </div>
            </motion.button>
          );
        })}
      </div>

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
            <p className="font-bold mb-1">{isCorrect ? '🎧 Parfaite écoute !' : '🔊 Ré-écoutez...'}</p>
            <p className="text-sm opacity-90">{exercise.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
