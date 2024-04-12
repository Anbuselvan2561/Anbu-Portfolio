import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';

function Header(){

   const[toggleMenu, setToggleMenu] = useState('false')

    return(
         
        <header id='home' className="  px-5 py-4 bg-[#2514FF] w-full fixed md:static md:flex md:justify-between flex justify-between ">
            <a href="" className="font-bold text-black">M ANBUSELVAN</a>
            <nav className="hidden md:block ">
            <ul className="flex text-white">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </nav>

           { toggleMenu &&   <nav className="block md:hidden">
            <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav ">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </nav>
           }
            <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
        </header>
        

    )
};

export default Header;