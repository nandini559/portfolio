import Footer from "./footer";
import Navbar from "./navbar";
import React, {useState} from "react";
const teas = [
  {
    id: 1,
    name: "Special Masala Chai",
    price: "₹299",
    tag: "Bestseller",
    image: "/asset/campbell-tea/tea10.jpeg",
    category: "CHAI"
  }, {
    id: 2,
    name: "Elaichi Chai",
    price: "₹249",
    tag: "Popular",
    image: "/asset/campbell-tea/tea2.webp",
    category: "CHAI"
  }, {
    id: 3,
    name: "Ginger Chai",
    price: "₹279",
    tag: "Hot",
    image: "/asset/campbell-tea/tea5.webp",
    category: "CHAI"
  }, {
    id: 4,
    name: "Green Tea",
    price: "₹199",
    tag: "Healthy",
    image: "/asset/campbell-tea/tea7.jpg",
    category: "GREEN TEA"
  }, {
    id: 5,
    name: "Kashmiri Kahwa",
    price: "₹349",
    tag: "Premium",
    image: "/asset/campbell-tea/tea6.avif",
    category: "GREEN TEA"
  }, {
    id: 6,
    name: "Lemon Tea",
    price: "₹199",
    tag: "Refreshing",
    image: "/asset/campbell-tea/tea11.jpg",
    category: "GREEN TEA"
  }, {
    id: 7,
    name: "Tulsi Tea",
    price: "₹229",
    tag: "Ayurvedic",
    image: "/asset/campbell-tea/tea12.avif",
    category: "GREEN TEA"
  }, {
    id: 8,
    name: "Chamomile Tea",
    price: "₹399",
    tag: "Relax",
    image: "/asset/campbell-tea/tea13.jpg",
    category: "GREEN TEA"
  }, {
    id: 9,
    name: "Oolong Tea",
    price: "₹449",
    tag: "Exotic",
    image: "/asset/campbell-tea/tea14.avif",
    category: "BLACK TEA"
  }, {
    id: 10,
    name: "Mint Tea",
    price: "₹199",
    tag: "Cool",
    image: "/asset/campbell-tea/tea5.webp",
    category: "GREEN TEA"
  }, {
    id: 11,
    name: "Black Tea",
    price: "₹149",
    tag: "Classic",
    image: "/asset/campbell-tea/tea10.jpeg",
    category: "BLACK TEA"
  }, {
    id: 12,
    name: "Rose Tea",
    price: "₹299",
    tag: "Floral",
    image: "/asset/campbell-tea/tea15.jpg",
    category: "GREEN TEA"
  }
];
const Products = () => {
  const [filter, setFilter] = useState("ALL");
  const [showAll, setShowAll] = useState(false);

  const filteredTeas = filter === "ALL"
    ? teas
    : teas.filter((tea) => tea.category === filter);

  const visibleTeas = showAll
    ? filteredTeas
    : filteredTeas.slice(0, 4);

  return (<div className="w-full overflow-x-hidden">
    <Navbar/> {/* Hero Section */}
    <div className="text-center px-3 sm:px-4 md:px-10 py-8 md:py-14 border-b">
      <p className="font-thin mb-2 text-amber-900 text-xs sm:text-sm">
        The Collection
      </p>
      <p className="text-2xl sm:text-3xl md:text-5xl mb-3">Our Teas</p>
      <p className="font-thin text-xs sm:text-sm md:text-base">
        Each blend is crafted from single-origin leaves, sourced at peak
      </p>
      <p className="font-thin text-xs sm:text-sm md:text-base">
        harvest and processed with care to preserve every nuance of flavor.
      </p>
    </div>
    {/* Filters */}
    <div className="flex flex-wrap justify-center md:justify-start gap-2 px-3 sm:px-4 md:px-10 mt-6">
      <button onClick={() => setFilter("ALL")} className={`border px-4 py-1 text-xs sm:text-sm font-thin transition
${
        filter === "CHAI"
          ? "bg-amber-700 text-white"
          : "hover:bg-amber-700 hover:text-white"}`}>
        All
      </button>

      <button onClick={() => setFilter("CHAI")} className={`border px-4 py-1 text-xs sm:text-sm font-thin transition
${
        filter === "CHAI"
          ? "bg-amber-700 text-white"
          : "hover:bg-amber-700 hover:text-white"}`}>
        CHAI
      </button>

      <button onClick={() => setFilter("GREEN TEA")} className={`border px-4 py-1 text-xs sm:text-sm font-thin transition
${
        filter === "CHAI"
          ? "bg-amber-700 text-white"
          : "hover:bg-amber-700 hover:text-white"}`}>
        GREEN TEA
      </button>

      <button onClick={() => setFilter("BLACK TEA")} className={`border px-4 py-1 text-xs sm:text-sm font-thin transition
${
        filter === "CHAI"
          ? "bg-amber-700 text-white"
          : "hover:bg-amber-700 hover:text-white"}`}>
        BLACK TEA
      </button>
    </div>
    {/* Product Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 md:gap-6 px-3 sm:px-4 md:px-10 mt-6 md:mt-10">
      {
        visibleTeas.map((tea, index) => (<div key={tea.id} className={`bg-slate-50 p-2 rounded-lg hover:shadow-sm transition
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
    <button onClick={() => setShowAll(!showAll)} className="mt-4 text-sm text-amber-700 underline md:hidden text-center w-full">
      {
        showAll
          ? "Show Less ←"
          : "View All Products →"
      }
    </button>
    <Footer/>
  </div>);
};

export default Products;
