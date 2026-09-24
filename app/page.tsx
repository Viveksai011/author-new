'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Play,
  Globe,
  Award,
  BookOpen,
  CheckCircle2,
} from 'lucide-react'

function LinkedinIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

const images = {
  portrait: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%284%29-Me6W5umyXxYwu8Yc1bYRdPkYM4kYfR.png',
  confident: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1992.JPG-17qsghMEwz4F4q9Uc5rciLmMba3TNn.jpeg',
  bookDesk: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%283%29.png-BG4TFxKfSpdSk6PHH4EXEX2rHB5RpM.jpeg',
  bookHero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2806.jpg-bgSyaVR5t9ZT51v0ENw0yHOB7GR7z6.jpeg',
  book: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2804.jpg-75btWbgTC0j3HmJDq70vXofloBhJwB.jpeg',
  sky: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-1.JPG-fTAyuDkF0hwFlaI9Yi7QRLGxdK4lzX.jpeg',
}

const heroSlides = [
  {
    image: images.bookHero,
    kicker: 'Career clarity for a changing world',
    title: 'Empowering professionals to rise with clarity, confidence, and purpose.',
    text: 'Berlin-based. Globally seasoned. Driving career impact without borders for ambitious leaders and professionals.',
  },
  {
    image: images.confident,
    kicker: '16 years of global experience',
    title: 'Build the confidence to become unstoppable in your journey.',
    text: 'Career coaching, mentoring, and transformation programs tailored for professionals navigating change.',
  },
  {
    image: images.book,
    kicker: 'Author of Unstoppable...!',
    title: 'A story of resilience, ambition, and global becoming.',
    text: 'The book my younger self needed — and the roadmap many professionals need today to achieve their dreams.',
  },
]

const services = [
  {
    title: 'One-to-One Career Coaching',
    text: 'Gain clarity on your core strengths, define an actionable career path, and build unshakable confidence in every strategic decision.',
  },
  {
    title: 'Confidence After a Career Break',
    text: 'Rebuild your professional identity, showcase your unique value, and return to the corporate workforce with renewed direction and self-belief.',
  },
  {
    title: 'Finding Yourself Abroad',
    text: 'Navigate international relocation, cross-cultural career integration, and your next chapter abroad with intention and fulfillment.',
  },
  {
    title: 'Group Trainings & Workshops',
    text: 'Practical, high-impact training in interview mastery, strategic goal setting, executive presence, and professional communication.',
  },
]

const accordionItems = [
  {
    title: 'My story is your proof',
    content:
      'My journey began as a small-town girl navigating corporate life, motherhood, social expectations, and global relocation. I know what it feels like to rebuild yourself from scratch — and I help others do the same with empathy and structure.',
  },
  {
    title: 'What you will gain through coaching',
    content:
      'Clear direction, corporate-tested transition strategies, restored confidence, interview readiness, and an actionable roadmap designed to accelerate your growth without burnout.',
  },
  {
    title: 'How we create real, lasting results',
    content:
      'Through structured 1-on-1 coaching sessions, personalized actionable assignments, corporate communication frameworks, and continuous accountability support.',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
}

function CursorFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const move = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <motion.div
        className="cursor-follower"
        animate={{ x: position.x - 16, y: position.y - 16 }}
        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
      />
    </>
  )
}

export default function Page() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0)

  const slide = heroSlides[activeSlide]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [])

  const changeSlide = (direction: number) => {
    setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length)
  }

  return (
    <main className="trendbiz-site">
      <CursorFollower />

      {/* Top Banner Strip */}
      <div className="top-strip">
        <span>Career Coach & Life Skills Trainer</span>
        <span>Berlin-based · Globally experienced</span>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
        >
          <LinkedinIcon size={14} /> Follow Pratima on LinkedIn
        </a>
      </div>

      {/* Main Navigation Header */}
      <header className="header">
        <a href="#home" className="logo">
          <span className="logo-mark">ph</span>
          Pratima Hegde
        </a>
        <nav aria-label="Main Navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#book">Book</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-button" href="#contact">
          Book a Discovery Call <ArrowRight size={16} />
        </a>
      </header>

      {/* Hero Section */}
      <section id="home" className="carousel-hero">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            className="hero-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
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
                <a className="primary-button" href={activeSlide === 2 ? '#book' : '#contact'}>
                  {activeSlide === 2 ? 'Order your copy' : 'Book a Discovery Call'} <ArrowRight size={18} />
                </a>
                <a className="secondary-button" href={activeSlide === 2 ? '#contact' : '#about'}>
                  {activeSlide === 2 ? 'Meet Pratima' : 'Discover my story'} <ArrowRight size={18} />
                </a>
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
          {heroSlides.map((item, index) => (
            <button
              key={item.title}
              aria-label={`Show slide ${index + 1}`}
              className={index === activeSlide ? 'active' : ''}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Feature Highlight Strip */}
      <section className="feature-cards">
        <div className="feature-card">
          <b>01</b>
          <h3>Career Coaching</h3>
          <p>Find strategic clarity, define your value proposition, and build a concrete action plan for your next move.</p>
        </div>
        <div className="feature-card">
          <b>02</b>
          <h3>Executive Mentoring</h3>
          <p>Develop unshakable confidence with practical guidance backed by 16+ years of international experience.</p>
        </div>
        <div className="feature-card">
          <b>03</b>
          <h3>Life Transformation</h3>
          <p>Turn career transitions, relocations, or work breaks into powerful new opportunities for growth.</p>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="section about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.14 }}
        variants={reveal}
        transition={{ duration: 0.7 }}
      >
        <div className="about-images">
          <img className="about-photo main-photo" src={images.portrait} alt="Pratima Hegde smiling portrait" />
          <img className="about-photo small-photo" src={images.confident} alt="Pratima Hegde confident portrait" />
          <div className="callout">
            <Phone size={18} /> Berlin · Global Executive Coaching
          </div>
        </div>
        <div className="about-copy">
          <span className="orange-kicker">Who I Am</span>
          <h2>
            Helping professionals become <strong>unstoppable.</strong>
          </h2>
          <p>
            I am Pratima R. Hegde — a corporate trainer, leadership coach, and business communicator with 16 years of experience across India, Europe, and global matrix teams.
          </p>
          <p>
            I&apos;ve trained thousands of professionals, managed cross-border operations, and empowered individuals through career transitions, relocations, and confidence rebuilding.
          </p>
          <div className="check-list">
            <span>Practical + emotional clarity</span>
            <span>Corporate-tested frameworks</span>
            <span>Gentle but powerful mindset work</span>
            <span>Action plans that create real results</span>
          </div>
          <a className="primary-button" href="#contact">
            Start your journey <ArrowRight size={18} />
          </a>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="gray-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.14 }}
        variants={reveal}
        transition={{ duration: 0.7 }}
      >
        <div className="section">
          <span className="orange-kicker centered">How I Can Help</span>
          <h2 className="center-title">
            Career clarity for your<br />
            <strong>next chapter</strong>
          </h2>
          <p className="center-subtitle">
            Tailored coaching programs for professionals navigating career growth, international moves, or returns after a break.
          </p>
          <div className="service-grid">
            {services.map((service, index) => (
              <motion.article whileHover={{ y: -6 }} className="service-card" key={service.title}>
                <div>
                  <div className="service-number">0{index + 1}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <a href="#contact">
                  Learn more <ArrowRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Video Band */}
      <motion.section
        className="video-band"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(19,45,44,0.85), rgba(19,45,44,0.6)), url(${images.bookHero})`,
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.14 }}
        variants={reveal}
        transition={{ duration: 0.7 }}
      >
        <div>
          <span className="orange-kicker" style={{ color: '#ff9a82' }}>
            A new chapter starts here
          </span>
          <h2>
            Your potential is waiting<br />
            to be remembered.
          </h2>
          <a className="play-button" href="#contact" aria-label="Book a discovery call">
            <Play fill="currentColor" size={24} />
          </a>
        </div>
      </motion.section>

      {/* Why I Coach Section with Accordion */}
      <motion.section
        id="book"
        className="section why"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.14 }}
        variants={reveal}
        transition={{ duration: 0.7 }}
      >
        <div>
          <span className="orange-kicker">Why I Coach</span>
          <h2>
            From small-town roots<br />
            to a <strong>global life.</strong>
          </h2>
          <div className="accordion">
            {accordionItems.map((item, index) => {
              const isOpen = activeAccordion === index
              return (
                <div key={item.title} className={`accordion-item ${isOpen ? 'active' : ''}`}>
                  <div
                    className="accordion-header"
                    onClick={() => setActiveAccordion(isOpen ? null : index)}
                    role="button"
                    tabIndex={0}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                      }}
                    />
                  </div>
                  {isOpen && <div className="accordion-body">{item.content}</div>}
                </div>
              )
            })}
          </div>
        </div>
        <img className="why-photo" src={images.book} alt="Unstoppable book cover and author" />
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        className="gray-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.14 }}
        variants={reveal}
        transition={{ duration: 0.7 }}
      >
        <div className="section">
          <span className="orange-kicker centered">Client Transformations</span>
          <h2 className="center-title">
            You are closer than you<br />
            <strong>think.</strong>
          </h2>
          <div className="quotes">
            <blockquote>
              <p>
                &ldquo;I stopped feeling stuck and finally created a career path that felt completely aligned, clear, and achievable.&rdquo;
              </p>
              <cite>— Executive Coaching Client</cite>
            </blockquote>
            <blockquote>
              <p>
                &ldquo;Pratima&apos;s approach uniquely combines practical corporate frameworks with the deep emotional clarity I needed.&rdquo;
              </p>
              <cite>— Leadership Program Participant</cite>
            </blockquote>
            <blockquote>
              <p>
                &ldquo;Her guidance gave me the exact blueprint and self-belief to resume my career after moving abroad and taking a break.&rdquo;
              </p>
              <cite>— Career Transformation Client</cite>
            </blockquote>
          </div>
        </div>
      </motion.section>

      {/* Stats Counter Section */}
      <div className="container-custom" style={{ padding: '3rem 1.5rem' }}>
        <div className="stats">
          <span>
            16+<small>Years of Global Experience</small>
          </span>
          <span>
            3k+<small>Professionals Trained</small>
          </span>
          <span>
            3<small>Continents Reached</small>
          </span>
          <span>
            1<small>Purpose: Your Growth</small>
          </span>
        </div>
      </div>

      {/* Book Feature Section */}
      <motion.section
        className="section book-feature"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.14 }}
        variants={reveal}
        transition={{ duration: 0.7 }}
      >
        <div>
          <span className="orange-kicker">Featured Book</span>
          <h2>
            <em>Unstoppable...!</em>
          </h2>
          <p>
            A story of resilience, ambition, and becoming — from a small-town girl to an internationally recognized corporate leader.
          </p>
          <p>
            This book candidly details the 16-year journey of navigating corporate leadership, motherhood, cultural expectations, and personal transformation.
          </p>
          <a className="primary-button" href="#contact">
            Order your copy <ArrowRight size={18} />
          </a>
        </div>
        <img src={images.bookDesk} alt="Unstoppable book on a desk" />
      </motion.section>

      {/* Newsletter / Contact Floating Banner */}
      <motion.section
        id="contact"
        className="newsletter"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.14 }}
        variants={reveal}
        transition={{ duration: 0.7 }}
      >
        <div className="newsletter-text">
          <div className="newsletter-icon">
            <Mail />
          </div>
          <div>
            <b>Ready to rise with clarity and confidence?</b>
            <span>Book your 1-on-1 discovery call today and step into your next chapter.</span>
          </div>
        </div>
        <a className="primary-button" href="mailto:hello@pratimah.com">
          Get in touch <ArrowRight size={18} />
        </a>
      </motion.section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div>
            <a href="#home" className="logo">
              <span className="logo-mark">ph</span>
              Pratima Hegde
            </a>
            <p>
              Career Coach, Mentor, and Life Skills Trainer helping professionals navigate career transitions with confidence and clarity.
            </p>
          </div>
          <div>
            <b>Explore</b>
            <a href="#about">About Pratima</a>
            <a href="#services">Coaching Services</a>
            <a href="#book">My Book</a>
            <a href="#testimonials">Testimonials</a>
          </div>
          <div>
            <b>Services</b>
            <a href="#services">Career Coaching</a>
            <a href="#services">Career Break Support</a>
            <a href="#services">Relocation Guidance</a>
            <a href="#services">Group Workshops</a>
          </div>
          <div>
            <b>Connect</b>
            <span>
              <Mail size={16} /> hello@pratimah.com
            </span>
            <span>
              <MapPin size={16} /> Berlin, Germany
            </span>
            <span style={{ marginTop: '0.5rem' }}>
              <LinkedinIcon size={16} /> LinkedIn Profile
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Pratima Hegde. All rights reserved.</span>
          <span>Berlin-Based · Serving Global Clients</span>
        </div>
      </footer>
    </main>
  )
}
