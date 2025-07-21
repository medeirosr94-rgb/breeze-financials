import { Button } from "@/components/ui/button";
import { Users, Award, Target, MapPin, Calendar } from "lucide-react";

export default function About() {
  const handleBookCall = () => {
    window.open('https://calendly.com/rodrigomedeiros-breezefinancials/30min?month=2025-07', '_blank');
  };

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Meet Your <span className="text-teal-600">CFO Team</span>
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Team Visual - Professional team illustration */}
              <div className="w-48 h-48 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center shadow-lg">
                <Users className="text-teal-600" size={80} />
              </div>
              
              {/* Team Bio */}
              <div className="text-left flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Expert Finance Team</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Our expert team of Fractional CFOs and bookkeeping professionals brings decades of combined experience to your business. With Breeze Financials, you get all the benefits of a full finance department—without the overhead or complexity.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Award className="text-teal-500 mr-3" size={20} />
                    <span className="text-gray-600">Certified CPAs and Financial Strategists</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-teal-500 mr-3" size={20} />
                    <span className="text-gray-600">20+ Years' Collective Experience</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="text-teal-500 mr-3" size={20} />
                    <span className="text-gray-600">Personalized, Hands-on Service</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-teal-500 mr-3" size={20} />
                    <span className="text-gray-600">Based in Toronto, Serving Canada</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleBookCall}
                    className="bg-teal-500 text-white hover:bg-teal-600 rounded-full"
                  >
                    <Calendar className="mr-2" size={20} />
                    Book a Free Strategy Call
                  </Button>
                  <Button
                    variant="outline"
                    className="border-teal-500 text-teal-600 hover:bg-teal-50 rounded-full"
                  >
                    Ask Our CFO Team
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Available today • Free consultation • No commitment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}