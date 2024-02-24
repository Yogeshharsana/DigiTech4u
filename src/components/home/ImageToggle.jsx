import React, { useState, useEffect } from 'react';

const ImageToggle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const images = [
    "../assets/H.png",
    "../assets/picBw.jpg",
    "../assets/work1.png",
    "../assets/work2.png",
    "../assets/work3.png"
  ];
  

  return (
    <div id="imageContainer">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          style={{ display: index === currentIndex ? 'block' : 'none', width: '200px', height: '200px' }}
        />
      ))}
    </div>
  );
};

export default ImageToggle;
