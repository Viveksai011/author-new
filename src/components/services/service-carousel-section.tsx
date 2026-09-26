'use client'

import { Reveal } from '@/components/reveal'
import SqueezeCarousel, { SqueezeSlide } from '@/components/ui/carousel-squeeze'
import { ServiceDetail } from '@/constants/services-data'

export function ServiceCarouselSection({ service }: { service: ServiceDetail }) {
  const slides: SqueezeSlide[] = service.carouselSlides.map((s) => ({
    id: s.id,
    title: s.title,
    description: s.description,
    action: s.action,
    href: service.ctaHref,
    image: s.image,
    imageAlt: s.title,
    overlay: (
      <span className="rounded-full bg-[#ff5125] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
        {s.badge}
      </span>
    ),
  }))

  return (
    <section className="section py-20">
      <Reveal className="text-center">
        <span className="orange-kicker centered">Interactive Showcase</span>
        <h2 className="center-title text-[var(--text-dark)]">
          Program <strong>Highlights & Key Focus</strong>
        </h2>
        <p className="center-subtitle text-[var(--text-muted)]">
          Click or hover on any panel below to expand and explore the core components of this program.
        </p>
      </Reveal>

      <div className="mt-10">
        <SqueezeCarousel
          slides={slides}
          label={`${service.title} Highlights`}
          height="clamp(260px, 36cqi, 380px)"
          radius={18}
          controls={true}
          hoverGrow={true}
        />
      </div>
    </section>
  )
}
