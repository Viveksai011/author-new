import { ArrowRight, Phone } from 'lucide-react'
import { Reveal } from './reveal'
import { SITE_IMAGES } from '@/constants/site-data'

export function AboutSection() {
  return (
    <Reveal id="about" className="section about">
      <div className="about-images">
        <img className="about-photo main-photo" src={SITE_IMAGES.portrait} alt="Pratima Hegde smiling portrait" />
        <img className="about-photo small-photo" src={SITE_IMAGES.confident} alt="Pratima Hegde confident portrait" />
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
    </Reveal>
  )
}
