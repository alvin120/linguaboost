'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import { mockUser } from '@/lib/data';

const navItems = [
  { href: '/dashboard', label: 'Accueil', icon: HomeIcon },
  { href: '/learn/english', label: 'Apprendre', icon: BookIcon },
  { href: '/grammar', label: 'Grammaire', icon: GrammarIcon },
  { href: '/leaderboard', label: 'Classement', icon: TrophyIcon },
  { href: '/profile', label: 'Profil', icon: UserIcon },
];

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z" />
    </svg>
  );
}

function BookIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function TrophyIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
    </svg>
  );
}

function UserIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}

function GrammarIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith('/auth') || pathname === '/';

  if (isAuthPage) return null;

  return (
    <>
      {/* ── MOBILE top header ─────────────────────────── */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/8">
        <div className="flex items-center justify-between px-4 h-14">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-linear-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
              L
            </div>
            <span className="font-bold gradient-text text-base">LinguaBoost</span>
          </Link>

          {/* Quick stats */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-base animate-streak">🔥</span>
              <span className="text-sm font-bold text-orange-400">{mockUser.streak}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-base">💎</span>
              <span className="text-sm font-bold text-cyan-400">{mockUser.gems}</span>
            </div>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: mockUser.maxHearts }).map((_, i) => (
                <span key={i} className={cn('text-xs', i < mockUser.hearts ? 'text-red-500' : 'opacity-25 grayscale')}>
                  ❤️
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* XP bar strip under the header */}
        <div className="h-1 bg-slate-800 mx-4 mb-2 rounded-full overflow-hidden">
          <motion.div
            className="h-full xp-bar rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(mockUser.xp % 500) / 500 * 100}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
      </header>

      {/* ── DESKTOP sidebar ───────────────────────────── */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-full w-64 flex-col glass-card z-50 border-r border-white/8">
        {/* Logo */}
        <div className="p-6 border-b border-white/8">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-linear-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
              L
            </div>
            <span className="text-xl font-bold gradient-text">LinguaBoost</span>
          </Link>
        </div>

        {/* User stats */}
        <div className="px-4 py-3 border-b border-white/8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1.5">
              <span className="text-orange-400 text-lg animate-streak">🔥</span>
              <span className="font-bold text-orange-400">{mockUser.streak}</span>
              <span className="text-slate-400">jours</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-cyan-400">💎</span>
              <span className="font-bold text-cyan-400">{mockUser.gems}</span>
            </div>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: mockUser.maxHearts }).map((_, i) => (
                <span key={i} className={cn('text-sm', i < mockUser.hearts ? 'text-red-500' : 'opacity-25 grayscale')}>
                  ❤️
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname?.startsWith(href);
            return (
              <Link key={href} href={href}>
                <motion.div
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer',
                    isActive
                      ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30'
                      : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                  )}
                >
                  <Icon active={!!isActive} />
                  <span className="font-medium">{label}</span>
                  {isActive && (
                    <motion.div layoutId="nav-indicator" className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-400" />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* XP progress */}
        <div className="p-4 border-t border-white/8">
          <div className="glass rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-400">Niveau {mockUser.level}</span>
              <span className="text-xs text-violet-400 font-bold">{mockUser.xp} XP</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full xp-bar rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(mockUser.xp % 500) / 500 * 100}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">{500 - (mockUser.xp % 500)} XP pour le niv. suivant</p>
          </div>
        </div>
      </aside>

      {/* ── MOBILE bottom bar ─────────────────────────── */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-white/8">
        <div className="flex items-center justify-around px-1 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname?.startsWith(href);
            return (
              <Link key={href} href={href} className="flex-1">
                <motion.div
                  whileTap={{ scale: 0.85 }}
                  className={cn(
                    'flex flex-col items-center gap-1 py-1.5 rounded-xl transition-all min-h-11 justify-center',
                    isActive ? 'text-violet-400' : 'text-slate-500'
                  )}
                >
                  <Icon active={!!isActive} />
                  <span className="text-[10px] font-semibold leading-none">{label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="mobile-active-dot"
                      className="w-1 h-1 rounded-full bg-violet-400"
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
