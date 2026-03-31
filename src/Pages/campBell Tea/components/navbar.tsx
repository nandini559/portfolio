import React from "react";

const Navbar = () => {
  return (<div>
    <div>
      <p className="bg-black text-white text-center">
        FLAT 10% OFF ON EVERY ORDER | USE CODE: CAMPBELL10
      </p>
      <div className="flex gap-5 mt-6 border-b pb-6">
        <p>Campbell Tea</p>

        <button className="ml-80">Home</button>
        <button>Products</button>
        <button>Blog</button>
        <button>About</button>
        <button>Contact</button>
      </div>
    </div>
  </div>);
};

export default Navbar;
