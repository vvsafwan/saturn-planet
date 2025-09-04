import React, { useState, useEffect } from 'react';
import Primary from "../buttons/Primary";
import Secondary from "../buttons/Secondary";
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import bg1 from "../../assets/home/homebanner.jpg";
import bg2 from "../../assets/home/secondbanner.jpg"; 
import bg3 from "../../assets/home/thirdbanner.jpg";
import bg4 from "../../assets/home/fourthbanner.jpg";

const slides = [
  {
    background: bg4,
    title: "Where comfort meets learning",
    subtitle: "School Furniture",
    description: "Create a learning environment that enhances focus and comfort with ergonomically designed school furniture for students and educators.",
  },
  {
    background: bg3,
    title: "Crafting spaces, creating impact",
    subtitle: "Interior Design",
    description: "Transform your spaces with elegant, functional interiors that reflect your personality and leave a lasting impression.",
  },
  {
    background: bg1,
    title: "Built for science, designed for safety",
    subtitle: "Laboratory Workspace",
    description: "Upgrade your lab with durable and safe furniture designed to support innovation while ensuring compliance and efficiency.",
  },
  {
    background: bg2,
    title: "Work smarter with furniture that inspires",
    subtitle: "Office Furniture",
    description: "Boost productivity with ergonomic office furniture that combines style, comfort, and functionality for modern workspaces.",
  },
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const { background, title, subtitle, description } = slides[currentIndex];

  return (
    <div
      className="relative bg-cover bg-center flex items-center justify-center px-4 min-h-screen lg:min-h-[80vh] pt-10 transition-all duration-700"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="text-center text-white p-6 rounded-lg z-10">
        <h4 className="text-sm md:text-base tracking-widest text-[#0b9ba6] font-medium mb-2 raleway-font uppercase">
          {subtitle}
        </h4>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light mb-4 drop-shadow forum-font uppercase">
          {title}
        </h1>
        <p className="text-sm sm:text-md md:text-lg lg:text-xl max-w-2xl mx-auto text-gray-300 raleway-font pb-10">
          {description}
        </p>
        <div className="flex justify-center gap-3">
          <Link to={"/contact"}>
            <Primary text={"GET STARTED"} />
          </Link>
          <Link to={"/about"}>
            <Secondary text={"LEARN MORE"} />
          </Link>
        </div>
      </div>

      {/* Arrow Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full z-20"
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full z-20"
      >
        <FaArrowRight size={20} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 flex space-x-2 justify-center w-full z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-[#0b9ba6]" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
