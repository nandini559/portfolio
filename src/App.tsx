import React from "react";
import Navbar from "./Pages/portfolio/components/navbar";
import Hero from "./Pages/portfolio/components/hero";
import About from "./Pages/portfolio/components/about";
import Competencies from "./Pages/portfolio/components/competencies";
import Experience from "./Pages/portfolio/components/experience";
import Achievements from "./Pages/portfolio/components/achievements";
import Technologies from "./Pages/portfolio/components/technologies";
import Contact from "./Pages/portfolio/components/contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from "./Pages/portfolio/projects/project";
import Footer from "./Pages/portfolio/components/footer";
import GemlayHome from "./Pages/Gemlay Website/components/gemlayHome";
import Home from "./Pages/TCS/components/tcsHome";
import TcsHome from "./Pages/TCS/components/tcsHome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gmeet from "./Pages/GoogleMeet/components/gmeet";
import Main from "./Pages/portfolio/components/main";

const App: React.FC = () => {
  return (
    <div className="font-san ">
      <Router>
        <Routes>
          <Route path="/portfolio" element={<Main />} />
          <Route path="/project" element={<Project />} />
          <Route path="/gemlay" element={<GemlayHome />} />
          <Route path="/tcs" element={<TcsHome />} />
          <Route path="/gmeet" element={<Gmeet />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
