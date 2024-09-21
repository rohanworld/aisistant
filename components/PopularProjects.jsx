// import React from 'react';
// import { FaStar, FaEye } from 'react-icons/fa';

// // Sample JSON data
// const projectData = [
//     {
//       "tag": "Development",
//       "image": "https://via.placeholder.com/150",
//       "title": "Build a responsive website...",
//       "price": "150,000 UZS",
//       "profilePic": "https://via.placeholder.com/40",
//       "name": "Alex R.",
//       "statusTag": "PRO",
//       "designation": "Expert",
//       "stars": 4.8,
//       "views": 15
//     },
//     {
//       "tag": "Marketing",
//       "image": "https://via.placeholder.com/150",
//       "title": "Social media strategy...",
//       "price": "80,000 UZS",
//       "profilePic": "https://via.placeholder.com/40",
//       "name": "Samantha T.",
//       "statusTag": "PRO",
//       "designation": "Intermediate",
//       "stars": 4.5,
//       "views": 12
//     },
//     {
//       "tag": "Content Writing",
//       "image": "https://via.placeholder.com/150",
//       "title": "Engaging blog posts...",
//       "price": "90,000 UZS",
//       "profilePic": "https://via.placeholder.com/40",
//       "name": "Michael B.",
//       "statusTag": "PRO",
//       "designation": "Advanced",
//       "stars": 4.9,
//       "views": 20
//     },
//     {
//       "tag": "Design",
//       "image": "https://via.placeholder.com/150",
//       "title": "Create stunning graphics...",
//       "price": "120,000 UZS",
//       "profilePic": "https://via.placeholder.com/40",
//       "name": "Laura C.",
//       "statusTag": "PRO",
//       "designation": "Expert",
//       "stars": 4.7,
//       "views": 10
//     },
//     {
//       "tag": "Video Editing",
//       "image": "https://via.placeholder.com/150",
//       "title": "Edit professional videos...",
//       "price": "200,000 UZS",
//       "profilePic": "https://via.placeholder.com/40",
//       "name": "Daniel H.",
//       "statusTag": "PRO",
//       "designation": "Expert",
//       "stars": 5,
//       "views": 25
//     },
//     {
//         "tag": "Development",
//         "image": "https://via.placeholder.com/150",
//         "title": "Build a responsive website...",
//         "price": "150,000 UZS",
//         "profilePic": "https://via.placeholder.com/40",
//         "name": "Alex R.",
//         "statusTag": "PRO",
//         "designation": "Expert",
//         "stars": 4.8,
//         "views": 15
//       },
//       {
//         "tag": "Marketing",
//         "image": "https://via.placeholder.com/150",
//         "title": "Social media strategy...",
//         "price": "80,000 UZS",
//         "profilePic": "https://via.placeholder.com/40",
//         "name": "Samantha T.",
//         "statusTag": "PRO",
//         "designation": "Intermediate",
//         "stars": 4.5,
//         "views": 12
//       }
//   ];

// const PopularProjects = () => {
//   return (
//     <div className="w-full py-10 mt-8">
//         <div className="text-center mb-4 relative z-10">
//         <span className="bg-white border border-black text-black text-sm font-semibold px-3 py-1 rounded-md">
//           Popular Projects
//         </span>
//       </div>
//       <h4 className="text-center text-3xl font-bold mb-6">Popular projects by our freelancers</h4>

//       {/* Horizontal scroll container */}
//       <div className="flex overflow-x-auto space-x-4 pb-4 [&::-webkit-scrollbar]:hidden">
//         {projectData.map((project, index) => (
//           <div key={index} className="bg-white shadow-md rounded-lg w-80 min-w-[320px] max-w-xs p-4 flex-shrink-0">
//             {/* Project Image and Tag */}
//             <div className="relative">
//               <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-t-lg" />
//               <span className="absolute top-2 left-2 bg-white text-xs text-gray-700 font-bold px-2 py-1 rounded-lg shadow-sm">
//                 {project.tag}
//               </span>
//             </div>

//             {/* Project Title and Price */}
//             <div className="mt-4">
//               <h3 className="text-lg font-semibold truncate">{project.title}</h3>
//               <p className="text-blue-600 font-bold">{`from ${project.price}`}</p>
//             </div>

//             {/* Profile and Details */}
//             <div className="flex items-center mt-4">
//               <img
//                 src={project.profilePic}
//                 alt={project.name}
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div className="ml-3">
//                 <p className="font-bold">{project.name}</p>
//                 <p className="text-sm text-gray-500 flex items-center">
//                   {project.designation} <span className="ml-2 bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">{project.statusTag}</span>
//                 </p>
//               </div>
//             </div>

//             {/* Stars and Views */}
//             <div className="flex justify-between items-center mt-4">
//               {/* Star Rating */}
//               <div className="flex">
//                 {Array.from({ length: project.stars }, (_, i) => (
//                   <FaStar key={i} className="text-yellow-400" />
//                 ))}
//               </div>
//               {/* Views */}
//               <div className="flex items-center text-gray-500">
//                 <FaEye className="mr-1" />
//                 <p className="text-sm">{project.views}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>

        
//   );
// };

// export default PopularProjects;




































import React from 'react';
import { FaStar, FaEye } from 'react-icons/fa';

// Sample JSON data
const projectData = [
    {
      "tag": "Development",
      "image": "https://via.placeholder.com/150",
      "title": "Build a responsive website...",
      "price": "150,000 UZS",
      "profilePic": "https://via.placeholder.com/40",
      "name": "Alex R.",
      "statusTag": "PRO",
      "designation": "Expert",
      "stars": 4.8,
      "views": 15
    },
    {
      "tag": "Marketing",
      "image": "https://via.placeholder.com/150",
      "title": "Social media strategy...",
      "price": "80,000 UZS",
      "profilePic": "https://via.placeholder.com/40",
      "name": "Samantha T.",
      "statusTag": "PRO",
      "designation": "Intermediate",
      "stars": 4.5,
      "views": 12
    },
    {
      "tag": "Content Writing",
      "image": "https://via.placeholder.com/150",
      "title": "Engaging blog posts...",
      "price": "90,000 UZS",
      "profilePic": "https://via.placeholder.com/40",
      "name": "Michael B.",
      "statusTag": "PRO",
      "designation": "Advanced",
      "stars": 4.9,
      "views": 20
    },
    {
      "tag": "Design",
      "image": "https://via.placeholder.com/150",
      "title": "Create stunning graphics...",
      "price": "120,000 UZS",
      "profilePic": "https://via.placeholder.com/40",
      "name": "Laura C.",
      "statusTag": "PRO",
      "designation": "Expert",
      "stars": 4.7,
      "views": 10
    },
    {
      "tag": "Video Editing",
      "image": "https://via.placeholder.com/150",
      "title": "Edit professional videos...",
      "price": "200,000 UZS",
      "profilePic": "https://via.placeholder.com/40",
      "name": "Daniel H.",
      "statusTag": "PRO",
      "designation": "Expert",
      "stars": 5,
      "views": 25
    },
    {
        "tag": "Development",
        "image": "https://via.placeholder.com/150",
        "title": "Build a responsive website...",
        "price": "150,000 UZS",
        "profilePic": "https://via.placeholder.com/40",
        "name": "Alex R.",
        "statusTag": "PRO",
        "designation": "Expert",
        "stars": 4.8,
        "views": 15
      },
      {
        "tag": "Marketing",
        "image": "https://via.placeholder.com/150",
        "title": "Social media strategy...",
        "price": "80,000 UZS",
        "profilePic": "https://via.placeholder.com/40",
        "name": "Samantha T.",
        "statusTag": "PRO",
        "designation": "Intermediate",
        "stars": 4.5,
        "views": 12
      }
  ];

const PopularProjects = () => {
    return (
        <div className="w-full py-10 mt-8 px-8 mb-8">
          <div className="text-center mb-4 relative z-10">
            <span className="bg-white border border-black text-black text-sm font-semibold px-3 py-1 rounded-md">
              Popular Projects
            </span>
          </div>
          <h4 className="text-center text-3xl font-bold mb-6">Popular projects by our freelancers</h4>
      
          {/* Horizontal scroll container */}
          <div className="flex overflow-x-auto space-x-4 pb-4 [&::-webkit-scrollbar]:hidden">
            {projectData.map((project, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg w-80 min-w-[320px] max-w-xs flex-shrink-0">
                {/* Project Image and Tag */}
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-t-lg" />
                  <span className="absolute top-2 left-2 bg-white text-xs text-gray-700 font-bold px-2 py-1 rounded-lg shadow-sm">
                    {project.tag}
                  </span>
                </div>
      
                {/* Project Title and Price */}
                <div className="mt-4 px-2">
                  <h3 className="text-lg font-semibold truncate">{project.title}</h3>
                  <p className="text-blue-600 font-bold">{`from ${project.price}`}</p>
                </div>
      
                {/* Profile and Details */}
                <div className="flex items-center mt-4 px-2">
                  <img
                    src={project.profilePic}
                    alt={project.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="font-bold">{project.name}</p>
                    <p className="text-sm text-gray-500 flex items-center">
                      {project.designation} <span className="ml-2 bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">{project.statusTag}</span>
                    </p>
                  </div>
                </div>
      
                {/* Views */}
                <div className="flex justify-end items-center px-2 pb-2">
                  <div className="flex items-center text-gray-500">
                    <FaEye className="mr-1" />
                    <p className="text-sm">{project.views}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
      
};

export default PopularProjects;
