import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LinguaBoost — Apprenez les langues en 15 min/jour',
  description: "Apprenez l'anglais, l'espagnol et le portugais avec la gamification, la reconnaissance vocale et l'IA. De A1 à B1 en 6 mois.",
  manifest: '/manifest.json',
  keywords: ['apprendre anglais', 'apprendre espagnol', 'cours de langue', 'application langues', 'duolingo'],
};

export const viewport: Viewport = {
  themeColor: '#0A0F1E',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="bg-[#0A0F1E] text-slate-100 min-h-screen antialiased overflow-x-hidden">
        <Navbar />
        {/* pt-[68px] on mobile for the fixed top header; lg:pl-64 for the sidebar */}
        <main className="pt-17 lg:pt-0 lg:pl-64">
          {children}
        </main>
      </body>
    </html>
  );
}
