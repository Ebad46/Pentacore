'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingCart, Truck, CreditCard, Monitor, Zap, Users } from 'lucide-react'

const services = [
  {
    icon: ShoppingCart,
    title: 'Online Ordering System',
    description: 'Let customers order easily with a top-notch website and app for takeout, delivery, and dine-in.',
    color: 'from-primary to-primary/80',
  },
  {
    icon: CreditCard,
    title: 'POS & RMS',
    description: 'Simplify sales and operations with an easy-to-use system designed for modern restaurants.',
    color: 'from-primary to-primary/80',
  },
  {
    icon: Truck,
    title: 'Delivery Fleet Management',
    description: 'Track and manage deliveries with ease, real-time tracking, and route optimization.',
    color: 'from-primary to-primary/80',
  },
  {
    icon: Monitor,
    title: 'Digital Menu Boards',
    description: 'Show off your menu in style with dynamic digital displays that update in real-time.',
    color: 'from-primary to-primary/80',
  },
  {
    icon: Zap,
    title: 'Loyalty & Engagement',
    description: 'Keep customers coming back with rewards programs and personalized engagement tools.',
    color: 'from-primary to-primary/80',
  },
  {
    icon: Users,
    title: 'Self-Ordering Kiosk',
    description: 'Enhance customer convenience and speed up service with sleek self-ordering solutions.',
    color: 'from-primary to-primary/80',
  },
]

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your business with PentaCore's suite of integrated tools designed for modern restaurants and businesses.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const slug = service.title.toLowerCase().replace(/\s+/g, '-')
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.25 }}
                className="group relative"
              >
                <Link href={`/services/${slug}`} className="block h-full">
                  {/* Card */}
                  <div className="relative bg-card rounded-xl border border-border overflow-hidden h-full p-6 sm:p-8 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]">
                    {/* Gradient Background on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    {/* Icon */}
                    <div className="relative z-10">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} mb-4`}>
                        <Icon className="text-white" size={22} />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{service.title}</h3>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 text-sm sm:text-base">{service.description}</p>

                      {/* Learn More Link */}
                      <div className="flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Learn more</span>
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
