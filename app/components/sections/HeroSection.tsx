'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Button from '../ui/Button';

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['CIBE', 'CARGA', 'USA'];
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content with Parallax Opacity */}
      <motion.div style={{ opacity }} className="relative z-10 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Animated Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-center lg:text-left order-2 lg:order-1"
          >
            {/* Animated RE + Word */}
            <div className="mb-6 md:mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold font-serif flex items-baseline justify-center lg:justify-start">
                <span className="text-gradient-koel">RE</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="ml-1 sm:ml-2"
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </h1>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 font-light px-4 sm:px-0">
              El desodorante que cambia las reglas.<br />
              Simple. Elegante. Diferente.
            </p>

            <div className="space-y-4 flex flex-col items-center lg:items-start">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  document.getElementById('producto')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Pre-order now
              </Button>

              {/* Price Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center justify-center lg:justify-start"
              >
                <span className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  $35,000
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Product Image/3D Model */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2 px-8 sm:px-4 lg:px-0"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-full aspect-square max-w-xs sm:max-w-sm lg:max-w-lg mx-auto"
            >
              {/* Placeholder for 3D model viewer or product image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-koel-blue/20 to-koel-bamboo/20 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <p className="text-white/50 text-center px-4 sm:px-8 text-sm sm:text-base">
                    [Placeholder para render 3D del Starter Kit]<br />
                    <span className="text-xs sm:text-sm">
                      Usar model-viewer con /models/koel-product.gltf
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Features - Hidden on small mobile, visible from sm */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="hidden sm:block absolute bottom-0 sm:-bottom-4 lg:-bottom-6 left-0 sm:-left-2 lg:-left-6 glass rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 text-white"
            >
              <p className="text-xs sm:text-sm font-semibold">🌿 100% Natural</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="hidden sm:block absolute top-0 sm:-top-4 lg:-top-6 right-0 sm:-right-2 lg:-right-6 glass rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 text-white"
            >
              <p className="text-xs sm:text-sm font-semibold">⚡ Recarga en segundos</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2"
        >
          <motion.div className="w-1 h-3 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
