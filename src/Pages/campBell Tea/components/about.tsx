import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const About = () => {
  return (<div className="w-full overflow-x-hidden">
    <Navbar/> {/* Hero */}
    <div className="text-center px-3 sm:px-4 md:px-10 py-8 md:py-14">
      <p className="font-thin mb-2 text-amber-900 text-xs sm:text-sm">
        OUR STORY
      </p>

      <p className="text-2xl sm:text-3xl md:text-5xl mb-3">
        Brewed for Bliss
      </p>

      <p className="font-thin text-xs sm:text-sm md:text-base">
        Campbell Tea began with a simple conviction: the ritual of tea deserves the same
      </p>
      <p className="font-thin text-xs sm:text-sm md:text-base">
        reverence as the leaves themselves. We set out to bring the finest single-origin Indian teas
      </p>
      <p className="font-thin text-xs sm:text-sm md:text-base">
        directly to your cup — unblended, unadulterated, and unforgettable.
      </p>
    </div>

    {/* Features */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 px-3 sm:px-4 md:px-10 py-6 md:py-10 bg-gray-100">
      <div className="text-center md:text-left">
        <p className="text-2xl sm:text-3xl text-gray-400 mb-2">01</p>
        <p className="text-base sm:text-lg mb-3">Direct Sourcing</p>
        <p className="font-thin text-xs sm:text-sm">
          We work directly with gardens in Assam, Darjeeling,
        </p>
        <p className="font-thin text-xs sm:text-sm">
          and Nilgiri — ensuring fair prices for farmers and
        </p>
        <p className="font-thin text-xs sm:text-sm">
          uncompromised quality for you.
        </p>
      </div>

      <div className="text-center md:text-left">
        <p className="text-2xl sm:text-3xl text-gray-400 mb-2">02</p>
        <p className="text-base sm:text-lg mb-3">Certified Organic</p>
        <p className="font-thin text-xs sm:text-sm">
          Every leaf in our collection is certified organic.
        </p>
        <p className="font-thin text-xs sm:text-sm">
          No pesticides, no artificial processing, no compromise
        </p>
        <p className="font-thin text-xs sm:text-sm">on purity.</p>
      </div>

      <div className="text-center md:text-left">
        <p className="text-2xl sm:text-3xl text-gray-400 mb-2">03</p>
        <p className="text-base sm:text-lg mb-3">Small Batch</p>
        <p className="font-thin text-xs sm:text-sm">
          We process in small batches to preserve the unique
        </p>
        <p className="font-thin text-xs sm:text-sm">
          character of each harvest. Freshness is not a
        </p>
        <p className="font-thin text-xs sm:text-sm">
          promise — it's a practice.
        </p>
      </div>
    </div>

    {/* Quote */}
    <div className="text-center px-3 sm:px-4 md:px-10 py-10 md:py-16">
      <p className="text-4xl sm:text-5xl md:text-7xl text-gray-200 mb-2">"</p>

      <p className="text-lg sm:text-xl md:text-3xl font-thin mb-2">
        We don't just sell tea. We share a culture, a craft, and a quiet
      </p>

      <p className="text-lg sm:text-xl md:text-3xl font-thin mb-4">
        moment of beauty in every cup.
      </p>

      <p className="text-amber-700 text-sm sm:text-base md:text-lg font-thin">
        — The Campbell Tea Team
      </p>
    </div>

    <Footer/>
  </div>);
};

export default About;
