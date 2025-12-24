import React from "react";
import Navbar from "./navbar";
import HomePage from "./homePage";
import Description from "./description";
import Faqs from "./faqs";
import About from "./about";
import Footer from "./footer";

const GemlayHome = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Description />
      <Faqs />
      <About />
      <Footer />
    </div>
  );
};

export default GemlayHome;
