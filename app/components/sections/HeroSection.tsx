'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { MagneticPrimaryButton } from '../ui/MagneticButton';
import { MaskText, StaggerText } from '../ui/TextReveal';
import ScrollIndicator from '../ui/ScrollIndicator';

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['CIBE', 'CARGA', 'USA'];
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const productY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const productScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative h-screen-safe flex items-center justify-center overflow-hidden">
      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        {/* Vignette effect */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
          }}
        />
      </div>

      {/* Content with Parallax */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-16 lg:px-20 py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center">
          {/* Left: Animated Text with Premium Reveals */}
          <div className="text-white text-center lg:text-left order-2 lg:order-1">
            {/* Small Label */}
            <MaskText delay={0.2}>
              <motion.p
                className="text-xs sm:text-sm tracking-[0.3em] uppercase text-white/60 mb-6 sm:mb-8 font-light"
              >
                El primer desodorante recargable de Colombia
              </motion.p>
            </MaskText>

            {/* Main Headline with Animated Word */}
            <div className="mb-8 md:mb-12 overflow-hidden">
              <MaskText delay={0.4}>
                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-normal font-display tracking-wide flex items-baseline justify-center lg:justify-start">
                  <span className="text-gradient-koel">RE</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWordIndex}
                      initial={{ opacity: 0, y: 40, rotateX: -45 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, y: -40, rotateX: 45 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.33, 1, 0.68, 1]
                      }}
                      className="ml-1 sm:ml-2 inline-block origin-bottom"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {words[currentWordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </h1>
              </MaskText>
            </div>

            {/* Subheadline */}
            <MaskText delay={0.6}>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 mb-10 md:mb-14 font-light leading-relaxed tracking-wide">
                El desodorante que cambia las reglas.<br />
                <span className="text-white/60">Simple. Elegante. Diferente.</span>
              </p>
            </MaskText>

            {/* CTA and Price */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 justify-center lg:justify-start"
            >
              <MagneticPrimaryButton
                variant="primary"
                size="lg"
                onClick={() => {
                  document.getElementById('producto')?.scrollIntoView({ behavior: 'smooth' });
                }}
                strength={0.2}
              >
                <span className="flex items-center gap-3">
                  Pre-order now
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </MagneticPrimaryButton>

              {/* Price Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex items-center gap-3"
              >
                <div className="w-px h-8 bg-white/30 hidden sm:block" />
                <div className="text-center sm:text-left">
                  <span className="text-xs text-white/50 uppercase tracking-wider block">Desde</span>
                  <span className="text-2xl sm:text-3xl font-normal font-display tracking-wide text-white">
                    $35,000
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-10 sm:mt-14 flex flex-wrap items-center gap-4 sm:gap-6 justify-center lg:justify-start text-white/50 text-xs sm:text-sm"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-koel-bamboo rounded-full" />
                100% Natural
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-koel-blue rounded-full" />
                Recarga en segundos
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-koel-ginger rounded-full" />
                Hecho en Colombia
              </span>
            </motion.div>
          </div>

          {/* Right: Product with Enhanced Parallax */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative order-1 lg:order-2 px-4 sm:px-0"
          >
            <motion.div
              style={{ y: productY, scale: productScale }}
              className="relative w-full aspect-square max-w-xs sm:max-w-md lg:max-w-xl mx-auto"
            >
              {/* Glow effect behind product */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-koel-blue/40 to-koel-bamboo/40 rounded-full blur-3xl"
              />

              {/* Floating Animation Container */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full h-full flex items-center justify-center p-8 lg:p-12"
              >
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 rounded-3xl lg:rounded-[2.5rem] backdrop-blur-md border border-white/20 flex flex-col items-center justify-center gap-6 shadow-2xl">
                  {/* Simulated 3D Product Mockup */}
                  <motion.div
                    animate={{ rotateY: [0, 5, 0, -5, 0] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-32 h-48 sm:w-44 sm:h-64 lg:w-52 lg:h-72 bg-gradient-to-b from-koel-blue-light to-koel-blue rounded-[2rem] shadow-2xl relative overflow-hidden"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Reflections */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/20 rounded-full backdrop-blur-sm" />

                    {/* Shine animation */}
                    <motion.div
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    />
                  </motion.div>

                  <p className="text-white/60 text-center px-4 text-xs sm:text-sm">
                    Render 3D del Starter Kit<br />
                    <span className="text-[10px] sm:text-xs opacity-60">
                      400x600px
                    </span>
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Feature Badges with Parallax */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
              className="hidden sm:flex absolute bottom-8 lg:bottom-16 left-0 lg:-left-8 glass rounded-2xl p-4 lg:p-5 text-white items-center gap-3"
            >
              <span className="w-10 h-10 rounded-full bg-koel-bamboo/30 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold">100% Natural</p>
                <p className="text-xs text-white/60">Sin aluminio</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
              className="hidden sm:flex absolute top-8 lg:top-16 right-0 lg:-right-8 glass rounded-2xl p-4 lg:p-5 text-white items-center gap-3"
            >
              <span className="w-10 h-10 rounded-full bg-koel-blue/30 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold">Recarga rápida</p>
                <p className="text-xs text-white/60">En segundos</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-10 sm:bottom-16 left-1/2 transform -translate-x-1/2 z-10">
        <ScrollIndicator variant="line" />
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 right-[10%] w-64 h-64 border border-white/5 rounded-full pointer-events-none"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 left-[5%] w-48 h-48 border border-white/5 rounded-full pointer-events-none"
      />
    </section>
  );
}
