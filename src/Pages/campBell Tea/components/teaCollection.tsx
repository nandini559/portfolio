import React from "react";

const teas = Array(10).fill({name: "Special Masala Chai", price: "₹299", tag: "Bestseller", image: "https://maharishiayurvedaindia.com/cdn/shop/articles/herbal_teas_and_benefits_5349b7d2-95dd-41ea-9336-b25212d1019d.jpg?v=1771406243"});

const TeaCollection = () => {
  return (<div className="bg-white px-5 md:px-10 py-10">
    {/* Heading */}
    <p className="font-thin mb-2 text-amber-900 text-xs md:text-sm">
      THE COLLECTION
    </p>
    <p className="text-3xl md:text-5xl mb-8">Our Teas</p>

    {/* Responsive Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {
        teas.map((tea, index) => (<div key={index} className="bg-slate-100 p-3 rounded-xl hover:shadow-md transition">
          <p className="text-amber-900 text-xs font-thin mb-2">{tea.tag}</p>

          <img src={tea.image} alt="tea" className="w-full h-40 object-cover rounded-md mb-3"/>

          <p className="text-sm md:text-base font-medium">{tea.name}</p>
          <p className="text-sm text-gray-600">{tea.price}</p>
        </div>))
      }
    </div>
  </div>);
};

export default TeaCollection;
