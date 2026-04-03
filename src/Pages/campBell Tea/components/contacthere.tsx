import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const ContactHere = () => {
  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = "https://script.google.com/macros/s/AKfycbwVFtSZd30LE4dQdwNyh6eTM1S6QjHF2k6vBzjoCOx3N1YZEeL6WyB5CdSDGc9oo0Oh/exec";

    const form = e.target as HTMLFormElement;

    const name = (form.elements.namedItem("Name")as HTMLInputElement).value;
    const email = (form.elements.namedItem("email")as HTMLInputElement).value;
    const message = (form.elements.namedItem("Message")as HTMLInputElement).value;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      },
      body: `Name=${name}&Email=${email}&Message=${message}`
    }).then((res) => res.text()).then((data) => alert(data)).catch((error) => console.log(error));
  };

  return (<div className="w-full max-w-full overflow-x-hidden">
    <Navbar/> {/* Main Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 px-3 sm:px-4 md:px-10 py-6 md:py-14">
      {/* Left */}
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-md mx-auto md:max-w-none">
        <p className="text-amber-700 text-xs sm:text-sm font-thin mb-2">
          Get in Touch
        </p>

        <p className="text-2xl sm:text-3xl md:text-5xl leading-tight">
          We'd Love to
        </p>
        <p className="text-2xl sm:text-3xl md:text-5xl mb-3 leading-tight">
          Hear From You
        </p>

        <div className="font-thin text-xs sm:text-sm md:text-base mb-5">
          <p>Whether you have a question about our teas, want to</p>
          <p>discuss wholesale opportunities, or simply want to share</p>
          <p>your experience — we're here for it.</p>
        </div>

        <div className="text-xs sm:text-sm md:text-base w-full">
          <p className="mb-1">EMAIL</p>
          <p className="mb-3 text-amber-700 break-words">
            nandinitarafdar481@gmail.com
          </p>

          <p className="mb-1">PHONE</p>
          <p className="mb-3 text-amber-700">+91 90645 57439</p>

          <p className="mb-1">LOCATION</p>
          <p className="text-amber-700">West Bengal, India</p>
        </div>
      </div>

      {/* Right (Form) */}
      <div className="w-full max-w-md mx-auto md:max-w-none">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4 sm:p-5 md:p-8 border rounded-xl">
          <p className="text-lg sm:text-xl md:text-3xl text-center mb-1">
            Contact
          </p>

          <input name="Name" placeholder="Name" className="w-full p-2 text-sm border rounded-md outline-none focus:ring-2 focus:ring-amber-400"/>

          <input name="email" placeholder="Email" className="w-full p-2 text-sm border rounded-md outline-none focus:ring-2 focus:ring-amber-400"/>

          <textarea name="Message" placeholder="Message" rows={3} className="w-full p-2 text-sm border rounded-md outline-none focus:ring-2 focus:ring-amber-400 resize-none"/>

          <button type="submit" className="py-2 text-sm rounded-md font-medium border hover:bg-amber-700 hover:text-white transition">
            Send Message
          </button>
        </form>
      </div>
    </div>

    <Footer/>
  </div>);
};

export default ContactHere;
