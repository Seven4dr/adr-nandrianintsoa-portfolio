import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import PortfolioHeader from '../components/Introd';
import Competences from '../components/Competences';
import Experiences from '../components/Experience';
import Projects from '../components/Projects';
import Background from './Backgound';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const menuItems = [
    { name: 'Compétences', href: '#competences' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Projets', href: '#projets' },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    document.documentElement.classList.add('dark');

    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      const scrollPosition = window.scrollY + 200;
      const sections = menuItems.map((item) => {
        const el = document.querySelector(item.href);
        return el ? { ...item, top: el.getBoundingClientRect().top + window.scrollY } : null;
      }).filter(Boolean);

      const current = sections.findLast((section) => scrollPosition >= section.top);
      if (current && current.href !== activeSection) {
        setActiveSection(current.href);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [activeSection]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-purple-400 border-dashed rounded-full animate-spin"></div>
            <p className="mt-6 text-purple-400 font-mono text-sm">Chargement du portfolio...</p>
          </div>
        </div>
      ) : (
        <Background variant="default">
          <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
              bg-transparent backdrop-blur-md border-b border-gray-800/20
              ${scrolled ? 'bg-gray-900/70 border-gray-700/50 shadow-lg hover:bg-gray-900/90' : 'hover:bg-gray-900/30'}
            `}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0">
                  <h1 className="text-xl font-mono font-bold text-purple-400">adr-nandrianintsoa</h1>
                </div>

                <nav className="hidden md:flex items-center space-x-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200
                        ${activeSection === item.href ? 'text-purple-400' : 'text-gray-300'}
                        hover:text-purple-400 hover:bg-purple-400/10 hover:scale-105`}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={toggleMobileMenu}
                    className="md:hidden p-2 rounded-lg transition-colors duration-200"
                    aria-label="Menu mobile"
                  >
                    <div className={`w-6 h-0.5 mb-1 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                    <div className={`w-6 h-0.5 mb-1 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                    <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Mobile Menu */}
              <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200
                        ${activeSection === item.href ? 'text-purple-400' : 'text-gray-300'}
                        hover:text-purple-400 hover:bg-purple-400/10`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="pt-16 bg-gray-900 min-h-screen">
            <PortfolioHeader />
            <section id="competences"><Competences /></section>
            <section id="experience"><Experiences /></section>
            <section id="projets"><Projects /></section>

            <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800 text-purple-400 font-mono">
              <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <p className="mb-6 md:mb-0 font-bold text-sm select-none">
                  © 2025 AdrNandrianintsoa
                </p>
                <div className="flex items-center space-x-6">
                  <a href="https://github.com/nandrianintsoa" target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition transform hover:scale-110"
                    aria-label="GitHub">
                    <FaGithub className="text-xl" />
                  </a>
                  <a href="https://www.linkedin.com/in/nandrianintsoa-andrianirina-618724326" target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition transform hover:scale-110"
                    aria-label="LinkedIn">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href="mailto:adrnandrianinstoa272@gmail.com"
                    className="p-3 bg-gray-800 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition transform hover:scale-110"
                    aria-label="Email">
                    <FaEnvelope className="text-xl" />
                  </a>
                </div>
              </div>
            </footer>
          </main>
        </Background>
      )}
    </>
  );
};

export default Home;
