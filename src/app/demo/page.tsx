"use client";

import React, { useEffect } from "react";
import Script from "next/script";
// import { ChevronDown, Twitter, Github, Linkedin } from "lucide-react";

export default function Demo() {
    useEffect(() => {
        // Add scroll-smooth dynamically without interfering with layout
        document.documentElement.classList.add('scroll-smooth');

        const randomColors = (count: number) => {
            return new Array(count)
                .fill(0)
                .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
        };

        let appInstance: any = null;
        let isMounted = true;

        async function initTubes() {
            const canvas = document.getElementById('tubes-canvas');
            if (!canvas) return;

            try {
                // @ts-ignore
                const module = await import(/* webpackIgnore: true */ 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js');
                if (!isMounted) return;

                const TubesCursor = module.default;

                appInstance = TubesCursor(canvas, {
                    tubes: {
                        colors: ["#00d9ff", "#0088ff", "#111827"],
                        lights: {
                            intensity: 400,
                            colors: ["#00d9ff", "#0044ff", "#00ffff", "#ffffff"]
                        }
                    }
                });

            } catch (error) {
                console.error("Failed to load TubesCursor:", error);
            }
        }

        initTubes();

        const handleBodyClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Only randomize if we didn't click a link or button
            if (target.closest('a') || target.closest('button')) return;

            const colors = randomColors(3);
            const lightsColors = randomColors(4);

            if (appInstance && appInstance.tubes) {
                appInstance.tubes.setColors(colors);
                appInstance.tubes.setLightsColors(lightsColors);
            }
        };

        document.body.addEventListener('click', handleBodyClick);

        return () => {
            isMounted = false;
            document.documentElement.classList.remove('scroll-smooth');
            document.body.removeEventListener('click', handleBodyClick);
            if (appInstance && typeof appInstance.destroy === 'function') {
                appInstance.destroy();
            }
        };
    }, []);

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-[#0a0a0a] text-white" style={{ fontFamily: "'Satoshi', sans-serif" }}>
            <Script src="https://cdn.tailwindcss.com" />
            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://api.fontshare.com/v2/css?f[]=clash-grotesk@700,600&f[]=satoshi@400,500,700&display=swap');

                h1, h2, h3 {
                    font-family: 'Clash Grotesk', sans-serif;
                }

                .glass-card {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
                }

                .glass-card:hover {
                    background: rgba(255, 255, 255, 0.07);
                    border-color: rgba(255, 255, 255, 0.2);
                    transform: translateY(-8px);
                }

                .neon-border-cyan:hover {
                    box-shadow: 0 0 25px -5px rgba(0, 217, 255, 0.4);
                    border-color: #00d9ff;
                }

                .neon-border-green:hover {
                    box-shadow: 0 0 25px -5px rgba(83, 188, 40, 0.4);
                    border-color: #53bc28;
                }

                .neon-border-purple:hover {
                    box-shadow: 0 0 25px -5px rgba(105, 88, 213, 0.4);
                    border-color: #6958d5;
                }

                canvas#tubes-canvas {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                    pointer-events: auto;
                }

                .text-glow-cyan {
                    text-shadow: 0 0 15px rgba(0, 217, 255, 0.6);
                }

                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />

            {/* Interactive 3D Background */}
            <canvas id="tubes-canvas"></canvas>

            {/* Content Overlay */}
            <div className="relative z-10">

                {/* Nav */}
                <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-end items-center bg-transparent">
                    <div className="flex gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
                        <a href="#hero" id="nav-home" className="hover:text-white transition-colors">Hero</a>
                        <a href="#projects" id="nav-projects" className="hover:text-white transition-colors">Projects</a>
                        <a href="#contact" id="nav-contact" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </nav>

                {/* Hero Section */}
                <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
                    <div className="max-w-4xl animate-fade-in-up flex flex-col items-center">
                        <h1 className="text-7xl md:text-9xl font-bold uppercase tracking-tighter leading-none mb-6 text-glow-cyan">
                            Creative<br /><span className="text-[#00d9ff]">Developer</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-10">
                            Building immersive 3D experiences at the intersection of design and code. Click anywhere to shift the neon spectrum.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <a href="#projects" id="hero-cta-primary" className="px-8 py-4 bg-[#00d9ff] text-black font-bold uppercase tracking-wider rounded-full hover:scale-105 transition-transform">
                                View Projects
                            </a>
                            <a href="#contact" id="hero-cta-secondary" className="px-8 py-4 border border-white/20 backdrop-blur-md rounded-full uppercase tracking-wider hover:bg-white/10 transition-colors">
                                Get in Touch
                            </a>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                        {/* <ChevronDown className="w-8 h-8 text-white/30" /> */}
                    </div>
                </section>

                {/* Projects Grid */}
                <section id="projects" className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">Featured Cases</h2>
                            <p className="text-white/50 uppercase tracking-widest text-sm">Selected work from 2023-2024</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="h-[1px] w-24 bg-white/20 mb-2 hidden md:block"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <a href="#" id="project-card-1" className="glass-card neon-border-cyan p-6 rounded-3xl group flex flex-col h-full">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-white/5">
                                <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800" alt="Cyber City" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            <div className="mt-auto">
                                <div className="flex gap-2 mb-3">
                                    <span className="text-[10px] uppercase tracking-widest px-2 py-1 border border-white/10 rounded-full">Three.js</span>
                                    <span className="text-[10px] uppercase tracking-widest px-2 py-1 border border-[#00d9ff]/30 text-[#00d9ff] rounded-full">WebGpu</span>
                                </div>
                                <h3 className="text-2xl font-bold uppercase tracking-tight">Neon Nexus</h3>
                                <p className="text-white/50 text-sm mt-2 line-clamp-2">A high-fidelity spatial exploration engine built for future urban planners.</p>
                            </div>
                        </a>

                        {/* Card 2 */}
                        <a href="#" id="project-card-2" className="glass-card neon-border-green p-6 rounded-3xl group flex flex-col h-full">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-white/5">
                                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" alt="Abstract Flows" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            <div className="mt-auto">
                                <div className="flex gap-2 mb-3">
                                    <span className="text-[10px] uppercase tracking-widest px-2 py-1 border border-white/10 rounded-full">React</span>
                                    <span className="text-[10px] uppercase tracking-widest px-2 py-1 border border-[#53bc28]/30 text-[#53bc28] rounded-full">GLSL</span>
                                </div>
                                <h3 className="text-2xl font-bold uppercase tracking-tight">Bio-Synth</h3>
                                <p className="text-white/50 text-sm mt-2 line-clamp-2">Interactive generative art platform exploring organic patterns through algorithms.</p>
                            </div>
                        </a>

                        {/* Card 3 */}
                        <a href="#" id="project-card-3" className="glass-card neon-border-purple p-6 rounded-3xl group flex flex-col h-full">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-white/5">
                                <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800" alt="Data Viz" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            <div className="mt-auto">
                                <div className="flex gap-2 mb-3">
                                    <span className="text-[10px] uppercase tracking-widest px-2 py-1 border border-white/10 rounded-full">D3.js</span>
                                    <span className="text-[10px] uppercase tracking-widest px-2 py-1 border border-[#6958d5]/30 text-[#6958d5] rounded-full">Next.js</span>
                                </div>
                                <h3 className="text-2xl font-bold uppercase tracking-tight">Flow State</h3>
                                <p className="text-white/50 text-sm mt-2 line-clamp-2">Visualizing real-time global financial transactions as a liquid ecosystem.</p>
                            </div>
                        </a>
                    </div>
                </section>

                {/* Footer */}
                <footer id="contact" className="py-24 px-6 md:px-12 bg-black/50 backdrop-blur-3xl">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                        <div className="max-w-md">
                            <h2 className="text-5xl font-bold uppercase tracking-tighter mb-6">Ready to<br />Illuminate?</h2>
                            <p className="text-white/50 mb-8">Let's create something that breaks the rules of typical interface design. Open for collaboration 2024.</p>
                            <a href="mailto:hello@tubefolio.io" id="footer-email" className="text-2xl font-medium border-b-2 border-[#00d9ff] pb-1 hover:text-[#00d9ff] transition-colors">
                                hello@tubefolio.io
                            </a>
                        </div>

                        {/* <div className="flex flex-col gap-4">
                            <span className="text-xs uppercase tracking-[0.3em] text-white/30 mb-2">Socials</span>
                            <a href="#" id="social-twitter" className="flex items-center gap-2 hover:text-[#53bc28] transition-colors group uppercase tracking-widest text-sm">
                                <Twitter className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Twitter / X
                            </a>
                            <a href="#" id="social-github" className="flex items-center gap-2 hover:text-[#00d9ff] transition-colors group uppercase tracking-widest text-sm">
                                <Github className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Github
                            </a>
                            <a href="#" id="social-linkedin" className="flex items-center gap-2 hover:text-[#6958d5] transition-colors group uppercase tracking-widest text-sm">
                                <Linkedin className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> LinkedIn
                            </a>
                        </div> */}
                    </div>

                    <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-widest text-white/20">
                        <p>© 2024 Tubefolio. All rights reserved.</p>
                        <p>Built with Neon Energy</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}