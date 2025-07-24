import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoPath from "@assets/Transparent Logo (Finalized)_1753319571910.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToForm = () => {
    const form = document.querySelector('form');
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "center" });
      form.querySelector('input')?.focus();
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoPath} 
              alt="Breeze Financials" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-teal-600 transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('why-breeze')}
              className="text-gray-700 hover:text-teal-600 transition-colors duration-200"
            >
              Why Breeze
            </button>
            <button 
              onClick={() => scrollToSection('bookkeeping')}
              className="text-gray-700 hover:text-teal-600 transition-colors duration-200"
            >
              Bookkeeping
            </button>
            <button 
              onClick={() => scrollToSection('fractional-cfo')}
              className="text-gray-700 hover:text-teal-600 transition-colors duration-200"
            >
              Fractional CFO
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-teal-600 transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-teal-600 transition-colors duration-200"
            >
              Contact
            </button>
            <Button 
              onClick={scrollToForm}
              className="bg-teal-500 text-white hover:bg-teal-600 rounded-full"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4 pb-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-teal-600 py-2 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('why-breeze')}
                className="text-gray-700 hover:text-teal-600 py-2 text-left"
              >
                Why Breeze
              </button>
              <button 
                onClick={() => scrollToSection('bookkeeping')}
                className="text-gray-700 hover:text-teal-600 py-2 text-left"
              >
                Bookkeeping
              </button>
              <button 
                onClick={() => scrollToSection('fractional-cfo')}
                className="text-gray-700 hover:text-teal-600 py-2 text-left"
              >
                Fractional CFO
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-teal-600 py-2 text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-teal-600 py-2 text-left"
              >
                Contact
              </button>
              <Button 
                onClick={scrollToForm}
                className="bg-teal-500 text-white hover:bg-teal-600 rounded-full text-left justify-start"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}