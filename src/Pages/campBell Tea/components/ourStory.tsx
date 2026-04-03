import React from "react";

const OurStory = () => {
  return (<div className="bg-slate-50 mt-10 md:mt-24 px-3 sm:px-4 md:px-10 py-6 md:py-10 w-full overflow-x-hidden">
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img src="/asset/campbell-tea/our-story-section.webp" alt="tea" className="w-full h-[220px] sm:h-[280px] md:h-full object-cover rounded-lg md:rounded-xl"/>
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <p className="font-thin mb-1 text-amber-900 text-[10px] sm:text-xs">
          OUR STORY
        </p>

        <div className="leading-tight">
          <p className="text-2xl sm:text-3xl md:text-5xl">Brewed for</p>
          <p className="text-2xl sm:text-3xl md:text-5xl mb-4">Bliss</p>
        </div>

        <p className="text-xs sm:text-sm md:text-base font-thin mb-3 max-w-xs sm:max-w-sm md:max-w-md">
          Campbell Tea was born from a simple belief: that everyday rituals deserve extraordinary ingredients. We work directly with tea gardens across Assam, Darjeeling, and the Nilgiri hills to source leaves at their peak.
        </p>

        <p className="text-xs sm:text-sm md:text-base font-thin mb-5 max-w-xs sm:max-w-sm md:max-w-md">
          No artificial flavors, no shortcuts. Just pure, certified organic tea crafted with patience and purpose. Every blend reflects the terroir of its origin and the hands that nurtured it.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-xs sm:max-w-sm md:max-w-none text-center md:text-left">
          <div>
            <p className="text-amber-900 text-lg sm:text-xl md:text-3xl font-thin">
              100%
            </p>
            <p className="text-[10px] sm:text-xs md:text-sm">ORGANIC</p>
          </div>

          <div>
            <p className="text-amber-900 text-lg sm:text-xl md:text-3xl font-thin">
              8+
            </p>
            <p className="text-[10px] sm:text-xs md:text-sm">REGIONS</p>
          </div>

          <div>
            <p className="text-amber-900 text-lg sm:text-xl md:text-3xl font-thin">
              2018
            </p>
            <p className="text-[10px] sm:text-xs md:text-sm">ESTABLISHED</p>
          </div>
        </div>
      </div>
    </div>
  </div>);
};

export default OurStory;
