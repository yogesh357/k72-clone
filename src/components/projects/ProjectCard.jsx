import React from "react";

function ProjectCard(props) {
  return (
    // <div className="w-full flex h-[40vw] gap-4 mb-5">
    // <div className="w-full flex h-[40vw] gap-4">
    <>
      <div className="lg:w-1/2      group transition-all relative rounded-none hover:rounded-[50px] overflow-hidden ">
        <img className="w-full h-full object-cover " src={props.image1} />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex  items-center justify-center left-0 w-full bg-black/10  h-full">
          <h2 className="font-[font1] text-6xl border-4 pt-4 px-8 text-white border-white rounded-full uppercase ">
            Voir le Projets
          </h2>
        </div>
      </div>
      <div className="lg:w-1/2   group transition-all relative rounded-none hover:rounded-[50px] overflow-hidden ">
        <img className="w-full h-full object-cover " src={props.image2} />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex  items-center justify-center left-0 w-full bg-black/10  h-full">
          <h2 className="font-[font1] text-6xl border-4 pt-4 px-8 text-white border-white rounded-full uppercase ">
            Voir le Projets
          </h2>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
