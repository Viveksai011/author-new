'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Menu, X, UserCheck, Users, Building2, BookOpen } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { NAV_LINKS, SITE_INFO } from '@/constants/site-data'

const SERVICE_ITEMS = [
  {
    title: 'One-to-One Coaching',
    href: '/services/one-to-one-coaching',
    desc: 'Personalized guidance for clarity, confidence & career pathing.',
    icon: UserCheck,
  },
  {
    title: 'Group Sessions & Workshops',
    href: '/services/group-sessions-workshops',
    desc: 'Interactive skill workshops for interviews, goals & presence.',
    icon: Users,
  },
  {
    title: 'Corporate Training',
    href: '/services/corporate-training',
    desc: 'Elevating teams, communication & executive leadership.',
    icon: Building2,
  },
]

const BOOK_ITEMS = [
  {
    title: 'About the Book',
    href: '/about-book',
    desc: 'Author publication story & corporate journey.',
  },
  {
    title: '35 Empowering Chapters',
    href: '/about-book#chapters',
    desc: 'Sneak peek into key chapter frameworks.',
  },
  {
    title: 'Order Copies Worldwide',
    href: '/about-book#buy-options',
    desc: 'Available on Amazon, Flipkart & BookLeaf E-Book.',
  },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesHover, setServicesHover] = useState(false)
  const [bookHover, setBookHover] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileBookOpen, setMobileBookOpen] = useState(false)

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev)
  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setServicesHover(false)
    setBookHover(false)
    setMobileServicesOpen(false)
    setMobileBookOpen(false)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobileMenu()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="header relative z-50">
      <Link href="/" className="logo" onClick={closeMobileMenu}>
        <span className="logo-mark">ph</span>
        {SITE_INFO.name}
      </Link>

      {/* Desktop Navigation with Hover Dropdowns */}
      <nav className="desktop-nav relative flex items-center gap-6" aria-label="Main Navigation">
        {NAV_LINKS.map((link) => {
          if (link.label === 'Services') {
            return (
              <div
                key={link.label}
                className="relative py-2"
                onMouseEnter={() => setServicesHover(true)}
                onMouseLeave={() => setServicesHover(false)}
              >
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-1 font-semibold hover:text-[#ff5125] transition-colors"
                >
                  Services <ChevronDown size={14} className={`transition-transform duration-200 ${servicesHover ? 'rotate-180 text-[#ff5125]' : ''}`} />
                </Link>

                {/* Animated Dropdown Menu for Services */}
                <AnimatePresence>
                  {servicesHover && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full w-[340px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/95"
                    >
                      <div className="space-y-1">
                        {SERVICE_ITEMS.map((item) => {
                          const IconComp = item.icon
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={closeMobileMenu}
                              className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/70"
                            >
                              <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#ff5125]/15 text-[#ff5125] group-hover:bg-[#ff5125] group-hover:text-white transition-colors">
                                <IconComp size={18} />
                              </div>
                              <div>
                                <span className="block text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#ff5125] transition-colors">
                                  {item.title}
                                </span>
                                <span className="block text-xs text-slate-500 dark:text-slate-400">
                                  {item.desc}
                                </span>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          }

          if (link.label === 'Book') {
            return (
              <div
                key={link.label}
                className="relative py-2"
                onMouseEnter={() => setBookHover(true)}
                onMouseLeave={() => setBookHover(false)}
              >
                <Link
                  href="/about-book"
                  className="inline-flex items-center gap-1 font-semibold hover:text-[#ff5125] transition-colors"
                >
                  Book <ChevronDown size={14} className={`transition-transform duration-200 ${bookHover ? 'rotate-180 text-[#ff5125]' : ''}`} />
                </Link>

                {/* Animated Dropdown Menu for Book */}
                <AnimatePresence>
                  {bookHover && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full w-[280px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/95"
                    >
                      <Link
                        href="/about-book"
                        onClick={closeMobileMenu}
                        className="group flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/70"
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#ff5125]/15 text-[#ff5125] group-hover:bg-[#ff5125] group-hover:text-white transition-colors">
                          <BookOpen size={20} />
                        </div>
                        <div>
                          <span className="block text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-[#ff5125]">
                            Unstoppable Book
                          </span>
                          <span className="block text-xs text-slate-500 dark:text-slate-400">
                            35 Chapters · Story & Retail Links
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          }

          return (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          )
        })}
      </nav>

      <div className="header-actions">
        <ThemeToggle />
        <Link className="header-button desktop-cta" href="https://calendly.com/hello-pratimahegde/30min" target='_blank' rel='noopener noreferrer'>
          Book a Discovery Call <ArrowRight size={16} />
        </Link>
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

      {/* Mobile Navigation Drawer with Responsive Accordions */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-nav-overlay max-h-[85vh] overflow-y-auto"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="mobile-nav space-y-1" aria-label="Mobile Navigation">
              <Link href="/#home" onClick={closeMobileMenu} className="block py-2 text-base font-semibold">
                Home
              </Link>
              <Link href="/#about" onClick={closeMobileMenu} className="block py-2 text-base font-semibold">
                About
              </Link>

              {/* Mobile Services Accordion */}
              <div className="border-y border-slate-100 dark:border-slate-800 py-1">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between py-2 text-base font-semibold text-slate-900 dark:text-white"
                >
                  <span>Services</span>
                  <ChevronDown size={18} className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-[#ff5125]' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden space-y-1 pl-3 pb-2"
                    >
                      {SERVICE_ITEMS.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={closeMobileMenu}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                          • {s.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Book Accordion */}
              <div className=" border-slate-100 dark:border-slate-800 py-1">
                <button
                  type="button"
                  onClick={() => setMobileBookOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between py-2 text-base font-semibold text-slate-900 dark:text-white"
                >
                  <span>Book</span>
                  <ChevronDown size={18} className={`transition-transform duration-200 ${mobileBookOpen ? 'rotate-180 text-[#ff5125]' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileBookOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden space-y-1 pl-3 pb-2"
                    >
                      {BOOK_ITEMS.map((b) => (
                        <Link
                          key={b.href}
                          href={b.href}
                          onClick={closeMobileMenu}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                          • {b.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/#testimonials" onClick={closeMobileMenu} className="block py-2 text-base font-semibold">
                Testimonials
              </Link>
              <Link href="/#contact" onClick={closeMobileMenu} className="block py-2 text-base font-semibold">
                Contact
              </Link>

              <div className="pt-4">
                <Link className="primary-button mobile-cta w-full justify-center" href="https://calendly.com/hello-pratimahegde/30min" onClick={closeMobileMenu}>
                  Book a Discovery Call <ArrowRight size={16} />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
