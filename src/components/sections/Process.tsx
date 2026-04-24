"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery & Blueprint",
    desc: "We align on your product goals through a comprehensive workshop, establishing the technical architecture and robust creative direction before writing a single line of code."
  },
  {
    num: "02",
    title: "Abstract UX / UI Design",
    desc: "Creating high-fidelity wireframes and bespoke digital environments that practically match your brand's bold vision and user mapping expectations."
  },
  {
    num: "03",
    title: "Logic & Development",
    desc: "Writing clean, scalable, typed code. We build the frontend interfaces, robust backend databases, and inject smart automation to maximize product efficiency."
  },
  {
    num: "04",
    title: "Deployment & Scale",
    desc: "Rigorous stress testing, performance optimization, and seamless CI/CD pipeline deployments. We stand by to ensure your ecosystem scales globally."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-40 relative bg-black border-t border-white/5 overflow-hidden">
      {/* Decorative vertical lines reflecting 'process' */}
      <div className="absolute inset-0 pointer-events-none flex justify-center opacity-[0.03]">
        <div className="w-[1px] h-full bg-white mx-[10%]" />
        <div className="w-[1px] h-full bg-white mx-[10%]" />
        <div className="w-[1px] h-full bg-white mx-[10%]" />
        <div className="w-[1px] h-full bg-white mx-[10%]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-xs sm:text-sm text-white/40 uppercase tracking-[0.3em] font-semibold mb-6">The Architecture</h2>
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Executing complex systems<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
                with simple precision.
              </span>
            </h3>
          </motion.div>
        </div>

        <div className="relative">
          {/* Main horizontal flow line for desktop */}
          <div className="hidden lg:block absolute top-[40px] left-[5%] right-[5%] h-[1px] bg-white/10 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="relative group"
              >
                <div className="flex flex-row lg:flex-col items-start gap-6 lg:gap-0">
                  {/* Number Node */}
                  <div className="lg:mb-10 relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-zinc-950 border border-white/10 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold font-mono group-hover:border-blue-500/50 group-hover:text-blue-400 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500 z-10 relative">
                      {step.num}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 mt-2 lg:mt-0">
                    <h4 className="text-xl sm:text-2xl font-bold mb-3 tracking-tight group-hover:text-white transition-colors">{step.title}</h4>
                    <p className="text-white/50 leading-relaxed text-sm sm:text-base font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
