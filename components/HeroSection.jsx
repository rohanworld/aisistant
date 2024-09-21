import React, { useState } from 'react';
import { IoPeopleCircleSharp } from "react-icons/io5";

const HeroSection = () => {
    const [selectedService, setSelectedService] = useState(""); // Single service selection
    const [searchQuery, setSearchQuery] = useState("");

    const handleTagClick = (service) => {
        if (selectedService === service) {
            setSelectedService(""); // Deselect if clicked again
            // alert(`Removed: ${service}`);
        } else {
            setSelectedService(service); // Select new service
            // alert(`Selected: ${service}`);
        }
    };

    const isSelected = (service) => selectedService === service;

    const handleSearch = () => {
        alert(`Searching for: ${searchQuery}`);
    };

    return (
        <section className="relative w-full h-[80vh] flex flex-col justify-center items-center bg-white text-center pt-12 -mb-16"> {/* Reduced the height */}
            
            {/* Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mt-0 -mt-24">
                Welcome to <span className="text-blue-500">AIsistant</span>, the freelance
                <br /> marketplace for all your needs
            </h1>

            {/* Subheading */}
            <p className="text-gray-500 mt-4 lg:text-lg">
                Find the best performer for your task right now
            </p>

            {/* Search Bar */}
            <div className="relative w-full max-w-lg mt-6 px-1">
                <input
                    type="text"
                    placeholder="What type of service do you need?"
                    className="w-full p-4 pr-24 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-600"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>

            {/* Services */}
            <div className="mt-6 flex flex-wrap justify-center space-x-4 cursor-pointer">
                <span
                    className={`py-2 px-4 rounded-full cursor-pointer transition-colors ${isSelected('Top services') ? 'bg-orange-500 text-white' : 'bg-orange-200 text-orange-600 hover:bg-orange-300'}`}
                    onClick={() => handleTagClick('Top services')}
                >
                    🔥 Top services:
                </span>
                <span
                    className={`py-2 px-4 rounded-full cursor-pointer transition-colors ${isSelected('Social & SMM') ? 'bg-gray-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    onClick={() => handleTagClick('Social & SMM')}
                >
                    Social & SMM
                </span>
                <span
                    className={`py-2 px-4 rounded-full cursor-pointer transition-colors ${isSelected('SEO') ? 'bg-gray-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    onClick={() => handleTagClick('SEO')}
                >
                    SEO
                </span>
                <span
                    className={`py-2 px-4 rounded-full cursor-pointer transition-colors ${isSelected('Copywriting') ? 'bg-gray-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    onClick={() => handleTagClick('Copywriting')}
                >
                    Copywriting
                </span>
                <span
                    className={`py-2 px-4 rounded-full cursor-pointer transition-colors ${isSelected('Web Development') ? 'bg-gray-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    onClick={() => handleTagClick('Web Development')}
                >
                    Web Development
                </span>
            </div>
        </section>
    );
};

export default HeroSection;
