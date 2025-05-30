import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, CheckCircleIcon } from "@/assets/icons";

export default function AiMiniPcBanner() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-black via-slate-900 to-blue-950">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        {/* Luxury grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        
        {/* Premium geometric patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(212,175,55,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08)_0%,transparent_50%)]"></div>
        </div>
        
        {/* Floating luxury particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-pulse ${i % 3 === 0 ? 'bg-[hsl(var(--gold))]' : i % 3 === 1 ? 'bg-blue-400' : 'bg-white'}`}
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                opacity: 0.6
              }}
            />
          ))}
        </div>

        {/* Premium glowing orbs */}
        <div className="absolute top-16 left-8 w-40 h-40 bg-gradient-to-r from-[hsl(var(--gold))]/10 to-yellow-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-16 right-8 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
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
            {/* Premium header badges */}
            <div className="flex items-center gap-4 flex-wrap mb-2">
              <Badge className="bg-gradient-to-r from-[hsl(var(--gold))] via-yellow-400 to-[hsl(var(--gold))] text-black font-black px-6 py-3 text-sm tracking-wide border border-yellow-300/30 shadow-lg shadow-[hsl(var(--gold))]/20">
                ⚡ EXCLUSIVE EDITION
              </Badge>
              <Badge className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white border border-slate-600/50 px-6 py-3 text-sm font-bold tracking-wide shadow-lg">
                INVITATION ONLY
              </Badge>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <Badge className="bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-600 text-white border border-emerald-400/30 px-5 py-2 text-xs font-bold tracking-widest shadow-lg shadow-emerald-500/20">
                UP TO 50% SAVINGS
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-700 text-white border border-purple-400/30 px-5 py-2 text-xs font-bold tracking-widest shadow-lg shadow-purple-500/20">
                ENTERPRISE GRADE
              </Badge>
            </div>
            
            {/* Luxury main title */}
            <div className="space-y-6">
              <div className="relative">
                <h2 className="text-6xl md:text-8xl font-black font-montserrat leading-none tracking-tight">
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                      AI4Business
                    </span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent blur-sm -z-10"></div>
                  </span>
                  <br />
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[hsl(var(--gold))] via-yellow-300 to-[hsl(var(--gold))] bg-clip-text text-transparent drop-shadow-2xl">
                      CUSTOM AI
                    </span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(var(--gold))]/30 to-transparent blur-sm -z-10"></div>
                  </span>
                  <br />
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl">
                      Mini PC
                    </span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 to-transparent blur-sm -z-10"></div>
                  </span>
                </h2>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-32 h-0.5 bg-gradient-to-r from-[hsl(var(--gold))] via-yellow-400 to-transparent rounded-full"></div>
                <div className="w-6 h-6 bg-gradient-to-r from-[hsl(var(--gold))] to-yellow-400 rounded-full animate-pulse shadow-lg shadow-[hsl(var(--gold))]/50"></div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-transparent rounded-full"></div>
              </div>
            </div>
            
            <p className="text-2xl text-blue-100 leading-relaxed font-light">
              The world's first <span className="text-[hsl(var(--gold))] font-bold bg-gradient-to-r from-[hsl(var(--gold))] to-yellow-400 bg-clip-text text-transparent">bespoke AI computing solution</span> designed 
              exclusively for discerning South African enterprises. A meticulously crafted powerhouse that seamlessly integrates 
              your business intelligence into <span className="text-white font-semibold">cutting-edge hardware architecture</span>.
            </p>

            {/* Luxury Technical Specifications */}
            <div className="relative bg-gradient-to-br from-black/40 via-slate-900/60 to-black/40 backdrop-blur-2xl rounded-3xl p-8 border border-[hsl(var(--gold))]/20 shadow-2xl overflow-hidden">
              {/* Luxury border glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--gold))]/10 via-transparent to-blue-500/10 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--gold))] via-yellow-400 to-[hsl(var(--gold))] rounded-xl flex items-center justify-center shadow-lg shadow-[hsl(var(--gold))]/30">
                    <span className="text-black font-black text-lg">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[hsl(var(--gold))] tracking-wide">ENTERPRISE SPECIFICATIONS</h3>
                    <p className="text-blue-200 text-sm font-medium">Precision-engineered for excellence</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { label: "AMD Ryzen 9 AI CPU", icon: "🔥", desc: "Ultimate Processing Power" },
                    { label: "96 GB DDR5 RAM", icon: "⚡", desc: "Unmatched Memory Performance" },
                    { label: "AMD Ryzen AI NPU Co-Processor", icon: "🧠", desc: "Dedicated AI Acceleration" },
                    { label: "Radeon 890/780M RDNA 3 Graphics", icon: "🎮", desc: "Professional Graphics Engine" },
                    { label: "2x 1TB M.2 PCIe 4.0 NVMe SSD", icon: "💾", desc: "Lightning-Fast Storage" },
                    { label: "Windows 11 & Linux Ready", icon: "💻", desc: "Dual OS Compatibility" }
                  ].map((spec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative p-4 bg-gradient-to-br from-white/5 via-white/3 to-transparent rounded-xl border border-white/10 hover:border-[hsl(var(--gold))]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[hsl(var(--gold))]/10"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center group-hover:from-[hsl(var(--gold))]/20 group-hover:to-[hsl(var(--gold))]/10 transition-all">
                          <span className="text-xl">{spec.icon}</span>
                        </div>
                        <div>
                          <span className="text-white font-bold text-lg block leading-tight">{spec.label}</span>
                          <span className="text-blue-300 text-sm font-medium">{spec.desc}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#contact">
                <Button 
                  size="lg"
                  className="relative bg-gradient-to-r from-[hsl(var(--gold))] via-yellow-400 to-[hsl(var(--gold))] text-black hover:shadow-2xl hover:shadow-[hsl(var(--gold))]/40 font-black text-xl px-12 py-6 group transition-all duration-500 border border-yellow-300/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-[hsl(var(--gold))] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 flex items-center">
                    Reserve Your Exclusive Edition
                    <ArrowRightIcon className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
                  </span>
                </Button>
              </a>
              <a href="https://wa.me/0692992530" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="relative border-2 border-white/30 text-white hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))] font-bold text-xl px-12 py-6 bg-black/30 backdrop-blur-xl transition-all duration-500 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--gold))]/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 flex items-center">
                    <span className="text-2xl mr-3">💎</span> Private Consultation
                  </span>
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

        {/* Premium Bottom Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="relative bg-gradient-to-br from-black/60 via-slate-900/80 to-black/60 backdrop-blur-2xl rounded-3xl p-12 border border-[hsl(var(--gold))]/30 shadow-2xl overflow-hidden">
            {/* Luxury background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--gold))]/5 via-transparent to-blue-500/5"></div>
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-[hsl(var(--gold))]/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--gold))] via-yellow-400 to-[hsl(var(--gold))] rounded-2xl flex items-center justify-center shadow-lg shadow-[hsl(var(--gold))]/30">
                  <span className="text-black font-black text-2xl">👑</span>
                </div>
                <div className="w-3 h-3 bg-[hsl(var(--gold))] rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              
              <h3 className="text-4xl font-black text-[hsl(var(--gold))] mb-4 tracking-wide">
                INVITATION-ONLY ACCESS
              </h3>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Meticulously engineered specifications tailored to your enterprise requirements. 
                <span className="text-[hsl(var(--gold))] font-bold"> Available exclusively through AI4Business elite partnerships.</span>
              </p>
              
              <div className="mt-8 flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-[hsl(var(--gold))]">∞</div>
                  <div className="text-blue-200 text-sm font-medium">Customization</div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-[hsl(var(--gold))] to-transparent"></div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[hsl(var(--gold))]">24/7</div>
                  <div className="text-blue-200 text-sm font-medium">Elite Support</div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-[hsl(var(--gold))] to-transparent"></div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[hsl(var(--gold))]">1:1</div>
                  <div className="text-blue-200 text-sm font-medium">Personal Architect</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}