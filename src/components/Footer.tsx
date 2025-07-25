import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent the default anchor link behavior
    const element = document.getElementById('download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // If the 'download' element is not on the current page,
      // you might want to navigate to the home page first and then scroll.
      // For now, based on your request, we only scroll if it's on the current page.
      // If you decide to navigate, you'd use something like:
      // navigate('/', { state: { scrollToId: 'download' } });
      // and handle it in the Home component's useEffect, as discussed before.
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 sm:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-3 sm:mb-4">
              PiP QR
            </h3>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              Une extension Chrome innovante qui combine Picture-in-Picture et génération de QR codes pour une expérience YouTube optimale.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Damien-Codes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-200"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Liens rapides</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#download" // Keep href="#download" for accessibility/SEO, but onClick will override
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  onClick={handleDownloadClick} // Use the new handler
                >
                  Télécharger
                </a>
              </li>
              <li>
                <a href="https://github.com/Damien-Codes" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Support</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="https://github.com/Damien-Codes/Web-Extension-Site/issues" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Signaler un bug
                </a>
              </li>
              <li>
                <a 
                  href="#" // L'attribut href peut être '#' ou omis car la navigation est gérée par onClick
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  onClick={(e) => {
                    e.preventDefault(); // Empêche le comportement par défaut de l'ancre
                    navigate('/contact'); // Utilise useNavigate pour naviguer
                  }}
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/legal');
                  }}
                >
                  Mentions légales
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/privacy');
                  }}
                >
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="https://github.com/Damien-Codes/Extension_Web/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-gray-500 text-sm sm:text-base">
            © 2025 PiP QR Extension. Développé avec ❤️ par{' '}
            <a
              href="https://github.com/damien-codes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 transition-colors duration-200"
            >
              Damien Codes
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;