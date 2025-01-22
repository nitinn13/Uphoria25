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
      question: "Will the university be providing us accommodations?",
      answer: "Yes! Your safe stay will be ensured if your event requires it by the university which will be payable by you at a fair cost."
    },
    {
      question: "Can I participate in multiple events?",
      answer: "Yes! It is completely alright for you to participate in any number of events you'd like to, as long as their timelines don't crash. Be sure to get registered ASAP!"
    },
    {
      question: "What is the eligibility criteria for registration?",
      answer: "While Eligibility varies form event to event, students in 10+2 or equivalent grade and students currently pursuing undergraduate course in any discipline are eligible for most of the listed events."
    },
    {
      question: "How can I pay the registration fee?",
      answer: "The payment can be made through credit/debit card, UPI or Wallet , through the link mentioned in Unstop's description."
    },
  
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 mt-[-5vh] sm:mt-[-15vh]">
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
className="w-full flex justify-between items-center p-4 text-left focus:outline-none hover:font-bold "

              onClick={() => toggleQuestion(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-[3vx]  text-gray-100">{faq.question}</span>
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