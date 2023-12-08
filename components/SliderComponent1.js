import React, { useEffect, useState } from 'react';
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

const CustomSlider = () => {
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
  const [intervalId, setIntervalId] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const startAutoSlide = () => {
    const id = setInterval(() => {
      handleNext();
    }, 5000); // Adjust the interval duration as needed (in milliseconds)
    setIntervalId(id);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalId);
  };

  useEffect(() => {
    startAutoSlide();

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  

  return (
    <>
   <div className="w-full md:flex md:items-center md:justify-center">
  <button
    className="mb-4 md:mb-0 md:left-0  md:top-1/2 md:transform md:-translate-y-1/2 px-4 py-2 rounded"
    onClick={() => {
      handlePrev();
      stopAutoSlide();
    }}  >
    <FcPrevious className="text-4xl"/>
  </button>
  <div className="marquee-container">
  {slides.map((item, index) => (
    <div
      key={index}
      className={`marquee-card ${index === currentIndex ? 'active' : ''}`}
    >
      {/* Your card content goes here */}
      <div className="flex items-center mb-4">
        <img
          src={item.image}
          alt={`Profile ${index + 1}`}
          className="w-12 h-12 object-cover object-center rounded-full mr-4"
        />
        <div>
          <p className="text-2xl text-orange-500 font-semibold">
            {item.text}
          </p>
        </div>
      </div>
      <div className="w-full text-center mt-4 md:w-[60%] space-y-7">
        <ul className="text-xl text-gray-500 font-normal list-disc list-inside text-left">
          {item.arrtext.map((text, i) => (
            <p key={i} className="mx-4">{text}</p>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>



  <button
    className="mt-4 md:mt-0 md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 px-4 py-2 rounded"
    onClick={() => {
      handleNext();
      stopAutoSlide();
    }}
  >
    <FcNext className="text-4xl text-blue-600"/>
  </button>
</div>

    




    </>
  );
};

export default CustomSlider;
