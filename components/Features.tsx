'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, Settings, Globe, BarChart3, Lock, Clock } from 'lucide-react'

const features = [
  {
    icon: CheckCircle2,
    title: 'Easy to Setup',
    description: 'No programming required. Get your online store up and running within minutes.',
  },
  {
    icon: Settings,
    title: 'Advanced Features',
    description: 'Branch management, menu management, delivery zones, and marketing tools included.',
  },
  {
    icon: Globe,
    title: 'SEO Friendly',
    description: 'Our system puts your restaurant on top search results so customers can find you easily.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Intelligence',
    description: 'Access valuable data for every order and get insights to grow your business.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Your data is protected with industry-leading security standards and encryption.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Our award-winning support team is always available to help you succeed.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What You Get with PentaCore
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Everything you need to scale your business, all in one powerful platform.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const slug = feature.title.toLowerCase().replace(/\s+/g, '-')
            return (
              <Link key={index} href={`/features/${slug}`} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] h-full"
                >
                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary to-secondary mb-4">
                    <Icon className="text-primary-foreground" size={24} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              </Link>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-12 bg-slate-900 rounded-xl border border-primary/50 shadow-2xl shadow-primary/10 text-center relative overflow-hidden"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Join hundreds of successful restaurants and businesses that are already using PentaCore to grow their revenue and improve customer satisfaction.
          </p>
          <Link href="#contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50">
            Start Free Trial
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
