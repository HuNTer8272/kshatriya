'use client'

import Navbar from '@/components/Navbar'
import {fight, lacoste, sneaker_poster_yellow, spiderverse, yellow_poster } from '@/helper/ImageImports'
import Image from 'next/image'
import React from 'react'
import { useRef } from 'react'
import { FaGoogleDrive } from 'react-icons/fa'
import { FaArrowRightLong } from "react-icons/fa6";
import { PiPaperclipThin } from "react-icons/pi";
import homeStyle from '@/styles/home.module.css'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import { FaArrowRight } from "react-icons/fa";


const page = () => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFocus = (e) => {
    e.target.style.setProperty('--placeholder-font-weight', 'bold');
  };

  const handleBlur = (e) => {
    e.target.style.setProperty('--placeholder-font-weight', 'normal');
  };

  return (
    <div>
        {/* <Navbar/> */}
        <Header/>
        {/* <Banner/> */}
        <div className="">
          {/* about us section */}
            <div className=" px-[20rem] py-2 flex mb-5 ">
               <div className="grid grid-cols-2 grid-rows-3 relative mb-10  gap-[3px] w-[14.2rem] ml-10">
                  <div className="bg-[#475e57] bg-gradient-to-r from-gray-300 to-white   rounded-tr-full size-[7rem]"></div>
                  <div className="bg-gray-600   size-[7rem]">
                    <Image className='w-full h-full  bg-[#ebede8] rounded-full bg-cover ' src={yellow_poster} alt='logo'/>
                  </div>
                  <div className="bg-gray-600    rounded-bl-full size-[7rem]"></div>
                  <div className="bg-gray-500   size-[7rem]">
                    <Image className='w-full h-full  bg-[#ebede8] bg-cover rounded-full' src={lacoste} alt='logo'/>
                  </div>
                  <div className="bg-[#475e57] bg-gradient-to-r from-gray-300 to-white  rounded-l-full size-[7rem]"></div>
                  <div className="bg-gray-600 size-[7rem]">
                    <Image className='w-full h-full  bg-[#ebede8] rounded-full' src={sneaker_poster_yellow} alt='logo'/>
                  </div>
                {/* dot 1 */}
                <div className="absolute size-4 bg-[#6d6043] bg-gradient-to-r from-gray-300 to-white  rounded-full bottom-2 -right-6"></div>
                {/* dot 2 */}
                <div className="absolute bg-gray-600 rounded-full size-4 bottom-11 -right-6"></div>
                {/* dot 3 */}
                <div className="absolute bg-gray-500 rounded-full size-4 bottom-20 -right-6"></div>
                {/* dot 4 */}
                <div className="absolute size-4 bg-[#706242] bg-gradient-to-r from-gray-300 to-white  rounded-full bottom-[7.3rem] -right-6"></div>

               </div>

            <div className="ml-20 w-[40%] p-3  ">
                <h1 className="text-2xl font-semibold ">About Kshatriya</h1>
                <p className=' w-[50rem] text-[1.01rem] font-light mt-5'>Welcome to KSHATRIYA Studios, where creativity meets precision to bring your visions to life. Specializing in 2D and 3D animation, our talented team is dedicated to delivering high-quality animations that captivate and inspire. From concept development and storyboard creation to character design and full-scale productions, we transform your ideas into stunning realities.</p>
                <p className=" w-[50rem] text-[1.01rem] font-light mt-5">We pride ourselves on our ability to combine artistic excellence with compelling storytelling, ensuring that every project we undertake is visually stunning. Join us at KSHATRIYA Studios, and let us help you animate your imagination!</p>
                <button className='bg-white flex justify-center item-center text-[#070707] p-2 font-semibold px-8 rounded-full mt-6  '>Contact Us <FaArrowRight className='mt-1 ml-2'/></button>
            </div>
            </div>
        </div>
        
        {/* contact us */}
        <div className="bg-rose-500 h-[50rem] mb-10 mx-[20rem] flex p-2">
           {/* image div */}
           <div className="flex items-center justify-center w-1/2 space-x-10 bg-purple-400 ">
               <div className="relative bg-zinc-900 h-[80%] w-[25%] rounded-xl overflow-hidden  ">
                 <div className="absolute h-full w-[22.3rem] z-10 opacity-[0.9]  bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 ">
                    <Image src={fight} fill className='object-cover w-full h-full' />
                 </div>
               </div>
               <div className="relative bg-zinc-900 h-[80%] w-[25%] rounded-xl overflow-hidden ">
                <div className="absolute h-full w-[22.3rem] z-10 opacity-[0.9] right-0  bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 ">
                     <Image src={fight} fill className='object-cover w-full h-full' />
                  </div>
               </div>
           </div>
           {/* input div */}
           <div className="w-1/2 bg-teal-400">

           </div>
        </div>
    </div>
  )
}

export default page