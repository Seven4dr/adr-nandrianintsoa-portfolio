"use client"

import { useState, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import PortfolioHeader from "../components/PortfolioHeader"
import Competences from "../components/Competences"
import Experiences from "../components/Experience"
import Projects from "../components/Projects"
// import Background from "./Background"
import Marquee from "../components/Marquee"
import { SmoothCursor } from "../components/SmoothCursor"
import "./header-styles.css"
import Background from "./Backgound"

// Composant pour l'icône de localisation
const LocationIcon = () => (
  <div className="flex items-center space-x-2">
    <FaMapMarkerAlt className="text-lg text-gray-400" />
    <span className="text-sm text-gray-400 font-medium tracking-wide">Fianarantsoa</span>
  </div>
)

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const menuItems = [
    { name: "Compétences", href: "#competences" },
    { name: "Expérience", href: "#experience" },
    { name: "Projets", href: "#projets" },
  ]

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
      delay: 0,
    })
    document.documentElement.classList.add("dark")
    setLoading(false)
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
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-purple-400 border-dashed rounded-full animate-spin"></div>
            <p className="mt-6 text-purple-400 font-mono text-sm">Chargement du portfolio...</p>
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
                        <img src="/na.png" alt="Logo" className="w-full h-full object-cover rounded-xl" />
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
          className="min-h-[170px] w-full z-15 relative opacity-0 translate-y-5 
                    animate-[fadeInUp_0.6s_ease-out_0.2s_forwards] 
                    mt-4 mb-4  sm:mt-2 sm:mb-2"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <Marquee />
        </section>


            <section
              id="competences"
              className="opacity-0 translate-y-5 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]"
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
      `}</style>
    </>
  )
}

export default Home
