import React from "react";

const PortfolioEducation = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Computer Application",
      college: "Raiganj University",
      year: "2023 - 2027",
      description: "Currently pursuing BCA from Raiganj University."
    }, {
      id: 2,
      degree: "Higher Secondary Education",
      college: "Techno India Group Public School Raiganj",
      year: "2022 - 2023",
      description: "Completed Higher Secondary with Science stream."
    }, {
      id: 3,
      degree: "Secondary Education",
      college: "Techno India Group Public School Raiganj",
      year: "2020 - 2021",
      description: "Completed Secondary Education with excellent academic performance."
    }
  ];

  return (<div className="min-h-screen  p-8">
    {/* Heading */}
    <h1 className="text-6xl font-bold text-center mb-10">Education</h1>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        educationData.map((item) => (<div key={item.id} className="border border-black rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-bold mb-2">{item.degree}</h2>

          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            {item.college}
          </h3>

          <p className="text-sm text-gray-500 mb-4">{item.year}</p>

          <p className="text-gray-600">{item.description}</p>
        </div>))
      }
    </div>
  </div>);
};

export default PortfolioEducation;
