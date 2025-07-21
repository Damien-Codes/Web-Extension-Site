import React from 'react';
import ImageCarousel from './ImageCarousel';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Hero: React.FC = () => {
  const emojis = ["🎥", "📱", "⚡", "🔒", "🌐", "🆓"];
  
  // Créer 3 instances de chaque émoji pour plus de densité
  const allEmojis = emojis.flatMap(emoji => [emoji, emoji, emoji]);
  
  const { elementRef: heroRef, isIntersecting: heroVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px',
  });
  
  return (
    <section ref={heroRef} className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-red-800/20"></div>
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      
      {/* Floating emojis animation */}
      <div className="absolute inset-0 pointer-events-none">
        {allEmojis.map((emoji, index) => (
          <div
            key={index}
            className="absolute animate-float-up opacity-0"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              fontSize: `${1 + Math.random() * 0.5}rem`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <div className={`inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-gray-800/50 border border-gray-700 mb-6 sm:mb-8 hidden-initially ${
            heroVisible ? 'animate-fade-in-up animation-delay-100' : ''
          }`}>
            <span className="text-xs sm:text-sm text-gray-300">✨ Extension Chrome innovante</span>
          </div>
          
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 hidden-initially ${
            heroVisible ? 'animate-fade-in-up animation-delay-200' : ''
          }`}>
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              PiP QR
            </span>
          </h1>
          
          <p className={`text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 hidden-initially ${
            heroVisible ? 'animate-fade-in-up animation-delay-300' : ''
          }`}>
            L'extension ultime pour les power users de YouTube. 
            <span className="text-red-400"> Picture-in-Picture</span> et 
            <span className="text-red-500"> QR Code</span> en un clic.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4 hidden-initially ${
            heroVisible ? 'animate-fade-in-up animation-delay-400' : ''
          }`}>
            <a
              href="https://chromewebstore.google.com/detail/youtube-pip-qr/khmfffompcklfkhmadlkbgiiiaoopaog?authuser=0&hl=fr"
              className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 text-sm sm:text-base"
            >
              <span className="relative z-10">Télécharger l'extension</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </a>
            <a
              href="https://github.com/Damien-Codes/Extension_Web"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 sm:px-8 sm:py-4 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-200 hover:bg-gray-800/50 text-sm sm:text-base"
            >
              Voir sur GitHub
            </a>
          </div>
        </div>
        
        {/* Image Carousel */}
        <div className={`px-4 sm:px-0 hidden-initially ${
          heroVisible ? 'animate-fade-in-scale animation-delay-500' : ''
        }`}>
          <ImageCarousel />
        </div>
      </div>
    </section>
  );
};

export default Hero; 