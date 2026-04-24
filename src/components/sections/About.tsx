"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Noise from "@/components/ui/Noise";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={sectionRef} id="about" className="py-24 md:py-40 relative bg-black overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">
              A modern tech firm<br />
              <span className="text-white/40">for visionary brands</span>
            </h2>
            <div className="space-y-6 text-base sm:text-lg text-white/60 font-light leading-relaxed mb-12">
              <p>
                We started Pentacore with a clear mandate: to architect high-end digital solutions that actively drive scale without the friction of bloated traditional agencies.
              </p>
              <p>
                By combining bespoke web development, scalable mobile app architectures, and deeply integrated AI automation, we create resilient ecosystems that empower your business from the inside out.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring" }}>
                <h4 className="text-4xl sm:text-5xl font-bold text-white mb-2">50+</h4>
                <p className="text-xs sm:text-sm text-white/50 uppercase tracking-widest font-medium">Deployments</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring" }}>
                <h4 className="text-4xl sm:text-5xl font-bold text-white mb-2">3x</h4>
                <p className="text-xs sm:text-sm text-white/50 uppercase tracking-widest font-medium">Average ROI</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Visual Side - Parallax Graphic */}
          <motion.div
            style={{ y: y1 }}
            className="order-1 lg:order-2 relative w-full h-[400px] sm:h-[500px] lg:h-[600px] perspective-1000"
          >
            <div className="w-full h-full rounded-3xl overflow-hidden bg-zinc-950/80 border border-white/10 relative shadow-2xl backdrop-blur-3xl transform preserve-3d group">
              <Noise />
              <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-purple-600/10 transition-colors duration-1000 z-0 " />

              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 sm:p-12">

                {/* Abstract System UI */}
                <div className="w-full max-w-sm flex justify-between items-center mb-10 opacity-60">
                  <div className="h-[1px] w-[40%] bg-gradient-to-r from-transparent to-white" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white] animate-pulse" />
                  <div className="h-[1px] w-[40%] bg-gradient-to-l from-transparent to-white" />
                </div>

                {/* Core Object */}
                <motion.div
                  className="w-40 h-40 sm:w-56 sm:h-56 rounded-full border border-white/20 flex items-center justify-center relative"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute w-[120%] h-[120%] border border-dashed border-blue-400/20 rounded-full" />
                  <div className="absolute w-[80%] h-[80%] border border-purple-400/20 rounded-full" style={{ animationDirection: 'reverse' }} />

                  <motion.div
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-blue-600/80 to-purple-600/80 blur-md flex items-center justify-center relative z-10"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-full flex items-center justify-center shadow-inner">
                      <span className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">P</span>
                    </div>
                  </motion.div>
                </motion.div>

                <div className="w-full max-w-sm flex justify-between items-center mt-10 opacity-60">
                  <div className="h-[1px] w-[30%] bg-gradient-to-r from-transparent to-white" />
                  <div className="h-[1px] w-[30%] bg-gradient-to-l from-transparent to-white" />
                </div>
              </div>
            </div>

            {/* Floating parallax badges */}
            <motion.div
              style={{ y: y2 }}
              className="absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-10 bg-zinc-900 border border-white/10 px-6 py-4 sm:px-8 sm:py-5 rounded-2xl shadow-2xl z-20 backdrop-blur-xl"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500/10 rounded-full flex items-center justify-center absolute -top-5 -right-5 border border-emerald-500/20">
                <div className="w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white/80 uppercase tracking-widest mb-1">System Status</p>
              <p className="text-lg sm:text-xl font-bold text-white">All Systems Nominal</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
