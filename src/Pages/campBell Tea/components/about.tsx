import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const About = () => {
  return (<div>
    <div>
      <Navbar/>
      <div className="text-center p-20 ">
        <p className="font-thin mb-3 text-amber-900 text-sm ">OUR STORY</p>
        <p className="text-5xl mb-4">Brewed for Bliss</p>
        <p className="font-thin">
          Campbell Tea began with a simple conviction: the ritual of tea deserves the same{" "}
        </p>
        <p className="font-thin">
          reverence as the leaves themselves. We set out to bring the finest single-origin Indian teas
        </p>
        <p className="font-thin">
          directly to your cup — unblended, unadulterated, and unforgettable.
        </p>
      </div>

      <div className="flex justify-between p-20 mt-8 mb-8 bg-gray-100">
        <div>
          <p className="text-4xl text-gray-400 mb-2">01</p>
          <p className="text-lg mb-4">Direct Sourcing</p>
          <p className="font-thin">
            We work directly with gardens in Assam, Darjeeling,
          </p>
          <p className="font-thin">
            and Nilgiri — ensuring fair prices for farmers and
          </p>
          <p className="font-thin">uncompromised quality for you.</p>
        </div>

        <div>
          <p className="text-4xl text-gray-400 mb-2">02</p>
          <p className="text-lg mb-4">Certified Organic</p>
          <p className="font-thin">
            Every leaf in our collection is certified organic. No{" "}
          </p>
          <p className="font-thin">
            pesticides, no artificial processing, no compromise
          </p>
          <p className="font-thin">on purity.</p>
        </div>

        <div>
          <p className="text-4xl text-gray-400 mb-2">03</p>
          <p className="text-lg mb-4">Small Batch</p>
          <p className="font-thin">
            We process in small batches to preserve the unique
          </p>
          <p className="font-thin">
            character of each harvest. Freshness is not a
          </p>
          <p className="font-thin">promise — it's a practice.</p>
        </div>
      </div>

      <div className="text-center mt-36 p-20">
        <p className="text-8xl text-gray-200 mb-3">"</p>
        <p className="text-3xl font-thin mb-2">
          We don't just sell tea. We share a culture, a craft, and a quiet
        </p>
        <p className="text-3xl font-thin mb-5">
          moment of beauty in every cup.
        </p>
        <p className="text-amber-700 text-lg font-thin mb-20">
          — The Campbell Tea Team
        </p>
      </div>
      <Footer/>
    </div>
  </div>);
};

export default About;
