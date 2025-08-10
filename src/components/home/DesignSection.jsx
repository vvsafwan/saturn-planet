import React from "react";
import designImage from "../../assets/home/designsection.jpg";
import {
    FaRegLightbulb,
    FaRegComments,
    FaHammer,
    FaCogs,
    FaCouch,
    FaThLarge,
} from "react-icons/fa";
import Primary from "../buttons/Primary";

const features = [
    { icon: <FaRegLightbulb />, label: "Planning" },
    { icon: <FaRegComments />, label: "Consultation" },
    { icon: <FaHammer />, label: "Woodwork" },
    { icon: <FaCogs />, label: "Installation" },
    { icon: <FaCouch />, label: "Furnishing" },
    { icon: <FaThLarge />, label: "Partitioning" },
];

export default function DesignSection() {
    return (
        <section className="py-30 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Left Image */}
                <div>
                    <img src={designImage} alt="Interior Design" className="w-full shadow-md" />
                </div>
                {/* Right Content */}
                <div>
                    <h2 className="forum-font text-4xl md:text-3xl lg:text-5xl font-light mb-7">
                        Best Way To Design Your Home
                    </h2>
                    <p className="text-gray-600 mb-6 text-sm md:text-md lg:text-[16px] leading-relaxed raleway-font">
                        Designing your home means creating a space that reflects your style and comfort. From planning to furnishing, we ensure every detail fits your vision for a beautiful, functional living space.
                    </p>

                    {/* Feature Icons */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-2 text-sm text-[#025876]"
                            >
                                <div className="text-xl bg-gray-200 p-3 rounded-full">{item.icon}</div>
                                <span className="raleway-font">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 md:mt-0">
                        <Primary text={"LEARN MORE"} />
                    </div>
                </div>
            </div>
        </section>
    );
}