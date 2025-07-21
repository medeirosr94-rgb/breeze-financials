import { Calculator, TrendingUp, Check, Star } from "lucide-react";

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

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Bookkeeping Card */}
          <div id="bookkeeping" className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-teal-300 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="text-2xl text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Bookkeeping Services</h3>
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
          <div id="fractional-cfo" className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-2xl text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Fractional CFO Services</h3>
              <p className="text-teal-100">Go beyond bookkeeping — get real financial strategy, forecasting, and business insight at a fraction of the cost.</p>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-center">
                <Star className="text-yellow-300 mr-3" size={20} />
                <span>Strategic cash flow planning</span>
              </li>
              <li className="flex items-center">
                <Star className="text-yellow-300 mr-3" size={20} />
                <span>Monthly financial reviews</span>
              </li>
              <li className="flex items-center">
                <Star className="text-yellow-300 mr-3" size={20} />
                <span>Forecasting & scenario analysis</span>
              </li>
              <li className="flex items-center">
                <Star className="text-yellow-300 mr-3" size={20} />
                <span>Performance dashboards</span>
              </li>
              <li className="flex items-center">
                <Star className="text-yellow-300 mr-3" size={20} />
                <span>Expert guidance, on call</span>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
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
