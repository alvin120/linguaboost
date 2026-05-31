'use client';
import { motion } from 'framer-motion';
import { mockUser, languageInfo, streakCalendar } from '@/lib/data';
import ProgressRing from '@/components/ProgressRing';
import { cn } from '@/lib/cn';

const leagueConfig = {
  bronze:  { label: 'Bronze',  icon: '🥉', color: '#CD7F32' },
  silver:  { label: 'Argent',  icon: '🥈', color: '#C0C0C0' },
  gold:    { label: 'Or',      icon: '🥇', color: '#FFD700' },
  diamond: { label: 'Diamant', icon: '💎', color: '#B9F2FF' },
};

const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
const weekActivity = [true, true, false, true, true, true, false];

export default function ProfilePage() {
  const league = leagueConfig[mockUser.league];
  const xpPct = ((mockUser.xp % 500) / 500) * 100;

  return (
    <div className="min-h-screen pb-24 lg:pb-10">
      <div className="max-w-2xl mx-auto px-4 py-6 lg:py-8 space-y-4 sm:space-y-5">

        {/* ── Profile header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl p-5 sm:p-6 border border-white/8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-br from-violet-600/10 to-transparent pointer-events-none" />
          <div className="relative flex items-center gap-4">
            <div className="relative shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-linear-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-3xl sm:text-4xl font-black text-white">
                {mockUser.avatar}
              </div>
              <div
                className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full flex items-center justify-center text-base border-2 border-[#111827]"
                style={{ background: `${league.color}30` }}
              >
                {league.icon}
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-xl sm:text-2xl font-black text-white truncate">{mockUser.name}</h1>
              <p className="text-slate-400 text-sm truncate">{mockUser.email}</p>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-bold"
                  style={{ background: `${league.color}25`, color: league.color, border: `1px solid ${league.color}40` }}
                >
                  Ligue {league.label}
                </span>
                <span className="text-sm text-slate-400">Niveau {mockUser.level}</span>
              </div>
            </div>
          </div>

          {/* XP bar */}
          <div className="mt-5">
            <div className="flex justify-between text-xs sm:text-sm mb-1.5">
              <span className="text-slate-400">XP — Niv. {mockUser.level}</span>
              <span className="text-violet-400 font-bold">{mockUser.xp % 500} / 500</span>
            </div>
            <div className="h-2.5 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full xp-bar rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${xpPct}%` }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">{500 - (mockUser.xp % 500)} XP pour le niveau {mockUser.level + 1}</p>
          </div>
        </motion.div>

        {/* ── Quick stats ── */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: '🔥', value: mockUser.streak, label: 'Streak', color: '#F97316' },
            { icon: '⭐', value: mockUser.xp.toLocaleString('fr-FR'), label: 'XP Total', color: '#F59E0B' },
            { icon: '💎', value: mockUser.gems, label: 'Gemmes', color: '#06B6D4' },
          ].map(s => (
            <motion.div key={s.label} whileHover={{ y: -2 }} className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center border border-white/8">
              <span className="text-xl sm:text-2xl">{s.icon}</span>
              <p className="text-lg sm:text-xl font-black text-white mt-1">{s.value}</p>
              <p className="text-xs text-slate-400">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Language progress ── */}
        <div className="glass-card rounded-2xl p-5 border border-white/8">
          <h3 className="font-bold text-slate-400 mb-4 text-xs uppercase tracking-wider">Progression par langue</h3>
          <div className="space-y-6">
            {mockUser.languages.map(lang => {
              const info = languageInfo[lang.language];
              const pct = (lang.xp / lang.totalXP) * 100;
              const skillData = [
                { label: 'Lecture',   value: 78, color: '#8B5CF6' },
                { label: 'Grammaire', value: 65, color: '#10B981' },
                { label: 'Écoute',    value: 72, color: '#F97316' },
                { label: 'Oral',      value: 58, color: '#06B6D4' },
              ];
              return (
                <div key={lang.language}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl sm:text-3xl shrink-0">{info.flag}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between mb-1">
                        <span className="font-semibold text-white text-sm">{info.name}</span>
                        <span className="text-sm font-bold text-violet-400 shrink-0 ml-2">{lang.level}</span>
                      </div>
                      <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${info.color}, ${info.color}88)` }}
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{lang.xp}/{lang.totalXP} XP · {lang.wordsLearned} mots</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 sm:gap-3">
                    {skillData.map(s => (
                      <div key={s.label} className="flex flex-col items-center gap-1">
                        <ProgressRing value={s.value} size={52} strokeWidth={4} color={s.color} label={`${s.value}%`} />
                        <span className="text-[10px] text-slate-500 text-center">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── This week ── */}
        <div className="glass-card rounded-2xl p-5 border border-white/8">
          <h3 className="font-bold text-slate-400 mb-4 text-xs uppercase tracking-wider">Cette semaine</h3>
          <div className="flex justify-between gap-1.5">
            {weekDays.map((day, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
                <div className={cn(
                  'w-full aspect-square rounded-xl flex items-center justify-center text-sm font-bold max-w-10',
                  weekActivity[i]
                    ? 'bg-violet-600/40 border border-violet-500 text-violet-300'
                    : 'bg-slate-700/60 border border-slate-600 text-slate-500'
                )}>
                  {weekActivity[i] ? '✓' : '·'}
                </div>
                <span className="text-[10px] text-slate-500">{day}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
            <p className="text-sm text-emerald-300">
              <span className="font-bold">5/7 jours</span> cette semaine · 2 jours pour &quot;Semaine Parfaite&quot; !
            </p>
          </div>
        </div>

        {/* ── Streak calendar ── */}
        <div className="glass-card rounded-2xl p-5 border border-white/8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-white">Streak calendrier</h3>
            <span className="text-sm text-orange-400 font-bold">🔥 {mockUser.streak} jours</span>
          </div>
          <div className="grid grid-cols-10 gap-1 sm:gap-1.5">
            {streakCalendar.map(day => (
              <motion.div
                key={day.day}
                whileHover={{ scale: 1.3 }}
                title={`Jour ${day.day}${day.hasActivity ? ` — ${day.xp} XP` : ''}`}
                className={cn('aspect-square rounded-sm sm:rounded cursor-default', day.hasActivity ? 'bg-orange-500' : 'bg-slate-700/60')}
              />
            ))}
          </div>
        </div>

        {/* ── Badges ── */}
        <div className="glass-card rounded-2xl p-5 border border-white/8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-white">Badges</h3>
            <span className="text-xs text-slate-500">{mockUser.badges.length} / 20 débloqués</span>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 sm:gap-4">
            {mockUser.badges.map((badge, i) => (
              <motion.div
                key={badge.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.08, type: 'spring' }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-1.5 cursor-default"
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-xl sm:text-2xl"
                  style={{ background: `${badge.color}25`, border: `2px solid ${badge.color}50` }}
                >
                  {badge.icon}
                </div>
                <span className="text-[10px] text-slate-300 text-center font-medium leading-tight">{badge.name}</span>
              </motion.div>
            ))}
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 opacity-20">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-700 border-2 border-slate-600 flex items-center justify-center text-lg">🔒</div>
                <span className="text-[10px] text-slate-600 text-center">???</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
