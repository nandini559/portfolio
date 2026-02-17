import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";

const PortfolioHome = () => {
  return (<div>
    <div className="bg-gradient-to-br from-rose-800 via-purple-900 to-gray-900
            bg-opacity-75 backdrop-blur-lg
             shadow-xl border border-white/10 p-10
 text-white h-screen">
      <Navbar/>
      <Hero/>
    </div>
  </div>);
};

export default PortfolioHome;
