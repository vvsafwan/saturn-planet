import React from 'react';
import school from '../../assets/home/school.jpg';
import office from '../../assets/home/office.jpg';
import kitchen from '../../assets/home/kitchen.jpg';

const categories = [
  {
    name: 'School Laboratory Furniture',
    sku: 'SCIENTIFIC SETUP',
    image: school
  },
  {
    name: 'Office Furniture',
    sku: 'WORKPLACE COMFORT',
    image: office
  },
  {
    name: 'Kitchen Furniture',
    sku: 'CULINARY SPACE',
    image: kitchen
  },
];

export default function Categories() {
  return (
    <section className="pb-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-[#918155] forum-font text-2xl md:text-3xl text-center mb-3">
          OUR COLLECTIONS
        </h3>
        <h1 className="forum-font text-3xl md:text-5xl text-center mb-15">
          Product Categories
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="relative overflow-hidden shadow-lg group h-90 lg:h-[550px]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_100%)]" />
              <div className="absolute bottom-7">
                <h2 className="text-white text-5xl md:text-4xl lg:text-4xl px-10 forum-font font-semibold">
                  <span className='text-white text-xl font-medium'>{cat.sku}</span> <br />
                  {cat.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
