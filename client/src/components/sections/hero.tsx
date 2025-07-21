import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Clock, Star, ArrowRight, Lock } from "lucide-react";
import { useFormSubmission } from "@/hooks/use-form-submission";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: ""
  });

  const { submitLead, isLoading } = useFormSubmission();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitLead(formData);
    setFormData({ name: "", email: "", businessName: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="home" className="relative wave-bg py-16 md:py-24 overflow-hidden">
      {/* Background Wave Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-teal-200 rounded-full animate-wave"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-teal-300 rounded-full animate-wave" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-teal-100 rounded-full animate-wave" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Start with a <span className="text-teal-600">Free Bookkeeping Audit</span>. 
              Unlock CFO-Level Insights.
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get a personalized review from a finance expert and see how a Fractional CFO can transform your business.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <Shield className="text-teal-500" size={20} />
                <span className="text-sm text-gray-600">100% Confidential</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-teal-500" size={20} />
                <span className="text-sm text-gray-600">No Obligation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="text-yellow-500" size={20} />
                <span className="text-sm text-gray-600">5-Star Rated</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-gray-500 mb-4">Trusted by Toronto small businesses</p>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">G</span>
                  <span className="text-sm font-medium">4.9/5 Google Reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto lg:mx-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Request Your Free Audit</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <Label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name
                </Label>
                <Input
                  type="text"
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your Company Inc."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-teal-500 text-white py-4 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-200 transform hover:scale-[1.02]"
              >
                {isLoading ? "Submitting..." : "Request Your Free Audit"}
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </form>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              <Lock className="inline mr-1" size={12} />
              Your information is secure and will never be shared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
