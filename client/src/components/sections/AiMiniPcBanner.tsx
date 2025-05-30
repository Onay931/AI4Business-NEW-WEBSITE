import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, CheckCircleIcon } from "@/assets/icons";

export default function AiMiniPcBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--primary-light))] to-blue-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdjZoLTZ2LTZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <div className="flex items-center mb-4">
              <Badge className="bg-[hsl(var(--gold))] text-primary hover:bg-[hsl(var(--gold))]/90 mr-3">
                EXCLUSIVE
              </Badge>
              <Badge variant="outline" className="text-white border-white">
                CLIENTS ONLY
              </Badge>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-4 leading-tight">
              AI4Business
              <span className="block text-[hsl(var(--gold))]">Mini PC</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-4 leading-relaxed">
              The world's first bespoke AI computing solution designed exclusively for South African businesses. 
              An all-in-one powerhouse that integrates your business AI directly into cutting-edge hardware.
            </p>

            {/* Technical Specifications */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 border border-white/20">
              <h3 className="text-lg font-semibold text-[hsl(var(--gold))] mb-3">Technical Specifications</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-white/90">
                <div className="flex items-center">
                  <CheckCircleIcon className="text-[hsl(var(--gold))] mr-2 flex-shrink-0" size={16} />
                  <span>AMD Ryzen 9 AI CPU</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="text-[hsl(var(--gold))] mr-2 flex-shrink-0" size={16} />
                  <span>96 GB DDR5 RAM</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="text-[hsl(var(--gold))] mr-2 flex-shrink-0" size={16} />
                  <span>AMD Ryzen AI NPU Co-Processor</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="text-[hsl(var(--gold))] mr-2 flex-shrink-0" size={16} />
                  <span>Radeon 890/780M RDNA 3 Graphics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="text-[hsl(var(--gold))] mr-2 flex-shrink-0" size={16} />
                  <span>2x 1TB M.2 PCIe 4.0 NVMe SSD</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="text-[hsl(var(--gold))] mr-2 flex-shrink-0" size={16} />
                  <span>Windows 11 & Linux Ready</span>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircleIcon className="text-[hsl(var(--gold))] mr-3 flex-shrink-0" size={20} />
                <span className="text-white/90">30-50% cheaper than traditional commercial alternatives</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="text-[hsl(var(--gold))] mr-3 flex-shrink-0" size={20} />
                <span className="text-white/90">Dedicated AI processing with NPU co-processor</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="text-[hsl(var(--gold))] mr-3 flex-shrink-0" size={20} />
                <span className="text-white/90">Complete AI interface integration</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="text-[hsl(var(--gold))] mr-3 flex-shrink-0" size={20} />
                <span className="text-white/90">Enterprise-grade performance and reliability</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button 
                  size="lg"
                  className="bg-[hsl(var(--gold))] text-primary hover:bg-[hsl(var(--gold))]/90 font-semibold group"
                >
                  Get Your Custom AI Mini PC
                  <ArrowRightIcon className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </a>
              <a href="https://wa.me/0692992530" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[hsl(var(--primary))] font-semibold"
                >
                  <i className="fab fa-whatsapp mr-2"></i> Enquire Now
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* Mini PC Visualization */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl p-6 mb-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="text-[hsl(var(--gold))] font-mono text-sm">AI4BUSINESS</div>
                </div>
                
                {/* Circuit pattern */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Array.from({ length: 9 }, (_, i) => (
                    <div 
                      key={i}
                      className="h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded opacity-80"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
                
                {/* Performance metrics */}
                <div className="space-y-2 text-white/80 text-sm">
                  <div className="flex justify-between">
                    <span>AI Processing:</span>
                    <span className="text-green-400">Optimized</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Performance:</span>
                    <span className="text-green-400">Superior</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cost Efficiency:</span>
                    <span className="text-[hsl(var(--gold))]">50% Savings</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[hsl(var(--gold))]">50%</div>
                  <div className="text-white/80 text-sm">Cost Reduction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[hsl(var(--gold))]">100%</div>
                  <div className="text-white/80 text-sm">Custom Built</div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[hsl(var(--gold))] rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/30 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </div>

        {/* Bottom notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 pt-8 border-t border-white/20"
        >
          <p className="text-white/80 text-sm">
            Available exclusively to AI4Business clients. Custom specifications based on your business requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}