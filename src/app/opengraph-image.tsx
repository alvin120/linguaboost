import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'LinguaBoost — Apprenez les langues en 15 min/jour';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0A0F1E 0%, #1a0a2e 50%, #0A0F1E 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Background orb */}
        <div style={{
          position: 'absolute', top: -100, left: 200,
          width: 600, height: 600,
          background: 'rgba(139,92,246,0.25)',
          borderRadius: '50%',
          filter: 'blur(120px)',
        }} />
        <div style={{
          position: 'absolute', bottom: -80, right: 100,
          width: 400, height: 400,
          background: 'rgba(6,182,212,0.2)',
          borderRadius: '50%',
          filter: 'blur(100px)',
        }} />

        {/* Logo */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32,
        }}>
          <div style={{
            width: 64, height: 64, borderRadius: 16,
            background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 32, fontWeight: 900, color: 'white',
          }}>L</div>
          <span style={{
            fontSize: 40, fontWeight: 900,
            background: 'linear-gradient(135deg, #8B5CF6, #06B6D4, #10B981)',
            backgroundClip: 'text',
            color: 'transparent',
          }}>LinguaBoost</span>
        </div>

        {/* Mascot */}
        <div style={{ fontSize: 80, marginBottom: 24 }}>🦉</div>

        {/* Headline */}
        <div style={{
          fontSize: 52, fontWeight: 900, color: 'white',
          textAlign: 'center', lineHeight: 1.15, marginBottom: 20,
          maxWidth: 900,
        }}>
          Maîtrisez une{' '}
          <span style={{
            background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
            backgroundClip: 'text', color: 'transparent',
          }}>nouvelle langue</span>
          {' '}en 15 min/jour
        </div>

        {/* Sub */}
        <div style={{
          fontSize: 24, color: '#94A3B8', textAlign: 'center', marginBottom: 40,
        }}>
          Anglais · Espagnol · Portugais — De A1 à B1 en 6 mois
        </div>

        {/* Stats pills */}
        <div style={{ display: 'flex', gap: 16 }}>
          {[['2M+', 'Apprenants'], ['4.9★', 'Note'], ['6 mois', 'A1→B1']].map(([val, label]) => (
            <div key={label} style={{
              padding: '12px 24px',
              background: 'rgba(139,92,246,0.15)',
              border: '1px solid rgba(139,92,246,0.35)',
              borderRadius: 100,
              display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}>
              <span style={{ fontSize: 22, fontWeight: 900, color: '#C4B5FD' }}>{val}</span>
              <span style={{ fontSize: 13, color: '#94A3B8' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
