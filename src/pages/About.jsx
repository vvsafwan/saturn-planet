import React from "react";
import office from "../assets/about/office.jpg"
import interior from "../assets/about/interior.jpg"
import furniture from "../assets/about/furniture.jpg"

export default function About() {
  return (
    <div className="w-full px-6 space-y-16 bg-white py-30 raleway-font">
      {/* Section 1 */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#025876] forum-font">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Saturn Planet Furniture LLC</strong> is a leading provider of bespoke
            furniture and interior fit-out solutions in the UAE. We specialize in delivering
            quality furnishings and complete interior transformations for educational,
            laboratory, office, and commercial environments.
          </p>
        </div>
        <div className="flex-1 w-full h-90">
          <img
            src={interior}
            alt="Furniture"
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="flex-1">
          <p className="text-gray-700 text-lg leading-relaxed">
            Our team crafts ergonomic school and office furniture, robust laboratory setups,
            and provides comprehensive interior decoration and turnkey fit-out services. We
            are committed to transforming spaces to meet the unique needs of each client,
            ensuring a seamless experience from concept to installation.
          </p>
        </div>
        <div className="flex-1 w-full h-90">
          <img
            src={furniture}
            alt="Interior Fitout"
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <p className="text-gray-700 text-lg leading-relaxed">
            Choose Saturn Planet Furniture LLC for durable, modern furniture and interiors
            that inspire productivity and comfort. Let us help bring your vision to life,
            anywhere in the UAE.
          </p>
        </div>
        <div className="flex-1 w-full h-90">
          <img
            src={office}
            alt="Vision"
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
}
