'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import ThemeSwitch from '@/components/theme-switch'

const navigationLinks = {
  main: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Team' },
    { href: '/sponsor', label: 'Sponsor Us' },
  ],
  initiatives: [
    { href: 'http://cubstart.com', label: 'Cubstart' },
    { href: 'https://ai.hackberkeley.org/', label: 'UC Berkeley AI Hackathon' },
  ],
  featured: {
    href: 'https://ai.hackberkeley.org/',
    label: 'AI Hackathon 2025'
  }
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isInitiativesOpen, setIsInitiativesOpen] = useState(false)
  const initiativesRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const isActive = (path: string) => pathname === path

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  // Close initiatives dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (initiativesRef.current && !initiativesRef.current.contains(event.target as Node)) {
        setIsInitiativesOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="relative w-full px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo/logo.webp"
            alt="Hackathons at Berkeley Logo"
            width={200}
            height={50}
            className="h-12 w-auto transition-transform duration-300 hover:scale-105 dark:brightness-[1.15] dark:contrast-[1.1]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between flex-1 pl-12">
          {/* Left side navigation */}
          <div className="flex space-x-10">
            {navigationLinks.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-lg font-bold transition-colors duration-200
                  ${isActive(item.href) 
                    ? 'text-primary dark:text-primary/90' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary/90'
                  }
                  group
                `}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-full h-[3px] bg-primary dark:bg-primary/90 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100 rounded-full
                  ${isActive(item.href) ? 'scale-x-100' : ''}`} 
                />
              </Link>
            ))}
          </div>

          {/* Right side navigation */}
          <div className="flex items-center space-x-10">
            <Link
              href={navigationLinks.featured.href}
              className="text-lg font-bold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary/90 transition-colors duration-200 relative group"
            >
              {navigationLinks.featured.label}
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-primary dark:bg-primary/90 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100 rounded-full" />
            </Link>
            <div className="relative" ref={initiativesRef}>
              <button 
                className={`text-lg font-bold ${isInitiativesOpen ? 'text-primary dark:text-primary/90' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary/90'} transition-colors duration-200 py-2 relative flex items-center`}
                onClick={() => setIsInitiativesOpen(!isInitiativesOpen)}
                aria-expanded={isInitiativesOpen}
                aria-haspopup="true"
              >
                Our Initiatives
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isInitiativesOpen ? 'rotate-180' : ''}`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className={`absolute -bottom-1 left-0 w-full h-[3px] bg-primary dark:bg-primary/90 transform origin-left transition-transform duration-300 ${isInitiativesOpen ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'} rounded-full`} />
              </button>
              {isInitiativesOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow-lg dark:shadow-gray-900/30 z-10">
                  {navigationLinks.initiatives.map((item) => (
                    <a 
                      key={item.href}
                      href={item.href} 
                      className="block px-4 py-3 text-base font-bold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary/90 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <ThemeSwitch />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary/90 transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 shadow-lg dark:shadow-gray-900/30 md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              {navigationLinks.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-bold ${
                    isActive(item.href) 
                      ? 'text-primary dark:text-primary/90' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary/90'
                  } transition-colors duration-200`}
                >
                  {item.label}
                </Link>
              ))}
              <hr className="border-gray-100 dark:border-gray-700" />
              <Link
                href={navigationLinks.featured.href}
                className="text-lg font-bold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary/90 transition-colors duration-200"
              >
                {navigationLinks.featured.label}
              </Link>
              {navigationLinks.initiatives.map((item) => (
                <a 
                  key={item.href}
                  href={item.href}
                  className="text-lg font-bold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary/90 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <ThemeSwitch />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 