'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Sparkles, Star } from 'lucide-react'
import { ServiceDetail } from '@/constants/services-data'

export function ServiceHero({ service }: { service: ServiceDetail }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-[#111c2e] to-slate-950 py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,81,37,0.15),transparent_50%)]" />
      <div className="container-custom relative z-10 mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ff5125]/40 bg-[#ff5125]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#ff9a82]">
              <Sparkles size={14} /> {service.kicker}
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            <p className="mt-4 text-xl font-semibold italic text-[#ff9a82] sm:text-2xl">
              {service.subtitle}
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              {service.heroDescription}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={service.ctaHref}
                className="primary-button text-base shadow-lg shadow-[#ff5125]/30"
              >
                <Calendar size={18} /> {service.ctaText}
              </Link>
              <Link href="#details" className="secondary-button text-base">
                Explore Program Details <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
