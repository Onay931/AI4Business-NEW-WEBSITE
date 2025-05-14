import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
  offscreen: { opacity: 0, x: -20 },
  onscreen: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

interface RiskCardProps {
  icon: string;
  title: string;
  description: string;
}

const RiskCard: React.FC<RiskCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg"
    >
      <div className="flex items-start">
        <div className="mr-4 text-red-500">
          <i className={`${icon} text-3xl`}></i>
        </div>
        <div>
          <h3 className="text-xl font-bold text-red-700 mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function CostOfInaction() {
  const risks = [
    {
      icon: "fas fa-chart-line-down",
      title: "Eroding Competitive Edge",
      description: "Competitors embracing AI will become faster, more efficient, and more attuned to customer needs, leaving non-adopters struggling to keep up."
    },
    {
      icon: "fas fa-money-bill-wave",
      title: "Increased Operational Costs",
      description: "Manual processes and inefficiencies become increasingly expensive compared to AI-automated alternatives — up to 2.5x higher operational costs."
    },
    {
      icon: "fas fa-users-slash",
      title: "Higher Customer Churn",
      description: "Failure to personalize experiences and meet evolving customer expectations leads to dissatisfaction and defection — up to 30% higher customer churn."
    },
    {
      icon: "fas fa-hourglass-half",
      title: "Slower Go-to-Market",
      description: "Lengthy development cycles and inability to quickly adapt mean missing market windows — 60% longer go-to-market time."
    },
    {
      icon: "fas fa-store-alt-slash",
      title: "Risk of Obsolescence",
      description: "In the long term, businesses that fail to integrate AI risk becoming irrelevant as entire industries are reshaped by intelligent technologies."
    }
  ];

  return (
    <section className="py-16 bg-white section-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">The Real Cost of Inaction</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Delaying AI adoption isn't just missing an opportunity; it's incurring significant, compounding costs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="The cost of inaction in AI adoption" 
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-6"
          >
            {risks.map((risk, index) => (
              <RiskCard
                key={index}
                icon={risk.icon}
                title={risk.title}
                description={risk.description}
              />
            ))}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-xl font-semibold text-red-600 mb-6">The message is clear: The cost of inaction far outweighs the investment in AI.</p>
          <a href="#contact">
            <Button size="lg">
              Avoid Falling Behind — Contact Us Today
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
