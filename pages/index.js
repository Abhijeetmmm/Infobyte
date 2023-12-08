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

const SliderComponent = dynamic(() => import("../components/SliderComponent"), {
  ssr: false,
});
// const SliderComponent1 = dynamic(() => import('../components/SliderComponent1'), { ssr: false })
const CrouselComponent = dynamic(() => import("../components/Crousel"), {
  ssr: false,
});
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
  },
];
const imagesData = [
  {
    id: 1,
    imageUrl:
      "https://www.datocms-assets.com/40521/1692959345-greytfm-podcasts-mb.png?auto=format&w=984",
    title: "Jessie Watsica",
    defaultText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolores...",
    hoverText: "Hover Text 1",
  },
  {
    id: 2,
    imageUrl:
      "https://www.datocms-assets.com/40521/1692959345-greytfm-podcasts-mb.png?auto=format&w=984",
    title: "Jessie Watsica",
    defaultText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolores...",
    hoverText: "Hover Text 1",
  },
  {
    id: 3,
    imageUrl:
      "https://www.datocms-assets.com/40521/1692959345-greytfm-podcasts-mb.png?auto=format&w=984",
    title: "Jessie Watsica",
    defaultText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolores...",
    hoverText: "Hover Text 1",
  },
  {
    id: 4,
    imageUrl:
      "https://www.datocms-assets.com/40521/1692959345-greytfm-podcasts-mb.png?auto=format&w=984",
    title: "Jessie Watsica",
    defaultText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolores...",
    hoverText: "Hover Text 1",
  },
  // Add more objects for additional images
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
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
    <>
      <div
        className={`relative ${isHeader && "shadow-lg"}`}>
         
        <Popover className={`fixed bg-white w-full ${isHeader && "shadow-lg"}`}>
          <div className="flex md:mx-24 justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
            <div className="mr-6">
              <a href="#" className="flex">
                <img
                  className="h-8 w-auto -mt-3 sm:h-10"
                  src="/infobyte logo.png"
                  alt=""
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <IoIosMenu className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:flex-1 md:flex md:items-center md:justify-start">
              <Popover.Group as="nav" className="flex space-x-14">
                <Popover
                  className="relative"
                  onMouseEnter={() => setProductOpen(true)}
                  onMouseLeave={() => setProductOpen(false)}
                >
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-500" : "text-gray-500",
                          "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-orange-500 focus:outline-none "
                        )}
                      >
                        <span>Product</span>
                        <FaChevronDown
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-orange-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        show={isProductOpen}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute animate-fade-down z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {resources.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 p-3 block rounded-md hover:bg-gray-50"
                                >
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Customer
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Pricing
                </a>

                <Popover
                  className="relative"
                  onMouseEnter={() => setResourceOpen(true)}
                  onMouseLeave={() => setResourceOpen(false)}
                >
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-orange-500 focus:outline-none "
                        )}
                      >
                        <span>Resource</span>
                        <FaChevronDown
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-orange-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        show={isResourceOpen}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 animate-fade-down left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {resources.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 p-3 block rounded-md hover:bg-gray-50"
                                >
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
            </div>

            <div className="hidden md:flex-1 md:flex md:items-center md:justify-end">
              <div className="flex items-center md:ml-12">
                <a
                  href="#"
                  className="text-base font-medium text-blue-500 border px-8 hover:bg-blue-500 hover:text-white py-2 rounded-md border-blue-500 bg-white"
                >
                  Login
                </a>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="/infobyte logo.png"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <RxCross2 className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6"></div>
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Product
                    </a>
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Customer
                    </a>
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Pricing
                    </a>

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Enterprise
                    </a>
                    {resources.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Sign up
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?{" "}
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-500"
                      >
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
         <motion.div         transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
>
        <div className="bg-gray-100 py-12" onMouseEnter={() => setHeader(true)}>
          <div className="container mx-auto flex flex-col-reverse items-center justify-center md:flex-row md:grid md:grid-cols-2 md:gap-8">
            <div className="md:pr-8 text-center md:text-left">
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
                payroll processes, empowers employees, and improves all-around
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

            <div className="md:pl-8 mt-8 md:mt-0">
              <img
                src="https://www.datocms-assets.com/40521/1690612125-home-banner-1.png?auto=format&w=1884"
                alt=""
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-50  py-20" onMouseEnter={() => setHeader(true)}>
          <div className="container  mx-auto flex flex-col items-center justify-center">
            <div className="md:pl-2 md:mt-0">
              <img
                src="https://www.datocms-assets.com/40521/1693224362-admin-homepage-dtp.png?auto=format&w=2055"
                alt=""
                className="w-full h-96 shadow-sm custom-bounce"
              />
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl space-y-2 text-gray-700 text-center mt-8">
              <p>Leave HR to greytHR</p>
              <p className="text-orange-500">
                While you focus on business growth.
              </p>
            </div>
            <div className="text-xl text-gray-700 text-start mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
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
        </div>

        <div className="bg-gray-100 py-20" onMouseEnter={() => setHeader(true)}>
          <div className="container mx-auto flex flex-col items-center justify-center">
            <div className="text-3xl sm:text-4xl md:text-5xl py-12 text-gray-700 text-center mt-8">
              <p>
                Ingredients vital to
                <span className="text-orange-500">your growth story.</span>
              </p>
            </div>
            <div className="w-full">
              <SliderComponent />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-12" onMouseEnter={() => setHeader(true)}>
          <div className="container mx-auto flex flex-col-reverse items-center justify-center md:flex-row md:grid md:grid-cols-2 md:gap-8">
            <div className="md:pl-8 mt-8 md:mt-0">
              <img
                src="https://www.datocms-assets.com/40521/1689012600-image-6.png?auto=format&dpr=0.46&fit=max&w=1310"
                alt=""
                className="w-full h-auto"
              />
            </div>

            <div className="md:pr-8 infinite-animation text-center md:text-left" >
              <div className="text-5xl space-y-2 text-gray-500">
                <p>
                  Proactive customer support to minimize downtime and{" "}
                  <span className="text-orange-500">
                    maximize productivity.
                  </span>
                </p>
              </div>

              <p className="py-2 text-lg font-semibold">
                Meticulous integration & implementation
              </p>

              <p className=" text-sm">
                Experts drive end-to-end account set-up
                <br />2 months of onboarding support{" "}
              </p>

              <p className="py-2 text-lg font-semibold">
                Proactive customer support
              </p>

              <p className=" text-sm">
                First response time under 2 hours
                <br />
                Resolution time under 6 hours for 85% queries
              </p>

              <p className="py-2 text-lg font-semibold">
                Coaching for HR & payroll personnel
              </p>

              <p className=" text-sm">
                Live product training sessions via webinars
                <br />
                Multilingual training
              </p>
              <div>
                <button className="bg-orange-500 text-white px-8 py-2 rounded-md mt-4 hover:bg-orange-600">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 py-20" onMouseEnter={() => setHeader(true)}>
          <div className="container mx-auto flex flex-col items-center justify-center">
            <div className="text-3xl sm:text-4xl md:text-5xl py-12 space-y-6 text-gray-700 text-center mt-8">
              <p>
                Access to unlimited career growth opportunities
                <br />
                <span className="text-orange-500">The greytHR ecosystem.</span>
              </p>
              <p className="text-sm">
                greytHR also offers a growing knowledge framework that delivers
                value that’s priceless.
              </p>
            </div>
            <div className="w-full">
              <div className="flex flex-wrap justify-center">
                {imagesData.map((image) => (
                  <div
                    key={image.id}
                    className="overflow-hidden aspect-video cursor-pointer rounded-xl w-full md:w-1/2 lg:w-1/3 xl:w-1/4  h-96 space-x-8 relative group mb-8"
                  >
                    <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                      <div>
                        <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                          <div className="font-bold">{image.title}</div>
                          <div className="opacity-60 text-sm">
                            {image.defaultText}
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      alt=""
                      className="object-cover w-full h-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                      src={image.imageUrl}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 hover:opacity-0 transition-opacity duration-300">
                      <div className="text-white text-left right-0 bottom-0 hover:inset-0 hover:opacity-0">
                        <p className="text-lg font-bold">{image.title}</p>
                        <p className="text-sm">{image.hoverText}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-20" onMouseEnter={() => setHeader(true)}>
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
                  <div>employee</div>
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
                  <div>companies</div>
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
                  <div>country</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50" onMouseEnter={() => setHeader(true)}>
          <div className="container mx-auto sm:px-3 flex flex-col items-center justify-center">
            <div className="text-3xl sm:text-4xl sm:px-4 md:text-5xl pb-12 space-y-6 text-gray-700 text-center">
              <img
                src="https://www.greythr.com/static/843a55de05df17e626e607c0afb3f4a3/30ade/client-logos.webp"
                alt=""
                className="w-full h-auto sm:px-3"
              />
            </div>
          </div>
        </div>

        <div className="bg-orange-500" onMouseEnter={() => setHeader(true)}>
          <div className="container mx-auto px-3 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
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

        <div className="bg-gray-50 py-20" onMouseEnter={() => setHeader(true)}>
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
        </div>
        <div className="bg-gray-100 pt-4" onMouseEnter={() => setHeader(true)}>
          <div className="container mx-auto  flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
  <div className="p-4 space-y-2">
    <p className="text-lg  mb-2 hover:underline hover:text-blue-500 cursor-pointer">HR & Payroll Administration</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">What is HRMS?</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">What is Payroll?</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">What is Statutory Compliance?</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Guide to Leave Management</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Guide to Attendance Management</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Holiday Lists 2023</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Holiday Lists 2024</p>
  </div>

  <div className="p-4 space-y-2">
    <p className="text-lg  mb-2 hover:underline hover:text-blue-500 cursor-pointer">Product</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">HR Software</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Payroll Software</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Leave Management System</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Attendance Management System</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Employee Self Service</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Performance Management System</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">greytHR Service Status</p>
  </div>

  <div className="p-4 space-y-2 ">
    <p className="text-lg  mb-2 hover:underline hover:text-blue-500 cursor-pointer">Knowledge Center</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Help Documentation</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Blog</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Podcasts</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Community Forums</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Online Training</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Statutory Wiki</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Case Study</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Videos & Presentations</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">HR Garden</p>
  </div>

  <div className="p-4">
    <p className="text-lg  mb-2 hover:underline hover:text-blue-500 cursor-pointer">Company</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">About Us</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Careers</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Media Kit</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Plans & Pricing</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Customers</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Partners</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Payroll Service Providers</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Support</p>
    <p className="hover:underline hover:text-blue-500 cursor-pointer">Contact Us</p>
  </div>
</div>


          </div>
        </div>
        </motion.div>


        <div className="bg-gray-200 pt-4" onMouseEnter={() => setHeader(true)}>
          <div className="container mx-auto  flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <div className="p-4 space-y-2">
    <p className="text-lg  mb-2 hover:underline hover:text-blue-500 cursor-pointer">
    Copyright © 2023 Infobyte Software Pvt. Ltd.

    </p>
   
  </div>

  <div className="p-4 space-y-2">
    <p className="text-lg  mb-2 hover:underline hover:text-blue-500 cursor-pointer">
    Privacy Policy |
Terms of Service
    </p>
  
  </div>

  <div className="p-4  flex justify-center items-center space-x-2 ">
    <p className="text-lg  mb-2 ">
    Connect with us:
    </p>
    <p><FaFacebookF className="w-10 h-10 p-2 text-gray-500 cursor-pointer rounded-full bg-gray-300 hover:bg-gray-50"/>
</p>
    <p><FaTwitter className="w-10 h-10 p-2 text-gray-500 cursor-pointer rounded-full bg-gray-300 hover:bg-gray-50"/>
</p>
    <p><IoLogoYoutube className="w-10 h-10 p-2 text-gray-500 cursor-pointer rounded-full bg-gray-300 hover:bg-gray-50"/>
</p>
    <p><FaLinkedinIn className="w-10 h-10 p-2 text-gray-500 cursor-pointer rounded-full bg-gray-300 hover:bg-gray-50"/>
</p>
  </div>

  
</div>


          </div>
        </div>
      </div>
    </>
  );
}
