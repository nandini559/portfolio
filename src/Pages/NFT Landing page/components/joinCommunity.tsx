// import React from "react";

// const JoinCommunity = () => {
//   return (
//     <div>
//       <div className="text-white flex gap-20 justify-center mb-44 ">
//         <div>
//           <img
//             className="w-[280px] sm:w-[380px]"
//             src="/asset/nft/ctaimg.png"
//           ></img>
//         </div>

//         <div className="mt-32">
//           <p className="text-5xl font-bold mb-2">Join The Community</p>
//           <p className="text-5xl font-bold mb-2">And Get The Best NFT</p>
//           <p className="text-5xl font-bold mb-10">Collection</p>
//           <button className="bg-purple-800 rounded text-white font-semibold px-6 py-3">
//             JOIN COMMUNITY
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JoinCommunity;

import React from "react";

const JoinCommunity = () => {
  return (
    <section className="text-white px-6 md:px-24 my-24">
      <div className="flex flex-col md:flex-row items-center justify-center gap-16">
        {/* IMAGE */}
        <img
          className="w-[220px] sm:w-[300px] md:w-[380px]"
          src="/asset/nft/ctaimg.png"
          alt="Join Community"
        />

        {/* CONTENT */}
        <div className="text-center md:text-left">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
            Join The Community
          </p>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
            And Get The Best NFT
          </p>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10">
            Collection
          </p>

          <button className="bg-purple-800 hover:bg-purple-700 transition rounded-xl text-white font-semibold px-8 py-4">
            JOIN COMMUNITY
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
