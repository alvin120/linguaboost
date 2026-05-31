'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

type MascotMood = 'happy' | 'excited' | 'sad' | 'thinking' | 'celebrating';

interface MascotProps {
  mood?: MascotMood;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animated?: boolean;
}

const moodConfig: Record<MascotMood, { eyes: string; mouth: string; color: string; bg: string }> = {
  happy: { eyes: '◕‿◕', mouth: '😊', color: '#10B981', bg: 'rgba(16,185,129,0.15)' },
  excited: { eyes: '★‿★', mouth: '🤩', color: '#F59E0B', bg: 'rgba(245,158,11,0.15)' },
  sad: { eyes: '◞_◟', mouth: '😢', color: '#6B7280', bg: 'rgba(107,114,128,0.15)' },
  thinking: { eyes: '◕_◕', mouth: '🤔', color: '#8B5CF6', bg: 'rgba(139,92,246,0.15)' },
  celebrating: { eyes: '★‿★', mouth: '🎉', color: '#EC4899', bg: 'rgba(236,72,153,0.15)' },
};

const sizeConfig = {
  sm: 'w-12 h-12 text-2xl',
  md: 'w-16 h-16 text-3xl',
  lg: 'w-24 h-24 text-5xl',
  xl: 'w-32 h-32 text-6xl',
};

export default function Mascot({ mood = 'happy', size = 'md', className, animated = true }: MascotProps) {
  const config = moodConfig[mood];

  const owlEmoji = mood === 'excited' || mood === 'celebrating' ? '🦉' : '🦉';

  return (
    <motion.div
      className={cn('relative flex items-center justify-center rounded-full', sizeConfig[size], className)}
      style={{ background: config.bg, border: `2px solid ${config.color}40` }}
      animate={animated ? {
        y: mood === 'celebrating' ? [0, -8, 0] : [0, -4, 0],
        rotate: mood === 'celebrating' ? [-5, 5, -5] : 0,
      } : {}}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span className={cn(
        size === 'sm' ? 'text-2xl' : size === 'md' ? 'text-3xl' : size === 'lg' ? 'text-5xl' : 'text-6xl'
      )}>
        {owlEmoji}
      </span>
      {(mood === 'celebrating') && (
        <>
          <motion.span
            className="absolute -top-2 -right-2 text-sm"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 20, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >✨</motion.span>
          <motion.span
            className="absolute -bottom-1 -left-2 text-sm"
            animate={{ scale: [1, 1.3, 1], rotate: [0, -20, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
          >⭐</motion.span>
        </>
      )}
    </motion.div>
  );
}
