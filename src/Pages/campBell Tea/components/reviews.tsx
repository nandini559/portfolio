import React from "react";

const reviews = [
  {
    id: "r1",
    name: "Kristin Watson",
    date: "25 May",
    text: "I make mine fully boiled and brewed on the stove. Lovely tea. The masala chai has an authentic warmth to it that you simply can't get from mass-produced brands.",
    initial: "K"
  }, {
    id: "r2",
    name: "Robin Ginn",
    date: "25 May",
    text: "Wonderful invoice with all the characteristics I look for in a Darjeeling. I consumed my supply without deviation until it was gone.",
    initial: "R"
  }, {
    id: "r3",
    name: "Andrea Smith",
    date: "21 June",
    text: "The aroma was incredible. The flavor is rich and complex — exactly what I wanted.",
    initial: "A"
  }, {
    id: "r4",
    name: "Adrian Betz",
    date: "30 July",
    text: "Super fast delivery and exceptional tea quality. Will definitely order again.",
    initial: "A"
  }
];

const Reviews = () => {
  return (<div className="mt-16 md:mt-32 px-5 md:px-10">
    <p className="font-thin text-amber-900 text-xs md:text-sm text-center mb-2">
      TESTIMONIALS
    </p>
    <p className="text-3xl md:text-5xl text-center mb-10">
      What Our Customers Say
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      {
        reviews.map((review) => (<div key={review.id}
          // ✅ FIXED
          className="bg-slate-50 p-5 rounded-xl hover:shadow-md transition">
          <p className="text-yellow-400 text-sm mb-3">⭐⭐⭐⭐⭐</p>

          <p className="font-thin text-sm md:text-base mb-4">{review.text}</p>

          <div className="flex items-center gap-3 mt-4">
            <div className="bg-amber-100 text-amber-900 w-8 h-8 flex items-center justify-center rounded-full text-sm">
              {review.initial}
            </div>
            <p className="text-sm md:text-base">{review.name}</p>
            <p className="text-xs text-slate-400">{review.date}</p>
          </div>
        </div>))
      }
    </div>
  </div>);
};

export default Reviews;
