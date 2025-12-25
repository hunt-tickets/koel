import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { LenisProvider } from './components/providers'

export const metadata: Metadata = {
  title: 'KOEL - El Primer Desodorante Recargable de Colombia',
  description: 'Innovación y diseño premium se unen en KOEL. Recarga en segundos, cuida tu piel con ingredientes naturales y marca la diferencia. 100% colombiano.',
  keywords: ['desodorante recargable', 'desodorante natural', 'KOEL Colombia', 'innovación sostenible', 'cuidado personal'],
  authors: [{ name: 'KOEL' }],
  openGraph: {
    title: 'KOEL - El Primer Desodorante Recargable de Colombia',
    description: 'Recarga en segundos. Diseño premium. 100% natural.',
    type: 'website',
    locale: 'es_CO',
    siteName: 'KOEL',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
        <Script
          type="module"
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
