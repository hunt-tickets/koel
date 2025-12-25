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
      <div className="max-w-4xl mx-auto px-4 sm:px-0">
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
            className="hidden sm:block absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-koel-blue/20 to-koel-bamboo/20 rounded-full blur-3xl"
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
            className="hidden sm:block absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-koel-ginger/20 to-koel-blue/20 rounded-full blur-3xl"
          />

          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative glass-dark rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-16 text-center overflow-hidden"
          >
            {/* Animated Illustration Placeholder */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 sm:mb-8"
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
                className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto bg-gradient-to-br from-koel-blue/30 to-koel-ginger/30 rounded-2xl sm:rounded-3xl flex items-center justify-center backdrop-blur-sm"
              >
                <div className="text-center">
                  <Mail className="w-14 h-14 sm:w-20 sm:h-20 text-white mx-auto mb-1 sm:mb-2" />
                  <p className="text-white/70 text-[10px] sm:text-xs">
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
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-accent-gold/50 rounded-full blur-sm"
                />
              </motion.div>
            </motion.div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal font-display tracking-wide text-white mb-3 sm:mb-4">
              ¿Aún no te unes al cambio?
            </h2>
            <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              No te preocupes, te mantendremos al tanto. Déjanos tu correo y obtén un descuento exclusivo en el lanzamiento oficial de KOEL.
            </p>

            {/* Success Message */}
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-500/20 border border-green-500/50 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 text-white"
              >
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
                <span className="font-semibold text-sm sm:text-base">
                  ¡Gracias! Te enviaremos actualizaciones exclusivas pronto.
                </span>
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={error}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                    disabled={isSubmitting}
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="whitespace-nowrap text-sm sm:text-base"
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
              className="mt-4 sm:mt-6 text-xs sm:text-sm text-white/60"
            >
              🔒 Tu información está segura. No compartimos datos con terceros.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
