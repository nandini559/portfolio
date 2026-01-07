import React from "react";

const NftHero = () => {
  return (
    <div>
      <div className=" text-white flex">
        <div className=" ml-32">
          <p className="text-7xl font-semibold mt-20">Discover Rare</p>
          <p className="text-7xl font-semibold mt-3">Collections Of </p>
          <p className="text-7xl font-semibold mt-3 mb-6">Art & NFT's</p>
          <p className=" mb-10">Create, Explore, & Collect Digital Art NFT's</p>
          <button className="bg-purple-800 px-5 py-2 rounded mb-10">
            EXPLORE
          </button>
          <div className="flex gap-14">
            <div>
              <p className="text-7xl font-semibold">32K+</p>
              <p className="">Artwork</p>
            </div>

            <div>
              <p className="text-7xl font-semibold ml-5">20K+</p>
              <p className="ml-5">Auctions</p>
            </div>
          </div>
          <div>
            <p className="text-7xl font-semibold mt-10">10K+</p>
            <p className="">Artists</p>
          </div>
        </div>

        <div className="  w-96 h-96 mt-10">
          <img
            className=" object-cover ml-40"
            alt="first"
            src="/asset/nft/heroimagewrapper.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default NftHero;
