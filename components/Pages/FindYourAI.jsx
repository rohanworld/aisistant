import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineSearch, AiFillStar, AiOutlineEye } from 'react-icons/ai';
import { FaArrowDown } from 'react-icons/fa'; // New Icon for Sort

const AIsData = {
  "All": [
    { id: 1, name: "AI Writer", description: "Crafts engaging content in seconds—no coffee needed!", rating: 4.8, reviews: 120, price: "$0.05/word", image: "https://via.placeholder.com/150", category: "Writing" },
    { id: 2, name: "AI Designer", description: "Creates stunning visuals faster than you can say 'Picasso'!", rating: 4.6, reviews: 98, price: "$30/design", image: "https://via.placeholder.com/150", category: "Design" },
    { id: 3, name: "AI Coder", description: "Writes bug-free code while you take a snack break!", rating: 5.0, reviews: 150, price: "$50/hour", image: "https://via.placeholder.com/150", category: "Development" },
    { id: 4, name: "AI Music Composer", description: "Tunes that make you dance—seriously, it's in the code!", rating: 4.5, reviews: 90, price: "$20/song", image: "https://via.placeholder.com/150", category: "All" },
    { id: 5, name: "AI Video Editor", description: "Edits videos like a pro, minus the caffeine jitters!", rating: 4.7, reviews: 75, price: "$40/video", image: "https://via.placeholder.com/150", category: "Design" },
    { id: 6, name: "AI SEO Optimizer", description: "Makes your content shine brighter than a supernova!", rating: 4.9, reviews: 110, price: "$100/project", image: "https://via.placeholder.com/150", category: "Development" },
    { id: 7, name: "AI Chatbot", description: "Your 24/7 customer support—no sleep required!", rating: 4.8, reviews: 130, price: "$50/month", image: "https://via.placeholder.com/150", category: "Development" },
    { id: 8, name: "AI Personal Trainer", description: "Workouts so personalized, you'll think it knows you!", rating: 4.5, reviews: 65, price: "$25/session", image: "https://via.placeholder.com/150", category: "All" },
    { id: 9, name: "AI Language Translator", description: "Translates text faster than you can hit 'send'!", rating: 4.6, reviews: 85, price: "$0.10/word", image: "https://via.placeholder.com/150", category: "Writing" },
    { id: 10, name: "AI Data Analyst", description: "Turns data into insights while you sip your coffee!", rating: 5.0, reviews: 150, price: "$75/hour", image: "https://via.placeholder.com/150", category: "Development" },
    { id: 11, name: "AI Resume Builder", description: "Crafts professional resumes that get you hired—faster than you can say 'job interview'!", rating: 4.7, reviews: 70, price: "$30/resume", image: "https://via.placeholder.com/150", category: "Writing" },
    { id: 12, name: "AI Virtual Assistant", description: "Handles your to-do list like a pro—no coffee breaks needed!", rating: 4.9, reviews: 95, price: "$50/month", image: "https://via.placeholder.com/150", category: "Development" },
    { id: 13, name: "AI Recipe Generator", description: "Whips up recipes faster than you can say 'What's for dinner?'!", rating: 4.4, reviews: 50, price: "$10/recipe", image: "https://via.placeholder.com/150", category: "All" },
  ],
  "Writing": [
    { id: 1, name: "AI Writer" },
    { id: 9, name: "AI Language Translator" },
    { id: 11, name: "AI Resume Builder" }
  ],
  "Design": [
    { id: 2, name: "AI Designer" },
    { id: 4, name: "AI Music Composer" },
    { id: 5, name: "AI Video Editor" }
  ],
  "Development": [
    { id: 3, name: "AI Coder" },
    { id: 6, name: "AI SEO Optimizer" },
    { id: 7, name: "AI Chatbot" },
    { id: 10, name: "AI Data Analyst" },
    { id: 12, name: "AI Virtual Assistant" }
  ]
};
const categories = ["All", "Writing", "Design", "Development"];

const FindYourAI = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredAIs, setFilteredAIs] = useState(AIsData.All);

  useEffect(() => {
    handleFilterAndSort();
  }, [searchTerm, sortOption, selectedCategory]);

  const handleFilterAndSort = () => {
    let filtered = AIsData[selectedCategory];

    if (searchTerm) {
      filtered = filtered.filter((ai) =>
        ai.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (sortOption === 'priceLowToHigh') {
      filtered = filtered.sort((a, b) => parseFloat(a.price.replace(/[^\d.-]/g, '')) - parseFloat(b.price.replace(/[^\d.-]/g, '')));
    } else if (sortOption === 'ratingHighToLow') {
      filtered = filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'reviewsHighToLow') {
      filtered = filtered.sort((a, b) => b.reviews - a.reviews);
    }

    setFilteredAIs(filtered);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen mt-12">
      {/* Hero Section */}
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Discover Your Perfect AI</h1>
        <p className="text-lg text-gray-600 mb-6">
          Need something done? Let's find your perfect AI. They're not on coffee breaks!
        </p>

        {/* Search Bar */}
        <div className="relative w-full max-w-3xl mx-auto mb-8">
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-xl"
            placeholder="Search AI agents by skill…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <AiOutlineSearch className="absolute top-3 right-4 text-gray-500" size={24} />
        </div>

        {/* Filter and Sort Section */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-8 px-4 md:px-0 mx-2">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center md:space-x-4 mb-4 md:mb-0">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-white font-semibold transition duration-300 ${selectedCategory === category ? 'bg-blue-600 shadow-md' : 'bg-gray-400 hover:bg-gray-500'} mr-0.5 mb-0.5`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sorting Dropdown */}
          <div className="relative inline-block text-left">
            <select
              className="p-2 border border-gray-300 rounded-lg shadow-md md:ml-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Sort by</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="ratingHighToLow">Rating: High to Low</option>
              <option value="reviewsHighToLow">Reviews: High to Low</option>
            </select>
            {/* <FaArrowDown className="absolute right-3 top-3 text-gray-500" /> */}
          </div>
        </div>
      </div>

{/* AI Cards Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
  {filteredAIs.map((ai) => (
    <motion.div
      key={ai.id}
      whileHover={{ scale: 1.05 }}
      className="relative flex flex-col justify-between bg-white rounded-lg shadow-lg p-6 text-center transition-transform duration-300 overflow-hidden cursor-pointer h-full"
    >
      {/* Image and Rating */}
      <div>
        <div className="relative">
          <img
            src={ai.image}
            alt={ai.name}
            className="w-full h-40 object-cover rounded-lg shadow-md mb-4"
          />
          <div className={`absolute top-2 right-2 px-2 py-1 rounded-lg shadow-md text-white ${ai.rating >= 4.8 ? 'bg-green-500' : ai.rating >= 4.5 ? 'bg-yellow-500' : 'bg-red-500'}`}>
            <AiFillStar className="inline" />
            <span className="ml-1 font-semibold">{ai.rating}</span>
          </div>
        </div>

        {/* Name */}
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">{ai.name}</h2>
        
        {/* Description with max height and ellipsis */}
        <p className="text-gray-500 mb-4 max-h-16 overflow-y-auto break-words">
          {ai.description}
        </p>
      </div>

      {/* Price and Buttons */}
      <div className="mt-4">
        <p className="text-lg font-bold mb-4">{ai.price}</p>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-500 flex items-center"
          >
            <AiOutlineEye className="mr-1" /> View Details
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition duration-300 hover:bg-gray-400"
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

export default FindYourAI;