'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { CheckCircle, Mail } from 'lucide-react';

export default function EmailCaptureSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

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

    // TODO: Integrate with email service (Klaviyo, Mailchimp, or Shopify)
    // For now, simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Store in localStorage as backup
      const subscribers = JSON.parse(localStorage.getItem('koel_subscribers') || '[]');
      subscribers.push({
        email,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('koel_subscribers', JSON.stringify(subscribers));

      setIsSuccess(true);
      setEmail('');

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError('Hubo un error. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-container bg-gradient-to-br from-koel-blue/5 via-white to-koel-ginger/5">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Decorative animated elements - Hidden on mobile */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="hidden sm:block absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br from-koel-blue/20 to-koel-bamboo/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="hidden sm:block absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-br from-koel-ginger/20 to-koel-blue/20 rounded-full blur-3xl"
          />

          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative glass-dark rounded-3xl lg:rounded-[2rem] p-10 sm:p-16 md:p-20 text-center overflow-hidden"
          >
            {/* Animated Illustration Placeholder */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-10 sm:mb-14"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-40 h-40 sm:w-56 sm:h-56 mx-auto bg-gradient-to-br from-koel-blue/30 to-koel-ginger/30 rounded-3xl sm:rounded-[2rem] flex items-center justify-center backdrop-blur-sm"
              >
                <div className="text-center">
                  <Mail className="w-16 h-16 sm:w-24 sm:h-24 text-white mx-auto mb-2 sm:mb-3" />
                  <p className="text-white/70 text-xs sm:text-sm">
                    [Ilustración animada<br />del Starter Kit]
                  </p>
                </div>

                {/* Sparkle effect */}
                <motion.div
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  className="absolute top-3 right-3 sm:top-5 sm:right-5 w-8 h-8 sm:w-10 sm:h-10 bg-accent-gold/50 rounded-full blur-sm"
                />
              </motion.div>
            </motion.div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal font-display tracking-wide text-white mb-4 sm:mb-6">
              ¿Aún no te unes al cambio?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              No te preocupes, te mantendremos al tanto. Déjanos tu correo y obtén un descuento exclusivo en el lanzamiento oficial de KOEL.
            </p>

            {/* Success Message */}
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 sm:mb-8 p-4 sm:p-5 bg-green-500/20 border border-green-500/50 rounded-2xl sm:rounded-3xl flex items-center justify-center gap-3 text-white"
              >
                <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-green-400 flex-shrink-0" />
                <span className="font-semibold text-base sm:text-lg">
                  ¡Gracias! Te enviaremos actualizaciones exclusivas pronto.
                </span>
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={error}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50 text-base sm:text-lg py-4"
                    disabled={isSubmitting}
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="whitespace-nowrap text-base sm:text-lg"
                >
                  {isSubmitting ? 'Enviando...' : '¡Quiero ser pionero!'}
                </Button>
              </div>
            </form>

            {/* Trust Badge */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 sm:mt-8 text-sm sm:text-base text-white/60"
            >
              Tu información está segura. No compartimos datos con terceros.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
