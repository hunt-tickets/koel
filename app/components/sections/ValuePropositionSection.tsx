'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Star, Sparkles, Banknote, Flag, Heart } from 'lucide-react';
import { MagneticPrimaryButton } from '../ui/MagneticButton';
import { MaskText } from '../ui/TextReveal';
import TiltCard from '../ui/TiltCard';

interface ValueItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function ValueItem({ icon, title, description, index }: ValueItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ x: 10 }}
      className="flex items-start gap-4 sm:gap-5 group cursor-default"
    >
      <motion.div
        whileHover={{ scale: 1.15, rotate: 10 }}
        transition={{ duration: 0.3 }}
        className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-koel-blue rounded-2xl flex items-center justify-center text-white shadow-lg"
      >
        {icon}
      </motion.div>
      <div className="pt-0.5">
        <h4 className="text-base sm:text-xl font-bold text-koel-neutral-900 mb-1 sm:mb-2 group-hover:text-koel-blue transition-colors">
          {title}
        </h4>
        <p className="text-sm sm:text-base text-koel-neutral-600 leading-snug sm:leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ValuePropositionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const videoRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  const valuePoints = [
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Recarga en segundos",
      description: "Un giro, encaja, y listo. ¡Es así de fácil!",
    },
    {
      icon: <Star className="w-7 h-7" />,
      title: "Diseño premium",
      description: "Un accesorio que combina estilo y funcionalidad.",
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Fragancias exclusivas",
      description: "Aromas cautivadores diseñados para ti.",
    },
    {
      icon: <Banknote className="w-7 h-7" />,
      title: "Ahorro inteligente",
      description: "Menos plástico y más valor para tu bolsillo.",
    },
    {
      icon: <Flag className="w-7 h-7" />,
      title: "100% colombiano",
      description: "Innovación local al alcance de tus manos.",
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Cuidado personal simplificado",
      description: "Ingredientes suaves, piel fresca y protegida.",
    },
  ];

  return (
    <section ref={containerRef} className="section-container bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 lg:mb-32">
          <MaskText delay={0.1}>
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-koel-neutral-500 mb-2 sm:mb-4 font-light">
              Por qué elegir KOEL
            </p>
          </MaskText>

          <MaskText delay={0.2}>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-display tracking-wide text-koel-neutral-900 mb-3 sm:mb-4">
              Diseñado para ti,
            </h2>
          </MaskText>

          <MaskText delay={0.3}>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-display tracking-wide mb-4 sm:mb-6">
              <span className="text-gradient-koel">creado para marcar la diferencia.</span>
            </h2>
          </MaskText>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-xl lg:text-2xl text-koel-neutral-600 max-w-4xl mx-auto leading-relaxed"
          >
            Simplifica tu rutina con un desodorante que combina estilo, innovación y funcionalidad.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-28 items-center">
          {/* Left: Value Points */}
          <div className="space-y-5 sm:space-y-8 order-2 lg:order-1">
            {valuePoints.map((point, index) => (
              <ValueItem key={index} {...point} index={index} />
            ))}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-6 sm:pt-8 flex justify-center lg:justify-start"
            >
              <MagneticPrimaryButton variant="primary" size="lg" strength={0.2}>
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
            </motion.div>
          </div>

          {/* Right: Video with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <motion.div
              style={{ y: videoY, rotate: videoRotate }}
            >
              <TiltCard
                tiltStrength={10}
                scaleOnHover={1.02}
                glareEnabled={true}
                className="rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-premium-lg max-w-md mx-auto lg:max-w-none border-2 border-koel-neutral-200"
              >
                {/* Video Placeholder */}
                <div className="aspect-[3/4] sm:aspect-[9/16] bg-gradient-to-br from-koel-neutral-100 to-koel-neutral-200 flex items-center justify-center relative">
                  {/* Animated Background */}
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
                    className="absolute inset-0 bg-gradient-to-br from-koel-blue/20 to-koel-bamboo/20"
                  />

                  {/* Play Button */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="absolute inset-0 bg-white rounded-full"
                    />
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-koel-blue border-b-[10px] border-b-transparent ml-1 relative z-10" />
                  </motion.div>

                  <div className="absolute bottom-20 left-0 right-0 text-center px-6 sm:px-10">
                    <p className="text-base sm:text-lg text-koel-neutral-700 font-semibold mb-2">
                      Video Premium Lifestyle
                    </p>
                    <p className="text-sm sm:text-base text-koel-neutral-500">
                      1080x1920px (9:16)
                    </p>
                  </div>
                </div>

                {/* Video Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 glass-dark p-6 sm:p-10 text-center">
                  <p className="text-white text-base sm:text-xl md:text-2xl font-semibold">
                    Más que un desodorante, una experiencia única.
                  </p>
                </div>
              </TiltCard>
            </motion.div>

            {/* Decorative Elements with enhanced animation */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hidden sm:block absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-koel-blue to-koel-bamboo rounded-full opacity-20 blur-3xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.5,
              }}
              className="hidden sm:block absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-br from-koel-ginger to-koel-bamboo rounded-full opacity-20 blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
