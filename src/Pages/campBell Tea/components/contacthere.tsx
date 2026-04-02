import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const ContactHere = () => {
  return (<div>
    <div>
      <Navbar/>
      <div className="flex">
        <div className="w-1/2 ml-10">
          <p className="text-amber-700 text-lg font-thin mb-5 mt-20">
            Get in Touch
          </p>
          <p className="text-5xl mb-2">We'd Love to</p>
          <p className="text-5xl mb-8">Hear From You</p>

          <div className="font-thin text-lg ">
            <p>Whether you have a question about our teas, want to</p>
            <p>discuss wholesale opportunities, or simply want to share</p>
            <p>your experience — we're here for it.</p>
          </div>

          <p className=" mt-10 mb-3">EMAIL</p>
          <p className="mb-6 text-amber-700">hello@campbelltea.com</p>

          <p className="mb-3">PHONE</p>
          <p className="mb-6 text-amber-700">+91 98765 43210</p>

          <p className="mb-3">LOCATION</p>
          <p className="mb-6 text-amber-700">Kolkata, West Bengal, India</p>
        </div>

        <div className="w-1/2">
          <input type="text" name="name" placeholder="Your Name" className="w-full p-2 border-b rounded-lg mt-20 mb-14"/>
          <input type="email" name="email" placeholder="Your Email" className="w-full p-2 border-b rounded-lg mb-14"/>
          <input type="email" name="email" placeholder="Message" className="w-full p-2 border-b rounded-lg mb-14"/>
          <input type="email" name="email" placeholder="Subject" className="w-full p-2 border-b rounded-lg mb-32"/>
        </div>
      </div>
      <Footer/>
    </div>
  </div>);
};

export default ContactHere;
