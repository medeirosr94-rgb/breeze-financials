import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is a Fractional CFO?",
    answer: "A Fractional CFO is a part-time Chief Financial Officer who provides high-level financial expertise without the full-time cost. You get strategic financial guidance, cash flow planning, forecasting, and business insights on a flexible basis - perfect for growing businesses that need CFO-level expertise but aren't ready for a full-time hire."
  },
  {
    question: "Will this replace my accountant?",
    answer: "Not at all! We work alongside your existing accountant and bookkeeper. Think of us as the strategic layer above your current financial team. Your accountant handles compliance and tax prep, while we focus on growth strategy, cash flow optimization, and helping you make data-driven business decisions."
  },
  {
    question: "How secure is my data?",
    answer: "Your financial data is 100% secure. We use bank-level encryption, secure cloud storage, and never share your information with third parties. All our team members sign strict confidentiality agreements. We're also insured and follow industry best practices for data protection."
  },
  {
    question: "What's the catch?",
    answer: "There's no catch. The free audit is genuinely free with no strings attached. We provide real value upfront because we're confident in our ability to help your business. If you decide our CFO services aren't right for you after the audit, you're under no obligation to continue."
  },
  {
    question: "How quickly can I get started?",
    answer: "Very quickly! Most clients receive their free bookkeeping audit within 2-3 business days. If you choose to move forward with our Fractional CFO services, we can typically start within a week of your decision."
  },
  {
    question: "What size businesses do you work with?",
    answer: "We primarily work with small to medium-sized businesses in Toronto and the GTA with annual revenues between $500K and $10M. Whether you're a tech startup, restaurant, construction company, or professional services firm, we tailor our approach to your industry and growth stage."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-teal-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about working with a Fractional CFO
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="text-teal-600" size={20} />
                    ) : (
                      <ChevronDown className="text-gray-400" size={20} />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button 
              onClick={() => window.open('https://calendly.com/rodrigomedeiros-breezefinancials/30min', '_blank')}
              className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition-colors duration-200"
            >
              Ask Our CFO Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}