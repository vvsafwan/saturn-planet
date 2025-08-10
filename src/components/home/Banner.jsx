import React, { useState, useEffect } from 'react';
import Primary from "../buttons/Primary";
import Secondary from "../buttons/Secondary";
import { Link } from 'react-router-dom';

import bg1 from "../../assets/home/homebanner.jpg";
import bg2 from "../../assets/home/secondbanner.jpg"; // Add more images as needed
import bg3 from "../../assets/home/thirdbanner.jpg";

const slides = [
  {
    background: bg1,
    title: "UNLOCK YOUR DREAM HOME TODAY",
    subtitle: "ELEGANT SPACES",
    description: "Whether it’s your home, office, or a commercial project, we are always dedicated to bringing your vision to life.",
  },
  {
    background: bg2,
    title: "FURNITURE THAT FITS YOUR STYLE",
    subtitle: "DESIGNED FOR COMFORT",
    description: "We craft unique furniture pieces that blend perfectly with your personal or professional space.",
  },
  {
    background: bg3,
    title: "INSPIRING WORKSPACES",
    subtitle: "SMART OFFICE SOLUTIONS",
    description: "Transform your work environment with ergonomic and stylish furniture that boosts productivity.",
  },
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const { background, title, subtitle, description } = slides[currentIndex];

  return (
    <div
      className={`relative bg-cover bg-center flex items-center justify-center px-4 min-h-screen lg:min-h-[80vh] pt-10 transition-all duration-700`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="text-center text-white p-6 rounded-lg z-10">
        <h4 className="text-sm md:text-base tracking-widest text-[#0b9ba6] font-medium mb-2 raleway-font">
          {subtitle}
        </h4>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light mb-4 drop-shadow forum-font">
          {title}
        </h1>
        <p className="text-sm sm:text-md md:text-lg lg:text-xl max-w-2xl mx-auto text-gray-300 raleway-font pb-10">
          {description}
        </p>
        <div className="flex justify-center gap-3">
          <Primary text={"GET STARTED"} />
          <Link to={"/about"}>
            <Secondary text={"LEARN MORE"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
