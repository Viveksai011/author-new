'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Reveal } from './reveal'
import { ACCORDION_ITEMS, SITE_IMAGES } from '@/constants/site-data'

export function WhyCoachSection() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0)

  return (
    <Reveal id="book" className="section why">
      <div>
        <span className="orange-kicker">Why I Coach</span>
        <h2>
          From small-town roots<br />
          to a <strong>global life.</strong>
        </h2>
        <div className="accordion">
          {ACCORDION_ITEMS.map((item, index) => {
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
      <img className="why-photo" src={SITE_IMAGES.book} alt="Unstoppable book cover and author" />
    </Reveal>
  )
}
