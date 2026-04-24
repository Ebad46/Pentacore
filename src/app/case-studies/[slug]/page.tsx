"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getWorkBySlug } from "@/lib/works";

export default function CaseStudy() {
  const params = useParams();
  const slug = params.slug as string;
  const work = getWorkBySlug(slug);

  const title = work?.title ?? slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  const category = work?.category ?? "Case Study";
  const description = work?.overview ?? "A comprehensive overview of how we architected, engineered, and scaled this solution.";

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <Link href="/#work" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 group text-sm font-medium">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Deployments
        </Link>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <p className="text-sm font-semibold text-white/60 uppercase tracking-widest">Case Study</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">{title}</h1>
          <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed mb-16">{description}</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-video bg-zinc-900 border border-white/10 rounded-3xl mb-16 overflow-hidden relative shadow-2xl"
        >
          {work ? (
            <>
              <Image src={work.image} alt={work.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30" />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white/20 font-mono tracking-widest">PROJECT VISUAL ASSET</p>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
           <div className="md:col-span-2 prose prose-invert max-w-none">
             <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
             <p className="text-white/70 leading-relaxed mb-8">
               {work ? `We crafted the ${category.toLowerCase()} experience to solve the client's key pain points with speed, usability, and reliability.` : "Our client faced massive scalability issues. Their existing infrastructure was bottlenecking during peak traffic, and their UI felt outdated."}
             </p>
             <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
             <p className="text-white/70 leading-relaxed">
               {work ? work.desc : "We completely decoupled the frontend from their monolithic backend. By migrating to a Next.js framework backed by a serverless architecture, we instantly improved performance metrics by 300%."}
             </p>
           </div>
           
           <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 h-fit">
              <h4 className="font-bold text-lg mb-6 tracking-tight">Deployment Stats</h4>
              <ul className="space-y-6">
                 <li>
                    <p className="text-sm text-white/50 mb-1 uppercase tracking-wider">Tech Stack</p>
                    <p className="font-medium">{work?.tech ?? "Next.js, Node, Three.js"}</p>
                 </li>
                 <li>
                    <p className="text-sm text-white/50 mb-1 uppercase tracking-wider">Timeline</p>
                    <p className="font-medium">{work?.timeline ?? "6 Weeks"}</p>
                 </li>
                 <li>
                    <p className="text-sm text-white/50 mb-1 uppercase tracking-wider">Impact</p>
                    <p className="font-medium text-emerald-400">{work?.impact ?? "40% Cost Reduction"}</p>
                 </li>
              </ul>
              {work?.link ? (
                <div className="mt-8">
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    Visit project link
                  </a>
                </div>
              ) : null}
           </div>
        </motion.div>
      </div>
    </main>
  );
}
