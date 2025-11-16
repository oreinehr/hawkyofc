'use client'

import { useState } from 'react'
import { Menu, X, Music, Zap, Mic, Volume2, Radio, Headphones, Instagram, Youtube, MessageCircle } from 'lucide-react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import About from '@/components/about'
import Portfolio from '@/components/portfolio'

import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}
