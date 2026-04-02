import React from "react";

const Footer = () => {
  return (<div className="mt-10 bg-slate-50 font-thin">
    {/* Top Section */}
    <div className="flex flex-col md:flex-row gap-10 px-5 md:px-10 py-10">
      {/* Brand */}
      <div className="w-full md:w-1/4">
        <p className="mb-3 text-lg md:text-xl">CampbellTea</p>
        <p className="text-sm md:text-base">
          Premium Indian tea, thoughtfully sourced and carefully crafted. A daily ritual, elevated.
        </p>
      </div>

      {/* Quick Links */}
      <div className="w-full md:w-1/4">
        <p className="mb-3 text-sm">Quick Links</p>
        <div className="flex flex-col gap-1 text-sm md:text-base">
          <p>About Us</p>
          <p>Our Teas</p>
          <p>Contact</p>
        </div>
      </div>

      {/* Policies */}
      <div className="w-full md:w-1/4">
        <p className="mb-3 text-sm">Policies</p>
        <div className="flex flex-col gap-1 text-sm md:text-base">
          <p>Privacy Policy</p>
          <p>Shipping Policy</p>
          <p>Refund Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>

      {/* Subscribe */}
      <div className="w-full md:w-1/4">
        <p className="mb-3 text-sm">STAY UPDATED</p>
        <p className="text-sm md:text-base mb-3">
          Subscribe for special offers and new arrivals
        </p>

        <div className="flex w-full">
          <input type="email" placeholder="Your Email" className="flex-1 p-3 border text-sm outline-none"/>
          <button className="text-amber-800 px-4 border hover:bg-amber-700 hover:text-white transition">
            Join
          </button>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="text-center md:text-left px-5 md:px-10 py-5 border-t text-sm">
      © 2026 Campbell Tea. All rights reserved.
    </div>
  </div>);
};

export default Footer;
