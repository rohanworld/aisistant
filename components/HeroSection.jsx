import React, { useState } from 'react';
import { IoPeopleCircleSharp } from "react-icons/io5";

const HeroSection = () => {
    // State to keep track of selected services
    const [selectedServices, setSelectedServices] = useState([]);

    const handleTagClick = (service) => {
        if (selectedServices.includes(service)) {
            // If service is already selected, remove it from the selected list
            setSelectedServices(selectedServices.filter(item => item !== service));
            alert(`Removed: ${service}`); // Alert when service is deselected
        } else {
            // Otherwise, add it to the selected list
            setSelectedServices([...selectedServices, service]);
            alert(`Selected: ${service}`); // Alert when service is selected
        }
    };

    const isSelected = (service) => selectedServices.includes(service);

    const handleSearch = () => {
        alert(`Searching for: ${searchQuery}`);
    };

    // In the input field, add a state for the search query
    const [searchQuery, setSearchQuery] = useState("");


    return (
        <section className="relative w-full h-screen flex flex-col justify-center items-center bg-white text-center">
            {/* Background and other elements */}
            <div className="absolute inset-0 bg-[url('https://png.pngtree.com/background/20210714/original/pngtree-white-technology-background-clean-style-picture-image_1209726.jpg')] bg-cover bg-center opacity-10"></div>


            {/* Active users tag */}
            
            <div className="absolute top-5 flex justify-center w-full">
                <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm shadow-md flex items-center">
                    <IoPeopleCircleSharp className="mr-1 h-5 w-5" /> {/* Added the icon */}
                    4k active users
                </span>
            </div>


            {/* Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mt-0">
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
                    value={searchQuery} // Bind the input value to searchQuery
                    onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change

                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
                    onClick={handleSearch} // Call handleSearch on button click
                >
                    Search
                </button>
            </div>

            {/* Services */}
            <div className="mt-6 flex flex-wrap justify-center space-x-4 cursor-pointer">
                <span
                    className={`py-2 px-4 bg-orange-200 text-orange-600 rounded-full cursor-pointer transition-colors ${isSelected('Top services') ? 'bg-orange-300' : 'hover:bg-orange-300'
                        }`}
                    onClick={() => handleTagClick('Top services')}
                >
                    🔥 Top services:
                </span>
                <span
                    className={`py-2 px-4 bg-gray-100 text-gray-700 rounded-full cursor-pointer transition-colors ${isSelected('Social & SMM') ? 'bg-gray-300' : 'hover:bg-gray-200'
                        }`}
                    onClick={() => handleTagClick('Social & SMM')}
                >
                    Social & SMM
                </span>
                <span
                    className={`py-2 px-4 bg-gray-100 text-gray-700 rounded-full cursor-pointer transition-colors ${isSelected('SEO') ? 'bg-gray-300' : 'hover:bg-gray-200'
                        }`}
                    onClick={() => handleTagClick('SEO')}
                >
                    SEO
                </span>
                <span
                    className={`py-2 px-4 bg-gray-100 text-gray-700 rounded-full cursor-pointer transition-colors ${isSelected('Copywriting') ? 'bg-gray-300' : 'hover:bg-gray-200'
                        }`}
                    onClick={() => handleTagClick('Copywriting')}
                >
                    Copywriting
                </span>
                <span
                    className={`py-2 px-4 bg-gray-100 text-gray-700 rounded-full cursor-pointer transition-colors ${isSelected('Web Development') ? 'bg-gray-300' : 'hover:bg-gray-200'
                        }`}
                    onClick={() => handleTagClick('Web Development')}
                >
                    Web Development
                </span>
            </div>
        </section>
    );
};

export default HeroSection;
