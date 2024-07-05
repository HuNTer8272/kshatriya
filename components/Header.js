"use client"
import React from 'react'
import headerStyle from '../styles/header.module.css'
import HomePageNavbar from './HomePageNavbar';

const Header = () => {
  
  return (
    // main div
    <div className={`${headerStyle.container} h-[100vh]`}>
        {/* nav bar */}
          <HomePageNavbar/>
       
        {/* banner */}
       
    </div>
    
  )
}

export default Header