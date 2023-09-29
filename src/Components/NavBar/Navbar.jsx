
import { Link } from 'react-router-dom';
import logo from '../../assets/LOGOS/logo.png'
import { useState } from "react";
import './NavBar.css'
const NavBar = () =>
{
    const [menu, setMenu] = useState();
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if (!isMenuClicked) {
          setMenuClass("menu visible");
          setIsMenuClicked(false);
        } else {
          setMenuClass("menu hidden");
        }
    
        setIsMenuClicked(!isMenuClicked);
      };

    return (
        <>
            <div className='nav mt-0 border border-black md:h-[170px] h-[150px]'>
                <div className="nav-wrapper flex justify-between items-center mx-8 mt-8 h-20">
                    <div className='w-40'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                    <div className="hamburger" onClick={updateMenu}>
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </div>
                    </div>
                    <div className='nav-menu hidden md:flex flex-wrap items-center mx-2 justify-center gap-3 text-white text-lg font-normal'>
                        <a href='/'>
                            Home
                        </a>
                        <a href='/'>
                            About Us
                        </a>
                        <a href='/'>
                            Services
                        </a>
                        <a href='/'>
                            Contact
                        </a>
                    </div>
                    <div >
                        <button className='w-56 h-16 bg-red-600 text-white rounded-sm'>
                            ORDER: +34 685 778 8892
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className='md:hidden flex flex-col justify-between w-full h-48 absolute bg-white'>
                    <div className='py-3 text-slate-950 font-[10px] text-[16px] border-b'>
                        <div className='ml-4'>HOME</div>
                    </div>
                    <div className='py-3 text-slate-950 font-[10px] text-[16px] border-b'>
                        <div className='ml-4'>MENU</div>
                    </div>
                    <div className='py-3 text-slate-950 font-[10px] text-[16px] border-b'>
                        <div className='ml-4'>ABOUT US</div>
                    </div>
                    <div className='py-3 text-slate-950 font-[10px] text-[16px]'>
                        <div className='ml-4'>CONTACT</div>
                    </div>
                </div>
            </div>

        </>
    );

}

export default NavBar;