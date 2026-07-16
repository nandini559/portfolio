import React from "react";
import {useNavigate} from "react-router-dom";

const PortfolioNavbar = () => {
  const navigate = useNavigate();


const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

  return (<section id="hero">
    <nav className="nav" id="navbar">
<div className="nav__container fixed top-0 left-0 w-full flex justify-between p-4 z-50  shadow-xl  bg-white/20">        
  <div className="nav__brand font-bold">
          <span>Nandini Tarafdar</span>
        </div>

        <ul className="nav__menu flex gap-4 font-semibold text-xs">
          <li>
            <button onClick={() => scrollToSection("hero")}>Home</button>
          </li>

          <li>
            <button onClick={() => scrollToSection("about")}>
              About
            </button>
          </li>

          <li>
            <button onClick={() => scrollToSection("skills")}>
              Skills
            </button>
          </li>

          <li>
            <button onClick={() => scrollToSection("education")}>
              Education
            </button>
          </li>

          <li>
            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>
          </li>

          <li>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  </section>);
};

export default PortfolioNavbar;
