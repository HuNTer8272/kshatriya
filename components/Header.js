"use client"
import React from 'react'
import Navbar from './Navbar';
import headerStyle from '../styles/header.module.css'

const Header = () => {
    const handleClick = () =>{
        const url = 'https://www.youtube.com/@kshatriya_studios';
        window.open(url, '_blank', '');
    }
  return (
    // main div
    <div className={`${headerStyle.container} h-[100vh]`}>
        {/* nav bar */}
          <Navbar/>
       
        {/* banner */}
       
    </div>
    
  )
}

export default Header