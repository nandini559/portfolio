import React from "react";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (<div>
    <div>
      <p className="bg-black text-white text-center">
        FLAT 10% OFF ON EVERY ORDER | USE CODE: CAMPBELL10
      </p>
      <div className="flex gap-5 mt-6 border-b pb-6">
        <p className=" text-amber-800 font-semi ml-5">Campbell Tea</p>

        <button className="ml-80 hover:font-semibold" onClick={() => navigate("/campbell-tea-home")}>
          Home
        </button>
        <button onClick={() => navigate("/campbell-tea-products")} className="hover:font-semibold">
          Products
        </button>
        <button onClick={() => navigate("/campbell-tea-blog")} className="hover:font-semibold">
          Blog
        </button>
        <button onClick={() => navigate("/campbell-tea-about")} className="hover:font-semibold">
          About
        </button>
        <button onClick={() => navigate("/campbell-tea-contact")} className="hover:font-semibold">
          Contact
        </button>

        <button className=" text-white  rounded-lg ml-80">💬</button>

        <button className=" text-white  rounded-lg">👤</button>

        <button className=" text-white  rounded-lg">🛒</button>
      </div>
    </div>
  </div>);
};

export default Navbar;
