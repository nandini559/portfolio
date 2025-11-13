import React from "react";

const ProjectHero = () => {
  return (
    <div>
      <div>
        <div className="bg-orange-500 p-10">
          <h2 className="font-bold text-8xl text-center text-white">
            Our Projects
          </h2>
          <p className="text-white text-3xl text-center mt-6">
            Discover the innovative solutions we've crafted with
          </p>
          <p className="text-yellow-300 font-bold text-3xl text-center">
            Passion & Technology
          </p>
        </div>

        <div className="mt-8 ">
          <p className="text-xl text-gray-800 text-center font-bold">
            Filter Projects
          </p>
          <div className="flex justify-center gap-4 ">
            <button className="rounded-xl shadow-2xl p-4 ">All</button>
            <button className="rounded-xl shadow-2xl p-4 ">
              Web Development
            </button>

            <button className="rounded-xl shadow-2xl p-4">AI/ML</button>
            <button className="rounded-xl shadow-2xl p-4">
              Digital Marketing
            </button>
            <button className="rounded-xl shadow-2xl p-4">
              UI/UX Development
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
