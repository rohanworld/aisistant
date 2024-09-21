import React, { useState } from "react";
import mainlogo from "../src/assets/mainlogo.jpg";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between">
      {/* Left Section: Logo with Image */}
      <div className="flex items-center space-x-2">
        <img src={mainlogo} alt="Logo" className="h-8 w-8" />
        <h1 className="text-xl text-black font-bold">AIsistant</h1>
      </div>

      {/* Middle Section: Search Bar */}
      <div className={`flex-1 mx-6 relative ${isOpen ? 'block' : 'hidden'} md:flex`}>
        <input
          type="text"
          placeholder="Search for services..."
          className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute right-3 top-2 text-gray-600">
          <FiSearch />
        </span>
      </div>

      {/* Hamburger Menu for Smaller Screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Right Section: Icons and Avatar */}
      <div className={`flex items-center space-x-6 ${isOpen ? 'flex-col absolute top-16 right-0 bg-white shadow-md w-full p-4 items-center' : 'hidden'} md:flex`}>
        <div className="flex space-x-4 items-center">
          <a href="#" className="text-gray-600 hover:text-black">Find Your AI</a>
          <a href="#" className="text-gray-600 hover:text-black">Why Us</a>
          <a href="#" className="text-gray-600 hover:text-black">Employ Your AI</a>
          <img
            src="https://image.tensorartassets.com/cdn-cgi/image/w=600/posts/images/678368472400546952/6550e471-74f2-47a9-bbd0-5cd4ae2b79c8.jpg"
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
