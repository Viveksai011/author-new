import { ArrowRight, Mail } from 'lucide-react'
import Link from 'next/link'
import { Reveal } from './reveal'
import { SITE_INFO } from '@/constants/site-data'

export function NewsletterSection() {
  return (
    <Reveal id="contact" className="newsletter">
      <div className="newsletter-text">
        <div className="newsletter-icon">
          <Mail />
        </div>
        <div>
          <b>Ready to rise with clarity and confidence?</b>
          <span>Book your 1-on-1 discovery call today and step into your next chapter.</span>
        </div>
      </div>
      <Link className="primary-button" target='_blank' rel='noopener noreferrer' href={`${SITE_INFO.calendlyUrl}`}>
        Get in touch <ArrowRight size={18} />
      </Link>
    </Reveal>
  )
}
