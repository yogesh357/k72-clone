import React from "react";
import Video from "./Video";

function HomeHeroText() {
  return (
    <div className="font-[font2] mt-64 lg:mt-0  pt-5 text-center">
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] justify-center flex leading-[10vw] items-center ">
        The spark
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] justify-center flex leading-[10vw] items-center ">
        Who
        <div className="h-[8vw] w-[16vw] rounded-full -mt-5 overflow-hidden">
          <Video />
        </div>
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] justify-center flex leading-[10vw] items-center ">
        generates
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] justify-center flex leading-[10vw] items-center">
        there
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] justify-center flex leading-[10vw] items-center ">
        creativity
      </div>
    </div>
  );
}

export default HomeHeroText;
