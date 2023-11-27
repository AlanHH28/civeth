import React, { useState } from 'react';
import imagen1 from '../img/gdl.jpeg';
import imagen2 from '../img/mty.jpeg';
import imagen3 from '../img/tamp.jpeg';
import '../css/Styles.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [imagen1, imagen2, imagen3];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: 'white' }}>
      <button className="carousel-button" onClick={prevSlide} style={{ width: '50px' }}>
        &lt;
      </button>
      <img
        className="carousel-image"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={{ height: '500px' }}
      />
      <button className="carousel-button" onClick={nextSlide} style={{ width: '50px' }}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;