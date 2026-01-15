import React from "react";

const BitcoinArtWork = () => {
  return (
    <section className="text-white px-6 md:px-24 my-24 md:my-40">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-[260px] sm:w-[360px] md:w-[520px] object-cover"
            src="/asset/nft/Rectangle22748.png"
            alt="Bitcoin Artwork"
          />
        </div>

        {/* CONTENT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-4xl sm:text-5xl lg:text-7xl font-semibold mb-2">
            Bitcoin
          </p>
          <p className="text-4xl sm:text-5xl lg:text-7xl font-semibold mb-6">
            Art Work
          </p>

          <div className="flex justify-center lg:justify-start gap-2 font-semibold mb-12 text-sm sm:text-base">
            <p>created by</p>
            <p className="text-purple-500">Jonathan Borba</p>
          </div>

          {/* BID + TIMER */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center lg:items-start gap-10 mb-16">
            {/* CURRENT BID */}
            <div className="sm:border-r-4 sm:pr-8 text-center sm:text-left">
              <p className="mb-3">Current Bid</p>
              <p className="font-semibold text-2xl sm:text-4xl mb-3">
                1.09 ETH
              </p>
              <p>$1,835</p>
            </div>

            {/* AUCTION TIMER */}
            <div className="text-center sm:text-left">
              <p className="mb-3">Auction Ends In</p>
              <div className="flex justify-center sm:justify-start gap-6">
                <div>
                  <p className="font-semibold text-2xl sm:text-4xl">18</p>
                  <p>Hours</p>
                </div>
                <div>
                  <p className="font-semibold text-2xl sm:text-4xl">57</p>
                  <p>Minutes</p>
                </div>
                <div>
                  <p className="font-semibold text-2xl sm:text-4xl">14</p>
                  <p>Seconds</p>
                </div>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <div className="flex justify-center lg:justify-start">
            <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
              View Art Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BitcoinArtWork;
