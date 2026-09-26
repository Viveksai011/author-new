'use client'

import Link from 'next/link'
import { Calendar, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { ServiceDetail } from '@/constants/services-data'

export function ServiceCTA({ service }: { service: ServiceDetail }) {
  return (
    <section className="gray-section py-20">
      <div className="container-custom mx-auto px-6 lg:px-10">
        <Reveal className="rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center text-white shadow-2xl lg:p-16">
          <span className="inline-block rounded-full bg-[#ff5125] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider">
            Get Started
          </span>
          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            {service.enrollmentTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            {service.enrollmentDescription}
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href={service.ctaHref}
              className="primary-button text-base shadow-xl shadow-[#ff5125]/30"
            >
              <Calendar size={18} /> {service.ctaText} <ChevronRight size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
