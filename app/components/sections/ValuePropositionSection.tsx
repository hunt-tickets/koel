'use client';

import { motion } from 'framer-motion';
import { HiLightningBolt, HiStar, HiSparkles, HiCash, HiFlag, HiHeart } from 'react-icons/hi';
import Button from '../ui/Button';
import VideoPlayer from '../ui/VideoPlayer';

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
      className="flex items-start gap-3 sm:gap-4 group"
    >
      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-koel-blue to-koel-bamboo rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-base sm:text-lg font-bold text-koel-neutral-900 mb-1">
          {title}
        </h4>
        <p className="text-sm sm:text-base text-koel-neutral-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ValuePropositionSection() {
  const valuePoints = [
    {
      icon: <HiLightningBolt className="w-6 h-6" />,
      title: "Recarga en segundos",
      description: "Un giro, encaja, y listo. ¡Es así de fácil!",
      delay: 0.1,
    },
    {
      icon: <HiStar className="w-6 h-6" />,
      title: "Diseño premium",
      description: "Un accesorio que combina estilo y funcionalidad.",
      delay: 0.2,
    },
    {
      icon: <HiSparkles className="w-6 h-6" />,
      title: "Fragancias exclusivas",
      description: "Aromas cautivadores diseñados para ti.",
      delay: 0.3,
    },
    {
      icon: <HiCash className="w-6 h-6" />,
      title: "Ahorro inteligente",
      description: "Menos plástico y más valor para tu bolsillo: a largo plazo, KOEL es la opción más económica.",
      delay: 0.4,
    },
    {
      icon: <HiFlag className="w-6 h-6" />,
      title: "100% colombiano",
      description: "Innovación local al alcance de tus manos.",
      delay: 0.5,
    },
    {
      icon: <HiHeart className="w-6 h-6" />,
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
          className="text-center mb-10 sm:mb-16 px-4 sm:px-0"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-sans text-koel-neutral-900 mb-3 sm:mb-4">
            Diseñado para ti, <span className="text-gradient-koel">creado para marcar la diferencia.</span>
          </h2>
          <p className="text-base sm:text-xl text-koel-neutral-600 max-w-3xl mx-auto">
            Simplifica tu rutina con un desodorante que combina estilo, innovación y funcionalidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center px-4 sm:px-0">
          {/* Left: Value Points */}
          <div className="space-y-5 sm:space-y-8 order-2 lg:order-1">
            {valuePoints.map((point, index) => (
              <ValueItem key={index} {...point} />
            ))}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-2 sm:pt-4 flex justify-center lg:justify-start"
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
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-premium-lg max-w-sm mx-auto lg:max-w-none">
              {/* Video Placeholder */}
              <div className="aspect-[3/4] sm:aspect-[9/16] bg-gradient-to-br from-koel-neutral-200 to-koel-neutral-300 flex items-center justify-center">
                <div className="text-center px-4 sm:px-8">
                  <p className="text-sm sm:text-base text-koel-neutral-600 mb-2 sm:mb-4">
                    [Placeholder para video premium]
                  </p>
                  <p className="text-xs sm:text-sm text-koel-neutral-500">
                    Video de mujer en baño con espejo como marco
                    <br />
                    Aplicando KOEL con satisfacción
                  </p>
                </div>
              </div>

              {/* Video Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 glass-dark p-4 sm:p-8 text-center">
                <p className="text-white text-sm sm:text-lg md:text-xl font-semibold">
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
              className="hidden sm:block absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-koel-blue to-koel-bamboo rounded-full opacity-20 blur-2xl"
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
              className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-koel-ginger to-koel-bamboo rounded-full opacity-20 blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
