'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface FragranceCardProps {
  name: string;
  subtitle: string;
  description: string;
  bgColor: string;
  accentColor: string;
  illustrationPath: string;
}

function FragranceCard({
  name,
  subtitle,
  description,
  bgColor,
  accentColor,
  illustrationPath,
}: FragranceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`${bgColor} rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-300 h-full`}
    >
      <div className="p-8 sm:p-12 md:p-16 flex flex-col h-full">
        {/* Illustration */}
        <div className="relative w-full aspect-square mb-8 sm:mb-12 rounded-2xl sm:rounded-3xl overflow-hidden flex items-center justify-center">
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src={illustrationPath}
              alt={`${name} illustration`}
              width={400}
              height={400}
              className="w-full h-full object-contain p-6 sm:p-10"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal font-display tracking-wide text-koel-neutral-900 mb-2 sm:mb-3">
            {name}
          </h3>
          <p className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 ${accentColor}`}>
            {subtitle}
          </p>
          <p className="text-base sm:text-lg text-koel-neutral-600 leading-relaxed flex-1">
            {description}
          </p>

          {/* Fragrance Badge */}
          <motion.div
            animate={{
              y: isHovered ? -5 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="mt-6 sm:mt-8 inline-flex items-center gap-3"
          >
            <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${accentColor}`} />
            <span className="text-sm sm:text-base font-semibold text-koel-neutral-700">
              100% Origen Natural
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FragrancesSection() {
  const fragrances = [
    {
      name: "Bamboo Whisper",
      subtitle: "Frescura Natural",
      description:
        "Un aroma fresco y natural inspirado en la tranquilidad de un bosque de bambú. Perfecto para quienes buscan una fragancia ligera y revitalizante que te conecte con la naturaleza.",
      bgColor: "bg-gradient-to-br from-koel-bamboo/20 to-koel-bamboo/5",
      accentColor: "text-koel-bamboo",
      illustrationPath: "/images/fragrances/bamboo-whisper.svg",
    },
    {
      name: "Ginger Grape",
      subtitle: "Calidez Vibrante",
      description:
        "Una fragancia cálida y especiada que evoca energía y vitalidad. Jengibre fresco combinado con notas sutiles que te acompañan durante todo el día con elegancia y distinción.",
      bgColor: "bg-gradient-to-br from-koel-ginger/20 to-koel-ginger/5",
      accentColor: "text-koel-ginger",
      illustrationPath: "/images/fragrances/ginger-grape.svg",
    },
  ];

  return (
    <section id="fragancias" className="section-container bg-koel-neutral-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24 lg:mb-32"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-display tracking-wide text-koel-neutral-900 mb-4 sm:mb-6">
            Tu fragancia, <span className="text-gradient-koel">tu historia</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-koel-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Dos fragancias diseñadas para adaptarse a tu día a día. ¿Cuál será tu elegida?
          </p>
        </motion.div>

        {/* Fragrance Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {fragrances.map((fragrance, index) => (
            <motion.div
              key={fragrance.name}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <FragranceCard {...fragrance} />
            </motion.div>
          ))}
        </div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-20 lg:mt-24 text-center glass-dark rounded-3xl lg:rounded-[2rem] p-8 sm:p-12 text-white"
        >
          <p className="text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3">
            Libres de aluminio y alcohol
          </p>
          <p className="text-base sm:text-lg text-koel-neutral-300 leading-relaxed">
            Fórmulas 100% naturales que cuidan tu piel sin comprometer la eficacia
          </p>
        </motion.div>
      </div>
    </section>
  );
}
