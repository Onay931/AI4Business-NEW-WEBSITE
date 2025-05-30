import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SpecCard {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  detailedInfo: {
    performance: string;
    benefits: string[];
    techDetails: string;
    comparison: string;
  };
  score: number;
  category: 'processing' | 'memory' | 'ai' | 'graphics' | 'storage' | 'os';
}

const specCards: SpecCard[] = [
  {
    id: 'cpu',
    title: 'AMD Ryzen 9 CPU',
    icon: '🔥',
    shortDesc: '8/12 Core - 16/24 Threads Zen Architecture',
    detailedInfo: {
      performance: 'Enterprise-grade processing power with up to 24 threads for maximum multitasking capability',
      benefits: [
        'Lightning-fast AI model training',
        'Seamless multitasking for complex workflows',
        'Energy-efficient Zen architecture',
        'Advanced cache optimization'
      ],
      techDetails: 'Built on advanced 4nm process technology with boost clocks up to 5.7GHz',
      comparison: '40% faster than standard business PCs'
    },
    score: 95,
    category: 'processing'
  },
  {
    id: 'ram',
    title: 'DDR5 5600 Memory',
    icon: '⚡',
    shortDesc: '96GB / 128GB Ultra-High Performance',
    detailedInfo: {
      performance: 'Massive memory capacity with cutting-edge DDR5 speed for data-intensive AI applications',
      benefits: [
        'Handle large datasets without slowdown',
        'Future-proof memory technology',
        'Lower power consumption',
        'Error correction capabilities'
      ],
      techDetails: '5600 MT/s transfer rate with advanced error correction and thermal management',
      comparison: '50% faster than DDR4 with 2x capacity of standard systems'
    },
    score: 98,
    category: 'memory'
  },
  {
    id: 'npu',
    title: 'AMD Ryzen AI NPU',
    icon: '🧠',
    shortDesc: 'Dedicated Neural Processing Unit',
    detailedInfo: {
      performance: 'Specialized AI accelerator delivering up to 16 TOPS for machine learning workloads',
      benefits: [
        'Real-time AI inference',
        'Reduced CPU load for AI tasks',
        'Privacy-focused local processing',
        'Energy-efficient AI computation'
      ],
      techDetails: 'XDNA architecture with dedicated AI engines optimized for transformer models',
      comparison: '10x faster AI processing than CPU-only systems'
    },
    score: 100,
    category: 'ai'
  },
  {
    id: 'gpu',
    title: 'Radeon RDNA 3',
    icon: '🎮',
    shortDesc: '890/780M Professional Graphics',
    detailedInfo: {
      performance: 'Advanced graphics processing for AI visualization and professional applications',
      benefits: [
        'Hardware-accelerated AI training',
        'Professional visualization capabilities',
        'Multi-display support',
        'GPU compute for parallel processing'
      ],
      techDetails: 'RDNA 3 architecture with hardware raytracing and AI acceleration',
      comparison: '60% better performance than integrated graphics'
    },
    score: 88,
    category: 'graphics'
  },
  {
    id: 'storage',
    title: 'NVMe SSD Storage',
    icon: '💾',
    shortDesc: '2x 1TB M.2 PCIe 4.0',
    detailedInfo: {
      performance: 'Blazing-fast storage with sequential reads up to 7,000 MB/s',
      benefits: [
        'Instant application loading',
        'Fast data processing',
        'Redundancy and reliability',
        'Future-proof PCIe 4.0 interface'
      ],
      techDetails: 'NVMe 1.4 protocol with advanced wear leveling and thermal throttling',
      comparison: '14x faster than traditional hard drives'
    },
    score: 92,
    category: 'storage'
  },
  {
    id: 'os',
    title: 'Dual OS Ready',
    icon: '💻',
    shortDesc: 'Windows 11 & Linux Pre-installed',
    detailedInfo: {
      performance: 'Optimized dual-boot configuration for maximum flexibility',
      benefits: [
        'Choose optimal OS for each task',
        'Access to all software ecosystems',
        'Pre-configured for AI development',
        'Enterprise security features'
      ],
      techDetails: 'Secure boot with TPM 2.0 and hardware encryption support',
      comparison: 'More flexible than single-OS systems'
    },
    score: 85,
    category: 'os'
  }
];

export default function GamifiedSpecs() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [discoveredCards, setDiscoveredCards] = useState<Set<string>>(new Set());
  const [totalScore, setTotalScore] = useState(0);

  const handleCardClick = (cardId: string) => {
    setSelectedCard(selectedCard === cardId ? null : cardId);
    
    if (!discoveredCards.has(cardId)) {
      const newDiscovered = new Set(discoveredCards);
      newDiscovered.add(cardId);
      setDiscoveredCards(newDiscovered);
      
      const card = specCards.find(c => c.id === cardId);
      if (card) {
        setTotalScore(prev => prev + card.score);
      }
    }
  };

  const completionPercentage = Math.round((discoveredCards.size / specCards.length) * 100);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore the Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover what makes our Custom AI Mini PC extraordinary. Click each component to unlock detailed specifications and earn discovery points.
          </p>
          
          {/* Progress Stats */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[hsl(var(--gold))]">{discoveredCards.size}/{specCards.length}</div>
              <div className="text-sm text-gray-600">Components Explored</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[hsl(var(--gold))]">{totalScore}</div>
              <div className="text-sm text-gray-600">Discovery Points</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[hsl(var(--gold))]">{completionPercentage}%</div>
              <div className="text-sm text-gray-600">Complete</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-3 mb-8">
            <motion.div
              className="bg-gradient-to-r from-[hsl(var(--gold))] to-yellow-500 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${completionPercentage}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {completionPercentage === 100 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8"
            >
              <Badge className="bg-[hsl(var(--gold))] text-black font-bold px-6 py-3 text-lg">
                🏆 Technology Master - All Components Discovered!
              </Badge>
            </motion.div>
          )}
        </div>

        {/* Spec Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {specCards.map((card) => {
            const isDiscovered = discoveredCards.has(card.id);
            const isSelected = selectedCard === card.id;

            return (
              <motion.div
                key={card.id}
                className={`relative cursor-pointer transition-all duration-300 ${
                  isSelected ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => handleCardClick(card.id)}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`
                  bg-white border-2 rounded-2xl p-6 shadow-sm transition-all duration-300
                  ${isSelected ? 'border-[hsl(var(--gold))] shadow-lg' : 'border-gray-200 hover:border-gray-300'}
                  ${isDiscovered ? '' : 'opacity-90'}
                `}>
                  {/* Discovery Badge */}
                  {isDiscovered && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[hsl(var(--gold))] rounded-full flex items-center justify-center">
                      <span className="text-black text-xs font-bold">✓</span>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{card.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-sm">{card.shortDesc}</p>
                  </div>

                  {/* Score Badge */}
                  <div className="text-center">
                    <Badge variant="outline" className="border-[hsl(var(--gold))] text-[hsl(var(--gold))]">
                      {card.score} pts
                    </Badge>
                  </div>

                  {/* Click Hint */}
                  {!isDiscovered && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--gold))]/10 to-transparent rounded-2xl flex items-end justify-center pb-4">
                      <div className="text-xs text-gray-600 font-medium animate-pulse">
                        Click to discover
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Info Panel */}
        <AnimatePresence>
          {selectedCard && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
            >
              {(() => {
                const card = specCards.find(c => c.id === selectedCard);
                if (!card) return null;

                return (
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{card.icon}</span>
                        <h3 className="text-2xl font-bold text-gray-900">{card.title}</h3>
                      </div>
                      <p className="text-gray-700 mb-6">{card.detailedInfo.performance}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2 mb-6">
                        {card.detailedInfo.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-600">
                            <span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technical Details:</h4>
                      <p className="text-gray-600 mb-6">{card.detailedInfo.techDetails}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-3">Performance Advantage:</h4>
                      <p className="text-gray-600 mb-6">{card.detailedInfo.comparison}</p>
                      
                      <div className="bg-[hsl(var(--gold))]/10 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-900">Discovery Score</span>
                          <span className="text-2xl font-bold text-[hsl(var(--gold))]">{card.score} pts</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        {completionPercentage === 100 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience This Technology?
            </h3>
            <p className="text-gray-600 mb-6">
              You've discovered all the powerful components. Now see how they work together in your custom AI solution.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#contact">
                <Button className="bg-[hsl(var(--gold))] text-black hover:bg-yellow-500 font-semibold">
                  Request Your Custom Configuration
                </Button>
              </a>
              <a href="https://wa.me/0692992530" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                  Speak with a Specialist
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}