import React from "react";

type Props = {};

const Trending = (props: Props) => {
  return (
    <div>
      <div className="text-white mr-16">
        <div className="ml-36 mt-10">
          <p className="text-7xl font-semibold mb-4">Trending This Week</p>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et
          </p>
          <p> dolore magna aliqua.</p>
        </div>

        <div className="flex gap-20 justify-center">
          <div>
            <div className="mt-32">
              <p className="text-xl font-semibold">Sebastian</p>
              <div className="flex justify-between">
                <p className="text-xs">Golden flower</p>
                <p className="text-purple-600 ">2.3 ETH</p>
              </div>
              <img
                src="/asset/nft/Rectangle22743.png"
                className="h-80 w-96"
              ></img>
            </div>

            <div className="mt-32">
              <p className="text-xl font-semibold">Javier Miranda</p>
              <div className="flex justify-between">
                <p className="text-xs">Golden flower</p>
                <p className="text-purple-600 ">2.3 ETH</p>
              </div>
              <img
                src="/asset/nft/Rectangle22745.png"
                className="h-80 w-96"
              ></img>
            </div>

            <div className="mt-32">
              <p className="text-xl font-semibold">Milad Fakurian</p>
              <div className="flex justify-between">
                <p className="text-xs">Golden flower</p>
                <p className="text-purple-600 ">2.3 ETH</p>
              </div>
              <img
                src="/asset/nft/Rectangle22747.png"
                className="h-80 w-96"
              ></img>
            </div>
          </div>

          <div>
            <div className="mt-8">
              <p className="text-xl font-semibold">Farhat Deniz</p>
              <div className="flex justify-between">
                <p className="text-xs">Golden flower</p>
                <p className="text-purple-600 ">2.3 ETH</p>
              </div>
              <img
                src="/asset/nft/Rectangle22742.png"
                className="h-80 w-96"
              ></img>
            </div>

            <div className="mt-32">
              <p className="text-xl font-semibold">Polina Kondrashova</p>
              <div className="flex justify-between">
                <p className="text-xs">Golden flower</p>
                <p className="text-purple-600 ">2.3 ETH</p>
              </div>
              <img
                src="/asset/nft/Rectangle22744.png"
                className="h-80 w-96"
              ></img>
            </div>

            <div className="mt-32">
              <p className="text-xl font-semibold">Erick Butler</p>
              <div className="flex justify-between">
                <p className="text-xs">Golden flower</p>
                <p className="text-purple-600 ">2.3 ETH</p>
              </div>
              <img
                src="/asset/nft/Rectangle22746.png"
                className="h-80 w-96"
              ></img>
            </div>
            <button className="bg-white text-black px-6 py-2 rounded font-semibold mt-10">
              Explore more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
