"use client"

import { useState, useEffect } from "react"
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa"
import { cvFile } from "../../public/images"

const PortfolioHeader = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)
    handleResize() // Initial check

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleDownloadCV = () => {
    try {
      const link = document.createElement("a")
      link.href = cvFile // Use the imported CV file
      link.download = "Nandrianintsoa_CV.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      console.log("Téléchargement du CV initié avec succès")
    } catch (error) {
      console.error("Erreur lors du téléchargement du CV:", error)
    }
  }

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap');
          
          * {
            font-family: 'Sora', sans-serif;
            box-sizing: border-box;
          }

          .portfolio-header {
            position: relative;
            min-height: 80vh;
            background: #111827;
            overflow: hidden;
          }

          .grid-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
            background-size: clamp(20px, 4vw, 40px) clamp(20px, 4vw, 40px);
            z-index: 1;
          }

          .content-wrapper {
            position: relative;
            z-index: 10;
            padding: clamp(1rem, 5vw, 4rem) clamp(1rem, 5vw, 2rem);
            max-width: 1400px;
            margin: 0 auto;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .hero-content {
            width: 100%;
            max-width: 1200px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: clamp(1rem, 3vw, 2rem);
            text-align: left;
          }

          .greeting-section {
            display: flex;
            align-items: center;
            gap: clamp(0.8rem, 2vw, 1.5rem);
            margin-top: 4rem;
            opacity: 0;
            transform: translateY(-30px);
            animation: fadeInDown 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s forwards;
          }

          .greeting {
            font-size: clamp(1rem, 3vw, 1.3rem);
            font-weight: 500;
            color: #ec4899;
            margin: 0;
          }

          .online-indicator-inline {
            width: clamp(8px, 1.5vw, 12px);
            height: clamp(8px, 1.5vw, 12px);
            background: #10b981;
            border-radius: 50%;
            animation: pulse 2s infinite;
            flex-shrink: 0;
          }

          .title-content {
            flex: 1;
          }

          .main-title {
            font-size: clamp(3rem, 10vw, 10rem);
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 0;
            color: #a855f7;
            opacity: 0;
            transform: translateY(80px);
            animation: slideInUp 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards;
            letter-spacing: -0.02em;
          }

          .main-title .highlight {
            background: linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #f472b6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            background-size: 200% 200%;
            animation: gradientShift 3s ease-in-out infinite;
          }

          .subtitle {
            font-size: clamp(1rem, 2.5vw, 1.6rem);
            font-weight: 600;
            color: #f472b6;
            margin-bottom: clamp(1rem, 3vw, 2rem);
            opacity: 0;
            transform: translateX(-50px);
            animation: slideInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s forwards;
            position: relative;
            text-align: left;
          }

          .subtitle::before {
            content: '';
            position: absolute;
            left: 0;
            bottom: -8px;
            width: clamp(40px, 10vw, 60px);
            height: 3px;
            background: linear-gradient(135deg, #ec4899, #a855f7);
            border-radius: 2px;
            opacity: 0;
            animation: slideInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s forwards;
          }

          .description {
            font-size: clamp(0.9rem, 2vw, 1.1rem);
            line-height: 1.8;
            color: #e2e8f0;
            margin-bottom: clamp(1.5rem, 4vw, 3rem);
            max-width: 90%;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s forwards;
            font-weight: 400;
            text-align: left;
          }

          .description .highlight {
            background: linear-gradient(135deg, #ec4899, #a855f7, #f472b6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 700;
            background-size: 200% 200%;
            animation: gradientShift 3s ease-in-out infinite;
          }

          .cta-section {
            display: flex;
            justify-content: flex-start;
            margin-bottom: clamp(1.5rem, 4vw, 3rem);
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.2s forwards;
          }

          .download-btn {
            display: flex;
            align-items: center;
            gap: clamp(0.5rem, 1.5vw, 1rem);
            padding: clamp(0.8rem, 2vw, 1.3rem) clamp(1.5rem, 3vw, 2.8rem);
            background: linear-gradient(135deg, #ec4899, #a855f7);
            color: white;
            border: none;
            border-radius: 12px;
            font-weight: 600;
            font-size: clamp(0.9rem, 2vw, 1.1rem);
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(236, 72, 153, 0.3);
            transform: translateY(0);
          }

          .download-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .download-btn:hover::before {
            left: 100%;
          }

          .download-btn:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 20px 50px rgba(236, 72, 153, 0.4);
            background: linear-gradient(135deg, #f472b6, #c084fc);
          }

          .download-btn svg {
            transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            width: clamp(16px, 2vw, 20px);
            height: clamp(16px, 2vw, 20px);
          }

          .download-btn:hover svg {
            transform: translateY(-2px);
          }

          .social-links {
            display: flex;
            gap: clamp(0.8rem, 2vw, 1.5rem);
            justify-content: flex-start;
            flex-wrap: wrap;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.4s forwards;
          }

          .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: clamp(45px, 8vw, 65px);
            height: clamp(45px, 8vw, 65px);
            background: rgba(255, 255, 255, 0.08);
            border: 2px solid rgba(236, 72, 153, 0.2);
            border-radius: 16px;
            color: #cbd5e1;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            backdrop-filter: blur(10px);
            position: relative;
            overflow: hidden;
          }

          .social-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1));
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .social-link:hover::before {
            opacity: 1;
          }

          .social-link:hover {
            transform: translateY(-8px) scale(1.1);
            background: rgba(236, 72, 153, 0.15);
            border-color: rgba(236, 72, 153, 0.6);
            color: #ec4899;
            box-shadow: 0 15px 40px rgba(236, 72, 153, 0.3);
          }

          .social-link:nth-child(2):hover {
            color: #a855f7;
            border-color: rgba(168, 85, 247, 0.6);
            box-shadow: 0 15px 40px rgba(168, 85, 247, 0.3);
          }

          .social-link:nth-child(3):hover {
            color: #f472b6;
            border-color: rgba(244, 114, 182, 0.6);
            box-shadow: 0 15px 40px rgba(244, 114, 182, 0.3);
          }

          .social-link svg {
            width: clamp(18px, 3vw, 24px);
            height: clamp(18px, 3vw, 24px);
          }

          /* Animations */
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-80px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(100px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes gradientShift {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
            }
          }

          .mouse-follower {
            position: absolute;
            width: clamp(150px, 20vw, 300px);
            height: clamp(150px, 20vw, 300px);
            background: radial-gradient(circle, rgba(236, 72, 153, 0.06) 0%, rgba(168, 85, 247, 0.04) 50%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 2;
            transition: transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            display: ${isMobile ? 'none' : 'block'};
          }

          .floating-elements {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
          }

          .floating-dot {
            position: absolute;
            width: clamp(6px, 1vw, 8px);
            height: clamp(6px, 1vw, 8px);
            background: linear-gradient(45deg, #ec4899, #a855f7);
            border-radius: 50%;
            opacity: 0.6;
            animation: floatDot 8s ease-in-out infinite;
          }

          .floating-dot:nth-child(1) {
            top: 20%;
            left: 15%;
            animation-delay: 0s;
          }

          .floating-dot:nth-child(2) {
            top: 60%;
            right: 20%;
            animation-delay: 2s;
          }

          .floating-dot:nth-child(3) {
            top: 80%;
            left: 25%;
            animation-delay: 4s;
          }

          .floating-dot:nth-child(4) {
            top: 30%;
            right: 35%;
            animation-delay: 1s;
          }

          @keyframes floatDot {
            0%, 100% {
              transform: translateY(0px);
              opacity: 0.6;
            }
            50% {
              transform: translateY(-20px);
              opacity: 1;
            }
          }

          /* Responsive Design */
          @media (min-width: 1400px) {
            .content-wrapper {
              padding: 5rem 3rem;
            }
            .main-title {
              font-size: clamp(6rem, 12vw, 12rem);
            }
          }

          @media (max-width: 1199px) and (min-width: 992px) {
            .content-wrapper {
              padding: 3rem 2rem;
            }
            .hero-content {
              gap: 1.5rem;
              max-width: 900px;
            }
            .social-links {
              gap: 1.2rem;
            }
            .download-btn {
              padding: 1.2rem 2.4rem;
              font-size: 1rem;
            }
            .social-link {
              width: 60px;
              height: 60px;
            }
          }

          @media (max-width: 991px) and (min-width: 768px) {
            .content-wrapper {
              padding: 2.5rem 1.8rem;
            }
            .hero-content {
              gap: 1.2rem;
              max-width: 700px;
            }
            .main-title {
              font-size: clamp(4rem, 8vw, 8rem);
            }
            .subtitle {
              font-size: 1.4rem;
            }
            .description {
              font-size: 1rem;
              max-width: 80%;
            }
            .download-btn {
              padding: 1rem 2rem;
            }
            .social-link {
              width: 55px;
              height: 55px;
            }
          }

          @media (max-width: 767px) {
            .grid-background {
              background-size: clamp(30px, 6vw, 60px) clamp(30px, 6vw, 60px); /* Carreaux plus grands */
            }
            .content-wrapper {
              padding: 2rem 1.5rem;
              justify-content: center;
              min-height: auto;
            }
            .hero-content {
              align-items: flex-start;
              text-align: left;
              gap: 1rem;
            }
            .title-content {
              text-align: left;
            }
            .subtitle {
              text-align: left;
              font-size: 1.3rem;
            }
            .subtitle::before {
              left: 0;
              transform: none; /* Supprime translateX(-50%) pour alignement à gauche */
              width: 40px;
            }
            .description {
              text-align: left;
              margin-left: 0;
              margin-right: auto;
              max-width: 95%;
            }
            .cta-section {
              justify-content: flex-start;
            }
            .social-links {
              justify-content: flex-start;
              gap: 1rem;
            }
            .greeting-section {
              justify-content: flex-start;
              gap: 1rem;
            }
            .download-btn {
              width: 100%;
              max-width: 280px;
              justify-content: center;
              padding: 1rem 1.8rem;
              font-size: 0.95rem;
            }
            .social-link {
              width: 50px;
              height: 50px;
            }
            .social-link svg {
              width: 20px;
              height: 20px;
            }
          }

          @media (max-width: 479px) {
            .content-wrapper {
              padding: 1.5rem 1rem;
            }
            .hero-content {
              gap: 0.8rem;
            }
            .greeting-section {
              gap: 0.8rem;
            }
            .greeting {
              font-size: 1rem;
            }
            .main-title {
              font-size: clamp(2.5rem, 8vw, 4rem);
            }
            .subtitle {
              font-size: 1.1rem;
              margin-bottom: 1.2rem;
            }
            .subtitle::before {
              width: 30px;
              height: 2px;
            }
            .description {
              font-size: 0.9rem;
              margin-bottom: 1.2rem;
            }
            .download-btn {
              padding: 0.9rem 1.5rem;
              font-size: 0.9rem;
              gap: 0.6rem;
            }
            .social-links {
              gap: 0.8rem;
            }
            .social-link {
              width: 45px;
              height: 45px;
            }
            .social-link svg {
              width: 18px;
              height: 18px;
            }
          }

          @media (max-width: 374px) {
            .content-wrapper {
              padding: 1rem 0.8rem;
            }
            .main-title {
              font-size: clamp(2rem, 7vw, 3.5rem);
            }
            .download-btn {
              padding: 0.8rem 1.2rem;
              font-size: 0.85rem;
            }
            .social-link {
              width: 40px;
              height: 40px;
            }
            .social-link svg {
              width: 16px;
              height: 16px;
            }
          }

          @media (max-height: 500px) and (orientation: landscape) {
            .content-wrapper {
              padding: 1rem;
              min-height: auto;
            }
            .hero-content {
              gap: 0.5rem;
            }
            .main-title {
              font-size: clamp(2rem, 6vw, 4rem);
              margin-bottom: 0.5rem;
            }
            .subtitle {
              font-size: 1rem;
              margin-bottom: 0.8rem;
            }
            .description {
              font-size: 0.9rem;
              margin-bottom: 0.8rem;
            }
            .download-btn {
              padding: 0.8rem 1.5rem;
            }
          }

          @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            .grid-background {
              background-size: clamp(15px, 3vw, 30px) clamp(15px, 3vw, 30px);
            }
            .download-btn, .social-link {
              border-radius: 14px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
            .mouse-follower, .floating-elements {
              display: none;
            }
          }

          @media (prefers-contrast: high) {
            .portfolio-header {
              background: #000;
            }
            .greeting, .main-title, .subtitle, .description {
              color: #fff;
            }
            .download-btn {
              background: #fff;
              color: #000;
            }
            .social-link {
              background: rgba(255, 255, 255, 0.2);
              border-color: #fff;
              color: #fff;
            }
          }
        `}
      </style>

      <section className="portfolio-header">
        <div className="grid-background"></div>

        <div className="floating-elements">
          <div className="floating-dot"></div>
          <div className="floating-dot"></div>
          <div className="floating-dot"></div>
          <div className="floating-dot"></div>
        </div>

        {!isMobile && (
          <div
            className="mouse-follower"
            style={{
              transform: `translate(${mousePosition.x - (isMobile ? 75 : 150)}px, ${mousePosition.y - (isMobile ? 75 : 150)}px)`,
            }}
          ></div>
        )}

        <div className="content-wrapper">
          <div className="hero-content">
            <div className="greeting-section">
              <div className="greeting">Bonjour, je suis Nandrianintsoa</div>
              <div className="online-indicator-inline"></div>
            </div>

            <div className="title-content">
              <h1 className="main-title">
                <span className="highlight">FullStack, AI & BI</span>
                <br /> Developer
              </h1>
            </div>

            <h2 className="subtitle">Je conçois des expériences numériques exceptionnelles</h2>

            <p className="description">
              Développeur <span className="highlight">Fullstack, AI & Business Intelligence</span> passionné par les
              interfaces modernes et les solutions intelligentes. Spécialisé dans la création d'applications web
              performantes, l'intelligence artificielle et l'analyse de données pour des insights métier stratégiques.
            </p>

            <div className="cta-section">
              <button onClick={handleDownloadCV} className="download-btn" aria-label="Télécharger CV">
                <FaDownload />
                Télécharger CV
              </button>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Seven4dr"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/nandrianintsoa-andrianirina-618724326"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:adrnandrianinstoa272@gmail.com" className="social-link" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PortfolioHeader