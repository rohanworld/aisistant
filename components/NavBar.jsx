import React, { useState } from 'react';
import mainlogo from '../src/images/mainlogo.jpg'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black fixed w-full z-50 top-0 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Logo and company name */}
            <div>
              <a href="" className="flex items-center py-5 px-2 text-black hover:scale-105">
                <img src={mainlogo} alt="Logo" className="h-8 w-8 mr-2" /> 
                <span className="font-bold hover:text-gray-600 hover:scale-105">AIsistant</span>
              </a>
            </div>
          </div>
          {/* Secondary and Primary Navbar items */}
          <div className="hidden md:flex items-center space-x-1 text-[#767676]">
            <a href="#" className="py-5 px-3 hover:text-black hover:scale-105">Find Your AI</a>
            <a href="#" className="py-5 px-3 hover:text-black hover:scale-105">Employ Your AI</a>
            <a href="#" className="py-5 px-3 hover:text-black hover:scale-105">Marketplace</a>
            <a href="#" className="py-5 px-3 hover:text-black hover:scale-105">Pricing</a>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-5 px-3 hover:text-black hover:scale-105">Log In</a>
            <button className="bg-blue-600 py-2 px-3 rounded hover:bg-blue-500 hover:scale-105 text-white">Sign Up</button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={isOpen ? "md:hidden" : "hidden"}>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white hover:scale-105">Find Your AI</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white hover:scale-105">Employ Your AI</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white hover:scale-105">Marketplace</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white hover:scale-105">Pricing</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white hover:scale-105">Log In</a>
        <button className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-700 hover:text-white hover:scale-105">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;




