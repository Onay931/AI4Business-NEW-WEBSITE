import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, TimesCircleIcon, ChartLineIcon, RobotIcon, WarningIcon } from "@/assets/icons";

// Animation variants
const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export default function MarketMomentum() {
  return (
    <section className="py-16 bg-[hsl(var(--light-gray))] section-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">The AI Imperative in South Africa</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The South African AI market is experiencing significant growth, creating a divide between AI-integrated businesses and those falling behind.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Market Size Card */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
          >
            <div className="text-[hsl(var(--primary))] mb-4">
              <ChartLineIcon size={48} />
            </div>
            <h3 className="text-2xl font-bold font-montserrat mb-3">Rapid Market Growth</h3>
            <p className="text-gray-600 mb-4">The AI market in South Africa is projected to reach $3.2 billion by 2030, with a compound annual growth rate of 27.23%.</p>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">2023</span>
                <span className="text-sm font-bold">$750M</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">2025</span>
                <span className="text-sm font-bold">$1.2B</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">2030</span>
                <span className="text-sm font-bold text-[hsl(var(--primary))]">$3.2B</span>
              </div>
            </div>
          </motion.div>
          
          {/* AI-Integrated Businesses Card */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
          >
            <div className="text-[hsl(var(--primary))] mb-4">
              <RobotIcon size={48} />
            </div>
            <h3 className="text-2xl font-bold font-montserrat mb-3">AI-Integrated Businesses</h3>
            <p className="text-gray-600 mb-4">Businesses that integrate AI become:</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <CheckCircleIcon className="text-green-500 mt-1 mr-2 flex-shrink-0" size={20} />
                <span>Agile and data-driven</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="text-green-500 mt-1 mr-2 flex-shrink-0" size={20} />
                <span>Hyper-efficient with optimized workflows</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="text-green-500 mt-1 mr-2 flex-shrink-0" size={20} />
                <span>Customer-centric with personalized experiences</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="text-green-500 mt-1 mr-2 flex-shrink-0" size={20} />
                <span>Quick to adapt to market changes</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Non-AI Businesses Card */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
          >
            <div className="text-[hsl(var(--primary))] mb-4">
              <WarningIcon size={48} />
            </div>
            <h3 className="text-2xl font-bold font-montserrat mb-3">Non-AI Businesses</h3>
            <p className="text-gray-600 mb-4">Businesses without AI integration risk:</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <TimesCircleIcon className="text-red-500 mt-1 mr-2 flex-shrink-0" size={20} />
                <span>Becoming rigid and resistant to change</span>
              </li>
              <li className="flex items-start">
                <TimesCircleIcon className="text-red-500 mt-1 mr-2 flex-shrink-0" size={20} />
                <span>Relying on outdated methods</span>
              </li>
              <li className="flex items-start">
                <TimesCircleIcon className="text-red-500 mt-1 mr-2 flex-shrink-0" size={20} />
                <span>Operational inefficiency and higher costs</span>
              </li>
              <li className="flex items-start">
                <TimesCircleIcon className="text-red-500 mt-1 mr-2 flex-shrink-0" size={20} />
                <span>Slower response to market changes</span>
              </li>
              <li className="flex items-start">
                <TimesCircleIcon className="text-red-500 mt-1 mr-2 flex-shrink-0" size={20} />
                <span>Potential obsolescence</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-xl font-semibold text-[hsl(var(--primary))] mb-6">
            The difference is existential: Embracing AI is no longer a luxury but a fundamental necessity for survival.
          </p>
          <a href="#services">
            <Button>
              Discover How We Can Help
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
