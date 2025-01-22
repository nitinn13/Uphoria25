import { useState } from 'react';

const ChevronIcon = () => (
  <svg 
    className="w-5 h-5" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M19 9l-7 7-7-7" 
    />
  </svg>
);

const FAQSection = () => {
  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For business customers, we also offer invoice-based payments with net-30 terms."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping times vary by location. Domestic orders typically arrive within 3-5 business days. International shipping can take 7-14 business days. Express shipping options are available at checkout for faster delivery."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team for a return authorization and shipping instructions. Refunds are processed within 5-7 business days after we receive the returned item."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by location. You can view specific shipping rates and estimated delivery times by entering your address during checkout."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a confirmation email with a tracking number. You can use this number to track your package on our website or directly through the carrier's tracking system."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-[#e6c373] mb-8 text-center glowing-text">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-neutral-500"
              onClick={() => toggleQuestion(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-medium text-gray-100">{faq.question}</span>
              <span className={`text-neutral-500 transition-transform duration-200 ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}>
                <ChevronIcon />
              </span>
            </button>
            
            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
            >
              <p className="p-4 text-gray-100 border-t border-gray-200">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;