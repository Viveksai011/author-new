'use client'

import { motion } from 'framer-motion'
import { Target, Compass, ShieldCheck, Zap, BookOpen, Award, CheckCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import RadialOrbitalTimeline, { TimelineItem } from '@/components/ui/radial-orbital-timeline'
import { ServiceDetail } from '@/constants/services-data'

const MODULE_ICONS = [Target, Compass, ShieldCheck, Zap, BookOpen, Award, CheckCircle]

export function ServiceModules({ service }: { service: ServiceDetail }) {
  // Map service.modules dynamically to RadialOrbitalTimeline items
  const timelineData: TimelineItem[] = service.modules.map((mod, index) => {
    const IconComp = MODULE_ICONS[index % MODULE_ICONS.length]
    const total = service.modules.length
    const nextId = (index + 1) % total + 1
    const prevId = index === 0 ? total : index

    return {
      id: index + 1,
      title: mod.title,
      date: mod.badge || `Phase 0${index + 1}`,
      content: mod.description,
      category: service.title,
      icon: IconComp,
      relatedIds: [prevId, nextId].filter((id) => id !== index + 1),
      status: index === 0 ? 'completed' : index === 1 ? 'in-progress' : 'pending',
      energy: Math.max(30, 100 - index * 12),
    }
  })

  return (
    <section className="gray-section py-20">
      <div className="container-custom mx-auto px-6 lg:px-10">
        <Reveal className="text-center">
          <span className="orange-kicker centered">Program Architecture</span>
          <h2 className="center-title text-[var(--text-dark)]">
            {service.modulesTitle}
          </h2>
          <p className="center-subtitle text-[var(--text-muted)]">
            {service.modulesSubtitle}
          </p>
        </Reveal>

        {/* Radial Orbital Interactive Timeline */}
        <div className="mt-10">
          <RadialOrbitalTimeline timelineData={timelineData} />
        </div>

        {/* Structured Module Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.modules.map((mod) => (
            <motion.div
              key={mod.title}
              whileHover={{ scale: 1.02 }}
              className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-8 shadow-sm transition-all"
            >
              <div>
                <span className="inline-block rounded-md bg-[#ff5125]/15 px-3 py-1 text-xs font-bold text-[#ff5125]">
                  {mod.badge || 'Module'}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-[var(--text-dark)]">
                  {mod.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {mod.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
