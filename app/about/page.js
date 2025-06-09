'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Trophy, Globe, Users, BookOpen, Handshake } from 'lucide-react'
import Testimonials from '../component/Testimonials'


const milestones = [
  {
    year: '1993',
    title: 'Career Beginnings',
    description: 'Started journey in financial services with LIC of India'
  },
  {
    year: '2005',
    title: 'First MDRT Achievement',
    description: 'Qualified for Million Dollar Round Table (MDRT) for the first time'
  },
  {
    year: '2014',
    title: 'MDI Gurgaon Certification',
    description: 'Completed advanced certification program in financial planning'
  },
  {
    year: '2017',
    title: 'Global Recognition',
    description: 'Attended MDRT Annual Conference in Florida, USA'
  },
  {
    year: '2018',
    title: 'Corporate Club Member',
    description: 'Earned prestigious LIC Corporate Club membership'
  },
  {
    year: '2023',
    title: '2500+ Clients Served',
    description: 'Milestone of serving over 2500 satisfied clients'
  }
]

const values = [
  {
    title: 'Integrity',
    description: 'We maintain the highest ethical standards in all our dealings',
    icon: <Handshake className="w-8 h-8 text-yellow-500" />
  },
  {
    title: 'Expertise',
    description: '31+ years of specialized financial knowledge',
    icon: <BookOpen className="w-8 h-8 text-yellow-500" />
  },
  {
    title: 'Personalization',
    description: 'Tailored solutions for each client\'s unique needs',
    icon: <Users className="w-8 h-8 text-yellow-500" />
  }
]

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

export default function AboutPage() {
  return (
    <div style={{ fontFamily: 'var(--font-oswald)' }} className="relative bg-[#0f0408] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 px-4 md:px-10">
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-800 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h4 className="text-sm font-semibold text-yellow-400 tracking-wider mb-4">ABOUT US</h4>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Journey</span> in 
              <br />Financial Excellence
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              For over three decades, ASSTHA Financial Services has been guiding clients toward financial security and prosperity with personalized strategies and unwavering commitment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="/img/1 (33).jpeg"
                alt="Surajit Saha"
                width={600}
                height={800}
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-600 text-black p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">31+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Surajit Saha's Story</h3>
              <p className="text-white/80 mb-6">
                From humble beginnings in Howrah to international recognition at MDRT conferences worldwide, my journey has been fueled by a passion for helping individuals and families achieve financial security.
              </p>
              <p className="text-white/80 mb-8">
                After losing my mentor, the late Sri Dilip Ghoshal, I vowed to uphold his standards of excellence and client-first philosophy. Today, ASSTHA Financial Services stands as a testament to that commitment.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="text-yellow-400" />
                    <h4 className="font-bold">16x MDRT</h4>
                  </div>
                  <p className="text-sm text-white/70">Qualifier with 6 Court of the Table honors</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Trophy className="text-yellow-400" />
                    <h4 className="font-bold">LIC Awards</h4>
                  </div>
                  <p className="text-sm text-white/70">Corporate & Champion trophies</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="text-yellow-400" />
                    <h4 className="font-bold">Global Presence</h4>
                  </div>
                  <p className="text-sm text-white/70">Conferences in USA, Australia, Singapore</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="text-yellow-400" />
                    <h4 className="font-bold">2500+</h4>
                  </div>
                  <p className="text-sm text-white/70">Clients served</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 px-4 md:px-10 bg-gradient-to-b from-[#0f0408] to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h4 className="text-sm font-semibold text-yellow-400 tracking-wider mb-4">OUR JOURNEY</h4>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Milestones of Excellence</h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              Key moments that shaped ASSTHA Financial Services into a trusted name in wealth management
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-yellow-600/30 transform -translate-x-1/2"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  <div className={`w-1/2 p-6 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="text-yellow-400 font-bold text-lg">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-white/80">{milestone.description}</p>
                  </div>
                  
                  <div className="w-1/2 flex justify-center">
                    <div className="relative">
                      <div className="w-6 h-6 rounded-full bg-yellow-600 border-4 border-yellow-900 z-10"></div>
                      {index !== milestones.length - 1 && (
                        <div className="absolute top-6 left-1/2 w-0.5 h-16 bg-yellow-600/50 transform -translate-x-1/2"></div>
                      )}
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 md:px-10 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h4 className="text-sm font-semibold text-yellow-400 tracking-wider mb-4">OUR PHILOSOPHY</h4>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Core Values That Guide Us</h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              The principles that form the foundation of every client relationship
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gradient-to-b from-white/5 to-transparent p-8 rounded-xl border border-white/10 hover:border-yellow-500 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  {value.icon}
                  <h3 className="text-xl font-bold">{value.title}</h3>
                </div>
                <p className="text-white/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-10 bg-[#0f0408]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h4 className="text-sm font-semibold text-yellow-400 tracking-wider mb-4">OUR TEAM</h4>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Dedicated Professionals</h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              Meet the team that makes ASSTHA Financial Services a trusted partner in your financial journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              custom={0}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-b from-white/5 to-transparent p-8 rounded-xl border border-white/10 hover:border-yellow-500 transition-all duration-300 text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-yellow-500">
                <Image
                  src="/img/surajit-team.jpg"
                  alt="Surajit Saha"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Surajit Saha</h3>
              <p className="text-yellow-400 mb-4">Founder & Principal Advisor</p>
              <p className="text-white/80">31+ years experience, 16x MDRT qualifier, LIC Corporate Club Member</p>
            </motion.div>

            <motion.div
              custom={1}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-b from-white/5 to-transparent p-8 rounded-xl border border-white/10 hover:border-yellow-500 transition-all duration-300 text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-yellow-500">
                <Image
                  src="/img/advisor-1.jpg"
                  alt="Senior Advisor"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Rahul Sharma</h3>
              <p className="text-yellow-400 mb-4">Senior Financial Advisor</p>
              <p className="text-white/80">15+ years experience, Mutual Fund specialist, Retirement planning expert</p>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-b from-white/5 to-transparent p-8 rounded-xl border border-white/10 hover:border-yellow-500 transition-all duration-300 text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-yellow-500">
                <Image
                  src="/img/advisor-2.jpg"
                  alt="Client Relations"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Priya Patel</h3>
              <p className="text-yellow-400 mb-4">Client Relations Manager</p>
              <p className="text-white/80">10+ years experience, Customer service excellence, Policy management</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="relative bg-yellow-600 text-white py-20 px-4 md:px-16">
        <div className="max-w-6xl mx-auto p-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Ready to Begin Your Financial Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            Let ASSTHA Financial Services guide you with three decades of expertise and personalized attention.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg text-lg"
          >
            Schedule Free Consultation
          </motion.button>
        </div>
      </section>
    </div>
  )
}