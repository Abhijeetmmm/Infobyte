"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";

export default function Product() {
  const [hovered, setHovered] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  return (
    <div className="max-w-[1380px] mx-auto">
      <div className="flex md:pl-10 space-x-3 md:space-x-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false }}
            className="relative"
          >
            <svg
              aria-hidden="true"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              version="1.1"
              width="24"
              data-view-component="true"
              className="octicon octicon-briefcase text-orange-500"
            >
              <path d="M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z"></path>
            </svg>
            <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1 z-3"></span>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#7ee787]"
          ></motion.div>
        </div>
        <div className="md:w-10/12 mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            viewport={{ once: false }}
            className="text-[20px] md:text-2xl mb-7 font-medium text-orange-500 js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "200ms" }}
          >
            Productivity
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: false }}
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}  >
          <div className="container  mx-auto flex flex-col items-center justify-center">
            <div className="md:pl-2 md:mt-0">
              <img
                src="https://www.datocms-assets.com/40521/1693224362-admin-homepage-dtp.png?auto=format&w=2055"
                alt=""
                className="w-full h-96 shadow-sm "
              />
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl space-y-2 text-gray-700 text-center mt-8">
              <p>Leave HR to greytHR</p>
              <p className="text-orange-500 md:pl-14">
                While you focus on business growth.
              </p>
            </div>
            <div className="text-xl text-gray-700 md:pl-28 text-start items-center mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
              <p className="mb-4 md:mb-0">
                <strong className="text-2xl font-extrabold">&bull;</strong>{" "}
                Streamline all HR processes
              </p>
              <p className="mb-4 md:mb-0">
                <strong className="text-2xl font-extrabold">&bull;</strong> Save
                time & money
              </p>
              <p className="mb-4 md:mb-0">
                <strong className="text-2xl font-extrabold">&bull;</strong>{" "}
                Ensure 100% statutory compliance
              </p>
              <p className="mb-4 md:mb-0">
                <strong className="text-2xl font-extrabold">&bull;</strong>{" "}
                Promote transparency
              </p>
              <p className="mb-4 md:mb-0">
                <strong className="text-2xl font-extrabold">&bull;</strong>{" "}
                Ensure uniform policy implementation
              </p>
              <p className="mb-4 md:mb-0">
                <strong className="text-2xl font-extrabold">&bull;</strong>{" "}
                Enhance employee engagement
              </p>
            </div>
          </div>
        </motion.div>

        </div>
        
      </div>
      
      <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{type: "tween", delay:1.5}} className='mb-10 md:mb-32 pb-4 '>
            <div className='py-4 text-left'>
                <div className='z-[1] inline-block rounded-full px-2 border-2 border-[#7ee787] relative font-medium bg-gradient-to-r from-[#7ee787] to-[#aff5b4] bg-clip-text text-transparent'>
                    <span className='font-semibold text-[12px] text-black'>Did you know?</span>
                </div>
                <h3 className="text-[#7ee787] mb-2 mt-3 lg:text-6xl md:text-5xl text-3xl font-medium">12% increase</h3>
                <p className="mb-3 md:text-xl text-base font-medium text-gray-500">in Management productivity <br /> after three years with Infobyte</p>
            </div>
        </motion.div>
      
      
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "160px" }}
        transition={{ delay: 0.3 }}
        viewport={{ once: false }}
        className=" md:ml-12 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#ea6045] to-[#ffa28b]"
      ></motion.div>
    </div>
  );
}
