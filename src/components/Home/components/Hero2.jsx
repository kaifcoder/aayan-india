const Hero2 = () => {
  return (
    <div className="relative p-4 md:p-0">
      <div className="flex flex-col justify-center mx-auto mt-20 -md:items-center md:max-w-7xl md:flex-row md:justify-between ">
        {/* <div className="absolute top-0 left-0 -z-20">
          <img src="src\assets\images\bubbles.png" height={200} />
        </div> */}
        <div className="-md:p-8 md:w-1/3">
          <h1 className="pb-4 text-[48px] font-bold text-[#484848]">
            WHAT WE DO
          </h1>
          <p className="text-lg text-[#34468A] ">
            We provide many services which are most important for your business,
            like webpage designs, website development, application development,
            software development, gaming app development, and much more. Thus,
            we also provide 24x7 help service to all of our customers whenever
            they need it. All these services will help you to be the greatest
            among all the competitors in the market
          </p>
        </div>
        <div className="p-4 rounded-lg -md:p-8 md:ml-8">
          <video
            className=" w-full rounded-lg z-10 h-[426px] object-cover brightness-50"
            autoPlay
            muted
            loop
            src="src\assets\videos\video-hero-2.mp4"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
