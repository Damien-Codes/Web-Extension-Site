import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const PrivacyPolicy: React.FC = () => {
  const { elementRef: privacyRef, isIntersecting: privacyVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px',
  });

  return (
    <section ref={privacyRef} id="privacy" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-red-800/20"></div>
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className={`inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-gray-800/50 border border-gray-700 mb-6 sm:mb-8 hidden-initially ${
            privacyVisible ? 'animate-fade-in-up animation-delay-100' : ''
          }`}>
            <span className="text-xs sm:text-sm text-gray-300">🔒 Protection de la vie privée</span>
          </div>
          
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 hidden-initially ${
            privacyVisible ? 'animate-fade-in-up animation-delay-200' : ''
          }`}>
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Politique de Confidentialité
            </span>
          </h1>
          
          <p className={`text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 hidden-initially ${
            privacyVisible ? 'animate-fade-in-up animation-delay-300' : ''
          }`}>
            Comment nous protégeons vos données et respectons votre vie privée
          </p>
        </div>

        <div className={`space-y-8 sm:space-y-12 hidden-initially ${
          privacyVisible ? 'animate-fade-in-up animation-delay-400' : ''
        }`}>
          
          {/* Introduction */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <span className="text-red-400 mr-3">📋</span>
              Introduction
            </h2>
            <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-lg">
              <p>Cette politique de confidentialité décrit comment l'extension PiP QR collecte, utilise et protège vos informations personnelles.</p>
              <p>Nous nous engageons à protéger votre vie privée et à être transparents sur nos pratiques de collecte de données.</p>
              <p><strong className="text-white">Date de dernière mise à jour :</strong> Janvier 2025</p>
            </div>
          </div>

          {/* Collecte de données */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <span className="text-red-400 mr-3">📊</span>
              Collecte de données
            </h2>
            <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-lg">
              <p><strong className="text-white">Aucune collecte :</strong> L'extension PiP QR ne collecte aucune donnée personnelle.</p>
              <p><strong className="text-white">Exécution locale :</strong> Toutes les fonctionnalités s'exécutent entièrement dans votre navigateur.</p>
              <p><strong className="text-white">Pas de serveurs :</strong> Aucune information n'est transmise à nos serveurs ou à des tiers.</p>
              <p><strong className="text-white">Pas d'identification :</strong> Nous ne pouvons pas vous identifier personnellement.</p>
            </div>
          </div>

          {/* Utilisation des données */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <span className="text-red-400 mr-3">🎯</span>
              Utilisation des données
            </h2>
            <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-lg">
              <p><strong className="text-white">Fonctionnalités :</strong> L'extension utilise uniquement les données nécessaires pour :</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Activer le mode Picture-in-Picture sur YouTube</li>
                <li>Générer des QR codes pour partager les vidéos</li>
                <li>Mémoriser vos préférences locales (si activées)</li>
              </ul>
              <p><strong className="text-white">Stockage local :</strong> Les préférences sont stockées uniquement sur votre appareil.</p>
            </div>
          </div>

          {/* Partage de données */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <span className="text-red-400 mr-3">🤝</span>
              Partage de données
            </h2>
            <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-lg">
              <p><strong className="text-white">Aucun partage :</strong> Nous ne partageons aucune donnée avec des tiers.</p>
              <p><strong className="text-white">Pas de vente :</strong> Vos données ne sont jamais vendues ou louées.</p>
              <p><strong className="text-white">Pas de publicité :</strong> Aucune donnée n'est utilisée pour la publicité ciblée.</p>
              <p><strong className="text-white">Contrôle total :</strong> Vous gardez le contrôle total de vos données.</p>
            </div>
          </div>

          {/* Sécurité */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <span className="text-red-400 mr-3">🛡️</span>
              Sécurité
            </h2>
            <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-lg">
              <p><strong className="text-white">Exécution sécurisée :</strong> L'extension s'exécute dans l'environnement sécurisé de Chrome.</p>
              <p><strong className="text-white">Pas de réseau :</strong> Aucune connexion réseau n'est établie par l'extension.</p>
              <p><strong className="text-white">Permissions minimales :</strong> Seules les permissions nécessaires sont demandées.</p>
              <p><strong className="text-white">Code open source :</strong> Le code est transparent et vérifiable par tous.</p>
            </div>
          </div>

          {/* Cookies et traceurs */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <span className="text-red-400 mr-3">🍪</span>
              Cookies et traceurs
            </h2>
            <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-lg">
              <p><strong className="text-white">Aucun cookie :</strong> L'extension n'utilise aucun cookie.</p>
              <p><strong className="text-white">Pas de traceurs :</strong> Aucune technologie de suivi n'est implémentée.</p>
              <p><strong className="text-white">Pas de fingerprinting :</strong> Aucune empreinte numérique n'est créée.</p>
              <p><strong className="text-white">Navigation anonyme :</strong> Votre utilisation reste totalement privée.</p>
            </div>
          </div>

          {/* Vos droits */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <span className="text-red-400 mr-3">⚖️</span>
              Vos droits
            </h2>
            <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-lg">
              <p><strong className="text-white">Contrôle total :</strong> Vous pouvez :</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Désactiver l'extension à tout moment</li>
                <li>Supprimer toutes les données locales</li>
                <li>Désinstaller l'extension complètement</li>
                <li>Contrôler les permissions accordées</li>
              </ul>
              <p><strong className="text-white">Pas de données à récupérer :</strong> Puisque nous ne collectons rien, il n'y a rien à récupérer ou supprimer.</p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <span className="text-red-400 mr-3">📧</span>
              Contact
            </h2>
            <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-lg">
              <p>Pour toute question concernant cette politique de confidentialité :</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
                <a
                  href="https://github.com/Damien-Codes/Extensions_PiP-QR_Site/issues"
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
          privacyVisible ? 'animate-fade-in-up animation-delay-500' : ''
        }`}>
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-200 hover:bg-gray-800/50 text-sm sm:text-base"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/';
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

export default PrivacyPolicy; 