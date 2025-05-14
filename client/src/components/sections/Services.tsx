import { motion } from "framer-motion";
import { ArrowRightIcon, CheckIcon } from "@/assets/icons";

// Animation variants
const cardVariants = {
  offscreen: { y: 30, opacity: 0 },
  onscreen: (i: number) => ({ 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
};

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features, image, index }) => {
  return (
    <motion.div
      custom={index}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100"
    >
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold font-montserrat mb-3 text-[hsl(var(--primary))]">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <ul className="space-y-2 text-gray-600 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm">
              <CheckIcon className="text-[hsl(var(--gold))] mt-1 mr-2 flex-shrink-0" size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <a href="#contact" className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-light))] font-semibold flex items-center transition-colors duration-300 text-sm">
          Learn More <ArrowRightIcon className="ml-2" size={16} />
        </a>
      </div>
    </motion.div>
  );
};

export default function Services() {
  const services = [
    {
      title: "AI Strategy & Consulting",
      description: "We co-create a strategic roadmap aligned with your business goals, identifying high-impact AI use cases and ensuring ethical AI deployment.",
      features: [
        "Business-specific AI roadmapping",
        "Use case identification & prioritization",
        "Ethical AI governance frameworks"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Custom AI Tooling & Development",
      description: "We build bespoke AI solutions when off-the-shelf products don't fit, focusing on scalable, robust, and secure AI tools.",
      features: [
        "Custom machine learning models",
        "Natural language processing solutions",
        "Computer vision applications"
      ],
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "System Integration",
      description: "We seamlessly integrate AI solutions into your existing IT infrastructure, ensuring interoperability with your current systems.",
      features: [
        "Legacy system compatibility",
        "Seamless workflow integration",
        "Minimal disruption implementation"
      ],
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Workforce Training & Upskilling",
      description: "We empower your team with the knowledge and skills to work effectively with AI through customized training programs.",
      features: [
        "Executive AI awareness training",
        "Technical team upskilling",
        "AI-ready culture development"
      ],
      image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Maintenance & Optimization",
      description: "We provide continuous support to ensure your AI systems perform optimally, with regular updates and performance tuning.",
      features: [
        "Ongoing performance monitoring",
        "Regular model retraining",
        "System optimization & updates"
      ],
      image: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Data Security & Compliance",
      description: "We ensure that your AI implementations comply with POPIA and other relevant regulations while maintaining data security.",
      features: [
        "POPIA compliance framework",
        "Secure data handling protocols",
        "Ethical AI implementation"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white section-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Our AI Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end solutions to help your business harness the power of AI with tailored integration and ongoing support.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              image={service.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
