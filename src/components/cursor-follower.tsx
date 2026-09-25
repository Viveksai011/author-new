'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export function CursorFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const move = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <motion.div
        className="cursor-follower"
        animate={{ x: position.x - 16, y: position.y - 16 }}
        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
      />
    </>
  )
}
