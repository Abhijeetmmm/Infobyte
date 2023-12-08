"use client";
import React, {useState} from 'react'
import {motion} from "framer-motion"



const Projects = () => {
    const [hovered, setHovered] = useState(false)
  return (
    <div className='flex relative max-w-[1380px] mx-auto md:pl-10'>
    <img alt="" aria-hidden="true" width="2712" height="2712" className="absolute top-0 right-0 h-auto pointer-events-none" loading="lazy" decoding="async" src="https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp" />
    <div className='flex items-center flex-row relative'>
        <motion.div initial={{height:0}} whileInView={{height:'100%'}} className='w-[3px] h-full increase2'></motion.div>
        <img
            alt=""
            aria-hidden="true"
            width="81"
            height="485"
            style={{
                left: 'calc(50% - 2px)',
                height: 'auto',
                maxWidth: '9vw',
                transitionDelay: '100ms',
            }}
            className="hidden md:block absolute bottom-4 left-0"
            loading="lazy"
            decoding="async"
            src="https://github.githubassets.com/images/modules/site/home-campaign/git-branch-security.svg"
        />
    </div>
    <div className='lg:pl-24 md:pl-16 pl-6'>
        <div className='flex max-md:flex-col-reverse my-8 items-center lg:gap-x-5 sm:my-12 md:my-16 pb-6 md:pb-20 md:flex-row'>
            <div className='py-4 mb-2 w-full'>
                <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} transition={{type:'tween', duration:0.3}} className='md:pr-6'>
                <img
                src="https://www.datocms-assets.com/40521/1689012600-image-6.png?auto=format&dpr=0.46&fit=max&w=1310"
                alt=""
                className="w-full h-auto"
              />
                </motion.div>
            </div>
            <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} transition={{type:'tween', duration:0.3}} className='py-4 px-6 w-full'>
            <div className="md:pr-8  text-center md:text-left" >
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
            </motion.div>
        </div>
        <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{type:'tween', duration:0.3, delay:0.2}} className='mb-10 md:mb-32 pb-4 '>
            <div className='py-4 text-left'>
                <div className='z-[1] inline-block rounded-full px-2 border-2 border-[#abb4ff] relative font-medium bg-gradient-to-r from-[#939aff] to-[#abb4ff] bg-clip-text text-transparent'>
                    <span className='font-semibold text-[12px]'>Did you know?</span>
                </div>
                <h3 className="text-[#939aff] mb-2 mt-3 lg:text-6xl md:text-5xl text-3xl font-medium">16 million projects</h3>
                <p className="mb-3 md:text-xl text-base font-medium text-gray-500">fixed vulnerabilities with Koneqto</p>
            </div>
        </motion.div>


        
    </div>
    
  </div>
  )
}

export default Projects