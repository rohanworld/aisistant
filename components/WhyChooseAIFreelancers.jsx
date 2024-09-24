import React from 'react';
import { motion } from 'framer-motion';

// Sample data for AI Freelancers
const aiFreelancerData = [
    {
        title: "Why Choose AI Freelancers Instead of Humans?",
        description: "AI doesn't need coffee breaks or sleep. Ready when you are!",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "Lightning-Fast Results",
        description: "Get work done in the blink of an eye (or faster!)",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "Consistent Quality",
        description: "AI doesn't have off days. Every task, top-notch quality.",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "Cost-Effective",
        description: "No salary, benefits, or office space. Just results!",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "Instant Scalability",
        description: "Scale up instantly, without the hiring headaches.",
        image: "https://via.placeholder.com/150",
    },
];

const WhyChooseAIFreelancers = () => {
    return (
        <div className="w-full py-10 mt-8 px-8 mb-8">
            <h4 className="text-center text-3xl font-bold mb-6">Why Choose AI Freelancers?</h4>
            {/* Horizontal scroll container */}
            <div className="flex overflow-x-auto space-x-4 pb-4 [&::-webkit-scrollbar]:hidden">
                {aiFreelancerData.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="bg-white shadow-lg rounded-lg w-80 min-w-[320px] max-w-xs flex-shrink-0 p-4 cursor-pointer"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <img src={feature.image} alt={feature.title} className="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                        <p className="text-gray-600 mt-2">{feature.description}</p>
                        <motion.div
                            className="tooltip text-sm bg-gray-200 rounded p-2 absolute mt-2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileHover={{ opacity: 1, scale: 1, transition: { duration: 0.2 } }}
                        >
                            More Info
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseAIFreelancers;
