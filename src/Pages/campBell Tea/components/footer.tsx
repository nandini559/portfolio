import React from "react";

const Footer = () => {
  return (<div>
    <div className="mt-10 flex p-10 bg-slate-50">
      <div className="w-1/4">
        <p className="mb-3 text-xl">CampbellTea</p>
        <p className="text-md">
          Premium Indian tea, thoughtfully sourced and carefully crafted. A daily ritual, elevated.
        </p>
      </div>

      <div className="w-1/4 ml-10">
        <p className="mb-3 text-sm">Quick Links</p>
        <p>About Us</p>
        <p>Our Teas</p>
        <p>Contact</p>
      </div>

      <div className="w-1/4">
        <p className="mb-3 text-sm">Policies</p>
        <p>Privacy Policy</p>
        <p>Shipping Policy</p>
        <p>Refund Policy</p>
        <p>Terms & Conditions</p>
      </div>

      <div className="w-1/4">
        <p className="mb-3 text-sm">STAY UPDATED</p>
        <p>Subscribe for special offers and new arrivals</p>
        <div className="flex">
          <p className="p-4 border ">Your Email</p>
          <button className="text-amber-800 p-4 border hover:bg-amber-700 hover:text-white">
            Join
          </button>
        </div>
      </div>
    </div>
    <div className="flex p-10 bg-slate-50 border-t">
      <p>© 2026 Campbell Tea. All rights reserved.</p>
    </div>
  </div>);
};

export default Footer;
