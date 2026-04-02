import React from "react";
import Navbar from "./navbar";

const Hero = () => {
  return (<div>
    <Navbar/>

    <div className="flex flex-col md:flex-row items-center px-5 md:px-10 py-8 gap-8">
      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <p className="font-thin mb-4 text-amber-900 text-xs md:text-sm mt-3">
          CERTIFIED ORGANIC LOOSE LEAF
        </p>

        <p className="text-3xl sm:text-4xl md:text-6xl mb-2">A Taste of</p>
        <p className="text-3xl sm:text-4xl md:text-6xl mb-2">Luxury For</p>
        <p className="text-3xl sm:text-4xl md:text-6xl mb-6">Everyday</p>

        <p className="font-thin mb-6 text-sm md:text-base">
          Premium Indian tea, thoughtfully sourced from the finest gardens of Assam, Darjeeling, and Nilgiri. Every cup tells a story of craftsmanship and care.
        </p>

        <button className="font-thin border px-6 py-3 text-xs md:text-sm text-amber-900 hover:bg-amber-900 hover:text-white transition">
          SHOP OUR RANGE
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img src="/asset/campbell-tea/hero-section.webp" alt="tea" className="w-full h-auto rounded-lg object-cover"/>
      </div>
    </div>
  </div>);
};

export default Hero;
