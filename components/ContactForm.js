"use client"
import React from 'react'
import { IoLogoYoutube } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const ContactForm = () => {
  return (
    <div className=''>
            <div className="flex my-14  space-x-[14rem] ">
                  <div className="space-y-1">
                    <h3 className='uppercase  text-[0.9rem]'>Phone</h3>
                    <p className='text-[0.9rem] flex justify-center items-center'><FaPhone className='mr-2' />+91 75061 72282</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className='uppercase  text-[0.9rem]'>email</h3>
                    <p className='text-[0.9rem] flex justify-center items-center'><MdEmail className='mr-2' />kshatriyastudios@gmail.com</p>
                  </div>
              </div> 

               <div className="flex flex-col space-y-5 ">
                <input type="text" className='w-[36rem] bg-zinc-800 outline-none text-[#f5f5f5] placeholder-zinc-600 p-2  rounded-md pl-3' placeholder='Name' />
                <input type="email" className='w-[36rem] bg-zinc-800 outline-none text-[#f5f5f5] placeholder-zinc-600 p-2  rounded-md pl-3' placeholder='Email' />
                <textarea type="text" className='w-[36rem] h-28 resize-none  bg-zinc-800 outline-none text-[#f5f5f5] placeholder-zinc-600 p-2  rounded-md pl-3' placeholder='Message' ></textarea>
                <button className='bg-[#f5f5f5] w-[12rem] p-2 text-[#070707] font-semibold  rounded-full text-[0.9rem] hover:scale-[1.06] ease-in-out transition-all duration-100 uppercase  '>Send Message</button>
              </div>

              <div className="flex mt-16   space-x-[14rem]  ">
                  <div className="space-y-1">
                    <h3 className='uppercase  text-[0.9rem]'>Instagram</h3>
                    <p className='text-[0.9rem] flex justify-center items-center '><IoLogoInstagram onClick={() => window.open('https://www.instagram.com/kshatriyastudio/?igsh=N2oxeHRod20zMzhr', '_blank', '') } className="mr-2 text-[1.1rem] cursor-pointer"/>kshatriyastudio</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className='uppercase  text-[0.9rem]'>Youtube</h3>
                    <p className='text-[0.9rem] flex justify-center items-center '><IoLogoYoutube onClick={() => window.open('https://www.youtube.com/@kshatriya_studios', '_blank', '')} className='mr-2 cursor-pointer'/>KshatriyaStudio's</p>
                  </div>
              </div>


        
    </div>
  )
}

export default ContactForm