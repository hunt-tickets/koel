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

interface Product {
  title: string
  description: string
  video: string
}

interface HeroSectionProps {
  products: Product[]
  isMuted: boolean
}

function HeroSection({ products, isMuted }: HeroSectionProps) {
  const [currentProductIndex, setCurrentProductIndex] = useState(0)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState({ text: '', type: '' })
  const [isExpanded, setIsExpanded] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const audioRef = React.useRef<HTMLAudioElement>(null)

  const currentProduct = products[currentProductIndex]

  // Swipe detection
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isUpSwipe = distance > 50
    const isDownSwipe = distance < -50

    if (isUpSwipe && currentProductIndex < products.length - 1) {
      setCurrentProductIndex(prev => prev + 1)
    }

    if (isDownSwipe && currentProductIndex > 0) {
      setCurrentProductIndex(prev => prev - 1)
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  // Force video playback and update when product changes
  useEffect(() => {
    if (videoRef.current) {
      const playVideo = async () => {
        try {
          // Load new video source
          videoRef.current!.load()
          // Ensure muted for autoplay compatibility
          videoRef.current!.muted = true
          videoRef.current!.setAttribute('playsinline', 'true')
          videoRef.current!.setAttribute('webkit-playsinline', 'true')
          await videoRef.current!.play()
          console.log('Video playing')
        } catch (error) {
          console.error('Video play failed:', error)
          // Retry on user interaction
          const retryPlay = async () => {
            try {
              await videoRef.current!.play()
              document.removeEventListener('touchstart', retryPlay)
              document.removeEventListener('click', retryPlay)
            } catch (e) {
              console.error('Retry failed:', e)
            }
          }
          document.addEventListener('touchstart', retryPlay, { once: true })
          document.addEventListener('click', retryPlay, { once: true })
        }
      }

      // Delay to ensure DOM is ready
      setTimeout(playVideo, 100)
    }
  }, [currentProductIndex])

  // Automatic audio playback
  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          audioRef.current.muted = isMuted
          await audioRef.current.play()
          console.log('Audio playing automatically')
        } catch (error) {
          console.log('Auto-play blocked, will play on first user interaction:', error)
          // Fallback: play on any user interaction
          const playOnInteraction = async () => {
            try {
              await audioRef.current!.play()
              document.removeEventListener('click', playOnInteraction)
              document.removeEventListener('touchstart', playOnInteraction)
            } catch (e) {
              console.error('Failed to play audio:', e)
            }
          }
          document.addEventListener('click', playOnInteraction, { once: true })
          document.addEventListener('touchstart', playOnInteraction, { once: true })
        }
      }
    }

    // Delay to ensure DOM is ready
    setTimeout(playAudio, 500)
  }, [])

  // Control audio mute state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted
    }
  }, [isMuted])

  // Pause audio when page is hidden (tab change, lock screen, etc)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (audioRef.current) {
        if (document.hidden) {
          audioRef.current.pause()
          console.log('Audio paused - page hidden')
        } else {
          audioRef.current.play().catch(err => {
            console.log('Failed to resume audio:', err)
          })
          console.log('Audio resumed - page visible')
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

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
    <section
      className="hero-section"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background audio */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="https://3gnijedbgl.ufs.sh/f/rPRCeRt0Tyln98jynzWGwrQ7Wt0zxZpC4mdlK1YfD8eqSh5J" type="audio/mpeg" />
      </audio>

      <div className="hero-container">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          loop
          playsInline
          muted
          preload="auto"
          webkit-playsinline="true"
          key={currentProduct.video}
        >
          <source src={currentProduct.video} type="video/mp4" />
        </video>
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

      <div className={`content ${isExpanded ? 'expanded' : ''}`}>
        <button
          className="expand-button"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? 'Cerrar información' : 'Ver más información'}
        >
          {isExpanded ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="7 13 12 18 17 13"></polyline>
              <polyline points="7 6 12 11 17 6"></polyline>
            </svg>
          )}
        </button>

        <h1>{currentProduct.title}</h1>
        {currentProduct.description && <p className="product-description">{currentProduct.description}</p>}

        {isExpanded && (
          <div className="expanded-info">
            <div className="info-item">
              <h3>Cartón biodegradable</h3>
              <p>Una opción natural y responsable para el cuidado diario.</p>
            </div>
            <div className="info-item">
              <h3>Práctico</h3>
              <p>Cada recarga dura de 1 a 2 meses, adaptándose a tus necesidades.</p>
            </div>
            <div className="info-item">
              <h3>Fácil de reemplazar</h3>
              <p>Pensado para que cualquier usuario pueda cambiarlo sin esfuerzo.</p>
            </div>
          </div>
        )}

        <button className="buy-button">Comprar</button>
      </div>

      {/* Swipe indicators */}
      <div className="swipe-indicators">
        {products.map((_, index) => (
          <div
            key={index}
            className={`swipe-dot ${index === currentProductIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  const [isMuted, setIsMuted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<'home' | 'faqs'>('home')

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navigateTo = (section: 'home' | 'faqs') => {
    setActiveSection(section)
    setIsMenuOpen(false)
  }

  const products: Product[] = [
    {
      title: "KOEL ZEN",
      description: "Un aroma fresco y natural inspirado en la tranquilidad de un bosque de bambú. Perfecto para quienes buscan una fragancia ligera y revitalizante que te conecte con la naturaleza.",
      video: "/hero-video.mp4"
    },
    {
      title: "KOEL GARDEN",
      description: "Una fragancia envolvente que evoca la serenidad de un jardín místico. Ideal para crear un ambiente de paz y armonía en tu espacio.",
      video: "/hero-video-2.mp4"
    }
  ]

  return (
    <>
      <header className="header">
        <button onClick={toggleMenu} className="menu-button" aria-label="Menu">
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        <Image
          src="/logo.png"
          alt="Logo"
          className="logo"
          width={120}
          height={40}
          priority
        />

        <button onClick={toggleMute} className="mute-button" aria-label={isMuted ? 'Unmute' : 'Mute'}>
          {isMuted ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          )}
        </button>
      </header>

      {isMenuOpen && (
        <div className="menu-overlay" onClick={toggleMenu}>
          <div className="menu-content" onClick={(e) => e.stopPropagation()}>
            <nav className="menu-nav">
              <button
                className={`menu-item ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => navigateTo('home')}
              >
                Home
              </button>
              <button
                className={`menu-item ${activeSection === 'faqs' ? 'active' : ''}`}
                onClick={() => navigateTo('faqs')}
              >
                FAQs
              </button>
            </nav>
          </div>
        </div>
      )}

      {activeSection === 'home' ? (
        <HeroSection
          products={products}
          isMuted={isMuted}
        />
      ) : (
        <div className="faqs-section">
          <div className="faqs-container">
            <h1 className="faqs-title">Preguntas Frecuentes</h1>

            <div className="faq-item">
              <h3>¿Qué incluye el kit inicial de preventa de KOEL?</h3>
              <p>El kit inicial de preventa de KOEL incluye:</p>
              <ul>
                <li>1 Deodorant Case en un elegante color azul claro, diseñado para durar y acompañarte en cualquier momento.</li>
                <li>1 Deodorant Pod biodegradable con tu fragancia favorita.</li>
                <li>Un empaque exclusivo de preventa hecho de cartón reciclado con un diseño especial.</li>
              </ul>
              <p>Además, todos los pedidos de preventa participan en un sorteo para ganar una Golden Box que te otorga un año completo de desodorante KOEL gratis.</p>
            </div>

            <div className="faq-item">
              <h3>¿Cómo funciona el desodorante recargable de KOEL?</h3>
              <p>Es muy fácil y práctico:</p>
              <ol>
                <li>Gira la tapa del Deodorant Case para abrirlo.</li>
                <li>Encaja tu Deodorant Pod biodegradable en el interior.</li>
                <li>Empuja hasta escuchar un clic. ¡Listo para usar!</li>
              </ol>
              <p>El proceso de recarga toma segundos y está diseñado para que cualquier persona pueda hacerlo sin complicaciones. Además, incluiremos un video tutorial en nuestra página web para guiarte paso a paso.</p>
            </div>

            <div className="faq-item">
              <h3>¿Las fragancias de KOEL son aptas para piel sensible?</h3>
              <p>¡Claro que sí! Las fragancias Bamboo Whisper y Unscented Pure están formuladas con ingredientes 100% naturales, libres de aluminio y alcohol, asegurando una experiencia suave y efectiva. Ambas son ideales para todo tipo de piel, incluso las más sensibles, respetando tu piel y manteniéndola fresca todo el día.</p>
            </div>

            <div className="faq-item">
              <h3>¿Cuánto tiempo dura la recarga del desodorante?</h3>
              <p>Cada Deodorant Pod está diseñado para durar entre uno y dos meses, dependiendo del uso diario. Esto asegura frescura y eficacia constante durante todo el mes.</p>
            </div>

            <div className="faq-item">
              <h3>¿Qué medidas de sostenibilidad incorpora KOEL en sus productos?</h3>
              <p>En KOEL, la sostenibilidad es un pilar fundamental:</p>
              <ul>
                <li>Usamos materiales biodegradables y reciclables en nuestras recargas y empaques.</li>
                <li>Promovemos la eliminación de plásticos de un solo uso mediante el diseño de un Deodorant Case duradero y reutilizable.</li>
                <li>Nuestro compromiso no termina aquí: constantemente buscamos formas innovadoras de reducir nuestro impacto ambiental.</li>
              </ul>
            </div>

            <div className="faq-item">
              <h3>¿KOEL planea lanzar más fragancias en el futuro?</h3>
              <p>¡Definitivamente! Actualmente ofrecemos dos opciones:</p>
              <ul>
                <li><strong>Bamboo Whisper</strong>, una fragancia fresca e inspiradora que conecta con la naturaleza.</li>
                <li><strong>Unscented Pure</strong>, para quienes prefieren la frescura sin fragancia.</li>
              </ul>
              <p>Estamos trabajando en nuevas fragancias para el futuro, diseñadas para complementar diferentes estilos de vida y preferencias.</p>
            </div>

            <div className="faq-item">
              <h3>¿Está disponible el desodorante KOEL fuera de Colombia?</h3>
              <p>Por ahora, KOEL estará disponible únicamente en Colombia. Sin embargo, ya estamos planeando expandirnos a otros países de América Latina y, eventualmente, al mercado global.</p>
            </div>

            <div className="faq-item">
              <h3>¿Qué tan rápido recibiré mi KOEL?</h3>
              <p>Los tiempos de envío serán definidos y comunicados antes de completar tu pedido. Trabajamos para que recibas tu KOEL lo más rápido posible.</p>
            </div>

            <div className="faq-item">
              <h3>¿KOEL tendrá más productos en el futuro?</h3>
              <p>¡Sí! Nuestro objetivo es llevar esta revolución recargable a otras áreas del aseo personal. Queremos ofrecerte más opciones sostenibles y prácticas para transformar tu rutina diaria.</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
