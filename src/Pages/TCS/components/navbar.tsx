import React, { useState } from "react";

const Navbar = () => {
  const images = [
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1016/800/400",
    "https://picsum.photos/id/1018/800/400",
    "https://picsum.photos/id/1020/800/400",
    "https://picsum.photos/id/1024/800/400",
  ];

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  // return (
  //   <div>
  //     <div className="flex justify-between bg-black text-white">
  //       <img className="h-20 w-36" src="/asset/tcs/tcs-light-logo.png"></img>
  //       <p className="mt-6">what we do</p>
  //       <p className="mt-6">how we are</p>
  //       <p className="mt-6">Insights</p>
  //       <p className="mt-6">Careers</p>
  //       <p className="mt-6">Newsroom</p>
  //       <p className="mt-6">Investors</p>
  //       <p className="mt-6">Global</p>
  //       <p className="mt-6">Contact Us</p>
  //       <img
  //         className="size-20"
  //         src="/asset/tcs/tata-logo-tata-icon-free-free-vector.jpg"
  //       ></img>
  //     </div>
  //   </div>
  // );

  return (
    <div className=" w-full">
      {/* Buttons */}
      <div className=" top-4 right-4 flex gap-2 z-10 mb-4">
        <button onClick={prev} className="bg-white/60 p-2 rounded-full">
          ◀
        </button>

        <button onClick={next} className="bg-white/60 p-2 rounded-full">
          ▶
        </button>
      </div>

      {/* Image */}
      <div className="mt-4">
        <img
          src={images[index]}
          alt="carousel"
          className="w-full h-56 md:h-96 object-cover transition-all duration-700"
        />
      </div>
    </div>
  );
};

export default Navbar;
