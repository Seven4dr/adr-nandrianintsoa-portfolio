import React, { useEffect, useCallback } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import PortfolioHeader from '../components/Header'
import Competences from '../components/Competences'
import Experiences from '../components/Experience'
import Projects from '../components/Projects'

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
    
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Animation en arrière-plan avec z-index très négatif */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
              triangles: {
                enable: true,
                opacity: 0.05
              }
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: 0.3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: -100, // z-index très négatif pour être sûr
          top: 0,
          left: 0,
        }}
      />
      
      {/* Contenu avec z-index positif pour s'assurer qu'il soit visible */}
      <div className="relative z-10">
        <PortfolioHeader/>
        <Competences/>
        <Experiences/>
        <Projects/>
        
        {/* Footer avec copyright */}
        <footer className="py-8 px-4 bg-black text-white border-t border-gray-800 relative z-10">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <p className="text-gray-400 font-bold">
                  © 2025 AdrNadrianintsoa
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <a 
                  href="#" 
                  className="p-3 bg-gray-800 rounded-full text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-gray-800 rounded-full text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a 
                  href="mailto:example@email.com" 
                  className="p-3 bg-gray-800 rounded-full text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Email"
                >
                  <FaEnvelope className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home