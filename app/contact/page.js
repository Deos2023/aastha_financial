'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const sendWhatsAppMessage = (e) => {
    e.preventDefault()
    
    // Construct WhatsApp message
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/916289005688?text=${message}`, '_blank')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  return (
    <div style={{ fontFamily: 'var(--font-oswald)' }} className="bg-[#0f0408] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-sm font-semibold text-yellow-400 tracking-wider mb-4">GET IN TOUCH</h4>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">ASSTHA Financial</span>
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Reach out to us for personalized financial advice and solutions tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-b from-white/5 to-transparent p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Our Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-600/20 p-3 rounded-lg">
                    <Phone className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Phone</h4>
                    <p className="text-white/80">+91 6289005688</p>
                    <p className="text-white/80">+91 9831053500</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-600/20 p-3 rounded-lg">
                    <Mail className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <p className="text-white/80">assthafinancialservices@gmail.com</p>
                    <p className="text-white/80">surajitmafri1931@yahoo.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-600/20 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Office Addresses</h4>
                    <p className="text-white/80">
                      <strong>Main Office:</strong> 621, Sarat Chatterjee Road, Howrah – 711102 (Near Nabanna)
                    </p>
                    <p className="text-white/80 mt-2">
                      <strong>Branch Office:</strong> 143, Chandmari Road, Howrah – 711109
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
                <div className="space-y-2 text-white/80">
                  <p>Monday - Friday: 10:00 AM - 7:00 PM</p>
                  <p>Saturday: 10:00 AM - 3:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Action */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-xl cursor-pointer"
              onClick={() => window.open('https://wa.me/916289005688', '_blank')}
            >
              <div className="flex items-center gap-4">
                <MessageCircle className="w-8 h-8" />
                <div>
                  <h3 className="text-xl font-bold">Chat on WhatsApp</h3>
                  <p className="text-white/90">Get quick responses from our team</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-b from-white/5 to-transparent p-8 rounded-xl border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            <form onSubmit={sendWhatsAppMessage}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-5 h-5" />
                  Send Message via WhatsApp
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-b from-white/5 to-transparent p-8 rounded-xl border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6">Find Us on Map</h3>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2891773279252!2d88.31253790000001!3d22.568285300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279732420609f%3A0xe38197d8e9089786!2sASSTHA%20Financial%20Services%20A%20Brand%20of%20Surajit%20Saha!5e0!3m2!1sen!2sin!4v1749036105777!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-yellow-600 text-white py-20 px-4 md:px-16">
        <div className="max-w-6xl mx-auto p-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Ready to Secure Your Financial Future?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            Contact ASSTHA Financial Services today for expert guidance on insurance and investments
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-full font-semibold shadow flex items-center gap-2"
              onClick={() => window.open('tel:6289005688')}
            >
              <Phone className="w-5 h-5" /> Call Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-full font-semibold shadow flex items-center gap-2"
              onClick={() => window.open('https://wa.me/916289005688', '_blank')}
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  )
}