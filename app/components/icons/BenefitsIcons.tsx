/**
 * KOEL Brand Icons - Benefits & Features
 * Outlined style from brand manual (Presentación Gustav page 45)
 *
 * These icons match the official KOEL brand identity
 */

import React from 'react';
import { IconProps } from './types';

// Icon 1: ALL SKIN TYPES - Layered waves representing inclusivity
export const AllSkinTypesIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M6 12c2-1.5 4-1.5 6 0s4 1.5 6 0" />
    <path d="M6 8c2-1.5 4-1.5 6 0s4 1.5 6 0" />
    <path d="M6 16c2-1.5 4-1.5 6 0s4 1.5 6 0" />
  </svg>
);

// Icon 2: 24 HOUR PROTECTION - Sun/star burst representing all-day coverage
export const TwentyFourHourIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);

// Icon 3: ECO-FRIENDLY - Flower/leaf representing natural ingredients
export const EcoFriendlyIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 20a8 8 0 0 1-8-8c0-4.4 3.6-8 8-8 0 4.4 3.6 8 8 8a8 8 0 0 1-8 8z" />
    <path d="M12 4v16" />
    <path d="M4 12h16" />
  </svg>
);

// Icon 4: SISTEMA RECARGABLE - Refill container with arrows
export const RefillableSystemIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M12 8v8M8 12l4-4 4 4" />
  </svg>
);

// Icon 5: AROMAS NATURALES - Hands+leaf representing natural scents
export const NaturalAromasIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    <path d="M12 22c0-2.8-2.2-5-5-5H2c0 2.8 2.2 5 5 5h5z" />
  </svg>
);

// Icon 6: DISEÑO INTELIGENTE - Diamond/gem representing premium design
export const IntelligentDesignIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

// Icon 7: INGREDIENTES NATURALES - Water drop+waves
export const NaturalIngredientsIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    <path d="M9 15c0-1 1-1 1-3s1-2 1-3 1 1 1 3 1 2 1 3" />
  </svg>
);

// Icon 8: CUIDADO DERMATOLÓGICAMENTE PROBADO - Waves+sun shield
export const DermatologicallyTestedIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

// Icon 9: LIBRE DE QUÍMICOS - Clean/pure symbol
export const ChemicalFreeIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" />
    <path d="M12 8v4l3 3" />
  </svg>
);

// Icon 10: NO INTERFIERE CON LOS PROCESOS DE LA PIEL - Star+waves harmony
export const SkinFriendlyIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// Icon 11: MAYOR DURABILIDAD - Triple bars representing longevity
export const LongLastingIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 20V10M12 20V4M6 20v-6" />
    <rect x="4" y="14" width="4" height="6" rx="1" />
    <rect x="10" y="2" width="4" height="18" rx="1" />
    <rect x="16" y="8" width="4" height="12" rx="1" />
  </svg>
);

// Icon 12: SECADO RÁPIDO - Sun rays representing quick dry
export const FastDryIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    <circle cx="12" cy="12" r="5" />
    <path d="M12 7v10" />
  </svg>
);
