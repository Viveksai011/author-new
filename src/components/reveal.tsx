'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const revealVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
}

interface RevealProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Reveal({ children, className = '', id }: RevealProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
      variants={revealVariants}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.section>
  )
}
