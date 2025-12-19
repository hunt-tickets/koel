'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'flat';
  hover?: boolean;
}

export default function Card({
  children,
  className = '',
  variant = 'default',
  hover = true,
}: CardProps) {
  const variantClasses = {
    default: 'bg-white shadow-premium',
    glass: 'glass',
    flat: 'bg-koel-neutral-50',
  };

  const hoverClasses = hover
    ? 'hover:shadow-premium-lg hover:-translate-y-2'
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`rounded-3xl p-8 transition-all duration-300 ${variantClasses[variant]} ${hoverClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
}
