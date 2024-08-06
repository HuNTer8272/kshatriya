"use client"
import { logo_black, title_image_black } from '@/helper/ImageImports';
import Image from 'next/image';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { SiInstagram } from "react-icons/si";
const Footer = () => {
  return (
    <div className='bg-[#f5f5f5] text-[#070707] h-[22rem] p-4'>
     {/* upper sections */}
     <div className="flex justify-between ">
        {/* new project */}
        <div className="">
            <a href="/aboutus">
            <p className='font-semibold text-[1.1rem] flex items-center'>Start a new project <FaArrowRight className='ml-2 text-[1rem]'/></p>
            </a>
        </div>
        {/* tilte */}
        <div className="flex -ml-[12.4rem] flex-col items-center justify-center space-y-5">
            <Image src={logo_black} className='' alt="logo"/>
            <Image src={title_image_black} className='' alt="logo"/>
        </div>

        <div className=""></div>
     </div>

     {/* lower section */}
     <div className="grid w-full place-items-center">
        <div className="w-[70%]">
            <ul className='flex mt-16 ml-6 text-xl font-semibold justify-evenly '>
                <a href="/"><li className='cursor-pointer hover:text-[#393E46] transition-all ease duration-150 '>Home</li></a>
                <a href='/projects'><li className='cursor-pointer hover:text-[#393E46] transition-all ease duration-150 '>Projects</li></a>
                <a href="/aboutus"><li className='cursor-pointer hover:text-[#393E46] transition-all ease duration-150 '>About Us</li></a>
                {/* <li className='cursor-pointer'>Contact Us</li> */}
            </ul>
        </div>
     {/* line */}
     <div className="bg-[#070707]  h-[1.8px] rounded-full w-[70%] my-5 "></div>
     {/* social media */}
     <div className="w-[70%]  flex justify-between">
        <div className="">
            <p className='font-semibold'>Terms and Conditions</p>
        </div>
        <div className="flex items-center space-x-9">
            <FiYoutube onClick={() => window.open('https://www.youtube.com/@kshatriya_studios', '_blank', '')} className='text-3xl cursor-pointer'/>
            <BsWhatsapp className='text-3xl'/>
            <CiLinkedin className='text-4xl'/>
            <SiInstagram onClick={() => window.open('https://www.instagram.com/kshatriyastudio/?igsh=N2oxeHRod20zMzhr', '_blank', '') } className='text-3xl cursor-pointer'/>
        </div>

    </div>
     </div>
    </div>
  )
}

export default Footer