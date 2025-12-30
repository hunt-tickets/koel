'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface HeroTransitionProps {
  isLoading: boolean;
  onTransitionComplete?: () => void;
}

export default function HeroTransition({ isLoading, onTransitionComplete }: HeroTransitionProps) {
  const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    if (!isLoading && showTransition) {
      // Animation duration is 0.8s, add 200ms for exit and buffer
      const timer = setTimeout(() => {
        setShowTransition(false);
        onTransitionComplete?.();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, showTransition, onTransitionComplete]);

  if (!showTransition) return null;

  return (
    <AnimatePresence>
      {showTransition && (
        <motion.div
          key="hero-transition"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[7999] overflow-hidden"
        >
          {/* Hero Image Expansion */}
          <motion.div
            initial={{
              clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
              opacity: 0,
            }}
            animate={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="absolute inset-0 bg-black"
          >
            {/* Desktop Background */}
            <div
              className="absolute inset-0 hidden md:block bg-cover bg-center"
              style={{
                backgroundImage: 'url(/hero-mobile-bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            {/* Mobile Background */}
            <div
              className="absolute inset-0 md:hidden bg-cover bg-center"
              style={{
                backgroundImage: 'url(/hero-mobile-bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
