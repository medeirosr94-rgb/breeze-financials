import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Clock, Star, Phone, CheckCircle, TrendingUp, MapPin, AlertCircle } from "lucide-react";
import { useFormSubmission } from "@/hooks/use-form-submission";
import { MetaPixelEvents } from "@/lib/meta-pixel";
import logoPath from "@assets/Transparent Logo (Finalized)_1753319571910.png";

export default function AuditLandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    businessType: ""
  });

  const { submitLead, isLoading } = useFormSubmission();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitLead(formData);
      setFormData({ name: "", email: "", businessName: "", businessType: "" });
    } catch (error) {
      // Error is handled by the mutation hook
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-50">
      {/* Simple Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img 
              src={logoPath} 
              alt="Breeze Financials Logo" 
              className="h-8 md:h-10 w-auto"
            />
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone size={16} />
              <span>Toronto & GTA</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Get Your <span className="text-teal-600">Free Bookkeeping Audit</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Discover hidden opportunities in your business finances. Our CFO experts will review your books and show you exactly how to save money and boost profits.
            </p>
            
            {/* Urgency Banner */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 text-red-700">
                <AlertCircle size={20} />
                <span className="font-semibold">Limited: Only 3 spots left this week</span>
              </div>
            </div>

            {/* Mobile CTA Above Fold */}
            <div className="block md:hidden mb-8">
              <Button 
                onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full max-w-sm bg-teal-500 text-white py-4 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-200 text-lg"
              >
                Get My Free Audit Now
                <TrendingUp className="ml-2" size={20} />
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <Shield className="text-teal-500" size={20} />
                <span className="text-sm text-gray-600">100% Confidential</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-teal-500" size={20} />
                <span className="text-sm text-gray-600">No Obligation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9/5 Google Reviews</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Benefits */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-teal-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What You'll Get (Free):</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-teal-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold">Complete Financial Review</div>
                      <div className="text-gray-600 text-sm">We'll analyze your books, cash flow, and expenses</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-teal-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold">Money-Saving Opportunities</div>
                      <div className="text-gray-600 text-sm">Find hidden costs and tax deductions you're missing</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-teal-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold">CFO-Level Insights</div>
                      <div className="text-gray-600 text-sm">Strategic recommendations to grow your business</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-teal-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold">Action Plan</div>
                      <div className="text-gray-600 text-sm">Clear next steps to improve your finances</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-teal-500 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Typical Results:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">$25K+</div>
                    <div className="text-teal-100 text-sm">Average First Year Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">89%</div>
                    <div className="text-teal-100 text-sm">See ROI in 3 Months</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div id="audit-form" className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="text-teal-500 mr-2" size={24} />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Request Your Free Audit</h3>
                </div>
                <p className="text-gray-600">Takes 30 seconds • 100% secure • No spam ever</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Your Company Inc."
                  />
                </div>

                <div>
                  <Label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type
                  </Label>
                  <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                    <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="restaurant">Restaurant/Cafe</SelectItem>
                      <SelectItem value="retail">Retail Store</SelectItem>
                      <SelectItem value="contractor">Contractor/Construction</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="professional">Professional Services</SelectItem>
                      <SelectItem value="tech">Tech/Software</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="fitness">Fitness/Wellness</SelectItem>
                      <SelectItem value="beauty">Beauty/Salon</SelectItem>
                      <SelectItem value="automotive">Automotive</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading || !formData.name || !formData.email || !formData.businessName}
                  className="w-full bg-teal-500 text-white py-4 rounded-lg font-semibold hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      Get My Free Audit Now
                      <TrendingUp className="ml-2" size={20} />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-1 text-sm text-gray-500 mb-2">
                  <Shield size={16} />
                  <span>Your information is 100% secure and confidential</span>
                </div>
                <p className="text-xs text-gray-400">
                  We'll contact you within 24 hours to schedule your audit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted by 50+ Toronto Businesses</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "The audit found $18K in savings we didn't know existed. Best decision we made this year."
              </p>
              <div className="font-semibold">Sarah M.</div>
              <div className="text-sm text-gray-500">Tech Startup CEO</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Professional, thorough, and found issues our previous accountant missed."
              </p>
              <div className="font-semibold">Mike R.</div>
              <div className="text-sm text-gray-500">Restaurant Owner</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Clear insights and actionable recommendations. Highly recommend."
              </p>
              <div className="font-semibold">Jennifer L.</div>
              <div className="text-sm text-gray-500">Construction Company</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <img 
            src={logoPath} 
            alt="Breeze Financials Logo" 
            className="h-8 w-auto mx-auto mb-2 brightness-0 invert"
          />
          <p className="text-gray-400 text-sm mb-2">
            Professional Bookkeeping & Fractional CFO Services
          </p>
          <div className="flex items-center justify-center space-x-2 text-teal-400 mb-4">
            <MapPin size={16} />
            <span className="text-sm font-medium">Proudly serving small businesses across Toronto & the GTA</span>
          </div>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <span>CPA Certified</span>
            <span>•</span>
            <span>QuickBooks ProAdvisor</span>
            <span>•</span>
            <span>100% Confidential</span>
          </div>
        </div>
      </footer>
    </div>
  );
}