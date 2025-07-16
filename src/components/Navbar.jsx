import React, { useState } from "react";
import {
    FaInstagram,
    FaLinkedinIn,
    FaFacebookF,
    FaBars,
    FaTimes,
} from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="absolute w-full border-b border-gray-200 py-4 px-6 bg-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-gray-500 text-sm md:text-md lg:text-lg font-light tracking-widest uppercase">
                    Saturn Planet Furniture LLC
                </div>
                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-sm font-medium text-black raleway-font">
                    <li className="hover:text-gray-600 cursor-pointer">HOME</li>
                    <li className="hover:text-gray-600 cursor-pointer">PRODUCTS</li>
                    <li className="hover:text-gray-600 cursor-pointer">SERVICES</li>
                    <li className="hover:text-gray-600 cursor-pointer">ABOUT</li>
                    <li className="hover:text-gray-600 cursor-pointer">CONTACT</li>
                </ul>

                {/* Desktop Icons */}
                <div className="hidden md:flex items-center space-x-4 text-gray-800 text-base">
                    <FaInstagram className="hover:text-gray-500 cursor-pointer" />
                    <FaLinkedinIn className="hover:text-gray-500 cursor-pointer" />
                    <FaFacebookF className="hover:text-gray-500 cursor-pointer" />
                </div>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden text-gray-700 text-2xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden mt-4 space-y-4">
                    <ul className="space-y-2 text-sm font-medium text-black flex flex-col justify-center items-center raleway-font">
                        <li className="text-gray-400">HOME</li>
                        <li className="hover:text-gray-600 cursor-pointer">PRODUCTS</li>
                        <li className="hover:text-gray-600 cursor-pointer">SERVICES</li>
                        <li className="hover:text-gray-600 cursor-pointer">ABOUT</li>
                        <li className="hover:text-gray-600 cursor-pointer">CONTACT</li>
                    </ul>
                    <div className="flex space-x-4 text-gray-800 text-base pt-2 justify-center items-center">
                        <FaInstagram className="hover:text-gray-500 cursor-pointer" />
                        <FaLinkedinIn className="hover:text-gray-500 cursor-pointer" />
                        <FaFacebookF className="hover:text-gray-500 cursor-pointer" />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;