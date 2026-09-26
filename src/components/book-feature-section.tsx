import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'
import { SITE_IMAGES } from '@/constants/site-data'

export function BookFeatureSection() {
  return (
    <Reveal className="section book-feature">
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
      <Image
        src={SITE_IMAGES.bookDesk}
        alt="Unstoppable book on a desk"
        width={600}
        height={400}
      />
    </Reveal>
  )
}
