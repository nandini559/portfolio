import React from "react";

const BitcoinArtWork = () => {
  return (
    <div>
      <div className="bg-black text-white flex mt-60">
        <div className="ml-28">
          <img className="size-5/6 " src="/asset/nft/Rectangle22748.png"></img>
        </div>

        <div className="p-20">
          <p className="text-6xl font-semibold mb-4">Bitcoin</p>
          <p className="text-6xl font-semibold mb-6">Art Work</p>

          <div className="flex gap-2 font-semibold mb-10">
            <p>created by</p>
            <p className="text-purple-500">Jonathan Borba</p>
          </div>

          <div className="flex gap-7">
            <div className="border-r-4">
              <p className="mb-3">Current Bid</p>
              <p className="font-semibold text-4xl mb-3 mr-7">1.09 ETH</p>
              <p>$1,835</p>
            </div>

            <div>
              <p>Auction Ends In</p>
              <div className="flex gap-8">
                <div>
                  <p className="font-semibold text-4xl mb-3">18 </p>
                  <p>Hours</p>
                </div>

                <div>
                  <p className="font-semibold text-4xl mb-3">57</p>
                  <p>Minutes</p>
                </div>

                <div>
                  <p className="font-semibold text-4xl mb-3">14</p>
                  <p>Seconds</p>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded font-semibold mt-10">
            View Art Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default BitcoinArtWork;
