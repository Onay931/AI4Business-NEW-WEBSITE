import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Animation variants
const timelineItemVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: (i: number) => ({ 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 }
  })
};

interface TimelineItemProps {
  stage: string;
  title: string;
  description: string;
  example: string;
  reverse?: boolean;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ stage, title, description, example, reverse = false, index }) => {
  return (
    <motion.div
      custom={index}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={timelineItemVariants}
      className="md:grid md:grid-cols-2 md:gap-8 items-center"
    >
      <div className={`${reverse ? "md:col-start-2" : "md:text-right"} mb-8 md:mb-0 p-6 bg-white/10 backdrop-blur-sm rounded-xl`}>
        <div className="text-[hsl(var(--gold))] font-bold mb-2">{stage}</div>
        <h3 className="text-2xl font-bold font-montserrat mb-4">{title}</h3>
        <p className="mb-4">{description}</p>
        <div className="bg-white/5 p-4 rounded-lg">
          <p className="text-sm italic">
            <i className="fas fa-quote-left text-[hsl(var(--gold))] mr-2 opacity-50"></i>
            {example}
            <i className="fas fa-quote-right text-[hsl(var(--gold))] ml-2 opacity-50"></i>
          </p>
        </div>
      </div>
      <div className={`hidden md:flex ${reverse ? "justify-end" : "justify-start"}`}>
        <div className="bg-[hsl(var(--gold))] text-[hsl(var(--primary))] w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg z-10">
          {index + 1}
        </div>
      </div>
    </motion.div>
  );
};

export default function BenefitsTimeline() {
  const timelineItems = [
    {
      stage: "IMMEDIATE (0-6 MONTHS)",
      title: "Enhanced Efficiency & Optimization",
      description: "Automate repetitive tasks, streamline workflows, and reduce manual errors.",
      example: "Example: AI-powered data entry automation saving hundreds of man-hours."
    },
    {
      stage: "SHORT-TERM (6-12 MONTHS)",
      title: "Improved Personalization & Agility",
      description: "Deliver tailored customer experiences and respond rapidly to changing market conditions.",
      example: "Example: E-commerce AI recommending products with 70% accuracy based on browsing history."
    },
    {
      stage: "MEDIUM-TERM (12-24 MONTHS)",
      title: "Accelerated Innovation & Risk Mitigation",
      description: "Leverage AI to uncover new insights and proactively identify and mitigate potential risks.",
      example: "Example: AI predicting equipment failure 2 weeks in advance, preventing costly downtime."
    },
    {
      stage: "LONG-TERM (24+ MONTHS)",
      title: "Sustainable Competitive Edge & Growth",
      description: "Establish a strong competitive advantage and build a resilient, future-proof business model.",
      example: "Strategic decision-making powered by AI-driven predictive analytics leading to market leadership."
    }
  ];

  return (
    <section id="benefits" className="py-16 gradient-bg section-transition text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">The Tangible Benefits of AI Adoption</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Investing in AI with AI4Business SA delivers compounding returns across your organization over time.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-white/20 transform -translate-x-1/2"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-0">
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={index}
                stage={item.stage}
                title={item.title}
                description={item.description}
                example={item.example}
                reverse={index % 2 !== 0}
                index={index}
              />
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#contact">
            <Button variant="gold" size="lg">
              Start Your AI Journey Today
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
