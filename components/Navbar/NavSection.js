"use client";

import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

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
export default function NavSection() {
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
  return (
    <div>
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
    </div>
  )
}
