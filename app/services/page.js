'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import {
  PieChart,
  Briefcase,
  HeartPulse,
  Globe,
  Home,
  Users,
  FileText,
  RefreshCcw,
  Banknote,
  PhoneCall,
  BadgeCheck,
  Smile,
  Landmark,
  UserPlus,
  FolderKanban,
  FileSignature,
  FileMinus,
  FileCheck,
  DollarSign,
  Shield,
  BarChart2,
  ArrowRight,
  Globe2,
} from 'lucide-react'
import Testimonials from '../component/Testimonials'


const serviceCategories = [
  {
    title: 'Wealth Management',
    icon: <DollarSign className="w-10 h-10 text-yellow-500" />,
    services: [
      'Retirement Planning',
      'Mutual Fund Investments',
      'Portfolio Management',
      'Tax Planning Strategies',
      'Virtual Estate Planning',
      'Child Education Plans',
    ],
    description: 'Comprehensive strategies to grow and protect your wealth through all life stages'
  },
  {
    title: 'Insurance Solutions',
    icon: <Shield className="w-10 h-10 text-yellow-500" />,
    services: [
      'Life Insurance Plans',
      'Health Insurance',
      'Term Insurance',
      
      
    ],
    description: 'Tailored protection plans to secure your family\'s financial future'
  },
  {
    title: 'Investment Advisory',
    icon: <BarChart2 className="w-10 h-10 text-yellow-500" />,
    services: [
      'Equity Investments',
      'Debt Instruments',
      'Systematic Investment Plans',
      'Risk Profiling'
    ],
    description: 'Expert guidance to build and optimize your investment portfolio'
  }
]

const specializedServices = [
  // Existing Special Services
  {
    title: 'Retirement Planning',
    icon: <PieChart className="w-8 h-8 text-yellow-500" />,
    description: 'Customized plans to ensure financial independence in your golden years',
  },
  {
    title: 'Tax Saving Solutions',
    icon: <Briefcase className="w-8 h-8 text-yellow-500" />,
    description: 'Strategies to minimize tax liabilities while maximizing returns',
  },
  {
    title: 'Health Insurance',
    icon: <HeartPulse className="w-8 h-8 text-yellow-500" />,
    description: 'Comprehensive medical coverage for you and your family',
  },
  {
    title: 'NRI Investment Services',
    icon: <Globe className="w-8 h-8 text-yellow-500" />,
    description: 'Specialized financial solutions for Non-Resident Indians',
  },
  // {
  //   title: 'Home Loan Advisory',
  //   icon: <Home className="w-8 h-8 text-yellow-500" />,
  //   description: 'Expert guidance on home financing and mortgage solutions',
  // },
  {
    title: 'Child Future Planning',
    icon: <Briefcase className="w-8 h-8 text-yellow-500" />,
    description: 'Secure your child\'s education and future aspirations',
  },

  // Special Services from banner
  {
    title: 'Financial Advisory',
    icon: <Users className="w-8 h-8 text-yellow-500" />,
    description: 'Expert financial advice tailored to your goals',
  },
  {
    title: 'Need Analysis',
    icon: <FileText className="w-8 h-8 text-yellow-500" />,
    description: 'Detailed assessment to match financial products to your needs',
  },
  {
    title: 'Portfolio Management',
    icon: <FolderKanban className="w-8 h-8 text-yellow-500" />,
    description: 'Strategic asset allocation and tracking',
  },
  // {
  //   title: 'Claim Settlement',
  //   icon: <FileCheck className="w-8 h-8 text-yellow-500" />,
  //   description: 'Hassle-free assistance in insurance claim processing',
  // },

  // LIC Policy Holder Services
  // {
  //   title: 'Premium Collection',
  //   icon: <Banknote className="w-8 h-8 text-yellow-500" />,
  //   description: 'Easy and timely premium payment options',
  // },
  // {
  //   title: 'Nomination Change',
  //   icon: <UserPlus className="w-8 h-8 text-yellow-500" />,
  //   description: 'Quick nomination update services',
  // },
  {
    title: 'Loan ',
    icon: <Landmark className="w-8 h-8 text-yellow-500" />,
    description: 'Loan facilities against life insurance policies ............................ Loan against Mutual Funds',
  },
  // {
  //   title: 'Revival of Policy',
  //   icon: <RefreshCcw className="w-8 h-8 text-yellow-500" />,
  //   description: 'Assistance to reinstate lapsed policies',
  // },
  // {
  //   title: 'Bank Details Updation',
  //   icon: <Banknote className="w-8 h-8 text-yellow-500" />,
  //   description: 'Update your banking info for seamless transactions',
  // },
  {
    title: 'Contact Details Updation',
    icon: <PhoneCall className="w-8 h-8 text-yellow-500" />,
    description: 'Keep your contact info up to date with LIC',
  },
  {
    title: 'KYC Updation',
    icon: <BadgeCheck className="w-8 h-8 text-yellow-500" />,
    description: 'Update your KYC to comply with regulations',
  },
  // {
  //   title: 'Maturity Claim',
  //   icon: <FileSignature className="w-8 h-8 text-yellow-500" />,
  //   description: 'Guided assistance to receive your maturity amount',
  // },
  // {
  //   title: 'Money Back',
  //   icon: <Smile className="w-8 h-8 text-yellow-500" />,
  //   description: 'Timely money-back payouts from eligible policies',
  // },
  // {
  //   title: 'Death Claim',
  //   icon: <FileMinus className="w-8 h-8 text-yellow-500" />,
  //   description: 'Compassionate help with death claim processing',
  // },
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery Consultation',
    description: 'We begin by understanding your financial goals, risk appetite, and current situation'
  },
  {
    step: '02',
    title: 'Financial Assessment',
    description: 'Comprehensive analysis of your current financial health and future needs'
  },
  {
    step: '03',
    title: 'Strategy Development',
    description: 'Customized plan creation tailored to your specific objectives'
  },
  {
    step: '04',
    title: 'Implementation',
    description: 'Execution of the financial plan with proper documentation'
  },
  {
    step: '05',
    title: 'Regular Review',
    description: 'Ongoing monitoring and adjustments to keep you on track'
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

export default function ServicesPage() {
  const router = useRouter();
  return (
    <div style={{ fontFamily: 'var(--font-oswald)' }} className="relative bg-[#0f0408] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 px-4 md:px-10">
        {/* Background decorative elements */}
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
            <h4 className="text-sm font-semibold text-yellow-400 tracking-wider mb-4">OUR OFFERINGS</h4>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Financial Solutions</span>
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              With 31+ years of expertise, ASSTHA Financial Services provides tailored financial strategies to help you achieve your life goals and secure your future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 md:px-10 bg-gradient-to-b from-[#0f0408] to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h4 className="text-sm font-semibold text-yellow-400 tracking-wider mb-4">WHAT WE OFFER</h4>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Service Categories</h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              Holistic financial solutions covering all aspects of wealth creation, protection, and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
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
                  {category.icon}
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                <p className="text-white/80 mb-6">{category.description}</p>
                <ul className="space-y-2 mb-6">
                  {category.services.map((service, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span className="text-white/90">{service}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg font-medium mt-4 transition-all"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 px-4 md:px-10 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h4 className="text-sm font-semibold text-yellow-400 tracking-wider mb-4">SPECIALIZED SOLUTIONS</h4>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Tailored Financial Services</h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              Customized approaches to address your unique financial needs and circumstances
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedServices.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gradient-to-b from-white/5 to-transparent p-6 rounded-xl border border-white/10 hover:border-yellow-500 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-white/80 mb-4">{service.description}</p>
                <button onClick={() => router.push('/blog')} className="text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center gap-2">
                  Explore  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 md:px-10 bg-[#0f0408]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h4 className="text-sm font-semibold text-yellow-400 tracking-wider mb-4">HOW WE WORK</h4>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Client-Centric Process</h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              A structured approach to ensure your financial plan is comprehensive and perfectly aligned with your goals
            </p>
          </motion.div>

          <div className="relative">
            {/* Process line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-yellow-600/30 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center`}
                >
                  <div className={`w-full md:w-1/2 p-6 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="text-yellow-400 font-bold text-lg mb-2">{step.step}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-white/80">{step.description}</p>
                  </div>
                  
                  <div className="hidden md:flex w-1/2 justify-center">
                    <div className="relative">
                      <div className="w-6 h-6 rounded-full bg-yellow-600 border-4 border-yellow-900 z-10"></div>
                      {index !== processSteps.length - 1 && (
                        <div className="absolute top-6 left-1/2 w-0.5 h-16 bg-yellow-600/50 transform -translate-x-1/2"></div>
                      )}
                    </div>
                  </div>
                  
                  {/* Mobile dot */}
                  <div className="md:hidden absolute left-0 top-6 -ml-3 flex h-6 w-6 items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-yellow-600 border-2 border-yellow-900"></div>
                  </div>
                  
                  <div className="w-full md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 md:px-10 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h4 className="text-sm font-semibold text-yellow-400 tracking-wider mb-4">OUR DIFFERENCE</h4>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose ASSTHA Financial Services</h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              What sets us apart in delivering exceptional financial advisory services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="/img/1 (32).jpeg"
                alt="Financial Advisor Meeting"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-600 text-black p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">31+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="bg-yellow-600/20 p-3 rounded-lg">
                  <Shield className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Trusted Advisor</h3>
                  <p className="text-white/80">Corporate Club Member of LIC of India with 16 MDRT qualifications</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-yellow-600/20 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Client-First Approach</h3>
                  <p className="text-white/80">2500+ satisfied clients with customized financial solutions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-yellow-600/20 p-3 rounded-lg">
                  <Globe2 className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Global Perspective</h3>
                  <p className="text-white/80">International experience from MDRT conferences worldwide</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-yellow-600/20 p-3 rounded-lg">
                  <PieChart className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Holistic Planning</h3>
                  <p className="text-white/80">Comprehensive strategies covering all financial aspects</p>
                </div>
              </div>
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
            Ready to Transform Your Financial Future?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            Schedule a free consultation with our experts to discuss your financial goals
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg text-lg"
          >
            Book Your Appointment
          </motion.button>
        </div>
      </section>
    </div>
  )
}