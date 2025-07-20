import React, { useState, useEffect } from 'react';

const ImageCarousel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    'https://damien-codes.github.io/Extensions_PiP-QR_Site/Assets/Image1.png',
    'https://damien-codes.github.io/Extensions_PiP-QR_Site/Assets/Image2.png',
    'https://damien-codes.github.io/Extensions_PiP-QR_Site/Assets/Image3.png',
    'https://damien-codes.github.io/Extensions_PiP-QR_Site/Assets/Image4.png'
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-4xl lg:max-w-5xl">
        {/* Main carousel container */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-800 shadow-2xl">
          {/* Browser window header */}
          <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
          </div>
          
          {/* Image container */}
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl bg-gray-800/50 border border-gray-700">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img 
                    src={image} 
                    alt={`PiP QR Demo ${index + 1}`}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm"
              aria-label="Image précédente"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm"
              aria-label="Image suivante"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-1.5 sm:space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                  index === currentImage 
                    ? 'bg-red-500 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Image counter */}
          <div className="text-center mt-3 sm:mt-4">
            <span className="text-xs sm:text-sm text-gray-400">
              {currentImage + 1} / {images.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel; 