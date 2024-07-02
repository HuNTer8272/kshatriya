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
    <Image src={title_image} className='w-[28rem]' alt='title'/>
    {/* line */}
    <div className="bg-white w-[28rem] h-[0.105rem] rounded-full"></div>
    <p className='my-8 text-center text-[1.3rem] font-semibolds noto-sans'>Let us breathe life in you&#39;re ideas  </p>
    {/* line2 */}
    <div className="relative bg-white w-[28rem] h-[0.1rem]  rounded-full">
      {/* square 1 */}
      <div className="absolute rotate-45 bg-white -left-[0.8rem] -top-[0.34rem] size-3"></div>
      {/* square 2 */}
      <div className="absolute rotate-45 bg-white -right-[0.8rem] -top-[0.34rem] size-3"></div>
    </div>
    {/* desc1 */}
    <div className="flex items-center m-3 mt-12 space-x-2 justify-evenly ">
        {/* commercials */}
        <div className="flex items-center space-x-2">
            {/* straight line */}
            <div className="bg-white w-[1px] h-[2rem]"></div>
            <p className='font-semibold noto-sans text-[0.9rem]'>Commercials</p>
        </div>
         {/* short films */}
        <div className="flex items-center space-x-2">
            {/* straight line */}
            <div className="bg-white w-[1px] h-[2rem]"></div>
            <p className='font-semibold noto-sans text-[0.9rem]'>Short Films</p>
        </div>
        {/* posters */}
        <div className="flex items-center space-x-2">
            {/* straight line */}
            <div className="bg-white w-[1px] h-[2rem]"></div>
            <p className='font-semibold noto-sans text-[0.9rem]'>Posters</p>
        </div>
        {/* vfx */}
        <div className="flex items-center space-x-6">
            {/* straight line */}
            <div className="bg-white w-[1px] h-[2rem]"></div>
            <p className='font-semibold noto-sans text-[0.9rem]'>VFX</p>
            {/* straight line */}
            <div className="bg-white w-[1px] h-[2rem]"></div>
        </div>

    </div>
    {/* desc2 */}
    <div className="flex items-center m-3 mt-8 space-x-2 justify-evenly ">
        {/* CGI */}
        <div className="flex items-center space-x-2">
            {/* straight line */}
            <div className="bg-white w-[1px] h-[2rem]"></div>
            <p className='font-semibold noto-sans text-[0.9rem]'>CGI</p>
        </div>
         {/* short films */}
        <div className="flex items-center space-x-2">
            {/* straight line */}
            <div className="bg-white w-[1px] h-[2rem]"></div>
            <p className='font-semibold noto-sans text-[0.9rem]'>2D</p>
        </div>
        {/* posters */}
        <div className="flex items-center space-x-8">
            {/* straight line */}
            <div className="bg-white w-[1px] h-[2rem]"></div>
            <p className='font-semibold noto-sans text-[0.9rem]'>3D</p>
            {/* straight line */}
            <div className="bg-white w-[1px] h-[2rem]"></div>
        </div>
    </div>
    {/* play button */}
    <button onClick={handleClick} className='flex items-center p-2 px-6 mt-12 space-x-3 m-auto bg-[#141213] rounded-full'><FaRegPlayCircle className='text-[1.2rem]'/><p className='text-[1rem]'>Play Reel</p></button>
  {/* <h1 className='text-5xl font-bold text-white'>Kshatriya</h1> */}
</div>
  )
}

export default Banner