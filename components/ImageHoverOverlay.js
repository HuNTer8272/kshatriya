// components/ImageHoverOverlay.js
"use client"
import styles from '../styles/home.module.css';
import NextImage from 'next/image';
import { useEffect, useState } from 'react';
import { Blurhash } from 'react-blurhash';
import { FaLongArrowAltRight } from "react-icons/fa";

const ImageHoverOverlay = ({ src, alt, overlayText, catg, className, hash }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <div className={`${styles.imageContainer} ${className}`} style={{ position: 'relative', width: '100%', height: '100%' }}>
      {!imageLoaded && (
        <Blurhash
          hash={hash}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      )}
      <NextImage
        loading='lazy'
        src={src}
        alt={alt}
        className={styles.image}
        layout="fill"
        objectFit="cover"
        onLoadingComplete={() => setImageLoaded(true)}
      />
      {/* {imageLoaded && (
        <>
          <div className={styles.overlay}></div>
          <div className={`${styles.text} absolute top-5 left-3 transition-all ease-in-out duration-300 delay-100 text-[1.3rem] uppercase`}>
            {overlayText} | {catg}
          </div>
          <div className={`${styles.text} absolute bottom-5 left-3 transition-all linear duration-400 delay-200 text-[1.3rem] flex cursor-pointer justify-center items-center`}>
            View Project <FaLongArrowAltRight className='ml-3 text-2xl' />
          </div>
        </>
      )} */}
    </div>
  );
};

export default ImageHoverOverlay;
