import React from "react";

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
      alert(data);
    }).catch((error) => console.log(error));
  };

  return (<div className="flex items-center justify-center min-h-screen ">
    <form onSubmit={handleSubmit} className="border-2 shadow-xl rounded-2xl  w-[350px] flex flex-col gap-4 p-10">
      <p className="text-7xl font-semibold text-center ">Contact</p>

      <input name="Name" placeholder="Name" className="p-2 border rounded-lg outline-none focus:ring-2 focus:ring-purple-400"/>

      <input name="email" placeholder="Email" className="p-2 border rounded-lg outline-none focus:ring-2 focus:ring-purple-400"/>

      <input name="Message" placeholder="Message" className="p-2 border rounded-lg outline-none focus:ring-2 focus:ring-purple-400"/>

      <button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:scale-105 transition">
        Send Message
      </button>
    </form>
  </div>);
};

export default Contact;
