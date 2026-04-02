import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import TeaCollection from "./teaCollection";
import OurStory from "./ourStory";
import Reviews from "./reviews";
import Footer from "./footer";

const CampbellTeaHome = () => {
  return (<div>
    <div>
      <Hero/>
      <TeaCollection/>
      <OurStory/>
      <Reviews/>
      <Footer/>
    </div>
  </div>);
};

export default CampbellTeaHome;
