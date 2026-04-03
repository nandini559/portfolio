import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const blogs = Array(4).fill({image: "/asset/campbell-tea/tea2.webp", date: "14 December 2025", title: "The Art of Brewing the Perfect Chai", desc: "Chai is more than boiled tea with milk. It is a ritual, a rhythm, a quiet act of care. Here is how we think about brewing it right."});

const Blog = () => {
  return (<div className="w-full overflow-x-hidden">
    <Navbar/> {/* Hero */}
    <div className="text-center px-3 sm:px-4 md:px-10 py-8 md:py-14 border-b">
      <p className="font-thin mb-2 text-amber-900 text-xs sm:text-sm">
        THE BLOG
      </p>
      <p className="text-2xl sm:text-3xl md:text-5xl mb-3">Stories & Craft</p>
      <p className="font-thin text-xs sm:text-sm md:text-base">
        Reflections on tea, its origins, and the slow rituals that make it worth
      </p>
      <p className="font-thin text-xs sm:text-sm md:text-base">savouring.</p>
    </div>

    {/* Blog Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-3 sm:px-4 md:px-10 py-6 md:py-10">
      {
        blogs.map((blog, index) => (<div key={index} className="flex flex-col">
          <img src={blog.image} alt="tea" className="w-full aspect-[4/3] object-cover rounded-lg md:rounded-xl"/>

          <p className="text-slate-400 text-[10px] sm:text-xs mt-2">
            {blog.date}
            — Campbell Tea
          </p>

          <p className="text-lg sm:text-xl md:text-2xl text-amber-900 mt-1 mb-1 leading-snug">
            {blog.title}
          </p>

          <p className="text-xs sm:text-sm md:text-base font-thin line-clamp-3">
            {blog.desc}
          </p>
        </div>))
      }
    </div>

    <Footer/>
  </div>);
};

export default Blog;
