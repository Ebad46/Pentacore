'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Zap, TrendingUp, ShieldCheck, Smartphone } from 'lucide-react'

const showcaseItems = [
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Fully responsive platform that works seamlessly across all devices for your customers.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance ensures instant order processing and real-time updates.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Scale Effortlessly',
    description: 'Handle unlimited orders and grow your business without infrastructure concerns.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: ShieldCheck,
    title: 'Bank-Level Security',
    description: 'Industry-leading encryption and security standards to protect your data.',
    color: 'from-indigo-500 to-blue-500',
  },
]

export default function InteractiveShowcase() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section id="showcase" ref={containerRef} className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features for Modern Business
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Experience the next generation of business management with cutting-edge technology and intuitive design.
          </p>
        </motion.div>

        {/* Showcase Grid */}
        <motion.div
          style={{ opacity, scale }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {showcaseItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-primary/50 transition-all duration-300 overflow-hidden h-full">
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${item.color} mb-6`}>
                      <Icon className="text-white" size={28} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>

                    {/* Description */}
                    <p className="text-slate-400 leading-relaxed">{item.description}</p>

                    {/* Animated Line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className={`mt-6 h-1 bg-gradient-to-r ${item.color} origin-left`}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  )
}
