import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling down 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const form = document.querySelector('form');
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "center" });
      form.querySelector('input')?.focus();
    }
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
    }`}>
      <Button
        onClick={scrollToForm}
        className="bg-teal-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300 hover:scale-105 animate-float"
      >
        <Calculator className="mr-2" size={20} />
        Request Free Audit
      </Button>
    </div>
  );
}