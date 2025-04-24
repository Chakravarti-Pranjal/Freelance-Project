import { useState } from "react";

const faqData = [
  {
    question: "How is NLB Services different from other recruitment agencies in Delhi?",
    answer: "NLB Services stands out due to its tech-driven, error-minimizing recruitment process that ensures faster and more reliable hiring outcomes.",
  },
  {
    question: "What industries and sectors do you recruit for in Delhi?",
    answer: "We recruit for IT, Healthcare, BFSI, Manufacturing, Telecom, and many more industries in Delhi.",
  },
  {
    question: "Why should I work with NLB Services for recruitment in Delhi?",
    answer: "Because we combine deep local market expertise with global recruitment strategies, ensuring tailored and effective staffing solutions.",
  },
  {
    question: "How do you source candidates in Delhi?",
    answer: "We source candidates via job portals, internal databases, employee referrals, and strategic social media recruiting.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-[#1A365D] mb-8">FAQs</h2>
      <div className="space-y-4 text-left">
        {faqData.map((faq, index) => (
          <div key={index} className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-5 py-4 flex justify-between items-center bg-white hover:bg-gray-50 focus:outline-none"
            >
              <span className="font-medium text-[#1A365D]">{faq.question}</span>
              <span className="text-lg">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="px-5 py-3 bg-gray-50 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
