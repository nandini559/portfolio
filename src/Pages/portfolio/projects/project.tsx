import React from "react";
import Hero from "../components/portfolioHero";
import ProjectHero from "./projectHero";
import Webdev from "./webdev";
import Navbar from "../components/portfolioNavbar";

const Project = () => {
  return (<div className="">
    <Navbar/>
    <ProjectHero/>
    <Webdev/>
  </div>);
};

export default Project;
