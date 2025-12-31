import React from "react";

const NftNavbar = () => {
  return (
    <div>
      <div className="bg-black text-white flex justify-between p-6">
        <div className="w-1/2">
          <img src="/asset/nft/Union.png" className=""></img>
        </div>
        <p>About Us</p>
        <p>Store</p>
        <p>Games</p>
        <button className="bg-white rounded text-black px-4 py-2">
          Connect wallet
        </button>
      </div>
    </div>
  );
};

export default NftNavbar;
