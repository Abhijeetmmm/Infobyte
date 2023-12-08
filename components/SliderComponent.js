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
    <>
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




    </>
  );
};

export default CustomSlider;
