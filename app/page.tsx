'use client'

import { useState, useEffect, FormEvent } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="spline-loading">Cargando...</div>
})

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

  // Hero image rotation (only for image-based heroes)
  useEffect(() => {
    if (video) return // Don't rotate if using video

    const interval = setInterval(() => {
      setCurrentImage(prev => prev === 1 ? 2 : 1)
    }, 5000)

    return () => clearInterval(interval)
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
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
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

      <div className="spline-container">
        <Spline
          scene="https://prod.spline.design/ylvbmrXt8B5RdSwU/scene.splinecode"
        />
      </div>

      <div className="content">
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
  const [currentSection, setCurrentSection] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const sections = [
    {
      title: "Próximamente",
      description: "Déjanos tu correo para ser el primero en enterarte",
      video: "/hero-video.mp4"
    },
    {
      title: "Próximamente",
      description: "Déjanos tu correo para ser el primero en enterarte",
      hero1: "/hero1.jpg",
      hero2: "/hero2.jpg"
    }
  ]

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0)
    setTouchStart(e.targetTouches[0].clientY)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isUpSwipe = distance > minSwipeDistance
    const isDownSwipe = distance < -minSwipeDistance

    if (isTransitioning) return

    if (isUpSwipe && currentSection < sections.length - 1) {
      setIsTransitioning(true)
      setCurrentSection(prev => prev + 1)
      setTimeout(() => setIsTransitioning(false), 700)
    }

    if (isDownSwipe && currentSection > 0) {
      setIsTransitioning(true)
      setCurrentSection(prev => prev - 1)
      setTimeout(() => setIsTransitioning(false), 700)
    }
  }

  // Handle wheel events for desktop
  const onWheel = (e: React.WheelEvent) => {
    if (isTransitioning) return

    if (e.deltaY > 0 && currentSection < sections.length - 1) {
      setIsTransitioning(true)
      setCurrentSection(prev => prev + 1)
      setTimeout(() => setIsTransitioning(false), 700)
    } else if (e.deltaY < 0 && currentSection > 0) {
      setIsTransitioning(true)
      setCurrentSection(prev => prev - 1)
      setTimeout(() => setIsTransitioning(false), 700)
    }
  }

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

      <div
        className="swipe-container"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onWheel={onWheel}
        style={{
          transform: `translateY(-${currentSection * 100}vh)`,
          transition: 'transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)'
        }}
      >
        {sections.map((section, index) => (
          <HeroSection
            key={index}
            title={section.title}
            description={section.description}
            video={section.video}
            hero1={section.hero1}
            hero2={section.hero2}
          />
        ))}
      </div>
    </>
  )
}
