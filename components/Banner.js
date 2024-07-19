"use client"
import React from 'react'
import Image from 'next/image'
import { title_image } from '@/helper/ImageImports';
import { FaRegPlayCircle } from "react-icons/fa";

const Banner = () => {
    const handleClick = () =>{
        const url = 'https://www.youtube.com/@kshatriya_studios';
        window.open(url, '_blank', '');
    }
  return (
    <div className='absolute z-10 -translate-x-1/2 -translate-y-1/2 isolate top-1/2 left-1/2'>
    <Image src={title_image} className='w-[28rem] relative top-[4.5rem]  ' alt='title'/>
    {/* line */}
    <div className="bg-white w-[28rem] h-[0.105rem] rounded-full"></div>
    <p className='my-4 text-center text-[1.3rem] capitalize font-semibolds noto-sans'>The World beyond infinity  </p>
    {/* line2 */}
    <div className="relative bg-white w-[12rem] m-auto h-[0.1rem]  rounded-full">
      {/* square 1 */}
      <div className="absolute rotate-45 bg-white -left-[0.5rem] -top-[0.21rem] size-2"></div>
      {/* square 2 */}
      <div className="absolute rotate-45 bg-white -right-[0.5rem] -top-[0.21rem] size-2"></div>
    </div>
    {/* desc1 */}
    <div className="flex items-center justify-center m-3 mt-8 space-x-8 ">
        {/* commercials */}
        <div className="flex items-center space-x-2">
            {/* straight line */}
            <div className="bg-white w-[1px] h-[2rem]"></div>
            <p className='font-semibold noto-sans text-[0.9rem] cursor-pointer hover:scale-[1.08] transition-all ease-in-out'>Storyboarding</p>
        </div>
        
        {/* posters */}
        <div className="relative flex items-center space-x-4 right-4">
            {/* straight line */}
            <div className="bg-white w-[1px] h-[2rem]"></div>
            <p className='font-semibold noto-sans text-[0.9rem] cursor-pointer hover:scale-[1.08] transition-all ease-in-out'>Posters</p>
                        {/* straight line */}
                        <div className="bg-white w-[1px] h-[2rem]"></div>

        </div>
       

    </div>
    {/* desc2 */}
    <div className="flex items-center justify-center m-3 mt-4 space-x-1 ">
       
         {/*2d */}
        <div className="relative flex items-center space-x-4 right-5">
            {/* straight line */}
            <div className="bg-white w-[1px] h-[2rem]"></div>
            <p className='font-semibold noto-sans text-[0.9rem] cursor-pointer hover:scale-[1.08] transition-all ease-in-out'>2D</p>
        </div>
        {/* 3d*/}
        <div className="flex items-center space-x-4">
            {/* straight line */}
            <div className="bg-white w-[1px] h-[2rem]"></div>
            <p className='font-semibold noto-sans text-[0.9rem] cursor-pointer hover:scale-[1.08] transition-all ease-in-out'>3D</p>
            {/* straight line */}
            <div className="bg-white w-[1px] h-[2rem]"></div>
        </div>
    </div>
    {/* play button */}
    <button onClick={handleClick} className='flex hover:scale-[1.06] hover:border-white hover:border-2 transition-all ease-in-out  hover:shadow-md items-center p-2 px-6 mt-16 space-x-3 m-auto bg-[#141213] rounded-full'><FaRegPlayCircle className='text-[1.2rem]'/><p className='text-[1rem]'>Play Reel</p></button>
  {/* <h1 className='text-5xl font-bold text-white'>Kshatriya</h1> */}
</div>
  )
}

export default Banner