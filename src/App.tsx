import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from "./Pages/portfolio/projects/project";
import GemlayHome from "./Pages/Gemlay Website/components/gemlayHome";
import Home from "./Pages/TCS/components/tcsHome";
import TcsHome from "./Pages/TCS/components/tcsHome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gmeet from "./Pages/GoogleMeet/components/gmeet";
import Main from "./Pages/portfolio/components/main";
import NftHome from "./Pages/NFT Landing page/components/nftHome";
import SingulariesHome from "./Pages/Singularies Ventures/components/singulariesHome";

const App: React.FC = () => {
  return (
    <div className="font-san ">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project" element={<Project />} />
          <Route path="/singularies.ventures" element={<SingulariesHome />} />
          <Route path="/gemlay" element={<GemlayHome />} />
          <Route path="/tcs" element={<TcsHome />} />
          <Route path="/gmeet" element={<Gmeet />} />
          <Route path="/nft" element={<NftHome />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
