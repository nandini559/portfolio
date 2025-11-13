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
  return (
    <div>
      <div className="bg-black">
        <Navbar />
        <Hero />
        <About />
        <Competencies />
        <Experience />
        <Achievements />
        <Technologies />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
