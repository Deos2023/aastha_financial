'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ServicesSection() {
  return (
    <section
      className="relative  text-white py-20 px-4 md:px-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/your-background.jpg')" }}
    >
      {/* <div className="absolute inset-0 bg-black/80 z-0" /> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Services
        </h2>

        {/* Special Services */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16"
        >
          {[
            {
              title: 'Financial Advisory',
              img: '/img1.jpg',
            },
            {
              title: 'Need Analysis',
              img: '/img2.jpg',
            },
            {
              title: 'Portfolio Management',
              img: '/img3.jpg',
            },
            {
              title: 'Claim Settlement',
              img: '/img1.jpg',
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className=" transition duration-300"
            >
              <div className="h-56 w-full relative mb-4">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg">{service.title}</h3>
            </div>
          ))}
        </motion.div>

        {/* LIC Services */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 p-8 rounded-xl shadow-lg max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-yellow-400">
            For LIC Policy Holders
          </h3>
          <ul className="space-y-3 text-white/90 text-sm md:text-base list-inside list-disc">
            <li>Premium Collection</li>
            <li>Nomination Change</li>
            <li>Loan on Policy</li>
            <li>Revival of Policy</li>
            <li>Bank Details Updation</li>
            <li>Contact Details Updation</li>
            <li>KYC Updation</li>
            <li>Maturity Claim</li>
            <li>Money Back</li>
            <li>Death Claim</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
