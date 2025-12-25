'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import Input from '../ui/Input';
import { MagneticPrimaryButton } from '../ui/MagneticButton';
import { MaskText } from '../ui/TextReveal';
import { CheckCircle, Mail, Sparkles } from 'lucide-react';

export default function EmailCaptureSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Por favor ingresa tu correo electrónico');
      return;
    }

    if (!validateEmail(email)) {
      setError('Por favor ingresa un correo válido');
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const subscribers = JSON.parse(localStorage.getItem('koel_subscribers') || '[]');
      subscribers.push({
        email,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('koel_subscribers', JSON.stringify(subscribers));

      setIsSuccess(true);
      setEmail('');

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError('Hubo un error. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={containerRef} className="section-container bg-gradient-to-br from-koel-blue/5 via-white to-koel-ginger/5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Animated Background Shapes */}
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 pointer-events-none"
          >
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-koel-blue/20 to-koel-bamboo/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.3, 1, 1.3],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-br from-koel-ginger/20 to-koel-blue/20 rounded-full blur-3xl"
            />
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative glass-dark rounded-3xl lg:rounded-[2.5rem] p-10 sm:p-16 md:p-20 text-center overflow-hidden"
          >
            {/* Animated Grid Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}
            />

            {/* Animated Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-10 sm:mb-14 relative z-10"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-40 h-40 sm:w-56 sm:h-56 mx-auto"
              >
                {/* Glowing background */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-koel-blue/40 to-koel-ginger/40 rounded-3xl blur-2xl"
                />

                <div className="relative w-full h-full bg-gradient-to-br from-koel-blue/30 to-koel-ginger/30 rounded-3xl sm:rounded-[2rem] flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <motion.div
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    <Mail className="w-16 h-16 sm:w-24 sm:h-24 text-white" />
                  </motion.div>

                  {/* Floating sparkles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                      className="absolute"
                      style={{
                        top: `${30 + i * 20}%`,
                        left: `${20 + i * 25}%`,
                      }}
                    >
                      <Sparkles className="w-4 h-4 text-accent-gold" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Headline with reveal */}
            <MaskText delay={0.3}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal font-display tracking-wide text-white mb-4 sm:mb-6 relative z-10">
                ¿Aún no te unes al cambio?
              </h2>
            </MaskText>

            <MaskText delay={0.4}>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed relative z-10">
                Déjanos tu correo y obtén un descuento exclusivo en el lanzamiento oficial de KOEL.
              </p>
            </MaskText>

            {/* Success Message */}
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="mb-6 sm:mb-8 p-5 sm:p-6 bg-green-500/20 border border-green-500/50 rounded-2xl sm:rounded-3xl flex items-center justify-center gap-3 text-white relative z-10"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-7 h-7 text-green-400 flex-shrink-0" />
                </motion.div>
                <span className="font-semibold text-base sm:text-lg">
                  ¡Gracias! Te enviaremos actualizaciones exclusivas pronto.
                </span>
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto relative z-10">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={error}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50 text-base sm:text-lg py-4 focus:border-white/60"
                    disabled={isSubmitting}
                  />
                </div>
                <MagneticPrimaryButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  strength={0.15}
                  className="whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="inline-block"
                    >
                      ⏳
                    </motion.span>
                  ) : (
                    '¡Quiero ser pionero!'
                  )}
                </MagneticPrimaryButton>
              </div>
            </form>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 sm:mt-10 flex items-center justify-center gap-2 text-white/50 text-sm sm:text-base relative z-10"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              Tu información está segura. No compartimos datos con terceros.
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
