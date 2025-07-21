import { Calculator, TrendingUp, Check, Star, DollarSign } from "lucide-react";

export default function ValueLadder() {
  return (
    <section id="why-breeze" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bookkeeping is just the start. Our real value: 
            <span className="text-teal-600"> strategic financial leadership</span> for your business.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What is a Fractional CFO? Get all the expertise, without the full-time cost.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {/* Essentials CFO */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-teal-300 transition-all duration-300">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calculator className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Essentials CFO</h3>
              <p className="text-gray-600 text-sm mb-3">Clarity & Confidence</p>
              <div className="text-center">
                <span className="text-2xl font-bold text-gray-900">$650-$760</span>
                <span className="text-gray-600">/month</span>
              </div>
            </div>
            
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Check className="text-teal-500 mr-2 flex-shrink-0" size={16} />
                <span>Monthly financial snapshots</span>
              </li>
              <li className="flex items-center">
                <Check className="text-teal-500 mr-2 flex-shrink-0" size={16} />
                <span>Quarterly strategic reviews</span>
              </li>
              <li className="flex items-center">
                <Check className="text-teal-500 mr-2 flex-shrink-0" size={16} />
                <span>Basic cash flow tracking</span>
              </li>
              <li className="flex items-center">
                <Check className="text-teal-500 mr-2 flex-shrink-0" size={16} />
                <span>Email support (48hr response)</span>
              </li>
            </ul>
            
            <p className="text-xs text-gray-500 mt-4 italic">
              Perfect for: Small businesses with steady operations seeking financial clarity
            </p>
          </div>

          {/* Growth CFO */}
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">POPULAR</span>
            </div>
            
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Growth CFO</h3>
              <p className="text-teal-100 text-sm mb-3">Proactive Strategic Guidance</p>
              <div className="text-center">
                <span className="text-2xl font-bold">$1,400-$1,800</span>
                <span className="text-teal-100">/month</span>
              </div>
            </div>
            
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Star className="text-yellow-300 mr-2 flex-shrink-0" size={16} />
                <span>Detailed monthly insights</span>
              </li>
              <li className="flex items-center">
                <Star className="text-yellow-300 mr-2 flex-shrink-0" size={16} />
                <span>Monthly strategic forecasting</span>
              </li>
              <li className="flex items-center">
                <Star className="text-yellow-300 mr-2 flex-shrink-0" size={16} />
                <span>Cash flow optimization</span>
              </li>
              <li className="flex items-center">
                <Star className="text-yellow-300 mr-2 flex-shrink-0" size={16} />
                <span>Priority email & Slack support</span>
              </li>
            </ul>
            
            <p className="text-xs text-teal-100 mt-4 italic">
              Perfect for: Growing businesses scaling operations
            </p>
          </div>

          {/* Embedded CFO */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-teal-300 transition-all duration-300">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Embedded CFO</h3>
              <p className="text-gray-600 text-sm mb-3">Fully Integrated Partner</p>
              <div className="text-center">
                <span className="text-2xl font-bold text-gray-900">$2,500-$3,500</span>
                <span className="text-gray-600">/month</span>
              </div>
            </div>
            
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Check className="text-teal-500 mr-2 flex-shrink-0" size={16} />
                <span>Weekly forecasting sessions</span>
              </li>
              <li className="flex items-center">
                <Check className="text-teal-500 mr-2 flex-shrink-0" size={16} />
                <span>Comprehensive financial reporting</span>
              </li>
              <li className="flex items-center">
                <Check className="text-teal-500 mr-2 flex-shrink-0" size={16} />
                <span>Integrated financial dashboards</span>
              </li>
              <li className="flex items-center">
                <Check className="text-teal-500 mr-2 flex-shrink-0" size={16} />
                <span>Weekly strategy + daily access</span>
              </li>
            </ul>
            
            <p className="text-xs text-gray-500 mt-4 italic">
              Perfect for: Rapidly expanding businesses needing deep strategic guidance
            </p>
          </div>
        </div>

        {/* Traditional Bookkeeping vs CFO Comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Bookkeeping Card */}
          <div id="bookkeeping" className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="text-2xl text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Traditional Bookkeeping</h3>
              <p className="text-gray-600">Never worry about receipts or reconciliations again.</p>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check className="text-teal-500 mr-3" size={20} />
                <span>Monthly financial statements</span>
              </li>
              <li className="flex items-center">
                <Check className="text-teal-500 mr-3" size={20} />
                <span>Expense tracking & categorization</span>
              </li>
              <li className="flex items-center">
                <Check className="text-teal-500 mr-3" size={20} />
                <span>Bank reconciliations</span>
              </li>
              <li className="flex items-center">
                <Check className="text-teal-500 mr-3" size={20} />
                <span>Tax preparation support</span>
              </li>
            </ul>
          </div>

          {/* Fractional CFO Card */}
          <div id="fractional-cfo" className="bg-white rounded-2xl p-8 shadow-lg border-2 border-teal-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-2xl text-teal-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Fractional CFO Services</h3>
              <p className="text-gray-600">Go beyond bookkeeping — get real financial strategy, forecasting, and business insight.</p>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-center">
                <Star className="text-teal-500 mr-3" size={20} />
                <span>Strategic cash flow planning</span>
              </li>
              <li className="flex items-center">
                <Star className="text-teal-500 mr-3" size={20} />
                <span>Monthly financial reviews</span>
              </li>
              <li className="flex items-center">
                <Star className="text-teal-500 mr-3" size={20} />
                <span>Forecasting & scenario analysis</span>
              </li>
              <li className="flex items-center">
                <Star className="text-teal-500 mr-3" size={20} />
                <span>Performance dashboards</span>
              </li>
              <li className="flex items-center">
                <Star className="text-teal-500 mr-3" size={20} />
                <span>Expert guidance, on call</span>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-teal-50 rounded-lg">
              <p className="text-sm text-center">
                <strong>Already have a bookkeeper?</strong> See how a CFO-level view can take your business further.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}