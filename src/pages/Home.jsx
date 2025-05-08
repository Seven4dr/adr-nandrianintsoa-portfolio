import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import PortfolioHeader from '../components/Header';
import Competences from '../components/Competences';
import Experiences from '../components/Experience';
import Projects from '../components/Projects';
import NetworkBackground from '../components/particleBg';

// Move the styles to a separate CSS file or use inline styles
const loaderStyles = {
  keyframes: `
    @keyframes spinner-rotation {
      0% { transform: rotate(0deg) }
      50% { transform: rotate(180deg) }
      100% { transform: rotate(360deg) }
    }
  `,
  loaderContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  spinner: {
    width: '80px',  // Reduced from 200px
    height: '80px', // Reduced from 200px
    position: 'relative',
    display: 'inline-block',
    overflow: 'hidden'
  },
  spinnerInner: {
    width: '100%',
    height: '100%',
    position: 'relative',
    transform: 'translateZ(0) scale(1)',
    backfaceVisibility: 'hidden',
    transformOrigin: '0 0'
  },
  spinnerCircle: {
    position: 'absolute',
    animation: 'spinner-rotation 1s linear infinite',
    width: '64px',   // 80% of container
    height: '64px',  // 80% of container
    top: '8px',      // Centered
    left: '8px',     // Centered
    borderRadius: '50%',
    boxShadow: '0 3px 0 0 #f59e0b', /* Amber color */
    transformOrigin: '32px 33.5px',  // Half of width + center adjustment
    boxSizing: 'content-box'
  }
};

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 800,
      once: true
    });
    
    // Set dark mode
    document.documentElement.classList.add('dark');
    
    // Setup loading timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
          <style dangerouslySetInnerHTML={{ __html: loaderStyles.keyframes }} />
          <div className="flex flex-col items-center justify-center">
            <div style={loaderStyles.spinner}>
              <div style={loaderStyles.spinnerInner}>
                <div style={loaderStyles.spinnerCircle}></div>
              </div>
            </div>
            <p className="text-amber-400 mt-2">Chargement de mon portfolio...</p>
          </div>
        </div>
      ) : (
        <div className="relative min-h-screen">
          {/* Custom Network Background */}
          <NetworkBackground />
          
          {/* Main Content */}
          <div className="relative z-10">
            <PortfolioHeader />
            <Competences />
            {/* EXPERIENCE SY PROJET MISY MI'DÉBORDE */}
            <Experiences />  
            <Projects />
            
            {/* Footer */}
            <footer className="py-8 px-4 text-white border-t border-gray-800 relative z-10 bg-black bg-opacity-30 backdrop-blur-sm">
              <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-6 md:mb-0">
                    <p className="text-gray-400 font-bold">
                      © 2025 AdrNandrianintsoa
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <a 
                      href="https://github.com/nandrianintsoa" 
                      className="p-3 bg-gray-800 rounded-full text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                      aria-label="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/nandrianintsoa-andrianirina-618724326" 
                      className="p-3 bg-gray-800 rounded-full text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a 
                      href="mailto:adrnandrianinstoa272@gmail.com" 
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
      )}
    </>
  );
};

export default Home;