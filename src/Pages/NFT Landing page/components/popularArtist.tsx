// import React from "react";

// const PopularArtist = () => {
//   return (
//     <div>
//       <div className="text-white mt-40 mb-32 p-20">
//         <div className="text-white flex justify-between ml-16 mr-16">
//           <p className="text-7xl font-semibold ">Popular Artists</p>
//           <button className="bg-white text-black font-semibol px-2 rounded-xl">
//             View All Artist
//           </button>
//         </div>

//         <div className="flex justify-between p-16">
//           <div>
//             <img src="/asset/nft/Ellipse434.png"></img>
//             <p className="text-3xl mt-3 ">Ferhat Deniz</p>
//           </div>

//           <div>
//             <img src="/asset/nft/Ellipse435.png"></img>
//             <p className="text-3xl mt-3 ">Sebastian</p>
//           </div>

//           <div>
//             <img src="/asset/nft/Ellipse436.png"></img>
//             <p className="text-3xl mt-3 ">Javier Miranda</p>
//           </div>

//           <div>
//             <img src="/asset/nft/Ellipse437.png"></img>
//             <p className="text-3xl mt-3 ">Erick Butler</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularArtist;

import React from "react";

const PopularArtist = () => {
  return (
    <section className="text-white px-6 md:px-24 my-24">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-6">
        <p className="text-4xl sm:text-5xl lg:text-7xl font-semibold">
          Popular Artists
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
          View All Artist
        </button>
      </div>

      {/* ARTISTS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 text-center">
        {[
          { name: "Ferhat Deniz", img: "/asset/nft/Ellipse434.png" },
          { name: "Sebastian", img: "/asset/nft/Ellipse435.png" },
          { name: "Javier Miranda", img: "/asset/nft/Ellipse436.png" },
          { name: "Erick Butler", img: "/asset/nft/Ellipse437.png" },
        ].map((artist, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={artist.img}
              alt={artist.name}
              className="w-32 sm:w-40 lg:w-44 mb-4"
            />
            <p className="text-lg sm:text-2xl font-semibold">{artist.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularArtist;
