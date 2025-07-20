import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Animation au chargement de la page
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`bg-black/50 backdrop-blur-md fixed top-0 left-0 right-0 z-50 rounded-3xl mt-4 w-[95%] sm:w-[85%] md:w-[75%] mx-auto transition-all duration-1000 ease-out transform ${
      isLoaded 
        ? 'translate-y-0 opacity-100' 
        : '-translate-y-full opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                PiP QR
              </h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
            >
              Fonctionnalités
            </button>
            <button
              onClick={() => scrollToSection('download')}
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
            >
              Télécharger
            </button>
            <a href="https://github.com/Damien-Codes/Extensions_PiP-QR_Site" target="_blank" rel="noopener noreferrer" className="border border-white text-white rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-black">
              GitHub
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-700 pt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-800/50 text-left cursor-pointer"
              >
                Fonctionnalités
              </button>
              <button 
                onClick={() => scrollToSection('download')}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-800/50 text-left cursor-pointer"
              >
                Télécharger
              </button>
              <a 
                href="https://github.com/Damien-Codes/Extensions_PiP-QR_Site" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border border-white text-white rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-black text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 