'use client';
import { motion } from 'framer-motion';
import { mockUser, languageInfo, streakCalendar } from '@/lib/data';
import ProgressRing from '@/components/ProgressRing';
import { cn } from '@/lib/cn';

const leagueConfig = {
  bronze:  { label: 'Bronze',  icon: '🥉', color: '#CD7F32', bg: 'from-yellow-900/40 to-amber-800/20' },
  silver:  { label: 'Argent',  icon: '🥈', color: '#C0C0C0', bg: 'from-slate-600/40 to-slate-500/20' },
  gold:    { label: 'Or',      icon: '🥇', color: '#FFD700', bg: 'from-yellow-600/40 to-amber-500/20' },
  diamond: { label: 'Diamant', icon: '💎', color: '#B9F2FF', bg: 'from-cyan-600/40 to-blue-500/20' },
};

const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const weekActivity = [true, true, false, true, true, true, false];

const skillData = [
  { label: 'Lecture',   value: 78, color: '#8B5CF6', icon: '📖' },
  { label: 'Grammaire', value: 65, color: '#10B981', icon: '✏️' },
  { label: 'Écoute',    value: 72, color: '#F97316', icon: '🎧' },
  { label: 'Oral',      value: 58, color: '#06B6D4', icon: '🎤' },
];

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ProfilePage() {
  const league = leagueConfig[mockUser.league];
  const xpPct = ((mockUser.xp % 500) / 500) * 100;
  const activeDays = weekActivity.filter(Boolean).length;

  return (
    <div className="min-h-screen pb-24 lg:pb-10">
      <div className="max-w-2xl mx-auto px-4 py-6 lg:py-8 space-y-4">

        {/* ── Profile hero ── */}
        <FadeUp delay={0}>
          <div className="glass-card rounded-3xl overflow-hidden border border-white/8">
            {/* Banner */}
            <div className={`h-24 sm:h-28 bg-linear-to-r ${league.bg} relative`}>
              <div className="absolute inset-0 bg-dot-grid opacity-40" />
              <div className="absolute inset-0 bg-linear-to-br from-violet-600/20 via-transparent to-cyan-500/15" />
            </div>

            <div className="px-5 sm:px-6 pb-6">
              {/* Avatar row */}
              <div className="flex items-end justify-between -mt-10 sm:-mt-12 mb-4">
                <div className="relative">
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-linear-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-4xl sm:text-5xl font-black text-white border-4 border-[#111827]"
                    style={{ boxShadow: '0 0 30px rgba(139,92,246,0.5)' }}
                  >
                    {mockUser.avatar}
                  </div>
                  <div
                    className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-lg border-2 border-[#111827]"
                    style={{ background: `${league.color}30`, boxShadow: `0 0 12px ${league.color}60` }}
                  >
                    {league.icon}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-4 py-2 glass border border-white/15 rounded-xl text-sm text-slate-300 hover:text-white cursor-pointer transition-all"
                >
                  ✏️ Modifier
                </motion.button>
              </div>

              {/* Info */}
              <div className="mb-4">
                <h1 className="text-2xl sm:text-3xl font-black text-white">{mockUser.name}</h1>
                <p className="text-slate-400 text-sm mt-0.5">{mockUser.email}</p>
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: `${league.color}20`, color: league.color, border: `1px solid ${league.color}40` }}
                  >
                    {league.icon} Ligue {league.label}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    Niveau {mockUser.level}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-300 border border-orange-500/30">
                    🔥 {mockUser.streak} jours
                  </span>
                </div>
              </div>

              {/* XP bar */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm mb-2">
                  <span className="text-slate-400">Niveau {mockUser.level} → {mockUser.level + 1}</span>
                  <span className="text-violet-400 font-bold">{mockUser.xp % 500} / 500 XP</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    className="h-full rounded-full relative overflow-hidden"
                    style={{ background: 'linear-gradient(90deg, #8B5CF6, #06B6D4)' }}
                    initial={{ width: 0 }}
                    animate={{ width: `${xpPct}%` }}
                    transition={{ duration: 1.4, ease: 'easeOut' }}
                  >
                    <div className="absolute inset-0 animate-shimmer" />
                  </motion.div>
                </div>
                <p className="text-xs text-slate-500 mt-1">{500 - (mockUser.xp % 500)} XP restant pour le niveau {mockUser.level + 1}</p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ── Stats row ── */}
        <FadeUp delay={0.07}>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: '🔥', value: mockUser.streak, label: 'Streak', color: '#F97316' },
              { icon: '⭐', value: mockUser.xp.toLocaleString('fr-FR'), label: 'XP Total', color: '#F59E0B' },
              { icon: '💎', value: mockUser.gems, label: 'Gemmes', color: '#06B6D4' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                whileHover={{ y: -3, boxShadow: `0 12px 40px ${s.color}25` }}
                className="glass-card rounded-2xl p-4 text-center transition-all duration-300"
                style={{ borderColor: `${s.color}20` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mx-auto mb-2"
                  style={{ background: `${s.color}18`, border: `1px solid ${s.color}30`, boxShadow: `0 0 14px ${s.color}25` }}
                >
                  {s.icon}
                </div>
                <p className="text-xl font-black" style={{ color: s.color }}>{s.value}</p>
                <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        {/* ── Skills ── */}
        <FadeUp delay={0.12}>
          <div className="glass-card rounded-2xl p-5 border border-white/8">
            <h3 className="font-bold text-white mb-5 flex items-center gap-2">
              <span className="text-lg">📊</span> Compétences
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skillData.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -12 : 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <ProgressRing value={skill.value} size={60} strokeWidth={5} color={skill.color} label={`${skill.value}%`} />
                  <div>
                    <p className="text-sm font-semibold text-white">{skill.label}</p>
                    <p className="text-xs text-slate-400">{skill.icon} {skill.value >= 70 ? 'Bon niveau' : 'À améliorer'}</p>
                    <div className="w-16 h-1 rounded-full mt-1.5 overflow-hidden bg-slate-700">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: skill.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.value}%` }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.08 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* ── Language progress ── */}
        <FadeUp delay={0.16}>
          <div className="glass-card rounded-2xl p-5 border border-white/8">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-lg">🌍</span> Mes langues
            </h3>
            <div className="space-y-5">
              {mockUser.languages.map(lang => {
                const info = languageInfo[lang.language];
                const pct = (lang.xp / lang.totalXP) * 100;
                return (
                  <div key={lang.language}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl shrink-0">{info.flag}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-white">{info.name}</span>
                          <span
                            className="text-xs font-black px-2 py-0.5 rounded-lg"
                            style={{ background: `${info.color}20`, color: info.color, border: `1px solid ${info.color}40` }}
                          >
                            {lang.level}
                          </span>
                        </div>
                        <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden border border-white/5">
                          <motion.div
                            className="h-full rounded-full relative overflow-hidden"
                            style={{ background: `linear-gradient(90deg, ${info.color}, ${info.color}88)` }}
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-slate-500 mt-1">
                          <span>{lang.xp.toLocaleString('fr-FR')} / {lang.totalXP.toLocaleString('fr-FR')} XP</span>
                          <span>{lang.wordsLearned} mots</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeUp>

        {/* ── This week ── */}
        <FadeUp delay={0.19}>
          <div className="glass-card rounded-2xl p-5 border border-white/8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-white flex items-center gap-2">
                <span className="text-lg">📅</span> Cette semaine
              </h3>
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(16,185,129,0.15)', color: '#34D399', border: '1px solid rgba(16,185,129,0.3)' }}
              >
                {activeDays}/7 jours ✓
              </span>
            </div>
            <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
              {weekDays.map((day, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.04, type: 'spring' }}
                    className={cn(
                      'w-full aspect-square rounded-xl flex items-center justify-center text-sm font-bold transition-all',
                      weekActivity[i]
                        ? 'text-white'
                        : 'bg-slate-800/60 border border-slate-700 text-slate-600'
                    )}
                    style={weekActivity[i] ? {
                      background: 'linear-gradient(135deg, rgba(139,92,246,0.5), rgba(6,182,212,0.4))',
                      border: '1px solid rgba(139,92,246,0.5)',
                      boxShadow: '0 0 12px rgba(139,92,246,0.3)',
                    } : {}}
                  >
                    {weekActivity[i] ? '✓' : '·'}
                  </motion.div>
                  <span className="text-[10px] text-slate-500 text-center">{day}</span>
                </div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 p-3 rounded-xl flex items-center gap-2"
              style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}
            >
              <span className="text-emerald-400 text-lg">🎯</span>
              <p className="text-sm text-emerald-300">
                <span className="font-bold">{activeDays}/7 jours</span> cette semaine · Plus que {7 - activeDays} jour{7 - activeDays > 1 ? 's' : ''} pour &quot;Semaine Parfaite&quot; !
              </p>
            </motion.div>
          </div>
        </FadeUp>

        {/* ── Streak calendar ── */}
        <FadeUp delay={0.22}>
          <div
            className="glass-card rounded-2xl p-5 border border-orange-500/15"
            style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.35), 0 0 40px rgba(249,115,22,0.06)' }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-white flex items-center gap-2">
                <span className="text-lg">🗓️</span> Streak calendrier
              </h3>
              <motion.span
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                className="text-sm font-black px-3 py-1 rounded-xl"
                style={{ background: 'rgba(249,115,22,0.15)', color: '#FB923C', border: '1px solid rgba(249,115,22,0.3)' }}
              >
                🔥 {mockUser.streak} jours
              </motion.span>
            </div>
            <div className="grid grid-cols-10 gap-1 sm:gap-1.5">
              {streakCalendar.map((day, idx) => {
                const intensity = day.hasActivity ? Math.min(1, (day.xp || 30) / 60) : 0;
                return (
                  <motion.div
                    key={day.day}
                    whileHover={{ scale: 1.4 }}
                    title={`Jour ${day.day}${day.hasActivity ? ` — ${day.xp} XP` : ''}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.012, type: 'spring', stiffness: 200 }}
                    className="aspect-square rounded-md cursor-default"
                    style={{
                      background: day.hasActivity
                        ? `rgba(249, ${Math.round(115 + intensity * 50)}, 22, ${0.5 + intensity * 0.5})`
                        : 'rgba(51, 65, 85, 0.5)',
                      boxShadow: day.hasActivity ? `0 0 6px rgba(249,115,22,${intensity * 0.4})` : 'none',
                    }}
                  />
                );
              })}
            </div>
            <div className="flex items-center gap-4 mt-3 text-xs text-slate-500">
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-orange-500" /><span>Pratiqué</span></div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-slate-700" /><span>Manqué</span></div>
            </div>
          </div>
        </FadeUp>

        {/* ── Badges ── */}
        <FadeUp delay={0.25}>
          <div className="glass-card rounded-2xl p-5 border border-white/8">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-white flex items-center gap-2">
                <span className="text-lg">🏆</span> Badges
              </h3>
              <span className="text-xs text-slate-500 bg-slate-800/60 px-2.5 py-1 rounded-full">
                {mockUser.badges.length} / 20 débloqués
              </span>
            </div>

            {/* Unlocked badges */}
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 mb-4">
              {mockUser.badges.map((badge, i) => (
                <motion.div
                  key={badge.id}
                  initial={{ scale: 0, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: i * 0.07, type: 'spring', stiffness: 260 }}
                  whileHover={{ scale: 1.12, y: -3 }}
                  className="flex flex-col items-center gap-1.5 cursor-default"
                >
                  <div
                    className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl transition-all"
                    style={{
                      background: `${badge.color}20`,
                      border: `2px solid ${badge.color}50`,
                      boxShadow: `0 0 16px ${badge.color}25`,
                    }}
                  >
                    {badge.icon}
                  </div>
                  <span className="text-[10px] text-slate-300 text-center font-medium leading-tight line-clamp-2">{badge.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Locked badges */}
            <div className="border-t border-white/6 pt-4">
              <p className="text-xs text-slate-500 mb-3">À débloquer</p>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                {Array.from({ length: Math.min(10, 20 - mockUser.badges.length) }).map((_, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5 opacity-30">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-2xl">
                      🔒
                    </div>
                    <span className="text-[10px] text-slate-600 text-center">???</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

      </div>
    </div>
  );
}
