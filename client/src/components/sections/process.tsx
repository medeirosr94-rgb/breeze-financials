import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Process() {
  const scrollToForm = () => {
    const form = document.querySelector('form');
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "center" });
      form.querySelector('input')?.focus();
    }
  };

  return (
    <section id="process" className="py-16 wave-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It <span className="text-teal-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600">Get started in 3 simple steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="text-center relative">
            <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Request Your Free Audit</h3>
            <p className="text-gray-600">Fill out our simple form and we'll schedule your complimentary bookkeeping audit within 24 hours.</p>
            
            {/* Connector Line (hidden on mobile) */}
            <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-teal-200 transform translate-x-4 -translate-y-2"></div>
          </div>

          {/* Step 2 */}
          <div className="text-center relative">
            <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Meet Your Expert</h3>
            <p className="text-gray-600">Connect with your dedicated financial expert via Zoom or in-person meeting in the Greater Toronto Area.</p>
            
            {/* Connector Line (hidden on mobile) */}
            <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-teal-200 transform translate-x-4 -translate-y-2"></div>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Your Audit + Discover CFO Value</h3>
            <p className="text-gray-600">Receive your detailed audit results and learn how Fractional CFO services can transform your business.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={scrollToForm}
            className="bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Free Audit Today
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}