import React from "react";

const PortfolioProjects = () => {
  const projectData = [
    {
      id: 1,
      title: "Campbell-Tea",
      image: "/asset/campbell-tea/hero-section.webp",
      description: "A Tea website built using React and Tailwind CSS.",
      link: " https://campbelltea.netlify.app/"
    }, {
      id: 2,
      title: "Digital Art NFT's Website",
      image: "/asset/nft/Rectangle22748.png",
      description: "A frontend website designed with ReactJS and Tailwind CSS.",
      link: "https://campbelltea.netlify.app/nft"
    }, {
      id: 3,
      title: "Google Meet Website",
      image: "https://www.gstatic.com/meet/user_edu_scheduling_light_b352efa017e4f8f1ffda43e847820322.svg",
      description: "A frontend website designed with ReactJS and Tailwind CSS.",
      link: "https://campbelltea.netlify.app/gmeet"
    }
  ];

  return (<section id="projects">
    <div className="min-h-screen  p-8">
      {/* Heading */}
      <h1 className="text-6xl font-bold text-center mb-14">Projects</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          projectData.map((project) => (<div key={project.id} className="border border-black rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
            {/* Image */}
            <img src={project.image} alt={project.title} className="w-full h-52 object-cover"/>{" "}
            {/* Content */}
            <div className="p-5">
              <h2 className="text-2xl font-bold mb-3">{project.title}</h2>

              <p className="text-gray-600 mb-5">{project.description}</p>

              {/* Button */}
              <a href={project.link} target="_blank" rel="noreferrer">
                <button className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition">
                  View Project
                </button>
              </a>
            </div>
          </div>))
        }
      </div>
    </div>
  </section>);
};

export default PortfolioProjects;
