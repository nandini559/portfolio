import React from "react";

const Footer = () => {
  return (
    <div className="p-6 border-t-2 mt-8">
      <div className="text-white flex justify-between mt-4 ml-14 mr-14">
        <p className="text-2xl font-bold">NFTme</p>
        <p className="font-semibold">Explore</p>
        <p className="font-semibold">Market Place</p>
        <p className="font-semibold">Artists</p>
        <p className="font-semibold">Contact</p>
        <img className="h-8 w-22 ml-10" src="/asset/nft/social.png"></img>
      </div>
      <div className="text-white ml-14 mt-20 text-sm">
        <p>
          Privacy policy | Copyright © Kartik Bansal 2022. All Rights Reserved.
          | Terms of service
        </p>
      </div>
    </div>
  );
};

export default Footer;
