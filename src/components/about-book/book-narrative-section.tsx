'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Play, X } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { BOOK_DETAILS, SITE_IMAGES } from '@/constants/site-data'

export function BookNarrativeSection() {
  const { narrativeSection } = BOOK_DETAILS
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleStartVideo = () => {
    setIsPlaying(true)
    setTimeout(() => {
      videoRef.current?.play().catch(() => {})
    }, 100)
  }

  const handleCloseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
    setIsPlaying(false)
  }

  return (
    <Reveal className="section py-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left Column: Story Copy & Highlights */}
        <div>
          <span className="orange-kicker">{narrativeSection.kicker}</span>
          <h2 className="text-3xl font-extrabold text-[var(--text-dark)] sm:text-4xl">
            {narrativeSection.heading}{' '}
            <strong className="text-[#ff5125]">{narrativeSection.headingAccent}</strong>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-muted)]">
            {BOOK_DETAILS.summary}
          </p>
          <div className="mt-8 space-y-4">
            {narrativeSection.bulletPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 shrink-0 text-[#ff5125]" size={20} />
                <p className="text-base font-semibold text-[var(--text-dark)]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Image / Video Container */}
        <div className="relative mx-auto w-full max-w-[440px]">
          <div className="relative h-[520px] sm:h-[580px] w-full overflow-hidden rounded-3xl border-4 border-slate-100 bg-slate-950 shadow-2xl transition-all duration-300 dark:border-slate-800">
            <AnimatePresence mode="wait">
              {!isPlaying ? (
                /* Poster Image with Animated Play Overlay */
                <motion.div
                  key="poster"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={handleStartVideo}
                  className="group relative h-full w-full cursor-pointer"
                >
                  <Image
                    src={SITE_IMAGES.bookDesk}
                    alt={`${BOOK_DETAILS.title} preview video poster`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-slate-950/20 transition-opacity duration-300 group-hover:opacity-90" />

                  {/* Centered Glowing Play Button */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative flex size-20 items-center justify-center rounded-full bg-[#ff5125] text-white shadow-[0_0_35px_rgba(255,81,37,0.6)] transition-all duration-300 group-hover:bg-[#ff6842]"
                    >
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#ff5125]/40" />
                      <Play size={32} className="ml-1 fill-white" />
                    </motion.div>
                    <span className="rounded-full bg-slate-900/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md border border-slate-700">
                      {narrativeSection.videoTitle}
                    </span>
                  </div>

                  {/* Bottom Quote Banner */}
                  <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-slate-900/90 p-4 text-white backdrop-blur-md shadow-lg">
                    <p className="text-xs font-bold italic leading-snug">
                      {narrativeSection.quote}
                    </p>
                  </div>
                </motion.div>
              ) : (
                /* HTML5 Video Player */
                <motion.div
                  key="video"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="relative h-full w-full bg-black"
                >
                  <video
                    ref={videoRef}
                    src={narrativeSection.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    onEnded={() => setIsPlaying(false)}
                    className="h-full w-full object-cover"
                  />
                  {/* Floating Close Button */}
                  <button
                    onClick={handleCloseVideo}
                    aria-label="Close video"
                    className="absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-900/90 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md hover:bg-slate-800 transition-all shadow-md"
                  >
                    <X size={16} /> Close Video
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
