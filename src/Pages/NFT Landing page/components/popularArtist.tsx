import React from "react";

const PopularArtist = () => {
  return (
    <div>
      <div className="text-white mt-40 mb-32 p-20">
        <div className="text-white flex justify-between ml-16 mr-16">
          <p className="text-7xl font-semibold ">Popular Artists</p>
          <button className="bg-white text-black font-semibol px-2 rounded-xl">
            View All Artist
          </button>
        </div>

        <div className="flex justify-between p-16">
          <div>
            <img src="/asset/nft/Ellipse434.png"></img>
            <p className="text-3xl mt-3 ">Ferhat Deniz</p>
          </div>

          <div>
            <img src="/asset/nft/Ellipse435.png"></img>
            <p className="text-3xl mt-3 ">Sebastian</p>
          </div>

          <div>
            <img src="/asset/nft/Ellipse436.png"></img>
            <p className="text-3xl mt-3 ">Javier Miranda</p>
          </div>

          <div>
            <img src="/asset/nft/Ellipse437.png"></img>
            <p className="text-3xl mt-3 ">Erick Butler</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularArtist;
