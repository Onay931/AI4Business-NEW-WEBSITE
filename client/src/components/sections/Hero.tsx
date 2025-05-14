import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import bestChoiceBadgeSrc from "@assets/CUSTOM AI for every business_20250425_121748_0000.png";

export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <div className="mb-4">
              <Badge 
                variant="white" 
                size="lg" 
                className="inline-block px-4 py-1 rounded-full mb-2"
              >
                CUSTOM AI for every business
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat leading-tight mb-6">
              Empowering Business Through Intelligent Transformation
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-xl">
              Tailored AI Integration and Support Services for Businesses in South Africa. Driving innovation, resilience, and competitive edge.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#services">
                <Button variant="gold" size="lg">
                  Explore Solutions
                </Button>
              </a>
              <a href="#contact">
                <Button variant="white" size="lg">
                  Contact Us
                </Button>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 mt-12 md:mt-0"
          >
            <div className="relative">
              {/* Futuristic AI digital interface image */}
              <img 
                src="https://pixabay.com/get/gba010903d2a3f345ee956842c8a55b2272be9a835c1573c171973e45b016d9fa15d01c2bda0fddfac0d3364f49f0c6bd430cb226fd3a18ccd9e703906d9cb5eb_1280.jpg" 
                alt="AI Business Solutions" 
                className="rounded-xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -top-6 -left-6">
                <img 
                  src={bestChoiceBadgeSrc} 
                  alt="Best Choice Award" 
                  className="w-24 h-24"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
