'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Ravi Sharma',
    title: 'Small Business Owner',
    feedback:
      'ASSTHA Financial Services helped me streamline my loans and gave great investment advice. Trustworthy and efficient!',
  },
  {
    name: 'Priya Das',
    title: 'Self-employed',
    feedback:
      'Their team made the process seamless and transparent. I highly recommend ASSTHA for personal financial planning.',
  },
  {
    name: 'Sourav Banerjee',
    title: 'Shop Owner',
    feedback:
      'I received clear guidance, fast processing, and professional support. Really impressed by their service quality.',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative bg-[#0f0408] text-white py-20 px-4 md:px-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/your-background.jpg')" }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/80 z-0" /> */}

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-white/70 mb-12">
          Real stories from clients who trusted ASSTHA Financial Services.
        </p>

        <div className="relative h-52 md:h-48 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 p-6 md:p-10 rounded-xl shadow-lg text-left max-w-3xl mx-auto"
            >
              <p className="text-lg mb-4 italic">“{testimonials[index].feedback}”</p>
              <div className="font-bold text-white">{testimonials[index].name}</div>
              <div className="text-white/70 text-sm">{testimonials[index].title}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-white/80 text-sm space-y-1">
          <div>
            📞 <span className="font-semibold">6289005688</span>
          </div>
          <div>
            ✉️{' '}
            <a
              href="mailto:assthafinancialservices@gmail.com"
              className="underline hover:text-white"
            >
              assthafinancialservices@gmail.com
            </a>
          </div>
          <div className="text-white font-semibold pt-2 text-lg">
            ASSTHA Financial Services
          </div>
        </div>
      </div>
    </section>
  )
}
