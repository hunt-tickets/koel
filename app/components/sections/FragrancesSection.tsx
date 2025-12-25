'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import Image from 'next/image';
import TiltCard from '../ui/TiltCard';
import { MaskText } from '../ui/TextReveal';

interface FragranceCardProps {
  name: string;
  subtitle: string;
  description: string;
  bgColor: string;
  accentColor: string;
  accentBgColor: string;
  illustrationPath: string;
  index: number;
}

function FragranceCard({
  name,
  subtitle,
  description,
  bgColor,
  accentColor,
  accentBgColor,
  illustrationPath,
  index,
}: FragranceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TiltCard
      tiltStrength={8}
      scaleOnHover={1.02}
      glareEnabled={true}
      className={`${bgColor} rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-premium w-[85vw] sm:w-[70vw] lg:w-[45vw] xl:w-[40vw] flex-shrink-0 h-full`}
    >
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="p-8 sm:p-12 md:p-16 flex flex-col h-full"
      >
        {/* Illustration with hover effects */}
        <div className="relative w-full aspect-square mb-8 sm:mb-12 rounded-2xl sm:rounded-3xl overflow-hidden flex items-center justify-center">
          {/* Animated background gradient */}
          <motion.div
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? 10 : 0,
            }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 ${accentBgColor} opacity-30`}
          />

          <motion.div
            animate={{
              scale: isHovered ? 1.15 : 1,
              rotate: isHovered ? 5 : 0,
              y: isHovered ? -10 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full flex items-center justify-center relative z-10"
          >
            <Image
              src={illustrationPath}
              alt={`${name} illustration`}
              width={400}
              height={400}
              className="w-full h-full object-contain p-6 sm:p-10 drop-shadow-2xl"
            />
          </motion.div>

          {/* Floating particles on hover */}
          {isHovered && (
            <>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 0, x: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: -100,
                    x: (i - 2) * 30,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.1,
                    repeat: Infinity,
                  }}
                  className={`absolute bottom-1/3 left-1/2 w-2 h-2 rounded-full ${accentBgColor}`}
                />
              ))}
            </>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <motion.h3
            animate={{ x: isHovered ? 10 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-normal font-display tracking-wide text-koel-neutral-900 mb-2 sm:mb-3"
          >
            {name}
          </motion.h3>
          <p className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 ${accentColor}`}>
            {subtitle}
          </p>
          <p className="text-base sm:text-lg text-koel-neutral-600 leading-relaxed flex-1">
            {description}
          </p>

          {/* Fragrance Badge */}
          <motion.div
            animate={{
              y: isHovered ? -8 : 0,
              x: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="mt-6 sm:mt-8 inline-flex items-center gap-3"
          >
            <motion.div
              animate={{ scale: isHovered ? 1.2 : 1 }}
              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${accentBgColor}`}
            />
            <span className="text-sm sm:text-base font-semibold text-koel-neutral-700">
              100% Origen Natural
            </span>
          </motion.div>
        </div>
      </motion.div>
    </TiltCard>
  );
}

export default function FragrancesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform vertical scroll to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-45%"]);

  // Progress bar
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const fragrances = [
    {
      name: "Bamboo Whisper",
      subtitle: "Frescura Natural",
      description:
        "Un aroma fresco y natural inspirado en la tranquilidad de un bosque de bambú. Perfecto para quienes buscan una fragancia ligera y revitalizante que te conecte con la naturaleza.",
      bgColor: "bg-gradient-to-br from-koel-bamboo/20 to-koel-bamboo/5",
      accentColor: "text-koel-bamboo-dark",
      accentBgColor: "bg-koel-bamboo",
      illustrationPath: "/images/fragrances/bamboo-whisper.svg",
    },
    {
      name: "Ginger Grape",
      subtitle: "Calidez Vibrante",
      description:
        "Una fragancia cálida y especiada que evoca energía y vitalidad. Jengibre fresco combinado con notas sutiles que te acompañan durante todo el día con elegancia y distinción.",
      bgColor: "bg-gradient-to-br from-koel-ginger/20 to-koel-ginger/5",
      accentColor: "text-koel-ginger-dark",
      accentBgColor: "bg-koel-ginger",
      illustrationPath: "/images/fragrances/ginger-grape.svg",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="fragancias"
      className="relative bg-koel-neutral-50"
    >
      {/* Sticky container for horizontal scroll effect */}
      <div className="h-[200vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          {/* Section Header - Fixed */}
          <div className="px-6 sm:px-8 md:px-16 lg:px-20 pt-16 sm:pt-20 pb-8 sm:pb-12">
            <div className="max-w-6xl mx-auto">
              <MaskText delay={0.1}>
                <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-koel-neutral-500 mb-4 sm:mb-6 font-light text-center">
                  Fragancias exclusivas
                </p>
              </MaskText>

              <MaskText delay={0.2}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-display tracking-wide text-koel-neutral-900 mb-4 sm:mb-6 text-center">
                  Tu fragancia, <span className="text-gradient-koel">tu historia</span>
                </h2>
              </MaskText>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl lg:text-2xl text-koel-neutral-600 max-w-3xl mx-auto leading-relaxed text-center"
              >
                Dos fragancias diseñadas para adaptarse a tu día a día.
              </motion.p>
            </div>
          </div>

          {/* Horizontal Scrolling Cards */}
          <motion.div
            style={{ x }}
            className="flex gap-8 sm:gap-12 lg:gap-16 px-6 sm:px-8 lg:px-20 py-8"
          >
            {fragrances.map((fragrance, index) => (
              <FragranceCard
                key={fragrance.name}
                {...fragrance}
                index={index}
              />
            ))}

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="w-[85vw] sm:w-[70vw] lg:w-[35vw] flex-shrink-0 flex items-center justify-center"
            >
              <div className="glass-dark rounded-3xl lg:rounded-[2rem] p-10 sm:p-14 text-center text-white max-w-lg">
                <motion.p
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl sm:text-5xl mb-6"
                >
                  🌿
                </motion.p>
                <h3 className="text-2xl sm:text-3xl font-display mb-4">
                  Próximamente
                </h3>
                <p className="text-base sm:text-lg text-white/80 mb-6">
                  Nuevas fragancias en camino. Suscríbete para ser el primero en conocerlas.
                </p>
                <p className="text-sm text-white/60">
                  Libres de aluminio y alcohol
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Progress Bar */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-48 sm:w-64">
            <div className="h-1 bg-koel-neutral-200 rounded-full overflow-hidden">
              <motion.div
                style={{ width: progressWidth }}
                className="h-full bg-gradient-to-r from-koel-blue to-koel-bamboo"
              />
            </div>
            <p className="text-center text-xs text-koel-neutral-500 mt-2 tracking-wider uppercase">
              Desliza para explorar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
