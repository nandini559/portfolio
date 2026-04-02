import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Blog = () => {
  return (<div>
    <div>
      <Navbar/>
      <div className="text-center p-20 border-b">
        <p className="font-thin mb-3 text-amber-900 text-sm ">THE BLOG</p>
        <p className="text-5xl mb-4">Stories & Craft</p>
        <p className="font-thin">
          Reflections on tea, its origins, and the slow rituals that make it worth
        </p>
        <p className="font-thin">savouring.</p>
      </div>

      <div className="grid grid-cols-2 mt-12 gap-8 p-8">
        <div>
          <img src="/asset/campbell-tea/tea2.webp" alt="tea1" className="rounded-lg size-max"></img>
          <p className="text-slate-400 text-sm mt-2">
            14 December 2025 -- Campbell Tea
          </p>
          <p className="text-2xl text-amber-900 mt-1 mb-1">
            The Art of Brewing the Perfect Chai
          </p>
          <p>
            Chai is more than boiled tea with milk. It is a ritual, a rhythm, a quiet act of care. Here is how we think about brewing it right.
          </p>
        </div>

        <div>
          <img src="/asset/campbell-tea/tea2.webp" alt="tea1" className="rounded-lg "></img>
          <p className="text-slate-400 text-sm mt-2">
            14 December 2025 -- Campbell Tea
          </p>
          <p className="text-2xl text-amber-900 mt-1 mb-1">
            The Art of Brewing the Perfect Chai
          </p>
          <p>
            Chai is more than boiled tea with milk. It is a ritual, a rhythm, a quiet act of care. Here is how we think about brewing it right.
          </p>
        </div>

        <div>
          <img src="/asset/campbell-tea/tea2.webp" alt="tea1" className="rounded-lg "></img>
          <p className="text-slate-400 text-sm mt-2">
            14 December 2025 -- Campbell Tea
          </p>
          <p className="text-2xl text-amber-900 mt-1 mb-1">
            The Art of Brewing the Perfect Chai
          </p>
          <p>
            Chai is more than boiled tea with milk. It is a ritual, a rhythm, a quiet act of care. Here is how we think about brewing it right.
          </p>
        </div>

        <div>
          <img src="/asset/campbell-tea/tea2.webp" alt="tea1" className="rounded-lg "></img>
          <p className="text-slate-400 text-sm mt-2">
            14 December 2025 -- Campbell Tea
          </p>
          <p className="text-2xl text-amber-900 mt-1 mb-1">
            The Art of Brewing the Perfect Chai
          </p>
          <p>
            Chai is more than boiled tea with milk. It is a ritual, a rhythm, a quiet act of care. Here is how we think about brewing it right.
          </p>
        </div>
      </div>

      <Footer/>
    </div>
  </div>);
};

export default Blog;
