import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Competencies from "./components/competencies";
import Experience from "./components/experience";
import Achievements from "./components/achievements";
import Technologies from "./components/technologies";
import Contact from "./components/contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from "./components/projects/project";
import Footer from "./components/footer";
import Main from "./components/main";
import GemlayHome from "./Pages/Gemlay Website/components/gemlayHome";
import Home from "./Pages/TCS/components/tcsHome";
import TcsHome from "./Pages/TCS/components/tcsHome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gmeet from "./Pages/GoogleMeet/components/gmeet";

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
