import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import PortfolioHeader from '../components/Header'
import Competences from '../components/Competences'
import Experiences from '../components/Experience'
import Projects from '../components/Projects'
import NetworkBackground from '../components/particleBg'

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
    
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Custom Network Background */}
      <NetworkBackground/>
      
      {/* Main Content */}
      <div className="relative z-10">
        <PortfolioHeader/>
        <Competences/>
        <Experiences/>
        <Projects/>
        
        {/* Footer */}
        <footer className="py-8 px-4 text-white border-t border-gray-800 relative z-10 bg-black bg-opacity-30 backdrop-blur-sm">
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