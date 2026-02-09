'use client'

import React from "react"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ScrollAnimationsProps {
  children: React.ReactNode
  type?: 'fade' | 'slide' | 'scale' | 'rotate'
}

export function FadeInOnScroll({ children }: ScrollAnimationsProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <motion.div ref={ref} style={{ opacity }}>
      {children}
    </motion.div>
  )
}

export function SlideInOnScroll({ children }: ScrollAnimationsProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  const x = useTransform(scrollYProgress, [0, 1], [-100, 0])

  return (
    <motion.div ref={ref} style={{ x }}>
      {children}
    </motion.div>
  )
}

export function ScaleInOnScroll({ children }: ScrollAnimationsProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div ref={ref} style={{ scale, opacity }}>
      {children}
    </motion.div>
  )
}

export function ParallaxScroll({ children }: ScrollAnimationsProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  )
}

export function RotateInOnScroll({ children }: ScrollAnimationsProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div ref={ref} style={{ rotate, opacity }}>
      {children}
    </motion.div>
  )
}
