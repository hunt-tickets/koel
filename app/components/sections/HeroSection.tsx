'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Button from '../ui/Button';
import VideoPlayer from '../ui/VideoPlayer';

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['CIBE', 'CARGA', 'USA'];
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <VideoPlayer
          src="/hero-video.mp4"
          className="w-full h-full"
          autoPlay
          loop
          muted
          showMuteButton={false}
          playbackRate={0.75}
        />
        <div className="video-overlay" />
      </motion.div>

      {/* Content with Parallax Opacity */}
      <motion.div style={{ opacity }} className="relative z-10 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Animated Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            {/* Animated RE + Word */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold flex items-baseline">
                <span className="text-gradient-koel">RE</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="ml-2"
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              El desodorante que cambia las reglas.<br />
              Simple. Elegante. Diferente.
            </p>

            <div className="space-y-4">
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
                className="flex items-center"
              >
                <span className="text-3xl font-bold text-white">
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
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-full aspect-square max-w-lg mx-auto"
            >
              {/* Placeholder for 3D model viewer or product image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-koel-blue/20 to-koel-bamboo/20 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <p className="text-white/50 text-center px-8">
                    [Placeholder para render 3D del Starter Kit]<br />
                    <span className="text-sm">
                      Usar model-viewer con /models/koel-product.gltf
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 text-white"
            >
              <p className="text-sm font-semibold">🌿 100% Natural</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -top-6 -right-6 glass rounded-2xl p-4 text-white"
            >
              <p className="text-sm font-semibold">⚡ Recarga en segundos</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
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
