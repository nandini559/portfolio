import React from "react";

const teas = [
  {
    name: "Special Masala Chai",
    price: "₹299",
    tag: "Bestseller",
    image: "/asset/campbell-tea/tea10.jpeg"
  }, {
    name: "Elaichi Chai",
    price: "₹249",
    tag: "Popular",
    image: "/asset/campbell-tea/tea2.webp"
  }, {
    name: "Ginger Chai",
    price: "₹279",
    tag: "Hot",
    image: "/asset/campbell-tea/tea5.webp"
  }, {
    name: "Green Tea",
    price: "₹199",
    tag: "Healthy",
    image: "/asset/campbell-tea/tea7.jpg"
  }, {
    name: "Kashmiri Kahwa",
    price: "₹349",
    tag: "Premium",
    image: "/asset/campbell-tea/tea6.avif"
  }, {
    name: "Lemon Tea",
    price: "₹199",
    tag: "Refreshing",
    image: "/asset/campbell-tea/tea11.jpg"
  }, {
    name: "Tulsi Tea",
    price: "₹229",
    tag: "Ayurvedic",
    image: "/asset/campbell-tea/tea12.avif"
  }, {
    name: "Chamomile Tea",
    price: "₹399",
    tag: "Relax",
    image: "/asset/campbell-tea/tea13.jpg"
  }, {
    name: "Oolong Tea",
    price: "₹449",
    tag: "Exotic",
    image: "/asset/campbell-tea/tea14.avif"
  }, {
    name: "Mint Tea",
    price: "₹199",
    tag: "Cool",
    image: "/asset/campbell-tea/tea5.webp"
  }, {
    name: "Black Tea",
    price: "₹149",
    tag: "Classic",
    image: "/asset/campbell-tea/tea10.jpeg"
  }, {
    name: "Rose Tea",
    price: "₹299",
    tag: "Floral",
    image: "/asset/campbell-tea/tea15.jpg"
  }
];

const TeaCollection = () => {
  return (<div className="px-3 sm:px-5 md:px-10 py-6 md:py-10 w-full overflow-x-hidden">
    <p className="font-thin mb-1 text-amber-900 text-xs sm:text-sm text-center md:text-left">
      THE COLLECTION
    </p>

    <p className="text-xl sm:text-2xl md:text-5xl mb-4 md:mb-8 text-center md:text-left">
      Our Teas
    </p>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 md:gap-6">
      {
        teas.map((tea, index) => (<div key={tea.name}
          // ✅ better than index
          className={`bg-slate-100 p-2 rounded-lg hover:shadow-sm transition w-full 
              ${index >= 4
            ? "hidden md:block"
            : ""}`}>
          <p className="text-amber-900 text-[10px] sm:text-xs font-thin mb-1">
            {tea.tag}
          </p>

          <img src={tea.image} alt={tea.name} className="w-full aspect-square object-cover rounded-md mb-2"/>

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
