'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { BOOK_DETAILS } from '@/constants/site-data'

export function BookPurchaseSection() {
  const { purchaseSection, storeLinks } = BOOK_DETAILS

  return (
    <section id="buy-options" className="gray-section testimonials-section py-20">
      <div className="container-custom mx-auto px-6 lg:px-10">
        <Reveal className="text-center">
          <span className="orange-kicker centered">{purchaseSection.kicker}</span>
          <h2 className="center-title text-[var(--text-dark)]">
            {purchaseSection.heading}
          </h2>
          <p className="center-subtitle text-[var(--text-muted)]">
            {purchaseSection.subtitle}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {storeLinks.map((store) => (
            <motion.div
              key={store.store}
              whileHover={{ y: -8 }}
              className="relative flex flex-col justify-between rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-8 shadow-md transition-all duration-300"
            >
              <div>
                <span className="inline-block rounded-full bg-[#ff5125] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {store.badge}
                </span>
                <h3 className="mt-5 text-2xl font-extrabold text-[var(--text-dark)]">
                  {store.store}
                </h3>
                <p className="mt-2 text-sm font-semibold text-[var(--text-muted)]">
                  {store.format}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--border-color)]">
                <a
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button w-full justify-center gap-2 text-sm"
                >
                  {store.cta} <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
