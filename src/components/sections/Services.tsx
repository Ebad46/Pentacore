"use client";

import { motion, Variants } from "framer-motion";
import { Globe, Smartphone, BrainCircuit } from "lucide-react";

const services = [
  {
    id: "web",
    title: "Web Engineering",
    description: "High-performance, scalable web applications engineered to drive conversion and showcase your product's true value without compromise.",
    icon: <Globe className="w-8 h-8 relative z-10 text-white group-hover:scale-110 transition-transform duration-500" />,
    features: ["Next.js & React", "High Conversion", "Responsive Design"],
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "group-hover:border-blue-500/50"
  },
  {
    id: "app",
    title: "App Architecture",
    description: "User-friendly, cross-platform mobile experiences designed natively for seamless interactions and maximum user retention.",
    icon: <Smartphone className="w-8 h-8 relative z-10 text-white group-hover:scale-110 transition-transform duration-500" />,
    features: ["iOS & Android", "React Native", "Native UX/UI"],
    color: "from-purple-500/20 to-purple-600/5",
    borderColor: "group-hover:border-purple-500/50"
  },
  {
    id: "ai",
    title: "AI Integration",
    description: "Intelligent automation, smart chatbots, and AI-driven logic that future-proof your business operations and reduce overhead.",
    icon: <BrainCircuit className="w-8 h-8 relative z-10 text-white group-hover:scale-110 transition-transform duration-500" />,
    features: ["Workflow Automation", "LLM Integration", "Smart Systems"],
    color: "from-emerald-500/20 to-emerald-600/5",
    borderColor: "group-hover:border-emerald-500/50"
  }
];

export default function Services() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring" as const, stiffness: 50, damping: 20 }
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 relative bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16 md:mb-24 lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
              Built for your next<br className="hidden sm:block" /> stage of growth
            </h2>
            <p className="text-lg sm:text-xl text-white/60 font-light max-w-2xl leading-relaxed">
              Get the legitimacy of a market leader, while staying lean and agile. We bring design, development, and intelligent automation together in one cohesive unit.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`group relative overflow-hidden rounded-3xl bg-[#0a0a0c] border border-white/10 p-8 sm:p-10 transition-all duration-500 ${service.borderColor} shadow-xl hover:shadow-2xl`}
            >
              {/* Animated glass backlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${service.color} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="w-16 h-16 rounded-2xl bg-zinc-900/80 border border-white/10 flex items-center justify-center mb-8 relative shadow-inner overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 relative z-10">{service.title}</h3>
              <p className="text-white/60 mb-8 leading-relaxed relative z-10 min-h-[80px] text-sm sm:text-base">
                {service.description}
              </p>

              <ul className="space-y-4 relative z-10 mt-auto border-t border-white/5 pt-6">
                {service.features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-center gap-3 text-sm text-white/70 font-medium"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/80 transition-colors duration-300" />
                    <span className="group-hover:text-white transition-colors duration-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
