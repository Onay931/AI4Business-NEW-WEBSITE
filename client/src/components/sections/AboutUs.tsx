import { motion } from "framer-motion";

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

interface StatCardProps {
  icon: string;
  label: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="bg-white rounded-lg p-4 shadow-md flex items-center w-48"
    >
      <div className="w-12 h-12 bg-[hsl(var(--primary)/10)] rounded-full flex items-center justify-center mr-3">
        <i className={`${icon} text-[hsl(var(--primary))]`}></i>
      </div>
      <div>
        <div className="text-sm font-medium text-gray-500">{label}</div>
        <div className="font-bold">{value}</div>
      </div>
    </motion.div>
  );
};

export default function AboutUs() {
  return (
    <section id="about" className="py-16 bg-[hsl(var(--light-gray))] section-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">About AI4Business South Africa</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We exist to demystify AI and make its powerful capabilities accessible and effective for your organization.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold font-montserrat mb-6 text-[hsl(var(--primary))]">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              At AI4Business South Africa, we're passionate about helping local businesses thrive in the global digital economy. Our mission is to empower South African businesses through intelligent automation, enhanced decision-making, and seamless AI integration.
            </p>
            
            <h3 className="text-2xl font-bold font-montserrat mb-6 text-[hsl(var(--primary))]">Our Approach</h3>
            <p className="text-gray-600 mb-6">
              We combine cutting-edge AI knowledge with practical business acumen, delivering tailored solutions that drive measurable success. Our approach includes deep industry research, robust AI model training, and ongoing iterative improvements to ensure businesses achieve maximum ROI.
            </p>
            
            <h3 className="text-2xl font-bold font-montserrat mb-6 text-[hsl(var(--primary))]">Our Commitment</h3>
            <p className="text-gray-600 mb-6">
              We pride ourselves on being a trusted, long-term partner in your AI journey. Our commitment goes beyond implementation — we ensure your business continues to thrive with AI through continuous support, optimization, and adaptation to evolving technologies.
            </p>
            
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="flex flex-wrap gap-4 mt-8"
            >
              <StatCard icon="fas fa-user-tie" label="Our Team" value="AI Experts" />
              <StatCard icon="fas fa-code-branch" label="Experience" value="Industry-Leading" />
              <StatCard icon="fas fa-flag" label="Based In" value="South Africa" />
            </motion.div>
          </motion.div>
          
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="AI4Business South Africa Team" 
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold font-montserrat mb-4">Why Choose AI4Business South Africa?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span className="text-gray-600">Local expertise with global standards</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span className="text-gray-600">Tailored solutions for South African business challenges</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span className="text-gray-600">End-to-end AI integration and support</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span className="text-gray-600">Commitment to ethical AI and data governance</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span className="text-gray-600">Proven track record of successful AI implementations</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
