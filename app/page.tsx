'use client'

import { useState, useEffect, FormEvent } from 'react'
import Image from 'next/image'

export default function Home() {
  const [currentImage, setCurrentImage] = useState(1)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState({ text: '', type: '' })

  // Hero image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => prev === 1 ? 2 : 1)
    }, 5000)

    return () => clearInterval(interval)
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
    <div className="container">
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

      <div className="hero-container">
        <Image
          src="/hero1.jpg"
          alt="Hero"
          className={`hero-image ${currentImage === 1 ? 'active' : ''}`}
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <Image
          src="/hero2.jpg"
          alt="Hero"
          className={`hero-image ${currentImage === 2 ? 'active' : ''}`}
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="content">
        <h1>Próximamente</h1>
        <p>Déjanos tu correo para ser el primero en enterarte</p>
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
    </div>
  )
}
