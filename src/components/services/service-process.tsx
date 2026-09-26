'use client'

import { Clock, Video, FileText, Settings, HeartHandshake } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { ServiceDetail } from '@/constants/services-data'

export function ServiceProcess({ service }: { service: ServiceDetail }) {
  const { howSessionsWork } = service

  return (
    <Reveal className="section py-20">
      <div className="text-center">
        <span className="orange-kicker centered">Delivery Format</span>
        <h2 className="center-title text-[var(--text-dark)]">
          {service.howSessionsWorkTitle}
        </h2>
        <p className="center-subtitle text-[var(--text-muted)]">
          Structured, flexible execution designed for maximum convenience and retention.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-7 shadow-sm">
          <div className="inline-flex size-12 items-center justify-center rounded-xl bg-[#ff5125]/15 text-[#ff5125]">
            <Video size={24} />
          </div>
          <h3 className="mt-4 text-lg font-bold text-[var(--text-dark)]">Session Format</h3>
          <p className="mt-2 text-sm text-[var(--text-muted)]">{howSessionsWork.format}</p>
        </div>

        <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-7 shadow-sm">
          <div className="inline-flex size-12 items-center justify-center rounded-xl bg-[#ff5125]/15 text-[#ff5125]">
            <Clock size={24} />
          </div>
          <h3 className="mt-4 text-lg font-bold text-[var(--text-dark)]">Duration & Cadence</h3>
          <p className="mt-2 text-sm text-[var(--text-muted)]">{howSessionsWork.duration}</p>
        </div>

        <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-7 shadow-sm">
          <div className="inline-flex size-12 items-center justify-center rounded-xl bg-[#ff5125]/15 text-[#ff5125]">
            <FileText size={24} />
          </div>
          <h3 className="mt-4 text-lg font-bold text-[var(--text-dark)]">Practical Methodology</h3>
          <p className="mt-2 text-sm text-[var(--text-muted)]">{howSessionsWork.methodology}</p>
        </div>

        <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-7 shadow-sm">
          <div className="inline-flex size-12 items-center justify-center rounded-xl bg-[#ff5125]/15 text-[#ff5125]">
            <Settings size={24} />
          </div>
          <h3 className="mt-4 text-lg font-bold text-[var(--text-dark)]">Deliverables & Tools</h3>
          <p className="mt-2 text-sm text-[var(--text-muted)]">{howSessionsWork.deliverables}</p>
        </div>

        <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-7 shadow-sm sm:col-span-2 lg:col-span-2">
          <div className="inline-flex size-12 items-center justify-center rounded-xl bg-[#ff5125]/15 text-[#ff5125]">
            <HeartHandshake size={24} />
          </div>
          <h3 className="mt-4 text-lg font-bold text-[var(--text-dark)]">Customization & Support</h3>
          <p className="mt-2 text-sm text-[var(--text-muted)]">{howSessionsWork.extraInfo}</p>
        </div>
      </div>
    </Reveal>
  )
}
