import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (path : string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (<div className="w-full max-w-full overflow-x-hidden sticky top-0 z-50 bg-white">
    {/* Top Banner */}
    <p className="bg-black text-white text-center text-[10px] sm:text-xs py-2 px-2 leading-tight">
      FLAT 10% OFF ON EVERY ORDER | USE CODE: CAMPBELL10
    </p>

    {/* Navbar */}
    <div className="flex items-center justify-between w-full px-3 sm:px-5 md:px-10 py-3 md:py-4 border-b">
      {/* Logo */}
      <p className="text-amber-800 font-semibold text-base sm:text-lg cursor-pointer whitespace-nowrap" onClick={() => handleNav("/campbell-tea-home")}>
        Campbell Tea
      </p>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 lg:gap-8 items-center">
        <button onClick={() => handleNav("/campbell-tea-home")} className="hover:text-amber-800 transition whitespace-nowrap">
          Home
        </button>
        <button onClick={() => handleNav("/campbell-tea-products")} className="hover:text-amber-800 transition whitespace-nowrap">
          Products
        </button>
        <button onClick={() => handleNav("/campbell-tea-blog")} className="hover:text-amber-800 transition whitespace-nowrap">
          Blog
        </button>
        <button onClick={() => handleNav("/campbell-tea-about")} className="hover:text-amber-800 transition whitespace-nowrap">
          About
        </button>
        <button onClick={() => handleNav("/campbell-tea-contact")} className="hover:text-amber-800 transition whitespace-nowrap">
          Contact
        </button>

        {/* Icons */}
        <div className="flex gap-3 text-lg">
          <button className="hover:scale-110 transition" onClick={() => handleNav("/campbell-tea-contact")}>
            💬
          </button>
          <button className="hover:scale-110 transition" onClick={() => handleNav("/campbell-tea-blog")}>
            👤
          </button>
          <button className="hover:scale-110 transition" onClick={() => handleNav("/campbell-tea-products")}>
            🛒
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-xl flex-shrink-0" onClick={() => setIsOpen(!isOpen)}>
        {
          isOpen
            ? "✖"
            : "☰"
        }
      </button>
    </div>

    {/* Mobile Menu */}
    <div className={`md:hidden w-full overflow-hidden transition-all duration-300 ${
      isOpen
        ? "max-h-96 py-3"
        : "max-h-0"}`}>
      <div className="flex flex-col gap-3 px-4 border-b">
        <button onClick={() => handleNav("/campbell-tea-home")}>Home</button>
        <button onClick={() => handleNav("/campbell-tea-products")}>
          Products
        </button>
        <button onClick={() => handleNav("/campbell-tea-blog")}>Blog</button>
        <button onClick={() => handleNav("/campbell-tea-about")}>
          About
        </button>
        <button onClick={() => handleNav("/campbell-tea-contact")}>
          Contact
        </button>

        {/* Icons */}
        <div className="flex gap-4 mt-2 text-lg">
          <button>💬</button>
          <button>👤</button>
          <button>🛒</button>
        </div>
      </div>
    </div>
  </div>);
};

export default Navbar;
