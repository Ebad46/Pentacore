"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Work", href: "#work" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/70 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="relative z-10 flex items-center gap-3 group">
          <div className="flex items-center gap-3 rounded-full border border-cyan-300/20 bg-slate-950/90 px-3 py-2 shadow-[0_0_20px_rgba(34,211,238,0.18)] transition-all duration-300 hover:border-cyan-200/40">
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-slate-950/95 ring-1 ring-cyan-300/15 shadow-[0_0_18px_rgba(56,189,248,0.16)]">
              <Image src="/Logo.png" alt="Pentacore logo" width={44} height={44} className="object-contain" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold tracking-[0.24em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500">
                PENTACORE
              </span>
              <span className="text-[10px] uppercase tracking-[0.32em] text-slate-200/70">
                SOLUTION
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href="#contact"
            className="px-5 py-2.5 bg-white text-black font-semibold rounded-full text-sm hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
          >
            Start Your Project
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-10 p-2 text-white/80 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-zinc-950 border-b border-white/10 p-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white/80 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="w-full text-center px-5 py-3 bg-white text-black font-semibold rounded-lg text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Your Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
