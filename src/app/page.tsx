import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black overflow-hidden relative">
      <Hero />
      <Services />
      <About />
      <Process />
      <Portfolio />
      <CTA />
    </main>
  );
}
