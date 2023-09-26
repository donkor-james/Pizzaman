import React from 'react';
import hero from './../assets/hero-pattern.jpg'
const Hero = () => {
  return (
    <div className='relative w-screen h-screen overflow-y-hidden'>
      <div className="absolute top-0 left-0 w-full h-full "
        style={{
            backgroundImage: `url(${hero})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        
        }}
        >
     

       
       </div>
       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className='relative flex justify-center items-center h-screen'>
              <div className="text-white text-center">
                <span className="font-bold text-lg">BEST IN TOWN</span>
                <h1 className="text-8xl font-bold font-custom">Pizza And Pasta</h1>
                <button className="px-6 py-3 mt-4 bg-red-700 text-white rounded hover:bg-red-600 font-bold border-b-4 border-solid border-green-600">SEE TODAY'S MENU</button>
                </div>
          </div>
    </div>
  );
}

export default Hero;
