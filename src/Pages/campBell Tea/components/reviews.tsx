import React from "react";

const Reviews = () => {
  return (<div>
    <div className="mt-40">
      <p className="font-thin text-amber-900 text-sm mt-10 text-center mb-3">
        TESTIMONIALS
      </p>
      <p className="text-5xl  text-center mb-10">What Our Customers Say</p>
      <div className="grid grid-cols-2 gap-20 p-8">
        <div>
          <p className="text-yellow-400 text-sm mb-4">⭐⭐⭐⭐⭐</p>
          <p className="font-thin">
            I make mine fully boiled and brewed on the stove. Lovely tea. The masala chai has an authentic warmth to it that you simply can't get from mass-produced brands.
          </p>
          <div className="flex gap-4 mt-4">
            <p className="text-amber-900 text-lg  rounded-full">K</p>
            <p>Kristin Watson</p>
            <p className="text-slate-400">25 May</p>
          </div>
        </div>

        <div>
          <p className="text-yellow-400 text-sm mb-4">⭐⭐⭐⭐⭐</p>
          <p className="font-thin">
            Wonderful invoice with all the characteristics I look for in a Darjeeling. I consumed my supply without deviation until it was gone. Will be ordering again.{" "}
          </p>
          <div className="flex gap-4 mt-4">
            <p className="text-amber-900 text-lg  rounded-full">R</p>
            <p>Robin Ginn</p>
            <p className="text-slate-400">25 May</p>
          </div>
        </div>

        <div>
          <p className="text-yellow-400 text-sm mb-4">⭐⭐⭐⭐⭐</p>
          <p className="font-thin">
            I was looking for a new black breakfast tea to try. Upon opening the package, the aroma was incredible. The flavor is rich and complex — exactly what I wanted.{" "}
          </p>
          <div className="flex gap-4 mt-4">
            <p className="text-amber-900 text-lg  rounded-full">A</p>
            <p>Andrea Smith</p>
            <p className="text-slate-400">21 June</p>
          </div>
        </div>

        <div>
          <p className="text-yellow-400 text-sm mb-4">⭐⭐⭐⭐⭐</p>
          <p className="font-thin">
            I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered such fast order processing. Tea quality is exceptional.{" "}
          </p>
          <div className="flex gap-4 mt-4">
            <p className="text-amber-900 text-lg  rounded-full">A</p>
            <p>Adrian Betz</p>
            <p className="text-slate-400">30 July</p>
          </div>
        </div>
      </div>
    </div>
  </div>);
};

export default Reviews;
