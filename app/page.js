'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { Shield, PieChart, DollarSign, BarChart2, ArrowRight, Mail, PhoneCall } from 'lucide-react'
import Testimonials from './component/Testimonials'
import ServicesSection from './component/Services'
import SipCalculator from './component/SipCalculator';

const images = [
  { src: '/img/1 (26).jpeg', alt: 'Financial Planning', delay: 0.1, colSpan: 'col-span-2', rowSpan: 'row-span-1' },
  { src: '/img/1 (17).jpeg', alt: 'Retirement Planning', delay: 0.2, colSpan: 'col-span-1', rowSpan: 'row-span-2' },
  { src: '/img/1 (11).jpeg', alt: 'Expert Consultation', delay: 0.3, colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { src: '/img/1 (34).jpeg', alt: 'Investment Strategy', delay: 0.4, colSpan: 'col-span-1', rowSpan: 'row-span-2' },
  { src: '/img/1 (39).jpeg', alt: 'Wealth Management', delay: 0.6, colSpan: 'col-span-1', rowSpan: 'row-span-1' },
]

const services = [
  {
    title: 'Wealth Creation Planning',
    icon: <DollarSign className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: 'Life Insurance Solutions',
    icon: <Shield className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: 'Retirement Planning',
    icon: <PieChart className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: 'Mutual Fund Investments',
    icon: <BarChart2 className="w-10 h-10 text-yellow-500" />,
  },
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

export default function HeroGridSection() {
   const router = useRouter();
  return (
    <div
    style={{fontFamily: 'var(--font-oswald)'}}
    className="relative min-h-screen bg-[#0f0408] text-white font-sans overflow-hidden">
      {/* Vertical decorative lines */}
      <div className="absolute inset-0 z-10 flex justify-between pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-[2px] bg-yellow-600/10 h-full" />
        ))}
      </div>

      <section className="relative z-20 py-20 px-4 md:px-10">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Your Trusted Partner  
            <br />
            on the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Road to Wealth</span>
          </motion.h1>
          
          {/* <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-lg text-white/80 max-w-2xl mx-auto"
          >
            ASSTHA Financial Services provides expert guidance to help you achieve financial security and prosperity
          </motion.p> */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 max-w-7xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className={`overflow-hidden rounded-xl bg-white/5 shadow-lg backdrop-blur-lg border border-white/10 hover:border-yellow-400/30 transition-all duration-300 ${img.colSpan} ${img.rowSpan}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
          
          {/* Premium CTA Card */}
          <motion.div
            custom={7}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="col-span-2 row-span-2 items-center text-center rounded-xl bg-gradient-to-br from-yellow-900/70 to-yellow-800/90 p-8 flex flex-col justify-between shadow-2xl border border-yellow-400/20"
          >
            <div>

              <h1 className='text-3xl font-bold'>RECOGNIZED BY LIC & MDRT(USA)</h1>
            </div>

            
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to secure your financial future?</h3>
              <p className="text-yellow-100/90 mb-6">
                With 31+ years of experience, Surajit Saha and his team will create a personalized plan for your wealth creation.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 py-4 rounded-lg font-medium text-lg shadow-lg hover:shadow-yellow-500/30 transition-all"
            >
              Free Financial Consultation
            </motion.button>
          </motion.div>
          
          {/* Stats Card */}
          <motion.div
            custom={8}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="col-span-1 row-span-1 rounded-xl bg-white/5 backdrop-blur-lg p-6 border border-white/10 flex flex-col justify-center"
          >
            <div className="text-4xl font-bold text-yellow-400 mb-2">2500+</div>
            <p className="text-sm text-white/80">Clients Served</p>
          </motion.div>
          
          {/* Client Logos Mini-Card */}
          <motion.div
            custom={9}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="col-span-1 row-span-1 rounded-xl bg-white/5 backdrop-blur-lg p-4 border border-white/10 flex items-center justify-center"
          >
            <div className="text-xs uppercase tracking-widest text-white/70 text-center">
             <div className="text-4xl font-bold text-yellow-400 mb-2">160 cr+</div>
             <p className="text-sm text-white/80">SAUM</p>
            </div>
          </motion.div>
        </div>
        
        {/* Floating CTA at bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-white/70 mb-6">Know more about our services</p>
           <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => router.push('/services')}
      className="px-8 py-3 bg-transparent border-2 border-yellow-400/50 text-yellow-400 rounded-full font-medium hover:bg-yellow-400/10 transition-all"
    >
      Explore
    </motion.button>
        </motion.div>
      </section>

      <section className="bg-white py-10 px-4 text-center">
  <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-neutral-600">
    We are associated with
  </h2>

  <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
    <img src="/brand/1.png" alt="LIC Logo" className="h-16 md:h-28 object-contain" />
    <img src="/brand/2.png" alt="NJ Wealth Logo" className="h-16 md:h-28 object-contain" />
    <img src="/brand/3.png" alt="Star Health Logo" className="h-16 md:h-28 object-contain" />
    <img src="/brand/4.png" alt="ICICI Lombard Logo" className="h-16 md:h-28 object-contain" />
    <img src="/brand/niva.png" alt="Niva Bupa Logo" className="h-16 md:h-28 object-contain" />
  </div>
</section>

{/* 
      <section className="text-white px-4 md:px-10 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        
        <div>
          <h4 className="text-sm font-semibold text-white/60 tracking-wider mb-2">OUR SERVICES</h4>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Comprehensive Financial <br className="hidden md:block" /> Solutions
          </h2>
          <p className="text-white/70 mb-4">
            With over three decades of experience in wealth management, we provide tailored financial solutions to help you achieve your life goals.
          </p>
          <p className="text-white/70">
            Our approach combines deep industry knowledge with personalized attention to create strategies that grow and protect your wealth.
          </p>
          
          <div className="mt-8">
            <h5 className="font-bold mb-2">Contact Information:</h5>
            <p className="text-white/80">Email: assthafinancialservices@gmail.com</p>
            <p className="text-white/80">Phone: +91 6289005688</p>
            <p className="text-white/80">Main Office: 621, Sarat Chatterjee Road, Howrah – 711102</p>
            <p className="text-white/80">Branch Office: 143, Chandmari Road, Howrah – 711109</p>
          </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="border border-white/10 p-6 rounded-xl hover:border-yellow-500 transition-all duration-300 flex flex-col gap-4"
            >
              {service.icon}
              <h3 className="font-semibold text-lg">{service.title}</h3>
              <ArrowRight className="w-5 h-5 text-white mt-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section> */}



    <section
      className="relative bg-black bg-fixed text-white py-20 px-4 md:px-16 bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/1 (6).jpeg')",
      }}
    >
      <ServicesSection/>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/90 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Left Image with Label */}
        <div className="relative w-full rounded-xl overflow-hidden">
          <Image
            src="/img/1 (26).jpeg"
            alt="Surajit Saha"
            width={600}
            height={600}
            className="rounded-xl object-cover w-full h-full"
          />
          <div className="absolute bottom-6 left-6 bg-black text-white text-xl font-semibold p-4 rounded-lg max-w-xs">
            31+ Years of <br /> Financial Expertise
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h5 className="text-sm font-semibold tracking-wider text-white/60 mb-2">
            ABOUT SURAJIT SAHA
          </h5>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Trusted Financial Advisor
          </h2>
          <p className="text-white/70 mb-8">
            As a Corporate Club Member of LIC of India and 16-time MDRT qualifier (including 6 Court of the Table honors), 
            I bring unparalleled expertise to your financial planning needs.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-2">
              <span className="font-bold text-white/80">01.</span>
              <p className="font-semibold">Personalized Wealth Management Strategies</p>
            </div>
            <div className="flex items-start gap-2 border-t border-white/10 pt-4">
              <span className="font-bold text-white/80">02.</span>
              <p className="font-semibold">Tax-Efficient Investment Solutions</p>
            </div>
            <div className="flex items-start gap-2 border-t border-white/10 pt-4">
              <span className="font-bold text-white/80">03.</span>
              <p className="font-semibold">Comprehensive Retirement Planning</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full font-semibold shadow"
          >
            Know More About Me
          </motion.button>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="relative z-10 mt-20 grid grid-cols-2 md:grid-cols-4 text-center gap-8">
        {[
          { count: '2500', label: 'Clients' },
          { count: '31', label: 'Years Experience' },
          { count: '16', label: 'MDRT Honors' },
          { count: '6', label: 'Court of the Table' },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-6xl text-white/40 font-extrabold">{item.count}</h2>
            <p className="text-lg font-bold">{item.label}</p>
          </div>
        ))}
      </div>
    </section>

    <Testimonials/>

    <section className="relative bg-yellow-600 text-white py-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto  p-10   text-center">
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
          Reach out to <strong>ASSTHA Financial Services</strong> and let our
          experts help you manage your portfolio and LIC needs today.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="mailto:assthafinancialservices@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition"
          >
            <Mail size={18} /> Email Us
          </a>
          <a
            href="tel:6289005688"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition"
          >
            <PhoneCall size={18} /> Call Now
          </a>
        </div>
      </div>
    </section>

    {/* <section className="bg-black text-white py-16 px-4 md:px-10 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-10"> Financial Calculators</h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center mb-8">
    <div className="border border-yellow-400 py-4 px-2 rounded hover:bg-yellow-600 cursor-pointer transition">
      <p>SIP Growth</p>
    </div>
    <div className="border border-yellow-400 py-4 px-2 rounded hover:bg-yellow-600 cursor-pointer transition">
      <p>SIP Need</p>
    </div>
    <div className="border border-yellow-400 py-4 px-2 rounded hover:bg-yellow-600 cursor-pointer transition">
      <p>Plan Your Retirement</p>
    </div>
    <a
      href="https://www.sc.com/in/insurance/insurance-need-calculator/"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-yellow-400 py-4 px-2 rounded hover:bg-yellow-600 cursor-pointer transition"
    >
      <p>Insurance Need</p>
    </a>
  </div>

  <div className="space-y-4">
    <a
      href="https://www.njwealth.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-400 underline hover:text-purple-300"
    >
      Open NJ E-Wealth Account: Invest with one of India's Largest Mutual Fund Distributor
    </a>
    <br />
    <a
      href="https://www.sc.com/in/insurance/insurance-need-calculator/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-400 underline hover:text-purple-300"
    >
      https://www.sc.com/in/insurance/insurance-need-calculator/
    </a>
  </div>

  <p className="mt-6 font-semibold">Follow the links</p>
</section> */}
<SipCalculator />

    </div>
  )
}