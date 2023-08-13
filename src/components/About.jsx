import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm SAIDI Abdelkader, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I'm a passionate individual with a strong background in backend development 
                and a dedicated AI student. My journey revolves around crafting digital 
                solutions that seamlessly blend technology and innovation.
                Let's connect, explore ideas, and bring innovation to life. Your inquiries and thoughts could pave the way for exciting opportunities.
                Looking forward to engaging with you,</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
