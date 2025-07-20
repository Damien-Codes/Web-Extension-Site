import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Features: React.FC = () => {
  const features = [
    {
      icon: "🎥",
      title: "Picture-in-Picture",
      description: "Regardez vos vidéos YouTube en mode Picture-in-Picture tout en naviguant sur d'autres sites."
    },
    {
      icon: "📱",
      title: "QR Code",
      description: "Générez instantanément un QR code pour partager facilement vos vidéos sur mobile."
    },
    {
      icon: "⚡",
      title: "Rapide et Simple",
      description: "Une interface intuitive qui s'intègre parfaitement à YouTube sans encombrer l'interface."
    },
    {
      icon: "🔒",
      title: "Sécurisé",
      description: "Aucune donnée personnelle n'est collectée. Votre vie privée est respectée."
    },
    {
      icon: "🌐",
      title: "Multi-plateforme",
      description: "Fonctionne sur tous les navigateurs basés sur Chromium (Chrome, Edge, Brave, etc.)."
    },
    {
      icon: "🆓",
      title: "Gratuit",
      description: "Extension entièrement gratuite et open source, disponible sur GitHub."
    }
  ];

  const { elementRef: featuresRef, isIntersecting: featuresVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px',
  });

  return (
    <section ref={featuresRef} id="features" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 hidden-initially ${
            featuresVisible ? 'animate-fade-in-up animation-delay-100' : ''
          }`}>
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Fonctionnalités
            </span>
          </h2>
          <p className={`text-lg sm:text-xl text-gray-400 max-w-2xl sm:max-w-3xl mx-auto px-4 hidden-initially ${
            featuresVisible ? 'animate-fade-in-up animation-delay-200' : ''
          }`}>
            Découvrez tout ce que l'extension PiP QR peut faire pour améliorer votre expérience YouTube
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10 hidden-initially ${
                featuresVisible ? `animate-fade-in-up animation-delay-${Math.min(300 + index * 100, 800)}` : ''
              }`}
            >
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 sm:mt-20 md:mt-24 text-center hidden-initially ${
          featuresVisible ? 'animate-fade-in-scale animation-delay-500' : ''
        }`}>
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-12 max-w-4xl sm:max-w-5xl mx-auto border border-gray-800">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
              Comment ça marche ?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-2xl font-bold mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <p className="text-gray-300 text-sm sm:text-lg">Installez l'extension depuis le Chrome Web Store</p>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-2xl font-bold mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <p className="text-gray-300 text-sm sm:text-lg">Naviguez sur YouTube et ouvrez une vidéo</p>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-2xl font-bold mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <p className="text-gray-300 text-sm sm:text-lg">Cliquez sur l'icône de l'extension pour générer le QR code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 