import React from "react";
import { TypeAnimation } from "react-type-animation";

const VideoText = () => {
  return (
    <div class="relative w-full h-auto">
      <video
        class="relative w-full z-10 h-[90vh] object-cover brightness-50"
        autoplay
        autoPlay
        muted
        loop
        src={"src\\assets\\videos\\video1.mp4"}
      />
      <div class="absolute w-full h-full top-0 left-0 bg-gray-900 opacity-60 z-20"></div>
      <div class="absolute w-full h-full flex items-center justify-center md:space-x-[400px]  p-8 top-0 left-0 z-30">
        <div className="flex flex-col space-y-32 items-start ">
          <div className="font-bold text-white text-4xl space-y-4">
            <h1>Delivering Comprehensive</h1>
            <h1 className="pb-9">Solutions for the</h1>
            <TypeAnimation
              sequence={[
                "Digital Age",
                1000,
                "Age of Technology",
                1000,
                "Digital Era",
                1000,
              ]}
              wrapper="span"
              speed={20}
              className="text-[#389259] font-bold text-5xl"
              repeat={Infinity}
              preRenderFirstString={false}
              cursor={false}
            />
          </div>

          <button className="bg-[#389259] hover:scale-105 transition-all ease-linear duration-200 text-white text-sm  cursor-pointer px-6 py-3 hover:bg-[#2f844e] rounded-lg">
            Get Started
          </button>
        </div>
        <img
          className="hover:scale-110 w-[200px] md:w-auto transition-all ease-in duration-300"
          src="src\assets\images\AI LOGO.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default VideoText;
