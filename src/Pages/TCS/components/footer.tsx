import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white flex justify-between p-2">
        <img className="h-30 w-44" src="/asset/tcs/tcs-light-logo.png"></img>

        <div className=" gap-3 mt-6 text-xs ">
          <p>©2025 TATA Consultancy Services Limited</p>

          <p>
            Privacy Notice Cookie Policy Accessibility Declaration Disclaimer
            Security Policy California Notice at Collection
          </p>

          <p>customize cookies</p>
        </div>
        <img
          className="w-44 h-20 mr-4 mt-2"
          src="/asset/tcs/360_F_1627517689_KOKDGjdqQVDlez4fvdfzjwbG8w6qJY2H.jpg"
        ></img>
      </div>
    </div>
  );
};

export default Footer;
