import React from "react";

const About = () => {
  return (
    // <!-- About Section -->
    <section className="about bg-stone-950 pt-20" id="about">
      <div className="section__header text-center  ">
        <h2 className="section__title  text-5xl font-bold text-sky-500">
          About Me
        </h2>
        <p className="section__subtitle mt-4 text-neutral-300 font-semibold text-sm">
          Building the future of technology, one innovation at a time
        </p>
      </div>

      <div className="flex  place-content-between  pl-24 pr-24 pb-24 mt-10">
        <div className="w-1/2 mt-4">
          <p className="text-neutral-300 text-sm font-semibold mb-3 leading-6">
            As a seasoned technology leader with nearly two decades of
            experience, I've dedicated my career to driving digital
            transformation and innovation across diverse industries. My journey
            spans from building cutting-edge InsurTech platforms to establishing
            enterprise architectures that scale globally.
          </p>
          <p className="text-neutral-300 text-sm font-semibold leading-6">
            I specialize in translating complex business challenges into elegant
            technological solutions, leading high-performing teams, and
            fostering a culture of innovation that delivers exceptional business
            outcomes.
          </p>
        </div>

        <div className=" rows-2  grid grid-cols-2 gap-6">
          <div className="bg-neutral-800 p-8  rounded-2xl text-center ">
            <p className="font-bold text-cyan-500 text-4xl ">19+</p>
            <p className="text-neutral-300 text-xs mt-3">Years Experience</p>
          </div>

          <div className="bg-neutral-800 p-8  rounded-2xl text-center">
            <p className="font-bold text-cyan-500 text-4xl"> 50+</p>
            <p className="text-neutral-300 text-xs mt-3"> Team Members Led</p>
          </div>
          <div className="bg-neutral-800 p-8  rounded-2xl text-center">
            <p className="font-bold text-cyan-500 text-4xl">Top 50</p>
            <p className="text-neutral-300 text-xs mt-3">Insurtech Ranking</p>
          </div>
          <div className="bg-neutral-800 p-8  rounded-2xl text-center">
            <p className="font-bold text-cyan-500 text-4xl">40</p>
            <p className="text-neutral-300 text-xs mt-3">Startup Margin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
