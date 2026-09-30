'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Globe } from 'lucide-react'
import { HERO_SLIDES } from '@/constants/site-data'

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slide = HERO_SLIDES[activeSlide]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [])

  const changeSlide = (direction: number) => {
    setActiveSlide((current) => (current + direction + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  return (
    <section id="home" className="carousel-hero">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          className="hero-slide"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundPosition: slide.imagePosition || 'center 20%',
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-slide-overlay" />
          <div className="hero-content">
            <span className="hero-badge">
              <Globe size={14} /> {slide.kicker}
            </span>
            <h1>{slide.title}</h1>
            <p className="hero-copy">{slide.text}</p>
            <div className="hero-actions">
              <Link className="primary-button" href={activeSlide === 2 ? '/about-book#buy-options' : 'https://calendly.com/hello-pratimahegde/30min'}>
                {activeSlide === 2 ? 'Order your copy' : 'Book a Discovery Call'} <ArrowRight size={18} />
              </Link>
              <Link
                className="secondary-button"
                href={activeSlide === 2 ? 'https://wa.me/919986888634' : '#about'}
                target={activeSlide === 2 ? '_blank' : undefined}
                rel={activeSlide === 2 ? 'noopener noreferrer' : undefined}
              >
                {activeSlide === 2 ? 'Meet Pratima' : 'Discover my story'} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Carousel Navigation Arrows */}
      <div className="hero-arrows">
        <button onClick={() => changeSlide(-1)} aria-label="Previous slide">
          <ChevronLeft size={20} />
        </button>
        <button onClick={() => changeSlide(1)} aria-label="Next slide">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="hero-dots">
        {HERO_SLIDES.map((item, index) => (
          <button
            key={item.title}
            aria-label={`Show slide ${index + 1}`}
            className={index === activeSlide ? 'active' : ''}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
