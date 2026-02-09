'use client'

import { motion } from 'framer-motion'

const clients = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  name: `Client ${i + 1}`,
}))

export default function Clients() {
  return (
    <section id="clients" className="py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-primary font-semibold mb-2">TRUSTED BY LEADING BUSINESSES</h3>
          <h2 className="text-3xl font-bold text-foreground">
            400+ Restaurants & Businesses Worldwide
          </h2>
        </motion.div>

        {/* Scrolling Logo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="h-20 bg-background border border-border rounded-lg flex items-center justify-center cursor-pointer hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              <div className="text-center">
                <div className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">{client.name}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-3 gap-8 text-center"
        >
          {[
            { value: '400+', label: 'Active Clients' },
            { value: '50M+', label: 'Orders Processed' },
            { value: '24/7', label: 'Uptime Guarantee' },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))};
        </motion.div>
      </div>
    </section>
  )
}
