import { Button } from "@/components/ui/button";
import { Calculator, Phone, Shield } from "lucide-react";
import { MetaPixelEvents } from "@/lib/meta-pixel";

export default function FinalCTA() {
  const scrollToForm = () => {
    // Track form scroll interaction
    MetaPixelEvents.trackSectionView('final-cta-form-scroll');
    
    const form = document.querySelector('form');
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "center" });
      form.querySelector('input')?.focus();
    }
  };

  const handleBookCall = () => {
    // Track Calendly booking click from final CTA
    MetaPixelEvents.trackCalendlyClick();
    window.open('https://calendly.com/rodrigomedeiros-breezefinancials/30min?month=2025-07', '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-teal-500 to-teal-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Business Finances?
        </h2>
        <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
          Start with your free bookkeeping audit and discover how a Fractional CFO can take your business to the next level.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <Button
            onClick={scrollToForm}
            className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:scale-105 w-full sm:w-auto min-w-0"
          >
            <Calculator className="mr-2 flex-shrink-0" size={20} />
            <span className="whitespace-nowrap">Request Free Audit</span>
          </Button>
          <span className="text-teal-200 text-sm">or</span>
          <Button
            onClick={handleBookCall}
            variant="outline"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition-all duration-200 hover:scale-105 w-full sm:w-auto min-w-0"
          >
            <Phone className="mr-2 flex-shrink-0" size={20} />
            <span className="whitespace-nowrap">Book Instant 15-Min Call</span>
          </Button>
        </div>
        
        <p className="text-sm text-teal-200 mt-6">
          <Shield className="inline mr-1" size={16} />
          100% confidential • No obligation • Available today
        </p>
      </div>
    </section>
  );
}