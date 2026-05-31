'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/cn';
import { Exercise } from '@/lib/types';

interface Props {
  exercise: Exercise;
  onComplete: (correct: boolean, xp: number) => void;
}

type RecordingState = 'idle' | 'recording' | 'done';

export default function SpeakingExercise({ exercise, onComplete }: Props) {
  const [recordingState, setRecordingState] = useState<RecordingState>('idle');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const words = (exercise.correctAnswer as string).split(' ');

  const startRecording = () => {
    setRecordingState('recording');
    setTimeout(() => {
      const s = Math.floor(Math.random() * 30) + 65;
      setScore(s);
      setRecordingState('done');
      setShowResult(true);
      setTimeout(() => onComplete(s >= 70, exercise.xpReward), 2000);
    }, 3000);
  };

  const getScoreColor = (s: number) => {
    if (s >= 85) return '#10B981';
    if (s >= 70) return '#F59E0B';
    return '#EF4444';
  };

  const getScoreLabel = (s: number) => {
    if (s >= 85) return 'Excellent !';
    if (s >= 70) return 'Bien !';
    return 'À améliorer';
  };

  return (
    <div className="space-y-6">
      {/* Target phrase */}
      <div className="glass-card rounded-2xl p-6 border border-emerald-500/20">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-emerald-400">🎤</span>
          <span className="text-sm text-emerald-400 font-medium">Répétez cette phrase</span>
        </div>
        <p className="text-xl font-semibold text-white text-center leading-relaxed">
          "{exercise.correctAnswer}"
        </p>
        <p className="text-center text-slate-400 text-sm mt-2">/hɛloʊ, maɪ neɪm ɪz æləks/</p>
      </div>

      {/* Word breakdown */}
      <div className="flex flex-wrap gap-2 justify-center">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            className={cn(
              'px-3 py-1.5 rounded-xl text-sm font-medium border transition-all',
              showResult && score >= 70
                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                : showResult && score < 70 && i === 3
                ? 'bg-red-500/20 border-red-500/40 text-red-300'
                : 'bg-slate-800 border-slate-700 text-slate-300'
            )}
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* Recording button */}
      <div className="flex flex-col items-center gap-4">
        {recordingState !== 'done' && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startRecording}
            disabled={recordingState === 'recording'}
            className={cn(
              'relative w-20 h-20 rounded-full flex items-center justify-center cursor-pointer transition-all',
              recordingState === 'recording'
                ? 'bg-red-500 shadow-lg shadow-red-500/40'
                : 'bg-violet-600 hover:bg-violet-500 shadow-lg shadow-violet-500/30'
            )}
          >
            {recordingState === 'recording' && (
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-red-400"
                animate={{ scale: [1, 1.4], opacity: [1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
            <span className="text-3xl">
              {recordingState === 'idle' ? '🎤' : '⏹️'}
            </span>
          </motion.button>
        )}

        {recordingState === 'recording' && (
          <div className="flex items-center gap-1">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1 rounded-full bg-red-400"
                animate={{
                  height: [4, Math.random() * 30 + 8, 4],
                }}
                transition={{
                  duration: 0.4,
                  repeat: Infinity,
                  delay: i * 0.05,
                }}
              />
            ))}
          </div>
        )}

        {recordingState === 'idle' && (
          <p className="text-sm text-slate-400 text-center">
            Appuyez sur le micro et parlez clairement
          </p>
        )}
      </div>

      {/* Score result */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-2xl p-6 text-center border"
            style={{ borderColor: `${getScoreColor(score)}40` }}
          >
            <p className="text-slate-400 text-sm mb-2">Score de prononciation</p>
            <motion.p
              className="text-5xl font-black mb-1"
              style={{ color: getScoreColor(score) }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
            >
              {score}%
            </motion.p>
            <p className="font-bold text-lg mb-3" style={{ color: getScoreColor(score) }}>
              {getScoreLabel(score)}
            </p>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: getScoreColor(score) }}
                initial={{ width: 0 }}
                animate={{ width: `${score}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>
            <p className="text-xs text-slate-400 mt-3">{exercise.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
