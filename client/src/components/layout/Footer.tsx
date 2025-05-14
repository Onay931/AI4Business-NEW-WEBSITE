import { Link } from "wouter";
import companyLogoSrc from "@assets/CUSTOM AI for every business_20250425_121748_0000.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src={companyLogoSrc} 
                alt="AI4Business South Africa Logo" 
                className="h-10 w-auto" 
              />
              <div className="ml-3">
                <span className="text-lg font-bold text-white font-montserrat">AI4BUSINESS</span>
                <span className="block text-xs text-gray-400 font-medium">SOUTH AFRICA</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Tailored AI Integration and Support Services for Businesses. Empowering intelligent transformation across South Africa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Our Services</a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-white transition-colors duration-300">AI Benefits</a>
              </li>
              <li>
                <a href="#industries" className="text-gray-400 hover:text-white transition-colors duration-300">Industries</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">AI Strategy & Consulting</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Custom AI Development</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">System Integration</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Workforce Training</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Maintenance & Optimization</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Data Security & Compliance</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-[hsl(var(--gold))] mt-1 mr-3"></i>
                <span className="text-gray-400">Johannesburg, South Africa</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope text-[hsl(var(--gold))] mt-1 mr-3"></i>
                <span className="text-gray-400">info@ai4business.co.za</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt text-[hsl(var(--gold))] mt-1 mr-3"></i>
                <span className="text-gray-400">+27 (0) 123 456 789</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock text-[hsl(var(--gold))] mt-1 mr-3"></i>
                <span className="text-gray-400">Mon-Fri: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} AI4Business South Africa. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
