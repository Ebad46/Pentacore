"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-24 md:py-40 relative bg-black overflow-hidden border-t border-white/10">
      {/* Deep abstract glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-3xl max-h-3xl bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 sm:p-14 md:p-20 shadow-[0_0_80px_rgba(0,0,0,0.8)] relative overflow-hidden group"
        >
          {/* Internal hover glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white/60 mb-8 sm:mb-10">
            System Initialization
          </span>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 tracking-tight leading-[1.1]">
            Build something <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              extraordinary.
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-white/50 mb-10 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Schedule a technical alignment call to explore how our architecture can scale your vision and eradicate enterprise friction.
          </p>

          <a 
            href="#" 
            className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:-translate-y-1 group w-full sm:w-auto text-sm sm:text-base"
          >
            Deploy Your Future
            <div className="bg-black text-white p-1 rounded-full group-hover:translate-x-1 transform transition-all duration-300">
              <ArrowRight size={16} />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
