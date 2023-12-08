"use client";
import React, { useState } from "react";
import {motion} from "framer-motion"
const Hero = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  return (
    <div className="relative max-w-[1380px] lg:pt-32 md:px-10 mx-auto pt-16">
      <img
        className="absolute hero-drone top-28 w-1/2 h-auto right-0 xl:right-0"
        width="700"
        height="526"
        src="https://www.datocms-assets.com/40521/1690612125-home-banner-1.png?auto=format&w=1884"
        alt=""
      />
      <div className="flex">
        <div className="relative ">
          <img
            aria-hidden="true"
            className=""
            src="https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg"
            width="437"
            height="637"
            alt=""
          />
          <div className="mx-auto my-3 ">
            <span className="relative z-[11]">
              <svg
                aria-hidden="true"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                version="1.1"
                width="24"
                data-view-component="true"
                className=" text-purple-600"
              >
                <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
              </svg>
              <span
                className="absolute left-0 top-0 w-6 h-full  home-campaign-glowing-icon-glow "
                style={{
                  backgroundColor: "var(--mktg-accent-primary)",
                  filter: "blur(17px)",
                }}
              ></span>
            </span>
          </div>
          <div
            style={{
              background:
                "linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)",
              marginLeft: "11px",
            }}
            className=" max-md:w-[2px] w-[3px] h-[150px] max-md:h-[450px] max-sm:h-[300px] max-ssm:h-[700px] max-sssm:h-[1050px] line rounded-md"
          ></div>
        </div>
        <div className=" absolute pt-32 mt-28 max-md:px-4 ml-4 md:ml-12">
          <div className="relative md:top-20 mb-[24px]">
          <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{type: "tween", delay:0.1}} className='mb-10 md:mb-32 pb-4 '>
          <div className="md:pr-8 text-center md:text-left ">
              <div className="text-5xl space-y-2 text-gray-500">
                <p>Power up</p>
                <p>your HR processes.</p>
                <p>Energize the workforce.</p>
              </div>

              <span className="text-orange-500 text-4xl block mt-4">
                Trigger business growth.
              </span>

              <p className="py-2">
                greytHR is a cloud-based HR platform that streamlines HR &
                payroll processes, <br /> empowers employees, and improves all-around
                productivity.
              </p>

              <p className="text-lg font-semibold italic">
                <i>greytHR serves 20,000+ companies in 250+ cities.</i>
              </p>
              <div>
                <button className="bg-orange-500 text-white px-8 py-2 rounded-md mt-4 hover:bg-orange-600">
                  Get Started
                </button>
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
