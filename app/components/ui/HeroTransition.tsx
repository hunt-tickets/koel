'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HeroTransitionProps {
  isLoading: boolean;
}

export default function HeroTransition({ isLoading }: HeroTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      // Show transition when loading ends
      setIsVisible(true);
      setIsExiting(false);

      // Start exit animation after 0.8s (duration of expansion)
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 800);

      // Remove from DOM after exit animation (0.6s) completes
      const removeTimer = setTimeout(() => {
        setIsVisible(false);
      }, 1400);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [isLoading]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[7999] pointer-events-none overflow-hidden"
    >
      {/* Expanding Hero Image */}
      <motion.div
        initial={{
          clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
          opacity: 0,
        }}
        animate={
          !isExiting
            ? {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                opacity: 1,
              }
            : {
                opacity: 0,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              }
        }
        transition={{
          duration: isExiting ? 0.6 : 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="absolute inset-0"
      >
        {/* Desktop Image */}
        <div
          className="absolute inset-0 hidden md:block bg-cover bg-center"
          style={{
            backgroundImage: 'url(/hero1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Mobile Image */}
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
  );
}
