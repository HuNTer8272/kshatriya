// components/ImageHoverOverlay.js
import styles from '../styles/home.module.css';
import Image from 'next/image';
// import cn from 'classnames';

const ImageHoverOverlay = ({ src, alt, overlayText, className}) => {
  return (
    <div className={`${styles.imageContainer} ${className}`} >
      <Image src={src} alt={alt} className={styles.image} layout="fill" objectFit="cover"/>
      <div className={styles.overlay}>
        <div className={styles.text}>{overlayText}</div>
      </div>
    </div>
  );
};

export default ImageHoverOverlay;
