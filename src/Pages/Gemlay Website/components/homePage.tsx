import React from "react";

const HomePage = () => {
  return (
    <div className="w-full p-4">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT SIDEBAR (Filters) */}
        <div className="w-full lg:w-64 border-r border-dashed p-4">
          <p className="border-b border-dashed p-2 font-semibold text-lg">
            FILTERS
          </p>

          {/* Each filter group */}
          <div className="mt-4">
            <p className="font-semibold text-lg mb-2">PRICE</p>
            <div className="space-y-1">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" /> Below 10,001
              </label>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" /> 10,001 - 15,000
              </label>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" /> 15,001 - 20,000
              </label>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" /> 20,001 - 30,000
              </label>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" /> 30,001 - 40,000
              </label>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" /> 40,001 - 50,000
              </label>
            </div>
          </div>

          {/* PRODUCT TYPE */}
          <div className="mt-6">
            <p className="font-semibold text-lg mb-2">PRODUCT TYPE</p>
            <div className="space-y-1">
              {["Rings", "Earrings", "Pendants", "Bracelets", "Necklaces"].map(
                (item) => (
                  <label key={item} className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" /> {item}
                  </label>
                )
              )}
            </div>
          </div>

          {/* WEIGHT RANGE */}
          <div className="mt-6">
            <p className="font-semibold text-lg mb-2">WEIGHT RANGE</p>
            <div className="space-y-1">
              {[
                "0 grams - 2 grams",
                "2 grams - 5 grams",
                "5 grams - 10 grams",
                "10 grams - 20 grams",
              ].map((w) => (
                <label key={w} className="flex items-center text-sm">
                  <input type="checkbox" className="mr-2" /> {w}
                </label>
              ))}
            </div>
          </div>

          {/* MATERIAL */}
          <div className="mt-6">
            <p className="font-semibold text-lg mb-2">MATERIAL</p>
            <div className="space-y-1">
              {["Diamond", "Gold", "Solitaire", "Gemstone"].map((m) => (
                <label key={m} className="flex items-center text-sm">
                  <input type="checkbox" className="mr-2" /> {m}
                </label>
              ))}
            </div>
          </div>

          {/* METAL COLOUR */}
          <div className="mt-6">
            <p className="font-semibold text-lg mb-2">METAL COLOUR</p>
            <div className="space-y-1">
              {["Yellow Gold", "White Gold", "Rose Gold", "Tri Colour"].map(
                (c) => (
                  <label key={c} className="flex items-center text-sm">
                    <input type="checkbox" className="mr-2" /> {c}
                  </label>
                )
              )}
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT (Products) */}
        <div className="flex-1">
          {/* Category Buttons */}
          <div className="flex flex-wrap gap-2 mb-4">
            <button className="border rounded-lg px-3 py-1">RINGS</button>
            <button className="border rounded-lg px-3 py-1">EARRINGS</button>
          </div>

          {/* PRODUCT GRID RESPONSIVE */}
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-4 
              gap-6
            "
          >
            {/* Sample product -> repeat */}
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="border rounded-lg text-center shadow-sm p-2"
              >
                <img
                  src="/asset/necklace.png"
                  className="bg-slate-50 mx-auto"
                />
                <p className="mt-2 font-semibold">22,32,336 /-</p>
                <p className="text-green-600 text-sm font-semibold">
                  10% off on making charges
                </p>
                <p className="text-sm text-gray-500">Yemelary Wings Diamond</p>

                <div className="flex justify-between px-2 mt-3">
                  <button className="text-sm">View Similar</button>
                  <button className="bg-emerald-600 text-white px-3 py-2 rounded text-sm">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
