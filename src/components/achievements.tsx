import React from "react";

const Achievements: React.FC = () => {
  return (
    //  <!-- Achievements Section -->
    <section className="achievements mt-32 bg-black" id="achievements">
      <div className="section__header text-center mt-20">
        <h2 className="section__title text-5xl text-sky-500 font-bold mb-3">
          Key Achievements
        </h2>
        <p className="section__subtitle text-stone-400 text-md font-semibold mb-10">
          Milestones that define excellence
        </p>
      </div>

      <div className="achievements__grid columns-3 rows-2 gap-4 p-6">
        <div className="achievement-card  rounded-3xl bg-stone-800 text-white p-10  mb-6 text-sm ">
          <div className="achievement-card__icon mb-3 ">🚀</div>
          <h3 className="achievement-card__title text-xl font-semibold mb-3">
            Ed-Tech Startup Success
          </h3>
          <p className="achievement-card__description text-sm text-stone-400 mb-1">
            Built Ed-Tech Networking Startup
          </p>
          <p className="text-sm text-stone-400">
            from ground up in 3 months with 40% margin
          </p>
        </div>

        <div className="achievement-card  rounded-3xl bg-stone-800 text-white p-10  mb-6">
          <div className="achievement-card__icon">🏆</div>
          <h3 className="achievement-card__title">InsurTech Leadership</h3>
          <p className="achievement-card__description">
            Successfully led InsurTech to be featured among India's Top 5
            listing
          </p>
        </div>

        <div className="achievement-card  rounded-3xl bg-stone-800 text-white p-10  mb-6">
          <div className="achievement-card__icon">💡</div>
          <h3 className="achievement-card__title">Insurance Innovation</h3>
          <p className="achievement-card__description">
            Developed Insurance Wallet product consolidating Health and Life
            benefits
          </p>
        </div>

        <div className="achievement-card  rounded-3xl bg-stone-800 text-white p-10  mb-6">
          <div className="achievement-card__icon">⚡</div>
          <h3 className="achievement-card__title">API Engine Excellence</h3>
          <p className="achievement-card__description">
            Created API Engine reducing Go-To-Market time from 6 weeks to 30
            minutes
          </p>
        </div>

        <div className="achievement-card  rounded-3xl bg-stone-800 text-white p-10  mb-6">
          <div className="achievement-card__icon">🏗️</div>
          <h3 className="achievement-card__title">Enterprise Architecture</h3>
          <p className="achievement-card__description">
            Established enterprise architecture for entire InsurTech ecosystem
          </p>
        </div>

        <div className="achievement-card  rounded-3xl bg-stone-800 text-white p-10  mb-6">
          <div className="achievement-card__icon">👥</div>
          <h3 className="achievement-card__title">Team Building</h3>
          <p className="achievement-card__description">
            Built and led high-performing teams of 50+ technical resources
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
