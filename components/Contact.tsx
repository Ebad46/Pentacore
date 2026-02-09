'use client'

import React from "react"

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    locations: '',
    services: [],
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        locations: '',
        services: [],
        message: '',
      })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-background">
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
            Get Started Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Contact us today and let's discuss your specific needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary-foreground" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                <p className="text-muted-foreground">+92 345-297-5578</p>
                <p className="text-sm text-muted-foreground">Available 24/7</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary-foreground" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                <p className="text-muted-foreground">hello@pentacore.com</p>
                <p className="text-sm text-muted-foreground">We respond within 2 hours</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary-foreground" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Office</h4>
                <p className="text-muted-foreground">Karachi, Pakistan</p>
                <p className="text-sm text-muted-foreground">Open Monday to Friday</p>
              </div>
            </div>

            {/* Support Options */}
            <div className="pt-8 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">Quick Support</h4>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg font-medium transition-all">
                  Live Chat
                </button>
                <button className="w-full px-4 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-all">
                  Schedule Demo
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-card rounded-xl p-8 border border-border"
          >
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-600"
              >
                ✓ Thank you for your message! We'll get back to you soon.
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="+92 300-0000000"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Your restaurant"
                />
              </div>

              {/* Locations */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Number of Locations</label>
                <select
                  name="locations"
                  value={formData.locations}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                >
                  <option value="">Select...</option>
                  <option value="1">1</option>
                  <option value="2-5">2-5</option>
                  <option value="5-10">5-10</option>
                  <option value="10+">10+</option>
                </select>
              </div>

              {/* Services */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Services Interested</label>
                <select
                  name="services"
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                >
                  <option value="">Select service...</option>
                  <option value="online-ordering">Online Ordering System</option>
                  <option value="pos">POS System</option>
                  <option value="delivery">Delivery Management</option>
                  <option value="menu-boards">Digital Menu Boards</option>
                  <option value="all">All Services</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">Additional Information</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                placeholder="Tell us about your business and what you're looking for..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50"
            >
              Send Message
            </button>

            {/* Privacy Note */}
            <p className="text-xs text-muted-foreground mt-4 text-center">
              We respect your privacy. Your information will be kept confidential.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
