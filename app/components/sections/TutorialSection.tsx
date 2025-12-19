'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../ui/Button';
import { HiRefresh, HiLockClosed, HiArrowRight } from 'react-icons/hi';

interface TutorialStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

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
      <div className="bg-white rounded-3xl p-8 shadow-premium hover:shadow-premium-lg transition-all duration-300">
        {/* Number Badge */}
        <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-koel-blue to-koel-bamboo rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-premium">
          {number}
        </div>

        {/* Icon Animation Container */}
        <div className="mb-6 flex justify-center">
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
            className="w-32 h-32 bg-gradient-to-br from-koel-blue/10 to-koel-bamboo/10 rounded-full flex items-center justify-center"
          >
            <div className="text-koel-blue text-6xl">
              {icon}
            </div>
          </motion.div>
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl font-bold text-koel-neutral-900 mb-3 text-center">
          {title}
        </h3>
        <p className="text-koel-neutral-600 text-center leading-relaxed">
          {description}
        </p>
      </div>

      {/* Arrow Connector (except for last step) */}
      {number < 3 && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 text-koel-blue"
        >
          <HiArrowRight className="w-8 h-8" />
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
      icon: <HiRefresh />,
    },
    {
      number: 2,
      title: "Encaja",
      description: "La recarga Deodorant Pod entra perfectamente en su lugar. Simple y preciso.",
      icon: <span className="text-5xl">📦</span>,
    },
    {
      number: 3,
      title: "Empuja",
      description: "Cierra el envase hasta escuchar un clic seguro. ¡Tu KOEL está listo!",
      icon: <HiLockClosed />,
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-koel-neutral-900 mb-4">
            Recargar es tan simple como <span className="text-gradient-koel">1, 2, 3.</span>
          </h2>
          <p className="text-xl text-koel-neutral-600 max-w-3xl mx-auto">
            Olvídate de lo complicado. En solo tres simples pasos, tu desodorante está listo de nuevo. Dale un giro, encaja y listo.
          </p>
        </motion.div>

        {/* Tutorial Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-12 relative">
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
          className="bg-gradient-to-br from-koel-neutral-100 to-koel-neutral-200 rounded-3xl overflow-hidden aspect-video max-w-4xl mx-auto mb-12 flex items-center justify-center"
        >
          <div className="text-center px-8">
            <p className="text-koel-neutral-500 mb-4">
              [Placeholder para video tutorial de recarga]
            </p>
            <p className="text-sm text-koel-neutral-400">
              Video demostrativo del proceso 1-2-3 completo
            </p>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-2xl md:text-3xl font-bold text-koel-neutral-900 mb-8">
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
