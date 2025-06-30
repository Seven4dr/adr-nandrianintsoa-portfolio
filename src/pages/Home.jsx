import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import PortfolioHeader from '../components/Introd';
import Competences from '../components/Competences';
import Experiences from '../components/Experience';
import Projects from '../components/Projects';
import Background from './Backgound';

// Composant pour l'icône de localisation
const LocationIcon = () => (
  <div className="flex items-center space-x-2">
    <FaMapMarkerAlt className="text-xl text-gray-400" />
    <span className="text-xs text-gray-400 font-mono">Madagascar</span>
  </div>
);

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

      const current = sections.findLast
        ? sections.findLast((section) => scrollPosition >= section.top)
        : sections.reverse().find((section) => scrollPosition >= section.top);

      if (current && current.href !== activeSection) {
        setActiveSection(current.href);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [activeSection, menuItems]);

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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
              ${scrolled
                ? 'bg-gray-900/95 backdrop-blur-xl border-b border-purple-500/30 shadow-2xl shadow-purple-500/10'
                : 'bg-gray-900/20 backdrop-blur-md border-b border-gray-800/30'
              }`}
            style={{
              background: scrolled
                ? 'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.9) 100%)'
                : 'linear-gradient(135deg, rgba(17, 24, 39, 0.2) 0%, rgba(31, 41, 55, 0.1) 100%)',
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-20">
                {/* Logo avec effet de glow */}
                <div className="flex-shrink-0 group">
                  <h1
                    className="text-2xl font-mono font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent
                    hover:from-purple-300 hover:via-pink-300 hover:to-purple-400 transition-all duration-300
                    group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] cursor-pointer"
                  >
                    adr-nandrianintsoa
                  </h1>
                </div>

                {/* Navigation principale */}
                <nav className="hidden md:flex items-center space-x-2">
                  {menuItems.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`relative px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 group
                        ${activeSection === item.href
                          ? 'text-purple-400 bg-purple-500/10 shadow-lg shadow-purple-500/20'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                        }`}
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {/* Underline animé */}
                      <div
                        className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300
                        ${activeSection === item.href ? 'w-4/5' : 'w-0 group-hover:w-4/5'}`}
                      ></div>
                      {/* Effet de brillance au hover */}
                      <div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-purple-600/0
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      ></div>
                    </a>
                  ))}
                </nav>

                {/* Section droite avec icône de localisation */}
                <div className="flex items-center space-x-6">
                  {/* Icône de localisation */}
                  <div
                    className="hidden md:flex items-center space-x-3 px-4 py-2 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50
                    hover:bg-gray-800/50 hover:border-gray-600/50 transition-all duration-300 group"
                  >
                    <LocationIcon />
                    <div className="h-4 w-px bg-gray-600"></div>
                    <span className="text-xs text-gray-400 font-mono group-hover:text-gray-300 transition-colors duration-300">
                      Madagascar
                    </span>
                  </div>

                  {/* Bouton menu mobile */}
                  <button
                    onClick={toggleMobileMenu}
                    className="md:hidden relative p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50
                      hover:bg-gray-800/70 hover:border-purple-500/50 transition-all duration-300 group"
                    aria-label="Menu mobile"
                  >
                    <div className="w-6 h-6 flex flex-col justify-center items-center">
                      <div
                        className={`w-5 h-0.5 bg-gray-300 group-hover:bg-purpleandoli
                        ${mobileMenuOpen ? 'rotate-45 translate-y-0.5' : 'mb-1'}`}
                      />
                      <div
                        className={`w-5 h-0.5 bg-gray-300 group-hover:bg-purple-400 transition-all duration-300
                        ${mobileMenuOpen ? 'opacity-0' : 'mb-1'}`}
                      />
                      <div
                        className={`w-5 h-0.5 bg-gray-300 group-hover:bg-purple-400 transition-all duration-300
                        ${mobileMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}
                      />
                    </div>
                  </button>
                </div>
              </div>

              {/* Menu mobile amélioré */}
              <div
                className={`md:hidden transition-all duration-300 overflow-hidden
                ${mobileMenuOpen ? 'max-h-80 opacity-100 pb-4' : 'max-h-0 opacity-0 pointer-events-none'}`}
              >
 توافق
                <div className="px-2 pt-4 space-y-2">
                  {/* Icône de localisation mobile */}
                  <div
                    className="flex items-center justify-center space-x-3 px-4 py-3 mb-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50"
                  >
                    <LocationIcon />
                    <span className="text-sm text-gray-400 font-mono">Madagascar</span>
                  </div>

                 {menuItems.map((item, index) => (
                  <a
                    key={item.name} // Use item.name as the key for uniqueness
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`relative block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 group
                      ${activeSection === item.href
                        ? 'text-purple-400 bg-purple-500/10 border border-purple-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50 border border-transparent'
                      }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {/* Underline pour mobile */}
                    <div
                      className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300
                      ${activeSection === item.href ? 'w-1/2' : 'w-0 group-hover:w-1/2'}`}
                    ></div>
                  </a>
                ))}
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="pt-20 bg-gray-900 min-h-screen">
            <PortfolioHeader />
            <section id="competences" data-aos="fade-up">
              <Competences />
            </section>
            <section id="experience" data-aos="fade-up">
              <Experiences />
            </section>
            <section id="projets" data-aos="fade-up">
              <Projects />
            </section>

            <footer
              className="py-12 px-4 bg-gradient-to-br from-gray-900 to-gray-800 border-t border-purple-500/20"
            >
              <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-4 mb-6 md:mb-0">
                  <p className="font-bold text-sm text-purple-400 font-mono">
                    © 2025 AdrNandrianintsoa
                  </p>
                  <LocationIcon />
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href="https://github.com/nandrianintsoa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-800/50 rounded-xl text-purple-400 hover:bg-purple-600 hover:text-white
                      transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25
                      border border-gray-700/50 hover:border-purple-500/50 backdrop-blur-sm"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nandrianintsoa-andrianirina-618724326"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-800/50 rounded-xl text-purple-400 hover:bg-purple-600 hover:text-white
                      transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25
                      border border-gray-700/50 hover:border-purple-500/50 backdrop-blur-sm"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a
                    href="mailto:adrnandrianinstoa272@gmail.com"
                    className="p-4 bg-gray-800/50 rounded-xl text-purple-400 hover:bg-purple-600 hover:text-white
                      transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25
                      border border-gray-700/50 hover:border-purple-500/50 backdrop-blur-sm"
                    aria-label="Email"
                  >
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