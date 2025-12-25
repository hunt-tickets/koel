'use client';

import { motion } from 'framer-motion';
import ExpandableSection from '../ui/ExpandableSection';

export default function FAQSection() {
  const faqs = [
    {
      question: "¿Qué incluye el kit inicial de preventa de KOEL?",
      answer: "El kit inicial incluye: 1 Deodorant Case color azul claro, 1 Deodorant Pod biodegradable con tu fragancia favorita (Bamboo Whisper o Ginger Grap), empaque exclusivo de preventa en cartón reciclado con diseño especial, y participación automática en el sorteo Golden Box para ganar 1 año gratis de KOEL."
    },
    {
      question: "¿Cómo funciona el desodorante recargable de KOEL?",
      answer: "Es muy simple: 1) Gira la tapa del Deodorant Case. 2) Encaja tu Deodorant Pod biodegradable en su lugar. 3) Empuja hasta escuchar un 'clic' seguro - ¡Listo! El proceso toma solo segundos. Puedes ver nuestro video tutorial en la sección 'Cómo funciona' de esta página."
    },
    {
      question: "¿Las fragancias de KOEL son aptas para piel sensible?",
      answer: "Sí, absolutamente. Nuestras fragancias están formuladas con ingredientes 100% naturales, libres de aluminio y alcohol. Ofrecemos una experiencia suave y efectiva, ideales para todo tipo de piel, incluyendo piel sensible."
    },
    {
      question: "¿Cuánto tiempo dura la recarga del desodorante?",
      answer: "Cada Deodorant Pod dura entre 1 a 2 meses dependiendo de tu uso diario. La fórmula mantiene su frescura y eficacia constante durante todo este tiempo."
    },
    {
      question: "¿Qué medidas de sostenibilidad incorpora KOEL?",
      answer: "KOEL utiliza materiales biodegradables y reciclables en los Deodorant Pods. Nuestro Deodorant Case está fabricado para durar años, eliminando completamente los plásticos de un solo uso. Además, estamos en búsqueda constante de innovaciones sostenibles para mejorar nuestro impacto ambiental."
    },
    {
      question: "¿KOEL planea lanzar más fragancias?",
      answer: "Sí, definitivamente. Actualmente ofrecemos Bamboo Whisper y Ginger Grap, pero ya estamos trabajando en nuevas fragancias que complementarán diferentes estilos de vida y preferencias. Suscríbete a nuestro newsletter para ser el primero en conocer los nuevos lanzamientos."
    },
    {
      question: "¿Está disponible KOEL fuera de Colombia?",
      answer: "Por ahora, KOEL está disponible únicamente en Colombia. Sin embargo, tenemos planes de expansión a otros países de América Latina y eventualmente al mercado global. Mantente atento a nuestras actualizaciones."
    },
    {
      question: "¿Qué tan rápido recibiré mi KOEL?",
      answer: "Los tiempos de envío serán comunicados claramente antes de completar tu compra. La fecha estimada de entrega para las preventa es mediados de 2025. Te mantendremos informado sobre el estado de tu pedido por correo electrónico."
    },
    {
      question: "¿KOEL tendrá más productos en el futuro?",
      answer: "¡Sí! Estamos planeando llevar nuestra revolución recargable a otras áreas del aseo personal. Queremos ofrecer más opciones sostenibles y prácticas que simplifiquen tu rutina diaria. Únete a nuestra comunidad de pioneros para conocer todas las novedades primero."
    },
  ];

  return (
    <section id="faq" className="section-container bg-koel-neutral-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-koel-neutral-900 mb-4">
            Preguntas <span className="text-gradient-koel">Frecuentes</span>
          </h2>
          <p className="text-xl text-koel-neutral-600">
            Todo lo que necesitas saber sobre KOEL
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-premium p-8 md:p-12"
        >
          {faqs.map((faq, index) => (
            <ExpandableSection
              key={index}
              title={faq.question}
              defaultExpanded={index === 0}
            >
              {faq.answer}
            </ExpandableSection>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-koel-neutral-600 mb-4">
            ¿Tienes más preguntas?
          </p>
          <a
            href="mailto:hola@koel.co"
            className="text-koel-blue hover:text-koel-blue-dark font-semibold transition-colors duration-300"
          >
            Contáctanos en hola@koel.co
          </a>
        </motion.div>
      </div>
    </section>
  );
}
