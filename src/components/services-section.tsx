import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'
import { SERVICES } from '@/constants/site-data'

export function ServicesSection() {
  return (
    <Reveal id="services" className="gray-section services-section">
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
          {SERVICES.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div>
                <div className="service-number">0{index + 1}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
              <a href="#contact">
                Learn more <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
