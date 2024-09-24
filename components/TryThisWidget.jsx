import React from "react";
import { motion } from "framer-motion";

const FreelancerBanner = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto mb-12 mt-12 p-6 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-lg">

      {/* Key Differentiators Section */}
      <div className="text-center my-12">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">Why Choose AIsistant?</h2>
        <ul className="list-disc list-inside text-left mx-auto w-3/4 text-gray-800 space-y-3">
          <li className="flex items-center space-x-2">
            <span className="text-blue-600 text-2xl">✔️</span>
            <span className="font-medium">Cutting-Edge AI Tech: <span className="italic">Harness the latest advancements for optimal results.</span></span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-blue-600 text-2xl">✔️</span>
            <span className="font-medium">Flexible Pricing: <span className="italic">Choose from one-time gigs, subscriptions, or per-task rates.</span></span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-blue-600 text-2xl">✔️</span>
            <span className="font-medium">Security First: <span className="italic">Your data is safe with us. 24/7 support available.</span></span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-blue-600 text-2xl">✔️</span>
            <span className="font-medium">Continuous Learning: <span className="italic">Our AI agents improve every day.</span></span>
          </li>
        </ul>
      </div>

      {/* Meet Your AI Assistants Section */}
      <div className="my-12">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-800">Meet Your AI Assistants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
            >
              <h3 className="font-semibold text-xl mb-3 text-blue-700">AI Agent {index + 1}</h3>
              <p className="text-gray-700">"Your dedicated assistant ready to tackle any task!"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreelancerBanner;
