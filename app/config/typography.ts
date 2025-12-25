/**
 * Configuración centralizada de tipografía para KOEL
 *
 * Este archivo permite cambiar las fuentes de todo el sitio desde un solo lugar.
 * Para cambiar las fuentes:
 * 1. Actualiza las importaciones en globals.css
 * 2. Modifica las familias de fuentes aquí
 * 3. Actualiza tailwind.config.ts con las mismas fuentes
 */

export const typography = {
  // Fuentes principales
  fonts: {
    // Fuente para títulos (h1, h2, h3)
    heading: 'Playfair Display',
    // Fuente para el cuerpo del texto
    body: 'Poppins',
  },

  // Clases de Tailwind para títulos
  headingClasses: {
    h1: 'font-serif font-bold',
    h2: 'font-serif font-bold',
    h3: 'font-serif font-bold',
    h4: 'font-serif font-semibold',
    h5: 'font-serif font-semibold',
    h6: 'font-serif font-medium',
  },

  // Clases de Tailwind para texto
  textClasses: {
    body: 'font-sans',
    bodyLight: 'font-sans font-light',
    bodyMedium: 'font-sans font-medium',
    bodySemibold: 'font-sans font-semibold',
    bodyBold: 'font-sans font-bold',
  },

  // Tamaños predefinidos para títulos
  sizes: {
    h1: {
      mobile: 'text-5xl md:text-6xl lg:text-7xl',
      default: 'text-6xl md:text-7xl lg:text-8xl',
    },
    h2: {
      mobile: 'text-3xl md:text-4xl',
      default: 'text-4xl md:text-5xl',
    },
    h3: {
      mobile: 'text-2xl md:text-3xl',
      default: 'text-3xl md:text-4xl',
    },
    h4: 'text-xl md:text-2xl',
    h5: 'text-lg md:text-xl',
    h6: 'text-base md:text-lg',
  },
} as const;

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
