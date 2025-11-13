import React from "react";

const Technologies: React.FC = () => {
  return (
    //  <!-- Technology Stack Section -->
    <section className="technologies bg-black mt-12" id="technologies">
      <div className="container">
        <div className="section__header text-center ml-36">
          <h2 className="section__title  text-blue-500 font-bold mb-6 text-6xl">
            Technology Stack
          </h2>
          <p className="section__subtitle text-stone-400 text-xl font-semibold mb-14">
            Expertise across the full spectrum of modern technologies
          </p>
        </div>

        <div className="tech-categories flex flex-col-2 gap-6 p-4">
          <div className="tech-category rounded-3xl bg-stone-800 text-white p-8  mb-6 ml-4">
            <h3 className="tech-category__title text-cyan-500 font-bold mb-4 text-xl">
              Languages
            </h3>
            <div className="tech-tags ">
              <button className="bg-transparent hover:bg-blue-50 text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-sm mr-2">
                JAVA/J2EE
              </button>
              <button className="bg-transparent hover:bg-blue-50 text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-sm">
                NodeJS
              </button>
              <button className="bg-transparent hover:bg-blue-50 text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-sm mt-2 mr-2 ">
                JavaScript
              </button>
              <button className="bg-transparent hover:bg-blue-50 text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-sm mr-2">
                HTML5
              </button>
              <button className="bg-transparent hover:bg-blue-50 text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-sm">
                CSS3
              </button>
            </div>
          </div>

          <div className="tech-category rounded-3xl bg-stone-800 text-white p-8  mb-6">
            <h3 className="tech-category__title text-cyan-500 font-bold mb-4 text-xl">
              Frameworks
            </h3>
            <div className="tech-tags ">
              <button className="bg-transparent hover:bg-blue-50 text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-sm mr-2">
                Spring Boot
              </button>
              <button className="bg-transparent hover:bg-blue-50 text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-sm">
                Spring MVC
              </button>
              <button className="bg-transparent hover:bg-blue-50 text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-sm mt-2 mr-2 ">
                Reactjs
              </button>
              <button className="bg-transparent hover:bg-blue-50 text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-sm mr-2">
                angularjs
              </button>
            </div>
          </div>

          <div className="tech-category rounded-3xl bg-stone-800 text-white p-8  mb-6">
            <h3 className="tech-category__title text-cyan-500 font-bold mb-4 text-xl">
              Cloud & architecture
            </h3>
            <div className="tech-tags ">
              <button className="bg-transparent hover:bg-blue-50 text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-sm mr-2">
                AWS
              </button>
              <button className="bg-transparent hover:bg-blue-50 text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-sm">
                Azure
              </button>
              <button className="bg-transparent hover:bg-blue-50 text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-sm mt-2 mr-2 ">
                Microservices
              </button>
              <button className="bg-transparent hover:bg-blue-50 text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-sm mr-2">
                DEVops
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-items-start p-5 gap-4 ml-4">
          <div className="tech-category rounded-3xl bg-stone-800 text-white p-8  mb-6 w-1/3">
            <h3 className="tech-category__title text-cyan-500 font-bold mb-4 text-xl">
              Databases
            </h3>
            <div className="tech-tags ">
              <button className="bg-transparent hover:bg-blue-50 text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-sm mr-2">
                MYSQL
              </button>
              <button className="bg-transparent hover:bg-blue-50 text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-sm">
                PostgreSQL
              </button>
              <button className="bg-transparent hover:bg-blue-50 text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-sm mt-2 mr-2 ">
                Oracle
              </button>
              <button className="bg-transparent hover:bg-blue-50 text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-sm mr-2">
                Redis
              </button>
            </div>
          </div>
          <div className="tech-category rounded-3xl bg-stone-800 text-white p-8  mb-6 w-1/3">
            <h3 className="tech-category__title text-cyan-500 font-bold mb-4 text-xl">
              Methodologies
            </h3>
            <div className="tech-tags ">
              <button className="bg-transparent hover:bg-blue-50 text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-sm mr-2">
                Agile(Scrum, Kanban)
              </button>
              <button className="bg-transparent hover:bg-blue-50 text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-sm">
                DEVops Practices
              </button>
              <button className="bg-transparent hover:bg-blue-50 text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-sm mt-2 mr-2 ">
                Enterprise architecture
              </button>
              <button className="bg-transparent hover:bg-blue-50 text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded-full text-sm mr-2">
                API-first strategy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
