import { Button } from "@/components/ui/button";
import { GraduationCap, Building, TrendingUp, MapPin, Calendar } from "lucide-react";

export default function About() {
  const handleBookCall = () => {
    // In a real implementation, this would open a calendar booking widget
    // For now, we'll scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Meet Your <span className="text-teal-600">Future CFO</span>
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* CFO Photo */}
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face" 
                alt="Rodrigo - Fractional CFO" 
                className="w-48 h-48 rounded-full object-cover shadow-lg"
              />
              
              {/* CFO Bio */}
              <div className="text-left flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hi, I'm Rodrigo — your future CFO.</h3>
                <p className="text-lg text-gray-600 mb-6">
                  With over 10 years in finance and a passion for helping small businesses thrive, I've helped dozens of Toronto companies optimize their financial operations and achieve sustainable growth.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <GraduationCap className="text-teal-500 mr-3" size={20} />
                    <span className="text-gray-600">CPA, CMA Certified</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="text-teal-500 mr-3" size={20} />
                    <span className="text-gray-600">10+ Years Experience</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="text-teal-500 mr-3" size={20} />
                    <span className="text-gray-600">50+ Businesses Helped</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-teal-500 mr-3" size={20} />
                    <span className="text-gray-600">Based in Toronto</span>
                  </div>
                </div>
                
                <Button
                  onClick={handleBookCall}
                  className="bg-teal-500 text-white hover:bg-teal-600 rounded-full"
                >
                  <Calendar className="mr-2" size={20} />
                  Book a Quick Intro Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
