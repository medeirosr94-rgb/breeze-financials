import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import ValueLadder from "@/components/sections/value-ladder";
import Benefits from "@/components/sections/benefits";
import Process from "@/components/sections/process";
import Testimonials from "@/components/sections/testimonials";
import About from "@/components/sections/about";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";
import FloatingCTA from "@/components/ui/floating-cta";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ValueLadder />
      <Benefits />
      <Process />
      <Testimonials />
      <About />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
