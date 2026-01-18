import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Group from "./group";
import GovernaceStructure from "./governaceStructure";
import WorldCareer from "./worldCareer";
import Card from "./card";
import OurStory from "./ourStory";
import TeamMembers from "./teammembers";

const SingulariesHome = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Group />
      <GovernaceStructure />
      <WorldCareer />
      <Card />
      <OurStory />
      <TeamMembers />
    </div>
  );
};

export default SingulariesHome;
