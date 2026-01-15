import React, { useState } from "react";

const NftNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="text-white px-6 md:px-28 pt-6 md:pt-16">
      {/* TOP BAR */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img src="/asset/nft/Union.png" className="w-10 h-10" alt="Logo" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <p className="cursor-pointer hover:text-gray-300">About Us</p>
          <p className="cursor-pointer hover:text-gray-300">Store</p>
          <p className="cursor-pointer hover:text-gray-300">Games</p>
          <button className="bg-white text-black px-4 py-2 rounded-xl">
            Connect Wallet
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-6 flex flex-col items-center gap-6 bg-black/80 p-6 rounded-xl text-center">
          <p className="hover:text-gray-300">About Us</p>
          <p className="hover:text-gray-300">Store</p>
          <p className="hover:text-gray-300">Games</p>
          <button className="bg-white text-black px-6 py-2 rounded-xl">
            Connect Wallet
          </button>
        </div>
      )}
    </nav>
  );
};

export default NftNavbar;
