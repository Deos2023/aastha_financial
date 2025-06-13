'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Grid } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  const navItems = ['Home', 'About', 'Services', 'Moments', 'Contact']

  return (
    <header
      style={{
        fontFamily: 'var(--font-oswald)',
      }}
      className="bg-[#0f0408] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10  ">
        <div className="flex justify-between items-center">
          {/* Nav Links */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => {
              const path = item.toLowerCase()
              const isActive = pathname === `/${path}` || (pathname === '/' && path === 'home')
              return (
                <Link
                  key={item}
                  href={`/${path === 'home' ? '' : path}`}
                  className={`relative text-sm font-semibold ${
                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white rounded" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Logo */}
          <div className="flex-shrink-0 sm:-ml-20 py-5 items-center">
  <Image
    src="/alogo.png"
    alt="Logo"
    width={120}
    height={120}
    className="w-32  sm:w-44 md:w-60 h-auto"
    priority
  />

  <span className='-ml-3 hidden sm:block'>
    A Service hub of Trust, Honesty & Acceptability
  </span>
</div>


          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Grid className="w-5 h-5 hidden md:inline-block" />
            <Link
              href="tel:6289005688"
              className="border border-white text-xs px-4 py-2 rounded-full hidden md:block"
            >
              Call - 6289005688
            </Link>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-white/10 px-4 pb-4 space-y-4">
          <nav className="flex flex-col space-y-4 pt-4">
            {navItems.map((item) => {
              const path = item.toLowerCase()
              const isActive = pathname === `/${path}` || (pathname === '/' && path === 'home')
              return (
                <Link
                  key={item}
                  href={`/${path === 'home' ? '' : path}`}
                  className={`text-sm font-medium ${
                    isActive ? 'text-white underline' : 'text-white/70'
                  }`}
                >
                  {item}
                </Link>
              )
            })}
          </nav>
          <Link
            href="tel:6289005688"
            className="mt-4 inline-block text-center border border-white text-sm px-4 py-2 rounded-full w-full"
          >
            Call - 6289005688
          </Link>
        </div>
      )}
    </header>
  )
}
