import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import categoriesData from './categories.json';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Load categories from the JSON file
    setCategories(categoriesData);
  }, []);

  // Split categories for left, center, and right columns
  const leftColumn = categories.slice(0, 2);   // 2 cards for the left column
  const centerColumn = categories.slice(2, 5); // 3 cards for the center column
  const rightColumn = categories.slice(5, 7);  // 2 cards for the right column

  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 bg-gray-50 relative">
      {/* Background circular image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/da/60/0a/da600a65c8e370919d63c4fff2012306.jpg')",
          borderRadius: '50%',
        }}
      />

      <div className="text-center mb-4 relative z-10">
        <span className="bg-white border border-black text-black text-sm font-semibold px-3 py-1 rounded-md">
          Popular Services
        </span>
      </div>

      <h2 className="text-center text-4xl font-bold text-gray-900 mb-12 relative z-10">
        Choose a category to start
      </h2>

      {/* Grid Layout for 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 relative z-10">

        {/* Left Column with 2 Cards */}
        <div className="hidden md:flex flex-col space-y-6 mt-40">
          {leftColumn.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>

        {/* Center Column with 3 Cards */}
        <div className="flex flex-col space-y-6">
          {centerColumn.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>

        {/* Right Column with 2 Cards */}
        <div className="hidden md:flex flex-col space-y-6  mt-40">
          {rightColumn.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
