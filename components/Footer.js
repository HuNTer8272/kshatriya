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
            <p className='font-semibold text-[1.1rem] flex items-center'>Start a new project <FaArrowRight className='ml-2 text-[1rem]'/></p>
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
            <ul className='flex mt-16 text-xl font-semibold justify-evenly '>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Our Projects</li>
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
            <FiYoutube className='text-3xl'/>
            <BsWhatsapp className='text-3xl'/>
            <CiLinkedin className='text-4xl'/>
            <SiInstagram className='text-3xl'/>
        </div>

    </div>
     </div>
    </div>
  )
}

export default Footer