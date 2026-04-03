import React, {useState} from "react";
import Navbar from "./navbar";
import {useNavigate} from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (path : string) => {
    navigate(path);
    setIsOpen(false);
  };
  return (<div className="w-full overflow-x-hidden ">
    <Navbar/>

    <div className="flex flex-col md:flex-row items-center w-full px-3 sm:px-4 md:px-10 py-6 md:py-10 gap-6 md:gap-10">
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
        <p className="font-thin mb-2 text-amber-900 text-[10px] sm:text-xs">
          CERTIFIED ORGANIC LOOSE LEAF
        </p>

        <div className="space-y-0 leading-tight">
          <p className="text-2xl sm:text-3xl md:text-6xl">A Taste of</p>
          <p className="text-2xl sm:text-3xl md:text-6xl">Luxury For</p>
          <p className="text-2xl sm:text-3xl md:text-6xl">Everyday</p>
        </div>

        <p className="font-thin mt-3 mb-4 text-xs sm:text-sm md:text-base max-w-xs sm:max-w-sm md:max-w-md">
          Premium Indian tea, thoughtfully sourced from the finest gardens of Assam, Darjeeling, and Nilgiri. Every cup tells a story of craftsmanship and care.
        </p>

        <button onClick={() => handleNav("/campbell-tea-products")} className="font-thin border px-5 py-2 text-[11px] sm:text-xs md:text-sm text-amber-900 hover:bg-amber-900 hover:text-white transition rounded-md">
          SHOP OUR RANGE
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img src="/asset/campbell-tea/hero-section.webp" alt="tea" className="w-full h-[220px] sm:h-[280px] md:h-full object-cover rounded-lg md:rounded-xl"/>
      </div>
    </div>
  </div>);
};

export default Hero;
