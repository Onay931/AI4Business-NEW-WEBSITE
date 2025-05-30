import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, CheckCircleIcon } from "@/assets/icons";
import miniPcImage from "@assets/15ProPlus.png";

export default function AiMiniPcBanner() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Clean geometric background */}
      <div className="absolute inset-0">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Modern geometric shapes */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[hsl(var(--gold))]/5 to-transparent rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full"></div>
        
        {/* Floating minimal elements */}
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-[hsl(var(--gold))] rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gray-900 space-y-10"
          >
            {/* Clean modern badges */}
            <div className="flex items-center gap-3 flex-wrap">
              <Badge className="bg-[hsl(var(--gold))] text-black font-bold px-4 py-2 text-xs tracking-wider border-0 shadow-sm">
                EXCLUSIVE
              </Badge>
              <Badge className="bg-black text-white font-medium px-4 py-2 text-xs tracking-wider border-0 shadow-sm">
                INVITATION ONLY
              </Badge>
              <Badge className="bg-gray-100 text-gray-700 font-medium px-4 py-2 text-xs tracking-wider border border-gray-200">
                50% SAVINGS
              </Badge>
            </div>
            
            {/* Clean modern title */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-light font-montserrat leading-tight tracking-tight">
                <span className="text-gray-900 block">AI4Business</span>
                <span className="text-[hsl(var(--gold))] font-medium block">CUSTOM AI</span>
                <span className="text-gray-600 block">Mini PC</span>
              </h2>
              
              <div className="w-20 h-1 bg-[hsl(var(--gold))] rounded-full"></div>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
              The world's first <span className="text-[hsl(var(--gold))] font-semibold">bespoke AI computing solution</span> designed 
              exclusively for discerning South African enterprises. A meticulously crafted powerhouse that seamlessly integrates 
              your business intelligence into <span className="text-gray-900 font-medium">cutting-edge hardware architecture</span>.
            </p>

            {/* Clean NPU Explanation */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Neural Processing Unit (NPU)</h4>
                  <p className="text-gray-600 leading-relaxed">
                    An NPU is a specialized processor designed to accelerate artificial intelligence and machine learning tasks. 
                    This dedicated AI hardware accelerator ensures lightning-fast processing of neural networks and deep learning models, 
                    providing unmatched performance for your business AI applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Clean Technical Specifications */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Enterprise Specifications</h3>
                <p className="text-gray-600">Precision-engineered for excellence</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { label: "AMD Ryzen 9 8/12 Core - 16/24 Threads", desc: "Zen Cores Ultimate Processing Power" },
                  { label: "96GB / 128GB DDR5 5600 RAM", desc: "Ultra-High Performance Memory" },
                  { label: "AMD Ryzen AI NPU Co-Processor", desc: "Neural Processing Unit Accelerator" },
                  { label: "Radeon 890/780M RDNA 3 Graphics", desc: "Professional Graphics Engine" },
                  { label: "2x 1TB M.2 PCIe 4.0 NVMe SSD", desc: "Lightning-Fast Storage" },
                  { label: "Windows 11 & Linux Installed", desc: "Dual OS Pre-Configured" }
                ].map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <h4 className="text-gray-900 font-semibold text-lg mb-1">{spec.label}</h4>
                    <p className="text-gray-600 text-sm">{spec.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Clean CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button 
                  size="lg"
                  className="bg-[hsl(var(--gold))] text-black hover:bg-yellow-500 font-semibold text-lg px-8 py-4 group transition-all"
                >
                  Reserve Your Exclusive Edition
                  <ArrowRightIcon className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </a>
              <a href="https://wa.me/0692992530" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold text-lg px-8 py-4"
                >
                  Private Consultation
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Visual - Completely redesigned */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Clean modern showcase */}
            <div className="relative">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                {/* Clean Mini PC Image */}
                <div className="relative mx-auto mb-6">
                  <div className="relative group">
                    <img 
                      src={miniPcImage} 
                      alt="AI4Business Custom AI Mini PC" 
                      className="w-full max-w-sm mx-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Simple badge */}
                    <div className="absolute top-3 left-3 bg-[hsl(var(--gold))] text-black px-3 py-1 rounded-lg font-medium text-sm">
                      EXCLUSIVE
                    </div>
                  </div>
                </div>

                {/* Clean metrics display */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Memory", value: "128GB", unit: "DDR5" },
                    { label: "AI Cores", value: "NPU", unit: "Dedicated" },
                    { label: "Savings", value: "50%", unit: "vs Standard" }
                  ].map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center p-4 bg-gray-50 rounded-xl"
                    >
                      <div className="text-2xl font-bold text-[hsl(var(--gold))] mb-1">{metric.value}</div>
                      <div className="text-xs text-gray-600">{metric.unit}</div>
                      <div className="text-xs text-gray-500 mt-1">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Clean Bottom Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white border border-gray-200 rounded-2xl p-12 shadow-sm">
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              Invitation-Only Access
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Meticulously engineered specifications tailored to your enterprise requirements. 
              <span className="text-[hsl(var(--gold))] font-semibold"> Available exclusively through AI4Business partnerships.</span>
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">∞</span>
                </div>
                <div className="text-gray-900 font-semibold">Unlimited Customization</div>
                <div className="text-gray-600 text-sm">Tailored to your needs</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">24/7</span>
                </div>
                <div className="text-gray-900 font-semibold">Elite Support</div>
                <div className="text-gray-600 text-sm">Always available</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">1:1</span>
                </div>
                <div className="text-gray-900 font-semibold">Personal Architect</div>
                <div className="text-gray-600 text-sm">Dedicated specialist</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}