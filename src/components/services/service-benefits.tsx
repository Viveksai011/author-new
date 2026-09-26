'use client'

import { CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { ServiceDetail } from '@/constants/services-data'

export function ServiceBenefits({ service }: { service: ServiceDetail }) {
  return (
    <Reveal className="section py-20">
      <div className="text-center">
        <span className="orange-kicker centered">Tangible Outcomes</span>
        <h2 className="center-title text-[var(--text-dark)]">
          {service.whatYouGetTitle}
        </h2>
        <p className="center-subtitle text-[var(--text-muted)]">
          {service.whatYouGetSubtitle}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {service.whatYouGet.map((benefit, i) => (
          <div
            key={i}
            className="flex items-start gap-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-sm"
          >
            <CheckCircle2 className="mt-1 shrink-0 text-[#ff5125]" size={24} />
            <p className="text-base font-semibold text-[var(--text-dark)] leading-snug">
              {benefit}
            </p>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
