import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "@/assets/icons";
import { motion, AnimatePresence } from "framer-motion";
import logoSrc from "@assets/CUSTOM AI for every business_20250425_121748_0000.png";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Solutions", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "Industries", href: "#industries" },
  { label: "AI Demo", href: "#ai-demo" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to add background to header when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-sm shadow-lg py-2" 
        : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            {/* Logo */}
            <Link href="#hero" className="flex items-center">
              <img 
                src={logoSrc} 
                alt="AI4Business South Africa Logo" 
                className="h-10 w-auto" 
              />
              <div className="ml-3">
                <span className={`text-lg font-bold font-montserrat ${scrolled ? 'text-[hsl(var(--primary))]' : 'text-white'}`}>
                  AI4BUSINESS
                </span>
                <span className={`block text-xs font-medium ${scrolled ? 'text-gray-600' : 'text-white/80'}`}>
                  SOUTH AFRICA
                </span>
              </div>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-1"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              >
                <a 
                  href={item.href} 
                  className={`nav-item px-4 py-2 mx-1 rounded-md font-medium transition-colors duration-300 hover:bg-white/10 ${
                    scrolled 
                      ? 'text-gray-700 hover:text-[hsl(var(--primary))]' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="ml-2"
            >
              <a href="https://wa.me/0692992530" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="sm"
                  variant={scrolled ? "default" : "white"}
                  className="font-semibold"
                >
                  <i className="fab fa-whatsapp mr-2"></i> Contact
                </Button>
              </a>
            </motion.div>
          </motion.nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
              className={`focus:outline-none ${
                scrolled 
                  ? 'text-gray-700 hover:text-[hsl(var(--primary))]' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              <MenuIcon />
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white rounded-lg mt-2 shadow-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a 
                    key={item.label}
                    href={item.href} 
                    className="block px-4 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[hsl(var(--primary))] hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="px-4 py-3 border-t border-gray-100">
                  <a 
                    href="https://wa.me/0692992530" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-green-600 font-medium"
                    onClick={closeMenu}
                  >
                    <i className="fab fa-whatsapp mr-2 text-lg"></i> WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
