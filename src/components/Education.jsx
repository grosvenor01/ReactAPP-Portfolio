import React from 'react';

const Education = () => {
  return (
    <div name='skills' className='w-full h-[20000] bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Education</p>
              <p className='py-4'></p>
            </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-bold mb-2 text-gray-900'>baccalaureate Degree</h3>
            <p className='text-gray-700'>EL IDRISSI</p>
            <p className='text-gray-600'>Specialty: Mathematics</p>
            <p className='text-gray-600'>2019 - 2020</p>
        </div>
          {/* Bachelor's Section */}
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-bold mb-2 text-gray-900'>Bachelor's Degree</h3>
            <p className='text-gray-700'>USTHB</p>
            <p className='text-gray-600'>Specialty: Computer Science</p>
            <p className='text-gray-600'>2022 - 2023</p>
          </div>

          {/* Master's Section */}
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-bold mb-2 text-gray-900'>Master's Degree</h3>
            <p className='text-gray-700'>USTHB</p>
            <p className='text-gray-600'>Specialty: Artificial Intelligence</p>
            <p className='text-gray-600'>SOON</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;