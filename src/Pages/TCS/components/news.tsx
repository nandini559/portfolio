import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
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
      <p className="text-4xl ml-8 mt-10">News and Insights</p>
      <div className="relative group w-full overflow-visible mt-8 mb-8">
        <Slider {...settings}>
          <div>
            <img
              className="h-96 w-60 rounded-xl"
              src="/asset/tcs/navigating-ai-innovation-ip-strategies-challenges-opportunities-web.jpg"
            ></img>
            <p className="text-2xl font-semibold mb-2">NEWS ROOM</p>
            <p className="mb-2 text-xl">
              Stay up-to-date on all announcements ny TCS
            </p>
          </div>

          <div>
            <img
              className="h-96 w-60 rounded-xl"
              src="/asset/tcs/AdobeStock-847767410-Ecuador-MasteringJourney.jpg"
            ></img>
            <p className="text-2xl font-semibold mb-2">NEWS ROOM</p>
            <p className="mb-2 text-xl">
              Stay up-to-date on all announcements ny TCS
            </p>
          </div>

          <div>
            <img
              className="h-96 w-60 rounded-xl"
              src="/asset/tcs/pexels-fauxels-3184423.jpg"
            ></img>
            <p className="text-2xl font-semibold mb-2">NEWS ROOM</p>
            <p className="mb-2 text-xl">
              Stay up-to-date on all announcements ny TCS
            </p>
          </div>

          <div>
            <img
              className="h-96 w-60 rounded-xl"
              src="/asset/tcs/navigating-ai-innovation-ip-strategies-challenges-opportunities-web.jpg"
            ></img>
            <p className="text-2xl font-semibold mb-2">NEWS ROOM</p>
            <p className="mb-2 text-xl">
              Stay up-to-date on all announcements ny TCS
            </p>
          </div>

          {/* <div>
          <img
            className="h-96 w-60 rounded-xl"
            src="/asset/tcs/pexels-fauxels-3184423.jpg"
          ></img>
          <p className="text-2xl font-semibold mb-2">NEWS ROOM</p>
          <p className="mb-2 text-xl">
            Stay up-to-date on all announcements ny TCS
          </p>
        </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default News;
