import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useNavbarContext } from "../context/NavContext";
import { useNavigate } from "react-router-dom";

function FullScreenNav() {
  const [navOpen, setNavOpen] = useNavbarContext(); // ✅ Correct destructuring
  const fullScreenRef = useRef(null);
  const fullNavLinksRef = useRef(null);

  // ✅ Animation for open
  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullscreennav", { display: "block", duration: 0 });
    tl.to(".stairing", {
      delay: 0.2,
      height: "100%",
      stagger: { amount: -0.3 },
      duration: 0.5,
      ease: "power2.out",
    });
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: { amount: 0.3 },
      duration: 0.5,
    });
    tl.to(".navlink", { opacity: 1, duration: 0.3 });
  }

  // ✅ Animation for close
  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: { amount: 0.1 },
      duration: 0.3,
    });
    tl.to(".stairing", {
      height: 0,
      stagger: { amount: -0.1 },
      duration: 0.4,
      ease: "power2.inOut",
    });
    tl.to(".navlink", { opacity: 0, duration: 0.2 });
    tl.to(".fullscreennav", { display: "none", duration: 0 });
  }

  // ✅ useGSAP hook — auto-triggers when `navOpen` changes
  useGSAP(() => {
    if (navOpen) gsapAnimation();
    else gsapAnimationReverse();
  }, [navOpen]);

  const navigation = useNavigate();
  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav hidden text-white h-screen w-full absolute overflow-hidden z-50"
    >
      {/* Background stairs */}
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="stairing h-0 w-1/5 bg-black"></div>
          ))}
        </div>
      </div>

      {/* Content section */}
      <div ref={fullNavLinksRef} className="relative">
        <div className="navlink flex w-full justify-between items-start p-5 lg:p-2 opacity-0">
          <div className="w-36">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="103"
              height="44"
              viewBox="0 0 103 44"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>

          {/* Close Button */}
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="relative lg:h-32 lg:w-32 h-20 w-20 cursor-pointer"
          >
            <div className="absolute lg:h-44 h-24 lg:w-1 w-0.5 bg-[#D3FD50] -rotate-45 origin-top"></div>
            <div className="absolute right-0 lg:h-44 h-24 lg:w-1 w-0.5 bg-[#D3FD50] rotate-45 origin-top"></div>
          </div>
        </div>

        {/* Repeated scrolling link blocks */}
        <div className="py-12">
          <div
            onClick={() => {
              navigation("/projects");
              setNavOpen(false);
            }}
            className="relative origin-top link border-t-[0.5px] border-gray-300 opacity-0"
          >
            <h1 className="text-8xl font-[font2] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
              Projects
            </h1>

            {/* Moving link band */}
            <div className="absolute moveLink top-0 left-0 w-full text-black flex bg-[#D3FD50] lg:py-4 py-1 overflow-hidden">
              {[...Array(2)].map((_, j) => (
                <div key={j} className="moveX flex items-center gap-8 ">
                  {[...Array(4)].map((_, k) => (
                    <React.Fragment key={k}>
                      <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.9] uppercase flex-shrink-0">
                        TO SEE EVERYTHING
                      </h2>
                      <img
                        className="h-16 lg:h-24 rounded-full flex-shrink-0 w-40 lg:w-72 object-cover"
                        src={
                          k % 2 === 0
                            ? "/images/MenuThumbnail.jpg"
                            : "/images/PJC_SiteK72_Thumbnail.jpg"
                        }
                        alt="Menu thumbnail"
                      />
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div
            onClick={() => {
              navigation("/agence");
              setNavOpen(false);
            }}
            className="relative origin-top link border-t-[0.5px] border-gray-300 opacity-0"
          >
            <h1 className="text-8xl font-[font2] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
              Agecnes
            </h1>

            {/* Moving link band */}
            <div className="absolute moveLink top-0 left-0 w-full text-black flex bg-[#D3FD50] lg:py-4 py-1 overflow-hidden">
              {[...Array(2)].map((_, j) => (
                <div
                  key={j}
                  className="moveX flex items-center gap-8 "
                  aria-hidden={j === 1}
                >
                  {[...Array(4)].map((_, k) => (
                    <React.Fragment key={k}>
                      <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.9] uppercase flex-shrink-0">
                        TO SEE EVERYTHING
                      </h2>
                      <img
                        className="h-16 lg:h-24 rounded-full flex-shrink-0 w-40 lg:w-72 object-cover"
                        src={
                          k % 2 === 0
                            ? "/images/MenuThumbnail.jpg"
                            : "/images/PJC_SiteK72_Thumbnail.jpg"
                        }
                        alt="Menu thumbnail"
                      />
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div
            onClick={() => {
              navigation("/projects");
              setNavOpen(false);
            }}
            className="relative origin-top link border-t-[0.5px] border-gray-300 opacity-0"
          >
            <h1 className="text-8xl font-[font2] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
              Blogs
            </h1>

            {/* Moving link band */}
            <div className="absolute moveLink top-0 left-0 w-full text-black flex bg-[#D3FD50] lg:py-4 py-1 overflow-hidden">
              {[...Array(2)].map((_, j) => (
                <div
                  key={j}
                  className="moveX flex items-center gap-8 "
                  aria-hidden={j === 1}
                >
                  {[...Array(4)].map((_, k) => (
                    <React.Fragment key={k}>
                      <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.9] uppercase flex-shrink-0">
                        TO SEE EVERYTHING
                      </h2>
                      <img
                        className="h-16 lg:h-24 rounded-full flex-shrink-0 w-40 lg:w-72 object-cover"
                        src={
                          k % 2 === 0
                            ? "/images/MenuThumbnail.jpg"
                            : "/images/PJC_SiteK72_Thumbnail.jpg"
                        }
                        alt="Menu thumbnail"
                      />
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div
            onClick={() => {
              navigation("/agence");
              setNavOpen(false);
            }}
            className="relative origin-top link border-t-[0.5px] border-gray-300 opacity-0"
          >
            <h1 className="text-8xl font-[font2] text-[8vw] text-center leading-[0.8] pt-5 uppercase">
              Contact
            </h1>

            {/* Moving link band */}
            <div className="absolute moveLink top-0 left-0 w-full text-black flex bg-[#D3FD50] lg:py-4 py-1 overflow-hidden">
              {[...Array(2)].map((_, j) => (
                <div
                  key={j}
                  className="moveX flex items-center gap-8 "
                  aria-hidden={j === 1}
                >
                  {[...Array(4)].map((_, k) => (
                    <React.Fragment key={k}>
                      <h2 className="whitespace-nowrap font-[font2] lg:text-[6vw] text-4xl text-center lg:leading-[0.9] uppercase flex-shrink-0">
                        TO SEE EVERYTHING
                      </h2>
                      <img
                        className="h-16 lg:h-24 rounded-full flex-shrink-0 w-40 lg:w-72 object-cover"
                        src={
                          k % 2 === 0
                            ? "/images/MenuThumbnail.jpg"
                            : "/images/PJC_SiteK72_Thumbnail.jpg"
                        }
                        alt="Menu thumbnail"
                      />
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullScreenNav;
