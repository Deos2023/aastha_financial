'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'

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

const blogPosts = [
  {
    id: 1,
    title: 'Retirement Planning: Start Early, Retire Wealthy',
    excerpt: 'Learn why starting your retirement planning in your 30s can lead to significantly better outcomes and how to create a solid retirement corpus.',
    category: 'Wealth Management',
    date: 'May 15, 2024',
    readTime: '5 min read',
    image: '/img/1 (4).jpeg'
  },
  {
    id: 2,
    title: 'Understanding Tax-Saving Investments for FY 2024-25',
    excerpt: 'A comprehensive guide to Section 80C deductions and smart investment options to reduce your tax liability while building wealth.',
    category: 'Tax Planning',
    date: 'April 28, 2024',
    readTime: '7 min read',
    image: '/img/1 (10).jpeg'
  },
  {
    id: 3,
    title: 'Health Insurance: Why Young Adults Need It Too',
    excerpt: 'Debunking the myth that health insurance is only for older adults and explaining the benefits of early coverage.',
    category: 'Insurance',
    date: 'April 10, 2024',
    readTime: '4 min read',
    image: '/img/1 (14).jpeg'
  },
  {
    id: 4,
    title: 'Mutual Funds vs. ETFs: Which is Right for You?',
    excerpt: 'Comparing these popular investment vehicles to help you decide which aligns better with your financial goals and risk appetite.',
    category: 'Investments',
    date: 'March 22, 2024',
    readTime: '6 min read',
    image: '/img/1 (12).jpeg'
  },
  {
    id: 5,
    title: 'Estate Planning Essentials for Indian Families',
    excerpt: 'Protect your family\'s future by understanding wills, nominations, and succession planning in the Indian context.',
    category: 'Wealth Management',
    date: 'March 5, 2024',
    readTime: '8 min read',
    image: '/img/1 (17).jpeg'
  },
  {
    id: 6,
    title: 'The Power of SIP: Building Wealth Gradually',
    excerpt: 'How Systematic Investment Plans can help you create significant wealth through disciplined, long-term investing.',
    category: 'Investments',
    date: 'February 18, 2024',
    readTime: '5 min read',
    image: '/img/1 (31).jpeg'
  }
]

const popularCategories = [
  { name: 'Wealth Management', count: 12 },
  { name: 'Insurance', count: 8 },
  { name: 'Tax Planning', count: 10 },
  { name: 'Investments', count: 15 },
  { name: 'Retirement', count: 7 },
  { name: 'Financial Planning', count: 9 }
]

export default function BlogPage() {
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
            <h4 className="text-sm font-semibold text-yellow-400 tracking-wider mb-4">FINANCIAL INSIGHTS</h4>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Aastha <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Financial Blog</span>
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Expert advice, market trends, and financial strategies to help you make informed decisions about your money and future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 px-4 md:px-10 bg-gradient-to-b from-[#0f0408] to-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Main Blog Posts */}
            <div className="md:w-2/3">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Latest Articles</h2>
                <p className="text-white/80">
                  Fresh perspectives on financial planning and wealth management
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-12">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    custom={index}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="group bg-gradient-to-b from-white/5 to-transparent p-6 rounded-xl border border-white/10 hover:border-yellow-500 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="relative h-48 rounded-lg overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <span className="inline-block px-3 py-1 text-sm bg-yellow-600/20 text-yellow-400 rounded-full mb-3">
                          {post.category}
                        </span>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-white/80 mb-4">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-white/60">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>By Aastha Team</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <button className="mt-4 text-yellow-400 hover:text-yellow-300 font-medium flex items-center gap-2">
                          Read More <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center mt-16"
              >
                <nav className="flex items-center gap-2">
                  <button className="px-4 py-2 rounded-lg bg-yellow-600 text-white font-medium">1</button>
                  <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">2</button>
                  <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">3</button>
                  <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-1">
                    Next <ArrowRight className="w-4 h-4" />
                  </button>
                </nav>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="md:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="sticky top-8 space-y-8"
              >
                {/* Search */}
                <div className="bg-gradient-to-b from-white/5 to-transparent p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-4">Search Articles</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search topics..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 pr-10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                    <button className="absolute right-3 top-3 text-white/50 hover:text-yellow-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-gradient-to-b from-white/5 to-transparent p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {popularCategories.map((category, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex justify-between items-center py-2 border-b border-white/5 hover:text-yellow-400 transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="bg-yellow-600/20 text-yellow-400 text-xs px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Popular Posts */}
                <div className="bg-gradient-to-b from-white/5 to-transparent p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-4">Popular Reads</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post, index) => (
                      <motion.div
                        key={index}
                        custom={index}
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex gap-3 group"
                      >
                        <div className="flex-shrink-0 relative w-16 h-16 rounded-lg overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium group-hover:text-yellow-400 transition-colors">
                            {post.title.split(':')[0]}
                          </h4>
                          <div className="text-xs text-white/50 mt-1 flex items-center gap-2">
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-b from-yellow-600/10 to-transparent p-6 rounded-xl border border-yellow-500/20">
                  <h3 className="text-xl font-bold mb-2">Financial Insights</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Subscribe to receive expert financial advice directly to your inbox
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent text-sm"
                    />
                    <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg font-medium text-sm transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
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
            Need Personalized Financial Advice?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            Our experts are ready to help you create a customized financial plan
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg text-lg"
          >
            Schedule Consultation
          </motion.button>
        </div>
      </section>
    </div>
  )
}