import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    const [showPopup, setShowPopup] = useState(false);

    const footerSections = [
        {
            title: "About Us",
            links: ["Our Story", "Team", "Careers"]
        },
        {
            title: "Resources",
            links: ["Blog", "Tutorials", "FAQs"]
        },
        {
            title: "Contact",
            links: ["Support", "Sales", "Partnerships"]
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
                setShowPopup(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <footer className="bg-black text-white py-12 text-center rounded-bl-2xl rounded-br-2xl">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {footerSections.map((section, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-xl font-bold">{section.title}</h3>
                            {section.links.map((link, linkIndex) => (
                                <p key={linkIndex} className="hover:text-gray-300 cursor-pointer transition-colors duration-300">
                                    {link}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <FaFacebook className="text-2xl hover:text-blue-500 cursor-pointer transition-colors duration-300" />
                        <FaSquareXTwitter className="text-2xl hover:text-blue-400 cursor-pointer transition-colors duration-300" />
                        <FaInstagram className="text-2xl hover:text-pink-500 cursor-pointer transition-colors duration-300" />
                        <FaLinkedin className="text-2xl hover:text-blue-600 cursor-pointer transition-colors duration-300" />
                    </div>
                    <div className="space-x-4">
                        <button className="text-white font-bold py-2 px-4 rounded border border-white transition-colors duration-300 w-36 hover:bg-white hover:text-black rounded-lg">
                            Sign In
                        </button>
                        <button className="text-white font-bold py-2 px-4 rounded border border-white transition-colors duration-300 w-36 hover:bg-white hover:text-black rounded-lg">
                            Join
                        </button>
                    </div>
                </div>
                <div className="mt-8 text-lg font-italic">
                    "Why settle for slow when you can hire a supercomputer?"
                </div>
            </div>

            {/* Important */}
            {/* {showPopup && (
                <div className="fixed bottom-4 right-4 bg-white text-black p-4 rounded shadow-lg transition-transform transform translate-y-0">
                    <p>Need help finding your AI? We’re here 24/7 😉</p>
                </div>
            )} */}
        </footer>
    );
};

export default Footer;
