import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <p>FILTERS</p>
          <div>
            <p>Prices</p>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">Below 10,001</span>
            </div>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">10,001 to 11,000</span>
            </div>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">10,001 to 11,000</span>
            </div>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">10,001 to 11,000</span>
            </div>
            <div>
              <input className="mr-2 leading-tight" type="checkbox"></input>
              <span className="text-sm">10,001 to 11,000</span>
            </div>
          </div>
        </div>
        <div>
          <button className="border rounded-lg px-2 py-1">RINGS</button>
          <button className="border rounded-lg px-2 py-1">EARRINGS</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
