// import React from "react";

// const Footer = () => {
//   return (
//     <div className="p-6 border-t-2 mt-8">
//       <div className="text-white flex justify-between mt-4 ml-14 mr-14">
//         <p className="text-2xl font-bold">NFTme</p>
//         <p className="font-semibold">Explore</p>
//         <p className="font-semibold">Market Place</p>
//         <p className="font-semibold">Artists</p>
//         <p className="font-semibold">Contact</p>
//         <img className="h-8 w-22 ml-10" src="/asset/nft/social.png"></img>
//       </div>
//       <div className="text-white ml-14 mt-20 text-sm">
//         <p>
//           Privacy policy | Copyright © Kartik Bansal 2022. All Rights Reserved.
//           | Terms of service
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/20 px-6 md:px-24 py-10">
      {/* TOP ROW */}
      <div className="text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-2xl font-bold">NFTme</p>

        <div className="flex flex-wrap justify-center gap-6 font-semibold text-sm sm:text-base">
          <p className="cursor-pointer hover:text-purple-400">Explore</p>
          <p className="cursor-pointer hover:text-purple-400">Market Place</p>
          <p className="cursor-pointer hover:text-purple-400">Artists</p>
          <p className="cursor-pointer hover:text-purple-400">Contact</p>
        </div>

        <img className="h-8" src="/asset/nft/social.png" alt="Social links" />
      </div>

      {/* BOTTOM TEXT */}
      <div className="text-white/70 text-center text-xs sm:text-sm mt-10">
        <p>
          Privacy Policy | Copyright © Kartik Bansal 2022. All Rights Reserved.
          | Terms of Service
        </p>
      </div>
    </footer>
  );
};

export default Footer;
