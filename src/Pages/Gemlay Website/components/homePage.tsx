import React from "react";
import necklace from "./assets/necklace.png";

const HomePage = () => {
  return (
    <div>
      <div className="flex p-6">
        <div className="border-r border-dashed p-4">
          <p className="border-b border-dashed p-2">FILTERS</p>
          <div className="grid gap-1 ">
            <p className="font-semibold text-lg ml-3 mt-3">PRICE</p>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">Below 10,001</span>
            </div>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">10,001 - 15,000</span>
            </div>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">15,001 - 20,000</span>
            </div>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">20,001 - 30,000</span>
            </div>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">30,001 - 40,000</span>
            </div>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">40,001 - 50,000</span>
            </div>
          </div>

          <div className="grid gap-1">
            <p className="font-semibold text-lg ml-3 mt-3">PRODUCT TYPE</p>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">Rings</span>
            </div>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">Earrings</span>
            </div>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">Pendents</span>
            </div>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">Breceletes</span>
            </div>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">Necklaces</span>
            </div>
          </div>

          <div className="grid gap-1">
            <p className="font-semibold text-lg ml-3 mt-3">WEIGHT RANGE</p>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">0 grams - 2 grams</span>
            </div>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">2 grams - 5 grams</span>
            </div>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">5 grams - 10 grams</span>
            </div>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">10 grams - 20 grams</span>
            </div>
          </div>

          <div className="grid gap-1">
            <p className="font-semibold text-lg ml-3 mt-3">MATERIAL</p>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">Diamond</span>
            </div>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">Gold</span>
            </div>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">Solitaire</span>
            </div>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">Gemstone</span>
            </div>
          </div>

          <div className="grid gap-1">
            <p className="font-semibold text-lg ml-3 mt-3">METAL COLOUR</p>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">Yellow Gold</span>
            </div>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">White Gold</span>
            </div>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">Rose Gold</span>
            </div>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">Tri colour</span>
            </div>
          </div>
        </div>

        <div>
          <button className="border rounded-lg px-2 py-1 mr-2">RINGS</button>
          <button className="border rounded-lg px-2 py-1">EARRINGS</button>

          <div className=" row-3 columns-4 ">
            <div className="border rounded-lg text-center">
              <img src="/asset/necklace.png" className="bg-slate-50"></img>
              <p>22,32,336 /-</p>
              <p className="text-green-600 text-sm font-semibold">
                10% off on making charges
              </p>
              <p className="text-sm text-gray-500">Yemelary Wings Diamond</p>
              <div className="flex justify-between">
                <button className="m-2">View Similar</button>
                <button className="bg-emerald-600 text-white p-3 rounded m-2">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="border rounded-lg text-center">
              <img src="/asset/necklace.png" className="bg-slate-50"></img>
              <p>22,32,336 /-</p>
              <p className="text-green-600 text-sm font-semibold">
                10% off on making charges
              </p>
              <p className="text-sm text-gray-500">Yemelary Wings Diamond</p>
              <div className="flex justify-between">
                <button className="m-2">View Similar</button>
                <button className="bg-emerald-600 text-white p-3 rounded m-2">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="border rounded-lg text-center">
              <img src="/asset/necklace.png" className="bg-slate-50"></img>
              <p>22,32,336 /-</p>
              <p className="text-green-600 text-sm font-semibold">
                10% off on making charges
              </p>
              <p className="text-sm text-gray-500">Yemelary Wings Diamond</p>
              <div className="flex justify-between">
                <button className="m-2">View Similar</button>
                <button className="bg-emerald-600 text-white p-3 rounded m-2">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="border rounded-lg text-center">
              <img src="/asset/necklace.png" className="bg-slate-50"></img>
              <p>22,32,336 /-</p>
              <p className="text-green-600 text-sm font-semibold">
                10% off on making charges
              </p>
              <p className="text-sm text-gray-500">Yemelary Wings Diamond</p>
              <div className="flex justify-between">
                <button className="m-2">View Similar</button>
                <button className="bg-emerald-600 text-white p-3 rounded m-2">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="border rounded-lg text-center">
              <img src="/asset/necklace.png" className="bg-slate-50"></img>
              <p>22,32,336 /-</p>
              <p className="text-green-600 text-sm font-semibold">
                10% off on making charges
              </p>
              <p className="text-sm text-gray-500">Yemelary Wings Diamond</p>
              <div className="flex justify-between">
                <button className="m-2">View Similar</button>
                <button className="bg-emerald-600 text-white p-3 rounded m-2">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="border rounded-lg text-center">
              <img src="/asset/necklace.png" className="bg-slate-50"></img>
              <p>22,32,336 /-</p>
              <p className="text-green-600 text-sm font-semibold">
                10% off on making charges
              </p>
              <p className="text-sm text-gray-500">Yemelary Wings Diamond</p>
              <div className="flex justify-between">
                <button className="m-2">View Similar</button>
                <button className="bg-emerald-600 text-white p-3 rounded m-2">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="border rounded-lg text-center">
              <img src="/asset/necklace.png" className="bg-slate-50"></img>
              <p>22,32,336 /-</p>
              <p className="text-green-600 text-sm font-semibold">
                10% off on making charges
              </p>
              <p className="text-sm text-gray-500">Yemelary Wings Diamond</p>
              <div className="flex justify-between">
                <button className="m-2">View Similar</button>
                <button className="bg-emerald-600 text-white p-3 rounded m-2">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="border rounded-lg text-center">
              <img src="/asset/necklace.png" className="bg-slate-50"></img>
              <p>22,32,336 /-</p>
              <p className="text-green-600 text-sm font-semibold">
                10% off on making charges
              </p>
              <p className="text-sm text-gray-500">Yemelary Wings Diamond</p>
              <div className="flex justify-between">
                <button className="m-2">View Similar</button>
                <button className="bg-emerald-600 text-white p-3 rounded m-2">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="border rounded-lg text-center">
              <img src="/asset/necklace.png" className="bg-slate-50"></img>
              <p>22,32,336 /-</p>
              <p className="text-green-600 text-sm font-semibold">
                10% off on making charges
              </p>
              <p className="text-sm text-gray-500">Yemelary Wings Diamond</p>
              <div className="flex justify-between">
                <button className="m-2">View Similar</button>
                <button className="bg-emerald-600 text-white p-3 rounded m-2">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="border rounded-lg text-center">
              <img src="/asset/necklace.png" className="bg-slate-50"></img>
              <p>22,32,336 /-</p>
              <p className="text-green-600 text-sm font-semibold">
                10% off on making charges
              </p>
              <p className="text-sm text-gray-500">Yemelary Wings Diamond</p>
              <div className="flex justify-between">
                <button className="m-2">View Similar</button>
                <button className="bg-emerald-600 text-white p-3 rounded m-2">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="border rounded-lg text-center">
              <img src="/asset/necklace.png" className="bg-slate-50"></img>
              <p>22,32,336 /-</p>
              <p className="text-green-600 text-sm font-semibold">
                10% off on making charges
              </p>
              <p className="text-sm text-gray-500">Yemelary Wings Diamond</p>
              <div className="flex justify-between">
                <button className="m-2">View Similar</button>
                <button className="bg-emerald-600 text-white p-3 rounded m-2">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="border rounded-lg text-center">
              <img src="/asset/necklace.png" className="bg-slate-50"></img>
              <p>22,32,336 /-</p>
              <p className="text-green-600 text-sm font-semibold">
                10% off on making charges
              </p>
              <p className="text-sm text-gray-500">Yemelary Wings Diamond</p>
              <div className="flex justify-between">
                <button className="m-2">View Similar</button>
                <button className="bg-emerald-600 text-white p-3 rounded m-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
