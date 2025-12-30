import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerStories = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="mt-20">
        <p className="text-3xl ml-8 ">Customer Stories</p>
        <div className="relative group w-full overflow-visible mt-8 mb-8">
          <Slider {...settings}>
            <div>
              <img
                className="h-96 w-80 rounded-xl"
                src="/asset/tcs/pexels-fauxels-3184423.jpg"
              ></img>
              <p className="text-3xl font-semibold mb-2">SKY TEAM</p>
              <p className="mb-2">Transforms travel experience</p>
              <p className="mb-2 text-xl"> Read more</p>
            </div>

            <div>
              <img
                className="h-96 w-80 rounded-xl"
                src="/asset/tcs/pexels-rdne-9034277.jpg"
              ></img>
              <p className="text-3xl font-semibold mb-2">SKY TEAM</p>
              <p className="mb-2">Transforms travel experience</p>
              <p className="mb-2 text-xl"> Read more</p>
            </div>

            <div>
              <img
                className="h-96 w-80 rounded-xl"
                src="/asset/tcs/pexels-fauxels-3184433.jpg"
              ></img>
              <p className="text-3xl font-semibold mb-2">SKY TEAM</p>
              <p className="mb-2">Transforms travel experience</p>
              <p className="mb-2 text-xl"> Read more</p>
            </div>

            <div>
              <img
                className="h-96 w-80 rounded-xl"
                src="/asset/tcs/pexels-rdne-9034277.jpg"
              ></img>
              <p className="text-3xl font-semibold mb-2">SKY TEAM</p>
              <p className="mb-2">Transforms travel experience</p>
              <p className="mb-2 text-xl"> Read more</p>
            </div>

            <div>
              <img
                className="h-96 w-80 rounded-xl "
                src="/asset/tcs/hannover-messe-banner.jpeg"
              ></img>
              <p className="text-3xl font-semibold mb-2">SKY TEAM</p>
              <p className="mb-2">Transforms travel experience</p>
              <p className="mb-2 text-xl"> Read more</p>
            </div>

            {/* <div className="relative">
              <img
                className="h-96 w-80 rounded-xl"
                src="/asset/tcs/pexels-fauxels-3184423.jpg"
              ></img>
              <div className="absolute  inset-16 text-white">
                <p className="text-3xl font-semibold mb-2">SKY TEAM</p>
                <p className="mb-2">Transforms travel experience</p>
                <p className="mb-2 text-xl"> Read more</p>
              </div>
            </div> */}

            <div
              // className="relative"
              style={{
                backgroundImage: `/asset/tcs/pexels-fauxels-3184423.jpg`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
              }}
            >
              {/* <div className="absolute ">
            <h1>Hello</h1>
          </div> */}
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CustomerStories;
