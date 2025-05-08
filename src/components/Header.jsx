import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
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
        <div className="flex items-center justify-center min-h-screen px-4 py-8 overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-4">
                    {/* Image Container avec animation - Responsive */}
                    <div className="w-full lg:w-2/5 flex justify-center" data-aos="fade-right">
                        <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-amber-400/30 shadow-2xl shadow-amber-400/20 transform hover:scale-105 transition-transform duration-500">
                            <img
                                src={sary}
                                alt="Nandrianintsoa"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Content avec animation - Responsive */}
                    <div className="text-center lg:text-left space-y-6 w-full lg:w-3/5" data-aos="fade-left">
                        <div className="space-y-4">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl text-amber-400 font-semibold tracking-wide">Bonjour, je suis</h2>
                            {/* Texte dynamique avec tailles responsives */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white" data-aos="zoom-in">
                                <Typewriter
                                    options={{
                                        strings: ['Nandrianintsoa', 'Développeur Web'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 75,
                                    }}
                                />
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Développeur expérimenté spécialisé dans la création d'applications web performantes et évolutives. 
                                Mon expertise technique me permet de transformer des concepts en solutions concrètes et fonctionnelles.
                            </p>
                        </div>

                        {/* Social and CV Button avec animation - Responsive */}
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start pt-4" data-aos="fade-up">
                            <button
                                onClick={handleDownloadCV}
                                className="bg-amber-400 text-black px-6 sm:px-8 py-3 rounded-full hover:bg-amber-500 transition font-bold shadow-xl text-base sm:text-lg w-full sm:w-auto text-center transform hover:translate-y-1 transition-transform duration-300"
                            >
                                Télécharger CV
                            </button>
                            <div className="flex space-x-6">
                                <a href="#" className="text-amber-50 hover:text-amber-300 transition-colors duration-300">
                                    <FaFacebook size={24} className="sm:text-2xl md:text-3xl" />
                                </a>
                                <a href="#" className="text-amber-50 hover:text-amber-300 transition-colors duration-300">
                                    <FaLinkedin size={24} className="sm:text-2xl md:text-3xl" />
                                </a>
                                <a href="#" className="text-amber-50 hover:text-amber-300 transition-colors duration-300">
                                    <FaGithub size={24} className="sm:text-2xl md:text-3xl" />
                                </a>
                                <a href="#" className="text-amber-50 hover:text-amber-300 transition-colors duration-300">
                                    <FaEnvelope size={24} className="sm:text-2xl md:text-3xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioHeader;