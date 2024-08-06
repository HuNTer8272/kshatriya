// 'use client'

import Navbar from "@/components/Navbar";
import {
  fight,
  lacoste,
  reel_image,
  sneaker_poster_yellow,
  spiderverse,
  yellow_poster,
} from "@/helper/ImageImports";
import Image from "next/image";
import React from "react";
// import { useRef } from 'react'
import { FaGoogleDrive } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiPaperclipThin } from "react-icons/pi";
import homeStyle from "@/styles/home.module.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import { FaArrowRight } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import ImageWithBlurhash from "@/components/ImageWithHash";

const page = () => {

  return (
    <div>
      <Navbar />
      {/* <div className="bg-red-50 h-[55.75rem] relative">
          <div className="absolute bg-black opacity-[0.4] w-full h-full "></div>
          <Image src={reel_image} className='object-cover w-full h-full'/>
        </div> */}
      {/* <Header/> */}
      {/* <Banner/> */}
      <div className="">
        {/* about us section */}
        <div className=" px-[20rem] py-14 pt-24 flex mb-5 ">
          <div className="grid grid-cols-2 grid-rows-3 relative mb-10 gap-[3px] w-[14.2rem] ml-10">
            <div className="bg-[#475e57] bg-gradient-to-r from-gray-300 to-white rounded-tr-full size-[7rem]"></div>
            <div className="bg-gray-600 size-[7rem]">
              <ImageWithBlurhash
                src={yellow_poster}
                alt="Yellow Poster"
                hash="LPBfXva%0UoK~Aa$9joJ?GfSE9j@"
                className={`w-full h-full bg-cover bg-white rounded-full`}
              />
            </div>
            <div className="bg-gray-600 rounded-bl-full size-[7rem]"></div>
            <div className="bg-gray-500 size-[7rem]">
              <ImageWithBlurhash
                src={lacoste}
                alt="Lacoste"
                hash="L3CF@QDm000}{NMzXz5900]YAdE1"
                className={`w-full h-full bg-cover bg-white rounded-full`}
              />
            </div>
            <div className="bg-[#475e57] bg-gradient-to-r from-gray-300 to-white rounded-l-full size-[7rem]"></div>
            <div className="bg-gray-600 size-[7rem]">
              <ImageWithBlurhash
                src={sneaker_poster_yellow}
                alt="Sneaker Poster Yellow"
                hash="L6IqSy-Up^%L~paz$fIVB:R*MKt6"
                className={`w-full h-full bg-cover bg-white rounded-full`}
              />
            </div>
            {/* dot 1 */}
            <div className="absolute size-4 bg-[#6d6043] bg-gradient-to-r from-gray-300 to-white rounded-full bottom-2 -right-6"></div>
            {/* dot 2 */}
            <div className="absolute bg-gray-600 rounded-full size-4 bottom-11 -right-6"></div>
            {/* dot 3 */}
            <div className="absolute bg-gray-500 rounded-full size-4 bottom-20 -right-6"></div>
            {/* dot 4 */}
            <div className="absolute size-4 bg-[#706242] bg-gradient-to-r from-gray-300 to-white rounded-full bottom-[7.3rem] -right-6"></div>
          </div>

          <div className="ml-20 w-[40%] p-3  ">
            <h1 className="text-2xl font-semibold ">About Kshatriya</h1>
            <p className=" w-[50rem] text-[1.01rem] font-light mt-5">
              Welcome to KSHATRIYA Studios, where creativity meets precision to
              bring your visions to life. Specializing in 2D and 3D animation,
              our talented team is dedicated to delivering high-quality
              animations that captivate and inspire. From concept development
              and storyboard creation to character design and full-scale
              productions, we transform your ideas into stunning realities.
            </p>
            <p className=" w-[50rem] text-[1.01rem] font-light mt-5">
              We pride ourselves on our ability to combine artistic excellence
              with compelling storytelling, ensuring that every project we
              undertake is visually stunning. Join us at KSHATRIYA Studios, and
              let us help you animate your imagination!
            </p>
            <button className="bg-white flex justify-center item-center text-[#070707] p-2 font-semibold px-8 rounded-full mt-6  ">
              Contact Us <FaArrowRight className="mt-1 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* contact us */}
      <div className=" h-[50rem] mb-10 mx-[14rem]   flex p-2">
        {/* image div */}
        <div className="flex items-center justify-center w-[45%] space-x-10 ">
          <div className="relative bg-zinc-900 h-[80%] w-[25%] rounded-xl overflow-hidden  ">
            <div className="absolute h-full w-[22.3rem] z-10 opacity-[0.9]  bg-zinc-900 ">
              {/* <Image src={fight} fill className="object-cover w-full h-full" /> */}
              <ImageWithBlurhash
                src={fight}
                alt="fight"
                hash="LfCZVtCTnLvzE_xHn%NFNErqRjaK"
                className="object-cover w-full h-full"
               
              />
            </div>
          </div>
          <div className="relative bg-zinc-900 h-[80%] w-[25%] rounded-xl overflow-hidden ">
            <div className="absolute h-full w-[22.3rem] z-10 opacity-[0.9] right-0  bg-zinc-900 ">
              <ImageWithBlurhash
                  src={fight}
                  alt="fight"
                  hash="LfCZVtCTnLvzE_xHn%NFNErqRjaK"
                 className="object-cover w-full h-full"
                />

              {/* <Image src={fight} fill className="object-cover w-full h-full" /> */}
            </div>
          </div>
        </div>
        {/* input div */}
        <div className="w-1/2 p-2 py-20 ">
          <h2 className="text-[2rem] font-semibold ">Contact Us</h2>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default page;
