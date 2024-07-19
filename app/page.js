import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { antharamba_gif, blue_poster, donats, ganpati, logo, spiderverse, stormy_night, yellow_poster } from '@/helper/ImageImports'
import Image from 'next/image'
import React from 'react'
import homeStyle from "../styles/home.module.css"
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import ImageHoverOverlay from '@/components/ImageHoverOverlay'

const page = () => {
  return (
  <>
     <Header/>
     <Banner/>
     {/* main div */}
     <div className="my-10">
      {/* introduction div */}
      <div className="">
       <Image src={logo} className='m-auto' alt="logo"/>
         {/* intorduction text */}
         <div className="m-auto  w-[45rem] mt-8 flex justify-center items-center flex-col">
               <h2 className='font-semibold uppercase text-[2.1rem]'>Welcome to</h2>
               <h2 className={`font-semibold uppercase text-[2.1rem] -mt-2 ${homeStyle.gradient_text}`}>KSHATRIYA STUDIO</h2>
               <h2 className='mt-10 font-semibold'>Help us bring your stories to life.</h2>
               <p className='mt-3 text-center font-extralight'>Kashatriya Studios is a dynamic animation studio specializing in creating captivating animated content for various platforms. We offer services in 2D and 3D animation, visual effects, and motion graphics, targeting both entertainment and corporate sectors. Our unique storytelling approach and high-quality animations is what sets us apart in the industry.</p>
         </div>
      </div>
      {/* project title div */}
      <div className="bg- mx-[20rem]  mt-[9rem] flex justify-center space-x-5 items-center">
         <div className="bg-[#828282] w-[calc(98%-11rem)] h-[1px]"></div>
         <h1 className='text-[2.1rem] font-semibold  flex items-center '>Projects<div className={`${homeStyle.gradient_bg} size-2 bg-white rounded-full mt-3 ml-1 `}></div></h1>
      </div>
      {/* project div */}
      <div className="flex items-center justify-center ">
          {/* project container */}
          <div className=" my-[4.5rem] grid grid-cols-2 grid-rows-6  gap-[1rem]">
               <div className="col-span-2  bg-zinc-900 shadow-md shadow-zinc-950 rounded-xl w-[77rem] h-[26rem]">
                  <ImageHoverOverlay 
                                   src={antharamba_gif} 
                                   alt="Descriptive Alt Text" 
                                   overlayText="Kshatriya Studios" 
                                   className={'w-full h-full text-2xl font-semibold '}
                               />
               </div>
               <div className=" bg-zinc-900 w-[38rem] rounded-xl h-[26rem]">
                  <ImageHoverOverlay 
                                   src={stormy_night} 
                                   alt="Descriptive Alt Text" 
                                   overlayText="Kshatriya Studios" 
                                   className={'w-full h-full text-2xl font-semibold '}
                               />
               </div>
               <div className=" bg-zinc-900 w-[38rem] rounded-xl h-[53rem] row-span-2">
                  <ImageHoverOverlay 
                                   src={donats} 
                                   alt="Descriptive Alt Text" 
                                   overlayText="Kshatriya Studios" 
                                   className={'w-full h-full text-2xl font-semibold '}
                               />
               </div>
               <div className=" bg-zinc-900 w-[38rem] rounded-xl h-[26rem]">
                  <ImageHoverOverlay 
                                   src={ganpati} 
                                   alt="Descriptive Alt Text" 
                                   overlayText="Kshatriya Studios" 
                                   className={'w-full h-full text-2xl font-semibold '}
                               />
               </div>
               <div className="col-span-2 bg-zinc-900 rounded-xl w-[77rem] h-[26rem]">
                  <ImageHoverOverlay 
                                   src={spiderverse} 
                                   alt="Descriptive Alt Text" 
                                   overlayText="Kshatriya Studios" 
                                   className={'w-full h-full text-2xl font-semibold '}
                               />
               </div>
               <div className=" bg-zinc-900 w-[38rem] rounded-xl h-[52rem] row-span-2">
                  <ImageHoverOverlay 
                                   src={yellow_poster} 
                                   alt="Descriptive Alt Text" 
                                   overlayText="Kshatriya Studios" 
                                   className={'w-full h-full text-2xl font-semibold '}
                               />
               </div>
               <div className=" bg-zinc-900 w-[38rem] rounded-xl h-[52rem] row-span-2">
                  <ImageHoverOverlay 
                                   src={blue_poster} 
                                   alt="Descriptive Alt Text" 
                                   overlayText="Kshatriya Studios" 
                                   className={'w-full h-full text-2xl font-semibold '}
                               />
               </div>
          </div>
      </div>
      {/* our services  */}
      <div className="bg-[#f5f5f5] text-[#070707] flex items-center flex-col p-3 h-[30rem]">
        <h1 className='font-semibold text-[1.8rem] mt-3'>Our Services</h1>
        <p className='w-[35rem] mt-5 text-center text-[18px] '> At Kshatriya Studios, we are more than just a production house we are storytellers, artists, and visionaries dedicated to crafting immersive experiences that captivate audiences worldwide.</p>
        <div className="grid grid-cols-3 grid-rows-3  mt-14 w-[65rem] gap-3 ">
            <div className='bg-[#D9D9D9] bg-gray-50 cursor-pointer hover:scale-[1.08] transition-all ease-in-out duration-200 shadow-md h-[3rem] flex justify-center items-center font-semibold w-[20rem] text-[20px] mb-3 rounded-xl'>2D/3D Animation</div>
            <div className='bg-[#D9D9D9] bg-gray-50 cursor-pointer hover:scale-[1.08] transition-all ease-in-out duration-200 shadow-md h-[3rem] flex justify-center items-center font-semibold w-[20rem] mb-3 text-[20px] rounded-xl'>Graphic Designing</div>
            <div className='bg-[#D9D9D9] bg-gray-50 cursor-pointer hover:scale-[1.08] transition-all ease-in-out duration-200 shadow-md h-[3rem] flex justify-center items-center font-semibold w-[20rem] mb-3 text-[20px] rounded-xl'>Digital Illustrations</div>
            <div className='bg-[#D9D9D9] bg-gray-50 cursor-pointer hover:scale-[1.08] transition-all ease-in-out duration-200 shadow-md h-[3rem] flex justify-center items-center font-semibold w-[20rem] mb-3 text-[20px] rounded-xl'>Motion Graphics</div>
            <div className='bg-[#D9D9D9] bg-gray-50 cursor-pointer hover:scale-[1.08] transition-all ease-in-out duration-200 shadow-md h-[3rem] flex justify-center items-center font-semibold w-[20rem] mb-3 text-[20px] rounded-xl'>Storyboarding</div>
            <div className='bg-[#D9D9D9] bg-gray-50 cursor-pointer hover:scale-[1.08] transition-all ease-in-out duration-200 shadow-md h-[3rem] flex justify-center items-center font-semibold w-[20rem] mb-3 text-[20px] rounded-xl'>Video Editing</div>
            <div className='bg-[#D9D9D9] bg-gray-50 cursor-pointer hover:scale-[1.08] transition-all ease-in-out duration-200 shadow-md h-[3rem] flex justify-center items-center font-semibold w-[20rem] mb-3 text-[20px] rounded-xl'>Cartoons & Comics</div>
            <div className='bg-[#D9D9D9] bg-gray-50 cursor-pointer hover:scale-[1.08] transition-all ease-in-out duration-200 shadow-md h-[3rem] flex justify-center items-center font-semibold w-[20rem] mb-3 text-[20px] rounded-xl'>Advertising & logo</div>
            <div className='bg-[#D9D9D9] bg-gray-50 cursor-pointer hover:scale-[1.08] transition-all ease-in-out duration-200 shadow-md h-[3rem] flex justify-center items-center font-semibold w-[20rem] mb-3 text-[20px] rounded-xl'>Social Media Design</div>
        </div>
      </div>
      {/* get in touch */}
      <div className='h-[20rem] p-5 items-center flex-col flex justify-center'>
          <h1 className='font-semibold text-[1.5rem] mt-10'>Want to get in touch ? </h1>
          <p className='font-extralight   w-[40rem] text-[18px] text-center mt-8'>At Kashatriya Studios, we're passionate about bringing your stories to life with our cutting-edge animation services. Whether you have a project in mind, need a quote, or just want to learn more about what we do, we'd love to hear from you!</p>
      </div>
     </div>
     {/* <Footer/> */}
    </>
  )
}

export default page