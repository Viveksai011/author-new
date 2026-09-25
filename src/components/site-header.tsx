'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { NAV_LINKS, SITE_INFO } from '@/constants/site-data'

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="header">
      <a href="#home" className="logo" onClick={closeMobileMenu}>
        <span className="logo-mark">ph</span>
        {SITE_INFO.name}
      </a>

      {/* Desktop Navigation */}
      <nav className="desktop-nav" aria-label="Main Navigation">
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <ThemeToggle />
        <a className="header-button desktop-cta" href="#contact">
          Book a Discovery Call <ArrowRight size={16} />
        </a>
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="mobile-nav" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} onClick={closeMobileMenu}>
                  {link.label}
                </a>
              ))}
              <a className="primary-button mobile-cta" href="#contact" onClick={closeMobileMenu}>
                Book a Discovery Call <ArrowRight size={16} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
