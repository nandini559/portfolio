import React from "react";

const Reviews = () => {
  return (<div className="mt-16 md:mt-32 px-5 md:px-10">
    {/* Heading */}
    <p className="font-thin text-amber-900 text-xs md:text-sm text-center mb-2">
      TESTIMONIALS
    </p>
    <p className="text-3xl md:text-5xl text-center mb-10">
      What Our Customers Say
    </p>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      {/* Card */}
      {
        [1, 2, 3, 4].map((_, index) => (<div key={index} className="bg-slate-50 p-5 rounded-xl hover:shadow-md transition">
          <p className="text-yellow-400 text-sm mb-3">⭐⭐⭐⭐⭐</p>

          <p className="font-thin text-sm md:text-base mb-4">
            I make mine fully boiled and brewed on the stove. Lovely tea. The masala chai has an authentic warmth to it that you simply can't get from mass-produced brands.
          </p>

          {/* User */}
          <div className="flex items-center gap-3 mt-4">
            <div className="bg-amber-100 text-amber-900 w-8 h-8 flex items-center justify-center rounded-full text-sm">
              K
            </div>
            <p className="text-sm md:text-base">Kristin Watson</p>
            <p className="text-xs text-slate-400">25 May</p>
          </div>
        </div>))
      }
      </div>
  </div>);
};

export default Reviews;
