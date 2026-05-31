'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { leaderboard } from '@/lib/data';
import { cn } from '@/lib/cn';

const leagues = [
  { id: 'gold',   label: 'Or',     icon: '🥇', color: '#FFD700' },
  { id: 'silver', label: 'Argent', icon: '🥈', color: '#C0C0C0' },
  { id: 'bronze', label: 'Bronze', icon: '🥉', color: '#CD7F32' },
];

const rankMeta: Record<number, { bg: string; text: string; icon: string }> = {
  1: { bg: 'from-yellow-500/20 to-amber-500/10', text: 'text-yellow-400', icon: '🥇' },
  2: { bg: 'from-slate-400/20 to-slate-500/10',  text: 'text-slate-300',  icon: '🥈' },
  3: { bg: 'from-amber-700/20 to-amber-800/10',  text: 'text-amber-600',  icon: '🥉' },
};

export default function LeaderboardPage() {
  const [activeLeague, setActiveLeague] = useState('gold');
  const [period, setPeriod] = useState<'week' | 'month' | 'all'>('week');

  return (
    <div className="min-h-screen pb-24 lg:pb-10">
      <div className="max-w-2xl mx-auto px-4 py-6 lg:py-8">

        {/* ── Header ── */}
        <div className="text-center mb-5 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-black text-white mb-1">Classement 🏆</h1>
          <p className="text-slate-400 text-sm">Se termine dans 3 jours · Semaine 22</p>
        </div>

        {/* ── League tabs ── */}
        <div className="flex gap-2 mb-3">
          {leagues.map(lg => (
            <button
              key={lg.id}
              onClick={() => setActiveLeague(lg.id)}
              className={cn(
                'flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold cursor-pointer transition-all',
                activeLeague === lg.id
                  ? 'border text-white'
                  : 'bg-slate-800/60 text-slate-400 hover:text-slate-200'
              )}
              style={activeLeague === lg.id
                ? { background: `${lg.color}20`, borderColor: `${lg.color}40`, color: lg.color }
                : {}}
            >
              <span>{lg.icon}</span>
              <span className="hidden sm:inline">{lg.label}</span>
            </button>
          ))}
        </div>

        {/* ── Period tabs ── */}
        <div className="flex gap-1 mb-5 bg-slate-800/60 p-1 rounded-xl">
          {(['week', 'month', 'all'] as const).map(p => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={cn(
                'flex-1 py-2 rounded-lg text-xs sm:text-sm font-medium cursor-pointer transition-all',
                period === p ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-slate-200'
              )}
            >
              {p === 'week' ? 'Semaine' : p === 'month' ? 'Mois' : 'Tout temps'}
            </button>
          ))}
        </div>

        {/* ── Promotion info ── */}
        <div className="glass-card rounded-xl p-3 sm:p-4 mb-4 border border-yellow-500/20">
          <div className="flex items-center gap-3">
            <span className="text-xl shrink-0">📈</span>
            <div className="min-w-0">
              <p className="text-sm font-bold text-yellow-300">Top 10 → Promu en Diamant</p>
              <p className="text-xs text-slate-400">Bottom 5 → Rétrogradé. Vous êtes <strong className="text-white">6ème</strong>.</p>
            </div>
          </div>
        </div>

        {/* ── Entries ── */}
        <div className="space-y-2">
          {leaderboard.map((entry, i) => {
            const meta = rankMeta[entry.rank];
            return (
              <motion.div
                key={entry.rank}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ x: 2 }}
                className={cn(
                  'glass-card rounded-xl sm:rounded-2xl px-3 sm:px-4 py-3 border flex items-center gap-2 sm:gap-3',
                  entry.isCurrentUser ? 'border-violet-500/50 bg-violet-600/10' : 'border-white/8',
                  meta && `bg-linear-to-r ${meta.bg}`
                )}
              >
                {/* Rank */}
                <div className="w-7 sm:w-8 shrink-0 text-center">
                  {meta
                    ? <span className="text-lg sm:text-xl">{meta.icon}</span>
                    : <span className={cn('text-sm font-bold', entry.isCurrentUser ? 'text-violet-400' : 'text-slate-400')}>{entry.rank}</span>
                  }
                </div>

                {/* Avatar */}
                <div className={cn(
                  'w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-white text-sm shrink-0',
                  entry.isCurrentUser
                    ? 'bg-linear-to-br from-violet-500 to-cyan-500'
                    : 'bg-linear-to-br from-slate-600 to-slate-500'
                )}>
                  {entry.user.avatar}
                </div>

                {/* Name + bar */}
                <div className="flex-1 min-w-0">
                  <p className={cn('font-semibold text-sm leading-none mb-1.5', entry.isCurrentUser ? 'text-violet-300' : 'text-white')}>
                    {entry.user.name}
                    {entry.isCurrentUser && (
                      <span className="ml-1.5 text-[10px] bg-violet-600/40 text-violet-300 px-1.5 py-0.5 rounded-full">Vous</span>
                    )}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-1 flex-1 bg-slate-700 rounded-full overflow-hidden max-w-20">
                      <div
                        className="h-full bg-linear-to-r from-violet-500 to-cyan-500 rounded-full"
                        style={{ width: `${(entry.weeklyXP / 1240) * 100}%` }}
                      />
                    </div>
                    <span className="text-[11px] text-slate-500 shrink-0">{entry.weeklyXP} XP</span>
                  </div>
                </div>

                {/* XP badge */}
                <div className="text-right shrink-0">
                  <span className={cn('text-sm font-bold', meta ? meta.text : 'text-slate-400')}>
                    {entry.weeklyXP.toLocaleString('fr-FR')}
                  </span>
                  <p className="text-[10px] text-slate-600">XP</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Motivation ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 glass-card rounded-2xl p-5 border border-violet-500/20 text-center"
        >
          <p className="text-base sm:text-lg font-bold text-white mb-1">240 XP vous séparent du Top 5 !</p>
          <p className="text-sm text-slate-400 mb-4">Encore 3 leçons pour dépasser Emma V.</p>
          <Link href="/learn/english">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-linear-to-r from-violet-600 to-cyan-500 rounded-xl font-bold text-white cursor-pointer text-sm sm:text-base"
            >
              Pratiquer maintenant →
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
