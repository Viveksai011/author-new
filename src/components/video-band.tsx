import { Play } from 'lucide-react'
import Link from 'next/link'
import { Reveal } from './reveal'
import { SITE_IMAGES } from '@/constants/site-data'

export function VideoBand() {
  return (
    <Reveal
      className="video-band"
      id="video"
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(90deg, rgba(19,45,44,0.85), rgba(19,45,44,0.6)), url(${SITE_IMAGES.bookHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      />
      <div>
        <span className="orange-kicker" style={{ color: '#ff9a82' }}>
          A new chapter starts here
        </span>
        <h2>
          Your potential is waiting<br />
          to be remembered.
        </h2>
        <Link className="play-button" href="#contact" aria-label="Book a discovery call">
          <Play fill="currentColor" size={24} />
        </Link>
      </div>
    </Reveal>
  )
}
