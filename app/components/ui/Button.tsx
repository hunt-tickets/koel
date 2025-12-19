'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseClasses = 'rounded-full font-semibold transition-all duration-300 transform';

  const variantClasses = {
    primary: 'bg-koel-blue text-white hover:bg-koel-blue-dark shadow-premium hover:shadow-premium-lg hover:-translate-y-1',
    secondary: 'bg-koel-neutral-100 text-koel-neutral-900 hover:bg-koel-neutral-200 shadow-md hover:shadow-lg',
    outline: 'border-2 border-koel-blue text-koel-blue hover:bg-koel-blue hover:text-white',
    glass: 'glass text-white hover:bg-white/20',
  };

  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
