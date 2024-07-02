import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { logo } from '@/helper/ImageImports'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
     <Header/>
     <div className="my-10">
       <Image src={logo} className='m-auto' alt="logo"/>
     </div>
     <Footer/>
    </>
  )
}

export default page