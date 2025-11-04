'use client'

import React, { useState, useEffect, FormEvent } from 'react'
import Image from 'next/image'

// Declare model-viewer web component for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string
        alt?: string
        'auto-rotate'?: boolean
        'auto-rotate-delay'?: string
        'rotation-per-second'?: string
        'camera-controls'?: boolean
        'shadow-intensity'?: string
        loading?: string
        'ar'?: boolean
        'disable-zoom'?: boolean
        'touch-action'?: string
        'min-camera-orbit'?: string
        'max-camera-orbit'?: string
        'camera-orbit'?: string
        'interaction-prompt'?: string
        'environment-image'?: string
        'exposure'?: string
        style?: React.CSSProperties
      }
    }
  }
}

interface HeroSectionProps {
  title: string
  description: string
  video?: string
  hero1?: string
  hero2?: string
}

function HeroSection({ title, description, video, hero1, hero2 }: HeroSectionProps) {
  const [currentImage, setCurrentImage] = useState(1)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState({ text: '', type: '' })
  const videoRef = React.useRef<HTMLVideoElement>(null)

  // Hero image rotation (only for image-based heroes)
  useEffect(() => {
    if (video) return // Don't rotate if using video

    const interval = setInterval(() => {
      setCurrentImage(prev => prev === 1 ? 2 : 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [video])

  // Force video playback
  useEffect(() => {
    if (video && videoRef.current) {
      const playVideo = async () => {
        try {
          videoRef.current!.muted = false
          await videoRef.current!.play()
        } catch (error) {
          // If autoplay with sound fails, try muted
          console.log('Autoplay with sound blocked, playing muted')
          videoRef.current!.muted = true
          await videoRef.current!.play()
        }
      }
      playVideo()
    }
  }, [video])

  // Show message with auto-hide
  const showMessage = (text: string, type: 'success' | 'error') => {
    setMessage({ text, type })
    setTimeout(() => {
      setMessage({ text: '', type: '' })
    }, 4000)
  }

  // Email form handling
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const emailValue = email.trim()

    if (!emailValue) {
      showMessage('Por favor ingresa un correo válido', 'error')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(emailValue)) {
      showMessage('Por favor ingresa un correo válido', 'error')
      return
    }

    // Store email in localStorage (for demo purposes)
    // In production, you would send this to a backend service
    try {
      const emails = JSON.parse(localStorage.getItem('emails') || '[]')

      if (emails.includes(emailValue)) {
        showMessage('Este correo ya está registrado', 'error')
        return
      }

      emails.push(emailValue)
      localStorage.setItem('emails', JSON.stringify(emails))

      showMessage('¡Gracias! Te notificaremos pronto', 'success')
      setEmail('')

      // Log to console for demo
      console.log('Email registrado:', emailValue)
    } catch (error) {
      console.error('Error guardando email:', error)
      showMessage('Ocurrió un error. Intenta de nuevo', 'error')
    }
  }

  return (
    <section className="hero-section">
      <div className="hero-container">
        {video ? (
          <video
            ref={videoRef}
            className="hero-video"
            autoPlay
            loop
            playsInline
            muted
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <>
            <Image
              src={hero1!}
              alt="Hero"
              className={`hero-image ${currentImage === 1 ? 'active' : ''}`}
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
            <Image
              src={hero2!}
              alt="Hero"
              className={`hero-image ${currentImage === 2 ? 'active' : ''}`}
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </>
        )}
      </div>

      <div className="model-container">
        <model-viewer
          src="/models/tall_can_copy.gltf"
          alt="Lata 3D"
          auto-rotate
          auto-rotate-delay="0"
          rotation-per-second="30deg"
          camera-controls
          disable-zoom
          shadow-intensity="2"
          loading="eager"
          touch-action="pan-y"
          min-camera-orbit="auto auto auto"
          max-camera-orbit="auto auto auto"
          camera-orbit="0deg 75deg 10m"
          interaction-prompt="none"
          environment-image="legacy"
          exposure="1.2"
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent'
          } as React.CSSProperties}
        />
      </div>

      <div className="content" style={{ display: 'none' }}>
        <h1>{title}</h1>
        <p>{description}</p>
        <form onSubmit={handleSubmit} className="email-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
            autoComplete="email"
          />
          <button type="submit">Notificarme</button>
        </form>
        <p className={`message ${message.text ? 'show' : ''} ${message.type}`}>
          {message.text}
        </p>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <header className="header">
        <Image
          src="/logo.png"
          alt="Logo"
          className="logo"
          width={120}
          height={40}
          priority
        />
      </header>

      <HeroSection
        title="Próximamente"
        description="Déjanos tu correo para ser el primero en enterarte"
        video="/hero-video.mp4"
      />
    </>
  )
}
