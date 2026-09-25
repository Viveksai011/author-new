'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { Reveal } from './reveal'
import { TESTIMONIALS_CONTENT } from '@/constants/site-data'

export function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const notes = TESTIMONIALS_CONTENT.items
  const move = (step: number) => setActive((active + step + notes.length) % notes.length)

  return (
    <section
      id="testimonials"
      className="gray-section testimonials-section px-6 py-20 transition-colors duration-300 lg:px-10"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="text-center">
          <p className="orange-kicker centered">
            {TESTIMONIALS_CONTENT.badge}
          </p>
          <h2 className="center-title">
            {TESTIMONIALS_CONTENT.title}
          </h2>
          <p className="center-subtitle">
            {TESTIMONIALS_CONTENT.description}
          </p>
        </Reveal>

        <div className="relative mx-auto mt-4 h-[500px] max-w-[1280px] overflow-hidden">
          {notes.map((item, index) => {
            const offset = (index - active + notes.length) % notes.length
            const position = offset > 2 ? offset - notes.length : offset
            const center = position === 0

            return (
              <motion.article
                key={item.name + index}
                onClick={() => setActive(index)}
                animate={{
                  x: `calc(-50% + ${position * 230}px)`,
                  y: center ? 10 : position % 2 ? 40 : -5,
                  rotate: center ? 0 : position % 2 ? 3 : -3,
                  scale: center ? 1 : 0.88,
                  opacity: Math.abs(position) > 2 ? 0 : center ? 1 : 0.82,
                }}
                whileHover={{
                  scale: center ? 1.03 : 0.93,
                  y: center ? 4 : position % 2 ? 30 : -10,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 220,
                  damping: 24,
                  mass: 0.8,
                }}
                className={`group absolute left-1/2 top-4 h-[350px] w-[290px] cursor-pointer rounded-[26px] p-7 transition-colors duration-300 sm:h-[370px] sm:w-[360px] ${
                  center
                    ? 'z-10 border-2 border-[#ff5125] bg-[#132d2c] text-white shadow-[0_12px_36px_rgba(255,81,37,0.35)] dark:border-[#ff5125] dark:bg-[#162338] dark:text-white dark:shadow-[0_12px_40px_rgba(255,81,37,0.4)]'
                    : 'z-0 border border-[#e2e8f0] bg-white text-[#17212c] shadow-sm hover:border-[#ff5125] hover:shadow-[0_10px_30px_rgba(255,81,37,0.22)] dark:border-[#2a3b54] dark:bg-[#111c2e] dark:text-slate-100 dark:hover:border-[#ff5125] dark:hover:bg-[#162236] dark:hover:shadow-[0_12px_36px_rgba(255,81,37,0.3)]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                      center
                        ? 'bg-[#ff5125] text-white shadow-sm'
                        : 'bg-[#ff5125]/12 text-[#ff5125] group-hover:bg-[#ff5125] group-hover:text-white dark:bg-[#ff5125]/20 dark:text-[#ff785a]'
                    }`}
                  >
                    {item.tag}
                  </span>
                  <div className="flex gap-0.5 text-[#ff9a26] transition-transform duration-300 group-hover:scale-105">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                </div>

                <Quote size={24} className="mt-5 text-[#ff5125] transition-transform duration-300 group-hover:scale-110" />
                <p className="mt-3 text-base leading-6 sm:text-lg sm:leading-7">“{item.quote}”</p>
                <p
                  className={`absolute bottom-6 left-7 text-sm font-bold transition-colors duration-300 ${
                    center ? 'text-white/90' : 'text-[#17212c]/75 group-hover:text-[#ff5125] dark:text-slate-300 dark:group-hover:text-[#ff785a]'
                  }`}
                >
                  — {item.name}
                </p>
              </motion.article>
            )
          })}

          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => move(-1)}
              aria-label="Previous testimonial"
              className="grid size-12 place-items-center rounded-full border border-[#17212c]/15 bg-white text-[#17212c] shadow-sm transition-all duration-300 hover:border-[#ff5125] hover:bg-[#ff5125] hover:text-white hover:shadow-[0_4px_16px_rgba(255,81,37,0.4)] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-[#ff5125] dark:hover:bg-[#ff5125] dark:hover:text-white"
            >
              <ChevronLeft />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => move(1)}
              aria-label="Next testimonial"
              className="grid size-12 place-items-center rounded-full border border-[#17212c]/15 bg-white text-[#17212c] shadow-sm transition-all duration-300 hover:border-[#ff5125] hover:bg-[#ff5125] hover:text-white hover:shadow-[0_4px_16px_rgba(255,81,37,0.4)] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-[#ff5125] dark:hover:bg-[#ff5125] dark:hover:text-white"
            >
              <ChevronRight />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
