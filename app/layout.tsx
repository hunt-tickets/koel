import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Próximamente',
  description: 'Déjanos tu correo para ser el primero en enterarte',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <Script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.10.93/build/spline-viewer.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
