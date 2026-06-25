'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import Mascot from '@/components/Mascot';

const features = [
  { icon: '🧠', title: 'Répétition espacée', desc: 'Algorithme SM-2 comme Anki pour mémoriser durablement', color: '#8B5CF6' },
  { icon: '🎤', title: 'Reconnaissance vocale', desc: 'Score de prononciation phonème par phonème en temps réel', color: '#10B981' },
  { icon: '🎮', title: 'Gamification totale', desc: 'XP, ligues, badges, streak — apprenez comme vous jouez', color: '#F97316' },
  { icon: '🤖', title: 'Tuteur IA', desc: 'GPT-4o adapte chaque exercice à vos erreurs récentes', color: '#06B6D4' },
  { icon: '📊', title: 'Progression CECR', desc: 'Visualisez votre niveau de A1 à C2 par compétence', color: '#F59E0B' },
  { icon: '🔊', title: 'Audio natif', desc: 'UK, US, Mexique, Espagne, Brésil, Portugal', color: '#EC4899' },
];

const languages = [
  { name: 'Anglais', flag: '🇬🇧', level: 'A1 → C2', speakers: '1.5 milliard', color: 'from-blue-600 to-cyan-500', glowColor: 'rgba(59,130,246,0.3)', difficulty: 'Facile' },
  { name: 'Espagnol', flag: '🇪🇸', level: 'A1 → C2', speakers: '500 millions', color: 'from-red-600 to-orange-500', glowColor: 'rgba(239,68,68,0.3)', difficulty: 'Facile' },
  { name: 'Portugais', flag: '🇧🇷', level: 'A1 → C2', speakers: '250 millions', color: 'from-emerald-600 to-teal-500', glowColor: 'rgba(16,185,129,0.3)', difficulty: 'Moyen' },
];

const testimonials = [
  { name: 'Marie L.', role: 'Étudiante', text: 'En 3 mois j\'ai atteint B1 en anglais ! Les exercices de prononciation sont incroyables.', avatar: 'M', score: 'B1 en 3 mois', color: '#8B5CF6' },
  { name: 'Thomas R.', role: 'Développeur', text: 'La gamification me pousse à pratiquer chaque jour. Mon streak est à 45 jours !', avatar: 'T', score: '🔥 45 jours', color: '#F97316' },
  { name: 'Emma V.', role: 'Traductrice', text: 'Le tuteur IA détecte exactement mes faiblesses. Je progresse deux fois plus vite.', avatar: 'E', score: 'A2→B2 6 mois', color: '#10B981' },
];

const stats = [
  { value: '2M+', label: 'Apprenants actifs', icon: '👥', color: '#8B5CF6' },
  { value: '50K+', label: 'Mots enseignés', icon: '📚', color: '#06B6D4' },
  { value: '4.9★', label: 'Note moyenne', icon: '⭐', color: '#F59E0B' },
  { value: '6 mois', label: 'Pour A1 → B1', icon: '🚀', color: '#10B981' },
];

const steps = [
  { step: '01', title: 'Test de niveau', desc: 'Un test de 5 minutes vous place au bon niveau (A1→C2). Zéro perte de temps.', icon: '🎯', color: '#8B5CF6' },
  { step: '02', title: '5 types d\'exercices', desc: 'Vocabulaire → Grammaire → Lecture → Écoute → Expression orale. Un cycle complet par unité.', icon: '📚', color: '#10B981' },
  { step: '03', title: 'IA personnalisée', desc: 'GPT-4o analyse vos erreurs et génère des exercices ciblés à chaque session.', icon: '🤖', color: '#06B6D4' },
  { step: '04', title: '15 min par jour', desc: 'Streak, ligues, badges — la gamification rend la pratique quotidienne irrésistible.', icon: '🔥', color: '#F97316' },
];

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AppPreviewCard() {
  const [answered, setAnswered] = useState<string | null>(null);
  const options = ['Apple 🍎', 'Orange 🍊', 'Banana 🍌', 'Grape 🍇'];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.65, duration: 0.55 }}
      className="mt-10 sm:mt-12 max-w-sm mx-auto"
    >
      <div className="glass-card rounded-3xl p-5 border border-violet-500/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-violet-600/8 to-cyan-500/5 pointer-events-none" />
        {/* Mini top bar */}
        <div className="flex items-center gap-2 mb-4 relative">
          <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-linear-to-r from-violet-500 to-cyan-500 rounded-full" />
          </div>
          <div className="flex gap-0.5">
            {['❤️','❤️','❤️','🖤','🖤'].map((h,i) => <span key={i} className="text-xs">{h}</span>)}
          </div>
          <div className="flex items-center gap-1 px-2 py-0.5 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
            <span className="text-yellow-400 text-xs">⭐</span>
            <span className="text-yellow-400 font-bold text-xs">30</span>
          </div>
        </div>
        {/* Vocab card */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-medium mb-3">
            🍎 Vocabulaire
          </div>
          <div className="w-16 h-16 mx-auto rounded-2xl bg-linear-to-br from-violet-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-3xl mb-2">
            🍎
          </div>
          <p className="text-white font-bold">Qu&apos;est-ce que c&apos;est ?</p>
        </div>
        {/* Options */}
        <div className="grid grid-cols-2 gap-2">
          {options.map(opt => (
            <button
              key={opt}
              onClick={() => setAnswered(opt)}
              className={`py-2 px-3 rounded-xl text-xs font-medium border-2 transition-all cursor-pointer ${
                answered === opt && opt === 'Apple 🍎'
                  ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300'
                  : answered === opt
                  ? 'border-red-500 bg-red-500/15 text-red-300'
                  : answered && opt === 'Apple 🍎'
                  ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300'
                  : 'border-white/10 bg-slate-800/60 text-slate-300 hover:border-violet-500/50'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        {answered && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-3 py-2 px-3 rounded-xl text-xs font-bold text-center ${
              answered === 'Apple 🍎' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-orange-500/15 text-orange-300'
            }`}
          >
            {answered === 'Apple 🍎' ? '✅ Parfait ! +10 XP' : '❌ La bonne réponse : Apple 🍎'}
          </motion.div>
        )}
        <p className="text-center text-xs text-slate-500 mt-3">
          {answered ? '→ Essayez la vraie app !' : 'Cliquez pour essayer !'}
        </p>
      </div>
    </motion.div>
  );
}

export default function LandingPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white overflow-x-hidden">

      {/* ── Navbar ──────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 py-3">
        <div className="max-w-6xl mx-auto glass rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-linear-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-[0_0_12px_rgba(139,92,246,0.5)]">
              L
            </div>
            <span className="font-bold text-base sm:text-lg gradient-text">LinguaBoost</span>
          </Link>

          <div className="hidden md:flex items-center gap-5 text-sm text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Fonctionnalités</a>
            <a href="#languages" className="hover:text-white transition-colors">Langues</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Témoignages</a>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link href="/auth/login" className="hidden sm:block text-sm text-slate-300 hover:text-white transition-colors px-3 py-2">
              Connexion
            </Link>
            <Link href="/auth/register">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(139,92,246,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="text-xs sm:text-sm bg-linear-to-r from-violet-600 to-violet-500 text-white px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl font-semibold cursor-pointer transition-all"
              >
                Commencer
              </motion.button>
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="pt-28 sm:pt-32 pb-10 sm:pb-14 px-4 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-16 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-violet-600/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-32 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-linear-to-t from-[#0A0F1E] to-transparent pointer-events-none" />
        {/* Dot grid */}
        <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 sm:mb-8 text-xs sm:text-sm text-violet-300 font-medium cursor-default"
            style={{
              background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(6,182,212,0.1))',
              border: '1px solid rgba(139,92,246,0.4)',
              boxShadow: '0 0 20px rgba(139,92,246,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            ✨ Nouveau : Tuteur IA avec GPT-4o
          </motion.div>

          {/* Mascot with glow halo */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', delay: 0.15 }}
            className="flex justify-center mb-5 sm:mb-6 relative"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-32 h-32 rounded-full bg-violet-500/20 blur-3xl" />
            </div>
            <Mascot mood="excited" size="xl" animated />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-[1.1]"
          >
            Maîtrisez une
            <br />
            <span className="gradient-text">nouvelle langue</span>
            <br />
            <span className="text-white">en 15 min/jour</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed px-2"
          >
            Anglais, espagnol, portugais — de zéro à B1 en 6 mois.
            <br className="hidden sm:block" />
            Gamification, IA personnalisée et reconnaissance vocale.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Link href="/auth/register" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 20px 60px rgba(139,92,246,0.55), 0 0 30px rgba(6,182,212,0.25)' }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-linear-to-r from-violet-600 to-cyan-500 rounded-2xl font-bold text-base sm:text-lg cursor-pointer shadow-[0_0_30px_rgba(139,92,246,0.35)]"
              >
                Commencer gratuitement ✨
              </motion.button>
            </Link>
            <Link href="/dashboard" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.2)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-7 sm:px-8 py-4 glass border border-white/10 rounded-2xl font-medium text-slate-300 hover:text-white cursor-pointer transition-colors"
              >
                Voir la démo →
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-lg sm:max-w-2xl mx-auto"
          >
            {stats.map(({ value, label, icon, color }) => (
              <div
                key={label}
                className="glass-card rounded-2xl p-3 sm:p-4 text-center border"
                style={{ borderColor: `${color}25` }}
              >
                <div className="text-xl sm:text-2xl mb-1">{icon}</div>
                <p className="text-lg sm:text-2xl font-black" style={{ color }}>{value}</p>
                <p className="text-xs text-slate-400 mt-0.5 leading-tight">{label}</p>
              </div>
            ))}
          </motion.div>

          {/* Interactive app preview */}
          <AppPreviewCard />
        </div>
      </section>

      {/* ── Languages ─────────────────────────────────── */}
      <section id="languages" className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">3 langues, <span className="gradient-text">1 plateforme</span></h2>
            <p className="text-slate-400 text-base sm:text-lg">Choisissez votre langue et commencez dès maintenant</p>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {languages.map((lang, i) => (
              <FadeIn key={lang.name} delay={i * 0.08}>
                <Link href="/auth/register">
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01, boxShadow: `0 20px 60px ${lang.glowColor}` }}
                    whileTap={{ scale: 0.98 }}
                    className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 cursor-pointer group border border-white/8 transition-all duration-300"
                  >
                    <div className={`w-full h-1.5 rounded-full bg-linear-to-r ${lang.color} mb-5`} />
                    <div className="text-4xl sm:text-5xl mb-3">{lang.flag}</div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{lang.name}</h3>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-medium">
                        {lang.difficulty}
                      </span>
                      <span className="text-slate-500 text-xs sm:text-sm">{lang.speakers} locuteurs</span>
                    </div>
                    <p className="text-slate-400 text-sm mb-4">{lang.level}</p>
                    <div className="flex items-center text-sm text-violet-400 font-medium gap-1 group-hover:gap-3 transition-all duration-300">
                      Commencer <span>→</span>
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────── */}
      <section id="features" className="py-16 sm:py-20 px-4 relative">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-violet-900/6 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <FadeIn className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">
              Tout ce qu&apos;il faut pour <span className="gradient-text">réussir</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
              Une approche scientifique de l&apos;apprentissage, rendue addictive par la gamification.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {features.map((feat, i) => (
              <FadeIn key={feat.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  onHoverStart={() => setHovered(i)}
                  onHoverEnd={() => setHovered(null)}
                  className="glass-card rounded-2xl p-5 sm:p-6 h-full transition-all duration-300"
                  style={{
                    borderColor: hovered === i ? `${feat.color}50` : 'rgba(255,255,255,0.06)',
                    boxShadow: hovered === i ? `0 8px 40px ${feat.color}20, 0 4px 32px rgba(0,0,0,0.35)` : undefined,
                  }}
                >
                  <div
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 transition-all duration-300"
                    style={{
                      background: `${feat.color}20`,
                      border: `1px solid ${feat.color}40`,
                      boxShadow: hovered === i ? `0 0 20px ${feat.color}40` : 'none',
                    }}
                  >
                    {feat.icon}
                  </div>
                  <h3 className="font-bold text-white mb-1.5">{feat.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-black">Comment ça <span className="gradient-text">marche ?</span></h2>
          </FadeIn>
          <div className="space-y-4">
            {steps.map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.08}>
                <motion.div
                  whileHover={{ x: 4, boxShadow: `0 4px 24px ${item.color}20` }}
                  className="flex items-start gap-4 glass-card rounded-2xl p-4 sm:p-5 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
                    style={{ background: `${item.color}20`, border: `1px solid ${item.color}30` }}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: `${item.color}25`, color: item.color }}>
                        ÉTAPE {item.step}
                      </span>
                      <h3 className="font-bold text-white text-sm sm:text-base">{item.title}</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────── */}
      <section id="testimonials" className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-2">Ils ont <span className="gradient-text">réussi</span></h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: `0 16px 48px ${t.color}15` }}
                  className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col h-full border border-white/8 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0"
                      style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`, boxShadow: `0 0 16px ${t.color}40` }}
                    >
                      {t.avatar}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-white text-sm">{t.name}</p>
                      <p className="text-slate-500 text-xs">{t.role}</p>
                    </div>
                    <span
                      className="ml-auto px-2 py-1 rounded-lg text-xs font-bold shrink-0"
                      style={{ background: `${t.color}20`, color: t.color, border: `1px solid ${t.color}40` }}
                    >
                      {t.score}
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed flex-1">&quot;{t.text}&quot;</p>
                  <div className="flex gap-0.5 mt-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span key={j} className="text-amber-400 text-sm">★</span>
                    ))}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-violet-500/25 relative overflow-hidden text-center"
              style={{ boxShadow: '0 0 80px rgba(139,92,246,0.12), 0 4px 32px rgba(0,0,0,0.35)' }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-violet-600/12 to-cyan-500/8 pointer-events-none" />
              <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
              <Mascot mood="celebrating" size="lg" className="mx-auto mb-5 relative" />
              <h2 className="text-3xl sm:text-4xl font-black mb-3 relative">
                Prêt à <span className="gradient-text">booster</span> votre langue ?
              </h2>
              <p className="text-slate-300 mb-7 text-base sm:text-lg relative">
                Rejoignez 2 millions d&apos;apprenants. Gratuit, addictif, efficace.
              </p>
              <Link href="/auth/register" className="block relative">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 30px 80px rgba(139,92,246,0.5), 0 0 40px rgba(6,182,212,0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-linear-to-r from-violet-600 to-cyan-500 rounded-2xl font-bold text-lg sm:text-xl cursor-pointer shadow-[0_0_40px_rgba(139,92,246,0.4)]"
                >
                  Commencer — C&apos;est gratuit !
                </motion.button>
              </Link>
              <p className="mt-4 text-slate-500 text-sm relative">Aucune carte bancaire · Annulable à tout moment</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────── */}
      <footer className="border-t border-white/8 py-8 sm:py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-linear-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">L</div>
            <span className="font-bold gradient-text">LinguaBoost</span>
          </div>
          <p className="text-slate-500 text-sm">© 2026 LinguaBoost · Apprendre, c&apos;est s&apos;ouvrir au monde.</p>
          <div className="flex gap-5 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGU</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
