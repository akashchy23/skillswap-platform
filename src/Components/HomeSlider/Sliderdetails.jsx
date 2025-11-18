import React from 'react';

const Sliderdetails = ({ course }) => {
    // console.log(course);
    return (
        <div className='flex flex-col md:flex-row bg-base-300 p-5 rounded-2xl my-10 items-center'>
            
            
            <div className='w-full md:w-1/2 flex justify-center mb-5 md:mb-0'>
                <img 
                    src={course.image} 
                    alt={course.skillName} 
                    className='w-full h-40 md:h-60 lg:h-80 object-cover rounded-2xl'
                />
            </div>

           
            <div className='w-full md:w-1/2 flex flex-col justify-center items-center text-center px-5'>
                <h1 className='text-3xl md:text-5xl font-semibold mb-2'>{course.skillName}</h1>
                <p className='text-lg md:text-xl text-gray-700'>
                    Acoustic guitar classes for complete beginners.
                </p>
            </div>
        </div>
    );
};

export default Sliderdetails;
