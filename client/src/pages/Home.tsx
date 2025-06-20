import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AiMiniPcBanner from "@/components/sections/AiMiniPcBanner";
import Services from "@/components/sections/Services";
import BenefitsTimeline from "@/components/sections/BenefitsTimeline";
import MarketMomentum from "@/components/sections/MarketMomentum";
import Industries from "@/components/sections/Industries";
import CostOfInaction from "@/components/sections/CostOfInaction";
import AiDemo from "@/components/sections/AiDemo";
import AboutUs from "@/components/sections/AboutUs";
import Contact from "@/components/sections/Contact";
import CallToAction from "@/components/sections/CallToAction";
import { useEffect } from "react";

export default function Home() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-inter text-[hsl(var(--dark))] bg-white">
      <Header />
      <main>
        <Hero />
        <AiMiniPcBanner />
        <Services />
        <BenefitsTimeline />
        <MarketMomentum />
        <Industries />
        <CostOfInaction />
        <AiDemo />
        <AboutUs />
        <Contact />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
