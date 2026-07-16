import React from "react";
import {toast} from "react-toastify";

const Contact = () => {
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
    }).then((res) => res.text()).then((data) => {
      console.log(data);
      toast.success("Message sent successfully!");
    }).catch((error) => {
      console.error(error);
      toast.error("Something went wrong!");
    });
  };

  return (<section id="contact">
    <h1 className="text-6xl font-bold text-center mb-5 mt-32">
      Get In Touch
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 px-3 sm:px-4 md:px-10 py-6 md:py-14">
      {/* Left */}
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-md mx-auto md:max-w-none">
        <p className="text-2xl sm:text-3xl md:text-5xl leading-tight">
          I'd Love to
        </p>
        <p className="text-2xl sm:text-3xl md:text-5xl mb-3 leading-tight">
          Hear From You
        </p>

        <div className="text-xs sm:text-sm md:text-base w-full mt-4">
          <p className="mb-1">GITHUB</p>
          <p className="mb-3 text-amber-700 break-words">
            HTTPS://GITHUB.COM/NANDINI559
          </p>

          <p className="mb-1">LINKEDIN</p>
          <p className="mb-3 text-amber-700 break-words">
            HTTPS://WWW.LINKEDIN.COM/IN/NANDINITARAFDAR-708189354? UTM_SOURCE=SHARE_VIA&UTM_CONTENT=PROFILE&UT M_MEDIUM=MEMBER_ANDROID
          </p>

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
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4 sm:p-5 md:p-8 border rounded-xl border-black">
          <p className="text-lg sm:text-xl md:text-3xl text-center mb-1">
            Contact
          </p>

          <input name="Name" placeholder="Name" className="w-full p-2 text-sm border rounded-md outline-none focus:ring-2 border-black"/>

          <input name="email" placeholder="Email" className="w-full p-2 text-sm border rounded-md outline-none focus:ring-2 border-black"/>

          <textarea name="Message" placeholder="Message" rows={3} className="w-full p-2 text-sm border rounded-md outline-none focus:ring-2 border-black  resize-none"/>

          <button type="submit" className="py-2 text-sm rounded-md font-medium border hover:font-bold border-black">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>);
};

export default Contact;
