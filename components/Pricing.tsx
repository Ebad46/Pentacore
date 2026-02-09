'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: 'per month',
    description: 'Perfect for small businesses starting their digital journey',
    features: [
      'Online Ordering Website',
      '10,000 unique visitors/month',
      'Basic Menu Management',
      'Email Support',
      'Basic Analytics',
      'Single Location',
    ],
    cta: 'Start 14-Days Trial',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$99',
    period: 'per month',
    description: 'For growing restaurants with multiple locations',
    features: [
      'Everything in Starter',
      'Unlimited Visitors',
      'iOS & Android App',
      'POS System',
      'Delivery Management',
      'Up to 5 Locations',
      'Priority Support',
      'Advanced Analytics',
      'Marketing Tools',
    ],
    cta: 'Start 14-Days Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored to you',
    description: 'For large businesses with unique requirements',
    features: [
      'Everything in Professional',
      'Unlimited Locations',
      'Digital Menu Boards',
      'Custom Integrations',
      'API Access',
      'Dedicated Account Manager',
      '24/7 Premium Support',
      'Custom Development',
      'White Label Options',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
]

export default function Pricing() {
  const [selectedBilling, setSelectedBilling] = useState('monthly')

  return (
    <section id="pricing" className="py-20 bg-card">
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
            Plans & Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your business. No hidden fees, no long-term contracts.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex gap-4 p-1 bg-background rounded-lg border border-border">
            <button
              onClick={() => setSelectedBilling('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                selectedBilling === 'monthly'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setSelectedBilling('yearly')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                selectedBilling === 'yearly'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-secondary/30 px-2 py-1 rounded">Save 20%</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-xl transition-all duration-300 ${
                plan.highlight
                  ? 'ring-2 ring-primary border border-primary md:scale-105'
                  : 'border border-border'
              }`}
            >
              {/* Highlight Badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card Content */}
              <div className={`p-8 h-full flex flex-col ${plan.highlight ? 'bg-card' : 'bg-background'}`}>
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all mb-8 ${
                    plan.highlight
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'border border-primary text-primary hover:bg-primary/10'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features List */}
                <div className="space-y-4 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-xl p-12 text-center border border-primary/10"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">All plans include</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['24/7 Support', 'Free Setup', 'No Hidden Fees', 'Money-Back Guarantee'].map(
              (item, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Check size={20} className="text-primary-foreground" />
                  </div>
                  <span className="font-semibold text-foreground">{item}</span>
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
