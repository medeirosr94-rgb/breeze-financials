import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logoPath from "@assets/Transparent Logo (Finalized)_1753125211752.png";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoPath} 
                alt="Breeze Financials" 
                className="h-8 w-auto brightness-200"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Professional bookkeeping and fractional CFO services for Toronto small businesses. 
              Transform your finances, transform your business.
            </p>
            <p className="text-teal-400 font-semibold mb-4">Proudly serving Toronto & GTA</p>
            
            {/* Partner Badges */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-gray-800 px-3 py-1 rounded text-xs text-gray-300">
                QuickBooks ProAdvisor
              </div>
              <div className="bg-gray-800 px-3 py-1 rounded text-xs text-gray-300">
                CPA Canada Member
              </div>
              <div className="bg-gray-800 px-3 py-1 rounded text-xs text-gray-300">
                Toronto Board of Trade
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('bookkeeping')}
                  className="hover:text-white transition-colors"
                >
                  Bookkeeping
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('fractional-cfo')}
                  className="hover:text-white transition-colors"
                >
                  Fractional CFO
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('process')}
                  className="hover:text-white transition-colors"
                >
                  Free Audit
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors"
                >
                  Meet Your CFO
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Mail className="mr-2 text-teal-400" size={16} />
                <span>rodrigomedeiros@breezefinancials.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-teal-400" size={16} />
                <span>(416) 555-0123</span>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 text-teal-400" size={16} />
                <span>Toronto, ON</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com/breeze_financials" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Breeze Financials. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}