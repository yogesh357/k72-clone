import React from "react";
import { Link } from "react-router-dom";

function HomeBottomText() {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2 mb-15">
      <p className="absolute lg:w-[17vw] w-64 lg:right-20 right-0 lg:text-lg text-xs font-[font1] lg:bottom-25 bottom-40 leading-tight lg:leading-relaxed ">
        &nbsp; &nbsp; &nbsp; &nbsp; K72 is an agency that carefully considers
        every action to nurture the brand. Tomorrow, in 5 months, and in 5
        years. We seek out the friction that creates the spark to generate
        emotion. To ensure an honest relationship, we are unfiltered; we say
        what needs to be said, we do what needs to be done.
      </p>
      <div className=" text-[6vw] border-3 hover:border-[rgb(211,253,80)] hover:text-[#D3FD50] lg:h-25 flex items-center leading-[5.5vw]  border-white rounded-full  uppercase  px-10 ">
        <Link className="text-[6vw] lg:mt-6 mt-3 " to={"/projects"}>
          Projects
        </Link>
      </div>
      <div className=" text-[6vw] border-3 hover:border-[rgb(211,253,80)] hover:text-[#D3FD50] lg:h-25 flex items-center leading-[5.5vw]  border-white rounded-full  uppercase  px-10 ">
        <Link className="text-[6vw] lg:mt-6 mt-3 " to={"/agence"}>
          Agence
        </Link>
      </div>
    </div>
  );
}

export default HomeBottomText;
