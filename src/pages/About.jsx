import React from "react";
import office from "../assets/about/office.jpg";
import interior from "../assets/about/interior.jpg";
import furniture from "../assets/about/furniture.jpg";

export default function About() {
  return (
    <div className="w-full px-6 space-y-16 bg-white py-30 raleway-font">
      {/* Section 1 */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#025876] forum-font">
            About Us
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At <strong>Saturn Planet Furniture LLC</strong>, we are dedicated to creating a
            world where customer needs and visions for dream projects are fully realized. It
            has always been our principal goal to deliver excellence and innovation. Our
            philosophy is centered on providing world-class turnkey projects without
            compromising quality, ensuring that every product meets global standards at an
            ideal market price.
          </p>
        </div>
        <div className="flex-1 w-full h-90">
          <img
            src={interior}
            alt="Interior"
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="flex-1">
          <p className="text-gray-700 text-lg leading-relaxed">
            Our core focus is to be the most reliable provider of premium products in the
            global market. We consistently encourage our community and partners to deliver
            top-notch solutions while maintaining uncompromising standards. By combining
            design innovation with functional excellence, we aim to transform spaces into
            modern, productive, and inspiring environments.
          </p>
        </div>
        <div className="flex-1 w-full h-90">
          <img
            src={furniture}
            alt="Furniture"
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <p className="text-gray-700 text-lg leading-relaxed">
            Saturn Planet specializes in designing, manufacturing, furnishing, and marketing
            high-quality laboratory furniture, container labs, and office furniture. Our
            expertise spans lab benches, fume hoods, storage cabinets, safety equipment,
            epoxy and vinyl flooring, and advanced solutions like laminar flow systems and
            ductless fume hoods. These products are widely applied across universities,
            schools, pharmaceutical companies, food and beverage industries, chemical labs,
            hospitals, and other testing sectors.
          </p>
        </div>
        <div className="flex-1 w-full h-90">
          <img
            src={office}
            alt="Office"
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
}
