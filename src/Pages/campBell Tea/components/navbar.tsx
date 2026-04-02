import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (<div>
    {/* Top Banner */}
    <p className="bg-black text-white text-center text-sm py-2">
      FLAT 10% OFF ON EVERY ORDER | USE CODE: CAMPBELL10
    </p>

    {/* Navbar */}
    <div className="flex items-center justify-between px-5 py-4 border-b">
      {/* Logo */}
      <p className="text-amber-800 font-semibold text-lg">Campbell Tea</p>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <button onClick={() => navigate("/campbell-tea-home")} className="hover:font-semibold">
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

        {/* Icons */}
        <button>💬</button>
        <button>👤</button>
        <button>🛒</button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
    </div>

    {/* Mobile Menu */}
    {
      isOpen && (<div className="md:hidden flex flex-col gap-4 px-5 py-4 border-b">
        <button onClick={() => navigate("/campbell-tea-home")}>Home</button>
        <button onClick={() => navigate("/campbell-tea-products")}>
          Products
        </button>
        <button onClick={() => navigate("/campbell-tea-blog")}>Blog</button>
        <button onClick={() => navigate("/campbell-tea-about")}>About</button>
        <button onClick={() => navigate("/campbell-tea-contact")}>
          Contact
        </button>

        {/* Icons */}
        <div className="flex gap-4 mt-2">
          <button>💬</button>
          <button>👤</button>
          <button>🛒</button>
        </div>
      </div>)
    }
  </div>);
};

export default Navbar;
