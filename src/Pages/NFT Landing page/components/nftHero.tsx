import React from "react";

const NftHero = () => {
  return (
    <section className="text-white px-6 md:px-32 my-10">
      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-4xl sm:text-5xl lg:text-7xl font-semibold mt-10">
            Discover Rare
          </p>
          <p className="text-4xl sm:text-5xl lg:text-7xl font-semibold mt-3">
            Collections Of
          </p>
          <p className="text-4xl sm:text-5xl lg:text-7xl font-semibold mt-3 mb-6">
            Art & NFT's
          </p>

          <p className="mb-10 text-sm sm:text-base">
            Create, Explore, & Collect Digital Art NFT's
          </p>

          {/* BUTTON */}
          <div className="mt-10 flex justify-center md:justify-start">
            <button
              className="rounded-2xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-600 
              px-10 sm:px-16 py-4 sm:py-6 text-2xl sm:text-4xl font-extrabold 
              uppercase shadow-2xl transition-all duration-300 hover:scale-[1.03]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 25%, 82% 92%, 0 100%)",
              }}
            >
              EXPLORE
            </button>
          </div>

          {/* STATS */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-10 text-center md:text-left">
            <div>
              <p className="text-4xl sm:text-6xl font-semibold">32K+</p>
              <p>Artwork</p>
            </div>

            <div>
              <p className="text-4xl sm:text-6xl font-semibold">20K+</p>
              <p>Auctions</p>
            </div>

            <div>
              <p className="text-4xl sm:text-6xl font-semibold">10K+</p>
              <p>Artists</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="object-cover w-[260px] sm:w-[360px] md:w-[520px]"
            alt="NFT Hero"
            src="/asset/nft/heroimagewrapper.png"
          />
        </div>
      </div>
    </section>
  );
};

export default NftHero;
