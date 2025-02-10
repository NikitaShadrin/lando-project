'use client'
import { motion } from 'framer-motion'

export default function AnimatedSection({
  children,
  className = '',
  id,
  ...rest
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      id={id}
      {...rest}
    >
      {children}
    </motion.section>
  )
}