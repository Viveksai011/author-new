'use client'

import { motion } from 'framer-motion'
import { Compass, HeartHandshake, RefreshCw, ShieldCheck, Target } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { BOOK_DETAILS } from '@/constants/site-data'

const AUDIENCE_ICONS = [Target, Compass, RefreshCw, ShieldCheck, HeartHandshake]

export function BookTargetAudienceSection() {
  const { audienceSection, targetAudience } = BOOK_DETAILS

  return (
    <section className="gray-section services-section py-20">
      <div className="container-custom mx-auto px-6 lg:px-10">
        <Reveal className="text-center">
          <span className="orange-kicker centered">{audienceSection.kicker}</span>
          <h2 className="center-title text-[var(--text-dark)]">
            {audienceSection.heading}
          </h2>
          <p className="center-subtitle text-[var(--text-muted)]">
            {audienceSection.subtitle}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {targetAudience.map((item, idx) => {
            const IconComponent = AUDIENCE_ICONS[idx % AUDIENCE_ICONS.length]
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-7 shadow-sm transition-all duration-300"
              >
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-[#ff5125]/15 text-[#ff5125]">
                  <IconComponent size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[var(--text-dark)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
