'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { Sparkles, Shield, Leaf, Gem, CalendarRange, RotateCw, Flower2, ChevronDown } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
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
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

function ProductCard({ title, subtitle, imagePlaceholder, features, price, accentColor, isExpanded = false, onToggleExpand }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white border border-koel-neutral-200 rounded-3xl lg:rounded-[2rem] p-8 sm:p-10 lg:p-12 flex flex-col shadow-premium w-full h-full min-h-[600px]"
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
        animate={{ x: isHovered ? 5 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-2xl sm:text-3xl font-bold text-koel-neutral-900 mb-2 sm:mb-3"
      >
        {title}
      </motion.h3>
      <p className="text-base sm:text-lg text-koel-neutral-600 mb-6 sm:mb-8">
        {subtitle}
      </p>

      {/* Expandir/Colapsar Button */}
      <button
        onClick={onToggleExpand}
        className="flex items-center gap-2 text-koel-aqua hover:text-koel-teal transition-colors mb-6 group"
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
      </button>

      {/* Features Grid - Expandible */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-5 sm:gap-6 mb-8 pb-8 border-b border-koel-neutral-200">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 sm:gap-5 group cursor-default"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-koel-aqua/10 to-koel-olive/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-koel-aqua">
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h4 className="text-base sm:text-lg font-semibold text-koel-neutral-900 mb-1.5">
                      {feature.title}
                    </h4>
                    <p className="text-sm sm:text-base text-koel-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Buy Button with Price */}
      <div className="pt-6">
        <MagneticPrimaryButton
          variant="primary"
          size="lg"
          className="w-full justify-center"
          strength={0.15}
        >
          <span className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <span>Comprar</span>
            <span className="font-bold">·</span>
            <span className="font-bold">{price}</span>
          </span>
        </MagneticPrimaryButton>
      </div>
    </motion.div>
  );
}

export default function ProductSystemSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: 'trimSnaps',
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Reinit carousel when card height changes (expand/collapse)
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [expandedIndex, emblaApi]);

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

  const products = [
    {
      title: "Deodorant Case",
      subtitle: "Tu compañero duradero",
      imagePlaceholder: "[Render 3D del Case azul claro]",
      features: caseFeatures,
      price: "$35,000",
      accentColor: "bg-gradient-to-br from-koel-blue/30 to-koel-bamboo/30"
    },
    {
      title: "Deodorant Pod",
      subtitle: "Recarga biodegradable",
      imagePlaceholder: "[Render del Pod con cartón biodegradable]",
      features: podFeatures,
      price: "$15,000",
      accentColor: "bg-gradient-to-br from-koel-bamboo/30 to-koel-ginger/30"
    }
  ];

  return (
    <section id="producto" className="section-container bg-koel-neutral-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
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

        {/* Embla Carousel */}
        <div className="overflow-hidden -mx-6 sm:-mx-8 md:mx-0" ref={emblaRef}>
          <div className="flex gap-6 sm:gap-8 lg:gap-12 px-6 sm:px-8 md:px-0">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="flex-[0_0_92%] sm:flex-[0_0_80%] md:flex-[0_0_70%] lg:flex-[0_0_45%] min-w-0"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard
                  {...product}
                  isExpanded={expandedIndex === index}
                  onToggleExpand={() => setExpandedIndex(expandedIndex === index ? null : index)}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? 'w-8 bg-koel-aqua'
                  : 'w-2 bg-koel-neutral-300 hover:bg-koel-neutral-400'
              }`}
              aria-label={`Go to ${products[index].title}`}
            />
          ))}
        </div>

        {/* Helper text */}
        <p className="text-center text-xs text-koel-neutral-500 mt-4 tracking-wider uppercase">
          Desliza para explorar
        </p>
      </div>
    </section>
  );
}
