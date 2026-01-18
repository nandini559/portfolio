import React from "react";

const Hero = () => {
  return (
    //  <!-- Hero Section -->
    <div className=" bg-slate-900 pt-10 pb-16 pl-4 pr-4">
      <div className="hero__background">
        <div className="hero__particles"></div>
      </div>
      <section className="hero " id="hero">
        <div className="hero__content grid gap-4">
          <h1 className="hero__title text-center ">
            <span className="hero__name text-7xl font-bold text-cyan-500 ">
              Nandini Tarafdar
            </span>
          </h1>
          <p className="hero__subtitle text-center text-cyan-500 text-2xl mb-3">
            Student
          </p>
          <div>
            <p className="hero__description text-center text-stone-300 text-sm font-semibold">
              Innovative technology leader with 19+ years driving digital
              transformation across InsurTech, FinTech,
            </p>
            <p className="hero__description text-center text-stone-300 text-sm mb-7 font-semibold">
              E-commerce, and Ed-Tech
            </p>
          </div>
          <div className="hero__cta text-center flex gap-3 justify-center">
            <a
              href="#about"
              className="bg-cyan-500 rounded-full text-white p-4 font-bold"
            >
              Explore My Journey
            </a>
            <a
              href="#contact"
              className="btn btn--outline hero__btn border-2 p-5 border-cyan-500 text-cyan-500"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero__scroll text-center mt-6 text-sm">
          <div className="scroll-indicator text-stone-400">
            <span>Scroll Down</span>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
