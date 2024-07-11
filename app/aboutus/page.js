import Navbar from '@/components/Navbar'
import {lacoste, sneaker_poster_yellow, yellow_poster } from '@/helper/ImageImports'
import Image from 'next/image'
import React from 'react'
import { useRef } from 'react'
import { FaGoogleDrive } from 'react-icons/fa'
import { FaArrowRightLong } from "react-icons/fa6";
import { PiPaperclipThin } from "react-icons/pi";
import homeStyle from '@/styles/home.module.css'


const page = () => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div>
        <Navbar/>
        <div className="">
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
        {/*Contact Us*/}
        <div>
          <div className='flex justify-center items-center gap-20 p-10'>
            <div className='w-[25rem] h-[26rem] flex justify-center'>
              <h2>Meet your new Team</h2>
            </div>
            <div className='w-[55rem] h-[26rem] flex flex-col justify-center items-center gap-3'>
              <p>Welcome to KSHATRIYA Studios, where creativity and precision come together to bring your visions to life. Founded with a passion for storytelling and a commitment to excellence, we specialize in both 2D and 3D animation. Our team of talented artists and animators is dedicated to delivering high-quality animations that captivate and inspire.
              </p>
              <p>At KSHATRIYA Studios, we offer a comprehensive range of services, from concept development and storyboard creation to character design and full-scale animated productions. Whether you're looking to create an engaging animated series, a dynamic commercial, or an educational video, we have the expertise and creativity to transform your ideas into stunning realities.
              </p>
            </div>
            <div className='w-[25rem] h-[26rem] flex flex-col justify-center items-center gap-3 '>
              <p>We pride ourselves on our ability to combine cutting-edge technology with artistic excellence, ensuring that every project we undertake is not only visually stunning but also tells a compelling story. Our collaborative approach ensures that your vision is at the heart of everything we create.
              </p>
              <p>Join us at KSHATRIYA Studios, and let us help you animate your imagination!</p>
              <div className='w-[18rem]  bg-white rounded-[20px] hover:translate-y-[-3px] hover:transition hover:ease-linear hover:drop-shadow-[0_3px_0_rgba(255,255,255,0.25)]'>
                <div className='p-5'>
                  <h3 className='text-black font-bold'>Want to get in touch?</h3>
                  <div className='size-16'></div>
                  <div className='relative left-3 flex items-end'>
                    <div className='text-black flex flex-row items-center gap-4'>
                    <p >Let's Talk</p>
                    <FaArrowRightLong/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Form Section*/}
          <div className='p-10 flex flex-col gap-20'>
            <div className='w-[20rem] font-bold'>
              <p>Let’s stay in touch! If you made it this far the only thing that’s left is saying hi. Feel free to drop us a line anytime. We keep our engines running.</p>
            </div>
            <div className='flex flex-col justify-center items-start'>
              <form className={`w-[40%] flex flex-col gap-10`}>
                {/* <div className='bg-transparent flex flex-col items-start gap-7'> */}
                 <div>
                    <input className={`${homeStyle.forminput}`} type='text' placeholder="What's your name"/>
                    <div className='h-[1px] bg-white rounded-md'></div>
                 </div>
                 <div>
                    <input className={`${homeStyle.forminput}`} type='text'placeholder="You're email"/>
                    <div className='h-[1px] bg-white rounded-md'></div>
                 </div>
                  <div>
                    <input className={`${homeStyle.forminput}`} type='text'placeholder="Tell us about your project"/>
                    <div className='h-[1px] bg-white rounded-md'></div>
                  </div>
                {/* </div> */}
                <Image src=''/>
                <input type='file'/>
                <div className='flex justify-center items-center gap-5'>
                  <input type='submit'/>
                  <FaArrowRightLong/>
                </div>
              </form>
            </div>
            <div className='w-[18rem]  bg-white rounded-[20px] hover:translate-y-[-3px] hover:transition hover:ease-linear hover:drop-shadow-[0_3px_0_rgba(255,255,255,0.25)]'>
                <div className='p-5'>
                  <h3 className='w-[12rem] text-black font-bold'>Kick-off your project.by a click of a button.</h3>
                  <div className='size-16'></div>
                  <div className='relative left-28 flex items-end'>
                    <div className='text-black flex flex-row items-center gap-4'>
                    <p>Start a project</p>
                    <FaArrowRightLong/>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default page