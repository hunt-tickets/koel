'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  minDuration?: number;
}

export default function LoadingScreen({
  onLoadingComplete,
  minDuration = 2000,
}: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 800); // Espera a que termine la animación de salida
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration, onLoadingComplete]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="splash"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 120,
            duration: 0.6,
          }}
          className="fixed inset-0 w-screen h-screen bg-koel-blue z-[9999] flex items-center justify-center overflow-hidden"
        >

          {/* Logo container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              ease: 'easeOut',
            }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            {/* Text labels above logo */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="flex flex-col items-center gap-1"
            >
              <motion.p
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                className="text-koel-teal text-xs md:text-sm font-light tracking-[0.2em] uppercase"
              >
                Refillable Deodorant
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                className="text-koel-teal text-xs md:text-sm font-light tracking-widest uppercase"
              >
                Premium Care
              </motion.p>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                y: [0, -10, 0],
              }}
              exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
              transition={{
                initial: {
                  delay: 0.55,
                  duration: 0.7,
                  ease: [0.34, 1.56, 0.64, 1],
                },
                y: {
                  delay: 0.55,
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className="relative w-48 h-16 md:w-64 md:h-24"
            >
              <Image
                src="/logo-teal.svg"
                alt="KOEL Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{
                delay: 0.75,
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="flex gap-3"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [0, 1, 1, 1, 0],
                  }}
                  transition={{
                    delay: 0.85 + index * 0.1,
                    duration: 1.2,
                    repeat: Infinity,
                    repeatDelay: 0.4,
                    ease: 'easeInOut',
                  }}
                  className="w-3 h-3 rounded-full bg-koel-teal"
                />
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{
                delay: 1.1,
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="text-koel-teal text-sm md:text-base font-heading tracking-wide uppercase"
            >
              A New Way to Care
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
