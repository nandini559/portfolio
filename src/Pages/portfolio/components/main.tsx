import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import About from "./about";
import Competencies from "./competencies";
import Experience from "./experience";
import Achievements from "./achievements";
import Technologies from "./technologies";
import Contact from "./contact";
import Footer from "./footer";

const Main = () => {
  return (<div style={{
      backgroundImage: `url('/portfolio/paper3.jpg')`
    }}>
    <div className="absolute inset-0 "></div>

    <div className="relative z-10">
      <Navbar/>
      <Hero/>
      <About/> {/* <Competencies/> */}
      {/* <Experience/> */}
      {/* <Achievements/> */}
      <Technologies/>
      <Contact/>
      <Footer/>
    </div>
  </div>);
};

export default Main;
