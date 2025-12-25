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
      className={`${bgColor} rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-300 h-full`}
    >
      <div className="p-8 md:p-12 flex flex-col h-full">
        {/* Illustration */}
        <div className="relative w-full aspect-square mb-8 rounded-2xl overflow-hidden flex items-center justify-center">
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
              className="w-full h-full object-contain p-8"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-3xl md:text-4xl font-bold font-serif text-koel-neutral-900 mb-2">
            {name}
          </h3>
          <p className={`text-lg font-semibold mb-4 ${accentColor}`}>
            {subtitle}
          </p>
          <p className="text-koel-neutral-600 leading-relaxed flex-1">
            {description}
          </p>

          {/* Fragrance Badge */}
          <motion.div
            animate={{
              y: isHovered ? -5 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="mt-6 inline-flex items-center gap-2"
          >
            <div className={`w-4 h-4 rounded-full ${accentColor}`} />
            <span className="text-sm font-semibold text-koel-neutral-700">
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-koel-neutral-900 mb-4">
            Tu fragancia, <span className="text-gradient-koel">tu historia</span>
          </h2>
          <p className="text-xl text-koel-neutral-600 max-w-3xl mx-auto">
            Dos fragancias diseñadas para adaptarse a tu día a día. ¿Cuál será tu elegida?
          </p>
        </motion.div>

        {/* Fragrance Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
          className="mt-12 text-center glass-dark rounded-3xl p-8 text-white"
        >
          <p className="text-lg mb-2">
            🌿 Libres de aluminio y alcohol
          </p>
          <p className="text-koel-neutral-300">
            Fórmulas 100% naturales que cuidan tu piel sin comprometer la eficacia
          </p>
        </motion.div>
      </div>
    </section>
  );
}
