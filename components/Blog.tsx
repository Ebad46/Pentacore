'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const blogPosts = [
  {
    id: 1,
    title: 'Top Karachi\'s Restaurant Owners Come Together for Competition Beyond the Kitchen',
    excerpt:
      'In a city where restaurant owners rarely step away from daily demands, PentaCore brought a unique opportunity for leaders across the food industry to gather in Karachi...',
    date: 'January 29, 2026',
    category: 'Industry News',
    image: '📰',
  },
  {
    id: 2,
    title: 'The Future of AI in Delivery Management Software',
    excerpt:
      'For modern food & beverage brands, delivery is no longer just about getting food from point A to point B. It\'s about speed, accuracy, and customer experience...',
    date: 'January 21, 2026',
    category: 'Technology',
    image: '🤖',
  },
  {
    id: 3,
    title: 'Restaurant Marketing Automation: How to Turn First-Time Orders into Loyal Customers',
    excerpt:
      'If you own a restaurant, you already know this problem: Customers place one online order… and never come back. Food costs are rising, and customer loyalty is harder than ever...',
    date: 'January 1, 2026',
    category: 'Marketing',
    image: '📊',
  },
]

export default function Blog() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Latest Updates & Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Stay informed with the latest trends in restaurant technology and business growth strategies.
            </p>
          </div>
          <motion.a
            whileHover={{ x: 5 }}
            href="#"
            className="mt-6 md:mt-0 flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Articles
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/insights/${post.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '')}`}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer flex flex-col h-full"
              >
                {/* Image Placeholder */}
                <div className="relative w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <div className="relative w-16 h-16 overflow-hidden rounded-full border-2 border-white/50">
                      <Image src="/PentacoreLogo.jpg" alt="Logo" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="text-6xl relative z-10">{post.image}</div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">{post.excerpt}</p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto">
                    <span>Read Article</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl border border-primary/20 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Get weekly insights on restaurant management, technology trends, and business growth strategies delivered to your inbox.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
