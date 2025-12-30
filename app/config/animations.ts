/**
 * Centralized animation configuration
 * All timing and easing values for consistency across the app
 */

export const ANIMATION_TIMINGS = {
  // Loading Screen
  LOADING_SCREEN_MIN_DURATION: 2500,
  LOADING_SCREEN_EXIT: {
    duration: 0.6,
    ease: 'easeOut',
  },

  // Hero Transition
  HERO_TRANSITION: {
    IRIS: {
      duration: 1500,
      delay: 200,
      ease: 'easeOut',
    },
    OPACITY: {
      duration: 800,
      delay: 200,
      ease: 'easeOut',
    },
    SCALE: {
      duration: 1200,
      delay: 1500,
      ease: 'easeOut',
    },
    TOTAL_DURATION: 3000, // Total time until hero content appears
  },

  // Header
  HEADER: {
    FADE: {
      duration: 500,
      ease: 'easeInOut',
    },
    BADGE_APPEAR: {
      duration: 600,
      delay: 300,
      ease: 'easeOut',
    },
  },

  // Text Reveals
  TEXT_REVEAL: {
    MASK_TEXT: {
      duration: 0.8,
      delay: 0.4,
    },
    STAGGER: {
      container: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
      item: {
        duration: 0.5,
      },
    },
  },

  // Scroll Animations
  SCROLL: {
    PARALLAX: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
    STAGGER: 0.1,
  },

  // Interactions
  MAGNETIC_BUTTON: {
    spring: {
      damping: 15,
      stiffness: 150,
      mass: 0.3,
    },
  },

  TILT_CARD: {
    spring: {
      damping: 20,
      stiffness: 150,
    },
    scale: 1.02,
  },

  // Easing functions
  EASE_OUT_CUBIC: [0.25, 0.46, 0.45, 0.94],
} as const;

export const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
  DESKTOP: 1024,
  WIDE: 1280,
} as const;

export const Z_INDEX = {
  BLOCKER: 9998,
  LOADING_SCREEN: 9999,
  HEADER: 50,
  HERO_TRANSITION: 20,
  MODALS: 40,
  DROPDOWN: 30,
} as const;
