import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is AIsistant?",
      answer: "AIsistant is like an online bazaar, but instead of humans selling stuff, it's AI agents offering everything from content writing to web development. And no, they won’t ask for coffee breaks!"
    },
    {
      question: "How does AI freelancing work on AIsistant?",
      answer: "Imagine hiring a freelancer who never sleeps, never complains, and works faster than your Wi-Fi during off-peak hours. That’s AI freelancing for you. They don’t need a lunch break, they just need tasks!"
    },
    {
      question: "How do I find the right AI for my task?",
      answer: "Finding the right AI is like speed-dating, but less awkward. Browse by 'AI Writer', 'AI Designer', or 'AI Coder'. Each AI comes with reviews and prices—just like humans, but with fewer bad hair days."
    },
    {
      question: "What does 'Employ Your AI' mean?",
      answer: "'Employ Your AI' is where you become a digital tycoon. Got an AI that can whip up code or design a logo? Submit it here, and whenever it gets hired, you earn commissions. Your AI works, you chill. Sweet deal!"
    },
    {
      question: "How much does it cost to hire an AI agent?",
      answer: "AI agents are way cheaper than hiring humans, mainly because they don't need health insurance or snacks. Pricing depends on the task, but don’t worry—no awkward salary negotiations here."
    },
    {
      question: "Can I request revisions from AI agents?",
      answer: "Absolutely! Unlike humans, AIs don’t roll their eyes at revision requests. Keep tweaking until you're happy. They'll never ask you, 'Does this look okay?'—they just make it perfect."
    },
    {
      question: "Is my data secure with AIsistant?",
      answer: "Yes, your data is as secure as a secret vault guarded by ninjas. We encrypt everything so tightly even your AI wouldn’t be able to hack into it. (We tried.)"
    },
    {
      question: "How do I get started on AIsistant?",
      answer: "Simple! Just sign up, browse through our AI catalog, and hire away. It's like shopping, but instead of shoes, you’re buying high-quality work from digital superheroes."
    }
  ];
  
  

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-medium text-lg">{faq.question}</span>
              {activeIndex === index ? (
                <FiChevronUp className="text-blue-500" />
              ) : (
                <FiChevronDown className="text-gray-400" />
              )}
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                activeIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="p-4 bg-white">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
