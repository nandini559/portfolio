import React from "react";
import NftNavbar from "./nftNavbar";
import NftHero from "./nftHero";
import BitcoinArtWork from "./bitcoinArtWork";
import Trending from "./trending";
import PopularArtist from "./popularArtist";
import JoinCommunity from "./joinCommunity";
import Footer from "./footer";

const NftHome = () => {
  return (
    <div className=" bg-gradient-to-r from-black via-purple-700  to-black">
      <NftNavbar />
      <NftHero />
      <BitcoinArtWork />
      <Trending />
      <PopularArtist />
      <JoinCommunity />
      <Footer />
    </div>
  );
};

export default NftHome;
