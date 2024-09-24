// import React from 'react';

// const JoinNowSection = () => {
//   return (
//     <div className="flex flex-col items-center justify-center bg-gray-50 py-12 px-4 md:px-8 lg:px-16 bg-white">
//       {/* Images Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4 max-w-4xl w-full">
//         {/* First column with two stacked images */}
//         <div className="grid grid-rows-2 gap-4">
//           <div className="relative">
//             <img
//               src="https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg" // replace with actual image path
//               alt="Great job, keep it up"
//               className="rounded-xl w-full h-auto"
//             />
//             {/* Text overlay */}
//             <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-4 py-2 rounded-lg text-sm shadow">
//               <p className="font-medium text-gray-700">Great job, keep it up ⭐️</p>
//             </div>
//           </div>

//           <div className="relative">
//             <img
//               src="https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg" // replace with actual image path
//               alt="Mobile payment"
//               className="rounded-xl w-full h-auto"
//             />
//             {/* Text overlay */}
//             <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-4 py-2 rounded-lg text-sm shadow">
//               <p className="font-medium text-gray-700">Payment in process...</p>
//             </div>
//           </div>
//         </div>

//         {/* Third image occupying full height on the right */}
//         <div className="relative lg:col-span-2">
//           <img
//             src="https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg" // replace with actual image path
//             alt="Payment success"
//             className="rounded-xl w-full h-full object-cover"
//           />
//           {/* Text overlay */}
//           <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-4 py-2 rounded-lg text-sm shadow">
//             <p className="font-medium text-gray-700">Payment succeeded 💰</p>
//             <p className="text-blue-600 font-semibold">+44,518 UZS</p>
//           </div>
//         </div>
//       </div>

//       {/* Call to Action Section */}
//       <div className="text-center max-w-4xl w-full bg-blue-100 p-6 rounded-xl h-44 "> 
//         <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
//           Start your professional journey on AIsistant
//         </h2>
//         <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-900 transition duration-300 inline-flex items-center">
//           Join the community
//           <svg
//             className="w-5 h-5 ml-2"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M5 12h14M12 5l7 7-7 7"
//             ></path>
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JoinNowSection;























import React from 'react';
import { motion } from 'framer-motion';

const JoinNowSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
      {/* Images Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4 max-w-4xl w-full">
        {/* First column with two stacked images */}
        <div className="grid grid-rows-2 gap-4">
          <div className="relative">
            <img
              src="https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg" // replace with actual image path
              alt="Great job, keep it up"
              className="rounded-xl w-full h-auto"
            />
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-4 py-2 rounded-lg text-sm shadow">
              <p className="font-medium text-gray-700">Great job, keep it up ⭐️</p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg" // replace with actual image path
              alt="Mobile payment"
              className="rounded-xl w-full h-auto"
            />
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-4 py-2 rounded-lg text-sm shadow">
              <p className="font-medium text-gray-700">Payment in process...</p>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-2">
          <img
            src="https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg" // replace with actual image path
            alt="Payment success"
            className="rounded-xl w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-4 py-2 rounded-lg text-sm shadow">
            <p className="font-medium text-gray-700">Payment succeeded 💰</p>
            <p className="text-blue-600 font-semibold">+44,518 UZS</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center max-w-4xl w-full bg-blue-100 p-6 rounded-xl mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          Find Your Perfect AI Today
        </h2>
        <h3 className="text-xl text-gray-700 mb-6">
          Don’t wait. Scale your business with the power of AI!
        </h3>
        
        <motion.button 
          className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-900 transition duration-300 inline-flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ scale: [1, 1.05, 1], transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" }}}
        >
          Get Started Now
        </motion.button>
        <div className="mt-4">
          <button className="bg-transparent text-blue-600 border border-blue-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-600 hover:text-white transition duration-300">
            See Pricing Plans
          </button>
        </div>
        
        <p className="mt-6 text-gray-600 italic">
          Don't wait—your AI is ready while you’re still deciding!
        </p>
      </div>
    </div>
  );
};

export default JoinNowSection;
