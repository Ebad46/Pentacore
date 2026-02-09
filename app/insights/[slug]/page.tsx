'use client'

import React, { use } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, User, Share2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function InsightDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params)
    const slug = resolvedParams.slug
    const title = decodeURIComponent(slug).replace(/-/g, ' ')

    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            <div className="pt-24 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Link */}
                    <Link href="/#blog" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all">
                        <ArrowLeft size={20} />
                        Back to Insights
                    </Link>

                    {/* Article Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                                Industry Insight
                            </span>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock size={16} />
                                5 min read
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight capitalize">
                            {title}
                        </h1>

                        <div className="flex items-center justify-between py-6 border-y border-border mb-12">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                    PS
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">Pentacore Editorial</div>
                                    <div className="text-sm text-muted-foreground">Published Feb 9, 2026</div>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                <Share2 size={20} />
                                <span className="hidden sm:inline">Share</span>
                            </button>
                        </div>
                    </motion.div>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative aspect-video w-full rounded-2xl overflow-hidden mb-12 shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <div className="relative w-24 h-24 overflow-hidden rounded-full border-4 border-white shadow-lg">
                                <Image
                                    src="/PentacoreLogo.jpg"
                                    alt="Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Article Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="prose prose-lg dark:prose-invert max-w-none"
                    >
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            In today's rapidly evolving digital landscape, staying ahead of the curve is no longer optional—it's essential for survival. {title} represents a pivotal shift in how modern businesses approach their core operations and customer engagement strategies.
                        </p>

                        <h2 className="text-3xl font-bold text-foreground mb-6">Executive Summary</h2>
                        <p className="mb-8">
                            Our comprehensive analysis of the {title} trend reveals significant opportunities for optimization across various industry sectors. By leveraging advanced digital tools and data-driven insights, organizations can unlock new levels of efficiency and customer satisfaction.
                        </p>

                        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-border mb-12">
                            <h3 className="text-2xl font-bold text-foreground mb-4">Key Takeaways</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-[10px] text-white">1</div>
                                    <span className="text-muted-foreground">Digital transformation is the primary driver of competitive advantage in 2026.</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-[10px] text-white">2</div>
                                    <span className="text-muted-foreground">Customer experience personalization leads to 40% higher retention rates.</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-[10px] text-white">3</div>
                                    <span className="text-muted-foreground">Integrated systems reduce operational overhead by nearly 25%.</span>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-foreground mb-6">Strategic Implications</h2>
                        <p className="mb-8">
                            Implementation of these strategies requires a holistic approach that balances technology with human-centric design. Pentacore Solutions is at the forefront of this movement, providing the expertise and tools necessary to navigate this transition seamlessly.
                        </p>

                        <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-12">
                            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-muted-foreground italic">
                                [Generated Insight Graphic: Industry Trends for {title}]
                            </div>
                        </div>

                        <p className="mb-12">
                            As we look toward the remainder of 2026, the adoption of These frameworks will define the leaders in every category. The question is no longer whether to adapt, but how quickly you can evolve.
                        </p>
                    </motion.div>

                    {/* Footer CTA */}
                    <div className="mt-20 p-8 md:p-12 bg-primary rounded-3xl text-primary-foreground text-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500" />
                        <h3 className="text-3xl font-bold mb-4 relative z-10">Ready to transform your business?</h3>
                        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto relative z-10">
                            Let's discuss how Pentacore can help you implement these insights and take your business to the next level.
                        </p>
                        <Link href="/#contact" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all relative z-10">
                            Get Started
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
