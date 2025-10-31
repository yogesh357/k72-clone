import gsap from "gsap";
import projectImgArr from "../../public/projectImg";
import ProjectCard from "../components/projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

function Projects() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    // gsap.to(".hero", {
    //   delay: 2,
    //   height: "600px",
    //   // stagger: {
    //   //   amount: 0.4,
    //   // },
    //   stagger: 0.2,
    //   scrollTrigger: {
    //     trigger: ".lol",
    //     markers: true,
    //     start: "top 100%",
    //     end: "top -150%",
    //     scrub: true,
    //   },
    // });
    gsap.utils.toArray(".hero").forEach((el) => {
      gsap.to(el, {
        height: "600px",
        ease: "power3.out",
        stagger: {
          amount: 10,
        },
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top -150%",
          scrub: true,
        },
      });
    });
  });

  return (
    <div className="lg:p-4 p-2">
      <div className=" relative  pt-[40vh]">
        <h2 className="font-[font2] lg:text-[10vw] text-6xl uppercase ">
          Projets
        </h2>
        <h2 className="absolute font-[font2] text-4xl  ">16</h2>
      </div>
      er2
      <div className="lg:mt-20  lol">
        {projectImgArr.map((ele, index) => (
          <div className="hero   lg:h-[300px]  mb-5 w-full flex lg:flex-row flex-col lg:gap-4 gap-2">
            <ProjectCard key={index} image1={ele.image1} image2={ele.image2} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
