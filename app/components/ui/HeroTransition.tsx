'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface HeroTransitionProps {
  isLoading: boolean;
  onTransitionComplete?: () => void;
}

export default function HeroTransition({ isLoading, onTransitionComplete }: HeroTransitionProps) {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Start transition, after it's done, trigger callback
      const timer = setTimeout(() => {
        onTransitionComplete?.();
        // Remove from DOM after animation completes
        const removeTimer = setTimeout(() => {
          setShouldRender(false);
        }, 1200);
        return () => clearTimeout(removeTimer);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      setShouldRender(true);
    }
  }, [isLoading, onTransitionComplete]);

  if (!shouldRender && !isLoading) return null;

  return (
    <AnimatePresence mode="wait">
      {shouldRender && (
        <motion.div
          key="hero-transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[8000] pointer-events-none"
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
            }}
            transition={{
              delay: isLoading ? 0 : 0,
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="absolute inset-0"
          >
            {/* Desktop Background */}
            <div
              className="absolute inset-0 hidden md:block bg-cover bg-center"
              style={{
                backgroundImage: 'url(/hero-video-poster.jpg)',
                backgroundSize: 'cover',
              }}
            />

            {/* Mobile Background */}
            <div
              className="absolute inset-0 md:hidden bg-cover bg-center"
              style={{
                backgroundImage: 'url(/hero-mobile-bg.jpg)',
                backgroundSize: 'cover',
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          </motion.div>

          {/* Header and Content Fade In */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="absolute inset-0"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
