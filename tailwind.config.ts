import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        koel: {
          // PRIMARY COLORS - Colores oficiales del manual de marca Gustav
          teal: {
            DEFAULT: "#153439", // Color principal de marca KOEL
            light: "#2A4A50",
            dark: "#0F2428",
          },
          aqua: {
            DEFAULT: "#32A9AE", // Color secundario de marca KOEL
            light: "#9ACEE4", // Sky Blue
            dark: "#258B8F",
          },

          // SECONDARY COLORS - Paleta extendida del manual
          yellow: {
            DEFAULT: "#E6E451", // Bright Yellow
            light: "#FBEEB4",
          },
          olive: {
            DEFAULT: "#59693A", // Olive Green
            light: "#B5D4B8",
            dark: "#5F9465",
          },
          pink: {
            DEFAULT: "#B24866", // Pink/Magenta
          },
          coral: {
            DEFAULT: "#D5753C", // Coral Orange
            light: "#E8C9A3",
            dark: "#B8864F",
          },

          // NEUTRALS - Tonos neutros del manual
          neutral: {
            50: "#FCF9F5",   // Off-white del manual
            100: "#FCF7EE",  // Cream del manual
            200: "#D9D6C5",  // Beige del manual
            300: "#D4D4D4",
            400: "#A3A3A3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#262626",
            900: "#221615",  // Dark Brown del manual
          },

          // LEGACY SUPPORT - Para compatibilidad con código existente
          // TODO: Migrar gradualmente todo el código a usar teal/aqua/olive/coral
          blue: {
            DEFAULT: "#32A9AE", // Mapeado a aqua
            light: "#9ACEE4",
            dark: "#258B8F",
          },
          bamboo: {
            DEFAULT: "#59693A", // Mapeado a olive
            light: "#B5D4B8",
            dark: "#5F9465",
          },
          ginger: {
            DEFAULT: "#D5753C", // Mapeado a coral
            light: "#E8C9A3",
            dark: "#B8864F",
          },
        },
        accent: {
          gold: "#D4AF37", // Golden Box
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Space Grotesk", "Arial", "sans-serif"],
        heading: ["var(--font-heading)", "Outfit", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-hero": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "glass": "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-in-out",
        slideUp: "slideUp 0.5s ease-out",
        slideDown: "slideDown 0.5s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        premium: "0 10px 40px rgba(0, 0, 0, 0.15)",
        "premium-lg": "0 20px 60px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

export default config;
