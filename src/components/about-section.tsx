import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Reveal } from './reveal'
import { SITE_IMAGES } from '@/constants/site-data'

export function AboutSection() {
  return (
    <Reveal id="about" className="section about">
      <div className="about-images">
        <Image
          className="about-photo main-photo"
          src={SITE_IMAGES.portrait}
          alt="Pratima Hegde smiling portrait"
          width={500}
          height={600}
          style={{ objectPosition: 'center 15%' }}
        />
        <Image
          className="about-photo small-photo"
          src={SITE_IMAGES.confident}
          alt="Pratima Hegde confident portrait"
          width={300}
          height={400}
          style={{ objectPosition: 'center 10%' }}
        />
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
        <Link className="primary-button" href="https://calendly.com/hello-pratimahegde/30min">
          Start your journey <ArrowRight size={18} />
        </Link>
      </div>
    </Reveal>
  )
}
