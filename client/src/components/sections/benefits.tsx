import { PieChart, CalendarCheck, Eye, Gauge, Phone, Rocket } from "lucide-react";

const benefits = [
  {
    icon: PieChart,
    title: "Strategic Cash Flow Planning",
    description: "Never run out of cash again. We'll help you plan and optimize your cash flow for sustainable growth."
  },
  {
    icon: CalendarCheck,
    title: "Monthly Financial Reviews",
    description: "Regular deep-dives into your numbers to identify opportunities and address challenges early."
  },
  {
    icon: Eye,
    title: "Forecasting & Scenario Analysis",
    description: "Make informed decisions with detailed financial projections and what-if scenarios."
  },
  {
    icon: Gauge,
    title: "Real-time Business Dashboards",
    description: "Track your KPIs and performance metrics with custom dashboards updated in real-time."
  },
  {
    icon: Phone,
    title: "Expert Guidance, On Call",
    description: "Get immediate access to CFO-level expertise whenever you need strategic financial guidance."
  },
  {
    icon: Rocket,
    title: "Growth Strategy Support",
    description: "Plan for scale with financial strategies that support your business expansion goals."
  }
];

export default function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why You Need a <span className="text-teal-600">Fractional CFO</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            You get the financial leadership your business needs to grow, without the full-time executive cost.
          </p>
          <button 
            onClick={() => {
              const faqSection = document.getElementById('faq');
              if (faqSection) {
                faqSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-teal-600 hover:text-teal-800 text-sm underline"
          >
            What's a Fractional CFO? (Quick explainer)
          </button>
          
          {/* Client Results */}
          <div className="mt-6 grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-teal-50 p-3 rounded-lg text-sm text-gray-700">
              <span className="font-semibold">"We identified $18K in tax savings in our first month."</span> — Sarah, Tech Startup
            </div>
            <div className="bg-teal-50 p-3 rounded-lg text-sm text-gray-700">
              <span className="font-semibold">"Finally understand where our money goes each month."</span> — Mike, Construction
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500 transition-all duration-300 group-hover:scale-110">
                <benefit.icon className="text-2xl text-teal-600 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}