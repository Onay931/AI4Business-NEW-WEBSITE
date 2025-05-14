import { motion } from "framer-motion";
import { ArrowRightIcon, CheckIcon } from "@/assets/icons";

// Animation variants
const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
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
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold font-montserrat mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2 text-gray-600 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm">
              <CheckIcon className="text-[hsl(var(--primary))] mt-1 mr-2 flex-shrink-0" size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <a href="#contact" className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-light))] font-semibold flex items-center transition-colors duration-300">
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
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450"
    },
    {
      title: "Custom AI Tooling & Development",
      description: "We build bespoke AI solutions when off-the-shelf products don't fit, focusing on scalable, robust, and secure AI tools.",
      features: [
        "Custom machine learning models",
        "Natural language processing solutions",
        "Computer vision applications"
      ],
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450"
    },
    {
      title: "System Integration",
      description: "We seamlessly integrate AI solutions into your existing IT infrastructure, ensuring interoperability with your current systems.",
      features: [
        "Legacy system compatibility",
        "Seamless workflow integration",
        "Minimal disruption implementation"
      ],
      image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450"
    },
    {
      title: "Workforce Training & Upskilling",
      description: "We empower your team with the knowledge and skills to work effectively with AI through customized training programs.",
      features: [
        "Executive AI awareness training",
        "Technical team upskilling",
        "AI-ready culture development"
      ],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450"
    },
    {
      title: "Maintenance & Optimization",
      description: "We provide continuous support to ensure your AI systems perform optimally, with regular updates and performance tuning.",
      features: [
        "Ongoing performance monitoring",
        "Regular model retraining",
        "System optimization & updates"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450"
    },
    {
      title: "Data Security & Compliance",
      description: "We ensure that your AI implementations comply with POPIA and other relevant regulations while maintaining data security.",
      features: [
        "POPIA compliance framework",
        "Secure data handling protocols",
        "Ethical AI implementation"
      ],
      image: "https://pixabay.com/get/g368b0df91da8aff314c0fdbc105ba4fc6c85d65e4006522c1e7ac065395625ecc9279e378090b3c2c3f88325780afe98f2773ea01a9fba94559582aa034b6888_1280.jpg"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
