import React,{useState,useEffect} from 'react'

const ImageSlider = () => {
    const images = [
        'https://www.boat-lifestyle.com/cdn/shop/files/d2c_banner_copy_1440x.jpg?v=1721715421',
        'https://www.boat-lifestyle.com/cdn/shop/files/161-ELITE-ANC-WEB_1600x.jpg?v=1721622779',
        'https://www.boat-lifestyle.com/cdn/shop/files/RS_Banner_WEB_1_1440x.jpg?v=1706770352',
    '',  
    ];
      const [currentIndex, setCurrentIndex] = useState(0);
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 1000); // 100 ms for 0.1 s
    
        return () => clearInterval(interval);
      }, [images.length]); 
      const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
      };
    
      const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
      };
  return (
    <div>
      <button onClick={prevImage}>Left</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button onClick={nextImage}>Right</button>
    </div>
  )
}

export default ImageSlider
