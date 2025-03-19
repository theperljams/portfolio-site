"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
  ]

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-pink-100/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#FF69B4] to-[#FF1493] 
                flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-xl">PH</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link text-sm font-medium ${
                  pathname === href ? 'text-[#FF69B4]' : ''
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="mailto:pearl.k.hulbert@gmail.com" // Update with your actual email address
              className="btn-primary text-sm"
            >
              Get in Touch
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors"
          >
            <span className="sr-only">Menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
        <div className="px-4 py-2 space-y-1 bg-white border-t border-pink-100/50">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === href 
                  ? 'text-[#FF69B4] bg-pink-50' 
                  : 'text-gray-600 hover:text-[#FF69B4] hover:bg-pink-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href="mailto:pearl.k.hulbert@gmail.com" // Update with your actual email address
            className="block px-4 py-2 mt-2 text-sm font-medium text-white bg-[#FF69B4] rounded-lg hover:bg-[#FF1493] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Email Me
          </a>
        </div>
      </div>
    </nav>
  )
}