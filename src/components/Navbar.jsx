import React, { useState } from "react";
import {
    FaWhatsapp,
    FaLinkedinIn,
    FaEnvelope,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="w-full">
            {/* ✅ Announcement Bar */}
            <div className="bg-gray-100 text-gray-700 text-sm py-2 px-6 flex justify-between items-center border-b border-gray-200">
                <div>
                    📧 <a href="mailto:info@example.com" className="hover:underline">info@example.com</a>
                </div>
                <div>
                    📞 <a href="tel:+1234567890" className="hover:underline">+971 56 779 6927</a>
                </div>
            </div>

            {/* ✅ Navbar */}
            <nav className="absolute w-full border-b border-gray-200 px-6 bg-white z-50">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <Link to={"/"}>
                        <img src={logo} alt="logo" className="h-20 md:h-25" />
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 font-medium text-black raleway-font">
                        <Link to={"/"}>
                            <li className="hover:text-gray-600 cursor-pointer">Home</li>
                        </Link>
                        <Link to={"/about"}>
                            <li className="hover:text-gray-600 cursor-pointer">Who we are</li>
                        </Link>
                        <Link to={"/products"}>
                            <li className="hover:text-gray-600 cursor-pointer">Products</li>
                        </Link>
                        <Link to={"/contact"}>
                            <li className="hover:text-gray-600 cursor-pointer">Contact</li>
                        </Link>
                    </ul>

                    {/* ✅ Desktop Icons (WhatsApp, LinkedIn, Email) */}
                    <div className="hidden md:flex items-center space-x-4 text-gray-800 text-xl">
                        <a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
                        </a>
                        <a href="mailto:info@example.com">
                            <FaEnvelope className="hover:text-red-500 cursor-pointer" />
                        </a>
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        className="md:hidden text-gray-700 text-2xl focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* ✅ Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden mt-4 space-y-4">
                        <ul className="space-y-2 text-sm font-medium text-black flex flex-col justify-center items-center raleway-font">
                            <Link onClick={() => setMenuOpen(false)} to={"/"}>
                                <li className="hover:text-gray-600 cursor-pointer">HOME</li>
                            </Link>
                            <Link onClick={() => setMenuOpen(false)} to={"/about"}>
                                <li className="hover:text-gray-600 cursor-pointer">WHO WE ARE</li>
                            </Link>
                            <Link onClick={() => setMenuOpen(false)} to={"/products"}>
                                <li className="hover:text-gray-600 cursor-pointer">PRODUCTS</li>
                            </Link>
                            <Link onClick={() => setMenuOpen(false)} to={"/contact"}>
                                <li className="hover:text-gray-600 cursor-pointer">CONTACT</li>
                            </Link>
                        </ul>
                        {/* ✅ Mobile Icons */}
                        <div className="flex space-x-4 text-gray-800 text-xl pt-2 justify-center items-center">
                            <a
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
                            </a>
                            <a
                                href="https://linkedin.com/in/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
                            </a>
                            <a href="mailto:info@example.com">
                                <FaEnvelope className="hover:text-red-500 cursor-pointer" />
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
