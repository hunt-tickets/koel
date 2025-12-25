'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '../ui/Button';

export default function PioneerSection() {
  // Placeholder images for lifestyle gallery
  const galleryImages = [
    { id: 1, alt: "Usuario KOEL 1" },
    { id: 2, alt: "Usuario KOEL 2" },
    { id: 3, alt: "Usuario KOEL 3" },
    { id: 4, alt: "Usuario KOEL 4" },
  ];

  return (
    <section className="section-container bg-gradient-to-br from-koel-blue/10 via-white to-koel-bamboo/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-koel-neutral-900 mb-6">
            Ser Pionero: <span className="text-gradient-koel">Redefinir lo común</span>
          </h2>
          <p className="text-xl text-koel-neutral-700 max-w-3xl mx-auto leading-relaxed">
            En KOEL redefinimos lo cotidiano con innovación y estilo. Ser pionero significa romper barreras, marcar tendencias y elegir lo extraordinario en cada detalle de tu vida.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-koel-neutral-200 to-koel-neutral-300 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-koel-neutral-500 text-center px-4 text-sm">
                  [Foto lifestyle {index + 1}]
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-koel-blue to-koel-bamboo flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg text-koel-neutral-900">María González</h4>
                <p className="text-sm text-koel-neutral-600">Pionera KOEL</p>
              </div>
            </div>
            <p className="text-koel-neutral-700 leading-relaxed italic">
              "Cambiar a KOEL fue una de las mejores decisiones. No solo cuido mi piel, sino que también siento que estoy haciendo algo positivo. El diseño es increíble."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-koel-ginger to-koel-blue flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg text-koel-neutral-900">Carlos Ramírez</h4>
                <p className="text-sm text-koel-neutral-600">Pionero KOEL</p>
              </div>
            </div>
            <p className="text-koel-neutral-700 leading-relaxed italic">
              "La recarga es tan fácil que no puedo creer que nadie lo haya hecho antes. KOEL es innovación pura y funcional. 100% recomendado."
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/pioneros">
            <Button variant="outline" size="lg">
              ¿Qué es ser un pionero?
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold font-serif text-gradient-koel mb-2">
              4 años
            </div>
            <p className="text-koel-neutral-600">De investigación y desarrollo</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold font-serif text-gradient-koel mb-2">
              100%
            </div>
            <p className="text-koel-neutral-600">Colombiano e innovador</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold font-serif text-gradient-koel mb-2">
              #1
            </div>
            <p className="text-koel-neutral-600">Desodorante recargable del país</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
