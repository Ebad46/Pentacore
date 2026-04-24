"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TubesBackground from "@/components/ui/TubesBackground";
import Noise from "@/components/ui/Noise";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring" as const, stiffness: 60, damping: 20 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* 3D WebGL Tubes Background */}
      <TubesBackground />

      {/* Ambient static glows */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen opacity-50 animate-pulse" style={{ animationDuration: '6s' }} />
        <Noise />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col items-center text-center mt-10 md:mt-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <span className="px-4 py-2 rounded-full border border-white/10 bg-black/40 text-xs md:text-sm font-medium uppercase tracking-widest text-white/80 backdrop-blur-xl shadow-lg">
              Engineering Digital Excellence
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-6xl font-bold tracking-tighter mb-6 md:mb-8 leading-[1.05] max-w-5xl"
          >
            TRANSFORMING IDEAS INTO,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-white">
              INTELIGENT SOLUTIONS.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 md:mb-14 leading-relaxed font-light"
          >
            We build responsive websites, scalable mobile apps, and robust backend systems that reflect your bold vision and earn customer trust.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2 group text-sm md:text-base"
            >
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#work"
              className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-black/20 backdrop-blur-lg border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-sm md:text-base flex items-center justify-center"
            >
              View Our Work
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none hidden md:flex"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
