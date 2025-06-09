'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/ftv2.jpg" alt="Footer Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* About */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>
              ASSTHA Financial Services
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              A trusted name in financial planning, insurance, investment, and advisory services led by Surajit Saha with years of dedicated client service and personalized wealth solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full"><Instagram className="w-5 h-5" /></a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>Our Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
              <li>Financial Advisory</li>
              <li>Health & Life Insurance</li>
              <li>Tax Saving Plans</li>
              <li>Retirement Planning</li>
              <li>Child Future Planning</li>
              <li>NRI Investment Services</li>
              <li>Home Loan Guidance</li>
              <li>LIC Policy Management</li>
              <li>Claim Settlement Support</li>
              <li>Portfolio Management</li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {['Home', 'about', 'services', 'moments', 'contact'].map((item, idx) => (
                <li key={idx}>
                  <a href={`/${item === 'Home' ? '' : item.toLowerCase().replace(/ /g, '-')}`} className="text-gray-300 hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: 'var(--font-oswald)' }}>Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1" />
                <span>6289005688</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1" />
                <span>assthafinancialservices@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span>ASSTHA Financial Services, A Brand of Surajit Saha, Kolkata</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-white/20 my-12"
        />

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden shadow-lg rounded-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2891773279252!2d88.31253790000001!3d22.568285300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279732420609f%3A0xe38197d8e9089786!2sASSTHA%20Financial%20Services%20A%20Brand%20of%20Surajit%20Saha!5e0!3m2!1sen!2sin!4v1749036105777!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full"
          ></iframe>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            © {new Date().getFullYear()} ASSTHA Financial Services. All rights reserved. <br />
            Developed & Maintained by Digital Exposure Online Services.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Sitemap</a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
