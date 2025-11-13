import React from "react";
import Hero from "../hero";
import ProjectHero from "./projectHero";
import Webdev from "./webdev";
import Navbar from "../navbar";

const Project = () => {
  return (
    <div className="">
      <Navbar show={true} />
      <ProjectHero />
      <Webdev />
    </div>
  );
};

export default Project;
