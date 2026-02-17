import React from "react";

const Hero = () => {
  return (<div>
    <div className="flex ">
      <div className="pt-32 pl-20">
        <p className="font-semibold mb-3">Welcome to my Portfolio!</p>
        <p className="text-4xl font-semibold mb-2">Hello, my name is</p>
        <p className="text-6xl font-semibold mb-4">Nandini Tarafdar</p>
        <p className="font-semibold">I'm a Full Stack Developer</p>
      </div>

      <div>
        <img src="/asset/portfolio/mypic.jpeg" alt="myself" className="h-70 w-80 rounded-full"></img>
      </div>
    </div>
  </div>);
};

export default Hero;
