import React from "react";

const Contact: React.FC = () => {
  return (
    //  <!-- Contact Section -->
    <section className="contact bg-black mt-10" id="contact">
      <div className="section__header text-center mt-20">
        <h2 className="section__title text-5xl text-sky-500 font-bold mb-3">
          Let's Connect
        </h2>
        <p className="section__subtitle text-stone-400 text-md font-semibold mb-10">
          Ready to discuss your next technology challenge?
        </p>
      </div>

      <div className="contact__content flex p-6">
        <div className="contact__info">
          <h3 className="text-xl font-bold ">Get In Touch</h3>
          <p className="text-stone-400 ml-5">
            I'm always interested in discussing technology leadership
            opportunities, strategic partnerships, and innovative projects.
          </p>

          <div className="contact__details text-stone-400 ml-10">
            <div className="contact__item flex mb-4 gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                className="size-5"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+91 98300 21849</span>
            </div>

            <div className="contact__item flex mb-4 gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                className="size-5"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href="mailto:saikatbarman@outlook.com">
                saikatbarman@outlook.com
              </a>
            </div>

            <div className="contact__item flex mb-4 gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                className="size-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <a href="https://linkedin.com/in/saikatbarman" target="_blank">
                linkedin.com/in/saikatbarman
              </a>
            </div>

            <div className="contact__item flex mb-4 gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                className="size-5"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Gurgaon, Haryana, India</span>
            </div>
          </div>
        </div>

        <form
          className="contact__form bg-stone-800 text-white p-8 rounded-3xl w-1/2"
          id="contact-form"
        >
          <div className="form-group flex flex-col gap-2">
            <label className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control bg-black rounded-xl gap-2 p-3"
              required
            ></input>
          </div>

          <div className="form-group flex flex-col gap-2">
            <label className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control bg-black rounded-xl p-3"
              required
            ></input>
          </div>

          <div className="form-group flex flex-col gap-2">
            <label className="form-label">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-control bg-black rounded-xl p-3"
              required
            ></input>
          </div>

          <div className="form-group flex flex-col gap-2">
            <label className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control bg-black rounded-xl p-3"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 rounded-lg text-white font-semibold 
                       bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
                       hover:from-red-500 hover:via-pink-500 hover:to-purple-500 
                       transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
