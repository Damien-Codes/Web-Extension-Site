import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ContactInfo: React.FC = () => {
  const { elementRef: contactRef, isIntersecting: contactVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <section ref={contactRef} id="contact" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-red-800/20"></div>
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className={`inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-gray-800/50 border border-gray-700 mb-6 sm:mb-8 hidden-initially ${
            contactVisible ? 'animate-fade-in-up animation-delay-100' : ''
          }`}>
            <span className="text-xs sm:text-sm text-gray-300">📞 Restons en contact</span>
          </div>
          
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 hidden-initially ${
            contactVisible ? 'animate-fade-in-up animation-delay-200' : ''
          }`}>
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Contact
            </span>
          </h1>
          
          <p className={`text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 hidden-initially ${
            contactVisible ? 'animate-fade-in-up animation-delay-300' : ''
          }`}>
            Retrouvez-moi sur les réseaux sociaux et contactez-moi pour toute question
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 hidden-initially ${
          contactVisible ? 'animate-fade-in-up animation-delay-400' : ''
        }`}>
          
          {/* Instagram */}
          <div className="group bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10">
            <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">📸</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Instagram
            </h3>
            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-lg">
              Suivez mes projets et découvertes tech
            </p>
            <a
              href="https://www.instagram.com/skyll_box?igsh=dTMza2JmNTZsbXR3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-900/30 backdrop-blur-md text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 hover:bg-red-500/50 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/25 text-sm sm:text-base"
            >
              @skyll_box
            </a>
          </div>

          {/* GitHub */}
          <div className="group bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10">
            <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">💻</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              GitHub
            </h3>
            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-lg">
              Découvrez mes projets open source
            </p>
            <a
              href="https://github.com/Damien-Codes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-900/30 backdrop-blur-md text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 hover:bg-red-500/50 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/25 text-sm sm:text-base"
            >
              Damien-Codes
            </a>
          </div>

          {/* Email */}
          <div className="group bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10">
            <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">📧</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Email
            </h3>
            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-lg">
              Contactez-moi directement par email
            </p>
            <a
              href="mailto:pinodamien@gmail.com"
              className="inline-block bg-red-900/30 backdrop-blur-md text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 hover:bg-red-500/50 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/25 text-sm sm:text-base"
            >
              pinodamien@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="group bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10">
            <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">💼</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              LinkedIn
            </h3>
            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-lg">
              Connectez-vous professionnellement
            </p>
            <a
              href="https://www.linkedin.com/in/damien-pino/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-900/30 backdrop-blur-md text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 hover:bg-red-500/50 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/25 text-sm sm:text-base"
            >
              Damien Pino
            </a>
          </div>
        </div>

        {/* Informations supplémentaires */}
        <div className={`bg-gray-900/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto border border-gray-800 hidden-initially ${
          contactVisible ? 'animate-fade-in-scale animation-delay-500' : ''
        }`}>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
            💬 Besoin d'aide ?
          </h3>
          <div className="text-center text-gray-300 space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-lg">
              Pour toute question concernant l'extension PiP QR ou pour signaler un bug, 
              n'hésitez pas à me contacter via l'un des moyens ci-dessus.
            </p>
            <p className="text-sm sm:text-lg">
              Je réponds généralement dans les 24-48 heures.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6">
              <a
                href="https://github.com/Damien-Codes/Web-Extension-Site/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-red-900/30 backdrop-blur-md text-white font-semibold rounded-lg transition-all duration-200 hover:bg-red-500/50 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/25 text-sm sm:text-base"
              >
                <span className="mr-2">🐛</span>
                Signaler un bug
              </a>
              <a
                href="https://github.com/Damien-Codes/Web-Extension-Site/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-red-900/30 backdrop-blur-md text-white font-semibold rounded-lg transition-all duration-200 hover:bg-red-500/50 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/25 text-sm sm:text-base"
              >
                <span className="mr-2">💭</span>
                Discussions GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Retour à l'accueil */}
        <div className={`text-center mt-12 sm:mt-16 hidden-initially ${
          contactVisible ? 'animate-fade-in-up animation-delay-600' : ''
        }`}>
          <a
            href="#" // Change href to # or remove it
            className="inline-flex items-center px-6 py-3 bg-black/50 backdrop-blur-md text-white font-semibold rounded-lg transition-all duration-200 hover:bg-white hover:text-black text-sm sm:text-base"
            onClick={(e) => {
              e.preventDefault(); // Prevent default link behavior
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

export default ContactInfo;