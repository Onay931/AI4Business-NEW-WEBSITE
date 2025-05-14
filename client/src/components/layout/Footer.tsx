import { Link } from "wouter";
import { motion } from "framer-motion";
import logoSrc from "@assets/CUSTOM AI for every business_20250425_121748_0000.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuLWNpcmN1aXQiIHg9IjAiIHk9IjAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0iTTEwIDAgTDIwIDAgTDIwIDUwIEwxMCA1MCBMMTAgMCBNMzAgMCBMNDAgMCBMNDAgNTAgTDMwIDUwIEwzMCAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTAgMTAgTDUwIDEwIE01MCAyMCBMMCAyMCBNMCAzMCBMNTAgMzAgTTUwIDQwIEwwIDQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybi1jaXJjdWl0KSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <img 
                src={logoSrc} 
                alt="AI4Business South Africa Logo" 
                className="h-10 w-auto" 
              />
              <div className="ml-3">
                <span className="text-lg font-bold text-white font-montserrat">AI4BUSINESS</span>
                <span className="block text-xs text-blue-200 font-medium">SOUTH AFRICA</span>
              </div>
            </div>
            <p className="text-blue-200 mb-6 text-sm">
              South Africa's premier AI solutions provider. Delivering custom AI integration and support services that empower businesses through intelligent transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-blue-200 hover:bg-white/20 hover:text-white transition-colors duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-blue-200 hover:bg-white/20 hover:text-white transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-blue-200 hover:bg-white/20 hover:text-white transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-blue-200 hover:bg-white/20 hover:text-white transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white text-lg font-bold mb-6 border-b border-blue-700 pb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-[hsl(var(--gold))]"></i>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-[hsl(var(--gold))]"></i>
                  Our Solutions
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-[hsl(var(--gold))]"></i>
                  AI Benefits
                </a>
              </li>
              <li>
                <a href="#industries" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-[hsl(var(--gold))]"></i>
                  Industries
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-[hsl(var(--gold))]"></i>
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-[hsl(var(--gold))]"></i>
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white text-lg font-bold mb-6 border-b border-blue-700 pb-2">Our Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-[hsl(var(--gold))]"></i>
                  Strategic AI Transformation
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-[hsl(var(--gold))]"></i>
                  Custom AI Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-[hsl(var(--gold))]"></i>
                  Seamless Integration
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-[hsl(var(--gold))]"></i>
                  Talent Acceleration
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-[hsl(var(--gold))]"></i>
                  Performance Maximization
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-[hsl(var(--gold))]"></i>
                  Secure & Compliant AI
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white text-lg font-bold mb-6 border-b border-blue-700 pb-2">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <div className="mt-1 mr-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-[hsl(var(--gold))]"></i>
                </div>
                <span className="text-blue-200">Johannesburg, South Africa</span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-[hsl(var(--gold))]"></i>
                </div>
                <span className="text-blue-200">info@ai4business.co.za</span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <i className="fab fa-whatsapp text-[hsl(var(--gold))]"></i>
                </div>
                <span className="text-blue-200">
                  <a href="https://wa.me/0692992530" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    +27 (0) 69 299 2530
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-clock text-[hsl(var(--gold))]"></i>
                </div>
                <span className="text-blue-200">Mon-Fri: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-xs mb-4 md:mb-0">
              &copy; {currentYear} AI4Business South Africa. All rights reserved. | <a href="https://www.ai4business.co.za" className="hover:text-white">www.ai4business.co.za</a>
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-200 hover:text-white text-xs transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-white text-xs transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-white text-xs transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
