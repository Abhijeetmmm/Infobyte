'use client'
import React, { useEffect, useState } from 'react';
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";



import {motion} from "framer-motion"



const Collaboration = () => {
    const slides = [
        {
          image: 'https://swiperjs.com/demos/images/nature-1.jpg',
          text: 'Payroll ',
          arrtext:[
            'Align individual goals to company goals',
            'Set goals for employees and teams',
            'Track progress',
            'Give feedback',
            'Reward performance',
          ],
        },
        {
          image: 'https://swiperjs.com/demos/images/nature-2.jpg',
          text: 'HRMS',
          arrtext:[
            'Align individual goals to company goals',
            'Set goals for employees and teams',
            'Track progress',
            'Give feedback',
            'Reward performance',
          ],
        },
        {
          image: 'https://swiperjs.com/demos/images/nature-3.jpg',
          text: 'LEAVE ',
          arrtext:[
            'Align individual goals to company goals',
            'Set goals for employees and teams',
            'Track progress',
            'Give feedback',
            'Reward performance',
          ],
        },
        {
          image: 'https://swiperjs.com/demos/images/nature-4.jpg',
          text: 'ATTENDANCE ',
          arrtext:[
            'Align individual goals to company goals',
            'Set goals for employees and teams',
            'Track progress',
            'Give feedback',
            'Reward performance',
          ],
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      };
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
      };
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          handleNext();
        }, 10000);
    
        return () => clearInterval(intervalId);
      }, [currentIndex]);
    
      const handleImageClick = (index) => {
        setCurrentIndex(index);
      };
  return (
    <div className='max-w-[1380px] mx-auto'>
      <div className='flex md:pl-7 space-x-3 md:space-x-10'>
            <div className='flex flex-col items-center'>
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.5}} className='relative'>
                  <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" fill='currentColor' data-view-component="true" className=" text-blue-500">
                      <path d="M2.828 4.328C5.26 1.896 9.5 1.881 11.935 4.317c.024.024.046.05.067.076 1.391-1.078 2.993-1.886 4.777-1.89a6.22 6.22 0 0 1 4.424 1.825c.559.56 1.023 1.165 1.34 1.922.318.756.47 1.617.468 2.663 0 2.972-2.047 5.808-4.269 8.074-2.098 2.14-4.507 3.924-5.974 5.009l-.311.23a.752.752 0 0 1-.897 0l-.312-.23c-1.466-1.085-3.875-2.869-5.973-5.009-2.22-2.263-4.264-5.095-4.27-8.063a6.216 6.216 0 0 1 1.823-4.596Zm8.033 1.042c-1.846-1.834-5.124-1.823-6.969.022a4.712 4.712 0 0 0-1.382 3.52c0 2.332 1.65 4.79 3.839 7.022 1.947 1.986 4.184 3.66 5.66 4.752a78.214 78.214 0 0 0 2.159-1.645l-2.14-1.974a.752.752 0 0 1 1.02-1.106l2.295 2.118c.616-.52 1.242-1.08 1.85-1.672l-2.16-1.992a.753.753 0 0 1 1.021-1.106l2.188 2.02a18.963 18.963 0 0 0 1.528-1.877l-.585-.586-1.651-1.652c-1.078-1.074-2.837-1.055-3.935.043-.379.38-.76.758-1.132 1.126-1.14 1.124-2.96 1.077-4.07-.043-.489-.495-.98-.988-1.475-1.482a.752.752 0 0 1-.04-1.019c.234-.276.483-.576.745-.893.928-1.12 2.023-2.442 3.234-3.576Zm9.725 6.77c.579-1.08.92-2.167.92-3.228.002-.899-.128-1.552-.35-2.08-.22-.526-.551-.974-1.017-1.44a4.71 4.71 0 0 0-3.356-1.384c-1.66.004-3.25.951-4.77 2.346-1.18 1.084-2.233 2.353-3.188 3.506l-.351.423c.331.332.663.664.993.998a1.375 1.375 0 0 0 1.943.03c.37-.365.748-.74 1.125-1.118 1.662-1.663 4.373-1.726 6.06-.045.56.558 1.12 1.12 1.658 1.658Z"></path>
                  </svg>
                    <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-2 z-3"></span>
                </motion.div>
                <motion.div initial={{height:0}} whileInView={{height:'100%'}} transition={{delay:0.8}}  className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#ffd6cc] via-[#ec6547] to-transparent" ></motion.div>
            </div>
            <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{delay:0.6, type:'tween'}} className='md:w-10/12 mb-24'>
                <h2 className="text-[20px] md:text-2xl mb-7 font-medium text-gray-500 js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: '200ms'}}>Ingredients vital to</h2>  
                <h3 className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: '300ms'}}>
                    <span className="text-orange-500">your growth story.</span>
                    
                </h3>
            </motion.div>
        </div>
        <div className="w-full md:flex md:items-center md:justify-center">
  <button
    className="mb-4 md:mb-0 md:left-0  md:top-1/2 md:transform md:-translate-y-1/2 px-4 py-2 rounded"
    onClick={handlePrev}
  >
    <FcPrevious className="text-4xl"/>
  </button>
  <div className="w-full">
    <img
      src={slides[currentIndex].image}
      alt={`Nature ${currentIndex + 1}`}
      className="w-full h-[300px] md:h-[500px] object-cover object-center rounded-md"
    />
  </div>
  <div className="w-full text-center mt-4 md:w-[60%] space-y-7">
    <p className='text-2xl text-orange-500 font-semibold '>{slides[currentIndex].text}</p>
    <p className='text-xl text-gray-500 font-normal items-center'>
      {slides[currentIndex].arrtext.map((item, index) => (
        <li key={index} className='list-disc list-inside text-left mx-4'>{item}</li>
      ))}
    </p>
  </div>
  <button
    className="mt-4 md:mt-0 md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 px-4 py-2 rounded"
    onClick={handleNext}
  >
    <FcNext className="text-4xl text-blue-600"/>
  </button>
</div>

    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 py-6'>
        {slides.map((item, index) => (
          <div key={index} className={`flex flex-col items-center justify-center cursor-pointer ${index === currentIndex ? 'border border-red-500' : ''}`} onClick={() => handleImageClick(index)}>
            <img
              src={item.image}
              alt={`Nature ${index + 1}`}
              className="w-20 h-20 mb-2 md:mb-0 md:mr-2 object-cover object-center rounded-full"
            />
            <div className='text-sm text-orange-500 font-semibold text-center'>
              {item.text}
            </div>
          </div>
        ))}
      </div>
        
        <motion.div initial={{height:0}} whileInView={{height:'160px'}} transition={{delay:0.2}} className=" md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#797ef9] to-[#abb4ff]" ></motion.div>
  </div>
  )
}

export default Collaboration