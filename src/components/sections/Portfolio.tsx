"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { works } from "@/lib/works";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="work" className="py-24 md:py-40 relative bg-zinc-950">
      <div className="container mx-auto px-6 max-w-7xl relative z-10" ref={containerRef}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="md:w-2/3"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">Engineered for <br className="hidden sm:block" />maximum impact.</h2>
            <p className="text-lg sm:text-xl text-white/60 font-light max-w-xl">
              Examine how we've transformed bold concepts into high-performing digital realities.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 md:mt-0"
          >
            <Link href="#work" className="flex items-center gap-2 group text-white/80 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-1 font-medium text-sm sm:text-base">
              View All Deployments 
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {works.map((work, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(scrollYProgress, [0, 1], [0, work.offset * -2]);
            
            return (
              <motion.div
                key={work.slug}
                style={typeof window !== "undefined" && window.innerWidth > 768 ? { y } : {}}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <Link href={`/case-studies/${work.slug}`} className="group block cursor-pointer">
                  <div className="aspect-[4/5] rounded-3xl mb-8 relative overflow-hidden bg-black border border-white/10 shadow-2xl">
                     <Image src={work.image} alt={work.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority={index === 0} />
                     <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-700" />
                     <div className={`absolute inset-0 bg-gradient-to-br ${work.color} opacity-70`} />
                     
                     <div className="absolute inset-0 flex items-center justify-center p-8">
                       <div className="w-full h-full rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group-hover:border-white/20 transition-colors duration-700">
                          <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-black/50 backdrop-blur-sm z-10 group-hover:scale-110 transition-transform duration-700">
                             <span className="text-white/30 font-mono text-xs tracking-widest group-hover:text-white/80 transition-colors">VIEW</span>
                          </div>
                       </div>
                     </div>

                     <div className="absolute top-6 right-6 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center translate-x-12 -translate-y-12 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out shadow-xl z-20">
                       <ArrowUpRight size={22} strokeWidth={2.5} />
                     </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-blue-400 transition-colors duration-300" />
                      <p className="text-xs font-semibold text-white/50 uppercase tracking-widest">{work.category}</p>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight group-hover:text-blue-100 transition-colors duration-300">{work.title}</h3>
                    <p className="text-white/50 leading-relaxed text-sm sm:text-base font-light">{work.desc}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
