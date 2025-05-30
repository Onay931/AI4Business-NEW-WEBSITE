import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, CheckCircleIcon } from "@/assets/icons";

export default function AiMiniPcBanner() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            {/* Header badges */}
            <div className="flex items-center gap-3 flex-wrap">
              <Badge className="bg-gradient-to-r from-[hsl(var(--gold))] to-yellow-500 text-black font-bold px-4 py-2 text-sm">
                🚀 EXCLUSIVE
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2 text-sm">
                CLIENTS ONLY
              </Badge>
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-4 py-2 text-sm">
                30-50% SAVINGS
              </Badge>
            </div>
            
            {/* Main title */}
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-black font-montserrat leading-none">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  AI4Business
                </span>
                <br />
                <span className="bg-gradient-to-r from-[hsl(var(--gold))] via-yellow-400 to-[hsl(var(--gold))] bg-clip-text text-transparent">
                  CUSTOM AI
                </span>
                <br />
                <span className="text-blue-300">Mini PC</span>
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-[hsl(var(--gold))] to-blue-500 rounded-full"></div>
            </div>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              The world's first <span className="text-[hsl(var(--gold))] font-semibold">bespoke AI computing solution</span> designed 
              exclusively for South African businesses. An all-in-one powerhouse that integrates your business AI directly 
              into cutting-edge hardware.
            </p>

            {/* Technical Specifications - Enhanced */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[hsl(var(--gold))] to-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--gold))]">Enterprise Specifications</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: "AMD Ryzen 9 AI CPU", icon: "🔥" },
                  { label: "96 GB DDR5 RAM", icon: "⚡" },
                  { label: "AMD Ryzen AI NPU Co-Processor", icon: "🧠" },
                  { label: "Radeon 890/780M RDNA 3 Graphics", icon: "🎮" },
                  { label: "2x 1TB M.2 PCIe 4.0 NVMe SSD", icon: "💾" },
                  { label: "Windows 11 & Linux Ready", icon: "💻" }
                ].map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <span className="text-lg">{spec.icon}</span>
                    <span className="text-blue-100 font-medium">{spec.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[hsl(var(--gold))] to-yellow-500 text-black hover:from-yellow-500 hover:to-[hsl(var(--gold))] font-bold text-lg px-8 py-4 group shadow-lg hover:shadow-xl transition-all"
                >
                  Get Your Custom AI Mini PC
                  <ArrowRightIcon className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </a>
              <a href="https://wa.me/0692992530" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold text-lg px-8 py-4 bg-transparent backdrop-blur-sm"
                >
                  <span className="text-xl mr-2">💬</span> Enquire Now
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
            {/* Main showcase container */}
            <div className="relative perspective-1000">
              {/* Holographic frame */}
              <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/30 shadow-2xl transform rotate-y-12">
                
                {/* Mini PC 3D representation */}
                <div className="relative mx-auto w-80 h-64 mb-8">
                  {/* Main PC body */}
                  <div className="absolute inset-x-8 inset-y-8 bg-gradient-to-br from-gray-800 via-slate-700 to-gray-900 rounded-2xl shadow-2xl border border-gray-600">
                    {/* Top surface with glow */}
                    <div className="absolute -top-2 -left-2 -right-2 h-4 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50 rounded-t-2xl blur-sm"></div>
                    
                    {/* Front panel */}
                    <div className="absolute inset-x-4 bottom-4 h-16 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg border border-gray-500">
                      {/* Power button */}
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                      
                      {/* USB ports */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                        <div className="w-4 h-2 bg-blue-500 rounded-sm"></div>
                        <div className="w-4 h-2 bg-blue-500 rounded-sm"></div>
                      </div>
                    </div>

                    {/* Side vents */}
                    <div className="absolute -right-1 top-4 bottom-4 w-2">
                      {Array.from({ length: 8 }, (_, i) => (
                        <div key={i} className="w-full h-1 bg-gray-600 rounded mb-1"></div>
                      ))}
                    </div>
                  </div>

                  {/* Floating AI indicators */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[hsl(var(--gold))] to-yellow-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                    <span className="text-black font-bold text-xs">AI</span>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                    <span className="text-white font-bold text-xs">⚡</span>
                  </div>
                </div>

                {/* Performance metrics display */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "CPU Power", value: "96", unit: "GB RAM" },
                    { label: "AI Speed", value: "NPU", unit: "Dedicated" },
                    { label: "Savings", value: "50%", unit: "Cost Cut" }
                  ].map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="text-center p-3 bg-white/10 rounded-xl border border-white/20"
                    >
                      <div className="text-2xl font-bold text-[hsl(var(--gold))]">{metric.value}</div>
                      <div className="text-xs text-blue-200">{metric.unit}</div>
                      <div className="text-xs text-white/70">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Animated data flow */}
                <div className="flex justify-center">
                  <div className="flex items-center gap-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-blue-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating holographic elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-[hsl(var(--gold))]/30 to-yellow-400/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>

        {/* Bottom showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-[hsl(var(--gold))] mb-4">🏆 Exclusive to AI4Business Clients</h3>
            <p className="text-blue-100 text-lg">
              Custom specifications tailored to your business requirements. 
              <span className="text-[hsl(var(--gold))] font-semibold"> Available only through AI4Business partnerships.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}