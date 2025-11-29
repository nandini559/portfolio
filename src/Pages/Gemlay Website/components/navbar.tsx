import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between text-white bg-green-500 text-xs">
          <p>ORDER TRACKING</p>
          <p>Refer and extra discount</p>
          <p>140406</p>
        </div>

        <div className="flex gap-12 justify-center text-sm p-2 border-b">
          <img src=""></img>
          <p className="border rounded p-2">Slim Sparkle Diamond Ring </p>
          <p className="mt-2">REFER AND EARN</p>
          <p className="mt-2">READY STOCK</p>
          <p className="mt-2">JSP</p>
        </div>

        <div className="flex justify-between text-sm font-semibold p-3 border-b">
          <p>NEW ARRIVALS</p>
          <p>RINGS</p>
          <p>PENDENTS</p>
          <p>EARRINGS</p>
          <p>BANGLES & BRACELETS</p>
          <p>SOLITIARIES</p>
          <p>GOLD COINS</p>
          <p>ALL JEWELLARY</p>
          <button className="bg-green-500 rounded px-4 py-1 text-white">
            OFFERS
          </button>
        </div>

        <div className="flex justify-between p-4 bg-green-300">
          <p className="mt-2">Ringa 1826 Designs</p>
          {/* <p>Home>Jewellary>Rings</p> */}
          <button className="bg-gray-100 px-3 py-2 rounded ">
            All In Stock
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
