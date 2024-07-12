import { logo, title_image } from '@/helper/ImageImports'
import Image from 'next/image'
import React from 'react'
import { LuMenu } from "react-icons/lu";


const HomePageNavbar = () => {
  return (
    <nav className='absolute z-10 flex justify-between w-full p-3 px-5 isolate '>

    {/* logo and title */}
    <div className="fixed flex items-center bg-transparent bg-purple-400">
      <Image src={logo} className='size-12 ' alt="logo" />
      <Image src={title_image} className='w-[10rem] ml-2 mt-4 h-[6rem]' alt="logo" />
    </div>
    <div className="size-[6rem]"></div>
    {/* hamburger */}
    <div className="flex items-center justify-center space-x-10 bg-">
      <div className="">
        <ul className='flex text-[1rem] font-semibold uppercase space-x-8 '>
          <a href="">
          <li className="relative after:bg-white cursor-pointer after:content-[''] after:transition-all after:ease-in-out hover:after:w-full after:-bottom-1 after:left-0 after:absolute after:w-[0px] after:h-[2px]">Home</li>
          </a>
          <a href="">
          <li className="relative after:bg-white cursor-pointer after:content-[''] after:transition-all after:ease-in-out hover:after:w-full after:-bottom-1 after:left-0 after:absolute after:w-[0px] after:h-[2px]">Projects</li>
          </a>
          <a href="/aboutus">
          <li className="relative after:bg-white cursor-pointer after:content-[''] after:transition-all after:ease-in-out hover:after:w-full after:-bottom-1 after:left-0 after:absolute after:w-[0px] after:h-[2px] mr-[2rem] ">About us</li>
          </a>
        </ul>
      </div>
       <LuMenu className='text-[2rem]   font-semibold cursor-pointer'/>
    </div>
  </nav>
  )
}

export default HomePageNavbar