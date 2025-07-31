"use client"

import { useState, useEffect } from "react"
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa"

// Simuler l'import du CV - remplacez par votre vrai chemin
const cvFile = "/cv/Nandrianintsoa_CV.pdf"

const PortfolioHeader = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleDownloadCV = () => {
    try {
      const link = document.createElement("a")
      link.href = cvFile
      link.download = "Nandrianintsoa_CV.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      console.log("Téléchargement du CV initié avec succès")
    } catch (error) {
      console.error("Erreur lors du téléchargement du CV:", error)
      window.open(cvFile, "_blank")
    }
  }

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap');
          
          * {
            font-family: 'Sora', sans-serif;
          }

          .portfolio-header {
            position: relative;
            min-height: 100vh;
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
            background-size: 40px 40px;
            z-index: 1;
          }

          .content-wrapper {
            position: relative;
            z-index: 10;
            padding: 4rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
            min-height: 100vh;
            display: flex;
            align-items: center;
          }

          .hero-content {
            width: 100%;
            max-width: 800px;
          }

          .text-content {
            width: 100%;
            text-align: left;
          }

          .greeting {
            font-size: 1.3rem;
            font-weight: 500;
            color: #ec4899;
            margin-bottom: 1rem;
            opacity: 0;
            transform: translateX(-50px);
            animation: slideInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards;
          }

          .main-title {
            font-size: clamp(3.5rem, 8vw, 7rem);
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 1.5rem;
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
            font-size: 1.8rem;
            font-weight: 600;
            color: #f472b6;
            margin-bottom: 2rem;
            opacity: 0;
            transform: translateX(-50px);
            animation: slideInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards;
            position: relative;
          }

          .subtitle::before {
            content: '';
            position: absolute;
            left: -20px;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 40px;
            background: linear-gradient(135deg, #ec4899, #a855f7);
            border-radius: 2px;
            opacity: 0;
            animation: slideInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s forwards;
          }

          .description {
            font-size: 1.2rem;
            line-height: 1.8;
            color: #e2e8f0;
            margin-bottom: 3rem;
            max-width: 700px;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s forwards;
            font-weight: 400;
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
            margin-bottom: 3rem;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s forwards;
          }

          .download-btn {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1.3rem 2.8rem;
            background: linear-gradient(135deg, #ec4899, #a855f7);
            color: white;
            border: none;
            border-radius: 12px;
            font-weight: 600;
            font-size: 1.1rem;
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
          }

          .download-btn:hover svg {
            transform: translateY(-2px);
          }

          .social-links {
            display: flex;
            gap: 1.5rem;
            justify-content: flex-start;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.2s forwards;
          }

          .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 65px;
            height: 65px;
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

          /* GSAP-style Animations */
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

          .mouse-follower {
            position: absolute;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(236, 72, 153, 0.06) 0%, rgba(168, 85, 247, 0.04) 50%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 2;
            transition: transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          /* Floating elements */
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
            width: 8px;
            height: 8px;
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

          @media (max-width: 768px) {
            .content-wrapper {
              padding: 2rem 1rem;
            }
            
            .download-btn {
              width: 100%;
              justify-content: center;
              padding: 1.2rem 2rem;
            }
            
            .social-links {
              gap: 1rem;
              justify-content: center;
            }
            
            .social-link {
              width: 55px;
              height: 55px;
            }
            
            .description {
              font-size: 1.1rem;
              margin-bottom: 2rem;
            }
            
            .subtitle {
              font-size: 1.4rem;
            }

            .subtitle::before {
              left: -15px;
              height: 30px;
            }
          }

          @media (max-width: 480px) {
            .greeting {
              font-size: 1.1rem;
            }
            
            .subtitle {
              font-size: 1.2rem;
            }
            
            .description {
              font-size: 1rem;
            }

            .text-content {
              text-align: center;
            }

            .cta-section {
              justify-content: center;
            }

            .subtitle::before {
              display: none;
            }
          }
        `}
      </style>

      <section className="portfolio-header">
        {/* Background Effects */}
        <div className="grid-background"></div>

        <div className="floating-elements">
          <div className="floating-dot"></div>
          <div className="floating-dot"></div>
          <div className="floating-dot"></div>
          <div className="floating-dot"></div>
        </div>

        {/* Mouse Follower */}
        <div
          className="mouse-follower"
          style={{
            transform: `translate(${mousePosition.x - 150}px, ${mousePosition.y - 150}px)`,
          }}
        ></div>

        <div className="content-wrapper">
          <div className="hero-content">
            <div className="text-content">
              <div className="greeting">Bonjour, je suis Nandrianintsoa</div>

              <h1 className="main-title">
                <span className="highlight">FullStack, AI & BI</span>
                <br />Developer
                
              </h1>

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
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nandrianintsoa-andrianirina-618724326"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <a href="mailto:adrnandrianinstoa272@gmail.com" className="social-link" aria-label="Email">
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PortfolioHeader
