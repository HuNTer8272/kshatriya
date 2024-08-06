import React from 'react'
import homeStyle from '@/styles/home.module.css'
import { MdOutlineAnimation } from "react-icons/md";
import { SiAffinitydesigner } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { MdMenuBook } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { TbPhotoVideo } from "react-icons/tb";
import { RiAdvertisementFill } from "react-icons/ri";
import { LiaFileVideoSolid } from "react-icons/lia";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { FaPaintbrush } from "react-icons/fa6";
const Card = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-5 mb-12 mt-14">
      {/*2d/3d card */}
      <div className={` bg-gray-100 w-[25vw] h-[20vh] cursor-pointer rounded-lg shadow-md hover:drop-shadow-xl transition-shadow ease-in-out delay-300`}>
        <div className={`flex justify-between relative  pl-5 pr-[16.8rem]  items-center  h-[50%] ${homeStyle.icon}`}>
          <MdOutlineAnimation className='text-4xl text-[#393E46]' />
          <h2 className='text-lg font-semibold '>2D/3D Animation</h2>
        </div>
        <div className={`pl-5 text-[0.85rem] pr-5 `}>
          Bring your stories to life with stunning 2D and 3D animations that captivate and engage audiences of all ages.      
        </div>
      </div>
      
      {/*Graphic Designing */}
      <div className={` bg-gray-100 w-[25vw] h-[20vh] cursor-pointer rounded-lg shadow-md hover:drop-shadow-xl transition-shadow ease-in-out delay-300`}>
        <div className={`flex justify-between relative  pl-5 pr-[15.8rem]  items-center  h-[50%] ${homeStyle.icon}`}>
          <SiAffinitydesigner className='text-4xl text-[#393E46]' />
          <h2 className='text-lg font-semibold '>Graphic Designing</h2>
        </div>
        <div className={`pl-5 text-[0.85rem] pr-5 `}>
          Transform your vision into reality with our eye-catching graphic designs that leave a lasting impression.
        </div>
      </div>

      {/*Digital Illustration */}
      <div className={` bg-gray-100 w-[25vw] h-[20vh] cursor-pointer rounded-lg shadow-md hover:drop-shadow-xl transition-shadow ease-in-out delay-300`}>
        <div className={`flex justify-between relative  pl-5 pr-[16.5rem]  items-center  h-[50%] ${homeStyle.icon}`}>
          <FaPaintbrush className='text-4xl text-[#393E46]' />
          <h2 className='text-lg font-semibold '>Digital illustration</h2>
        </div>
        <div className={`pl-5 text-[0.85rem] pr-5 `}>
           Experience the magic of digital artistry with our custom illustrations that add depth and character to your projects.  
        </div>
      </div>

      {/*Motion Graphic */}
      <div className={` bg-gray-100 w-[25vw] h-[20vh] cursor-pointer rounded-lg shadow-md hover:drop-shadow-xl transition-shadow ease-in-out delay-300`}>
        <div className={`flex justify-between relative  pl-5 pr-[17.6rem]  items-center  h-[50%] ${homeStyle.icon}`}>
          <LiaFileVideoSolid className='text-4xl text-[#393E46]' />
          <h2 className='text-lg font-semibold '>Motion Graphic</h2>
        </div>
        <div className={`pl-5 text-[0.85rem] pr-5 `}>
          Elevate your content with dynamic motion graphics that seamlessly blend creativity and technology.
        </div>
      </div>

      {/*Storyboarding */}
      <div className={` bg-gray-100 w-[25vw] h-[20vh] cursor-pointer rounded-lg shadow-md hover:drop-shadow-xl transition-shadow ease-in-out delay-300`}>
        <div className={`flex justify-between relative  pl-5 pr-[18.1rem]  items-center  h-[50%] ${homeStyle.icon}`}>
          <MdOutlineHistoryEdu className='text-4xl text-[#393E46]' />
          <h2 className='text-lg font-semibold '>Storyboarding</h2>
        </div>
        <div className={`pl-5 text-[0.85rem] pr-5 `}>
          Visualize your narrative with our detailed storyboards that lay the foundation for compelling storytelling.
        </div>
      </div>

      {/*Video Editing */}
      <div className={` bg-gray-100 w-[25vw] h-[20vh] cursor-pointer rounded-lg shadow-md hover:drop-shadow-xl transition-shadow ease-in-out delay-300`}>
        <div className={`flex justify-between relative  pl-5 pr-[18.8rem]  items-center  h-[50%] ${homeStyle.icon}`}>
          <TbPhotoVideo className='text-4xl text-[#393E46]' />
          <h2 className='text-lg font-semibold '>Video Editing</h2>
        </div>
        <div className={`pl-5 text-[0.85rem] pr-5 `}>
          Turn raw footage into cinematic masterpieces with our professional video editing services.       
        </div>
      </div>

      {/*Cartoon & Comics */}
      <div className={` bg-gray-100 w-[25vw] h-[20vh] cursor-pointer rounded-lg shadow-md hover:drop-shadow-xl transition-shadow ease-in-out delay-300`}>
        <div className={`flex justify-between relative  pl-5 pr-[16.5rem]  items-center  h-[50%] ${homeStyle.icon}`}>
          <MdMenuBook className='text-4xl text-[#393E46]' />
          <h2 className='text-lg font-semibold '>Cartoon & Comics</h2>
        </div>
        <div className={`pl-5 text-[0.85rem] pr-5 `}>
          Delight and entertain with our vibrant cartoons and comics, perfect for all ages and media.        
        </div>
      </div>

      {/*Advertising & Logo */}
      <div className={` bg-gray-100 w-[25vw] h-[20vh] cursor-pointer rounded-lg shadow-md hover:drop-shadow-xl transition-shadow ease-in-out delay-300`}>
        <div className={`flex justify-between relative  pl-5 pr-[15.7rem]  items-center  h-[50%] ${homeStyle.icon}`}>
          <RiAdvertisementFill className='text-4xl text-[#393E46]' />
          <h2 className='text-lg font-semibold '>Advertising & Logo</h2>
        </div>
        <div className={`pl-5 text-[0.85rem] pr-5 `}>
          Make your brand unforgettable with our innovative advertising campaigns and bespoke logo designs.        
        </div>
      </div>

      {/*Social Medaia Design */}
      <div className={` bg-gray-100 w-[25vw] h-[20vh] cursor-pointer rounded-lg shadow-md hover:drop-shadow-xl transition-shadow ease-in-out delay-300`}>
        <div className={`flex justify-between relative  pl-5 pr-[15.0rem]  items-center  h-[50%] ${homeStyle.icon}`}>
          <RiInstagramFill className='text-4xl text-[#393E46]' />
          <h2 className='text-lg font-semibold '>Social Media Design</h2>
        </div>
        <div className={`pl-5 text-[0.85rem] pr-5 `}>
          Boost your online presence with striking social media designs that capture attention and drive engagement.        
        </div>
      </div>

    </div>

  )
}

export default Card