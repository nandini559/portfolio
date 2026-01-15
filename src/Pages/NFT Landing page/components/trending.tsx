import React from "react";

type Props = {};

const Trending = (props: Props) => {
  return (
    <section className="text-white px-6 lg:px-24 my-24">
      {/* HEADING */}
      <div className="max-w-4xl mb-20">
        <p className="text-4xl sm:text-5xl lg:text-7xl font-semibold mb-4">
          Trending This Week
        </p>
        <p className="text-base sm:text-xl text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* TWO COLUMN LAYOUT (DESKTOP) */}
      <div className="flex flex-col lg:flex-row justify-center gap-16">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-32 mt-24">
          {[
            { name: "Sebastian", img: "/asset/nft/Rectangle22743.png" },
            { name: "Javier Miranda", img: "/asset/nft/Rectangle22745.png" },
            { name: "Milad Fakurian", img: "/asset/nft/Rectangle22747.png" },
          ].map((item, index) => (
            <div key={index}>
              <p className="text-xl font-semibold">{item.name}</p>
              <div className="flex justify-between text-sm mb-2">
                <p className="text-gray-400">Golden flower</p>
                <p className="text-purple-500 font-semibold">2.3 ETH</p>
              </div>
              <img
                src={item.img}
                className="w-full max-w-[380px] h-[260px] sm:h-[320px] object-cover rounded-xl"
                alt={item.name}
              />
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-32">
          {[
            { name: "Farhat Deniz", img: "/asset/nft/Rectangle22742.png" },
            {
              name: "Polina Kondrashova",
              img: "/asset/nft/Rectangle22744.png",
            },
            { name: "Erick Butler", img: "/asset/nft/Rectangle22746.png" },
          ].map((item, index) => (
            <div key={index}>
              <p className="text-xl font-semibold">{item.name}</p>
              <div className="flex justify-between text-sm mb-2">
                <p className="text-gray-400">Golden flower</p>
                <p className="text-purple-500 font-semibold">2.3 ETH</p>
              </div>
              <img
                src={item.img}
                className="w-full max-w-[380px] h-[260px] sm:h-[320px] object-cover rounded-xl"
                alt={item.name}
              />
            </div>
          ))}

          {/* BUTTON */}
          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold w-fit mt-4">
            Explore more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trending;
