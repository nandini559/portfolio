import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Products = () => {
  return (<div>
    <div>
      <Navbar/>
      <div className="text-center p-20 border-b">
        <p className="font-thin mb-3 text-amber-900 text-sm ">
          The Collection
        </p>
        <p className="text-5xl mb-4">Our Teas</p>
        <p className="font-thin">
          Each blend is crafted from single-origin leaves, sourced at peak
        </p>
        <p className="font-thin">
          harvest and processed with care to preserve every nuance of flavor.
        </p>
      </div>

      <div className="mt-14 ">
        <button className="border px-5 py-1 font-thin mr-4">All</button>
        <button className="border px-5 py-1 font-thin mr-4">CHAI</button>
        <button className="border px-5 py-1 font-thin mr-4">GREEN TEA</button>
        <button className="border px-5 py-1 font-thin">BLACK TEA</button>
      </div>

      <div className="grid grid-cols-5 gap-6 mt-12">
        <div className="bg-slate-50 p-2 rounded-lg">
          <p className="text-amber-900 text-sm font-thin p-2 ">Bestseller</p>
          <img src="https://maharishiayurvedaindia.com/cdn/shop/articles/herbal_teas_and_benefits_5349b7d2-95dd-41ea-9336-b25212d1019d.jpg?v=1771406243" alt="tea"></img>
          <p>Special Masala Chai</p>
          <p>299/-</p>
        </div>

        <div className="bg-slate-50 p-2 rounded-lg">
          <p className="text-amber-900 text-sm font-thin p-2">Bestseller</p>
          <img src="https://maharishiayurvedaindia.com/cdn/shop/articles/herbal_teas_and_benefits_5349b7d2-95dd-41ea-9336-b25212d1019d.jpg?v=1771406243" alt="tea"></img>
          <p>Special Masala Chai</p>
          <p>299/-</p>
        </div>

        <div className="bg-slate-50 p-2 rounded-lg">
          <p className="text-amber-900 text-sm font-thin p-2">Bestseller</p>
          <img src="https://maharishiayurvedaindia.com/cdn/shop/articles/herbal_teas_and_benefits_5349b7d2-95dd-41ea-9336-b25212d1019d.jpg?v=1771406243" alt="tea"></img>
          <p>Special Masala Chai</p>
          <p>299/-</p>
        </div>

        <div className="bg-slate-50 p-2 rounded-lg">
          <p className="text-amber-900 text-sm font-thin p-2">Bestseller</p>
          <img src="https://maharishiayurvedaindia.com/cdn/shop/articles/herbal_teas_and_benefits_5349b7d2-95dd-41ea-9336-b25212d1019d.jpg?v=1771406243" alt="tea"></img>
          <p>Special Masala Chai</p>
          <p>299/-</p>
        </div>

        <div className="bg-slate-50 p-2 rounded-lg">
          <p className="text-amber-900 text-sm font-thin p-2">Bestseller</p>
          <img src="https://maharishiayurvedaindia.com/cdn/shop/articles/herbal_teas_and_benefits_5349b7d2-95dd-41ea-9336-b25212d1019d.jpg?v=1771406243" alt="tea"></img>
          <p>Special Masala Chai</p>
          <p>299/-</p>
        </div>

        <div className="bg-slate-50 p-2 rounded-lg">
          <p className="text-amber-900 text-sm font-thin p-2">Bestseller</p>
          <img src="https://maharishiayurvedaindia.com/cdn/shop/articles/herbal_teas_and_benefits_5349b7d2-95dd-41ea-9336-b25212d1019d.jpg?v=1771406243" alt="tea"></img>
          <p>Special Masala Chai</p>
          <p>299/-</p>
        </div>

        <div className="bg-slate-50 p-2 rounded-lg">
          <p className="text-amber-900 text-sm font-thin p-2">Bestseller</p>
          <img src="https://maharishiayurvedaindia.com/cdn/shop/articles/herbal_teas_and_benefits_5349b7d2-95dd-41ea-9336-b25212d1019d.jpg?v=1771406243" alt="tea"></img>
          <p>Special Masala Chai</p>
          <p>299/-</p>
        </div>

        <div className="bg-slate-50 p-2 rounded-lg">
          <p className="text-amber-900 text-sm font-thin p-2">Bestseller</p>
          <img src="https://maharishiayurvedaindia.com/cdn/shop/articles/herbal_teas_and_benefits_5349b7d2-95dd-41ea-9336-b25212d1019d.jpg?v=1771406243" alt="tea"></img>
          <p>Special Masala Chai</p>
          <p>299/-</p>
        </div>

        <div className="bg-slate-50 p-2 rounded-lg">
          <p className="text-amber-900 text-sm font-thin p-2">Bestseller</p>
          <img src="https://maharishiayurvedaindia.com/cdn/shop/articles/herbal_teas_and_benefits_5349b7d2-95dd-41ea-9336-b25212d1019d.jpg?v=1771406243" alt="tea"></img>
          <p>Special Masala Chai</p>
          <p>299/-</p>
        </div>

        <div className="bg-slate-50 p-2 rounded-lg">
          <p className="text-amber-900 text-sm font-thin p-2">Bestseller</p>
          <img src="https://maharishiayurvedaindia.com/cdn/shop/articles/herbal_teas_and_benefits_5349b7d2-95dd-41ea-9336-b25212d1019d.jpg?v=1771406243" alt="tea"></img>
          <p>Special Masala Chai</p>
          <p>299/-</p>
        </div>
      </div>
      <Footer/>
    </div>
  </div>);
};

export default Products;
