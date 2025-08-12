"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Confetti from "react-confetti";
import PortfolioHeader from "../components/PortfolioHeader";
import Competences from "../components/Competences";
import Experiences from "../components/Experience";
import Projects from "../components/Projects";
// import Background from "./Background"
import Marquee from "../components/Marquee";
import { SmoothCursor } from "../components/SmoothCursor";
import "./header-styles.css";
import Background from "./Backgound";
import { naLogo } from "../../public/images";

// Composant pour l'icône de localisation
const LocationIcon = () => (
  <div className="flex items-center space-x-2">
    <FaMapMarkerAlt className="text-lg text-gray-400" />
    <span className="text-sm text-gray-400 font-medium tracking-wide">
      Fianarantsoa
    </span>
  </div>
);

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiColors, setConfettiColors] = useState(["#8B5CF6"]);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const menuItems = [
    { name: "Compétences", href: "#competences" },
    { name: "Expérience", href: "#experience" },
    { name: "Projets", href: "#projets" },
  ];

  const loadingSteps = ["FULLSTACK", "AI", "BI", "DEVELOPER"];
  const allColors = ["#8B5CF6", "#EC4899", "#EAB308", "#10B981", "#F97316"];

  // Gérer les dimensions de la fenêtre pour les confettis
  useEffect(() => {
    const updateWindowDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
      delay: 0,
    });
    document.documentElement.classList.add("dark");

    // Animation des étapes de chargement
    let stepIndex = 0;
    const stepInterval = setInterval(() => {
      stepIndex = (stepIndex + 1) % loadingSteps.length;
      setCurrentStepIndex(stepIndex);
    }, 1000); // Change d'étape toutes les secondes

    // Timer pour le loading - 3 cycles complets
    const loadingTimer = setTimeout(() => {
      clearInterval(stepInterval);
      setLoading(false);

      // Déclencher les confettis après la fin du loading
      setTimeout(() => {
        setShowConfetti(true);

        // Animation des couleurs des confettis
        let colorIndex = 0;
        const colorInterval = setInterval(() => {
          colorIndex++;
          if (colorIndex <= allColors.length) {
            setConfettiColors(allColors.slice(0, colorIndex));
          } else {
            clearInterval(colorInterval);
          }
        }, 400);

        // Arrêter les confettis après 6 secondes
        // Arrêter les confettis après 3 secondes (au lieu de 6)
        setTimeout(() => {
          setShowConfetti(false);
          clearInterval(colorInterval);
        }, 5000);
      }, 500);
    }, 4000); // 3 étapes × 1.3s ≈ 4 secondes

    return () => {
      clearInterval(stepInterval);
      clearTimeout(loadingTimer);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const scrollPosition = window.scrollY + 200;
      const sections = menuItems
        .map((item) => {
          const el = document.querySelector(item.href);
          return el
            ? { ...item, top: el.getBoundingClientRect().top + window.scrollY }
            : null;
        })
        .filter(Boolean);

      const current = sections.findLast
        ? sections.findLast((section) => scrollPosition >= section.top)
        : sections.reverse().find((section) => scrollPosition >= section.top);

      if (current && current.href !== activeSection) {
        setActiveSection(current.href);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeSection, menuItems]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Confettis avec couleurs variées */}
      {/* Confettis avec couleurs variées */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={100} // Réduit de 200 à 80
          gravity={0.1}
          wind={0}
          force={0.8}
          colors={confettiColors}
          style={{ position: "fixed", top: 0, left: 0, zIndex: 9999 }}
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
        <div className="rocket-loading-container">
          <div className="body">
            <span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className="base">
              <span></span>
              <div className="face"></div>
            </div>
          </div>
          <div className="longfazers">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="loading-steps">
            <div className="step-text">{loadingSteps[currentStepIndex]}</div>
            <div className="step-progress">
              <div
                className="progress-bar"
                style={{
                  width: `${
                    ((currentStepIndex + 1) / loadingSteps.length) * 100
                  }%`,
                }}
              ></div>
            </div>
            <div className="step-counter">
              {String(currentStepIndex + 1).padStart(2, "0")} /{" "}
              {String(loadingSteps.length).padStart(2, "0")}
            </div>
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
                        <img
                          src={naLogo || "/placeholder.svg"}
                          alt="Logo"
                          className="w-full h-full object-cover rounded-xl"
                        />
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
                        className={`nav-link nav-link-hover ${
                          activeSection === item.href ? "nav-link-active" : ""
                        }`}
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
                      <div
                        className={`hamburger-line ${
                          mobileMenuOpen ? "hamburger-line-1-open" : ""
                        }`}
                      />
                      <div
                        className={`hamburger-line ${
                          mobileMenuOpen ? "hamburger-line-2-open" : ""
                        }`}
                      />
                      <div
                        className={`hamburger-line ${
                          mobileMenuOpen ? "hamburger-line-3-open" : ""
                        }`}
                      />
                    </div>
                  </button>
                </div>

                {/* Mobile Navigation */}
                <div
                  className={`mobile-nav ${
                    mobileMenuOpen ? "mobile-nav-open" : ""
                  }`}
                >
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
                          activeSection === item.href
                            ? "mobile-nav-link-active"
                            : ""
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
                  <p className=" text-sm text-purple-400 ">
                    © 2025 AdrNandrianintsoa
                  </p>
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

        /* Styles pour le loading avec fusée rose */
        .rocket-loading-container {
          position: fixed;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 50;
          background: transparent;
          overflow: hidden;
          flex-direction: column;
        }

        .body {
          position: absolute;
          top: 50%;
          margin-left: -50px;
          left: 50%;
          animation: speeder 0.4s linear infinite;
        }

        .body > span {
          height: 5px;
          width: 35px;
          background: #ec4899; /* Rose */
          position: absolute;
          top: -19px;
          left: 60px;
          border-radius: 2px 10px 1px 0;
        }

        .base span {
          position: absolute;
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-right: 100px solid #ec4899; /* Rose */
          border-bottom: 6px solid transparent;
        }

        .base span:before {
          content: "";
          height: 22px;
          width: 22px;
          border-radius: 50%;
          background: #ec4899; /* Rose */
          position: absolute;
          right: -110px;
          top: -16px;
        }

        .base span:after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-top: 0 solid transparent;
          border-right: 55px solid #ec4899; /* Rose */
          border-bottom: 16px solid transparent;
          top: -16px;
          right: -98px;
        }

        .face {
          position: absolute;
          height: 12px;
          width: 20px;
          background: #ec4899; /* Rose */
          border-radius: 20px 20px 0 0;
          transform: rotate(-40deg);
          right: -125px;
          top: -15px;
        }

        .face:after {
          content: "";
          height: 12px;
          width: 12px;
          background: #ec4899; /* Rose */
          right: 4px;
          top: 7px;
          position: absolute;
          transform: rotate(40deg);
          transform-origin: 50% 50%;
          border-radius: 0 0 0 2px;
        }

        .body > span > span:nth-child(1),
        .body > span > span:nth-child(2),
        .body > span > span:nth-child(3),
        .body > span > span:nth-child(4) {
          width: 30px;
          height: 1px;
          background: #ec4899; /* Rose */
          position: absolute;
          animation: fazer1 0.2s linear infinite;
        }

        .body > span > span:nth-child(2) {
          top: 3px;
          animation: fazer2 0.4s linear infinite;
        }

        .body > span > span:nth-child(3) {
          top: 1px;
          animation: fazer3 0.4s linear infinite;
          animation-delay: -1s;
        }

        .body > span > span:nth-child(4) {
          top: 4px;
          animation: fazer4 1s linear infinite;
          animation-delay: -1s;
        }

        .longfazers {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .longfazers span {
          position: absolute;
          height: 2px;
          width: 20%;
          background: #ec4899; /* Rose */
        }

        .longfazers span:nth-child(1) {
          top: 20%;
          animation: lf 0.6s linear infinite;
          animation-delay: -5s;
        }

        .longfazers span:nth-child(2) {
          top: 40%;
          animation: lf2 0.8s linear infinite;
          animation-delay: -1s;
        }

        .longfazers span:nth-child(3) {
          top: 60%;
          animation: lf3 0.6s linear infinite;
        }

        .longfazers span:nth-child(4) {
          top: 80%;
          animation: lf4 0.5s linear infinite;
          animation-delay: -3s;
        }

        /* Styles pour les étapes de chargement */
        .loading-steps {
          position: absolute;
          bottom: 30%;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          color: #ec4899;
          font-family: "JetBrains Mono", monospace;
        }

        .step-text {
          font-size: 2rem;
          font-weight: bold;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          text-shadow: 0 0 20px rgba(236, 72, 153, 0.8);
          transition: all 0.5s ease;
        }

        .step-progress {
          width: 200px;
          height: 4px;
          background: rgba(236, 72, 153, 0.2);
          border-radius: 2px;
          margin: 0 auto 1rem;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #ec4899, #8b5cf6);
          border-radius: 2px;
          transition: width 0.5s ease;
        }

        .step-counter {
          font-size: 0.9rem;
          opacity: 0.8;
          letter-spacing: 1px;
        }

        /* Animations existantes */
        @keyframes speeder {
          0% {
            transform: translate(2px, 1px) rotate(0deg);
          }
          10% {
            transform: translate(-1px, -3px) rotate(-1deg);
          }
          20% {
            transform: translate(-2px, 0px) rotate(1deg);
          }
          30% {
            transform: translate(1px, 2px) rotate(0deg);
          }
          40% {
            transform: translate(1px, -1px) rotate(1deg);
          }
          50% {
            transform: translate(-1px, 3px) rotate(-1deg);
          }
          60% {
            transform: translate(-1px, 1px) rotate(0deg);
          }
          70% {
            transform: translate(3px, 1px) rotate(-1deg);
          }
          80% {
            transform: translate(-2px, -1px) rotate(1deg);
          }
          90% {
            transform: translate(2px, 1px) rotate(0deg);
          }
          100% {
            transform: translate(1px, -2px) rotate(-1deg);
          }
        }

        @keyframes fazer1 {
          0% {
            left: 0;
          }
          100% {
            left: -80px;
            opacity: 0;
          }
        }

        @keyframes fazer2 {
          0% {
            left: 0;
          }
          100% {
            left: -100px;
            opacity: 0;
          }
        }

        @keyframes fazer3 {
          0% {
            left: 0;
          }
          100% {
            left: -50px;
            opacity: 0;
          }
        }

        @keyframes fazer4 {
          0% {
            left: 0;
          }
          100% {
            left: -150px;
            opacity: 0;
          }
        }

        @keyframes lf {
          0% {
            left: 200%;
          }
          100% {
            left: -200%;
            opacity: 0;
          }
        }

        @keyframes lf2 {
          0% {
            left: 200%;
          }
          100% {
            left: -200%;
            opacity: 0;
          }
        }

        @keyframes lf3 {
          0% {
            left: 200%;
          }
          100% {
            left: -100%;
            opacity: 0;
          }
        }

        @keyframes lf4 {
          0% {
            left: 200%;
          }
          100% {
            left: -100%;
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
