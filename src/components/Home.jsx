import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          SAIDI Abdelkader
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Backend Devloper
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        Seasoned backend developer with 2 years of hands-on experience,
        currently navigating the fascinating landscape of Intelligent Systems as a
        dedicated student. My focus revolves around crafting ingenious backend solutions,
        seamlessly merging AI with technology for enhanced performance. I dabble in robotics,
        harnessing innovation, and possess a flair for crafting captivating user experiences
        through UX/UI design. Join me in bridging the gap between tech and human progress. 
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
