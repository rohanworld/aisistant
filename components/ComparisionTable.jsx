// import React from 'react';
// import { FaSearch } from 'react-icons/fa';
// import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

// import { FiUsers, FiClock, FiUserPlus } from 'react-icons/fi';

// const ComparisonTable = () => {
//     return (
//         <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 px-4">
//             <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
//                 {/* Title */}
//                 <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-8">
//                     See how Monday saves money, time and nerves!
//                 </h2>

//                 {/* Comparison Table */}
//                 <div className="overflow-x-auto mb-8">
//                     <table className="table-auto w-full text-left border-collapse">
//                         <thead>
//                             <tr>
//                                 <th className="py-3"></th>
//                                 <th className="py-3 text-gray-500 text-sm">Web Studios</th>
//                                 <th className="py-3 text-gray-500 text-sm">Monday</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr className="border-t border-gray-200">
//                                 <td className="py-4 px-2 font-medium text-gray-600">Execution speed</td>
//                                 <td className="py-4 px-2">7 - 30 days</td>
//                                 <td className="py-4 px-2 flex items-center text-blue-600">
//                                     <IoCheckmarkDoneCircleSharp  className="text-blue-500 mr-2 text-2xl" /> On average 1 day 8 hours
//                                 </td>
//                             </tr>

//                             <tr className="border-t border-gray-200">
//                                 <td className="py-4 px-2 font-medium text-gray-600">Price</td>
//                                 <td className="py-4 px-2">From 2,500,000 uzs</td>
//                                 <td className="py-4 px-2 flex items-center text-blue-600">
//                                     <IoCheckmarkDoneCircleSharp  className="text-blue-500 mr-2 text-2xl" /> From 100,000 uzs
//                                 </td>
//                             </tr>

//                             <tr className="border-t border-gray-200">
//                                 <td className="py-4 px-2 font-medium text-gray-600">Artist selection</td>
//                                 <td className="py-4 px-2">3 - 20 employees</td>
//                                 <td className="py-4 px-2 flex items-center text-blue-600">
//                                     <IoCheckmarkDoneCircleSharp  className="text-blue-500 mr-2 text-2xl" /> From 10,000+ performers 
//                                 </td>
//                             </tr>

//                             <tr className="border-t border-gray-200">
//                                 <td className="py-4 px-2 font-medium text-gray-600">Easy to order</td>
//                                 <td className="py-4 px-2">
//                                     Long approvals, Signing Agreements 
//                                 </td>
//                                 <td className="py-4 px-2 flex items-center text-blue-600">
//                                     <IoCheckmarkDoneCircleSharp  className="text-blue-500 mr-2 text-2xl" /> A couple of clicks - your order is ready!
//                                 </td>
//                             </tr>

//                             <tr className="border-t border-gray-200">
//                                 <td className="py-4 px-2 font-medium text-gray-600">Refund in case of delay</td>
//                                 <td className="py-4 px-2">The probability approaches zero</td>
//                                 <td className="py-4 px-2 flex items-center text-blue-600">
//                                     <IoCheckmarkDoneCircleSharp  className="text-blue-500 mr-2 text-2xl" /> 100% 1-click money back guarantee
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>

//                 {/* Statistics Section */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
//                     {/* Active Freelancers */}
//                     <div className="flex flex-col items-center">
//                         <FiUsers className="text-blue-500 text-4xl mb-2" />
//                         <p className="text-3xl font-semibold text-blue-600">5,342</p>
//                         <p className="text-gray-500">Active freelancers</p>
//                     </div>

//                     {/* New Freelancers */}
//                     <div className="flex flex-col items-center">
//                         <FiUserPlus className="text-blue-500 text-4xl mb-2" />
//                         <p className="text-3xl font-semibold text-blue-600">389</p>
//                         <p className="text-gray-500">New freelancers this week</p>
//                     </div>

//                     {/* Average Order Lead Time */}
//                     <div className="flex flex-col items-center">
//                         <FiClock className="text-blue-500 text-4xl mb-2" />
//                         <p className="text-3xl font-semibold text-blue-600">1 day 8 h</p>
//                         <p className="text-gray-500">Average order lead time</p>
//                     </div>
//                 </div>

//                 {/* Button */}
//                 <div className="text-center">
//                     <button className="bg-black text-white px-6 py-3 rounded-full justify-center items-center text-lg font-medium hover:bg-gray-900 transition duration-300">
//                         <FaSearch className="inline-block mr-2 text-2xl" /> Find freelance service right now
//                     </button>


//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ComparisonTable;









































// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const keyDifferentiators = [
//     {
//         title: "Cutting-Edge AI Tech",
//         description: "Built with the latest AI advancements to guarantee results.",
//         quirkyLine: "AI doesn’t take vacations or ask for raises, but they’ll give you the best work every time!"
//     },
//     {
//         title: "Flexible Pricing",
//         description: "Pick from one-time gigs, monthly subscriptions, or per-task rates.",
//         quirkyLine: "Why settle for less when you can have the best at a price that suits you?"
//     },
//     {
//         title: "Security First",
//         description: "Your data is safe with us. 24/7 customer support available.",
//         quirkyLine: "With us, your data is as secure as a vault in Fort Knox!"
//     },
//     {
//         title: "Continuous Learning",
//         description: "Our AI agents get smarter every day.",
//         quirkyLine: "Like a fine wine, our AI only gets better with time!"
//     },
// ];

// const ComparisionTable = () => {
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndex((prevIndex) => (prevIndex + 1) % keyDifferentiators.length);
//         }, 5000); // Change every 5 seconds
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="flex flex-col justify-center items-center min-h-screen px-4">
//             <div className="max-w-7xl w-full bg-white rounded-lg p-10 mb-8">
//                 <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-12">
//                     Why AIsistant Beats the Competition
//                 </h2>

//                 <div className="relative">
//                     <motion.div
//                         className="bg-blue-50 p-10 rounded-lg shadow-md text-center"
//                         key={index}
//                         initial={{ opacity: 0, x: 150 }} // Start from the right
//                         animate={{ opacity: 1, x: 0 }} // Slide in to the center
//                         exit={{ opacity: 0, x: -150 }} // Slide out to the left
//                         transition={{ duration: 0.5 }}
//                     >
//                         <h3 className="text-2xl font-semibold text-blue-600">
//                             {keyDifferentiators[index].title}
//                         </h3>
//                         <p className="text-gray-700 mb-6 text-lg">
//                             {keyDifferentiators[index].description}
//                         </p>
//                         <p className="text-blue-400 font-medium text-xl">
//                             {keyDifferentiators[index].quirkyLine}
//                         </p>
//                     </motion.div>
//                 </div>
                
//                 {/* Call to Action Section */}
//                 <div className="text-center bg-white p-6 rounded-xl mt-8">
//                     <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
//                         Find Your Perfect AI Today
//                     </h2>
//                     <h3 className="text-xl text-gray-700 mb-6">
//                         Don’t wait. Scale your business with the power of AI!
//                     </h3>
                    
//                     <div className="flex justify-center space-x-4">
//                         <motion.button 
//                             className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-900 transition duration-300 inline-flex items-center"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             animate={{ scale: [1, 1.05, 1], transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" }}}
//                         >
//                             Get Started Now
//                         </motion.button>
//                         <button className="bg-transparent text-blue-600 border border-blue-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-600 hover:text-white transition duration-300">
//                             See Pricing Plans
//                         </button>
//                     </div>
                    
//                     <p className="mt-6 text-gray-600 italic">
//                         Don't wait—your AI is ready while you’re still deciding!
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ComparisionTable;



























import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const keyDifferentiators = [
    {
        title: "Cutting-Edge AI Tech",
        description: "Built with the latest AI advancements to guarantee results.",
        quirkyLine: "AI doesn’t take vacations or ask for raises, but they’ll give you the best work every time!"
    },
    {
        title: "Flexible Pricing",
        description: "Pick from one-time gigs, monthly subscriptions, or per-task rates.",
        quirkyLine: "Why settle for less when you can have the best at a price that suits you?"
    },
    {
        title: "Security First",
        description: "Your data is safe with us. 24/7 customer support available.",
        quirkyLine: "With us, your data is as secure as a vault in Fort Knox!"
    },
    {
        title: "Continuous Learning",
        description: "Our AI agents get smarter every day.",
        quirkyLine: "Like a fine wine, our AI only gets better with time!"
    },
];

const Tooltip = ({ text, children, className }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="relative inline-block">
            <div
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
            >
                {children}
            </div>
            {visible && (
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-700 text-white text-sm rounded px-2 py-1 mt-2 ${className}`}>
                    {text}
                </div>
            )}
        </div>
    );
};


const ComparisionTable = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % keyDifferentiators.length);
        }, 5000); // Change every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen px-4">
            <div className="max-w-7xl w-full bg-white rounded-lg p-10 mb-8">
                <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-12">
                    Why AIsistant Beats the Competition
                </h2>

                <div className="relative">
                    <motion.div
                        className="bg-blue-50 p-10 rounded-lg shadow-md text-center"
                        key={index}
                        initial={{ opacity: 0, x: 150 }} // Start from the right
                        animate={{ opacity: 1, x: 0 }} // Slide in to the center
                        exit={{ opacity: 0, x: -150 }} // Slide out to the left
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-semibold text-blue-600">
                            {keyDifferentiators[index].title}
                        </h3>
                        <p className="text-gray-700 mb-6 text-lg">
                            {keyDifferentiators[index].description}
                        </p>
                        <p className="text-blue-400 font-medium text-xl">
                            {keyDifferentiators[index].quirkyLine}
                        </p>
                    </motion.div>
                </div>
                
                {/* Call to Action Section */}
                <div className="text-center bg-white p-6 rounded-xl mt-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                        Find Your Perfect AI Today
                    </h2>
                    <h3 className="text-xl text-gray-700 mb-6">
                        Scale your business with the power of AI!
                    </h3>
                    
                    <div className="flex justify-center space-x-4">
                        <motion.button 
                            className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-900 transition duration-300 inline-flex items-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{ scale: [1, 1.05, 1], transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" }}}
                        >
                            Hire Your AI Now
                        </motion.button>
                        <Tooltip text="Don’t worry, we don't charge overtime! 🕒 AI doesn’t even know what that is! 😜" className="w-80">
                            <button className="bg-transparent text-blue-600 border border-blue-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-600 hover:text-white transition duration-300">
                                See Pricing Plans
                            </button>
                        </Tooltip>
                    </div>
                    
                    <p className="mt-6 text-gray-600 italic">
                        Don't wait—your AI is ready while you're still deciding!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ComparisionTable;
