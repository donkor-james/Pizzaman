import React from 'react';
import '../../src/index.css'
const Counting = () => {
  return (
    <div className='counting w-full h-96 mt-2'>
        <div className='text-white flex flex-col items-center justify-center pt-20'>
            <div>
               <h2 className='text-center text-5xl font-medium'>44+</h2>
               <span className='font-custom text-gray-400'>BRANCHES</span>
            </div>
            <div className='gap-x-40 flex flex-row pt-10'>
                <div>
                    <h2 className=' text-center text-5xl font-medium'>4</h2>
                    <span className='font-custom text-gray-400'>TRUCKS</span>
                </div>
                <div>
                    <h2 className='text-center text-5xl font-medium'>40</h2>
                    <span className='font-custom text-gray-400'>PHYSICAL SHOPS</span>
                </div>
                <div>
                    <h2 className='text-center text-5xl font-medium'>800+</h2>
                    <span className='font-custom text-gray-400'>ACTIVE WORKERS</span>
                </div>
                <div>
                    <h2 className='text-center text-5xl font-medium'>1400</h2>
                    <span className='font-custom text-gray-400'>HOURS OF SUPPORT</span>
                </div>

            </div>

        </div>
      
    </div>
  );
}

export default Counting;
