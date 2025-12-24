import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between bg-black text-white">
        <img className="h-20 w-36" src="/asset/tcs/tcs-light-logo.png"></img>
        <p className="mt-6">what we do</p>
        <p className="mt-6">how we are</p>
        <p className="mt-6">Insights</p>
        <p className="mt-6">Careers</p>
        <p className="mt-6">Newsroom</p>
        <p className="mt-6">Investors</p>
        <p className="mt-6">Global</p>
        <p className="mt-6">Contact Us</p>
        <img
          className="size-20"
          src="/asset/tcs/tata-logo-tata-icon-free-free-vector.jpg"
        ></img>
      </div>
    </div>
  );
};

export default Navbar;
