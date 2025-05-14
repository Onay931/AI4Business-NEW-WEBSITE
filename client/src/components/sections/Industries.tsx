import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@/assets/icons";

// Animation variants
const containerVariants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  offscreen: { opacity: 0, y: 20 },
  onscreen: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

interface IndustryCardProps {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, title, description, benefits }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="bg-white rounded-xl shadow p-6 transition-all duration-300 hover:bg-[hsl(var(--light-gray))]"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-[hsl(var(--primary)/10)] rounded-full flex items-center justify-center mr-4">
          <i className={`${icon} text-[hsl(var(--primary))] text-xl`}></i>
        </div>
        <h3 className="text-xl font-bold font-montserrat">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      <div className="space-y-2">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start">
            <div className="w-6 flex-shrink-0">
              <CheckIcon className="text-green-500" size={16} />
            </div>
            <span className="text-sm text-gray-600">{benefit}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function Industries() {
  const industries = [
    {
      icon: "fas fa-shopping-cart",
      title: "Retail & E-commerce",
      description: "Growing e-commerce adoption in SA makes AI crucial for retailers to understand consumer behavior and personalize offerings.",
      benefits: [
        "Dynamic pricing & inventory optimization",
        "Hyper-personalized customer experiences",
        "AI-powered chatbots for 24/7 support"
      ]
    },
    {
      icon: "fas fa-industry",
      title: "Manufacturing",
      description: "Enhancing competitiveness of SA's manufacturing sector through smart factories and optimized resource utilization.",
      benefits: [
        "Predictive maintenance to prevent costly downtime",
        "AI-driven quality control processes",
        "Optimized production scheduling"
      ]
    },
    {
      icon: "fas fa-money-bill-wave",
      title: "Finance & FinTech",
      description: "South Africa has a robust financial sector and a burgeoning FinTech scene. AI is key for innovation and security.",
      benefits: [
        "AI-powered fraud detection and prevention",
        "Smart financial advising (robo-advisors)",
        "Personalized loan and insurance underwriting"
      ]
    },
    {
      icon: "fas fa-hard-hat",
      title: "Mining",
      description: "A cornerstone of the SA economy, AI can drive significant efficiency, safety, and sustainability gains in mining operations.",
      benefits: [
        "Predictive maintenance for heavy machinery",
        "Improved safety through automated monitoring",
        "AI-powered geological data analysis"
      ]
    },
    {
      icon: "fas fa-heartbeat",
      title: "Healthcare",
      description: "Addressing healthcare challenges, improving access in underserved areas, and enhancing diagnostic accuracy.",
      benefits: [
        "AI-assisted diagnostics for early detection",
        "Personalized treatment plans",
        "AI-powered telemedicine solutions"
      ]
    },
    {
      icon: "fas fa-leaf",
      title: "Agriculture (AgriTech)",
      description: "Combating climate challenges, improving food security, and enhancing farm efficiency in South Africa.",
      benefits: [
        "Precision farming using drone and satellite imagery",
        "Crop health monitoring and pest prediction",
        "Optimized irrigation and fertilization"
      ]
    }
  ];

  return (
    <section id="industries" className="py-16 bg-[hsl(var(--light-gray))] section-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Transforming South African Sectors</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AI is not a monolithic solution; its power lies in its adaptability across diverse industries critical to South Africa's economy.
          </p>
        </motion.div>
        
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              benefits={industry.benefits}
            />
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a href="#contact">
            <Button size="lg">
              Discuss Your Industry Needs
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
