import React from "react";

const FreelancerBanner = () => {
  return (
    <div
      className="flex justify-center items-center w-full max-w-4xl h-64 bg-cover rounded-xl p-8 relative mx-auto mb-12 mt-12"
      style={{ 
        backgroundImage: 'url("https://www.shutterstock.com/image-vector/3d-empty-studio-abstract-background-600nw-2431791911.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} // Set the image URL here
    >
      {/* Content */}
      <div className="relative text-center bg-opacity-60 rounded-md p-4">
        {/* Small heading */}
        <p className="text-sm font-medium text-gray-600 mb-4">Try PROFI</p>
        
        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          The best freelancers of our platform
        </h1>
        
        {/* Explore button */}
        <button className="mt-8 px-16 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800">
          Explore
        </button>
      </div>
    </div>
  );
};

export default FreelancerBanner;
