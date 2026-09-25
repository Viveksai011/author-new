import { ArrowRight, Mail } from 'lucide-react'
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
      <a className="primary-button" href={`mailto:${SITE_INFO.email}`}>
        Get in touch <ArrowRight size={18} />
      </a>
    </Reveal>
  )
}
