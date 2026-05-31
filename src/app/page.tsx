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
  { name: 'Anglais', flag: '🇬🇧', level: 'A1 → C2', speakers: '1.5 milliard', color: 'from-blue-600 to-cyan-500', difficulty: 'Facile' },
  { name: 'Espagnol', flag: '🇪🇸', level: 'A1 → C2', speakers: '500 millions', color: 'from-red-600 to-orange-500', difficulty: 'Facile' },
  { name: 'Portugais', flag: '🇧🇷', level: 'A1 → C2', speakers: '250 millions', color: 'from-emerald-600 to-teal-500', difficulty: 'Moyen' },
];

const testimonials = [
  { name: 'Marie L.', role: 'Étudiante', text: 'En 3 mois j\'ai atteint B1 en anglais ! Les exercices de prononciation sont incroyables.', avatar: 'M', score: 'B1 en 3 mois' },
  { name: 'Thomas R.', role: 'Développeur', text: 'La gamification me pousse à pratiquer chaque jour. Mon streak est à 45 jours !', avatar: 'T', score: 'Streak 45 jours' },
  { name: 'Emma V.', role: 'Traductrice', text: 'Le tuteur IA détecte exactement mes faiblesses. Je progresse deux fois plus vite.', avatar: 'E', score: 'A2→B2 en 6 mois' },
];

const stats = [
  { value: '2M+', label: 'Apprenants actifs' },
  { value: '50K+', label: 'Mots enseignés' },
  { value: '4.9★', label: 'Note moyenne' },
  { value: '6 mois', label: 'Pour A1 → B1' },
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

export default function LandingPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white overflow-x-hidden">

      {/* ── Navbar ──────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 py-3">
        <div className="max-w-6xl mx-auto glass rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-linear-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm">
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
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="text-xs sm:text-sm bg-violet-600 hover:bg-violet-500 text-white px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl font-semibold cursor-pointer transition-colors"
              >
                Commencer
              </motion.button>
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-16 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-violet-600/20 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
        <div className="absolute top-32 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-cyan-500/15 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass border border-violet-500/30 text-xs sm:text-sm text-violet-300 mb-6 sm:mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Nouveau : Tuteur IA avec GPT-4o
          </motion.div>

          {/* Mascot */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', delay: 0.15 }}
            className="flex justify-center mb-5 sm:mb-6"
          >
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
            en 15 min/jour
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed px-2"
          >
            Anglais, espagnol, portugais — de zéro à B1 en 6 mois.
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
                whileHover={{ scale: 1.03, boxShadow: '0 20px 60px rgba(139,92,246,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-7 sm:px-8 py-4 bg-linear-to-r from-violet-600 to-cyan-500 rounded-2xl font-bold text-base sm:text-lg cursor-pointer"
              >
                Commencer gratuitement ✨
              </motion.button>
            </Link>
            <Link href="/dashboard" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-7 sm:px-8 py-4 glass border border-white/10 rounded-2xl font-medium text-slate-300 hover:text-white cursor-pointer transition-colors"
              >
                Voir la démo →
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-lg sm:max-w-none mx-auto"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-xl sm:text-2xl font-black gradient-text">{value}</p>
                <p className="text-xs text-slate-400 mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>
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
                    whileHover={{ y: -5, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 cursor-pointer group border border-white/8"
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
                    <div className="flex items-center text-sm text-violet-400 font-medium gap-1 group-hover:gap-3 transition-all">
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
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-violet-900/5 to-transparent pointer-events-none" />
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
                  whileHover={{ y: -3, scale: 1.01 }}
                  onHoverStart={() => setHovered(i)}
                  onHoverEnd={() => setHovered(null)}
                  className="glass-card rounded-2xl p-5 sm:p-6 h-full border transition-colors"
                  style={{ borderColor: hovered === i ? `${feat.color}40` : 'rgba(255,255,255,0.05)' }}
                >
                  <div
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4"
                    style={{ background: `${feat.color}20`, border: `1px solid ${feat.color}40` }}
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
                <div className="flex items-start gap-4 glass-card rounded-2xl p-4 sm:p-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                    style={{ background: `${item.color}20` }}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${item.color}30`, color: item.color }}>
                        ÉTAPE {item.step}
                      </span>
                      <h3 className="font-bold text-white text-sm sm:text-base">{item.title}</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
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
                <div className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col h-full border border-white/8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-violet-500 to-cyan-500 flex items-center justify-center font-bold text-white shrink-0">
                      {t.avatar}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-white text-sm">{t.name}</p>
                      <p className="text-slate-500 text-xs">{t.role}</p>
                    </div>
                    <span className="ml-auto px-2 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-bold shrink-0">
                      {t.score}
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed flex-1">&quot;{t.text}&quot;</p>
                  <div className="flex gap-0.5 mt-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span key={j} className="text-amber-400 text-sm">★</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-violet-500/20 relative overflow-hidden text-center">
              <div className="absolute inset-0 bg-linear-to-br from-violet-600/10 to-cyan-500/10 pointer-events-none" />
              <Mascot mood="celebrating" size="lg" className="mx-auto mb-5" />
              <h2 className="text-3xl sm:text-4xl font-black mb-3">
                Prêt à <span className="gradient-text">booster</span> votre langue ?
              </h2>
              <p className="text-slate-300 mb-7 text-base sm:text-lg">
                Rejoignez 2 millions d&apos;apprenants. Gratuit, addictif, efficace.
              </p>
              <Link href="/auth/register" className="block">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 30px 80px rgba(139,92,246,0.45)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-linear-to-r from-violet-600 to-cyan-500 rounded-2xl font-bold text-lg sm:text-xl cursor-pointer"
                >
                  Commencer — C&apos;est gratuit !
                </motion.button>
              </Link>
              <p className="mt-4 text-slate-500 text-sm">Aucune carte bancaire · Annulable à tout moment</p>
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
