import { TypeAnimation } from "react-type-animation";

const VideoText = () => {
  return (
    <div className="relative w-full h-auto">
      <video
        className="relative w-full z-10 h-[90vh] object-cover brightness-50"
        autoPlay
        muted
        loop
        src={"src\\assets\\videos\\video1.mp4"}
      />
      <div className="absolute top-0 left-0 z-20 w-full h-full bg-gray-900 opacity-60"></div>
      <div className="absolute w-full h-full flex items-center justify-center md:space-x-[100px]  p-8 top-0 left-0 z-30">
        <div className="flex flex-col items-start space-y-32 ">
          <div className="space-y-4 text-4xl font-bold text-white">
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
          className="hover:scale-110 w-[100px] md:w-auto transition-all ease-in duration-300"
          src="src\assets\images\AI LOGO.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default VideoText;
