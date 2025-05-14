import { motion } from "framer-motion";
import { ArrowRightIcon, CheckIcon } from "@/assets/icons";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: (i: number) => ({ 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15, 
      delay: i * 0.1 
    }
  }),
  hover: { 
    y: -10,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
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
      variants={cardVariants}
      whileHover="hover"
      className="bg-white rounded-xl overflow-hidden transition-all border border-gray-100 flex flex-col h-full"
    >
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-10"></div>
        <img src={image} alt={title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 ease-in-out" />
        <div className="absolute bottom-0 left-0 p-4 z-20">
          <Badge 
            variant="gold" 
            className="text-xs font-semibold px-3 py-1 rounded-full"
          >
            Premium Solution
          </Badge>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold font-montserrat mb-2 text-[hsl(var(--primary))]">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <ul className="space-y-2 text-gray-600 mb-6 flex-grow">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm">
              <CheckIcon className="text-[hsl(var(--gold))] mt-1 mr-2 flex-shrink-0" size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <a 
          href="#contact" 
          className="group inline-flex items-center gap-1 text-[hsl(var(--primary))] font-semibold py-2 px-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-300 text-sm self-start mt-auto"
        >
          Get Started
          <ArrowRightIcon className="ml-1 group-hover:translate-x-1 transition-transform duration-200" size={16} />
        </a>
      </div>
    </motion.div>
  );
};

// Badge component for service cards
function Badge({ children, variant, className = "" }: { children: React.ReactNode, variant?: string, className?: string }) {
  const getBgColor = () => {
    switch (variant) {
      case "gold":
        return "bg-[hsl(var(--gold))]";
      default:
        return "bg-blue-500";
    }
  };
  
  return (
    <span className={`inline-block ${getBgColor()} text-primary shadow-md ${className}`}>
      {children}
    </span>
  );
}

export default function Services() {
  const services = [
    {
      title: "Strategic AI Transformation",
      description: "Gain competitive advantage with our comprehensive AI strategy that aligns with your specific business goals and industry challenges.",
      features: [
        "Data-driven AI opportunity assessment",
        "ROI-focused use case prioritization",
        "Future-proof AI implementation roadmap"
      ],
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Custom AI Development",
      description: "We build tailored AI solutions that solve your unique business problems with precision, scalability and security at their core.",
      features: [
        "Proprietary algorithm development",
        "Advanced NLP & computer vision",
        "Intelligent process automation"
      ],
      image: "https://images.unsplash.com/photo-1526378800651-c1a63a3220fb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Seamless Integration",
      description: "Transform your existing systems with AI capabilities without disrupting current operations or requiring complete rebuilds.",
      features: [
        "Zero-downtime implementation",
        "Legacy system enhancement",
        "Enterprise-wide AI connectivity"
      ],
      image: "https://images.unsplash.com/photo-1562577308-c8b2614b9b9c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Talent Acceleration",
      description: "Empower your workforce with cutting-edge AI knowledge and skills through our immersive, role-specific training programs.",
      features: [
        "Executive AI literacy & leadership",
        "Hands-on technical workshops",
        "Continuous learning pathways"
      ],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Performance Maximization",
      description: "Ensure your AI investments continually deliver exceptional value with our proactive monitoring and optimization services.",
      features: [
        "Real-time performance analytics",
        "Automated model refinement",
        "Continuous improvement cycles"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Secure & Compliant AI",
      description: "Deploy AI with confidence knowing your solutions adhere to both South African regulations and global best practices.",
      features: [
        "POPIA-compliant data governance",
        "Ethical AI implementation",
        "Transparent algorithms & decisions"
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-[hsl(var(--light-gray))] relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNkZGRkZGQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdjZoLTZ2LTZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-[hsl(var(--primary))] rounded-full uppercase tracking-wide mb-3">Our Expertise</span>
          
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-4 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] bg-clip-text text-transparent">
            Breakthrough AI Solutions
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock unprecedented growth with our custom AI solutions that enhance operations, 
            drive innovation, and create sustainable competitive advantages.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
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
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-blue-50 p-8 rounded-2xl inline-block max-w-3xl">
            <h3 className="text-xl font-bold mb-4 text-[hsl(var(--primary))]">Not seeing what you need?</h3>
            <p className="text-gray-600 mb-6">
              We develop custom AI solutions for every business challenge. Contact us for a personalized consultation.
            </p>
            <a href="https://wa.me/0692992530" target="_blank" rel="noopener noreferrer">
              <motion.button 
                className="bg-[hsl(var(--primary))] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[hsl(var(--primary-light))] transition-colors duration-300 flex items-center mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fab fa-whatsapp mr-2 text-lg"></i> Contact Our AI Experts
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
