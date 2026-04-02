import React from "react";

const OurStory = () => {
  return (<div className="bg-slate-50 mt-16 md:mt-32 px-5 md:px-10 py-10">
    <div className="flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img src="/asset/campbell-tea/our-story-section.webp" alt="tea" className="w-full h-auto rounded-lg object-cover"/>
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2">
        <p className="font-thin mb-2 text-amber-900 text-xs md:text-sm">
          OUR STORY
        </p>

        <p className="text-3xl md:text-5xl mb-2">Brewed for</p>
        <p className="text-3xl md:text-5xl mb-6">Bliss</p>

        <p className="text-sm md:text-lg font-thin mb-4">
          Campbell Tea was born from a simple belief: that everyday rituals deserve extraordinary ingredients. We work directly with tea gardens across Assam, Darjeeling, and the Nilgiri hills to source leaves at their peak.
        </p>

        <p className="text-sm md:text-lg font-thin mb-8">
          No artificial flavors, no shortcuts. Just pure, certified organic tea crafted with patience and purpose. Every blend reflects the terroir of its origin and the hands that nurtured it.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center md:text-left">
          <div>
            <p className="text-amber-900 text-xl md:text-3xl font-thin">
              100%
            </p>
            <p className="text-xs md:text-base">ORGANIC</p>
          </div>

          <div>
            <p className="text-amber-900 text-xl md:text-3xl font-thin">8+</p>
            <p className="text-xs md:text-base">REGIONS</p>
          </div>

          <div>
            <p className="text-amber-900 text-xl md:text-3xl font-thin">
              2018
            </p>
            <p className="text-xs md:text-base">ESTABLISHED</p>
          </div>
        </div>
      </div>
    </div>
  </div>);
};

export default OurStory;
