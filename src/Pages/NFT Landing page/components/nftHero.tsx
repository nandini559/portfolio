import React from "react";

const NftHero = () => {
  return (
    <div>
      <div className="bg-black text-white flex">
        <div className="w-1/2 ml-20">
          <p className="text-6xl font-bold mt-10">Discover Rare</p>
          <p className="text-6xl font-bold mt-2">Collections Of </p>
          <p className="text-6xl font-bold mt-2 mb-5">Art & NFT's</p>
          <p className="text-xs mb-5">
            Create, Explore, & Collect Digital Art NFT's
          </p>
          <button className="bg-purple-800 px-5 py-2 rounded mb-10">
            EXPLORE
          </button>
          <div className="flex gap-14">
            <div>
              <p className="text-3xl font-bold">32K+</p>
              <p className="text-xs">Artwork</p>
            </div>

            <div>
              <p className="text-3xl font-bold">20K+</p>
              <p className="text-xs">Auctions</p>
            </div>

            <div>
              <p className="text-3xl font-bold">10K+</p>
              <p className="text-xs">Artists</p>
            </div>
          </div>
        </div>

        <div className="relative  w-72 h-72">
          <img
            className="absolute object-cover  ml-40"
            alt="first"
            src="/asset/nft/heroimg-1.png"
          ></img>
          <img
            className="absolute  object-cover ml-40"
            alt="first"
            src="/asset/nft/heroimg.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default NftHero;
