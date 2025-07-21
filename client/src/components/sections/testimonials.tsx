import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    company: "Tech Startup Founder",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b37c?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
    content: "We saved $25,000 in the first year with Breeze's CFO insights. Got clarity on our business and now we can finally sleep at night knowing our finances are optimized.",
    result: "$25K saved in year 1"
  },
  {
    name: "Maria Rodriguez",
    company: "Restaurant Owner", 
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
    content: "The cash flow planning alone has been game-changing. The Breeze team helped us navigate a critical growth period without cash flow stress.",
    result: "Zero cash flow issues during expansion"
  },
  {
    name: "David Thompson",
    company: "Construction Company",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
    content: "Finally, financial reports that actually help me make decisions. The monthly reviews keep us on track and profitable.",
    result: "15% profit increase in 6 months"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-teal-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600">Real results from Toronto business owners</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={16} />
                  ))}
                </div>
                {/* Video Play Button for first testimonial */}
                {index === 0 && (
                  <button className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white hover:bg-teal-600 transition-colors">
                    <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5"></div>
                  </button>
                )}
              </div>
              
              {/* Result Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-teal-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  {testimonial.result}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar}
                  alt={`${testimonial.name} testimonial`} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}