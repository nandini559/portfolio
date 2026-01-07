import React from "react";

const JoinCommunity = () => {
  return (
    <div>
      <div className="text-white flex gap-20 justify-center mb-44 ">
        <div>
          <img
            className="w-[280px] sm:w-[380px]"
            src="/asset/nft/ctaimg.png"
          ></img>
        </div>

        <div className="mt-32">
          <p className="text-5xl font-bold mb-2">Join The Community</p>
          <p className="text-5xl font-bold mb-2">And Get The Best NFT</p>
          <p className="text-5xl font-bold mb-10">Collection</p>
          <button className="bg-purple-800 rounded text-white font-semibold px-6 py-3">
            JOIN COMMUNITY
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
