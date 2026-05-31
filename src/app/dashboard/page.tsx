'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { mockUser, languageInfo, streakCalendar } from '@/lib/data';
import ProgressRing from '@/components/ProgressRing';
import Mascot from '@/components/Mascot';
import { cn } from '@/lib/cn';

const leagueLabels = { bronze: 'Bronze', silver: 'Argent', gold: 'Or', diamond: 'Diamant' };
const leagueColors = { bronze: '#CD7F32', silver: '#C0C0C0', gold: '#FFD700', diamond: '#B9F2FF' };

const skillColors = ['#8B5CF6', '#10B981', '#F97316', '#06B6D4'];
const skills = ['Lecture', 'Grammaire', 'Écoute', 'Expression'];
const skillProgress = [78, 65, 72, 58];

function StatCard({ icon, value, label, color }: { icon: string; value: string | number; label: string; color: string }) {
  return (
    <motion.div whileHover={{ y: -2 }} className="glass-card rounded-2xl p-4 border border-white/8">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0" style={{ background: `${color}20` }}>
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-lg font-black text-white leading-none">{value}</p>
          <p className="text-xs text-slate-400 mt-0.5 truncate">{label}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function DashboardPage() {
  const currentLang = mockUser.languages[0];

  return (
    <div className="min-h-screen pb-24 lg:pb-10">
      <div className="max-w-4xl mx-auto px-4 py-6 lg:py-8 space-y-5">

        {/* ── Header ── */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm">Bienvenue,</p>
            <h1 className="text-xl lg:text-2xl font-black text-white">{mockUser.name} 👋</h1>
          </div>
          <Link href="/profile">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 rounded-full bg-linear-to-br from-violet-500 to-cyan-500 flex items-center justify-center font-bold text-white cursor-pointer"
            >
              {mockUser.avatar}
            </motion.div>
          </Link>
        </div>

        {/* ── Daily goal banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl lg:rounded-3xl p-5 border border-violet-500/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-br from-violet-600/10 to-cyan-500/5 pointer-events-none" />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <Mascot mood="happy" size="md" />
              <div className="min-w-0">
                <h2 className="text-base lg:text-lg font-black text-white">Continuez votre streak !</h2>
                <p className="text-sm text-violet-300">Plus que 1 leçon pour l&apos;objectif du jour</p>
              </div>
            </div>
            <Link href={`/learn/${currentLang.language}`} className="w-full sm:w-auto shrink-0">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto px-5 py-3 bg-linear-to-r from-violet-600 to-cyan-500 rounded-xl font-bold text-white cursor-pointer text-sm"
              >
                Continuer →
              </motion.button>
            </Link>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-xs text-slate-400 mb-1">
              <span>Aujourd&apos;hui</span>
              <span>2 / 3 leçons</span>
            </div>
            <div className="h-2 bg-slate-700/60 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-linear-to-r from-violet-500 to-cyan-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '66%' }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              />
            </div>
          </div>
        </motion.div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatCard icon="📚" value={currentLang.wordsLearned} label="Mots appris" color="#8B5CF6" />
          <StatCard icon="⭐" value={`${mockUser.xp} XP`} label="XP total" color="#F59E0B" />
          <StatCard icon="🎯" value={currentLang.level} label="Niveau CECR" color="#10B981" />
          <StatCard icon="🏆" value={leagueLabels[mockUser.league]} label="Ligue" color={leagueColors[mockUser.league]} />
        </div>

        {/* ── Languages + Skills ── */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Languages */}
          <div className="lg:col-span-2 glass-card rounded-2xl p-5 border border-white/8">
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide text-slate-400">Mes langues</h3>
            <div className="space-y-3">
              {mockUser.languages.map(lang => {
                const info = languageInfo[lang.language];
                const pct = (lang.xp / lang.totalXP) * 100;
                return (
                  <Link key={lang.language} href={`/learn/${lang.language}`}>
                    <motion.div
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 cursor-pointer transition-all"
                    >
                      <span className="text-2xl lg:text-3xl shrink-0">{info.flag}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-white text-sm">{info.name}</span>
                          <span className="text-xs text-slate-400 shrink-0 ml-2">{lang.level}</span>
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
                        <p className="text-xs text-slate-500 mt-0.5">{lang.xp}/{lang.totalXP} XP</p>
                      </div>
                      <span className="text-slate-500 text-sm shrink-0">→</span>
                    </motion.div>
                  </Link>
                );
              })}
              <Link href="/auth/register">
                <motion.button
                  whileHover={{ scale: 1.005 }}
                  className="w-full p-3 rounded-xl border-2 border-dashed border-white/10 text-slate-500 text-sm hover:border-violet-500/40 hover:text-violet-400 cursor-pointer transition-all"
                >
                  + Ajouter une langue
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Skills */}
          <div className="glass-card rounded-2xl p-5 border border-white/8">
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide text-slate-400">Compétences anglais</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <div key={skill} className="flex flex-col items-center gap-1.5">
                  <ProgressRing
                    value={skillProgress[i]}
                    size={64}
                    strokeWidth={5}
                    color={skillColors[i]}
                    label={`${skillProgress[i]}%`}
                  />
                  <span className="text-xs text-slate-400 text-center">{skill}</span>
                </div>
              ))}
            </div>
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
                className={cn(
                  'aspect-square rounded-md cursor-default transition-all',
                  day.hasActivity ? 'bg-orange-500' : 'bg-slate-700/60'
                )}
              />
            ))}
          </div>
          <div className="flex items-center gap-4 mt-3 text-xs text-slate-500">
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-orange-500" /><span>Pratiqué</span></div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-slate-700" /><span>Manqué</span></div>
          </div>
        </div>

        {/* ── Badges ── */}
        <div className="glass-card rounded-2xl p-5 border border-white/8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-white">Badges récents</h3>
            <Link href="/profile" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">Voir tout →</Link>
          </div>
          <div className="flex gap-3 flex-wrap">
            {mockUser.badges.map((badge, i) => (
              <motion.div
                key={badge.id}
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: i * 0.08, type: 'spring' }}
                whileHover={{ scale: 1.1, y: -2 }}
                title={`${badge.name}: ${badge.description}`}
                className="flex flex-col items-center gap-1 cursor-default"
              >
                <div
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center text-xl lg:text-2xl"
                  style={{ background: `${badge.color}25`, border: `2px solid ${badge.color}50` }}
                >
                  {badge.icon}
                </div>
                <span className="text-[10px] text-slate-400 text-center w-14 leading-tight">{badge.name}</span>
              </motion.div>
            ))}
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-1 opacity-25">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-slate-700 border-2 border-slate-600 flex items-center justify-center text-xl">🔒</div>
                <span className="text-[10px] text-slate-600 text-center">???</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── AI Recommendation ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-2xl p-5 border border-cyan-500/20"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-xl shrink-0">🤖</div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-cyan-300 mb-1">Recommandation IA du jour</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Travaillez votre <strong>prononciation</strong> — 3 erreurs hier sur le son &ldquo;th&rdquo;.
                Unité recommandée&nbsp;: <span className="text-violet-300">&ldquo;Daily Routine&rdquo;</span>.
              </p>
              <Link href="/learn/english">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="mt-3 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-xl text-cyan-300 text-sm font-medium cursor-pointer hover:bg-cyan-500/30 transition-all"
                >
                  Commencer →
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
