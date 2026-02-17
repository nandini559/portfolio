import React from "react";
import {Navigate, useNavigate} from "react-router-dom";
// import "../style.css";

const Navbar = ({
  show = false
}) => {
  return (<nav className="nav" id="navbar">
    <div className={`nav__container 
      
           flex p-4 justify-between sticky top-0 z-50 shadow-md`}>
      <div className="nav__brand  font-bold text-stone-200 ">
        <span>Nandini Tarafdar</span>
      </div>
      <ul className="nav__menu flex  gap-4 text-stone-300 font-semibold text-xs">
        <li>
          <button>
            <a href="#hero" className="nav__link hover:text-black">
              Home
            </a>
          </button>
        </li>
        <li>
          <button>
            <a href="#about" className="nav__link hover:text-black">
              About
            </a>
          </button>
        </li>
        <li>
          <button>
            <a href="#experience" className="nav__link hover:text-black">
              Education
            </a>
          </button>
        </li>
        {/* <li>
          <button onClick={clickNavigateMain}>
            <a href="#achievements" className="nav__link hover:text-black">
              Projects
            </a>
          </button>
        </li> */
        }
        <li>
          {/* <a href="#project" className="nav__link hover:text-white">
              Projects
            </a> */
          }
          <button className="nav__link hover:text-black">Projects</button>
        </li>

        <li>
          <button>
            <a href="#contact" className="nav__link hover:text-black">
              Contact
            </a>
          </button>
        </li>
      </ul>
    </div>
  </nav>);
};

export default Navbar;
