import { Mail, MapPin } from 'lucide-react'
import { NAV_LINKS, SITE_INFO } from '@/constants/site-data'

function LinkedinIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
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

export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <a href="#home" className="logo">
            <span className="logo-mark">ph</span>
            {SITE_INFO.name}
          </a>
          <p>
            Career Coach, Mentor, and Life Skills Trainer helping professionals navigate career transitions with confidence and clarity.
          </p>
        </div>
        <div>
          <b>Explore</b>
          {NAV_LINKS.slice(1, 5).map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
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
            <Mail size={16} /> {SITE_INFO.email}
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
  )
}
