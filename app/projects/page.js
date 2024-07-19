import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import homeStyle from '@/styles/home.module.css';
import {blue_poster, cars3, donats, hell_poster, logo_black, stormy_night, storyboard_puss_n_boots, storyboard_stormy_nights, storyboard_traveller, yellow_poster} from '@/helper/ImageImports';
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
                <div className="bg- mx-[12rem]  mt-[5rem] mb-[2rem] flex justify-center space-x-5 items-center">
                  <div className="bg-[#828282] w-[calc(98%-11rem)] h-[1px]"></div>
                  <h1 className='text-[2.1rem] font-semibold  flex items-center '>3D<div className={`${homeStyle.gradient_bg} size-2 bg-white rounded-full mt-3 ml-1 `}></div></h1>
                </div>
                <div className='mx-[16rem]  w-[calc(100%-33rem)]   grid grid-cols-2 grid-rows-4 gap-[1rem]'>
                    <div className='row-span-2 relative bg-zinc-900 h-[53rem] rounded-xl '>
                        <ImageHoverOverlay 
                            src={donats} 
                            alt="Descriptive Alt Text" 
                            overlayText="Kshatriya Studios" 
                            className={'w-full h-full text-2xl font-semibold '}
                        />
                        
                    </div>
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                    <ImageHoverOverlay 
                            src={stormy_night} 
                            alt="Descriptive Alt Text" 
                            overlayText="Kshatriya Studios" 
                            className={'w-full h-full text-2xl font-semibold '}
                        />
                         
                    </div>
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                    <ImageHoverOverlay 
                            src={golden_mask} 
                            alt="Descriptive Alt Text" 
                            overlayText="Kshatriya Studios" 
                            className={'w-full h-full text-2xl font-semibold '}
                        />                        
                    </div>
                   
                    <div className='col-span-2 row-span-2 h-[36rem] rounded-xl bg-zinc-900'>
                        <ImageHoverOverlay 
                                src={cars3} 
                                alt="Descriptive Alt Text" 
                                overlayText="Kshatriya Studios" 
                                className={'w-full h-full bg-contain text-2xl font-semibold '}
                            />                        
                    </div>
                </div>
                {/*2D*/}
                <div className="bg- mx-[12rem]  -mt-[12rem] mb-[2rem] flex justify-center space-x-5 items-center">
                  <div className="bg-[#828282] w-[calc(98%-11rem)] h-[1px]"></div>
                  <h1 className='text-[2.1rem] font-semibold  flex items-center '>2D<div className={`${homeStyle.gradient_bg} size-2 bg-white rounded-full mt-3 ml-1 `}></div></h1>
                </div>
                <div className='mx-[16rem]  w-[calc(100%-33rem)] grid grid-cols-2 grid-rows-4 gap-[1rem]'>
                    
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                        <ImageHoverOverlay 
                                src={ganpati} 
                                alt="Descriptive Alt Text" 
                                overlayText="Kshatriya Studios" 
                                className={'w-full h-full text-2xl font-semibold '}
                            />

                        
                    </div>
                    <div className='row-span-2 bg-zinc-900 h-[53rem] rounded-xl '>
                        <ImageHoverOverlay 
                                src={krishina_fire} 
                                alt="Descriptive Alt Text" 
                                overlayText="Kshatriya Studios" 
                                className={'w-full h-full text-2xl font-semibold '}
                            />

                        
                    </div>
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                        <ImageHoverOverlay 
                                src={cat} 
                                alt="Descriptive Alt Text" 
                                overlayText="Kshatriya Studios" 
                                className={'w-full h-full text-2xl font-semibold '}
                            />
                    </div>
                    
                    <div className='row-span-2 bg-zinc-900 h-[53rem] rounded-xl '>
                        <ImageHoverOverlay 
                                src={krishina} 
                                alt="Descriptive Alt Text" 
                                overlayText="Kshatriya Studios" 
                                className={'w-full h-full text-2xl font-semibold '}
                            />

                        
                    </div>
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                        <ImageHoverOverlay 
                                src={saraswati} 
                                alt="Descriptive Alt Text" 
                                overlayText="Kshatriya Studios" 
                                className={'w-full h-full text-2xl font-semibold '}
                            />

                        
                    </div>
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                        <ImageHoverOverlay 
                                src={fight} 
                                alt="Descriptive Alt Text" 
                                overlayText="Kshatriya Studios" 
                                className={'w-full h-full text-2xl font-semibold '}
                            />

                        
                    </div>
                </div>
               
                {/*Posters*/}
                <div className="bg- mx-[12rem]  mt-[5rem] mb-[2rem] flex justify-center space-x-5 items-center">
                  <div className="bg-[#828282] w-[calc(98%-16rem)] h-[1px]"></div>
                  <h1 className='text-[2.1rem] font-semibold  flex items-center '>Posters<div className={`${homeStyle.gradient_bg} size-2 bg-white rounded-full mt-3 ml-1 `}></div></h1>
                </div>
                <div className='mx-[16rem]  w-[calc(100%-33rem)] grid grid-cols-2 grid-rows-6 gap-[1rem]'>
                    <div className='row-span-2 bg-zinc-900 h-[53rem] rounded-xl '>
                        <ImageHoverOverlay 
                                src={music_show_poster} 
                                alt="Descriptive Alt Text" 
                                overlayText="Kshatriya Studios" 
                                className={'w-full h-full text-2xl font-semibold '}
                            /> 
                    </div>
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                        <ImageHoverOverlay 
                                src={mercedes_poster} 
                                alt="Descriptive Alt Text" 
                                overlayText="Kshatriya Studios" 
                                className={'w-full h-full text-2xl font-semibold '}
                            />  
                    </div>
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                        <ImageHoverOverlay 
                                src={airpods_poster} 
                                alt="Descriptive Alt Text" 
                                overlayText="Kshatriya Studios" 
                                className={'w-full h-full text-2xl font-semibold '}
                            />                        
                    </div>
                    <div className='row-span-2 bg-zinc-900 h-[53rem] rounded-xl '>
                        <ImageHoverOverlay 
                                src={sneaker_poster_blue} 
                                alt="Descriptive Alt Text" 
                                overlayText="Kshatriya Studios" 
                                className={'w-full h-full text-2xl font-semibold '}
                            />                        
                    </div>
                    <div className='row-span-2 bg-zinc-900 h-[53rem] rounded-xl '>
                        <ImageHoverOverlay 
                                src={sneaker_poster_yellow} 
                                alt="Descriptive Alt Text" 
                                overlayText="Kshatriya Studios" 
                                className={'w-full h-full text-2xl font-semibold '}
                            />
                    </div>
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                        <ImageHoverOverlay 
                                    src={astorn_matin_poster} 
                                    alt="Descriptive Alt Text" 
                                    overlayText="Kshatriya Studios" 
                                    className={'w-full h-full text-2xl font-semibold '}
                                />
                    </div>
                    <div className='row-span-2 bg-zinc-900 h-[53rem] rounded-xl '>
                        <ImageHoverOverlay 
                                    src={lacoste} 
                                    alt="Descriptive Alt Text" 
                                    overlayText="Kshatriya Studios" 
                                    className={'w-full h-full text-2xl font-semibold '}
                                />
                    </div>
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                        <ImageHoverOverlay 
                                    src={rolex_poster} 
                                    alt="Descriptive Alt Text" 
                                    overlayText="Kshatriya Studios" 
                                    className={'w-full h-full text-2xl font-semibold '}
                                />
                    </div>
                   
                </div>
                {/*Storyboarding*/}
                <div className="bg- mx-[12rem]   mt-[5rem] mb-[2rem] flex justify-center space-x-5 items-center">
                  <div className="bg-[#828282] w-[calc(98%-23rem)] h-[1px]"></div>
                  <h1 className='text-[2.1rem] font-semibold  flex items-center '>Storyboarding<div className={`${homeStyle.gradient_bg} size-2 bg-white rounded-full mt-3 ml-1 `}></div></h1>
                </div>
                <div className='mx-[16rem]  w-[calc(100%-34rem)] mb-[3rem]  grid grid-cols-2 grid-rows-2 gap-[1rem]'>
                    <div className='col-span-2 h-[30rem] rounded-xl bg-zinc-900'>
                        <ImageHoverOverlay 
                                    src={storyboard_stormy_nights} 
                                    alt="Descriptive Alt Text" 
                                    overlayText="Kshatriya Studios" 
                                    className={'w-full h-full text-2xl font-semibold '}
                                />
                    </div>
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                        <ImageHoverOverlay 
                                    src={storyboard_puss_n_boots} 
                                    alt="Descriptive Alt Text" 
                                    overlayText="Kshatriya Studios" 
                                    className={'w-full h-full text-2xl font-semibold '}
                                />
                    </div>
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                        <ImageHoverOverlay 
                                    src={storyboard_traveller} 
                                    alt="Descriptive Alt Text" 
                                    overlayText="Kshatriya Studios" 
                                    className={'w-full h-full text-2xl font-semibold '}
                                />
                    </div>
                    {/* <ImageHoverOverlay 
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
                    /> */}
                   
                </div>
            </div>
            {/* <Footer/> */}
        </>
    );
}

export default page;