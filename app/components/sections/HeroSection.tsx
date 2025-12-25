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
      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-16 lg:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center">
          {/* Left: Animated Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-center lg:text-left order-2 lg:order-1"
          >
            {/* Animated RE + Word */}
            <div className="mb-8 md:mb-12">
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-normal font-display tracking-wide flex items-baseline justify-center lg:justify-start">
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

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 md:mb-12 font-light leading-relaxed">
              El desodorante que cambia las reglas.<br />
              Simple. Elegante. Diferente.
            </p>

            <div className="space-y-6 flex flex-col items-center lg:items-start">
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
                <span className="text-3xl sm:text-4xl font-normal font-display tracking-wide text-white">
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
            className="relative order-1 lg:order-2 px-4 sm:px-0"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-full aspect-square max-w-xs sm:max-w-md lg:max-w-xl mx-auto"
            >
              {/* Placeholder for 3D model viewer or product image */}
              <div className="w-full h-full flex items-center justify-center p-8 lg:p-12">
                <div className="w-full h-full bg-gradient-to-br from-koel-blue/30 to-koel-bamboo/30 rounded-3xl lg:rounded-[2.5rem] backdrop-blur-sm border-2 border-white/30 flex flex-col items-center justify-center gap-6 shadow-2xl">
                  {/* Simulated 3D Product Mockup */}
                  <div className="w-32 h-48 sm:w-44 sm:h-64 lg:w-52 lg:h-72 bg-gradient-to-b from-koel-blue-light to-koel-blue rounded-[2rem] shadow-premium relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/30 rounded-full" />
                  </div>
                  <p className="text-white/70 text-center px-4 text-xs sm:text-sm">
                    Render 3D del Starter Kit<br />
                    <span className="text-[10px] sm:text-xs opacity-60">
                      Dimensiones: 400x600px
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
              className="hidden sm:block absolute bottom-4 lg:bottom-8 left-0 lg:-left-4 glass rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 text-white"
            >
              <p className="text-xs sm:text-sm lg:text-base font-semibold">100% Natural</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="hidden sm:block absolute top-4 lg:top-8 right-0 lg:-right-4 glass rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 text-white"
            >
              <p className="text-xs sm:text-sm lg:text-base font-semibold">Recarga en segundos</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 sm:bottom-16 left-1/2 transform -translate-x-1/2 z-10"
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
