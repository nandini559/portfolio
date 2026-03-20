import React from "react";
import {Navigate, useNavigate} from "react-router-dom";
// import "../style.css";

const Navbar = ({
  show = false
}) => {
  const navigate = useNavigate();

  const clickNavigate = () => {
    navigate("/project");
  };

  const clickNavigateMain = () => {
    navigate("/portfolio");
  };

  return (
  //  <!-- Navigation -->
  <nav className="nav" id="navbar">
    <div className={`nav__container 
      
           flex p-4 justify-between sticky top-0 z-50  text-black`}>
      <div className="nav__brand  font-bold  ">
        <span>Nandini Tarafdar</span>
      </div>
      <ul className="nav__menu flex  gap-4  font-semibold text-xs">
        <li>
          <button onClick={clickNavigateMain}>
            <a href="#hero" className="nav__link hover:font-bold">
              Home
            </a>
          </button>
        </li>
        <li>
          <button onClick={clickNavigateMain}>
            <a href="#about" className="nav__link hover:font-bold">
              About
            </a>
          </button>
        </li>
        <li>
          <button onClick={clickNavigateMain}>
            <a href="#experience" className="nav__link mr-3 hover:font-bold">
              Education
            </a>
          </button>

          <button className="nav__link hover:font-bold" onClick={clickNavigate}>
            Projects
          </button>
        </li>

        <li>
          <button onClick={clickNavigateMain}>
            <a href="#contact" className="nav__link hover:font-bold">
              Contact
            </a>
          </button>
        </li>
      </ul>
    </div>
  </nav>);
};

export default Navbar;
