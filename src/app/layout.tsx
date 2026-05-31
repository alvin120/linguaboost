import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'LinguaBoost — Apprenez les langues en 15 min/jour',
    template: '%s | LinguaBoost',
  },
  description: "Apprenez l'anglais, l'espagnol et le portugais avec la gamification, l'IA et la reconnaissance vocale. De A1 à B1 en 6 mois.",
  keywords: ['apprendre anglais', 'apprendre espagnol', 'cours de langue', 'application langues', 'duolingo', 'babbel'],
  authors: [{ name: 'LinguaBoost' }],
  creator: 'LinguaBoost',
  metadataBase: new URL('https://sitedelangue.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://sitedelangue.vercel.app',
    siteName: 'LinguaBoost',
    title: 'LinguaBoost — Apprenez les langues en 15 min/jour',
    description: "De A1 à B1 en 6 mois. Anglais, espagnol, portugais — gamification, IA personnalisée et reconnaissance vocale.",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'LinguaBoost' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LinguaBoost — Apprenez les langues en 15 min/jour',
    description: "De A1 à B1 en 6 mois. Gamification, IA et reconnaissance vocale.",
    images: ['/og-image.png'],
  },
  manifest: '/manifest.json',
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#8B5CF6',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="bg-[#0A0F1E] text-slate-100 min-h-screen antialiased overflow-x-hidden">
        <Navbar />
        <main className="pt-17 lg:pt-0 lg:pl-64">
          {children}
        </main>
      </body>
    </html>
  );
}
