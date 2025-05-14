import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import logoSrc from "@assets/CUSTOM AI for every business_20250425_121748_0000.png";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Background gradient with animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 z-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuLWNpcmN1aXQiIHg9IjAiIHk9IjAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0iTTEwIDAgTDIwIDAgTDIwIDUwIEwxMCA1MCBMMTAgMCBNMzAgMCBMNDAgMCBMNDAgNTAgTDMwIDUwIEwzMCAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTAgMTAgTDUwIDEwIE01MCAyMCBMMCAyMCBNMCAzMCBMNTAgMzAgTTUwIDQwIEwwIDQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybi1jaXJjdWl0KSIvPjwvc3ZnPg==')]"></div>
        </div>
      </div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 3 + 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo and Best Choice Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-8 relative"
          >
            <img 
              src={logoSrc} 
              alt="AI4Business South Africa Logo" 
              className="w-64 md:w-72 h-auto"
            />
          </motion.div>
          
          {/* Compelling Headline */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Badge 
              variant="gold" 
              size="lg" 
              className="inline-block px-4 py-1 rounded-full mb-4 uppercase tracking-wide text-xs font-bold"
            >
              South Africa's Premier AI Solutions Provider
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Transform Your Business with AI
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't just adapt to the future — <span className="text-[hsl(var(--gold))] font-semibold">dominate it</span>. 
              Our custom AI solutions give South African businesses the competitive edge 
              that separates industry leaders from followers.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <a href="#services">
                <Button variant="gold" size="lg" className="text-base px-8 py-6 font-bold">
                  Discover AI Solutions
                </Button>
              </a>
              <a href="https://wa.me/0692992530" target="_blank" rel="noopener noreferrer">
                <Button variant="white" size="lg" className="text-base px-8 py-6 font-bold">
                  <i className="fab fa-whatsapp mr-2 text-green-500"></i> WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center"
            >
              <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <motion.div 
                  className="w-1.5 h-1.5 bg-white rounded-full mt-1"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
