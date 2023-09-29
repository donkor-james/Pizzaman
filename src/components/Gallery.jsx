import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import gallery1 from '../assets/italian.webp'
import gallery2 from '../assets/plantain.jpg'
import gallery3 from '../assets/carousel.jpg'
import gallery4 from '../assets/bros4.webp'
import gallery5 from '../assets/near1.jpg'
import gallery6 from '../assets/near2.jpg'
import gallery7 from '../assets/near4.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Gallery.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Gallery() {
  return (
    <>
    <div className='flex flex-col items-center justify-center mt-20'>
        <h4 className='font-bold text-6xl'>Gallery</h4>
        <span className='font-custom text-lg mt-2'>Check Our Gallery</span>
    </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={gallery1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery2} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
