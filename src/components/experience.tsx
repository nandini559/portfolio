import React from "react";

const Experience: React.FC = () => {
  return (
    //  <!-- Experience Section -->
    <section className="experience bg-black mt-32" id="experience">
      <div className="container">
        <div className="section__header text-center ml-36">
          <h2 className="section__title text-6xl text-blue-500 font-bold mb-6">
            Professional Journey
          </h2>
          <p className="section__subtitle text-stone-400 text-xl font-semibold mb-14">
            Two decades of driving technological innovation
          </p>
        </div>

        <div className="timeline grid gap-8 place-items-center ">
          <div className="timeline__item bg-stone-800 text-white p-8 rounded-3xl ml-24 w-4/5">
            <div className="timeline__marker"></div>
            <div className="timeline__content">
              <div className="timeline__period text-sm text-sky-500 font-semibold mb-1">
                October 2024 – Present
              </div>
              <h3 className="timeline__role text-xl font-bold mb-1">
                Director of Engineering
              </h3>
              <h4 className="timeline__company text-stone-400 mb-3 font-semibold">
                Singularis Ventures
              </h4>
              <p className="timeline__description text-stone-400 mb-3 font-semibold">
                Responsible for establishing and scaling the Development Centre
                in India, overseeing product development and delivery
              </p>
              <ul className="timeline__achievements text-stone-400 mb-2 font-semibold">
                <li className="mb-1">
                  Acquired 4 projects from 2 different domains and geographies
                </li>
                <li>
                  Established Singularis India Operations from ground ZERO to
                  fully functional service company in 06 months
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline__item bg-stone-800 text-white p-8 rounded-3xl  ml-24 w-4/5">
            <div className="timeline__marker"></div>
            <div className="timeline__content">
              <div className="timeline__period  text-sm text-sky-500 font-semibold mb-1">
                March 2023 – October 2024
              </div>
              <h3 className="timeline__role text-xl font-bold mb-1">
                AVP – Information Technology
              </h3>
              <h4 className="timeline__company text-stone-400 mb-3 font-semibold">
                TATA AIA Life Insurance Corp. Ltd.
              </h4>
              <p className="timeline__description text-stone-400 mb-3 font-semibold">
                Led the organization's API-first strategy, spearheading the
                adoption of revamped, future-ready technology stack
              </p>
              <ul className="timeline__achievements text-stone-400 font-semibold ">
                <li className="mb-1">
                  Conceptualized and drove development of Insurance Wallet
                  product
                </li>
                <li>Developed User Propensity Model for product prospects</li>
                <li>
                  Received Pinnacle & Sarathi Award for Leadership
                  Accomplishments
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline__item bg-stone-800 text-white p-8 rounded-3xl  ml-24 w-4/5">
            <div className="timeline__marker"></div>
            <div className="timeline__content">
              <div className="timeline__period  text-sm text-sky-500 font-semibold mb-1">
                April 2022 – November 2022
              </div>
              <h3 className="timeline__role text-xl font-bold mb-1">
                Head of Engineering
              </h3>
              <h4 className="timeline__company text-stone-400 mb-3 font-semibold">
                Tangerine Africa
              </h4>
              <p className="timeline__description text-stone-400 mb-3 font-semibold">
                Defined technology roadmap for Tangerine Africa Group Company,
                establishing vision for 2025
              </p>
              <ul className="timeline__achievements text-stone-400 font-semibold ">
                <li className="mb-1">
                  Conducted comprehensive technology assessments across group
                  companies
                </li>
                <li>
                  Established enterprise architecture for entire InsurTech
                  ecosystem
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline__item bg-stone-800 text-white p-8 rounded-3xl  ml-24 w-4/5">
            <div className="timeline__marker"></div>
            <div className="timeline__content">
              <div className="timeline__period  text-sm text-sky-500 font-semibold mb-1">
                September 2019 – January 2021
              </div>
              <h3 className="timeline__role text-xl font-bold mb-1">
                Partner – Engineering
              </h3>
              <h4 className="timeline__company text-stone-400 mb-3 font-semibold">
                SecureNow Insurance Brokers Pvt. Ltd.
              </h4>
              <p className="timeline__description text-stone-400 mb-3 font-semibold">
                Established in-house IT capabilities and positioned SecureNow
                among India's Top 5 InsurTechs
              </p>
              <ul className="timeline__achievements text-stone-400 font-semibold ">
                <li className="mb-1">Featured Employee for the year 2020</li>
                <li>
                  Built Open API Engine reducing GTM from 6 weeks to 30 minutes
                </li>
                <li>Developed Progressive Web App for Employee Benefits</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
