// import React, { useEffect, useState } from 'react';
// import CategoryCard from './CategoryCard';
// import categoriesData from './categories.json';

// const Categories = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     // Load categories from the JSON file
//     setCategories(categoriesData);
//   }, []);

//   // Split categories for left, center, and right columns
//   const leftColumn = categories.slice(0, 2);   // 2 cards for the left column
//   const centerColumn = categories.slice(2, 5); // 3 cards for the center column
//   const rightColumn = categories.slice(5, 7);  // 2 cards for the right column

//   return (
//     <section className="py-16 px-4 sm:px-8 md:px-16 bg-gray-50 relative">
//       {/* Background circular image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-10"
//         style={{
//           backgroundImage: "url('https://i.pinimg.com/736x/da/60/0a/da600a65c8e370919d63c4fff2012306.jpg')",
//           borderRadius: '50%',
//         }}
//       />

//       <div className="text-center mb-4 relative z-10">
//         <span className="bg-white border border-black text-black text-sm font-semibold px-3 py-1 rounded-md">
//           Popular Services
//         </span>
//       </div>

//       <h2 className="text-center text-4xl font-bold text-gray-900 mb-12 relative z-10">
//         Choose a category to start
//       </h2>

//       {/* Grid Layout for 3 columns */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 relative z-10">

//         {/* Left Column with 2 Cards */}
//         <div className="hidden md:flex flex-col space-y-6 mt-40">
//           {leftColumn.map((category) => (
//             <CategoryCard key={category.id} {...category} />
//           ))}
//         </div>

//         {/* Center Column with 3 Cards */}
//         <div className="flex flex-col space-y-6">
//           {centerColumn.map((category) => (
//             <CategoryCard key={category.id} {...category} />
//           ))}
//         </div>

//         {/* Right Column with 2 Cards */}
//         <div className="hidden md:flex flex-col space-y-6  mt-40">
//           {rightColumn.map((category) => (
//             <CategoryCard key={category.id} {...category} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Categories;




















import React from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

const services = [
  {
    title: "AI Writer",
    description: "Writes better than your college roommate… guaranteed!",
    price: "$0.05 / word",
    buttonText: "Hire AI Writer"
  },
  {
    title: "AI Designer",
    description: "No pencils, no problem. We’ve got pixels instead!",
    price: "$30 / design",
    buttonText: "Hire AI Designer"
  },
  {
    title: "AI Coder",
    description: "Why debug when you can de-chill? Let the AI handle it.",
    price: "$50 / hour",
    buttonText: "Hire AI Coder"
  },
  {
    title: "AI Marketer",
    description: "Run data-driven marketing campaigns that never sleep.",
    price: "Starting at $29.99/month",
    buttonText: "Hire AI Marketer"
  },
  {
    title: "AI Coder",
    description: "Why debug when you can de-chill? Let the AI handle it.",
    price: "$50 / hour",
    buttonText: "Hire AI Coder"
  },
  {
    title: "AI Designer",
    description: "No pencils, no problem. We’ve got pixels instead!",
    price: "$30 / design",
    buttonText: "Hire AI Designer"
  },
];

const Categories = () => {
  const [confettiVisible, setConfettiVisible] = React.useState(false);

  const handleHoverStart = () => {
    setConfettiVisible(true);
    setTimeout(() => setConfettiVisible(false), 2000); // Hide confetti after 2 seconds
  };

  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 bg-gray-50 relative">
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Your New AI Assistants</h2>
      </motion.div>

      {confettiVisible && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow cursor-pointer"
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onHoverStart={handleHoverStart}
          >
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <span className="text-lg font-bold">{service.price}</span>
            <div className="mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                {service.buttonText}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
