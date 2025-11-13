import React from "react";

const Competencies: React.FC = () => {
  return (
    //  <!-- Core Competencies Section -->
    <section className="competencies mt-28 bg-black" id="competencies">
      <div className="container">
        <div className="section__header text-center ml-36">
          <h2 className="section__title text-7xl text-blue-500 font-bold mb-6">
            Core Competencies
          </h2>
          <p className="section__subtitle text-stone-400 text-xl font-semibold mb-8">
            Strategic leadership meets technical excellence
          </p>
        </div>

        <div className="competencies__grid flex columns-2  space-x-6 ">
          <div className="competency-card bg-stone-800 text-white p-8 rounded-3xl w-1/2 ml-24">
            <div className="competency-card__icon size-20 text-sky-500 mb-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M9 12l2 2 4-4"></path>
                <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
                <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
                <path d="M12 21c0-1-1-3-3-3s-3 2-3 3 1 3 3 3 3-2 3-3"></path>
                <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"></path>
              </svg>
            </div>
            <h3 className="competency-card__title text-xl font-bold mb-4">
              Strategic Leadership
            </h3>
            <ul className="competency-card__list text-sm text-stone-400">
              <li className="mb-3">Technology Strategy & Roadmap</li>
              <li className="mb-3">Digital Transformation & Innovation</li>
              <li className="mb-3">
                Enterprise Architecture & Solution Design
              </li>
              <li className="mb-3">P&L Management & Budgeting</li>
              <li className="mb-3">Team Leadership & Mentoring</li>
              <li className="mb-3">
                Stakeholder Management & C-Level Collaboration
              </li>
            </ul>
          </div>

          <div className="competency-card bg-stone-800 text-white p-8 rounded-3xl w-1/2">
            <div className="competency-card__icon size-20 text-sky-500 mb-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className="competency-card__title text-xl font-bold mb-4">
              Technical Expertise
            </h3>
            <ul className="competency-card__list text-sm text-stone-400">
              <li className="mb-3">Cloud Implementations (AWS, Azure)</li>
              <li className="mb-3">SOA & Microservices Architecture</li>
              <li className="mb-3">Agile (Scrum, Kanban) & DevOps Practices</li>
              <li className="mb-3">Project & Program Management</li>
              <li className="mb-3">
                Data Lake, Data Analytics & Business Intelligence
              </li>
              <li className="mb-3">Security, Compliance & Risk Management</li>
            </ul>
          </div>
        </div>

        <div className="competency-card bg-stone-800 text-white p-8 rounded-3xl w-2/5 mt-8 ml-24">
          <div className="competency-card__icon size-20 text-sky-500 mb-4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"></path>
            </svg>
          </div>
          <h3 className="competency-card__title text-xl font-bold mb-4">
            Domain Expertise
          </h3>
          <ul className="competency-card__list text-sm text-stone-400">
            <li className="mb-3">Insurance & InsurTech Ecosystems</li>
            <li className="mb-3">Employee Benefits & Health Platforms</li>
            <li className="mb-3">B2C/B2B E-commerce & Supply Chain</li>
            <li className="mb-3">FinTech & Financial Blockchain</li>
            <li className="mb-3">E-Auction Engines & E-Tendering</li>
            <li className="mb-3">Spend Management & CRM Systems</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Competencies;
