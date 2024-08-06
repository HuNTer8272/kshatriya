"use client"
import React,{useRef,useEffect} from 'react'
import {motion,useInView,useAnimation} from "framer-motion"
import homeStyle from "../../styles/home.module.css"

const Reveal = ({children,width="fit-content"}) =>{
    const ref = useRef(null);
    const isInView = useInView(ref,{once:true});
    const mainAnimation = useAnimation();
    const slideAnimation = useAnimation();

    useEffect(()=>{
        if(isInView){
           mainAnimation.start("visible")
           slideAnimation.start("visible")
        }
    },[isInView])

  return(
    <div ref={ref} style={{position:"relative",width,overflow:'hidden'}}>
        <motion.div
          variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1,y:0},
          }}
          initial="hidden"
          animate="visible"
          transition={{duration:0.5,delay:0.30}}
        >
        {children}
        </motion.div>
        <motion.div
          variants={{
            hidden:{ left:0},
            visible:{left:"100%"}
          }}
          initial="hidden"
          animate={slideAnimation}
          transition={{duration:0.8, ease:'easeIn'}}
          style={{
            position:"absolute",
            top:4,
            bottom:4,
            left:0,
            right:0,
            zIndex:20
          }}
        //   className={`${homeStyle.gradient_bg}`}
          className={`bg-slate-100`}
        >
        </motion.div>
    </div>
  )    
}

export default Reveal