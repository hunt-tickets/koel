'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current || disabled) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      className={`relative ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}

// Premium styled magnetic button
interface MagneticPrimaryButtonProps extends MagneticButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
}

export function MagneticPrimaryButton({
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  strength = 0.3,
  variant = 'primary',
  size = 'md',
}: MagneticPrimaryButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Inner content moves opposite direction for depth effect
  const innerX = useTransform(springX, (v) => v * -0.5);
  const innerY = useTransform(springY, (v) => v * -0.5);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current || disabled) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variantClasses = {
    primary: 'bg-koel-blue text-white hover:bg-koel-blue-dark shadow-premium hover:shadow-premium-lg',
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
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      className={`relative rounded-full font-semibold transition-colors duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <motion.span
        style={{ x: innerX, y: innerY }}
        className="relative z-10 block"
      >
        {children}
      </motion.span>
    </motion.button>
  );
}
