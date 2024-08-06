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
import Navbar from '@/components/Navbar';

const page = () => {
    return(
        <>
            <Navbar/>
            {/* <Header/> */}
            {/* <Banner/> */}
            <div className='flex flex-col w-screen overflow-hidden '>
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
                            overlayText="heavenly donuts" 
                            catg={'3d'}
                            className={'w-full h-full text-2xl font-semibold '}
                            hash={'LGPW@c.S^SIT%}%eRhNa}^I,K0%3'}
                        />
                        
                    </div>
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                    <ImageHoverOverlay 
                            src={stormy_night} 
                            alt="Descriptive Alt Text" 
                            overlayText="stormy night" 
                            catg={'3d'}
                            className={'w-full h-full text-2xl font-semibold '}
                            hash={'L384oW_M-g000G00^y-:t-$mtK9b'}
                        />
                         
                    </div>
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                    <ImageHoverOverlay 
                            src={golden_mask} 
                            alt="Descriptive Alt Text" 
                            overlayText="Visualizer" 
                            catg={'3d'}
                            className={'w-full h-full text-2xl font-semibold '}
                            hash={'L53b]+T2A1%MpfbwWUkXD+sR-3NJ'}
                        />                        
                    </div>
                   
                    <div className='col-span-2 row-span-2 h-[36rem] rounded-xl bg-zinc-900'>
                        <ImageHoverOverlay 
                                src={cars3} 
                                alt="Descriptive Alt Text" 
                                overlayText="cars3" 
                                catg={'motion poster | 3d'}
                                className={'w-full h-full bg-contain text-2xl font-semibold '}
                                hash={'L45z{=of0LV[R*j[soay0yWB}toy'}
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
                                overlayText="concept design" 
                                catg={'digital illustration'}
                                className={'w-full h-full text-2xl font-semibold '}
                                hash={'LQIobsj_9tR*EFoNxljcK6R*NLsq'}
                            />

                        
                    </div>
                    <div className='row-span-2 bg-zinc-900 h-[53rem] rounded-xl '>
                        <ImageHoverOverlay 
                                src={krishina_fire} 
                                alt="Descriptive Alt Text" 
                                overlayText="poster" 
                                catg={'digital illustration'}
                                className={'w-full h-full text-2xl font-semibold '}
                                hash={'LBLLmi}*^Yxt1kJ*RPRn06wf9dw|'}
                            />

                        
                    </div>
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                        <ImageHoverOverlay 
                                src={cat} 
                                alt="Descriptive Alt Text" 
                                overlayText="concept design"
                                catg={'digital illustration'} 
                                className={'w-full h-full text-2xl font-semibold '}
                                hash={'L58N;SUu4Ou6ByVt;AcFv$OWEyr;'}
                            />
                    </div>
                    
                    <div className='row-span-2 bg-zinc-900 h-[53rem] rounded-xl '>
                        <ImageHoverOverlay 
                                src={krishina} 
                                alt="Descriptive Alt Text" 
                                overlayText="poster"
                                catg={'digital illustration'} 
                                className={'w-full h-full text-2xl font-semibold '}
                                hash={'LHAnM+n4Ejki.mxvxBSwp_t9w0jF'}
                            />

                        
                    </div>
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                        <ImageHoverOverlay 
                                src={saraswati} 
                                alt="Descriptive Alt Text" 
                                overlayText="concept design" 
                                catg={'digital illustration'}
                                className={'w-full h-full text-2xl font-semibold '}
                                hash={'LJCSKsHX8wE;~jM|IARprwbvR$sl'}
                            />

                        
                    </div>
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                        <ImageHoverOverlay 
                                src={fight} 
                                alt="Descriptive Alt Text" 
                                overlayText="concept design" 
                                catg={'digital illustration'}
                                className={'w-full h-full text-2xl font-semibold '}
                                hash={'LfCZVtCTnLvzE_xHn%NFNErqRjaK'}
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
                                overlayText="poster" 
                                catg={'music fesitval'}
                                className={'w-full h-full text-2xl font-semibold '}
                                hash={'LMFgPi-txrsjJfo$W-W9O5t6bIf8'}
                            /> 
                    </div>
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                        <ImageHoverOverlay 
                                src={mercedes_poster} 
                                alt="Descriptive Alt Text" 
                                overlayText="poster"
                                catg={'mercedes 300 sl'} 
                                className={'w-full h-full text-2xl font-semibold '}
                                hash={'L56@{1~qt7xuo}M|M{M{4n9FM{M|'}
                            />  
                    </div>
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                        <ImageHoverOverlay 
                                src={airpods_poster} 
                                alt="image" 
                                overlayText="poster"
                                catg={'apple air pods '} 
                                className={'w-full h-full text-2xl font-semibold '}
                                hash={'L15q|sof00WB%MxuD%IU00ay_3of'}
                            />                        
                    </div>
                    <div className='row-span-2 bg-zinc-900 h-[53rem] rounded-xl '>
                        <ImageHoverOverlay 
                                src={sneaker_poster_blue} 
                                alt="image" 
                                overlayText="poster"
                                catg={'nike'} 
                                className={'w-full h-full text-2xl font-semibold '}
                                hash={'L5EM?$e.00IV?]kC?]oz00Rj=c%L'}
                            />                        
                    </div>
                    <div className='row-span-2 bg-zinc-900 h-[53rem] rounded-xl '>
                        <ImageHoverOverlay 
                                src={sneaker_poster_yellow} 
                                alt="image" 
                                overlayText="poster" 
                                catg={'onisuka tiger'}
                                className={'w-full h-full text-2xl font-semibold '}
                                hash={'L6IqSy-Up^%L~paz$fIVB:R*MKt6'}
                            />
                    </div>
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                        <ImageHoverOverlay 
                                    src={astorn_matin_poster} 
                                    alt="image" 
                                    overlayText="poster"
                                    catg={'aston martin'}
                                    hash={'L34NS7a34WpGEfiLqJZ*MLcVy:b['}
                                    className={'w-full h-full text-2xl font-semibold '}
                                />
                    </div>
                    <div className='row-span-2 bg-zinc-900 h-[53rem] rounded-xl '>
                        <ImageHoverOverlay 
                                    src={lacoste} 
                                    alt="image" 
                                    overlayText="poster" 
                                    catg={'lacoste'}
                                    hash={'L3CF@QDm000}{NMzXz5900]YAdE1'}
                                    className={'w-full h-full text-2xl font-semibold '}
                                />
                    </div>
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                        <ImageHoverOverlay 
                                    src={rolex_poster} 
                                    alt="image" 
                                    overlayText="poster" 
                                    catg={'rolex'}
                                    hash={'L93n%:n,IUbaYwf+jIaLMxWBrdjZ'}
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
                                    overlayText="storyboarding" 
                                    catg={'stormy night'}
                                    className={'w-full h-full text-2xl font-semibold '}
                                    hash={'LIE|M5yDi_IUDjMxxuxu_4t7WBWB'}
                                />
                    </div>
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                        <ImageHoverOverlay 
                                    src={storyboard_puss_n_boots} 
                                    alt="Descriptive Alt Text" 
                                    overlayText="storyboarding"
                                    catg={'puss in boots'} 
                                    className={'w-full h-full text-2xl font-semibold '}
                                    hash={'L5Fh*o^j-.S5GtI-w_S5?K-BWARj'}
                                />
                    </div>
                    <div className=' bg-zinc-900 h-[26rem] rounded-xl '>
                        <ImageHoverOverlay 
                                    src={storyboard_traveller} 
                                    alt="Descriptive Alt Text" 
                                    overlayText="storyboarding" 
                                    catg={'the traveler'}
                                    className={'w-full h-full text-2xl font-semibold '}
                                    hash={'LCLg^ZIT9F-;~qIU9F%M%Mog%MV@'}
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