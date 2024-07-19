export const Temp = () => {
    <div>
    <div className='flex items-center justify-center gap-20 p-10'>
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
            <h3 className='font-bold text-black'>Want to get in touch?</h3>
            <div className='size-16'></div>
            <div className='relative flex items-end left-3'>
              <div className='flex flex-row items-center gap-4 text-black'>
              <p >Let's Talk</p>
              <FaArrowRightLong/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Form Section*/}
    <div className='flex flex-col gap-20 p-10'>
      <div className='w-[20rem] font-bold'>
        <p>Let’s stay in touch! If you made it this far the only thing that’s left is saying hi. Feel free to drop us a line anytime. We keep our engines running.</p>
      </div>
      <div className='flex flex-col items-start justify-center'>
        <form className={`w-[40%] flex flex-col gap-10`}>
          {/* <div className='flex flex-col items-start bg-transparent gap-7'> */}
           <div>
              <input className={`${homeStyle.forminput}`} type='text' placeholder="What's your name" onFocus={handleFocus} onBlur={handleBlur}/>
              <div className='h-[1px] bg-white rounded-md'></div>
           </div>
           <div>
              <input className={`${homeStyle.forminput}`} type='text'placeholder="You're email" onFocus={handleFocus} onBlur={handleBlur}/>
              <div className='h-[1px] bg-white rounded-md'></div>
           </div>
           
            <div>
              <div className="flex flex-row gap-[17rem]">
                <input className={`${homeStyle.forminput}`} type='text'placeholder="Tell us about your project" onFocus={handleFocus} onBlur={handleBlur}/>
                <PiPaperclipThin onClick={handleImageClick} className="h-10 rotate-180 cursor-pointer"/>
                <input type='file' ref={fileInputRef} className="hidden" />
              </div>
                <div className='h-[1px] bg-white rounded-md'></div>
            </div>
            {/* </div> */}
            {/* <Image src={PiPaperclipThin} alt="Upload" onClick={handleImageClick} className="cursor-pointer"/> */}
            
          
          <div className='flex items-center justify-end gap-5'>
            <input type='submit'/>
            <FaArrowRightLong/>
          </div>
        </form>
      </div>
      <div className='w-[18rem]  bg-white rounded-[20px] hover:translate-y-[-3px] hover:transition hover:ease-linear hover:drop-shadow-[0_3px_0_rgba(255,255,255,0.25)]'>
          <div className='p-5'>
            <h3 className='w-[12rem] text-black font-bold'>Kick-off your project.by a click of a button.</h3>
            <div className='size-16'></div>
            <div className='relative flex items-end left-28'>
              <div className='flex flex-row items-center gap-4 text-black'>
              <p>Start a project</p>
              <FaArrowRightLong/>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
}

