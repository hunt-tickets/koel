'use client';

import { motion } from 'framer-motion';
import { Sparkles, Shield, Leaf, Gem, CalendarRange, RotateCw, Flower2 } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

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
  bgColor: string;
  price: string;
}

function ProductCard({ title, subtitle, imagePlaceholder, features, bgColor, price }: ProductCardProps) {
  return (
    <Card className={`${bgColor} border border-koel-neutral-200 flex flex-col`}>
      {/* Product Image */}
      <div className="relative w-full aspect-square mb-4 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-koel-neutral-50 to-koel-neutral-100 flex items-center justify-center p-8 border border-koel-neutral-200">
        {/* Simulated Product Render */}
        <div className="w-full h-full flex flex-col items-center justify-center gap-3">
          <div className="w-24 h-36 sm:w-32 sm:h-44 bg-gradient-to-b from-koel-blue-light to-koel-blue rounded-[1.5rem] shadow-lg relative">
            <div className="absolute inset-0 bg-white/10" />
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full" />
          </div>
          <p className="text-koel-neutral-500 text-center px-2 text-xs">
            {imagePlaceholder}<br />
            <span className="text-[10px] opacity-60">500x500px</span>
          </p>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold text-koel-neutral-900 mb-1 sm:mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-koel-neutral-600 mb-6 sm:mb-8">
        {subtitle}
      </p>

      {/* Features Grid - Minimalista con iconos */}
      <div className="grid grid-cols-1 gap-4 sm:gap-5 mb-6 sm:mb-8 flex-1">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-start gap-3 sm:gap-4 group"
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-koel-blue/10 to-koel-bamboo/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-koel-blue group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>

            {/* Content */}
            <div className="flex-1 pt-1">
              <h4 className="text-sm sm:text-base font-semibold text-koel-neutral-900 mb-1">
                {feature.title}
              </h4>
              <p className="text-xs sm:text-sm text-koel-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Price and Buy Button */}
      <div className="mt-auto border-t border-koel-neutral-200 pt-6">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div>
            <p className="text-xs sm:text-sm text-koel-neutral-600 mb-1">Precio</p>
            <p className="text-2xl sm:text-3xl font-bold font-display tracking-wide text-koel-neutral-900">
              {price}
            </p>
          </div>
        </div>
        <Button
          variant="primary"
          size="lg"
          className="w-full"
        >
          Comprar ahora
        </Button>
      </div>
    </Card>
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
    <section id="producto" className="section-container bg-koel-neutral-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16 px-4 sm:px-0"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-normal font-display tracking-wide text-koel-neutral-900 mb-3 sm:mb-4">
            Diseño que cambia las reglas.<br />
            <span className="text-gradient-koel">Innovación que simplifica tu día.</span>
          </h2>
          <p className="text-base sm:text-xl text-koel-neutral-600 max-w-3xl mx-auto">
            Cada detalle de KOEL combina funcionalidad y diseño. Utiliza nuestro sistema de recarga Deodorant Case y Deodorant Pod.
          </p>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ProductCard
              title="Deodorant Case"
              subtitle="Tu compañero duradero"
              imagePlaceholder="[Render 3D del Case azul claro]"
              features={caseFeatures}
              bgColor="bg-white"
              price="$35,000"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ProductCard
              title="Deodorant Pod"
              subtitle="Recarga biodegradable"
              imagePlaceholder="[Render del Pod con cartón biodegradable]"
              features={podFeatures}
              bgColor="bg-white"
              price="$15,000"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
