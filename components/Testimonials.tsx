'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Miss Mahnoor',
    role: 'CEO Bigbash',
    quote:
      'We have been using PentaCore for past 3 months now and it has been an amazing experience. Our sales have increased and customers have a very easy and friendly way to order. The dashboard is very convenient to use and provides detailed insights.',
    rating: 5,
    image: '👨‍💼',
  },
  {
    name: 'Athar Chawla',
    role: 'CEO Tao Panasian',
    quote:
      'Restaurant scenario after COVID-19 is a totally different world. You cannot service without having your own Online Ordering System. PentaCore has really streamlined our delivery and pickup service. I strongly recommend it.',
    rating: 5,
    image: '👨‍💼',
  },
  {
    name: 'Shayaan Tahir',
    role: 'CEO HomeShopping & Chips',
    quote:
      'PentaCore helped us begin our journey to digital transformation and we are very excited to be partnering up with them. What we loved was the turnaround time in which they got our website up and running.',
    rating: 5,
    image: '👨‍💼',
  },
  {
    name: 'Ahsan Khanani',
    role: 'Brooklyn Pizza',
    quote:
      'Best part about using PentaCore is their customer support system. The team is always readily available to solve any issues, and they are constantly innovating. The dashboard is very detailed.',
    rating: 5,
    image: '👨‍💼',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background">
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join over 400+ successful businesses that trust PentaCore to power their operations.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Quote Icon & Rating */}
              <div className="flex items-start justify-between mb-4">
                <svg className="w-8 h-8 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.021-5-7-5S0 3.75 0 5v8c0 6 2 7 7 7z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4.021-5-7-5S8 3.75 8 5v8c0 6 2 7 7 7z" />
                </svg>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">{testimonial.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clients Logos Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-border"
        >
          <h3 className="text-center text-muted-foreground font-semibold mb-8">Trusted by leading businesses</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-32 h-16 bg-muted/30 rounded-lg border border-border flex items-center justify-center text-muted-foreground font-semibold"
              >
                Client {i + 1}
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}
