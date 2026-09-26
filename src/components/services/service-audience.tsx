'use client'

import { motion } from 'framer-motion'
import { Target, Users, CheckCircle, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { ServiceDetail } from '@/constants/services-data'

export function ServiceAudience({ service }: { service: ServiceDetail }) {
  return (
    <section id="details" className="gray-section services-section py-20">
      <div className="container-custom mx-auto px-6 lg:px-10">
        <Reveal className="text-center">
          <span className="orange-kicker centered">Target Audience</span>
          <h2 className="center-title text-[var(--text-dark)]">
            {service.whoThisIsForTitle}
          </h2>
          <p className="center-subtitle text-[var(--text-muted)]">
            {service.whoThisIsForSubtitle}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.whoThisIsFor.map((item, idx) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-7 shadow-sm transition-all duration-300"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-[#ff5125]/15 text-[#ff5125]">
                {idx % 3 === 0 ? <Target size={24} /> : idx % 3 === 1 ? <Users size={24} /> : <ShieldCheck size={24} />}
              </div>
              <h3 className="mt-5 text-xl font-bold text-[var(--text-dark)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
