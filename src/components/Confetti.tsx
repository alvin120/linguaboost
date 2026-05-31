'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COLORS = ['#8B5CF6', '#10B981', '#F97316', '#F59E0B', '#EF4444', '#06B6D4', '#EC4899'];

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
  size: number;
  rotation: number;
}

interface ConfettiProps {
  active: boolean;
  count?: number;
}

export default function Confetti({ active, count = 50 }: ConfettiProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (active) {
      setPieces(
        Array.from({ length: count }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          delay: Math.random() * 0.5,
          size: Math.random() * 8 + 4,
          rotation: Math.random() * 360,
        }))
      );
    } else {
      setPieces([]);
    }
  }, [active, count]);

  return (
    <AnimatePresence>
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: `${piece.x}%`,
            top: -20,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
          }}
          initial={{ y: -20, opacity: 1, rotate: piece.rotation }}
          animate={{
            y: '110vh',
            opacity: [1, 1, 0],
            rotate: piece.rotation + 720,
            x: (Math.random() - 0.5) * 200,
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: piece.delay,
            ease: 'easeIn',
          }}
          exit={{ opacity: 0 }}
        />
      ))}
    </AnimatePresence>
  );
}
