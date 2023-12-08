"use client";
import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion"
import { FaPeopleGroup } from "react-icons/fa6";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaEarthAmericas } from "react-icons/fa6";
import dynamic from "next/dynamic";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Counter() {
  const [isProductOpen, setProductOpen] = useState(false);
  const [isResourceOpen, setResourceOpen] = useState(false);
  const [isHeader, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // You can adjust the scroll threshold as needed
      const scrollThreshold = 50;

      if (scrollY > scrollThreshold) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [counter, setCounter] = useState(1);
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the counter
      setCounter((prevCounter) => {
        const newCounter = prevCounter + 1;

        // Stop the interval when the counter reaches 100
        if (newCounter >= 2000000) {
          clearInterval(intervalId);
        }

        return newCounter;
      });
    }, 1);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the counter
      setCounter1((prevCounter) => {
        const newCounter = prevCounter + 1;

        // Stop the interval when the counter reaches 100
        if (newCounter >= 20000) {
          clearInterval(intervalId);
        }

        return newCounter;
      });
    }, 1);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the counter
      setCounter2((prevCounter) => {
        const newCounter = prevCounter + 1;

        // Stop the interval when the counter reaches 100
        if (newCounter >= 22) {
          clearInterval(intervalId);
        }

        return newCounter;
      });
    }, 20);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
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
            Infobyte
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: false }}
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}  >
          <div className="container mx-auto  flex flex-col items-center justify-center">
            <div className="text-3xl sm:text-4xl md:text-5xl pb -12 space-y-6 text-gray-700 text-center mt-8">
              <p>
                You’re in great company
                <span className="text-orange-500"> with infobyte.</span>
              </p>
            </div>

            <div className="w-full flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-32 py-10">
              {/* Employee */}
              <div className="flex justify-center items-center space-x-2 text-center md:text-left">
                <div>
                  <FaPeopleGroup className="text-6xl text-gray-400 -mt-2" />
                </div>
                <div className="flex flex-col justify-center ">
                  <div className="text-5xl font-bold text-orange-500">
                    {counter}+
                  </div>
                  <div className="text-sm text-black">employee</div>
                </div>
              </div>

              {/* Companies */}
              <div className="flex justify-center items-center space-x-2 text-center md:text-left">
                <div>
                  <HiOutlineOfficeBuilding className="text-6xl text-gray-400 -mt-2" />
                </div>
                <div className="flex flex-col justify-center ">
                  <div className="text-5xl font-bold text-orange-500">
                    {counter1}+
                  </div>
                  <div className="text-sm text-black">companies</div>
                </div>
              </div>

              {/* Country */}
              <div className="flex justify-center items-center space-x-2 text-center md:text-left">
                <div>
                  <FaEarthAmericas className="text-5xl text-gray-400 -mt-2" />
                </div>
                <div className="flex flex-col justify-center  ">
                  <div className="text-5xl font-bold text-orange-500">
                    {counter2}+
                  </div>
                  <div className="text-sm text-black">country</div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto sm:px-3 flex flex-col items-center justify-center">
            <div className="text-3xl sm:text-4xl sm:px-4 md:text-5xl  space-y-6 text-gray-700 text-center">
              <img
                src="https://www.greythr.com/static/843a55de05df17e626e607c0afb3f4a3/30ade/client-logos.webp"
                alt=""
                className="w-full h-auto sm:px-3"
              />
            </div>
          </div>

          


        </motion.div>

        </div>
        
      </div>
      
      <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{type: "tween", delay:1.5}} className='mb-10 md:mb-20 pb-4 '>
            <div className="container mx-auto  flex flex-col items-center justify-center">
            <div className="text-3xl sm:text-4xl md:text-5xl pb -12 space-y-6 text-gray-700 text-center mt-8">
              <p>
                Explore the
                <span className="text-orange-500"> current HR landscape.</span>
              </p>
            </div>

            <div className="w-full custom-bounce flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-32 py-10">
              {/* Employee */}
              <div className="flex justify-center items-center space-x-2 text-center  md:text-center">
                <div className="flex flex-col justify-center space-y-3 hover:text-blue-500 hover:cursor-pointer">
                  <div className="text-5xl font-bold text-orange-500 text-center">
                    <img
                      src="https://www.datocms-assets.com/40521/1689012713-webinars_icon.png?auto=format&dpr=0.34&fit=max&w=408"
                      alt=""
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <div className="text-cneter">Webinar</div>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-2 text-center md:text-center">
                <div className="flex flex-col justify-center space-y-3 hover:text-blue-500 hover:cursor-pointer">
                  <div className="text-5xl font-bold text-orange-500 text-center">
                    <img
                      src="https://www.datocms-assets.com/40521/1689012764-blogs-icon.png?auto=format&dpr=0.34&fit=max&w=408"
                      alt=""
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <div className="text-cneter">blogs</div>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-2 text-center md:text-center">
                <div className="flex flex-col justify-center space-y-3 hover:text-blue-500 hover:cursor-pointer">
                  <div className="text-5xl font-bold text-orange-500 text-center">
                    <img
                      src="https://www.datocms-assets.com/40521/1689012789-guides_icon.png?auto=format&dpr=0.34&fit=max&w=408"
                      alt=""
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <div className="text-cneter">guide</div>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-2 text-center md:text-center">
                <div className="flex flex-col justify-center space-y-3 hover:text-blue-500 hover:cursor-pointer">
                  <div className="text-5xl font-bold text-orange-500 text-center">
                    <img
                      src="https://www.datocms-assets.com/40521/1689012713-webinars_icon.png?auto=format&dpr=0.34&fit=max&w=408"
                      alt=""
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <div className="text-cneter">customer</div>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-2 text-center md:text-center">
                <div className="flex flex-col justify-center space-y-3 hover:text-blue-500 hover:cursor-pointer">
                  <div className="text-5xl font-bold text-orange-500 text-center">
                    <img
                      src="https://www.datocms-assets.com/40521/1689012713-webinars_icon.png?auto=format&dpr=0.34&fit=max&w=408"
                      alt=""
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <div className="text-cneter">resource</div>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-2 text-center md:text-center">
                <div className="flex flex-col justify-center space-y-3 hover:text-blue-500 hover:cursor-pointer">
                  <div className="text-5xl font-bold text-orange-500 text-center">
                    <img
                      src="https://www.datocms-assets.com/40521/1689012713-webinars_icon.png?auto=format&dpr=0.34&fit=max&w=408"
                      alt=""
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <div className="text-cneter">HR</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      
      
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "60px" }}
        transition={{ delay: 0.3 }}
        viewport={{ once: false }}
        className=" md:ml-12 ml-3 h-[60px] mt-[-40px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#ea6045] to-[#ffa28b]"
      ></motion.div>


<div className="container bg-orange-500 mx-auto px-3 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <div className="p-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-4 text-center">
                20,000+ growing companies use greytHR
              </h2>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-4 text-center">
                Take a demo and find out why.
              </h2>
              <div className="flex flex-col  py-6">
                <form className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <input
                    type="text"
                    placeholder="Full name*"
                    name="name"
                    required
                    maxLength="100"
                    id="demo-form-first-field"
                    className="border p-2 rounded"
                    value=""
                  />
                  <input
                    type="email"
                    placeholder="Business email*"
                    name="email"
                    required
                    maxLength="100"
                    className="border p-2 rounded mt-4 sm:mt-0"
                    value=""
                  />
                  <input
                    type="text"
                    placeholder="Mobile number*"
                    name="mobileNumber"
                    required
                    minLength="10"
                    maxLength="10"
                    pattern="^[6789][0-9]{9}$"
                    id="home_page_demo_phone_input"
                    className="border p-2 rounded mt-4 sm:mt-0"
                    value=""
                  />
                  <input
                    type="text"
                    placeholder="Company name*"
                    name="company"
                    required
                    maxLength="200"
                    className="border p-2 rounded mt-4 sm:mt-0"
                    value=""
                  />
                </form>
                <div className="flex justify-center items-center">
                  <button className="bg-white my-8 text-orange-500 w-full sm:w-44 font-semibold p-2 rounded">
                    Request a demo
                  </button>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}
