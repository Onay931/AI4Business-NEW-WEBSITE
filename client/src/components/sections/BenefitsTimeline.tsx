import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "@/assets/icons";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, features, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 relative overflow-hidden h-full flex flex-col"
    >
      {/* Glass-like overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
      
      <div className="flex items-center mb-4 relative z-10">
        <div className="w-12 h-12 rounded-full bg-[hsl(var(--gold))] flex items-center justify-center text-white mr-4 shadow-glow">
          {icon}
        </div>
        <h3 className="text-xl font-bold font-montserrat text-white">{title}</h3>
      </div>
      
      <p className="text-white/90 mb-5 relative z-10">{description}</p>
      
      <ul className="space-y-3 mt-auto relative z-10">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-white/85">
            <CheckCircleIcon className="text-[hsl(var(--gold))] mt-1 mr-3 flex-shrink-0" size={16} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function BenefitsTimeline() {
  const benefitCards = [
    {
      icon: <i className="fas fa-rocket text-xl"></i>,
      title: "Operational Excellence",
      description: "Transform your day-to-day operations with intelligent automation that eliminates bottlenecks and maximizes productivity.",
      features: [
        "50-70% reduction in manual processing time",
        "Eliminate human error in critical processes",
        "24/7 operational capability without increased staffing"
      ]
    },
    {
      icon: <i className="fas fa-chart-line text-xl"></i>,
      title: "Revenue Growth",
      description: "Unlock powerful new revenue streams and enhance existing ones through AI-powered insights and personalization.",
      features: [
        "Increase customer conversion rates by up to 30%",
        "Identify high-value opportunities hidden in your data",
        "Develop innovative AI-powered products and services"
      ]
    },
    {
      icon: <i className="fas fa-brain text-xl"></i>,
      title: "Strategic Advantage",
      description: "Stay ahead of competitors with predictive intelligence that informs better strategic decisions and market positioning.",
      features: [
        "AI-driven forecasting with unprecedented accuracy",
        "Early identification of market trends and opportunities",
        "Make data-backed decisions with confidence"
      ]
    },
    {
      icon: <i className="fas fa-lightbulb text-xl"></i>,
      title: "Innovation Acceleration",
      description: "Rapidly test new ideas and bring innovations to market faster with AI-powered development and optimization tools.",
      features: [
        "Reduce time-to-market by up to 40%",
        "AI-assisted creative and design processes",
        "Continuous improvement through smart feedback loops"
      ]
    }
  ];

  return (
    <section id="benefits" className="py-20 gradient-bg section-transition text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-900 to-transparent"></div>
      
      {/* Circuit board pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuLWNpcmN1aXQiIHg9IjAiIHk9IjAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0iTTEwIDAgTDIwIDAgTDIwIDUwIEwxMCA1MCBMMTAgMCBNMzAgMCBMNDAgMCBMNDAgNTAgTDMwIDUwIEwzMCAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTAgMTAgTDUwIDEwIE01MCAyMCBMMCAyMCBNMCAzMCBMNTAgMzAgTTUwIDQwIEwwIDQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybi1jaXJjdWl0KSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-[hsl(var(--gold))] text-[hsl(var(--primary))] rounded-full text-sm font-semibold uppercase tracking-wide mb-3">
            Business Transformation
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-6 leading-tight">
            Revolutionary AI Benefits <br/> Without the Technical Burden
          </h2>
          
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            AI4Business bridges the gap between cutting-edge AI technology and your business goals, 
            delivering transformational results while removing the technical barriers.
          </p>
        </motion.div>
        
        {/* Flow chart visual - central image with connecting lines to benefits */}
        <div className="relative">
          {/* Central concept visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-16"
          >
            <div className="relative">
              <div className="w-56 h-56 bg-gradient-to-br from-blue-400 to-blue-700 rounded-full flex items-center justify-center shadow-glow z-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iZ3JhZCIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iNTAlIiBmeT0iNTAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIi8+PC9zdmc+')] opacity-70"></div>
                
                <div className="text-center z-10">
                  <i className="fas fa-cogs text-4xl text-white mb-2"></i>
                  <h3 className="text-white font-bold text-xl mb-1">AI4BUSINESS</h3>
                  <p className="text-white/80 text-sm px-4">Your AI Transformation Partner</p>
                </div>
                
                {/* Animated pulse effect */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-white/30"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.2, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
              
              {/* Connector lines to benefit cards */}
              <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 200 200">
                <motion.path 
                  d="M100,0 C150,50 150,150 100,200" 
                  stroke="rgba(255,255,255,0.2)" 
                  strokeWidth="1" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.path 
                  d="M100,0 C50,50 50,150 100,200" 
                  stroke="rgba(255,255,255,0.2)" 
                  strokeWidth="1" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
                <motion.path 
                  d="M0,100 L100,100" 
                  stroke="rgba(255,255,255,0.2)" 
                  strokeWidth="1" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.9 }}
                />
                <motion.path 
                  d="M100,100 L200,100" 
                  stroke="rgba(255,255,255,0.2)" 
                  strokeWidth="1" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.1 }}
                />
              </svg>
            </div>
          </motion.div>
          
          {/* Benefit cards in a grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {benefitCards.map((card, index) => (
              <BenefitCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                features={card.features}
                index={index}
              />
            ))}
          </div>
        </div>
        
        {/* Strong call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 p-8 bg-white/10 backdrop-blur-sm rounded-2xl max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">
            <span className="text-[hsl(var(--gold))]">WE POWER</span> SOUTH AFRICA'S BUSINESS AI REVOLUTION
          </h3>
          <p className="text-white/90 mb-6">
            We remove the barriers between you and the technological revolution that is changing everything.
            Don't just adapt to the future — we deliver your future to you, today!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact">
              <Button variant="gold" size="lg" className="text-base px-8 py-6 font-bold">
                Transform Your Business Now
              </Button>
            </a>
            <a href="https://wa.me/0692992530" target="_blank" rel="noopener noreferrer">
              <Button variant="white" size="lg" className="text-base px-8 py-6 font-bold">
                <i className="fab fa-whatsapp mr-2 text-green-500"></i> WhatsApp Us
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Shadow for depth effect */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black/20 to-transparent"></div>
    </section>
  );
}
