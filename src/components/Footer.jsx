import React from "react";

export default function Footer() {
    return (
        <footer className="bg-[#242424] text-white px-6 md:px-20 py-12">
            <p className="text-2xl sm:text-5xl md:text-5xl lg:text-8xl forum-font max-w-7xl mx-auto">Partner with Us on Your Next <br /> Project. Start Now</p>
           <div className="md:flex justify-between gap-10 max-w-7xl mx-auto"> 
            <div className="md:w-2/5 raleway-font">
                <div className="text-gray-500 text-lg md:text-3xl font-light tracking-widest uppercase mt-15">
                    Saturn Planet Furniture LLC
                </div>
                <div>
                    <p className="mt-10 text-sm md:text-md lg:text-lg">We are a lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec, pulvinar dapibus.We are a lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec, pulvinar dapibus.</p>
                </div>
            </div>
            <div className="flex flex-wrap gap-20 mt-15 text-lg">
                <div className="raleway-font">
                    <h4 className="font-semibold mb-4 uppercase text-gray-500">Information</h4>
                    <ul className="space-y-2 text-gray-200">
                        <li>About Us</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Recent Projects</li>
                    </ul>
                </div>
                <div className="raleway-font">
                    <h4 className="font-semibold mb-4 uppercase text-gray-500">Policies</h4>
                    <ul className="space-y-2 text-gray-200">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookie Policy</li>
                        <li>Accessibility</li>
                        <li>Style Guide</li>
                    </ul>
                </div>
                <div className="raleway-font">
                    <h4 className="font-semibold mb-4 uppercase text-gray-500">Portfolio</h4>
                    <ul className="space-y-2 text-gray-200">
                        <li>About Us</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Recent Projects</li>
                    </ul>
                </div>
            </div></div>
        </footer>
    );
}
