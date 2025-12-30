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
            {/* Logo */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-48 h-16 md:w-64 md:h-24"
            >
              <Image
                src="/logo.svg"
                alt="KOEL Logo"
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </motion.div>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-3"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: 'easeInOut',
                  }}
                  className="w-3 h-3 rounded-full bg-white"
                />
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-white/90 text-sm md:text-base font-heading tracking-wide uppercase"
            >
              A New Way to Care
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
