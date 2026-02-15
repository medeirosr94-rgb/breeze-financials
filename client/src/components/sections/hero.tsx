import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Clock, Star, ArrowRight, Lock, TrendingUp } from "lucide-react";

const CONTACT_EMAIL = "rodrigomedeiros@breezefinancials.com";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Free Audit Request - ${formData.businessName}`);
    const body = encodeURIComponent(
      `Hi Breeze Financials,\n\nI'd like to request a free bookkeeping audit.\n\nName: ${formData.name}\nEmail: ${formData.email}\nBusiness: ${formData.businessName}\n\nLooking forward to hearing from you!`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
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

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-center max-w-6xl mx-auto">
          {/* Left Column: Content */}
          <div className="text-center lg:text-left flex flex-col justify-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              You Get a <span className="text-teal-600">Free Bookkeeping Audit</span>. 
              Plus CFO-Level Insights.
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              You receive a personalized review from a finance expert and discover how a Fractional CFO can transform your business.
            </p>
            
            {/* Success Metrics */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 mb-8 border border-teal-100">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-teal-600 mb-1">89%</div>
                  <div className="text-sm text-gray-600">You see ROI in 3 months</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600 mb-1">$25K</div>
                  <div className="text-sm text-gray-600">Your average first year savings</div>
                </div>
              </div>
            </div>
            
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
              <p className="text-sm text-gray-500 mb-4">Trusted by 50+ Toronto businesses</p>
              <div className="flex items-center justify-center lg:justify-start space-x-6 mb-4">
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2 font-bold">G</span>
                  <span className="text-sm font-medium">4.9/5 Google Reviews</span>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="bg-gray-100 px-3 py-1 rounded text-xs text-gray-600">
                  CPA Certified
                </div>
                <div className="bg-gray-100 px-3 py-1 rounded text-xs text-gray-600">
                  QuickBooks ProAdvisor
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto animate-fadeInUp">
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
                className="w-full bg-teal-500 text-white py-4 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-200 transform hover:scale-[1.02]"
              >
                Request Your Free Audit
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </form>
            
            <div className="text-center mt-4 space-y-2">
              <p className="text-xs text-gray-500">
                <Lock className="inline mr-1" size={12} />
                Data is 100% confidential & secure
              </p>
              <p className="text-sm text-gray-600 italic">
                "No spam. No hard sell. Just clear, actionable insights for your business."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}