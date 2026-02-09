'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [navStyle, setNavStyle] = useState<'default' | 'blue'>('default')

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services')
      const featuresSection = document.getElementById('features')
      const showcaseSection = document.getElementById('showcase')
      const clientsSection = document.getElementById('clients')

      const scrollY = window.scrollY + 100 // Offset for trigger point

      if (servicesSection && featuresSection && showcaseSection && clientsSection) {
        if (scrollY < servicesSection.offsetTop) {
          setNavStyle('default') // Hero
        } else if (scrollY < featuresSection.offsetTop) {
          setNavStyle('blue') // Services
        } else if (scrollY < showcaseSection.offsetTop) {
          setNavStyle('default') // Features
        } else if (scrollY < clientsSection.offsetTop) {
          setNavStyle('default') // Showcase
        } else if (scrollY < clientsSection.offsetTop + clientsSection.offsetHeight) {
          setNavStyle('blue') // Clients
        } else {
          setNavStyle('blue') // After Clients (Testimonials, etc.)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (hash: string) => {
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Features', href: '#features' },
    { label: 'Clients', href: '#clients' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  const textColorClass = navStyle === 'blue' ? 'text-white' : 'text-foreground'
  const bgColorClass = navStyle === 'blue' ? 'bg-[#0F172A]' : 'bg-background/80'

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b border-border transition-colors duration-300 ${bgColorClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
            >
              <div className="relative w-10 h-10 overflow-hidden rounded-full">
                <Image
                  src="/PentacoreLogo.jpg"
                  alt="Pentacore Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className={`font-bold text-xl hidden sm:inline transition-colors duration-300 ${textColorClass}`}>
                Pentacore Solutions
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(item.href)
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`transition-colors text-sm font-medium ${textColorClass} hover:text-primary`}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex gap-4"
          >
            <button
              onClick={() => scrollTo('#contact')}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${textColorClass}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 pt-2 border-t border-border"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  setIsOpen(false)
                  scrollTo(item.href)
                }}
                className={`block px-4 py-2 hover:bg-secondary/20 rounded transition-colors ${textColorClass}`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false)
                scrollTo('#contact')
              }}
              className="w-full mt-4 mx-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
