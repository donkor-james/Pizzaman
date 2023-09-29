

import React, { useRef, useState } from 'react';
import hero from './../assets/carousel2.jpg'
import Navbar from './Navbar';
import '../../src/index.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import backgroundImg1 from './../assets/carousel.jpg'; // Import your background images
import backgroundImg2 from './../assets/carousel2.jpg'; // Import your background images
import backgroundImg3 from './../assets/bros4.webp'; // Import your background images
import backgroundImg4 from '../assets/carousel2.jpg'

import absolute from '../assets/absolute.png'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Hero() {
  return (
    <div className='hero w-full h-screen'>
      <Navbar />
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
       <div className=''>
        <SwiperSlide>
            
            <div className=' flex justify-center items-center mt-20'>
              <div className="text-white text-center">
                <span className="font-bold text-lg">BEST IN TOWN</span>
                <h1 className="text-8xl font-bold font-custom">Pizzaman Chickenman</h1>
                <button className="px-6 py-3 mt-4 bg-red-600 text-white rounded hover:bg-red-500 font-bold border-b-4 border-solid border-green-600">SEE TODAY'S MENU</button>
              </div>
            </div>
            </SwiperSlide>
       </div>
        <SwiperSlide>
        <div className='flex justify-center items-center mt-20'>
          <div className="text-white text-center">
            <span className="font-bold text-lg">BEST IN TOWN</span>
            <h1 className="text-8xl font-bold font-custom">Pizzaman Chickenman</h1>
            <button className="px-6 py-3 mt-4 bg-red-600 text-white rounded hover:bg-red-500 font-bold border-b-4 border-solid border-green-600">SEE TODAY'S MENU</button>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' flex justify-center items-center mt-20'>
          <div className="text-white text-center">
            <span className="font-bold text-lg">BEST IN TOWN</span>
            <h1 className="text-8xl font-bold font-custom">Pizzaman Chickenman</h1>
            <button className="px-6 py-3 mt-4 bg-red-600 text-white rounded hover:bg-red-500 font-bold border-b-4 border-solid border-green-600">SEE TODAY'S MENU</button>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' flex justify-center items-center mt-20'>
          <div className="text-white text-center">
            <span className="font-bold text-lg">BEST IN TOWN</span>
            <h1 className="text-8xl font-bold font-custom">Pizzaman Chickenman</h1>
            <button className="px-6 py-3 mt-4 bg-red-600 text-white rounded hover:bg-red-500 font-bold border-b-4 border-solid border-green-600">SEE TODAY'S MENU</button>
          </div>
        </div>
       
        </SwiperSlide>
        
      </Swiper>
      <div className='relative'>
          <div className='absolute top-[-60px] left-5'>
            <img src={absolute} alt="" className='w-1/2 h-1/2'/>
          </div>
      </div>
    </div>
  );
}


