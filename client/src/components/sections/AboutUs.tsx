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
  }
};

interface ValuePillProps {
  value: string;
}

const ValuePill: React.FC<ValuePillProps> = ({ value }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-md flex items-center"
    >
      <i className="fas fa-star text-[hsl(var(--gold))] mr-2"></i>
      {value}
    </motion.div>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  expertise: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, expertise }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="bg-white rounded-xl p-5 shadow-sm flex items-center border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="w-12 h-12 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
        {name.charAt(0)}
      </div>
      <div>
        <div className="font-bold text-base text-[hsl(var(--primary))]">{name}</div>
        <div className="text-sm text-gray-500">{role}</div>
        <div className="text-xs text-[hsl(var(--gold))] mt-1">{expertise}</div>
      </div>
    </motion.div>
  );
};

export default function AboutUs() {
  const teamMembers = [
    { name: "AI Strategy Team", role: "Business Analysis & Planning", expertise: "Industry-specific AI roadmapping" },
    { name: "Development Team", role: "Custom AI Solutions", expertise: "Machine learning & neural networks" },
    { name: "Integration Team", role: "Implementation & Support", expertise: "Seamless business integration" }
  ];

  const ourValues = ["Innovation", "Excellence", "Integrity", "Partnership", "Transformation"];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-blue-100/50 rounded-bl-full -z-10 opacity-70"></div>
      <div className="absolute left-0 bottom-0 w-1/4 h-1/4 bg-blue-100/50 rounded-tr-full -z-10 opacity-70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-[hsl(var(--primary))] rounded-full uppercase tracking-wide mb-3">Who We Are</span>
          
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-6 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-light))] bg-clip-text text-transparent">
            Powering South Africa's <br/>AI Revolution
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are the bridge between cutting-edge AI technology and your business success, delivering transformational 
            solutions that remove barriers and maximize growth.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
              {/* Golden corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[hsl(var(--gold))] opacity-10 rounded-bl-full"></div>
              
              <h3 className="text-2xl font-bold font-montserrat mb-5 text-[hsl(var(--primary))]">
                Your AI Transformation Partner
              </h3>
              
              <p className="text-gray-600 mb-6 relative z-10">
                At AI4Business South Africa, we don't just implement technology – we revolutionize businesses. Our mission is to make 
                advanced AI accessible to every South African company, delivering solutions that drive unprecedented growth and efficiency.
              </p>
              
              <div className="font-montserrat font-bold text-lg text-[hsl(var(--primary))] mb-5">
                What makes us different:
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <i className="fas fa-bolt text-[hsl(var(--gold))]"></i>
                  </div>
                  <div>
                    <span className="font-bold text-[hsl(var(--primary))]">We remove technological barriers</span>
                    <p className="text-sm text-gray-600">Our experts handle the complex technical work, so you can focus on business outcomes.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <i className="fas fa-handshake text-[hsl(var(--gold))]"></i>
                  </div>
                  <div>
                    <span className="font-bold text-[hsl(var(--primary))]">South African focus, global standards</span>
                    <p className="text-sm text-gray-600">We understand local business challenges while delivering world-class AI solutions.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <i className="fas fa-rocket text-[hsl(var(--gold))]"></i>
                  </div>
                  <div>
                    <span className="font-bold text-[hsl(var(--primary))]">End-to-end transformation</span>
                    <p className="text-sm text-gray-600">From strategy to implementation and ongoing support, we're with you every step of the way.</p>
                  </div>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-8">
                {ourValues.map((value, index) => (
                  <ValuePill key={index} value={value} />
                ))}
              </div>
            </div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-3"
            >
              {teamMembers.map((member, index) => (
                <TeamMember 
                  key={index}
                  name={member.name}
                  role={member.role}
                  expertise={member.expertise}
                />
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right column - Image and CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="relative">
              {/* Main image */}
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="AI Technology and Innovation" 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
              
              {/* Quote overlay */}
              <div className="absolute -bottom-8 -left-8 max-w-md bg-white p-6 rounded-xl shadow-lg border-t border-l border-gray-100">
                <div className="text-[hsl(var(--gold))] text-4xl mb-2">"</div>
                <p className="text-gray-700 italic mb-4">
                  We deliver your future to you, today. Our solutions bridge the gap between cutting-edge 
                  AI technology and your business goals.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold text-[hsl(var(--primary))]">AI4Business</div>
                    <div className="text-xs text-gray-500">South Africa</div>
                  </div>
                  <img 
                    src="/images/logo.png"
                    alt="AI4Business Logo" 
                    className="h-12 w-auto"
                  />
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-16">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-[hsl(var(--primary))]">100%</div>
                  <div className="text-xs text-gray-500">South African Owned</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-[hsl(var(--primary))]">24/7</div>
                  <div className="text-xs text-gray-500">Support & Monitoring</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-[hsl(var(--primary))]">100+</div>
                  <div className="text-xs text-gray-500">AI Technologies</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20 p-8 bg-[hsl(var(--primary))] rounded-2xl shadow-lg max-w-4xl mx-auto text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how we can bridge the gap between your business and the technological revolution 
            that's changing everything. The future is now - will you be leading it?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact">
              <Button variant="gold" size="lg" className="font-semibold w-full sm:w-auto">
                Start Your AI Journey
              </Button>
            </a>
            <a href="https://wa.me/0692992530" target="_blank" rel="noopener noreferrer">
              <Button variant="white" size="lg" className="font-semibold w-full sm:w-auto">
                <i className="fab fa-whatsapp mr-2 text-green-500"></i> Talk to an Expert
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
