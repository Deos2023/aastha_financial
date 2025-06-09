'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'

const operationImages = Array.from({ length: 41 }, (_, i) => `/img/1 (${i + 1}).jpeg`)

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

export default function MomentsPage() {
  const [fullscreenImg, setFullscreenImg] = useState(null)

  return (
    <div style={{ fontFamily: 'var(--font-oswald)' }} className="relative bg-[#0f0408] text-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 px-4 md:px-10">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-800 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-sm font-semibold text-yellow-400 tracking-wider mb-4">OUR MOMENTS</h4>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Cherished <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Memories</span>
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              A glimpse into our journey, celebrations, and achievements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Images Grid */}
      <section className="py-20 px-4 md:px-10 bg-gradient-to-b from-[#0f0408] to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h4 className="text-sm font-semibold text-yellow-400 tracking-wider mb-4">GALLERY</h4>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Operation Moments</h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              Explore some of our most memorable moments captured in time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {operationImages.map((src, idx) => (
              <motion.div
                key={src}
                custom={idx}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative group cursor-pointer rounded-xl overflow-hidden border border-white/10 hover:border-yellow-500 transition-all duration-300"
                onClick={() => setFullscreenImg(src)}
              >
                <Image
                  src={src}
                  alt={`Moment ${idx + 1}`}
                  width={400}
                  height={300}
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {fullscreenImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setFullscreenImg(null)}
        >
          <div className="relative max-w-3xl w-full p-4">
            <button
              className="absolute top-4 right-4 text-white bg-black/60 rounded-full p-2 hover:bg-yellow-600 transition"
              onClick={e => {
                e.stopPropagation()
                setFullscreenImg(null)
              }}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <Image
              src={fullscreenImg}
              alt="Full Screen Moment"
              width={1200}
              height={800}
              className="w-full h-auto rounded-xl shadow-2xl"
              style={{ maxHeight: '80vh', objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </div>
  )
}