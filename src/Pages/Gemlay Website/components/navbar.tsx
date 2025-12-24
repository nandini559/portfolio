import React from "react";

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-white bg-emerald-500 text-[10px] sm:text-xs px-3 py-1 gap-1">
        <p>ORDER TRACKING</p>
        <p>Refer and extra discount</p>
        <p>140406</p>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between p-3 border-b gap-4">
        <img
          src="/asset/Group 26974 (1).png"
          className="w-24 sm:w-32"
          alt="logo"
        />

        <p className="border rounded p-2 text-center text-xs sm:text-sm w-full lg:w-auto">
          Slim Sparkle Diamond Ring
        </p>

        <div className="flex gap-4 text-xs sm:text-sm">
          <p className="mt-2">REFER AND EARN</p>
          <p className="mt-2">READY STOCK</p>
          <p className="mt-2">JSP</p>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-between text-sm font-semibold p-3 border-b">
        <p>NEW ARRIVALS</p>
        <p>RINGS</p>
        <p>PENDENTS</p>
        <p>EARRINGS</p>
        <p>BANGLES & BRACELETS</p>
        <p>SOLITIARIES</p>
        <p>GOLD COINS</p>
        <p>ALL JEWELLARY</p>

        <button className="bg-emerald-300 rounded px-4 py-1 text-white font-bold">
          OFFERS
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden p-3 border-b">
        <select className="w-full p-2 border rounded text-sm bg-white">
          <option>NEW ARRIVALS</option>
          <option>RINGS</option>
          <option>PENDENTS</option>
          <option>EARRINGS</option>
          <option>BANGLES & BRACELETS</option>
          <option>SOLITIARIES</option>
          <option>GOLD COINS</option>
          <option>ALL JEWELLARY</option>
        </select>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-green-300 gap-3">
        <p className="text-sm sm:text-base">Ringa 1826 Designs</p>
        <button className="bg-gray-100 px-3 py-2 rounded text-sm">
          All In Stock
        </button>
      </div>
    </div>
  );
};

export default Navbar;
