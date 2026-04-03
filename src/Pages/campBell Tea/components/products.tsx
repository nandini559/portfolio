import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const teas = Array(12).fill({name: "Special Masala Chai", price: "₹299", tag: "Bestseller", image: "https://maharishiayurvedaindia.com/cdn/shop/articles/herbal_teas_and_benefits_5349b7d2-95dd-41ea-9336-b25212d1019d.jpg?v=1771406243"});

const Products = () => {
  return (<div className="w-full overflow-x-hidden">
    <Navbar/> {/* Hero Section */}
    <div className="text-center px-3 sm:px-4 md:px-10 py-8 md:py-14 border-b">
      <p className="font-thin mb-2 text-amber-900 text-xs sm:text-sm">
        The Collection
      </p>
      <p className="text-2xl sm:text-3xl md:text-5xl mb-3">Our Teas</p>
      <p className="font-thin text-xs sm:text-sm md:text-base">
        Each blend is crafted from single-origin leaves, sourced at peak
      </p>
      <p className="font-thin text-xs sm:text-sm md:text-base">
        harvest and processed with care to preserve every nuance of flavor.
      </p>
    </div>
    {/* Filters */}
    <div className="flex flex-wrap justify-center md:justify-start gap-2 px-3 sm:px-4 md:px-10 mt-6">
      <button className="border px-4 py-1 text-xs sm:text-sm font-thin  hover:bg-amber-700 hover:text-white transition">
        All
      </button>
      <button className="border px-4 py-1 text-xs sm:text-sm font-thin  hover:bg-amber-700 hover:text-white transition">
        CHAI
      </button>
      <button className="border px-4 py-1 text-xs sm:text-sm font-thin  hover:bg-amber-700 hover:text-white transition">
        GREEN TEA
      </button>
      <button className="border px-4 py-1 text-xs sm:text-sm font-thin  hover:bg-amber-700 hover:text-white transition">
        BLACK TEA
      </button>
    </div>
    {/* Product Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 md:gap-6 px-3 sm:px-4 md:px-10 mt-6 md:mt-10">
      {
        teas.map((tea, index) => (<div key={index} className="bg-slate-50 p-2 rounded-lg hover:shadow-sm transition">
          <p className="text-amber-900 text-[10px] sm:text-xs font-thin mb-1">
            {tea.tag}
          </p>

          <img src={tea.image} alt="tea" className="w-full aspect-square object-cover rounded-md mb-2"/>

          <p className="text-xs sm:text-sm font-medium leading-tight line-clamp-2">
            {tea.name}
          </p>
          <p className="text-[11px] sm:text-sm text-gray-600">{tea.price}</p>
        </div>))
      }
    </div>
    <Footer/>
  </div>);
};

export default Products;
