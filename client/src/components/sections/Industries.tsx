import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 10 
    }
  }
};

interface IndustryCardProps {
  icon: string;
  bgImage: string;
  title: string;
  tagline: string;
  transformation: string;
  index: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, bgImage, title, tagline, transformation, index }) => {
  return (
    <motion.div 
      variants={itemVariants}
      whileHover="hover"
      className="relative overflow-hidden rounded-xl h-72 group"
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110 z-0" 
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/70 to-blue-900/30 z-10"></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6 z-20 text-white">
        <div>
          <div className="mb-2 flex items-center">
            <i className={`${icon} text-[hsl(var(--gold))] mr-3 text-xl`}></i>
            <h3 className="text-xl font-bold font-montserrat">{title}</h3>
          </div>
          <p className="text-white/90 text-sm">
            {tagline}
          </p>
        </div>
        
        <div>
          <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/30 to-white/10 my-4"></div>
          <div className="flex justify-between items-end">
            <div className="text-sm text-white/80 max-w-[80%]">
              <span className="font-bold text-[hsl(var(--gold))]">Your AI Transformation: </span>
              {transformation}
            </div>
            <motion.div 
              className="w-8 h-8 bg-[hsl(var(--gold))] rounded-full flex items-center justify-center text-blue-900 font-bold text-sm"
              whileHover={{ scale: 1.1 }}
            >
              {index + 1}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Industries() {
  const industries = [
    {
      icon: "fas fa-shopping-cart",
      title: "Retail & E-commerce",
      tagline: "AI gives you the edge in South Africa's competitive and rapidly growing digital retail landscape.",
      transformation: "Increase revenues by 25% with AI-powered personalization and smart inventory management.",
      bgImage: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2215&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: "fas fa-industry",
      title: "Manufacturing",
      tagline: "Turn your factory into a competitive powerhouse with AI optimization and predictive capabilities.",
      transformation: "Reduce operational costs by 30% while improving quality control and production efficiency.",
      bgImage: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: "fas fa-money-bill-wave",
      title: "Financial Services",
      tagline: "Stay ahead in South Africa's competitive financial sector with AI-powered security and personalization.",
      transformation: "Detect fraud in real-time and offer hyper-personalized financial products to your customers.",
      bgImage: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: "fas fa-hard-hat",
      title: "Mining & Resources",
      tagline: "Revolutionize safety, efficiency, and sustainability in South Africa's vital mining industry.",
      transformation: "Reduce accidents by 45% and increase resource discovery success with AI geological analysis.",
      bgImage: "https://images.unsplash.com/photo-1607293307267-abe7bc51c9fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: "fas fa-heartbeat",
      title: "Healthcare",
      tagline: "Transform patient outcomes and operational efficiency across South Africa's healthcare system.",
      transformation: "Diagnose diseases up to 40% faster and reduce administrative workload by 60%.",
      bgImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: "fas fa-leaf",
      title: "Agriculture",
      tagline: "Future-proof South African farming against climate challenges with precision AI agriculture.",
      transformation: "Increase crop yields by 35% while reducing water usage and chemical applications.",
      bgImage: "https://images.unsplash.com/photo-1595508064774-5ff825ff0f81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];

  return (
    <section id="industries" className="py-20 bg-gradient-to-br from-white to-[hsl(var(--light-gray))] relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNkZGRkZGQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdjZoLTZ2LTZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-[hsl(var(--primary))] rounded-full uppercase tracking-wide mb-3">Industry Solutions</span>
          
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-4 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] bg-clip-text text-transparent">
            AI Excellence for <br/>Every South African Sector
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your industry has unique challenges. We deliver tailored AI solutions that transform 
            those challenges into your strongest competitive advantages.
          </p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              icon={industry.icon}
              bgImage={industry.bgImage}
              title={industry.title}
              tagline={industry.tagline}
              transformation={industry.transformation}
              index={index}
            />
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center bg-blue-50 p-8 rounded-2xl shadow-sm"
        >
          <h3 className="text-xl font-bold mb-4 text-[hsl(var(--primary))]">
            Don't see your industry? We customize AI solutions for <span className="underline decoration-[hsl(var(--gold))]">every business</span>
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Your business is unique, and so are your AI needs. Our team of experts will work with you to develop 
            a custom AI strategy that addresses your specific challenges and opportunities.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#contact">
              <Button size="lg" className="font-semibold">
                Get Your Custom AI Strategy
              </Button>
            </a>
            <a href="https://wa.me/0692992530" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="flex items-center gap-2 font-semibold">
                <i className="fab fa-whatsapp text-green-500"></i> WhatsApp Us
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
