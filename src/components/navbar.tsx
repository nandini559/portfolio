import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
// import "../style.css";

const Navbar = ({ show = false }) => {
  const navigate = useNavigate();

  const clickNavigate = () => {
    navigate("/project");
  };

  const clickNavigateMain = () => {
    navigate("/main");
  };

  return (
    //  <!-- Navigation -->
    <nav className="nav" id="navbar">
      <div
        className={`nav__container ${
          show ? "bg-white text-black" : " bg-black text-white "
        } flex p-5 justify-between sticky top-0 z-50 shadow-md`}
      >
        <div className="nav__brand text-sky-600 font-bold text-xl">
          <span>Saikat Barman</span>
        </div>
        <ul className="nav__menu flex  gap-6 text-stone-400 font-semibold ">
          <li>
            <button onClick={clickNavigateMain}>
              <a href="#hero" className="nav__link hover:text-black">
                Home
              </a>
            </button>
          </li>
          <li>
            <button onClick={clickNavigateMain}>
              <a href="#about" className="nav__link hover:text-black">
                About
              </a>
            </button>
          </li>
          <li>
            <button onClick={clickNavigateMain}>
              <a href="#experience" className="nav__link hover:text-black">
                Experience
              </a>
            </button>
          </li>
          <li>
            <button onClick={clickNavigateMain}>
              <a href="#achievements" className="nav__link hover:text-black">
                Achievements
              </a>
            </button>
          </li>
          <li>
            {/* <a href="#project" className="nav__link hover:text-white">
              Projects
            </a> */}
            <button
              className="nav__link hover:text-black"
              onClick={clickNavigate}
            >
              Projects
            </button>
          </li>

          <li>
            <button onClick={clickNavigateMain}>
              <a href="#contact" className="nav__link hover:text-black">
                Contact
              </a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
