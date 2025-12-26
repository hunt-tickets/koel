'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { Sparkles, Shield, Leaf, Gem, CalendarRange, RotateCw, Flower2, ChevronDown, ArrowUpRight } from 'lucide-react';
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
      className="bg-white border border-koel-neutral-200 rounded-3xl lg:rounded-[2rem] p-8 sm:p-10 lg:p-12 flex flex-col shadow-premium w-full h-full min-h-[600px] relative"
    >
      {/* Diagonal Arrow - Top Right Corner */}
      <motion.div
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20"
        animate={{
          y: isHovered ? -2 : 0,
          x: isHovered ? 2 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-koel-aqua/20 to-koel-aqua/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-koel-aqua/30 hover:to-koel-aqua/15 transition-all">
          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-koel-aqua" strokeWidth={2} />
        </div>
      </motion.div>
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
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
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
      title: "Natural",
      description: "Ingredientes puros y seguros."
    }
  ];

  const starterKitFeatures: ProductFeature[] = [
    {
      icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />,
      title: "Todo lo que necesitas",
      description: "Case + 2 Pods biodegradables."
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />,
      title: "Mejor valor",
      description: "Ahorra con este kit completo."
    },
    {
      icon: <Gem className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />,
      title: "Premium",
      description: "Diseño y calidad sin compromiso."
    },
    {
      icon: <Flower2 className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />,
      title: "Perfecto para empezar",
      description: "Ideal para tu primera compra."
    }
  ];

  const familyKitFeatures: ProductFeature[] = [
    {
      icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />,
      title: "Para toda la familia",
      description: "2 Cases + 4 Pods variados."
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />,
      title: "Máximo ahorro",
      description: "Mejor precio por unidad."
    },
    {
      icon: <Gem className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />,
      title: "Dos fragancias",
      description: "Bamboo y Ginger Grape."
    },
    {
      icon: <Leaf className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />,
      title: "Sostenible",
      description: "Menos empaques, más conciencia."
    }
  ];

  const products = [
    {
      title: "Deodorant Pod Bamboo",
      subtitle: "Recarga biodegradable",
      imagePlaceholder: "[Render Pod Bamboo Whisper]",
      features: podFeatures,
      price: "$12,000",
      accentColor: "bg-gradient-to-br from-koel-bamboo/30 to-koel-aqua/30"
    },
    {
      title: "Deodorant Pod Ginger Grape",
      subtitle: "Recarga con aroma cítrico",
      imagePlaceholder: "[Render Pod Ginger Grape]",
      features: podFeatures,
      price: "$12,000",
      accentColor: "bg-gradient-to-br from-koel-ginger/30 to-koel-coral/30"
    },
    {
      title: "Deodorant Case",
      subtitle: "Tu compañero duradero",
      imagePlaceholder: "[Render 3D del Case azul claro]",
      features: caseFeatures,
      price: "$35,000",
      accentColor: "bg-gradient-to-br from-koel-blue/30 to-koel-bamboo/30"
    },
    {
      title: "Starter Kit",
      subtitle: "Tu primer paso hacia lo sostenible",
      imagePlaceholder: "[Render Starter Kit completo]",
      features: starterKitFeatures,
      price: "$45,000",
      accentColor: "bg-gradient-to-br from-koel-teal/30 to-koel-aqua/30"
    },
    {
      title: "Family Kit",
      subtitle: "Para compartir en familia",
      imagePlaceholder: "[Render Family Kit premium]",
      features: familyKitFeatures,
      price: "$79,000",
      accentColor: "bg-gradient-to-br from-koel-aqua/30 to-koel-olive/30"
    }
  ];

  return (
    <section id="producto" className="section-container bg-koel-neutral-50 rounded-t-3xl">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto w-full">
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
      </div>

      {/* MOBILE: Horizontal Carousel - Full Width */}
      <div className="md:hidden bg-white">
        <div className="overflow-hidden w-screen -mx-[calc((100vw-100%)/2)]" ref={emblaRef}>
          <div className="flex gap-4 px-4">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="flex-[0_0_85%] min-w-0"
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
            {/* Spacer - Empty space at the end */}
            <div className="flex-[0_0_15%] min-w-0" />
          </div>
        </div>

        {/* Mobile Carousel Indicators */}
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex justify-center gap-2 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? 'w-8 bg-koel-aqua'
                    : 'w-2 bg-koel-neutral-300 hover:bg-koel-neutral-400'
                }`}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP: Grid Layout */}
      <div className="max-w-6xl mx-auto w-full">
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
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
    </section>
  );
}
