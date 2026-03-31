import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import TeaCollection from "./teaCollection";
import OurStory from "./ourStory";

const CampbellTeaHome = () => {
  return (<div>
    <div>
      <Navbar/>
      <Hero/>
      <TeaCollection/>
      <OurStory/>
    </div>
  </div>);
};

export default CampbellTeaHome;
