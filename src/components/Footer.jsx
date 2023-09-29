import React from 'react';
import logo from '../assets/logo.png'
import footer from './../assets/hero-pattern.jpg'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import SellersData from '../Data/Sellers'
const Footer = () => {
  return (
    <div className='relative  pb-20 mt-20'>
      <div className="absolute top-0 left-0 h-full w-full  overflow-x-hidden"
        style={{
            backgroundImage: `url(${footer})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'

        
        }}
        >
     

       
       </div>
       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          <div className='relative flex flex-col justify-center items-center pt-2'>
            <img src={logo} alt="" className='w-40 h-40'/>
            <div className='text-white flex flex-col'>
              <span className='text-center  text-2xl'>Address</span>
              <span>481 Creekside Lane Avila Beach, CA 93424</span>
            </div>
            <div className='text-white flex flex-col pt-8'>
              <span className='text-center text-2xl'>Phone</span>
              <span>+53 345 7953 32453</span>
            </div>
            <div className='text-white flex flex-col pt-8'>
              <span className='text-center text-2xl'>Email</span>
              <span>yourmail@gmail.com</span>
            </div>
           <div className='mt-4'>
            <span className='text-white text-2xl'>Follow us:</span>
              <div className='text-white flex flex-row gap-x-4 mt-5 pl-3'>
                <FaFacebookF/>
                <FaTwitter/>
                <FaInstagram/>
              </div>
           </div>
           <span className='text-white pt-10'>Copyright ©2023 All rights reserved</span>
          </div>
          
    </div>
  );
}

export default Footer;
