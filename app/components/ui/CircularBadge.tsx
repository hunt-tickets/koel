'use client';

/**
 * KOEL Circular Badge Component
 * Signature brand element with circular text "A NEW WAY TO CARE"
 * Based on brand manual (Presentación Gustav page 37)
 */

import { motion } from 'framer-motion';

interface CircularBadgeProps {
  variant?: 'teal' | 'aqua' | 'transparent' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  className?: string;
}

export default function CircularBadge({
  variant = 'transparent',
  size = 'md',
  animated = true,
  className = '',
}: CircularBadgeProps) {
  // Size configurations
  const sizes = {
    sm: { container: 'w-16 h-16', text: 'text-[6px]', logo: 'w-6 h-6', radius: 28 },
    md: { container: 'w-24 h-24', text: 'text-[8px]', logo: 'w-8 h-8', radius: 40 },
    lg: { container: 'w-32 h-32', text: 'text-[10px]', logo: 'w-12 h-12', radius: 54 },
    xl: { container: 'w-48 h-48', text: 'text-[14px]', logo: 'w-16 h-16', radius: 80 },
  };

  // Variant configurations
  const variants = {
    teal: 'bg-koel-teal text-white border-koel-teal',
    aqua: 'bg-koel-aqua text-white border-koel-aqua',
    transparent: 'bg-transparent text-current border-2 border-current',
    white: 'bg-white text-koel-teal border-white',
  };

  const config = sizes[size];
  const variantClass = variants[variant];

  return (
    <motion.div
      className={`${config.container} ${variantClass} rounded-full relative flex items-center justify-center ${className}`}
      animate={animated ? { rotate: 360 } : {}}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {/* Circular Text Path */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        style={{ transform: 'rotate(-90deg)' }}
      >
        <defs>
          <path
            id={`circlePath-${size}-${variant}`}
            d={`M 50, 50 m -${config.radius / 2}, 0 a ${config.radius / 2},${config.radius / 2} 0 1,1 ${config.radius},0 a ${config.radius / 2},${config.radius / 2} 0 1,1 -${config.radius},0`}
          />
        </defs>
        <text
          className={`${config.text} fill-current tracking-[0.2em] uppercase font-heading font-light`}
          style={{ letterSpacing: '0.15em' }}
        >
          <textPath
            href={`#circlePath-${size}-${variant}`}
            startOffset="0%"
            textAnchor="start"
          >
            • A NEW WAY TO CARE • A NEW WAY TO CARE •
          </textPath>
        </text>
      </svg>

      {/* Center Logo/Isotipo "K" */}
      <div className={`relative z-10 ${config.logo} flex items-center justify-center`}>
        {/* Simplified K Isotipo - Replace with actual SVG from brand manual when available */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full"
        >
          {/* Circle container */}
          <circle cx="12" cy="12" r="10" opacity="0.3" />
          {/* Stylized K */}
          <path d="M8 8v8" strokeWidth="2.5" />
          <path d="M8 12l6-4" strokeWidth="2" />
          <path d="M8 12l6 4" strokeWidth="2" />
        </svg>
      </div>
    </motion.div>
  );
}

/**
 * Usage examples:
 *
 * <CircularBadge variant="teal" size="lg" />
 * <CircularBadge variant="transparent" size="md" animated={false} />
 * <CircularBadge variant="white" size="sm" className="shadow-lg" />
 */
