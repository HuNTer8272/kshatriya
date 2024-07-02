import { logo, titleImage } from '@/helper/ImageImports'
import Image from 'next/image'
import React from 'react'
import { LuMenu } from "react-icons/lu";


const Navbar = () => {
  return (
    <nav className='absolute z-10 flex justify-between w-full p-3 px-5 isolate '>

    {/* logo and title */}
    <div className="flex items-center bg-transparent bg-purple-400">
      <Image src={logo} className='size-12 ' alt="logo" />
      <Image src={titleImage} className='w-[8rem] ml-2 mt-4 h-[3rem]' alt="logo" />
    </div>
    {/* hamburger */}
    <div className="flex items-center justify-center bg-transparent bg-blue-300">
       <LuMenu className='text-[2rem] font-semibold cursor-pointer'/>
    </div>
  </nav>
  )
}

export default Navbar