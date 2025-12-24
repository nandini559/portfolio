import React from "react";

const CuttingEdge = () => {
  return (
    <div>
      <div className="bg-black text-white mt-14 px-20 py-12">
        <p className="text-4xl mb-10">
          Cutting edge solutions to power up your business
        </p>

        <div className="flex gap-10">
          <div>
            <img src="/asset/tcs/industry.jpg"></img>
            <div className="bg-zinc-800 p-5">
              <p className="text-3xl ">Industries</p>
              <p className=" mt-4">Select your industry.</p>
              <p className=" mb-6">Discover our impact.</p>
            </div>
          </div>

          <div>
            <img src="/asset/tcs/services.jpg"></img>
            <div className="bg-zinc-800 p-5">
              <p className="text-3xl ">Services</p>
              <p className="mt-4">Experience our serves.</p>
              <p className="mb-6">Transform our business.</p>
            </div>
          </div>

          <div>
            <img src="/asset/tcs/p&p.jpg"></img>
            <div className="bg-zinc-800 p-5">
              <p className="text-3xl ">Products and Platforms</p>
              <p className="mt-1">Explore our products.</p>
              <p className="mb-1">Accelerate your performance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuttingEdge;
