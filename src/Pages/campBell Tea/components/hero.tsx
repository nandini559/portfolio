import React from "react";

const Hero = () => {
  return (<div>
    <div className="flex p-4">
      <div className="w-2/5 ml-8">
        <p className="font-thin mb-6 text-amber-900 text-sm mt-5">
          CERTIFIED ORGANIC LOOSE LEAF
        </p>
        <p className="text-6xl  mb-2">A Taste of</p>
        <p className="text-6xl  mb-2">Luxury For</p>
        <p className="text-6xl  mb-8">Everyday</p>
        <p className="font-thin mb-6">
          Premium Indian tea, thoughtfully sourced from the finest gardens of Assam, Darjeeling, and Nilgiri. Every cup tells a story of craftsmanship and care.
        </p>
        <button className="font-thin border px-7 py-3 text-sm text-amber-900">
          SHOP OUR RANGE
        </button>
      </div>

      <div className="w-2/3">
        <img src="https://campbell-tea.vercel.app/_next/image?url=%2Fimages%2Fhero-section.png&w=1080&q=75" alt="tea"></img>
      </div>
    </div>
  </div>);
};

export default Hero;
