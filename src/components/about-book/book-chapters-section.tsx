'use client'

import { motion } from 'framer-motion'
import { Reveal } from '@/components/reveal'
import { BOOK_DETAILS } from '@/constants/site-data'

export function BookChaptersSection() {
  const { chaptersSection, sampleChapters } = BOOK_DETAILS

  return (
    <Reveal id="chapters" className="section py-20">
      <div className="text-center">
        <span className="orange-kicker centered">{chaptersSection.kicker}</span>
        <h2 className="center-title text-[var(--text-dark)]">
          {chaptersSection.heading}
        </h2>
        <p className="center-subtitle text-[var(--text-muted)]">
          {chaptersSection.subtitle}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {sampleChapters.map((ch) => (
          <motion.div
            key={ch.num}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-8 shadow-sm transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-[#ff5125]/15 px-3 py-1 text-xs font-bold text-[#ff5125]">
                Chapter {ch.num}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                {ch.theme}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-[var(--text-dark)]">
              {ch.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
              {ch.summary}
            </p>
          </motion.div>
        ))}
      </div>
    </Reveal>
  )
}
