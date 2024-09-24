// import React, { useState } from "react";
// import { FaUserTie, FaBriefcase } from "react-icons/fa";
// import { MdOutlineSell } from "react-icons/md";

// const HowItWorks = () => {
//   // State to manage tab switching
//   const [activeTab, setActiveTab] = useState("clients");

//   // Content for Clients and Sellers
//   const content = {
//     clients: [
//       {
//         title: "Select a service",
//         description:
//           "The Monday store presents a large selection of services from professionals.",
//         image: "https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg",
//         step: 1,
//       },
//       {
//         title: "Pay",
//         description:
//           "The money will be transferred to the seller after the work is done and you approve it.",
//         image: "https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg",
//         step: 2,
//       },
//       {
//         title: "Review and Rate",
//         description:
//           "Provide feedback on the service to help future clients make informed decisions.",
//         image: "https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg",
//         step: 3,
//       },
//       {
//         title: "Request Revisions",
//         description:
//           "If necessary, request revisions to ensure the final product meets your expectations.",
//         image: "https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg",
//         step: 4,
//       },
//     ],
//     sellers: [
//       {
//         title: "Post your service",
//         description:
//           "Sellers can post a variety of services on the Monday platform to attract clients.",
//         image: "https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg",
//         step: 1,
//       },
//       {
//         title: "Get paid",
//         description:
//           "Once the client approves your work, the payment will be released to you.",
//         image: "https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg",
//         step: 2,
//       },
//       {
//         title: "Build Your Profile",
//         description:
//           "Create a compelling profile to showcase your skills and attract more clients.",
//         image: "https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg",
//         step: 3,
//       },
//       {
//         title: "Deliver Quality Work",
//         description:
//           "Ensure timely and high-quality delivery to enhance your reputation and secure repeat clients.",
//         image: "https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg",
//         step: 4,
//       },
//     ],
//   };
  

//   return (
//     <div className="max-w-4xl mx-auto py-10 px-4">
//       {/* Heading */}
//       <h1 className="text-4xl font-bold text-center mb-8">How AIsistant Works?</h1>
      
//       {/* Tabs */}
//       <div className="flex justify-center mb-6 space-x-1">
//         <button
//           className={`${
//             activeTab === "clients"
//               ? "bg-blue-500 text-white flex items-center"
//               : "bg-gray-100 text-gray-600 flex items-center"
//           } px-4 py-2 rounded-md text-sm md:text-base`}
//           onClick={() => setActiveTab("clients")}
//         >
//           <FaBriefcase className="mr-2" size={20} /> For Clients
//         </button>
//         <button
//           className={`${
//             activeTab === "sellers"
//               ? "bg-blue-500 text-white flex items-center"
//               : "bg-gray-100 text-gray-600 flex items-center"
//           } px-4 py-2 rounded-md text-sm md:text-base`}
//           onClick={() => setActiveTab("sellers")}
//         >
//           <MdOutlineSell className="mr-2" size={20} /> For Sellers
//         </button>
//       </div>
  
//       {/* Content Cards */}
//       <div className="flex flex-col space-y-6">
//         {content[activeTab].map((item, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 w-full md:w-3/4 h-auto mx-auto"
//           >
//             {/* Image on the top for mobile, left for desktop */}
//             <img
//               src={item.image}
//               alt={`Step ${item.step}`}
//               className="w-full md:w-72 h-36 object-cover rounded-md"
//             />
          
//             {/* Number, Title, and Description on the right */}
//             <div className="flex flex-col">
//               {/* Step Number */}
//               <div className="text-black font-bold text-2xl mb-2">{item.step}</div>
//               {/* Title */}
//               <h2 className="text-xl font-bold mb-2">{item.title}</h2>
//               {/* Description */}
//               <p className="text-gray-600">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
  
// };

// export default HowItWorks;



































import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaBriefcase } from "react-icons/fa";
import { MdOutlineSell } from "react-icons/md";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("clients");

  const content = {
    clients: [
      {
        title: "Select a Service",
        description: "Browse through our list of AI agents tailored for your needs.",
        image: "https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg",
        step: 1,
      },
      {
        title: "Place an Order",
        description: "Choose your AI assistant and submit the task details.",
        image: "https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg",
        step: 2,
      },
      {
        title: "Sit Back",
        description: "Your AI does the heavy lifting while you relax.",
        image: "https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg",
        step: 3,
      },
      {
        title: "Review and Approve",
        description: "Get instant results and request revisions if needed.",
        image: "https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg",
        step: 4,
      },
      {
        title: "Pay When Satisfied",
        description: "Only release payment once you're happy with the work.",
        image: "https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg",
        step: 5,
      },
    ],
    sellers: [
      {
        title: "Post your service",
        description: "Sellers can post a variety of services on the Monday platform to attract clients.",
        image: "https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg",
        step: 1,
      },
      {
        title: "Get paid",
        description: "Once the client approves your work, the payment will be released to you.",
        image: "https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg",
        step: 2,
      },
      {
        title: "Build Your Profile",
        description: "Create a compelling profile to showcase your skills and attract more clients.",
        image: "https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg",
        step: 3,
      },
      {
        title: "Deliver Quality Work",
        description: "Ensure timely and high-quality delivery to enhance your reputation and secure repeat clients.",
        image: "https://i.pinimg.com/736x/45/c3/b3/45c3b3bdc0bc90966c3d1f2a71ee46b4.jpg",
        step: 4,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">How Does AIsistant Work?</h1>
      <p className="text-center text-lg mb-6">Select, Relax, Approve… It’s that easy!</p>
      <div className="flex justify-center mb-6 space-x-1">
        <button
          className={`${
            activeTab === "clients"
              ? "bg-blue-500 text-white flex items-center"
              : "bg-gray-100 text-gray-600 flex items-center"
          } px-4 py-2 rounded-md text-sm md:text-base`}
          onClick={() => setActiveTab("clients")}
        >
          <FaBriefcase className="mr-2" size={20} /> For Clients
        </button>
        <button
          className={`${
            activeTab === "sellers"
              ? "bg-blue-500 text-white flex items-center"
              : "bg-gray-100 text-gray-600 flex items-center"
          } px-4 py-2 rounded-md text-sm md:text-base`}
          onClick={() => setActiveTab("sellers")}
        >
          <MdOutlineSell className="mr-2" size={20} /> For Sellers
        </button>
      </div>

      <div className="flex flex-col space-y-6">
        {content[activeTab].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 w-full md:w-3/4 h-auto mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1, // Staggered delay
            }}
          >
            <img
              src={item.image}
              alt={`Step ${item.step}`}
              className="w-full md:w-72 h-36 object-cover rounded-md"
            />
            <div className="flex flex-col">
              <div className="text-black font-bold text-2xl mb-2">{item.step}</div>
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
