import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import images from "../../public/imagesArray";

function Agence() {
  console.log(images.length);
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: "top 34%",
        end: "top -150%",
        pin: true,
        pinSpacer: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (ele) => {
          let imageIndex;
          if (ele.progress < 1) {
            imageIndex = Math.floor(ele.progress * images.length);
          } else {
            imageIndex = images.length - 1;
          }
          imageRef.current.src = images[imageIndex];
        },
      },
    });
  });

  return (
    <div>
      <div className="section1 relative py-1">
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-4xl rounded-3xl lg:w-[15vw] w-[25vw]  lg:top-60 top-10
           lg:left-[30vw] left-[15vw] "
        >
          <img
            ref={imageRef}
            className="h-full object-cover w-full"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
          />
        </div>
        <div className="relative font-[font2]">
          <div className="lg:mt-[52vh] mt-[30vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              Sixty- <br /> seventh <br /> Twelve
            </h1>
          </div>
          <div className="lg:pl-[40%]  lg:mt-20 mt-4 p-3">
            <p className="lg:text-6xl leading-tight">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our curiosity fuels our
              creativity. We remain humble and say no to big egos, even yours. A
              brand is alive. It has values, a personality, a story. If we
              forget that, we may make good numbers in the short term, but we'll
              kill it in the long term. That's why we're committed to providing
              perspective, to building influential brands.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
}

export default Agence;
