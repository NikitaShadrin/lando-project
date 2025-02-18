'use client'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  { id: 1, name: 'Sarah Johnson', text: 'This product transformed our workflow completely!' },
  { id: 2, name: 'Mike Chen', text: 'Easiest tool I\'ve ever used. Simply brilliant.' },
  { id: 3, name: 'Emma Wilson', text: 'Integrated perfectly with our existing stack.' },
  { id: 4, name: 'David Smith', text: 'Boosted our conversion rates dramatically.' },
  { id: 5, name: 'Lisa Rodriguez', text: 'Best investment we made this year.' },
]

export default function Testimonials() {
  const x = useMotionValue(0)
  const baseWidth = 800 // Width of each testimonial
  const contentWidth = testimonials.length * baseWidth

  // Infinite scroll
  const xTransform = useTransform(x, value => {
    return -value % contentWidth
  })

  // Auto-scroll
  useEffect(() => {
    let animationFrame: number
    const scrollSpeed = 50 // Pixels per second

    const animate = (time: number) => {
      // Update x position
      const newX = x.get() + scrollSpeed * (16 / 1000) // 16ms frame time approximation
      x.set(newX)
      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [x])

  return (
    <section className="py-20 relative overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-24">What Our Clients Say</h2>
      
      {/* Fade out edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-purple-50 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-purple-50 to-transparent z-20 pointer-events-none" />

      <motion.div
        className="flex"
        style={{ x: xTransform }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="flex-shrink-0 px-12 w-[800px]"
          >
            <div className="flex items-center justify-center gap-4">
              <StarIcon className="w-8 h-8 text-amber-400 flex-shrink-0" />
              <div className="text-center">
                <p className="text-2xl font-medium mb-2">"{testimonial.text}"</p>
                <p className="text-gray-600 text-lg">— {testimonial.name}</p>
              </div>
              <StarIcon className="w-8 h-8 text-amber-400 flex-shrink-0" />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}