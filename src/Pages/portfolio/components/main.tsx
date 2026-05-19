import PortfolioAbout from "./portfolioAbout";
import PortfolioEducation from "./portfolioEducation";
import PortfolioHero from "./portfolioHero";
import PortfolioNavbar from "./portfolioNavbar";
import PortfolioProjects from "./portfolioProjects";

const Main = () => {
  return (<div style={{
      backgroundImage: `url('/portfolio/paper3.jpg')`
    }}>
    <div className="absolute inset-0 "></div>
    <div className="relative z-10">
      <PortfolioNavbar/>
      <PortfolioHero/>
      <PortfolioAbout/>
      <PortfolioEducation/>
      <PortfolioProjects/>
    </div>
  </div>);
};

export default Main;
