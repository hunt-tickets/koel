'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../ui/Button';
import { RotateCw, Lock, ArrowRight } from 'lucide-react';

interface TutorialStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

// Animated Mobile Icons
function RotateIcon() {
  return (
    <motion.svg
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-9-9" />
      <polyline points="21 3 21 9 15 9" />
    </motion.svg>
  );
}

function InsertIcon() {
  return (
    <motion.svg
      animate={{ y: [0, 4, 0] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </motion.svg>
  );
}

function ClickIcon() {
  return (
    <motion.svg
      animate={{ scale: [1, 0.85, 1] }}
      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="8 12 11 15 16 9" />
    </motion.svg>
  );
}

// Compact Mobile Step Component
function MobileStep({ number, title, delay }: Omit<TutorialStepProps, 'description' | 'icon'> & { icon?: React.ReactNode }) {
  const getMobileIcon = () => {
    switch (number) {
      case 1: return <RotateIcon />;
      case 2: return <InsertIcon />;
      case 3: return <ClickIcon />;
      default: return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex flex-col items-center relative"
    >
      {/* Number Badge with Animated Icon */}
      <div className="w-18 h-18 sm:w-20 sm:h-20 bg-gradient-to-br from-koel-blue to-koel-bamboo rounded-full flex items-center justify-center text-white shadow-premium mb-3">
        {getMobileIcon()}
      </div>

      {/* Step Number */}
      <div className="absolute -top-1 -right-1 w-7 h-7 bg-white rounded-full flex items-center justify-center text-koel-blue text-sm font-bold shadow-md border-2 border-koel-blue">
        {number}
      </div>

      {/* Title */}
      <h3 className="text-sm sm:text-base font-bold text-koel-neutral-900 text-center">
        {title}
      </h3>
    </motion.div>
  );
}

// Desktop Step Card Component
function TutorialStep({ number, title, description, icon, delay }: TutorialStepProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      {/* Step Card */}
      <div className="bg-white rounded-3xl p-10 lg:p-12 shadow-premium hover:shadow-premium-lg transition-all duration-300">
        {/* Number Badge */}
        <div className="absolute -top-7 -left-7 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-koel-blue to-koel-bamboo rounded-full flex items-center justify-center text-white text-2xl lg:text-3xl font-bold shadow-premium z-10">
          {number}
        </div>

        {/* Icon Animation Container */}
        <div className="mb-8 flex justify-center">
          <motion.div
            animate={inView ? {
              rotate: number === 1 ? [0, 360, 360] : 0,
              y: number === 2 ? [0, -20, 0] : 0,
              scale: number === 3 ? [1, 0.9, 1] : 1,
            } : {}}
            transition={{
              duration: 2,
              delay: delay + 0.5,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="w-36 h-36 lg:w-40 lg:h-40 bg-gradient-to-br from-koel-blue/10 to-koel-bamboo/10 rounded-full flex items-center justify-center"
          >
            <div className="text-koel-blue text-6xl lg:text-7xl">
              {icon}
            </div>
          </motion.div>
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl lg:text-3xl font-bold text-koel-neutral-900 mb-4 text-center">
          {title}
        </h3>
        <p className="text-base lg:text-lg text-koel-neutral-600 text-center leading-relaxed">
          {description}
        </p>
      </div>

      {/* Arrow Connector (except for last step) */}
      {number < 3 && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          className="absolute top-1/2 -right-10 transform -translate-y-1/2 text-koel-blue"
        >
          <ArrowRight className="w-10 h-10" />
        </motion.div>
      )}
    </motion.div>
  );
}

export default function TutorialSection() {
  const steps = [
    {
      number: 1,
      title: "Gira",
      description: "Muestra el movimiento rotacional para abrir el envase del Deodorant Case.",
      icon: <RotateCw />,
    },
    {
      number: 2,
      title: "Encaja",
      description: "La recarga Deodorant Pod entra perfectamente en su lugar. Simple y preciso.",
      icon: <span className="text-5xl lg:text-6xl">📦</span>,
    },
    {
      number: 3,
      title: "Empuja",
      description: "Cierra el envase hasta escuchar un clic seguro. ¡Tu KOEL está listo!",
      icon: <Lock />,
    },
  ];

  return (
    <section id="como-funciona" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-display tracking-wide text-koel-neutral-900 mb-4 sm:mb-6">
            Recargar es tan simple como <span className="text-gradient-koel">1, 2, 3.</span>
          </h2>
          <p className="text-base sm:text-xl lg:text-2xl text-koel-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Olvídate de lo complicado. En solo tres simples pasos, tu desodorante está listo de nuevo.
          </p>
        </motion.div>

        {/* Mobile Compact Timeline - Only visible on mobile */}
        <div className="lg:hidden mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-koel-neutral-50 to-koel-neutral-100 rounded-3xl p-8 shadow-premium"
          >
            {/* Horizontal Steps */}
            <div className="flex justify-between items-start mb-8 relative">
              {/* Connecting Line */}
              <div className="absolute top-9 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-koel-blue via-koel-bamboo to-koel-blue opacity-30" />

              {steps.map((step, index) => (
                <MobileStep
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  icon={step.icon}
                  delay={index * 0.1}
                />
              ))}
            </div>

            {/* Combined Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-sm text-koel-neutral-600 text-center leading-relaxed"
            >
              Gira la tapa, encaja el pod y empuja hasta escuchar un clic. ¡Listo!
            </motion.p>
          </motion.div>
        </div>

        {/* Desktop Tutorial Steps - Hidden on mobile */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-12 xl:gap-16 mb-20 relative">
          {steps.map((step, index) => (
            <TutorialStep
              key={step.number}
              {...step}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Video Tutorial Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative bg-gradient-to-br from-koel-neutral-100 to-koel-neutral-200 rounded-3xl lg:rounded-[2rem] overflow-hidden aspect-video max-w-5xl mx-auto mb-12 sm:mb-16 flex items-center justify-center border-2 border-koel-neutral-300"
        >
          {/* Video Play Button Mockup */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 sm:w-24 sm:h-24 bg-koel-blue rounded-full flex items-center justify-center shadow-premium cursor-pointer"
            >
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
            </motion.div>
          </div>
          <div className="text-center px-6 sm:px-10 relative z-10">
            <p className="text-base sm:text-lg text-koel-neutral-600 font-semibold mb-2">
              Video Tutorial: Cómo Recargar KOEL
            </p>
            <p className="text-sm sm:text-base text-koel-neutral-500">
              1920x1080px • MP4 • 30-45 segundos
            </p>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-koel-neutral-900 mb-6 sm:mb-10">
            ¡Tu KOEL siempre está contigo!
          </p>
          <Button variant="primary" size="lg">
            Pre-order now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
