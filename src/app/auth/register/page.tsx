'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Mascot from '@/components/Mascot';

type Step = 'account' | 'language' | 'goal' | 'level';

const languages = [
  { id: 'english', name: 'Anglais', flag: '🇬🇧', color: '#3B82F6' },
  { id: 'spanish', name: 'Espagnol', flag: '🇪🇸', color: '#EF4444' },
  { id: 'portuguese', name: 'Portugais', flag: '🇧🇷', color: '#10B981' },
];

const goals = [
  { id: '5', label: '5 min/jour', desc: 'Décontracté', icon: '🌱', xp: 10 },
  { id: '10', label: '10 min/jour', desc: 'Régulier', icon: '📚', xp: 20 },
  { id: '15', label: '15 min/jour', desc: 'Sérieux', icon: '🚀', xp: 30 },
  { id: '30', label: '30 min/jour', desc: 'Intensif', icon: '🔥', xp: 50 },
];

const levels = [
  { id: 'A1', label: 'Débutant', desc: 'Je ne connais pas encore la langue', icon: '🌱' },
  { id: 'A2', label: 'Élémentaire', desc: 'Je connais quelques mots et phrases', icon: '📗' },
  { id: 'B1', label: 'Intermédiaire', desc: 'Je peux tenir une conversation simple', icon: '📘' },
  { id: 'B2', label: 'Avancé', desc: 'Je me débrouille bien à l\'écrit et à l\'oral', icon: '📕' },
];

const stepOrder: Step[] = ['account', 'language', 'goal', 'level'];

export default function RegisterPage() {
  const [step, setStep] = useState<Step>('account');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    language: '',
    goal: '',
    level: '',
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const stepIndex = stepOrder.indexOf(step);
  const progress = ((stepIndex + 1) / stepOrder.length) * 100;

  const nextStep = () => {
    const next = stepOrder[stepIndex + 1];
    if (next) setStep(next);
    else handleSubmit();
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    router.push('/dashboard');
  };

  const canProceed = () => {
    switch (step) {
      case 'account': return formData.name && formData.email && formData.password.length >= 6;
      case 'language': return !!formData.language;
      case 'goal': return !!formData.goal;
      case 'level': return !!formData.level;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0F1E] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-emerald-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-violet-500/15 rounded-full blur-[80px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-6">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold">L</div>
          <span className="text-xl font-black gradient-text">LinguaBoost</span>
        </Link>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-slate-500 mb-2">
            <span>Étape {stepIndex + 1} sur {stepOrder.length}</span>
            <span>{Math.round(progress)}% complété</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        <div className="glass-card rounded-3xl p-8 border border-white/8">
          <AnimatePresence mode="wait">
            {step === 'account' && (
              <motion.div
                key="account"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div className="text-center">
                  <Mascot mood="happy" size="md" className="mx-auto mb-4" />
                  <h1 className="text-2xl font-black text-white mb-1">Créez votre compte</h1>
                  <p className="text-slate-400 text-sm">Gratuit pour toujours</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Prénom</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
                    placeholder="Alexandre"
                    className="w-full px-4 py-3 bg-slate-800/60 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
                    placeholder="vous@exemple.com"
                    className="w-full px-4 py-3 bg-slate-800/60 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Mot de passe</label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={e => setFormData(d => ({ ...d, password: e.target.value }))}
                    placeholder="6 caractères minimum"
                    className="w-full px-4 py-3 bg-slate-800/60 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-all"
                  />
                </div>

                <p className="text-center text-sm text-slate-500">
                  Déjà un compte ?{' '}
                  <Link href="/auth/login" className="text-violet-400 hover:text-violet-300 font-medium">Se connecter</Link>
                </p>
              </motion.div>
            )}

            {step === 'language' && (
              <motion.div
                key="language"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-white mb-1">Quelle langue ?</h2>
                  <p className="text-slate-400 text-sm">Vous pourrez en ajouter d&apos;autres plus tard</p>
                </div>
                <div className="space-y-3">
                  {languages.map(lang => (
                    <motion.button
                      key={lang.id}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData(d => ({ ...d, language: lang.id }))}
                      className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        formData.language === lang.id
                          ? 'bg-violet-600/20 border-violet-500 text-white'
                          : 'bg-slate-800/60 border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <span className="text-3xl">{lang.flag}</span>
                      <span className="font-semibold text-lg">{lang.name}</span>
                      {formData.language === lang.id && (
                        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto text-violet-400">✓</motion.span>
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 'goal' && (
              <motion.div
                key="goal"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-white mb-1">Votre objectif quotidien</h2>
                  <p className="text-slate-400 text-sm">Vous pouvez changer ça à tout moment</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {goals.map(goal => (
                    <motion.button
                      key={goal.id}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setFormData(d => ({ ...d, goal: goal.id }))}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all text-center ${
                        formData.goal === goal.id
                          ? 'bg-emerald-600/20 border-emerald-500 text-white'
                          : 'bg-slate-800/60 border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className="text-3xl mb-2">{goal.icon}</div>
                      <div className="font-bold">{goal.label}</div>
                      <div className="text-xs text-slate-400">{goal.desc}</div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 'level' && (
              <motion.div
                key="level"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-white mb-1">Votre niveau actuel ?</h2>
                  <p className="text-slate-400 text-sm">Soyez honnête pour un meilleur placement</p>
                </div>
                <div className="space-y-2">
                  {levels.map(level => (
                    <motion.button
                      key={level.id}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setFormData(d => ({ ...d, level: level.id }))}
                      className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all text-left ${
                        formData.level === level.id
                          ? 'bg-orange-600/20 border-orange-500 text-white'
                          : 'bg-slate-800/60 border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <span className="text-2xl">{level.icon}</span>
                      <div className="flex-1">
                        <div className="font-bold">{level.id} — {level.label}</div>
                        <div className="text-xs text-slate-400">{level.desc}</div>
                      </div>
                      {formData.level === level.id && (
                        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-orange-400">✓</motion.span>
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className="flex gap-3 mt-6">
            {stepIndex > 0 && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setStep(stepOrder[stepIndex - 1])}
                className="px-5 py-3 glass border border-white/10 rounded-xl text-slate-300 cursor-pointer transition-all"
              >
                ←
              </motion.button>
            )}
            <motion.button
              whileHover={canProceed() ? { scale: 1.02 } : {}}
              whileTap={canProceed() ? { scale: 0.98 } : {}}
              onClick={nextStep}
              disabled={!canProceed() || loading}
              className="flex-1 py-3 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-xl font-bold text-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              {loading ? 'Création...' : step === 'level' ? 'Commencer !' : 'Continuer →'}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
