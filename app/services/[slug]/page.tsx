'use client'

import React, { use } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params)
    const slug = resolvedParams.slug
    const title = decodeURIComponent(slug).replace(/-/g, ' ')

    return (
        <main className="min-h-screen bg-background">
            <Navigation />
            <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <Link href="/#services" className="inline-flex items-center gap-2 text-primary mb-8 hover:underline">
                    <ArrowLeft size={20} />
                    Back to Services
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
                            Comprehensive solution for {title}. Scale your business with our advanced tools and features designed specifically for modern enterprises.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                                <h3 className="text-2xl font-bold mb-4 text-foreground">Why Choose {title}?</h3>
                                <p className="text-muted-foreground mb-6">
                                    Our platform provides a seamless experience for managing your {title} needs. With real-time updates and an intuitive interface, you can focus on growing your business while we handle the technical details.
                                </p>
                                <ul className="space-y-4 text-muted-foreground">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xs">✓</div>
                                        <span>Industry-leading performance and reliability.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xs">✓</div>
                                        <span>Fully customizable to fit your business model.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square md:aspect-auto">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                                    <div className="relative w-24 h-24 overflow-hidden rounded-full border-4 border-white shadow-xl">
                                        <Image
                                            src="/PentacoreLogo.jpg"
                                            alt="PentaCore Branding"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mb-6 text-foreground">Key Benefits</h2>
                        <div className="bg-card rounded-2xl p-8 border border-border mb-12">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-muted-foreground">
                                <li className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl">
                                    <span className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(34,197,255,0.5)]" />
                                    Streamlined operations and reduced manual effort.
                                </li>
                                <li className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl">
                                    <span className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(34,197,255,0.5)]" />
                                    Increased efficiency and resource utilization.
                                </li>
                                <li className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl">
                                    <span className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(34,197,255,0.5)]" />
                                    Better customer experience and engagement.
                                </li>
                                <li className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl">
                                    <span className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(34,197,255,0.5)]" />
                                    Data-driven insights for informed decision making.
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold mb-6 text-foreground">Getting Started</h2>
                        <p className="mb-8">
                            Ready to take your business to the next level with our {title} services? Our expert team is here to guide you through every step of the implementation process.
                        </p>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </main>
    )
}
