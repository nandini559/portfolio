import React from "react";

const Hero = () => {
  return (
  //  <!-- Hero Section -->
  <div className="  pt-20 pb-16 pl-4 pr-4">
    <div className="hero__content grid gap-4">
      <h1 className="hero__title text-center mt-14">
        <span className="hero__name text-8xl font-bold  ">
          Nandini Tarafdar
        </span>
      </h1>

      <div className="hero__cta text-center flex gap-3 justify-center pt-10">
        <a href="#about" className=" p-4 font-bold border-2 border-black rounded-xl">
          Explore My Journey
        </a>
        <a href="#contact" className=" px-8 py-4 font-bold border-2 border-black rounded-xl">
          Get In Touch
        </a>
      </div>
    </div>
  </div>);
};

export default Hero;
