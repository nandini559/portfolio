import React from "react";

const PortfolioAbout = () => {
  return (<section id="about" className="about py-16 sm:py-20 md:py-24 lg:py-32">
    <div className="text-center">
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black">
        About Me
      </h2>
    </div>

    <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 mt-10">
      <p className="text-black text-sm sm:text-base leading-7 font-medium mb-5 text-justify">
        Hi, I’m Nandini Tarafdar. I’m a full-stack developer with a strong interest in building clean, user-centric web applications. I enjoy working across both frontend and backend, creating seamless experiences that are not only functional but also thoughtfully designed.
      </p>

      <p className="text-black text-sm sm:text-base leading-7 font-medium mb-5 text-justify">
        I have hands-on experience with modern technologies like React, Tailwind CSS, Node.js, NestJS, Prisma, and MySQL. I'm always looking to expand my skill set by exploring new tools and best practices. I value writing maintainable code, paying attention to detail, and building solutions that scale.
      </p>

      <p className="text-black text-sm sm:text-base leading-7 font-medium mb-5 text-justify">
        I approach problems with curiosity and a practical mindset, and I enjoy collaborating as much as I do working independently. Continuous learning and improvement are important to me, and I’m always looking for opportunities to grow as a developer.
      </p>

      <p className="text-black text-sm sm:text-base leading-7 font-medium text-justify">
        I’m currently seeking opportunities where I can contribute to meaningful projects, learn from experienced teams, and further develop my technical and problem-solving skills.
      </p>
    </div>
  </section>);
};

export default PortfolioAbout;
