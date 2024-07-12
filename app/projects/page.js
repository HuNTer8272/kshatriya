import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import homeStyle from '@/styles/home.module.css';
import {logo_black} from '@/helper/ImageImports';
import { fight } from '@/helper/ImageImports';
import { ganpati } from '@/helper/ImageImports';
import { cat } from '@/helper/ImageImports';
import { krishina } from '@/helper/ImageImports';
import { krishina_fire } from '@/helper/ImageImports';
import { saraswati } from '@/helper/ImageImports';
import { airpods_poster } from '@/helper/ImageImports';
import { astorn_matin_poster } from '@/helper/ImageImports';
import { sneaker_poster_blue } from '@/helper/ImageImports';
import { sneaker_poster_yellow } from '@/helper/ImageImports';
import { lacoste } from '@/helper/ImageImports';
import { rolex_poster } from '@/helper/ImageImports';
import { mercedes_poster } from '@/helper/ImageImports';
import { music_show_poster } from '@/helper/ImageImports';
import { golden_mask } from '@/helper/ImageImports';
import Image from 'next/image';
import Banner from '@/components/Banner';
import ImageHoverOverlay from '@/components/ImageHoverOverlay';

const page = () => {
    return(
        <>
            <Header/>
            <Banner/>
            <div className=' w-screen flex flex-col bg-[#090909] overflow-hidden'>
                {/*3D Div */}
                <div className="bg- mt-[2rem] flex justify-center space-x-5 items-center">
                    <div className="bg-[#f5f5f5] w-[calc(98%-10rem)] h-[1px]"></div>
                    <h1 className='text-[2.1rem] font-semibold  flex items-center '>3D<div className={`${homeStyle.gradient_bg} size-2 bg-white rounded-full mt-3 ml-1 `}></div></h1>
                </div>
                <div className='mx-[4rem] grid grid-cols-2 grid-rows-3 gap-[1rem]'>
                    <div className='row-span-2'>
                        <ImageHoverOverlay 
                            src={fight} 
                            alt="Descriptive Alt Text" 
                            overlayText="Kshatriya Studios" 
                            width="25rem"
                            height="32rem"
                            right="-180px"
                        />
                    </div>
                    <ImageHoverOverlay 
                        src={fight} 
                        alt="Descriptive Alt Text" 
                        overlayText="Kshatriya Studios" 
                        width="28rem"
                        height="15rem"
                    />
                    <ImageHoverOverlay 
                    src={golden_mask} 
                    alt="Descriptive Alt Text" 
                    overlayText="Kshatriya Studios" 
                    width="28rem"
                    height="15rem"
                    />
                    <div className='col-span-2'>
                        <ImageHoverOverlay 
                            src={fight} 
                            alt="Descriptive Alt Text" 
                            overlayText="Kshatriya Studios" 
                            width="56rem"
                            height="15rem"
                            left="180px"
                        />
                    </div>
                </div>
                {/*2D*/}
                <div className="bg- mt-[2rem] flex justify-center space-x-5 items-center">
                    <div className="bg-[#f5f5f5] w-[calc(98%-10rem)] h-[1px]"></div>
                    <h1 className='text-[2.1rem] font-semibold  flex items-center '>2D<div className={`${homeStyle.gradient_bg} size-2 bg-white rounded-full mt-3 ml-1 `}></div></h1>
                </div>
                <div className='mx-[4rem] grid grid-cols-2 grid-rows-4 gap-[1rem]'>
                    
                        <ImageHoverOverlay 
                            src={ganpati} 
                            alt="Descriptive Alt Text" 
                            overlayText="Kshatriya Studios" 
                            width="25rem"
                            height="15rem"
                            left="195px"
                            
                        />
                        <div className='row-span-2'>
                            <ImageHoverOverlay 
                                src={krishina_fire} 
                                alt="Descriptive Alt Text" 
                                overlayText="Kshatriya Studios" 
                                width="25rem"
                                height="32rem"
                            />
                        </div>
                        <ImageHoverOverlay 
                        src={cat} 
                        alt="Descriptive Alt Text" 
                        overlayText="Kshatriya Studios" 
                        width="25rem"
                        height="15rem"
                        left="195px"
                        />
                        <div className='row-span-2'>
                            <ImageHoverOverlay 
                                src={krishina} 
                                alt="Descriptive Alt Text" 
                                overlayText="Kshatriya Studios" 
                                width="25rem"
                                height="32rem"
                                left="195px"
                            />
                        </div>
                        <ImageHoverOverlay 
                        src={saraswati} 
                        alt="Descriptive Alt Text" 
                        overlayText="Kshatriya Studios" 
                        width="25rem"
                        height="15rem"
                        />
                        <ImageHoverOverlay 
                        src={fight} 
                        alt="Descriptive Alt Text" 
                        overlayText="Kshatriya Studios" 
                        width="25rem"
                        height="15rem"
                        />
                </div>
                {/*Commercials */}
                {/* <div className="bg- mt-[2rem] flex justify-center space-x-5 items-center">
                    <div className="bg-[#f5f5f5] w-[calc(98%-16rem)] h-[1px]"></div>
                    <h1 className='text-[2.1rem] font-semibold  flex items-center '>Commercials<div className={`${homeStyle.gradient_bg} size-2 bg-white rounded-full mt-3 ml-1 `}></div></h1>
                </div>
                <div className='mx-[4rem] grid grid-cols-2 grid-rows-1 gap-[1rem]'>
                    <div className='col-span-2'>
                        <ImageHoverOverlay 
                            src={fight} 
                            alt="Descriptive Alt Text" 
                            overlayText="Kshatriya Studios" 
                            width="53rem"
                            height="15rem"
                            left="190px"
                        />
                    </div> 
                </div> */}
                {/*Short Films*/}
                {/* <div className="bg- mt-[2rem] flex justify-center space-x-5 items-center">
                    <div className="bg-[#f5f5f5] w-[calc(98%-16rem)] h-[1px]"></div>
                    <h1 className='text-[2.1rem] font-semibold  flex items-center '>Short Films<div className={`${homeStyle.gradient_bg} size-2 bg-white rounded-full mt-3 ml-1 `}></div></h1>
                </div>
                <div className='mx-[4rem] grid grid-cols-2 grid-rows-1 gap-[1rem]'>
                    <div className='col-span-2'>
                        <ImageHoverOverlay 
                            src={fight} 
                            alt="Descriptive Alt Text" 
                            overlayText="Kshatriya Studios" 
                            width="53rem"
                            height="15rem"
                            left="190px"
                        />
                    </div> 
                </div> */}
                {/*Posters*/}
                <div className="bg- mt-[2rem] flex justify-center space-x-5 items-center">
                    <div className="bg-[#f5f5f5] w-[calc(98%-16rem)] h-[1px]"></div>
                    <h1 className='text-[2.1rem] font-semibold  flex items-center '>Posters<div className={`${homeStyle.gradient_bg} size-2 bg-white rounded-full mt-3 ml-1 `}></div></h1>
                </div>
                <div className='mx-[4rem] grid grid-cols-2 grid-rows-6 gap-[1rem]'>
                        <div className='row-span-2'>
                            <ImageHoverOverlay 
                                src={music_show_poster} 
                                alt="Descriptive Alt Text" 
                                overlayText="Kshatriya Studios" 
                                width="25rem"
                                height="32rem"
                                left="195px"
                            />
                        </div>
                        <ImageHoverOverlay 
                        src={mercedes_poster} 
                        alt="Descriptive Alt Text" 
                        overlayText="Kshatriya Studios" 
                        width="25rem"
                        height="15rem"
                        />
                        <ImageHoverOverlay 
                        src={airpods_poster} 
                        alt="Descriptive Alt Text" 
                        overlayText="Kshatriya Studios" 
                        width="25rem"
                        height="15rem"
                        />
                        <div className='row-span-2'>
                            <ImageHoverOverlay 
                                src={sneaker_poster_blue} 
                                alt="Descriptive Alt Text" 
                                overlayText="Kshatriya Studios" 
                                width="25rem"
                                height="32rem"
                                left="195px"
                            />
                        </div>
                        <div className='row-span-2'>
                            <ImageHoverOverlay 
                                src={sneaker_poster_yellow} 
                                alt="Descriptive Alt Text" 
                                overlayText="Kshatriya Studios" 
                                width="25rem"
                                height="32rem"
                                
                            />
                        </div>
                        <ImageHoverOverlay 
                            src={astorn_matin_poster} 
                            alt="Descriptive Alt Text" 
                            overlayText="Kshatriya Studios" 
                            width="25rem"
                            height="15rem"
                            left="195px"
                        />
                        <div className='row-span-2'>
                            <ImageHoverOverlay 
                                src={lacoste} 
                                alt="Descriptive Alt Text" 
                                overlayText="Kshatriya Studios" 
                                width="25rem"
                                height="32rem"
                            />
                        </div>
                        <ImageHoverOverlay 
                        src={rolex_poster} 
                        alt="Descriptive Alt Text" 
                        overlayText="Kshatriya Studios" 
                        width="25rem"
                        height="15rem"
                        left="195px"
                        />
                </div>
                {/*Storyboarding*/}
                <div className="bg- mt-[2rem] flex justify-center space-x-5 items-center">
                    <div className="bg-[#f5f5f5] w-[calc(98%-19rem)] h-[1px]"></div>
                    <h1 className='text-[2.1rem] font-semibold  flex items-center '>Storyboarding<div className={`${homeStyle.gradient_bg} size-2 bg-white rounded-full mt-3 ml-1 `}></div></h1>
                </div>
                <div className='mx-[4rem] grid grid-cols-2 grid-rows-2 gap-[1rem]'>
                    <div className='col-span-2'>
                        <ImageHoverOverlay 
                            src={fight} 
                            alt="Descriptive Alt Text" 
                            overlayText="Kshatriya Studios" 
                            width="53rem"
                            height="15rem"
                            left="190px"
                        />
                    </div> 
                    <ImageHoverOverlay 
                        src={fight} 
                        alt="Descriptive Alt Text" 
                        overlayText="Kshatriya Studios" 
                        width="24rem"
                        height="15rem"
                        left="189px"
                    />
                    <ImageHoverOverlay 
                        src={fight} 
                        alt="Descriptive Alt Text" 
                        overlayText="Kshatriya Studios" 
                        width="27rem"
                        height="15rem"
                        right="20px"
                    />
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default page;