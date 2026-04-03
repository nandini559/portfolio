import React from "react";

const Footer = () => {
  return (<div className="mt-8 bg-slate-50 font-thin w-full overflow-x-hidden">
    {/* Top Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 px-3 sm:px-4 md:px-10 py-8 md:py-10">
      {/* Brand */}
      <div className="text-center sm:text-left">
        <p className="mb-2 text-base sm:text-lg md:text-xl">CampbellTea</p>
        <p className="text-xs sm:text-sm md:text-base">
          Premium Indian tea, thoughtfully sourced and carefully crafted. A daily ritual, elevated.
        </p>
      </div>

      {/* Quick Links */}
      <div className="text-center sm:text-left">
        <p className="mb-2 text-xs sm:text-sm">Quick Links</p>
        <div className="flex flex-col gap-1 text-xs sm:text-sm md:text-base">
          <p>About Us</p>
          <p>Our Teas</p>
          <p>Contact</p>
        </div>
      </div>

      {/* Policies */}
      <div className="text-center sm:text-left">
        <p className="mb-2 text-xs sm:text-sm">Policies</p>
        <div className="flex flex-col gap-1 text-xs sm:text-sm md:text-base">
          <p>Privacy Policy</p>
          <p>Shipping Policy</p>
          <p>Refund Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>

      {/* Subscribe */}
      <div className="text-center sm:text-left">
        <p className="mb-2 text-xs sm:text-sm">STAY UPDATED</p>
        <p className="text-xs sm:text-sm md:text-base mb-3">
          Subscribe for special offers and new arrivals
        </p>

        <div className="flex w-full max-w-sm mx-auto sm:mx-0">
          <input type="email" placeholder="Your Email" className="flex-1 p-2 text-xs sm:text-sm border outline-none rounded-l-md"/>
          <button className="text-amber-800 px-3 sm:px-4 border border-l-0 rounded-r-md hover:bg-amber-700 hover:text-white transition text-xs sm:text-sm">
            Join
          </button>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="text-center md:text-left px-3 sm:px-4 md:px-10 py-4 border-t text-xs sm:text-sm">
      © 2026 Campbell Tea. All rights reserved.
    </div>
  </div>);
};

export default Footer;
