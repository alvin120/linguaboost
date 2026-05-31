'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { use } from 'react';
import { englishUnits, spanishUnits, languageInfo } from '@/lib/data';
import { Unit, LessonStatus } from '@/lib/types';
import { cn } from '@/lib/cn';

const exerciseIcons: Record<string, string> = {
  vocabulary: '📖',
  grammar: '✏️',
  reading: '📰',
  listening: '🎧',
  speaking: '🎤',
};

const statusColors: Record<LessonStatus, string> = {
  completed: '#10B981',
  in_progress: '#8B5CF6',
  available: '#F97316',
  locked: '#374151',
};

function LessonDot({ status, type, xp, title }: { status: LessonStatus; type: string; xp: number; title: string }) {
  const isLocked = status === 'locked';
  return (
    <motion.div
      whileHover={!isLocked ? { scale: 1.1 } : {}}
      className={cn('flex flex-col items-center gap-1', isLocked ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer')}
    >
      <div
        className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl border-2 transition-all relative"
        style={{
          backgroundColor: `${statusColors[status]}20`,
          borderColor: statusColors[status],
          boxShadow: status !== 'locked' ? `0 0 12px ${statusColors[status]}40` : 'none',
        }}
      >
        {status === 'locked' ? '🔒' : exerciseIcons[type]}
        {status === 'completed' && (
          <div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
            <span className="text-white text-[9px] font-bold">✓</span>
          </div>
        )}
        {status === 'in_progress' && (
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-violet-400"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </div>
      <span className="text-[9px] text-slate-500 text-center w-14 truncate">{title}</span>
      {status !== 'locked' && (
        <span className="text-[9px] font-bold text-yellow-500">+{xp} XP</span>
      )}
    </motion.div>
  );
}

function UnitCard({ unit, languageId, delay }: { unit: Unit; languageId: string; delay: number }) {
  const completedLessons = unit.lessons.filter(l => l.status === 'completed').length;
  const totalLessons = unit.lessons.length;
  const isLocked = unit.lessons[0].status === 'locked';
  const hasInProgress = unit.lessons.some(l => l.status === 'in_progress');
  const activeLesson = unit.lessons.find(l => l.status === 'in_progress');

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45 }}
      className={cn(
        'glass-card rounded-2xl p-5 border relative overflow-hidden',
        isLocked ? 'border-white/5 opacity-60' : hasInProgress ? 'border-violet-500/30' : 'border-white/10'
      )}
    >
      {/* Color strip */}
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
        style={{ background: isLocked ? '#374151' : `linear-gradient(90deg, ${unit.color}, ${unit.color}88)` }}
      />

      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
          style={{ background: `${isLocked ? '#374151' : unit.color}25`, border: `2px solid ${isLocked ? '#374151' : unit.color}60` }}
        >
          {unit.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-1.5 mb-1">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">{unit.level}</span>
            {hasInProgress && (
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xs px-2 py-0.5 rounded-full bg-violet-500/30 text-violet-300"
              >En cours</motion.span>
            )}
            {completedLessons === totalLessons && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300">Terminé ✓</span>
            )}
          </div>
          <h3 className="font-bold text-white text-sm leading-tight">{unit.titleFr}</h3>
          <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{unit.description}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-lg font-black text-white">{completedLessons}/{totalLessons}</p>
          <p className="text-xs text-slate-500">leçons</p>
        </div>
      </div>

      {/* Progress */}
      <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${unit.color}, ${unit.color}88)` }}
          initial={{ width: 0 }}
          animate={{ width: `${(completedLessons / totalLessons) * 100}%` }}
          transition={{ duration: 1, ease: 'easeOut', delay: delay + 0.3 }}
        />
      </div>

      {/* Lesson dots */}
      <div className="flex items-end justify-center gap-3 flex-wrap">
        {unit.lessons.map(lesson => {
          if (isLocked || lesson.status === 'locked') {
            return <LessonDot key={lesson.id} status={lesson.status} type={lesson.type} xp={lesson.xpReward} title={lesson.title} />;
          }
          return (
            <Link key={lesson.id} href={`/learn/${languageId}/lesson/${lesson.id}`}>
              <LessonDot status={lesson.status} type={lesson.type} xp={lesson.xpReward} title={lesson.title} />
            </Link>
          );
        })}
      </div>

      {/* CTA */}
      {hasInProgress && activeLesson && (
        <Link href={`/learn/${languageId}/lesson/${activeLesson.id}`}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-4 py-3 bg-linear-to-r from-violet-600 to-violet-500 rounded-xl font-bold text-white cursor-pointer text-sm"
          >
            Continuer la leçon →
          </motion.button>
        </Link>
      )}
      {isLocked && (
        <p className="mt-3 text-center text-xs text-slate-500">🔒 Terminez l&apos;unité précédente pour débloquer</p>
      )}
    </motion.div>
  );
}

export default function LearnPage({ params }: { params: Promise<{ language: string }> }) {
  const { language } = use(params);
  const units = language === 'spanish' ? spanishUnits : englishUnits;
  const info = languageInfo[language as keyof typeof languageInfo] ?? languageInfo.english;

  return (
    <div className="min-h-screen pb-24 lg:pb-10">
      <div className="max-w-2xl mx-auto px-4 py-6 lg:py-8">

        {/* ── Header card ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl p-4 lg:p-5 mb-5 border border-white/8"
        >
          <div className="flex items-center gap-4">
            <span className="text-4xl">{info.flag}</span>
            <div className="flex-1 min-w-0">
              <h1 className="text-lg lg:text-xl font-black text-white">{info.name}</h1>
              <p className="text-slate-400 text-sm truncate">{info.nativeName} · 342 mots appris</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xl font-black gradient-text">2 450</p>
              <p className="text-xs text-slate-400">XP total</p>
            </div>
          </div>

          {/* CEFR level pills */}
          <div className="flex gap-1.5 mt-3 overflow-x-auto pb-0.5 no-scrollbar">
            {(['A1','A2','B1','B2','C1','C2'] as const).map(level => {
              const isActive = level === 'B1';
              const isPast = level === 'A1' || level === 'A2';
              return (
                <span
                  key={level}
                  className={cn(
                    'px-3 py-1 rounded-full text-xs font-bold shrink-0',
                    isActive ? 'bg-violet-600 text-white' :
                    isPast ? 'bg-emerald-500/30 text-emerald-400' :
                    'bg-slate-700 text-slate-500'
                  )}
                >
                  {isPast ? '✓ ' : ''}{level}
                </span>
              );
            })}
          </div>
        </motion.div>

        {/* ── Legend ── */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-5 text-xs text-slate-500">
          {[
            { color: 'bg-emerald-500', label: 'Terminé' },
            { color: 'bg-violet-500', label: 'En cours' },
            { color: 'bg-orange-500', label: 'Disponible' },
            { color: 'bg-slate-700', label: 'Verrouillé' },
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              <div className={cn('w-3 h-3 rounded-sm', color)} />
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* ── Units ── */}
        <div className="space-y-5">
          {units.map((unit, i) => (
            <div key={unit.id} className="relative">
              {i < units.length - 1 && (
                <div className="absolute left-1/2 -translate-x-1/2 w-px h-5 bg-linear-to-b from-slate-600 to-transparent bottom-0 translate-y-full z-10" />
              )}
              <UnitCard unit={unit} languageId={language} delay={i * 0.08} />
            </div>
          ))}
        </div>

        {/* ── Coming soon ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center glass-card rounded-2xl p-6 border border-white/5"
        >
          <p className="text-2xl mb-2">🚀</p>
          <p className="font-bold text-white mb-1">Plus de contenu arrive !</p>
          <p className="text-sm text-slate-400">Niveaux B2, C1, C2 bientôt disponibles</p>
        </motion.div>
      </div>
    </div>
  );
}
