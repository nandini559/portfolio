import React from "react";

const OurStory = () => {
  return (<div>
    <div className="flex gap-10 bg-slate-50 mt-32 ">
      <div className="w-1/2 mt-20 p-4">
        <img src="/asset/campbell-tea/our-story-section.webp" alt="tea"></img>
      </div>

      <div className="w-1/2 mt-40 p-6">
        <p className="font-thin mb-3 text-amber-900 text-sm mt-10">
          OUR STORY
        </p>
        <p className="text-5xl mb-2">Brewed for</p>
        <p className="text-5xl mb-6">Bliss</p>
        <p className="text-xl font-thin mb-5">
          Campbell Tea was born from a simple belief: that everyday rituals deserve extraordinary ingredients. We work directly with tea gardens across Assam, Darjeeling, and the Nilgiri hills to source leaves at their peak.
        </p>
        <p className="text-xl font-thin">
          No artificial flavors, no shortcuts. Just pure, certified organic tea crafted with patience and purpose. Every blend reflects the terroir of its origin and the hands that nurtured it.
        </p>
        <div className="flex justify-between mt-20">
          <div>
            <p className="text-amber-900 text-3xl font-thin">100%</p>
            <p>ORGANIC</p>
          </div>

          <div>
            <p className="text-amber-900 text-3xl font-thin">8+</p>
            <p>REGIONS</p>
          </div>

          <div>
            <p className="text-amber-900 text-3xl font-thin">2018</p>
            <p>EXTABLISHED</p>
          </div>
        </div>
      </div>
    </div>
  </div>);
};

export default OurStory;
