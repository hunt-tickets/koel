'use client';

import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email service
    console.log('Newsletter signup:', email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-koel-neutral-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-koel-neutral-800">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center px-4 sm:px-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Únete a la revolución recargable
            </h3>
            <p className="text-sm sm:text-base text-koel-neutral-400 mb-4 sm:mb-6">
              Recibe actualizaciones exclusivas, descuentos y sé el primero en conocer nuevas fragancias.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-koel-neutral-800 border-koel-neutral-700 text-white flex-1"
              />
              <Button type="submit" variant="primary">
                {subscribed ? '¡Gracias!' : 'Suscribirse'}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="section-container">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-0">
          {/* Column 1: Sobre KOEL */}
          <div>
            <h4 className="text-sm sm:text-lg font-bold mb-3 sm:mb-6">Sobre KOEL</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/pioneros"
                  className="text-xs sm:text-base text-koel-neutral-400 hover:text-koel-blue transition-colors duration-300"
                >
                  Nuestra historia
                </Link>
              </li>
              <li>
                <Link
                  href="/pioneros#movimiento"
                  className="text-xs sm:text-base text-koel-neutral-400 hover:text-koel-blue transition-colors duration-300"
                >
                  Ser pionero
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-xs sm:text-base text-koel-neutral-400 hover:text-koel-blue transition-colors duration-300"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Producto */}
          <div>
            <h4 className="text-sm sm:text-lg font-bold mb-3 sm:mb-6">Producto</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/#como-funciona"
                  className="text-xs sm:text-base text-koel-neutral-400 hover:text-koel-blue transition-colors duration-300"
                >
                  ¿Cómo funciona?
                </Link>
              </li>
              <li>
                <Link
                  href="/#fragancias"
                  className="text-xs sm:text-base text-koel-neutral-400 hover:text-koel-blue transition-colors duration-300"
                >
                  Fragancias
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-xs sm:text-base text-koel-neutral-400 hover:text-koel-blue transition-colors duration-300"
                >
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="/producto"
                  className="text-xs sm:text-base text-koel-neutral-400 hover:text-koel-blue transition-colors duration-300"
                >
                  Detalles del producto
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-sm sm:text-lg font-bold mb-3 sm:mb-6">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/politicas/devoluciones"
                  className="text-xs sm:text-base text-koel-neutral-400 hover:text-koel-blue transition-colors duration-300"
                >
                  Políticas de devolución
                </Link>
              </li>
              <li>
                <Link
                  href="/politicas/privacidad"
                  className="text-xs sm:text-base text-koel-neutral-400 hover:text-koel-blue transition-colors duration-300"
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/politicas/terminos"
                  className="text-xs sm:text-base text-koel-neutral-400 hover:text-koel-blue transition-colors duration-300"
                >
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/politicas/datos"
                  className="text-xs sm:text-base text-koel-neutral-400 hover:text-koel-blue transition-colors duration-300"
                >
                  Tratamiento de datos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Síguenos */}
          <div>
            <h4 className="text-sm sm:text-lg font-bold mb-3 sm:mb-6">Síguenos</h4>
            <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com/koel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-koel-neutral-800 flex items-center justify-center text-white hover:bg-koel-blue transition-colors duration-300"
              >
                <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com/koel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-koel-neutral-800 flex items-center justify-center text-white hover:bg-koel-blue transition-colors duration-300"
              >
                <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://tiktok.com/@koel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-koel-neutral-800 flex items-center justify-center text-white hover:bg-koel-blue transition-colors duration-300"
              >
                <FaTiktok className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            </div>

            {/* Payment Methods */}
            <div>
              <p className="text-xs sm:text-sm text-koel-neutral-400 mb-2 sm:mb-3">
                Métodos de pago
              </p>
              <div className="flex gap-1 sm:gap-2 flex-wrap">
                <div className="px-2 sm:px-3 py-1 sm:py-2 bg-koel-neutral-800 rounded text-[10px] sm:text-xs font-medium">
                  PSE
                </div>
                <div className="px-2 sm:px-3 py-1 sm:py-2 bg-koel-neutral-800 rounded text-[10px] sm:text-xs font-medium">
                  Visa
                </div>
                <div className="px-2 sm:px-3 py-1 sm:py-2 bg-koel-neutral-800 rounded text-[10px] sm:text-xs font-medium">
                  Mastercard
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-koel-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-4">
            <p className="text-xs sm:text-sm text-koel-neutral-400 text-center md:text-left">
              © 2024 KOEL. 100% Colombiano. Todos los derechos reservados.
            </p>
            <p className="text-xs sm:text-sm text-koel-neutral-400">
              Hecho con 💙 en Colombia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
