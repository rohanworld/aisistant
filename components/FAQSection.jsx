import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is React?",
      answer: "React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update and render them when data changes."
    },
    {
      question: "How do I install React?",
      answer: "You can install React by using npm (Node Package Manager). Run 'npm create-react-app my-app' in your terminal to create a new React project, or add React to an existing project with 'npm install react react-dom'."
    },
    {
      question: "What are React Hooks?",
      answer: "React Hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8 and include hooks like useState, useEffect, useContext, and more."
    },
    {
      question: "What is JSX?",
      answer: "JSX is a syntax extension for JavaScript used in React. It allows you to write HTML-like code within your JavaScript files, making it easier to describe what the UI should look like."
    },
    {
      question: "How does React handle state management?",
      answer: "React manages state using the useState hook in functional components or this.state in class components. For more complex state management, you can use libraries like Redux or the built-in Context API."
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
