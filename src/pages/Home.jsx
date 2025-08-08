"use client"

import { useState, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import Confetti from "react-confetti"
import PortfolioHeader from "../components/PortfolioHeader"
import Competences from "../components/Competences"
import Experiences from "../components/Experience"
import Projects from "../components/Projects"
// import Background from "./Background"
import Marquee from "../components/Marquee"
import { SmoothCursor } from "../components/SmoothCursor"
import "./header-styles.css"
import Background from "./Backgound"
import { naLogo } from "../../public/images"

// Composant pour l'icône de localisation
const LocationIcon = () => (
  <div className="flex items-center space-x-2">
    <FaMapMarkerAlt className="text-lg text-gray-400" />
    <span className="text-sm text-gray-400 font-medium tracking-wide">Fianarantsoa</span>
  </div>
)

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [currentText, setCurrentText] = useState("")
  const [isExploding, setIsExploding] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [showConfetti, setShowConfetti] = useState(false)
  const [confettiColors, setConfettiColors] = useState(['#8B5CF6'])
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const menuItems = [
    { name: "Compétences", href: "#competences" },
    { name: "Expérience", href: "#experience" },
    { name: "Projets", href: "#projets" },
  ]

  const loadingTexts = ["FullStack", "AI", "BI", "DEVELOPER"]
  const allColors = ['#8B5CF6', '#EC4899', '#EAB308', '#10B981', '#F97316', '#06B6D4']

  // Gérer les dimensions de la fenêtre pour les confettis
  useEffect(() => {
    const updateWindowDimensions = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    updateWindowDimensions()
    window.addEventListener("resize", updateWindowDimensions)

    return () => window.removeEventListener("resize", updateWindowDimensions)
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
      delay: 0,
    })
    document.documentElement.classList.add("dark")

    // Animation du texte de loading
    let currentIndex = 0
    setCurrentText(loadingTexts[0])

    const textInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % loadingTexts.length
      setCurrentText(loadingTexts[currentIndex])
    }, 1200); // 1.2s pour chaque mot

    // Arrêter le loading après 4 cycles complets
    const loadingTimer = setTimeout(() => {
      clearInterval(textInterval)
      
      // Effet d'explosion avant les confettis
      setIsExploding(true)
      
      setTimeout(() => { // Durée de l'explosion
        setLoading(false)
        
        // Déclencher les confettis après 1 seconde
        setTimeout(() => {
          setShowConfetti(true)
          
          // Animation des couleurs des confettis
          let colorIndex = 0
          const colorInterval = setInterval(() => {
            colorIndex++
            if (colorIndex <= allColors.length) {
              setConfettiColors(allColors.slice(0, colorIndex))
            } else {
              clearInterval(colorInterval)
            }
          }, 400)

          // Arrêter les confettis après 6 secondes
          setTimeout(() => {
            setShowConfetti(false)
            clearInterval(colorInterval)
          }, 6000)
        }, 1000) // Délai des confettis après la fin du loading
      }, 800); // Durée de l'animation d'explosion du texte
    }, 4800); // 4 mots × 1.2s = 4.8s (durée totale du texte défilant)

    return () => {
      clearInterval(textInterval)
      clearTimeout(loadingTimer)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      const scrollPosition = window.scrollY + 200
      const sections = menuItems
        .map((item) => {
          const el = document.querySelector(item.href)
          return el ? { ...item, top: el.getBoundingClientRect().top + window.scrollY } : null
        })
        .filter(Boolean)

      const current = sections.findLast
        ? sections.findLast((section) => scrollPosition >= section.top)
        : sections.reverse().find((section) => scrollPosition >= section.top)

      if (current && current.href !== activeSection) {
        setActiveSection(current.href)
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [activeSection, menuItems])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      {/* Confettis avec couleurs variées et effet d'explosion */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={200} // Plus de pièces pour une explosion
          gravity={0.1} // Moins de gravité pour une dispersion plus large
          wind={0} // Pas de vent horizontal initial
          force={0.8} // Force initiale vers le haut pour l'explosion
          colors={confettiColors}
          style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999 }}
        />
      )}

      {/* SmoothCursor avec couleur blanche */}
      <SmoothCursor
        className="!bg-white !border-white smooth-cursor-glow"
        style={{
          backgroundColor: "white",
          borderColor: "white",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
        }}
      />

      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Loading avec effet de texte "scroll" GSAP et explosion */}
          <div className="text-center relative">
            <h1 
              className={`text-6xl md:text-8xl font-bold text-pink-500 tracking-wide ${
                isExploding ? 'exploding' : 'text-slide-in-out'
              }`}
              key={currentText} // La clé force la ré-animation à chaque changement de texte
              style={{
                textShadow: "0 0 30px rgba(236, 72, 153, 0.8)",
                fontFamily: 'monospace'
              }}
            >
              {currentText}
              <span className="animate-pulse">|</span>
            </h1>

            {/* Particules d'explosion */}
            {isExploding && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-pink-500 rounded-full explosion-particle"
                    style={{
                      left: '50%',
                      top: '50%',
                      animation: `explode 0.8s ease-out forwards`,
                      animationDelay: `${i * 0.02}s`,
                      '--random-x': `${(Math.random() - 0.5) * 500}px`, // Plus grande dispersion
                      '--random-y': `${(Math.random() - 0.5) * 500}px`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <Background variant="default">
          {/* Header avec CSS pur */}
          <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
            <div className="header-container">
              <div className="header-content">
                <div className="header-inner">
                  {/* Logo/Brand - Style "na" */}
                  <div className="logo-container logo-hover">
                    {/* Icône "na" avec design moderne */}
                    <div className="logo-icon logo-icon-glow">
                      <span className="logo-text">
                        <img src={naLogo || "/placeholder.svg"} alt="Logo" className="w-full h-full object-cover rounded-xl" />
                      </span>
                    </div>
                    <h1 className="logo-text logo-text-glow">Nandrianintsoa</h1>
                  </div>

                  {/* Desktop Navigation - Style épuré */}
                  <nav className="desktop-nav">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`nav-link nav-link-hover ${activeSection === item.href ? "nav-link-active" : ""}`}
                      >
                        <span className="relative z-10">{item.name}</span>
                        {activeSection === item.href && (
                          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r rounded-full"></div>
                        )}
                      </a>
                    ))}
                  </nav>

                  {/* Mobile menu button */}
                  <button
                    onClick={toggleMobileMenu}
                    className="mobile-menu-btn mobile-btn-hover"
                    aria-label="Menu mobile"
                  >
                    <div className="hamburger">
                      <div className={`hamburger-line ${mobileMenuOpen ? "hamburger-line-1-open" : ""}`} />
                      <div className={`hamburger-line ${mobileMenuOpen ? "hamburger-line-2-open" : ""}`} />
                      <div className={`hamburger-line ${mobileMenuOpen ? "hamburger-line-3-open" : ""}`} />
                    </div>
                  </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`mobile-nav ${mobileMenuOpen ? "mobile-nav-open" : ""}`}>
                  <div className="mobile-nav-content">
                    {/* Mobile location */}
                    <div className="mobile-location">
                      <LocationIcon />
                      <span className="mobile-location-text">Madagascar</span>
                    </div>

                    {/* Mobile menu items */}
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`mobile-nav-link mobile-nav-hover ${
                          activeSection === item.href ? "mobile-nav-link-active" : ""
                        }`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="pt-1 sm:pt-1 bg-gray-900">
            {/* Section PortfolioHeader */}
            <section
              id="header"
              className="opacity-0 translate-y-5 animate-[fadeInUp_0.6s_ease-out_forwards]"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <PortfolioHeader />
            </section>

            {/* Section Marquee */}
            <section
              id="marquee"
              className="min-h-[120px] sm:min-h-[120px] md:min-h-[140px] lg:min-h-[170px] w-full z-15 relative opacity-0 translate-y-5
                         animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]
                         mt-1 mb-0 sm:mt-0 sm:mb-0 md:mt-1 md:mb-0 lg:mt-2 lg:mb-1"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <Marquee />
            </section>

            <section
              id="competences"
              className="mt-0 opacity-0 translate-y-5 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <Competences />
            </section>

            <section
              id="experience"
              className="opacity-0 translate-y-5 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards]"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <Experiences />
            </section>

            <section
              id="projets"
              className="opacity-0 translate-y-5 animate-[fadeInUp_0.6s_ease-out_0.8s_forwards]"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <Projects />
            </section>

            {/* Footer avec Tailwind CSS intégré */}
            <footer className="py-12 px-4 bg-gradient-to-br from-gray-900 to-gray-800 border-t border-purple-500/20">
              <div className="container mx-auto flex flex-col md:flex-row justify-between items-center max-w-6xl">
                <div className="flex items-center space-x-4 mb-6 md:mb-0">
                  <p className=" text-sm text-purple-400 ">© 2025 AdrNandrianintsoa</p>
                  <LocationIcon />
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://github.com/Seven4dr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-gray-800/50 rounded-xl text-purple-400 hover:bg-purple-600 hover:text-white
                      transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25
                      border border-gray-700/50 hover:border-purple-500/50 backdrop-blur-sm relative overflow-hidden
                      before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-purple-500/10 before:to-pink-500/10
                      before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-xl relative z-10" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nandrianintsoa-andrianirina-618724326"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-gray-800/50 rounded-xl text-purple-400 hover:bg-purple-600 hover:text-white
                      transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25
                      border border-gray-700/50 hover:border-purple-500/50 backdrop-blur-sm relative overflow-hidden
                      before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-purple-500/10 before:to-pink-500/10
                      before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-xl relative z-10" />
                  </a>
                  <a
                    href="mailto:adrnandrianinstoa272@gmail.com"
                    className="group p-4 bg-gray-800/50 rounded-xl text-purple-400 hover:bg-purple-600 hover:text-white
                      transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25
                      border border-gray-700/50 hover:border-purple-500/50 backdrop-blur-sm relative overflow-hidden
                      before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-purple-500/10 before:to-pink-500/10
                      before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                    aria-label="Email"
                  >
                    <FaEnvelope className="text-xl relative z-10" />
                  </a>
                </div>
              </div>
            </footer>
          </main>
        </Background>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes explode {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(calc(-50% + var(--random-x)), calc(-50% + var(--random-y))) scale(0);
          }
        }

        .exploding {
          animation: shake 0.8s ease-in-out, fadeOut 0.8s ease-in-out forwards;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
          20%, 40%, 60%, 80% { transform: translateX(10px); }
        }

        @keyframes fadeOut {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
          100% { opacity: 0; transform: scale(0); }
        }

        .explosion-particle {
          box-shadow: 0 0 10px rgba(236, 72, 153, 0.8);
        }

        @keyframes text-slide-in-out {
          0% { opacity: 0; transform: translateY(50px); }
          10% { opacity: 1; transform: translateY(0); } /* Apparition rapide */
          90% { opacity: 1; transform: translateY(0); } /* Reste visible */
          100% { opacity: 0; transform: translateY(-50px); } /* Disparition vers le haut */
        }

        .text-slide-in-out {
          animation: text-slide-in-out 1.2s ease-in-out forwards;
        }
      `}</style>
    </>
  )
}

export default Home
