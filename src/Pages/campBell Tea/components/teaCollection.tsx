import React from "react";

const teas = Array(12).fill({name: "Special Masala Chai", price: "₹299", tag: "Bestseller", image: "/asset/campbell-tea/tea5.webp"});

const TeaCollection = () => {
  return (<div className="px-3 sm:px-5 md:px-10 py-6 md:py-10 w-full overflow-x-hidden">
    {/* Heading */}
    <p className="font-thin mb-1 text-amber-900 text-xs sm:text-sm text-center md:text-left">
      THE COLLECTION
    </p>
    <p className="text-xl sm:text-2xl md:text-5xl mb-4 md:mb-8 text-center md:text-left">
      Our Teas
    </p>

    {/* Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 md:gap-6">
      {
        teas.map((tea, index) => (<div key={index} className={`bg-slate-100 p-2 rounded-lg hover:shadow-sm transition w-full 
              ${index >= 4
            ? "hidden md:block"
            : ""}`}>
          <p className="text-amber-900 text-[10px] sm:text-xs font-thin mb-1">
            {tea.tag}
          </p>

          <img src={tea.image} alt="tea" className="w-full aspect-square object-cover rounded-md mb-2"/>

          <p className="text-xs sm:text-sm font-medium leading-tight line-clamp-2">
            {tea.name}
          </p>
          <p className="text-[11px] sm:text-sm text-gray-600">{tea.price}</p>
        </div>))
      }
    </div>
  </div>);
};

export default TeaCollection;
