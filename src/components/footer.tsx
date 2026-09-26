import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'
import { SITE_INFO } from '@/constants/site-data'

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
        <div className="footer-col">
          <Link href="/" className="logo">
            <span className="logo-mark">ph</span>
            {SITE_INFO.name}
          </Link>
          <p className="mt-2 text-sm leading-relaxed text-slate-400 max-w-[320px]">
            Career Coach, Mentor, and Life Skills Trainer helping professionals navigate career transitions with confidence and clarity.
          </p>
        </div>

        <div className="footer-col">
          <b className="footer-title">Explore</b>
          <Link href="/#home">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/about-book">Unstoppable Book</Link>
          <Link href="/#testimonials">Testimonials</Link>
          <Link href="/#contact">Contact</Link>
        </div>

        <div className="footer-col">
          <b className="footer-title">Services</b>
          <Link href="/services/one-to-one-coaching">One-to-One Coaching</Link>
          <Link href="/services/group-sessions-workshops">Group Sessions & Workshops</Link>
          <Link href="/services/corporate-training">Corporate Training</Link>
        </div>

        <div className="footer-col">
          <b className="footer-title">Connect</b>
          <span>
            <Mail size={16} /> {SITE_INFO.email}
          </span>
          <span>
            <MapPin size={16} /> Berlin, Germany
          </span>
          <a
            href={SITE_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-1"
          >
            <LinkedinIcon size={16} /> LinkedIn Profile
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Pratima Hegde. All rights reserved.</span>
        <span>Berlin-Based · Serving Global Clients</span>
      </div>
    </footer>
  )
}
