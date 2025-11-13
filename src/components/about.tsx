import React from "react";

const About = () => {
  return (
    // <!-- About Section -->
    <section className="about bg-stone-950 " id="about">
      <div className="container ">
        <div className="section__header text-center ml-48 mt-4">
          <h2 className="section__title  text-6xl font-bold text-sky-500">
            About Me
          </h2>
          <p className="section__subtitle mt-4 text-neutral-300 font-semibold text-lg">
            Building the future of technology, one innovation at a time
          </p>
        </div>

        <div className="about__content flex mt-10  tracking-wide ">
          <div className="about__text w-1/2 text-neutral-300  ">
            <p className="mb-4 mt-8">
              As a seasoned technology leader with nearly two decades of
              experience, I've dedicated my career to driving digital
              transformation and innovation across diverse industries. My
              journey spans from building cutting-edge InsurTech platforms to
              establishing enterprise architectures that scale globally.
            </p>
            <p>
              I specialize in translating complex business challenges into
              elegant technological solutions, leading high-performing teams,
              and fostering a culture of innovation that delivers exceptional
              business outcomes.
            </p>
          </div>

          <div className="stats columns-2 rows-2 ml-10 w-1/2">
            <div
              className="stat-card rounded-3xl bg-stone-800 text-white p-10  mb-6"
              data-stat="19+"
            >
              <div className="stat-card__number text-blue-500 text-5xl font-bold text-center mb-6">
                19+
              </div>
              <div className="stat-card__label text-lg">Years Experience</div>
            </div>

            <div
              className="stat-card rounded-3xl bg-stone-800 text-white p-10 "
              data-stat="50+"
            >
              <div className="stat-card__number  text-blue-500 text-5xl font-bold text-center">
                Top 5
              </div>
              <div className="stat-card__label text-lg">InsurTech Ranking</div>
            </div>

            <div
              className="stat-card rounded-3xl bg-stone-800 text-white p-10 mb-6"
              data-stat="19+"
            >
              <div className="stat-card__number text-blue-500 text-5xl font-bold text-center mb-6">
                50+
              </div>
              <div className="stat-card__label text-lg">Team Members Led</div>
            </div>

            <div
              className="stat-card  rounded-3xl bg-stone-800 text-white p-10 "
              data-stat="19+"
            >
              <div className="stat-card__number text-blue-500 text-5xl font-bold text-center">
                40
              </div>
              <div className="stat-card__label text-lg text-center">
                Startup Margin
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
