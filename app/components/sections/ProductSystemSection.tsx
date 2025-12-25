'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Sparkles, Shield, Leaf, Gem, CalendarRange, RotateCw, Flower2, ChevronDown } from 'lucide-react';
import TiltCard from '../ui/TiltCard';
import { MagneticPrimaryButton } from '../ui/MagneticButton';
import { MaskText } from '../ui/TextReveal';

interface ProductFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProductCardProps {
  title: string;
  subtitle: string;
  imagePlaceholder: string;
  features: ProductFeature[];
  price: string;
  accentColor: string;
}

function ProductCard({ title, subtitle, imagePlaceholder, features, price, accentColor }: ProductCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <TiltCard
      tiltStrength={6}
      scaleOnHover={1.01}
      glareEnabled={true}
      className="bg-white border border-koel-neutral-200 rounded-3xl lg:rounded-[2rem] p-8 sm:p-10 lg:p-12 h-full flex flex-col shadow-premium"
    >
      {/* Product Image */}
      <div className="relative w-full aspect-square mb-8 sm:mb-10 rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-koel-neutral-50 to-koel-neutral-100 flex items-center justify-center p-10 border border-koel-neutral-200">
        {/* Animated background */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute inset-0 opacity-20 ${accentColor}`}
        />

        {/* Simulated Product Render */}
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
          <motion.div
            whileHover={{ rotateY: 10, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-28 h-40 sm:w-36 sm:h-52 bg-gradient-to-b from-koel-blue-light to-koel-blue rounded-[1.5rem] shadow-lg relative overflow-hidden"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-full" />
          </motion.div>
          <p className="text-koel-neutral-500 text-center px-2 text-xs sm:text-sm">
            {imagePlaceholder}<br />
            <span className="text-[10px] sm:text-xs opacity-60">500x500px</span>
          </p>
        </div>
      </div>

      {/* Title with hover effect */}
      <motion.h3
        className="text-2xl sm:text-3xl font-bold text-koel-neutral-900 mb-2 sm:mb-3"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>
      <p className="text-base sm:text-lg text-koel-neutral-600 mb-6 sm:mb-8">
        {subtitle}
      </p>

      {/* Expandir/Colapsar Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-koel-aqua hover:text-koel-teal transition-colors mb-6 group"
        whileHover={{ x: 5 }}
      >
        <span className="text-sm sm:text-base font-medium">
          {isExpanded ? 'Ocultar detalles' : 'Ver detalles del producto'}
        </span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5" strokeWidth={2} />
        </motion.div>
      </motion.button>

      {/* Features Grid - Expandible */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-5 sm:gap-6 mb-8 pb-8 border-b border-koel-neutral-200">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 sm:gap-5 group cursor-default"
                >
                  {/* Icon with hover scale */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-koel-aqua/10 to-koel-olive/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-koel-aqua"
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h4 className="text-base sm:text-lg font-semibold text-koel-neutral-900 mb-1.5 group-hover:text-koel-aqua transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm sm:text-base text-koel-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Buy Button with Price */}
      <div className="mt-auto pt-6">
        <MagneticPrimaryButton
          variant="primary"
          size="lg"
          className="w-full justify-center"
          strength={0.15}
        >
          <span className="flex items-center gap-3">
            <span>Comprar ahora</span>
            <span className="text-lg sm:text-xl font-bold">·</span>
            <span className="font-bold">{price}</span>
          </span>
        </MagneticPrimaryButton>
      </div>
    </TiltCard>
  );
}

export default function ProductSystemSection() {
  const caseFeatures: ProductFeature[] = [
    {
      icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />,
      title: "Diseño ergonómico",
      description: "Compacto y elegante para cualquier lugar."
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />,
      title: "Duradero",
      description: "Materiales de alta resistencia."
    },
    {
      icon: <Leaf className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />,
      title: "Cero plástico",
      description: "Elimina desechables de un solo uso."
    },
    {
      icon: <Gem className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />,
      title: "Premium",
      description: "Acabados de alta calidad."
    }
  ];

  const podFeatures: ProductFeature[] = [
    {
      icon: <Leaf className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />,
      title: "Biodegradable",
      description: "Cartón 100% natural."
    },
    {
      icon: <CalendarRange className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />,
      title: "Larga duración",
      description: "1 a 2 meses por recarga."
    },
    {
      icon: <RotateCw className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />,
      title: "Fácil recarga",
      description: "Cambio sin esfuerzo en segundos."
    },
    {
      icon: <Flower2 className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />,
      title: "Dos fragancias",
      description: "Bamboo Whisper y Ginger Grape."
    }
  ];

  return (
    <section id="producto" className="section-container bg-koel-neutral-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with reveal animation */}
        <div className="text-center mb-16 sm:mb-24 lg:mb-32">
          <MaskText delay={0.1}>
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-koel-neutral-500 mb-4 sm:mb-6 font-light">
              Nuestro sistema
            </p>
          </MaskText>

          <MaskText delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-display tracking-wide text-koel-neutral-900">
              Diseño que cambia las reglas.
            </h2>
          </MaskText>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ProductCard
              title="Deodorant Case"
              subtitle="Tu compañero duradero"
              imagePlaceholder="[Render 3D del Case azul claro]"
              features={caseFeatures}
              price="$35,000"
              accentColor="bg-gradient-to-br from-koel-blue/30 to-koel-bamboo/30"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ProductCard
              title="Deodorant Pod"
              subtitle="Recarga biodegradable"
              imagePlaceholder="[Render del Pod con cartón biodegradable]"
              features={podFeatures}
              price="$15,000"
              accentColor="bg-gradient-to-br from-koel-bamboo/30 to-koel-ginger/30"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
