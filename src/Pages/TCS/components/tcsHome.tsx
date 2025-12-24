import React from "react";
import Navbar from "./navbar";
import WhatsNew from "./whatsNew";
import CuttingEdge from "./cuttingEdge";
import CustomerStories from "./customerStories";
import Footer from "./footer";
import ContactUs from "./contactUs";
import News from "./news";
import Hero from "./hero";

const TcsHome = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhatsNew />
      <CuttingEdge />
      <CustomerStories />
      <ContactUs />
      <News />
      <Footer />
    </div>
  );
};

export default TcsHome;
