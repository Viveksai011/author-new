'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ShoppingBag, Sparkles, Star } from 'lucide-react'
import { BOOK_DETAILS, SITE_IMAGES } from '@/constants/site-data'

export function BookHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-[#111c2e] to-slate-950 py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,81,37,0.15),transparent_50%)]" />
      <div className="container-custom relative z-10 mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Copy Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ff5125]/40 bg-[#ff5125]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#ff9a82]">
              <Sparkles size={14} /> {BOOK_DETAILS.badgeText}
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {BOOK_DETAILS.title}
            </h1>

            <p className="mt-3 text-xl font-semibold italic text-[#ff9a82] sm:text-2xl">
              {BOOK_DETAILS.subtitle}
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              {BOOK_DETAILS.overview}
            </p>

            {/* Highlights Badge Strip */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {BOOK_DETAILS.highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-center backdrop-blur-sm shadow-md"
                >
                  <span className="block text-2xl font-extrabold text-[#ff5125] sm:text-3xl">
                    {h.number}
                  </span>
                  <span className="mt-1 block text-xs font-medium text-slate-400">
                    {h.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Hero Action CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#buy-options"
                className="primary-button text-base shadow-lg shadow-[#ff5125]/30"
              >
                <ShoppingBag size={18} /> Get Your Copy Today
              </a>
              <a href="#chapters" className="secondary-button text-base">
                Explore Chapters <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Interactive 3D Book Display Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <motion.div
              whileHover={{ rotateY: -12, rotateX: 6, scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="group relative cursor-pointer perspective-1000"
            >
              <div className="relative overflow-hidden rounded-[24px] border-4 border-[#ff5125]/60 bg-slate-900 p-3 shadow-[0_25px_60px_rgba(255,81,37,0.35)] transition-all duration-500">
                <Image
                  src={SITE_IMAGES.book}
                  alt={`${BOOK_DETAILS.title} Book Cover`}
                  width={360}
                  height={500}
                  className="h-[460px] w-[340px] rounded-[18px] object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105 sm:h-[500px] sm:w-[360px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block rounded-md bg-[#ff5125] px-3 py-1 text-xs font-extrabold uppercase tracking-wider">
                    Author Release
                  </span>
                  <h3 className="mt-2 text-xl font-bold">{BOOK_DETAILS.authorName}</h3>
                  <p className="text-xs text-slate-300">{BOOK_DETAILS.authorTitle}</p>
                </div>
              </div>

              {/* Rating Badge */}
              <div className="absolute -bottom-5 -left-5 flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/95 px-5 py-2.5 shadow-xl backdrop-blur-md">
                <div className="flex text-[#ff8a45]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white">{BOOK_DETAILS.rating}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
