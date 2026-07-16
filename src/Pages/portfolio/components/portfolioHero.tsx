import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const PortfolioHero = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (path : string) => {
    navigate(path);
    setIsOpen(false);
  };


  const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

  return (
  //  <!-- Hero Section -->
  <section id="hero">
    <div className="  pt-20 pb-16 pl-4 pr-4">
      <div className="hero__content grid gap-4">
        <h1 className="hero__title text-center mt-14">
          <span className="hero__name text-8xl font-bold  ">
            Nandini Tarafdar
          </span>
        </h1>

        <div className="hero__cta text-center flex gap-3 justify-center pt-10">
          <button className=" p-4 font-bold border-2 border-black rounded-xl" onClick={() => scrollToSection("about")}>
            Explore My Journey
          </button>
          <button className=" px-8 py-4 font-bold border-2 border-black rounded-xl" onClick={() => scrollToSection("contact")}>
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  </section>);
};

export default PortfolioHero;
