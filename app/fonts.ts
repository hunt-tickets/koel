import { Space_Grotesk, Outfit, Inter } from 'next/font/google'
import localFont from 'next/font/local'

// Display font (Titles) - Space Grotesk como alternativa a Transducer
// Similar: Geométrica, moderna, con personalidad
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

// Heading font (Subtitles) - Outfit Light como alternativa a Mazzard Soft M Light
// Similar: Suave, moderna, legible
export const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-heading',
  display: 'swap',
})

// Body font (Paragraphs/Labels) - Inter como fallback temporal de Miso
// Nota: Miso no está en Google Fonts públicamente
// TODO: Cuando tengamos Miso-Regular.woff2, usar localFont
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
})

// TODO: Cuando obtengamos las fuentes oficiales del manual de marca:
// 1. Transducer-Medium.woff2 → Reemplazar Space Grotesk
// 2. MazzardSoftMLight.woff2 → Reemplazar Outfit
// 3. Miso-Regular.woff2 → Reemplazar Inter
//
// Usar localFont así:
// export const transducer = localFont({
//   src: '../public/fonts/Transducer-Medium.woff2',
//   variable: '--font-display',
//   weight: '500',
//   display: 'swap',
// })
