import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { sary } from '../../public/images';
// Import direct du fichier CV
import cvFile from '../../public/images/cv.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PortfolioHeader = () => {
    // Initialisez AOS avec useEffect
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });
    }, []);

    // Fonction pour gérer le téléchargement du CV
    const handleDownloadCV = () => {
        // Utiliser l'URL du fichier importé
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = 'cv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-4 overflow-hidden pt-0">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-8 py-8 lg:py-0">
                    {/* Image Container avec animation et effet lumineux doré sombre - Responsive */}
                    <div className="w-full lg:w-2/5 flex justify-center" data-aos="fade-right">
                        <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mt-8 lg:mt-0">
                            {/* Effet de lueur externe - Couleur jaune avec opacité réduite */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 opacity-30 blur-2xl animate-pulse"></div>
                            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 opacity-25 blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
                            
                            {/* Cercle principal avec bordure lumineuse jaune */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-yellow-500 shadow-2xl shadow-yellow-500/35 transform hover:scale-105 transition-all duration-500 bg-gradient-to-r from-yellow-400/12 via-transparent to-yellow-500/12">
                                {/* Bordure lumineuse animée - Couleur jaune */}
                                <div className="absolute inset-0 rounded-full border-2 border-yellow-400 animate-spin-slow opacity-45 shadow-lg shadow-yellow-400/30"></div>
                                <div className="absolute inset-1 rounded-full border-2 border-yellow-500 animate-pulse opacity-50"></div>
                                <div className="absolute inset-2 rounded-full border border-yellow-300 opacity-40" style={{animation: 'pulse 2s ease-in-out infinite reverse'}}></div>
                                
                                <img
                                    src={sary}
                                    alt="Nandrianintsoa"
                                    className="w-full h-full object-cover relative z-10"
                                />
                                
                                {/* Overlay lumineux subtil jaune */}
                                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 via-transparent to-yellow-400/8 z-20 pointer-events-none"></div>
                                
                                {/* Effet de brillance supplémentaire avec tons jaunes */}
                                <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-20 blur-md animate-pulse"></div>
                                <div className="absolute bottom-6 right-6 w-6 h-6 bg-yellow-500 rounded-full opacity-25 blur-sm animate-pulse" style={{animationDelay: '1s'}}></div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content avec animation - Responsive */}
                    <div className="text-center lg:text-left space-y-8 w-full lg:w-3/5 px-4 lg:px-8 py-6 lg:py-8" data-aos="fade-left">
                        <div className="space-y-6">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-amber-400 font-semibold tracking-wide">Bonjour, je suis</h2>
                            {/* Texte dynamique avec tailles responsives agrandies */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white" data-aos="zoom-in">
                                <Typewriter
                                    options={{
                                        strings: ['Nandrianintsoa', 'Développeur Web'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 75,
                                    }}
                                />
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto lg:mx-0 leading-relaxed px-2 lg:px-0">
                                Développeur expérimenté spécialisé dans la création d'applications web performantes et évolutives. 
                                Mon expertise technique me permet de transformer des concepts en solutions concrètes et fonctionnelles.
                            </p>
                        </div>

                        {/* Social and CV Button avec animation - Responsive */}
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start pt-6" data-aos="fade-up">
                            <button
                                onClick={handleDownloadCV}
                                className="bg-amber-400 text-black px-8 sm:px-10 py-4 rounded-full hover:bg-amber-500 transition font-bold shadow-xl text-lg sm:text-xl w-full sm:w-auto text-center transform hover:translate-y-1 transition-transform duration-300"
                            >
                                Télécharger CV
                            </button>
                            <div className="flex items-center space-x-6">
                                <a 
                                    href="https://github.com/nandrianintsoa" 
                                    className="p-4 bg-gray-800 rounded-full text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                                    aria-label="GitHub"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub className="text-2xl" />
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/nandrianintsoa-andrianirina-618724326" 
                                    className="p-4 bg-gray-800 rounded-full text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                                    aria-label="LinkedIn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin className="text-2xl" />
                                </a>
                                <a 
                                    href="mailto:adrnandrianinstoa272@gmail.com" 
                                    className="p-4 bg-gray-800 rounded-full text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                                    aria-label="Email"
                                >
                                    <FaEnvelope className="text-2xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS personnalisé pour l'animation */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
                
                /* Animation de pulsation personnalisée pour effet doré sombre */}
                @keyframes glow-pulse {
                    0%, 100% { 
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% { 
                        opacity: 0.5;
                        transform: scale(1.02);
                    }
                }
                
                .glow-effect {
                    animation: glow-pulse 3s ease-in-out infinite;
                }
                `
            }} />
        </div>
    );
};

export default PortfolioHeader;