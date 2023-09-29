import React from 'react';
import {Link } from 'react-router-dom';
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
// import logo from '../assets/logo.png'
import logoImg from '../assets/logo.png'

const Navbar = () => {
  return (
    <section className=''>
    <div className='flex flex-row justify-between px-10 items-center pb-5 border-b'>
        <div className='flex flex-row gap-x-5 mt-5'>
            <div className='flex flex-row items-center gap-2'>
                <BsFillTelephoneFill className='text-white'/>
                <Link to='/contact' className='text-white hover:text-red-500'>0302753430</Link>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <AiOutlineMail className='text-white'/>
                <Link to='/contact' className='text-white hover:text-red-500'>info@pizzaman.com</Link>
              </div>
          </div>
         <div className='flex flex-row items-center gap-7'>
            <div className='text-white flex flex-row gap-x-4 mt-5 pl-3'>
                  <FaFacebookF/>
                  <FaTwitter/>
                  <FaInstagram/>
              </div>
              
              <Link to='' className='text-white bg-red-600 px-5 py-1.5 mt-4 rounded hover:bg-red-500 font-bold'>
                  Order Now
              </Link>
         </div>
    </div>
    <div className='flex flex-row items-center px-10'>
        <img src={logoImg} alt="" className='w-[100px] object-contain aspect-auto'/>
        <div className='flex flex-row ml-80 text-white font-[500] '>
          <a href="/" className="px-4 py-2 mx-2 text-lg hover:text-red-500">Home</a>
          <a href="/about" className="px-4 py-2 text-lg mx-2 hover:text-red-500">About Us</a>
          <a href="/branches" className="px-4 py-2 text-lg mx-2 hover:text-red-500">Our Branches</a>
          <a href="/vacancies" className="px-4 py-2 text-lg mx-2 hover:text-red-500">Vacancies</a>
          <a href="/contact" className="px-4 py-2 mx-2 text-lg hover:text-red-500">Contact</a>
      </div>
      
    </div>
    {/* <div className=''>

      <img src={logoImg} alt="" className='w-40 h-40'/>
    </div> */}
    </section>
  );
}

export default Navbar;
