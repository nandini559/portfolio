import React from "react";

const About = () => {
  return (
  // <!-- About Section -->
  <section className="about  pt-52 pb-52" id="about">
    <div className="section__header text-center  ">
      <h2 className="section__title  text-7xl font-bold text-black">
        About Me
      </h2>
      {/* <p className="section__subtitle mt-4 text-black font-semibold text-sm">
        Hi I'm Nandini Tarafdar
      </p> */
      }
      </div>

      <div className="flex  place-content-between pl-52 pr-52 mt-10">
        <div className=" mt-4">
          <p className="text-black text-sm font-semibold mb-3 leading-6">
            Hi, I’m Nandini Tarafdar I’m a full-stack developer with a strong interest in building clean, user-centric web applications. I enjoy working across both frontend and backend, creating seamless experiences that are not only functional but also thoughtfully designed.
          </p>
          <p className="text-black text-sm font-semibold mb-3 leading-6">
            I have hands-on experience with modern technologies like React, Tailwind CSS, and backend frameworks, and I’m always looking to expand my skill set by exploring new tools and best practices. I value writing maintainable code, paying attention to detail, and building solutions that scale.
          </p>
          <p className="text-black text-sm font-semibold mb-3 leading-6">
            I approach problems with curiosity and a practical mindset, and I enjoy collaborating as much as I do working independently. Continuous learning and improvement are important to me, and I’m always looking for opportunities to grow as a developer.
          </p>
          <p className="text-black text-sm font-semibold mb-3 leading-6">
            I’m currently seeking opportunities where I can contribute to meaningful projects, learn from experienced teams, and further develop my technical and problem-solving skills.
          </p>
        </div>

        {/* <div className=" rows-2  grid grid-cols-2 gap-6">
        <div className="bg-neutral-800 p-8  rounded-2xl text-center ">
          <p className="font-bold text-black text-4xl ">19+</p>
          <p className="text-black text-xs mt-3">Years Experience</p>
        </div>

        <div className="bg-neutral-800 p-8  rounded-2xl text-center">
          <p className="font-bold text-black text-4xl">50+</p>
          <p className="text-black text-xs mt-3">Team Members Led</p>
        </div>
        <div className="bg-neutral-800 p-8  rounded-2xl text-center">
          <p className="font-bold text-black text-4xl">Top 50</p>
          <p className="text-black text-xs mt-3">Insurtech Ranking</p>
        </div>
        <div className="bg-neutral-800 p-8  rounded-2xl text-center">
          <p className="font-bold text-black text-4xl">40</p>
          <p className="text-black text-xs mt-3">Startup Margin</p>
        </div>
      </div> */
      }
      </div>
  </section>);
};

export default About;
