'use client'

import React, { use } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function FeatureDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params)
    const slug = resolvedParams.slug
    const title = decodeURIComponent(slug).replace(/-/g, ' ')

    return (
        <main className="min-h-screen bg-background">
            <Navigation />
            <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <Link href="/#features" className="inline-flex items-center gap-2 text-primary mb-8 hover:underline">
                    <ArrowLeft size={20} />
                    Back to Features
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm">
                            <Image
                                src="/PentacoreLogo.jpg"
                                alt="PentaCore Logo"
                                width={64}
                                height={64}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground capitalize">
                            {title}
                        </h1>
                    </div>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-xl text-muted-foreground mb-8">
                            Explore the power of {title}. Designed to give you a competitive edge in the modern marketplace.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video border-8 border-white/10">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-32 h-32 overflow-hidden rounded-full border-4 border-white shadow-2xl">
                                        <Image
                                            src="/PentacoreLogo.jpg"
                                            alt="PentaCore Feature"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold mb-6 text-foreground">Technical Innovation</h3>
                                <p className="text-muted-foreground mb-6">
                                    Our {title} feature is built on state-of-the-art technology, ensuring that your business stays ahead of the competition. We've prioritized performance, security, and user experience to deliver a tool that truly makes a difference.
                                </p>
                                <div className="p-6 bg-primary/10 rounded-2xl border border-primary/20">
                                    <div className="font-bold text-primary mb-2">Key Highlight</div>
                                    <div className="text-sm text-muted-foreground">"The transition to using {title} reduced our response times by over 50% within the first month of implementation."</div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mb-6 text-foreground">Feature Highlights</h2>
                        <div className="bg-card rounded-2xl p-8 border border-border mb-12 shadow-sm">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-muted-foreground">
                                <li className="flex flex-col gap-2">
                                    <div className="text-primary font-bold">Easy Integration</div>
                                    <p className="text-sm">Seamlessly connect with your existing workflows and tools with our robust API and plugins.</p>
                                </li>
                                <li className="flex flex-col gap-2">
                                    <div className="text-primary font-bold">Real-time Synchronization</div>
                                    <p className="text-sm">Keep your data consistent across all platforms with our instantaneous sync engine.</p>
                                </li>
                                <li className="flex flex-col gap-2">
                                    <div className="text-primary font-bold">Advanced Analytics</div>
                                    <p className="text-sm">Visualize your performance with built-in reporting and dashboard features.</p>
                                </li>
                                <li className="flex flex-col gap-2">
                                    <div className="text-primary font-bold">Cloud Security</div>
                                    <p className="text-sm">Enterprise-grade encryption and security protocols to keep your business data safe.</p>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold mb-6 text-foreground">Integration Capabilities</h2>
                        <p className="mb-12">
                            {title} is designed to work where you work. Whether you're using our standalone platform or integrating it into your custom tech stack, we provide the flexibility you need.
                        </p>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </main>
    )
}
