import React from "react";
import {useNavigate} from "react-router-dom";

const PortfolioNavbar = () => {
  const navigate = useNavigate();

  return (<nav className="nav" id="navbar">
    <div className="nav__container flex p-4 justify-between sticky top-0 z-50 text-black">
      <div className="nav__brand font-bold">
        <span>Nandini Tarafdar</span>
      </div>

      <ul className="nav__menu flex gap-4 font-semibold text-xs">
        <li>
          <button onClick={() => navigate("/portfolio.hero")}>Home</button>
        </li>

        <li>
          <button onClick={() => navigate("/portfolio.about")}>About</button>
        </li>

        <li>
          <button onClick={() => navigate("/portfolio.education")}>
            Education
          </button>
        </li>

        <li>
          <button onClick={() => navigate("/portfolio.projects")}>
            Projects
          </button>
        </li>

        <li>
          <button onClick={() => navigate("/portfolio.contact")}>
            Contact
          </button>
        </li>
      </ul>
    </div>
  </nav>);
};

export default PortfolioNavbar;
