import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LegalMentions: React.FC = () => {
  const { elementRef: legalRef, isIntersecting: legalVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <section ref={legalRef} id="legal" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-red-800/20"></div>
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className={`inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-gray-800/50 border border-gray-700 mb-6 sm:mb-8 hidden-initially ${
            legalVisible ? 'animate-fade-in-up animation-delay-100' : ''
          }`}>
            <span className="text-xs sm:text-sm text-gray-300">📋 Informations légales</span>
          </div>
          
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 hidden-initially ${
            legalVisible ? 'animate-fade-in-up animation-delay-200' : ''
          }`}>
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Mentions Légales
            </span>
          </h1>
          
          <p className={`text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 hidden-initially ${
            legalVisible ? 'animate-fade-in-up animation-delay-300' : ''
          }`}>
            Informations importantes concernant l'extension PiP QR et son utilisation
          </p>
        </div>

        <div className={`space-y-8 sm:space-y-12 hidden-initially ${
          legalVisible ? 'animate-fade-in-up animation-delay-400' : ''
        }`}>
          
          {/* Éditeur */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <span className="text-red-400 mr-3">🏢</span>
              Éditeur
            </h2>
            <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-lg">
              <p><strong className="text-white">Nom :</strong> Damien-Codes</p>
              <p><strong className="text-white">Type :</strong> Développeur indépendant</p>
              <p><strong className="text-white">Contact :</strong> Via GitHub</p>
              <p><strong className="text-white">Site web :</strong> 
                <a 
                  href="https://github.com/Damien-Codes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 transition-colors ml-2"
                >
                  github.com/Damien-Codes
                </a>
              </p>
            </div>
          </div>

          {/* Hébergement */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <span className="text-red-400 mr-3">🌐</span>
              Hébergement
            </h2>
            <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-lg">
              <p><strong className="text-white">Plateforme :</strong> GitHub Pages</p>
              <p><strong className="text-white">Propriétaire :</strong> Microsoft Corporation</p>
              <p><strong className="text-white">Adresse :</strong> 1 Microsoft Way, Redmond, WA 98052, États-Unis</p>
              <p><strong className="text-white">Site web :</strong> 
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 transition-colors ml-2"
                >
                  github.com
                </a>
              </p>
            </div>
          </div>

          {/* Extension Chrome */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <span className="text-red-400 mr-3">🔧</span>
              Extension Chrome
            </h2>
            <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-lg">
              <p><strong className="text-white">Nom :</strong> PiP QR</p>
              <p><strong className="text-white">Version :</strong> 1.0</p>
              <p><strong className="text-white">Plateforme :</strong> Chrome Web Store</p>
              <p><strong className="text-white">ID de l'extension :</strong> khmfffompcklfkhmadlkbgiiiaoopaog</p>
              <p><strong className="text-white">Fonctionnalités :</strong> Picture-in-Picture et génération de QR codes pour YouTube</p>
            </div>
          </div>

          {/* Données personnelles */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <span className="text-red-400 mr-3">🔒</span>
              Données personnelles
            </h2>
            <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-lg">
              <p>L'extension PiP QR <strong className="text-white">ne collecte aucune donnée personnelle</strong>.</p>
              <p>Toutes les fonctionnalités s'exécutent localement dans votre navigateur.</p>
              <p>Aucune information n'est transmise à des serveurs tiers.</p>
              <p>L'extension respecte votre vie privée et ne nécessite aucune inscription.</p>
            </div>
          </div>

          {/* Cookies */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <span className="text-red-400 mr-3">🍪</span>
              Cookies
            </h2>
            <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-lg">
              <p>Ce site web <strong className="text-white">n'utilise aucun cookie</strong>.</p>
              <p>Aucun traceur ou technologie de suivi n'est implémenté.</p>
              <p>Votre navigation reste totalement anonyme.</p>
            </div>
          </div>

          {/* Droits d'auteur */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <span className="text-red-400 mr-3">©️</span>
              Droits d'auteur
            </h2>
            <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-lg">
              <p><strong className="text-white">Propriétaire :</strong> Damien-Codes</p>
              <p><strong className="text-white">Licence :</strong> MIT License</p>
              <p><strong className="text-white">Année :</strong> 2024-2025</p>
              <p>Tous droits réservés. L'extension et ce site web sont protégés par les lois sur la propriété intellectuelle.</p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <span className="text-red-400 mr-3">📧</span>
              Contact
            </h2>
            <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-lg">
              <p>Pour toute question concernant ces mentions légales :</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
                <a
                  href="https://github.com/Damien-Codes/Web-Extension-Site/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 text-sm sm:text-base"
                >
                  <span className="mr-2">🐛</span>
                  Signaler un problème
                </a>
                <a
                  href="https://github.com/Damien-Codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-200 hover:bg-gray-800/50 text-sm sm:text-base"
                >
                  <span className="mr-2">👨‍💻</span>
                  Profil GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Retour à l'accueil */}
        <div className={`text-center mt-12 sm:mt-16 hidden-initially ${
          legalVisible ? 'animate-fade-in-up animation-delay-500' : ''
        }`}>
          <a
            href="#" // Change href to # or remove it
            className="inline-flex items-center px-6 py-3 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-200 hover:bg-gray-800/50 text-sm sm:text-base"
            onClick={(e) => {
              e.preventDefault(); // Prevent browser from handling the default href action
              navigate('/'); // Use useNavigate to go to the home page
            }}
          >
            <span className="mr-2">🏠</span>
            Retour à l'accueil
          </a>
        </div>
      </div>
    </section>
  );
};

export default LegalMentions;