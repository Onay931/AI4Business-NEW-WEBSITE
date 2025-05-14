import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "@/assets/icons";
import { motion, AnimatePresence } from "framer-motion";
import companyLogoSrc from "@assets/CUSTOM AI for every business_20250425_121748_0000.png";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "Industries", href: "#industries" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to add shadow to header when scrolled
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
    <header className={`fixed w-full bg-white z-50 ${scrolled ? "shadow-md" : ""} transition-shadow duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="#hero" className="flex items-center">
              <img 
                src={companyLogoSrc} 
                alt="AI4Business South Africa Logo" 
                className="h-12 w-auto" 
              />
              <div className="ml-3">
                <span className="text-xl font-bold text-[hsl(var(--primary))] font-montserrat">AI4BUSINESS</span>
                <span className="block text-xs text-gray-600 font-medium">SOUTH AFRICA</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="nav-item text-gray-700 hover:text-[hsl(var(--primary))] font-medium transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
              className="text-gray-500 hover:text-[hsl(var(--primary))] focus:outline-none focus:text-[hsl(var(--primary))]"
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
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <a 
                    key={item.label}
                    href={item.href} 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[hsl(var(--primary))] hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
