import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhatsNew = () => {
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
      <div className="p-8">
        <p className="text-5xl font-semibold mb-8">What's New</p>
        <div className=" relative group w-full overflow-visible">
          <Slider {...settings}>
            <div className="">
              <img
                className="h-48 w-80 object-cover"
                src="/asset/tcs/navigating-ai-innovation-ip-strategies-challenges-opportunities-web.jpg"
              ></img>
              <p className="text-4xl mt-4">AI meets IP: Risks</p>
              <p className="text-4xl mb-4">and rewards</p>
              <p>
                tcs & CII report explores AI impacts on IP, urging robust
                strategies, ethical adoption and MSME-focused digital
                transformation
              </p>
              <p className="text-xl font-semibold mt-8">Read More</p>
            </div>

            <div>
              <img
                className="h-48 w-80 object-cover"
                src="/asset/tcs/AdobeStock-847767410-Ecuador-MasteringJourney.jpg"
              ></img>
              <p className="text-4xl mt-4">TCS BaNCS wins</p>
              <p className="text-4xl mb-4">XCelent Award</p>
              <p>
                tcs & CII report explores AI impacts on IP, urging robust
                strategies, ethical adoption and MSME-focused digital
                transformation
              </p>
              <p className="text-xl font-semibold mt-8">Read More</p>
            </div>

            <div>
              <img
                className="h-48 w-80 object-cover"
                src="/asset/tcs/tcs-ioins-airbus-skywise-certified-partner-programme-web.jpg"
              ></img>
              <p className="text-4xl mt-4">TCS Joins Airbus</p>
              <p className="text-4xl mb-4">Skywise Programe</p>
              <p>
                tcs & CII report explores AI impacts on IP, urging robust
                strategies, ethical adoption and MSME-focused digital
                transformation
              </p>
              <p className="text-xl font-semibold mt-8">Read More</p>
            </div>

            <div>
              <img
                className="h-48 w-80 object-cover"
                src="/asset/tcs/drucker-web.png"
              ></img>
              <p className="text-4xl mt-4">TCS-Drucker Forum</p>
              <p className="text-4xl mb-4">Report</p>
              <p>
                tcs & CII report explores AI impacts on IP, urging robust
                strategies, ethical adoption and MSME-focused digital
                transformation
              </p>
              <p className="text-xl font-semibold mt-8">Read More</p>
            </div>

            <div className="">
              <img
                className="h-48 w-80 object-cover"
                src="/asset/tcs/navigating-ai-innovation-ip-strategies-challenges-opportunities-web.jpg"
              ></img>
              <p className="text-4xl mt-4">AI meets IP: Risks</p>
              <p className="text-4xl mb-4">and rewards</p>
              <p>
                tcs & CII report explores AI impacts on IP, urging robust
                strategies, ethical adoption and MSME-focused digital
                transformation
              </p>
              <p className="text-xl font-semibold mt-8">Read More</p>
            </div>

            <div className="">
              <img
                className="h-48 w-80 object-cover"
                src="/asset/tcs/navigating-ai-innovation-ip-strategies-challenges-opportunities-web.jpg"
              ></img>
              <p className="text-4xl mt-4">AI meets IP: Risks</p>
              <p className="text-4xl mb-4">and rewards</p>
              <p>
                tcs & CII report explores AI impacts on IP, urging robust
                strategies, ethical adoption and MSME-focused digital
                transformation
              </p>
              <p className="text-xl font-semibold mt-8">Read More</p>
            </div>

            <div className="">
              <img
                className="h-48 w-80 object-cover"
                src="/asset/tcs/navigating-ai-innovation-ip-strategies-challenges-opportunities-web.jpg"
              ></img>
              <p className="text-4xl mt-4">AI meets IP: Risks</p>
              <p className="text-4xl mb-4">and rewards</p>
              <p>
                tcs & CII report explores AI impacts on IP, urging robust
                strategies, ethical adoption and MSME-focused digital
                transformation
              </p>
              <p className="text-xl font-semibold mt-8">Read More</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
