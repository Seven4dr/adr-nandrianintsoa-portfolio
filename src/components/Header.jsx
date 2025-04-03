import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { sary } from '../../public/images';
import AOS from 'aos'; // Importez AOS
import 'aos/dist/aos.css'; // Importez le CSS d'AOS

const PortfolioHeader = () => {
    // Initialisez AOS avec useEffect
    useEffect(() => {
        AOS.init({
            duration: 1000, // Durée de l'animation en millisecondes
            once: true, // L'animation ne se joue qu'une seule fois
        });
    }, []);

    return (
        <div className="flex items-center min-h-[63vh] px-4 py-8">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12 space-y-8 md:space-y-0">
                    {/* Image Container avec animation */}
                    <div className="flex justify-center md:justify-start" data-aos="fade-right">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-transparent shadow-2xl transform hover:scale-105 transition-transform duration-300">
                            <img
                                src={sary}
                                alt="Nandrianintsoa"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Content avec animation */}
                    <div className="text-center md:text-left space-y-6 w-full" data-aos="fade-left">
                        <div className="space-y-4">
                            <h2 className="text-xl text-amber-400 font-medium">Bonjour, je suis</h2>
                            {/* Texte agrandi avec animation */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white" data-aos="zoom-in">
                                <Typewriter
                                    options={{
                                        strings: ['Nandrianintsoa', 'Développeur Web', 'Expert JavaScript'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h1>
                            <p className="text-base md:text-lg text-white max-w-xl mx-auto md:mx-0">
                                Passionné par JavaScript, je maîtrise ses écosystèmes et frameworks avec une expertise technique et créative.
                            </p>
                        </div>

                        {/* Social and CV Button avec animation */}
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start" data-aos="fade-up">
                            <a
                                href="#"
                                className="bg-amber-400 text-black px-8 py-3 rounded-full hover:bg-amber-450 transition font-semibold shadow-lg w-full sm:w-auto text-center"
                            >
                                Télécharger CV
                            </a>
                            <div className="flex space-x-6">
                                <a href="#" className="text-amber-50 hover:text-amber-300 transition">
                                    <FaFacebook size={22} />
                                </a>
                                <a href="#" className="text-amber-50 hover:text-amber-300 transition">
                                    <FaLinkedin size={22} />
                                </a>
                                <a href="#" className="text-amber-50 hover:text-amber-300 transition">
                                    <FaGithub size={22} />
                                </a>
                                <a href="#" className="text-amber-50 hover:text-amber-300 transition">
                                    <FaEnvelope size={22} />
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