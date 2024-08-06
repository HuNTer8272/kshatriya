// components/ImageWithBlurhash.js
"use client"
import React, { useEffect, useState } from 'react';
import NextImage from 'next/image';
import { Blurhash } from 'react-blurhash';

const ImageWithBlurhash = ({ src, alt, hash,className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src.src;
  }, [src]);

  return (
    <div className="relative w-full h-full">
      {!imageLoaded && (
        <Blurhash
          hash={hash}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        //   style={{ position: 'absolute', top: 0, left: 0 }}
        />
      )}
      <NextImage
        src={src}
        alt={alt}
        className={className}
        layout="fill"
        objectFit="cover"
        onLoadingComplete={() => setImageLoaded(true)}
      />
    </div>
  );
};

export default ImageWithBlurhash;
