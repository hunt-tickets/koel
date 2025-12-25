'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiPlus, HiX } from 'react-icons/hi';
import Card from '../ui/Card';

interface ProductFeature {
  title: string;
  description: string;
}

interface ProductCardProps {
  title: string;
  subtitle: string;
  imagePlaceholder: string;
  features: ProductFeature[];
  bgColor: string;
}

function ProductCard({ title, subtitle, imagePlaceholder, features, bgColor }: ProductCardProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <Card className={`${bgColor} border border-koel-neutral-200`}>
      {/* Product Image */}
      <div className="relative w-full aspect-square mb-4 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-koel-neutral-100 to-koel-neutral-200 flex items-center justify-center">
        <p className="text-koel-neutral-400 text-center px-4 text-sm sm:text-base">
          {imagePlaceholder}
        </p>
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold text-koel-neutral-900 mb-1 sm:mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-koel-neutral-600 mb-4 sm:mb-6">
        {subtitle}
      </p>

      {/* Expandable Features */}
      <div className="space-y-2 sm:space-y-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-koel-neutral-200 rounded-lg sm:rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-koel-neutral-50 transition-colors duration-300"
            >
              <span className="font-semibold text-koel-neutral-900 text-sm sm:text-base">
                {feature.title}
              </span>
              <motion.div
                animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-koel-blue flex-shrink-0 ml-2"
              >
                {expandedIndex === index ? (
                  <HiX className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <HiPlus className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </motion.div>
            </button>

            <motion.div
              initial={false}
              animate={{
                height: expandedIndex === index ? 'auto' : 0,
                opacity: expandedIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-sm sm:text-base text-koel-neutral-600 leading-relaxed">
                {feature.description}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default function ProductSystemSection() {
  const caseFeatures: ProductFeature[] = [
    {
      title: "Diseño limpio y ergonómico",
      description: "Perfecto para el hogar y viajes, su tamaño compacto y elegante se adapta a tu estilo."
    },
    {
      title: "Fabricado para durar",
      description: "Materiales de alta resistencia que aseguran funcionalidad y durabilidad en cualquier situación."
    },
    {
      title: "Elimina los plásticos de un solo uso",
      description: "Una solución pionera para cuidar el futuro sin comprometer el presente."
    },
    {
      title: "Materiales premium",
      description: "Construcción de alta calidad con acabados sofisticados que reflejan tu estilo de vida consciente."
    }
  ];

  const podFeatures: ProductFeature[] = [
    {
      title: "Cartón biodegradable",
      description: "Una opción natural y responsable para el cuidado diario."
    },
    {
      title: "Práctico",
      description: "Cada recarga dura de 1 a 2 meses, adaptándose a tus necesidades."
    },
    {
      title: "Fácil de reemplazar",
      description: "Pensado para que cualquier usuario pueda cambiarlo sin esfuerzo."
    },
    {
      title: "Dos fragancias exclusivas",
      description: "Bamboo Whisper y Ginger Grap - Opciones diseñadas para elevar tu experiencia con aromas frescos y cautivadores."
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
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif text-koel-neutral-900 mb-3 sm:mb-4">
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
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
