import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="15620235-hd_1080_1920_30fps.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Hello India</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
