import Navbar from '@/components/Navbar'
import {    lacoste, sneaker_poster_yellow, yellow_poster } from '@/helper/ImageImports'
import Image from 'next/image'
import React from 'react'
import { FaGoogleDrive } from 'react-icons/fa'




const page = () => {
  return (
    <div>
        <Navbar/>
        <div className="h-screen">
            <div className="">
               <div className="grid grid-cols-2 grid-rows-3 relative mb-10  gap-[3px] w-[10.2rem] ml-10">
                  <div className="bg-[#475e57] bg-gradient-to-r from-gray-300 to-white  bg-gradient-to-r from-[#ef9868] to-[#fdab32] rounded-tr-full size-[5rem]"></div>
                  <div className="bg-[#6d5e4c] bg-gradient-to-r from-[#665d5b] to-[#6d6155]  size-[5rem]">
                    <Image className='w-full h-full  bg-[#ebede8] rounded-full bg-cover ' src={yellow_poster} alt='logo'/>
                  </div>
                  <div className="bg-[#58504e]   rounded-bl-full size-[5rem]"></div>
                  <div className="bg-[#515b47] bg-gray-300 bg-[#f0a967] size-[5rem]">
                    <Image className='w-full h-full  bg-[#ebede8] bg-cover rounded-full' src={lacoste} alt='logo'/>
                  </div>
                  <div className="bg-[#475e57] bg-gradient-to-r from-gray-300 to-white bg-gradient-to-r from-[#ef9868] to-[#fdab32] rounded-l-full size-[5rem]"></div>
                  <div className="bg-[#6d5e4c] bg-gradient-to-r from-[#665d5b] to-[#6d6155] size-[5rem]">
                    <Image className='w-full h-full  bg-[#ebede8] rounded-full' src={sneaker_poster_yellow} alt='logo'/>
                  </div>
                {/* dot 1 */}
                <div className="absolute size-4 bg-[#6d6043] bg-gradient-to-r from-gray-300 to-white bg-gradient-to-r from-[#ef9868] to-[#fdab32] rounded-full bottom-2 -right-6"></div>
                {/* dot 2 */}
                <div className="absolute size-4 bg-[#565350] rounded-full bottom-11 -right-6"></div>
                {/* dot 3 */}
                <div className="absolute size-4 bg-[#7d7a77] rounded-full bottom-20 -right-6"></div>
                {/* dot 4 */}
                <div className="absolute size-4 bg-[#706242] bg-gradient-to-r from-gray-300 to-white bg-gradient-to-r from-[#ef9868] to-[#fdab32] rounded-full bottom-[7.3rem] -right-6"></div>

               </div>

            </div>
        </div>
    </div>
  )
}

export default page