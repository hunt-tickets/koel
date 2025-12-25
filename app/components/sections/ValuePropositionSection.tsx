'use client';

import { motion } from 'framer-motion';
import { Zap, Star, Sparkles, Banknote, Flag, Heart } from 'lucide-react';
import Button from '../ui/Button';

interface ValueItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function ValueItem({ icon, title, description, delay }: ValueItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start gap-4 sm:gap-6 group"
    >
      <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-koel-blue to-koel-bamboo rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="pt-1">
        <h4 className="text-lg sm:text-xl font-bold text-koel-neutral-900 mb-2">
          {title}
        </h4>
        <p className="text-base sm:text-lg text-koel-neutral-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ValuePropositionSection() {
  const valuePoints = [
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Recarga en segundos",
      description: "Un giro, encaja, y listo. ¡Es así de fácil!",
      delay: 0.1,
    },
    {
      icon: <Star className="w-7 h-7" />,
      title: "Diseño premium",
      description: "Un accesorio que combina estilo y funcionalidad.",
      delay: 0.2,
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Fragancias exclusivas",
      description: "Aromas cautivadores diseñados para ti.",
      delay: 0.3,
    },
    {
      icon: <Banknote className="w-7 h-7" />,
      title: "Ahorro inteligente",
      description: "Menos plástico y más valor para tu bolsillo: a largo plazo, KOEL es la opción más económica.",
      delay: 0.4,
    },
    {
      icon: <Flag className="w-7 h-7" />,
      title: "100% colombiano",
      description: "Innovación local al alcance de tus manos.",
      delay: 0.5,
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Cuidado personal simplificado",
      description: "Ingredientes suaves, piel fresca y protegida.",
      delay: 0.6,
    },
  ];

  return (
    <section className="section-container bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24 lg:mb-32"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-display tracking-wide text-koel-neutral-900 mb-4 sm:mb-6">
            Diseñado para ti, <span className="text-gradient-koel">creado para marcar la diferencia.</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-koel-neutral-600 max-w-4xl mx-auto leading-relaxed">
            Simplifica tu rutina con un desodorante que combina estilo, innovación y funcionalidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-20 lg:gap-28 items-center">
          {/* Left: Value Points */}
          <div className="space-y-8 sm:space-y-10 order-2 lg:order-1">
            {valuePoints.map((point, index) => (
              <ValueItem key={index} {...point} />
            ))}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-6 sm:pt-8 flex justify-center lg:justify-start"
            >
              <Button variant="primary" size="lg">
                Pre-order now
              </Button>
            </motion.div>
          </div>

          {/* Right: Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-premium-lg max-w-md mx-auto lg:max-w-none border-2 border-koel-neutral-300">
              {/* Video Placeholder */}
              <div className="aspect-[3/4] sm:aspect-[9/16] bg-gradient-to-br from-koel-neutral-200 to-koel-neutral-300 flex items-center justify-center relative">
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-18 h-18 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                  >
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-koel-blue border-b-[8px] border-b-transparent ml-1" />
                  </motion.div>
                </div>
                <div className="text-center px-6 sm:px-10 relative z-10">
                  <p className="text-base sm:text-lg text-koel-neutral-700 font-semibold mb-2">
                    Video Premium Lifestyle
                  </p>
                  <p className="text-sm sm:text-base text-koel-neutral-600">
                    1080x1920px (9:16) • Vertical<br />
                    Mujer aplicando KOEL en baño
                  </p>
                </div>
              </div>

              {/* Video Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 glass-dark p-6 sm:p-10 text-center">
                <p className="text-white text-base sm:text-xl md:text-2xl font-semibold">
                  Más que un desodorante, una experiencia única.
                </p>
              </div>
            </div>

            {/* Decorative Elements - Hidden on mobile */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hidden sm:block absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-koel-blue to-koel-bamboo rounded-full opacity-20 blur-2xl"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className="hidden sm:block absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-koel-ginger to-koel-bamboo rounded-full opacity-20 blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
