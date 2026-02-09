'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import Hero3D from '@/components/Hero3D'
import Services from '@/components/Services'
import Features from '@/components/Features'
import InteractiveShowcase from '@/components/InteractiveShowcase'
import Clients from '@/components/Clients'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero3D />
      <Services />
      <Features />
      <InteractiveShowcase />
      <Clients />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </main >
  )
}
