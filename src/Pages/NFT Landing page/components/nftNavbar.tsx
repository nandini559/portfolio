import React from "react";

const NftNavbar = () => {
  return (
    <div>
      <div className=" text-white flex justify-between pt-16 pl-28 pr-28">
        <div className="w-1/2">
          <img src="/asset/nft/Union.png" className="size-10"></img>
        </div>
        <p>About Us</p>
        <p>Store</p>
        <p>Games</p>
        <button className="bg-white rounded-xl text-black px-4 py-2 mb-2">
          Connect wallet
        </button>
      </div>
    </div>
  );
};

export default NftNavbar;
