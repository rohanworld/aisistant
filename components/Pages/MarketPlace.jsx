import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilter, FaChevronDown } from 'react-icons/fa';
import { aiAgents } from './marketplacedata';

const categories = ["All", "Web Development", "Content Creation", "SEO", "Social Media"];

// Custom Banner Component with adjusted spacing
const Banner = ({ rating }) => (
    <div className="absolute top-4 right-4 transform rotate-45 bg-red-600 text-white text-xs font-semibold px-4 py-1 shadow-lg">
      {rating} ★
    </div>
  );
  

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showMenu, setShowMenu] = useState(false);

  // Filtered AI agents based on selected category
  const filteredAgents = selectedCategory === "All"
    ? aiAgents
    : aiAgents.filter(agent => agent.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen p-6 mt-24">
      {/* Header Section */}
      <div className="w-full bg-blue-600 text-white py-8 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Explore AI Agents & Services</h1>
        <p className="text-lg mb-6">Find the perfect AI for your needs</p>
      </div>

      {/* Mega Menu */}
      <div className="relative mt-4 text-center">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg flex items-center justify-center mx-auto"
        >
          <FaFilter className="mr-2" /> Browse Categories <FaChevronDown className="ml-2" />
        </button>
        {showMenu && (
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-white shadow-xl rounded-lg mt-2 p-4 w-80">
            <ul>
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowMenu(false);
                  }}
                  className="py-2 px-4 hover:bg-blue-600 hover:text-white cursor-pointer rounded-md text-lg text-gray-700"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Filter & Search Section */}
      <div className="flex justify-between items-center mt-8 mb-4 px-4">
        <div className="text-lg font-semibold text-gray-800">
          Showing {selectedCategory} Services
        </div>
      </div>

      {/* Service Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {filteredAgents.map(agent => (
          <motion.div
            key={agent.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden relative"
          >
            <img
              src={agent.image}
              alt={agent.name}
              className="w-full h-48 object-cover"
            />
            {/* Slanted Banner */}
            <Banner rating={agent.popularity} />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{agent.name}</h3>
              <p className="text-gray-600 mt-2">{agent.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-blue-600 font-semibold">{agent.price}</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold"
                >
                  Hire Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
