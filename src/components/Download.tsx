import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Download: React.FC = () => {
  const { elementRef: downloadRef, isIntersecting: downloadVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px',
  });

  return (
    <section ref={downloadRef} id="download" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-red-800/20"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/2 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-red-600/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 hidden-initially ${
          downloadVisible ? 'animate-fade-in-up animation-delay-100' : ''
        }`}>
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Télécharger l'extension
          </span>
        </h2>
        <p className={`text-lg sm:text-xl text-gray-400 mb-12 sm:mb-16 max-w-2xl sm:max-w-3xl mx-auto px-4 hidden-initially ${
          downloadVisible ? 'animate-fade-in-up animation-delay-200' : ''
        }`}>
          Installez l'extension PiP QR et améliorez votre expérience YouTube dès aujourd'hui
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl sm:max-w-5xl mx-auto mb-12 sm:mb-16">
          <div className={`group bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10 hidden-initially ${
            downloadVisible ? 'animate-fade-in-left animation-delay-300' : ''
          }`}>
            <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">🛒</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Chrome Web Store
            </h3>
            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-lg">
              Installation simple et sécurisée depuis le Chrome Web Store officiel
            </p>
            <a
              href="https://chromewebstore.google.com/detail/youtube-pip-qr/khmfffompcklfkhmadlkbgiiiaoopaog?authuser=0&hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 text-sm sm:text-base"
            >
              Installer depuis le Store
            </a>
          </div>
          
          <div className={`group bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10 hidden-initially ${
            downloadVisible ? 'animate-fade-in-right animation-delay-400' : ''
          }`}>
            <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">📦</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Installation manuelle
            </h3>
            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-lg">
              Téléchargez le fichier ZIP et installez l'extension manuellement
            </p>
            <a
              href="https://github.com/Damien-Codes/Extensions_PiP-QR_Site/raw/main/Extension_PiP.zip"
              download="Extension_PiP.zip"
              className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 hover:scale-105 border border-gray-700 hover:border-gray-600 text-sm sm:text-base"
            >
              Télécharger ZIP
            </a>
          </div>
        </div>
        
        <div className={`bg-gray-900/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-12 max-w-4xl sm:max-w-5xl mx-auto border border-gray-800 hidden-initially ${
          downloadVisible ? 'animate-fade-in-scale animation-delay-500' : ''
        }`}>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
            Instructions d'installation manuelle
          </h3>
          <div className="text-left text-gray-300 space-y-4 sm:space-y-6">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <span className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 mt-0.5 sm:mt-1">1</span>
              <p className="text-sm sm:text-lg">Téléchargez le fichier ZIP depuis GitHub</p>
            </div>
            <div className="flex items-start space-x-3 sm:space-x-4">
              <span className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 mt-0.5 sm:mt-1">2</span>
              <p className="text-sm sm:text-lg">Extrayez le contenu du ZIP dans un dossier</p>
            </div>
            <div className="flex items-start space-x-3 sm:space-x-4">
              <span className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 mt-0.5 sm:mt-1">3</span>
              <p className="text-sm sm:text-lg">Ouvrez Chrome et allez dans chrome://extensions/</p>
            </div>
            <div className="flex items-start space-x-3 sm:space-x-4">
              <span className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 mt-0.5 sm:mt-1">4</span>
              <p className="text-sm sm:text-lg">Activez le "Mode développeur" en haut à droite</p>
            </div>
            <div className="flex items-start space-x-3 sm:space-x-4">
              <span className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 mt-0.5 sm:mt-1">5</span>
              <p className="text-sm sm:text-lg">Cliquez sur "Charger l'extension non empaquetée" et sélectionnez le dossier extrait</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download; 