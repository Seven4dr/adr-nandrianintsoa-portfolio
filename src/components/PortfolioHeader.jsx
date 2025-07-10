import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaLinkedin, FaGithub, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { cvFile, robo } from '../../public/images';

const PortfolioHeader = () => {
  const marqueeRef = useRef(null);
  const marqueeRef2 = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

    if (marqueeRef.current && marqueeRef2.current) {
      gsap.set([marqueeRef.current, marqueeRef2.current], { x: 0 });

      gsap.to(marqueeRef.current, {
        x: '-50%',
        duration: 15,
        repeat: -1,
        ease: 'none',
      });

      gsap.to(marqueeRef2.current, {
        x: '50%',
        duration: 12,
        repeat: -1,
        ease: 'none',
      });
    }
  }, []);

  const handleDownloadCV = () => {
    try {
      const link = document.createElement('a');
      link.href = cvFile;
      link.download = 'Nandrianintsoa_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log('Téléchargement du CV initié avec succès');
    } catch (error) {
      console.error('Erreur lors du téléchargement du CV:', error);
      window.open(cvFile, '_blank');
    }
  };

  const marqueeContent1 = (
    <>
      <span className="mx-4 text-shadow-purple">Fullstack Developer</span>
      <span className="mx-4 font-mono text-yellow-300">Javascipt & Python</span>
      <span className="mx-2">•</span>
      <span className="mx-4 text-shadow-purple">AI Solutions</span>
      <span className="mx-4 font-mono text-yellow-300 italic">Web Performance</span>
      <span className="mx-2">•</span>
    </>
  );

  const marqueeContent2 = (
    <>
      <span className="mx-4 text-shadow-green">Nandrianintsoa</span>
      <span className="mx-4 font-mono text-green-400">@nandrianintsoa</span>
      <span className="mx-2">•</span>
      <span className="mx-4 text-shadow-green">Open to Opportunities</span>
      <span className="mx-4 font-mono text-green-400 italic">Let's Collaborate</span>
      <span className="mx-2">•</span>
    </>
  );

  return (
    <>
      <style>
        {`
          .text-shadow-purple {
            text-shadow: 0 0 8px rgba(192, 132, 252, 0.5), 0 0 12px rgba(192, 132, 252, 0.3);
          }
          .text-shadow-green {
            text-shadow: 0 0 8px rgba(52, 211, 153, 0.5), 0 0 12px rgba(52, 211, 153, 0.3);
          }
          .marquee-container {
            position: absolute;
            width: 100vw;
            height: 3.5rem;
            display: flex;
            align-items: center;
            overflow: hidden;
            z-index: 10;
          }
          .marquee-content {
            display: flex;
            align-items: center;
            white-space: nowrap;
            font-weight: 700;
            font-size: 0.9rem;
            padding: 0 1rem;
            width: 200%;
          }
          .intersection-glow {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100px;
            height: 100px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%);
            transform: translate(-50%, -50%);
            z-index: 5;
            pointer-events: none;
          }
          .robo-image {
            position: relative;
            filter: drop-shadow(0 0 15px rgba(192, 132, 252, 0.8)) 
                    drop-shadow(0 0 25px rgba(52, 211, 153, 0.6))
                    drop-shadow(0 0 35px rgba(59, 130, 246, 0.4));
            transition: filter 0.3s ease, transform 0.3s ease;
          }
          .robo-image:hover {
            filter: drop-shadow(0 0 20px rgba(192, 132, 252, 1)) 
                    drop-shadow(0 0 30px rgba(52, 211, 153, 0.8))
                    drop-shadow(0 0 40px rgba(59, 130, 246, 0.6));
            transform: scale(1.05);
          }
          .robo-image::before {
            content: '';
            position: absolute;
            top: -3px;
            left: -3px;
            right: -3px;
            bottom: -3px;
            background: linear-gradient(45deg, 
              rgba(192, 132, 252, 0.4), 
              rgba(52, 211, 153, 0.4), 
              rgba(59, 130, 246, 0.4),
              rgba(192, 132, 252, 0.4));
            border-radius: 0.5rem;
            z-index: -1;
            opacity: 0.7;
            filter: blur(2px);
            animation: glow-pulse 2s ease-in-out infinite alternate;
          }
          @keyframes glow-pulse {
            0% {
              opacity: 0.7;
              filter: blur(2px);
            }
            100% {
              opacity: 1;
              filter: blur(4px);
            }
          }
          @media (max-width: 640px) {
            .marquee-container {
              height: 2.5rem;
              width: 100vw;
            }
            .marquee-content {
              font-size: 0.65rem;
              padding: 0 0.5rem;
            }
            .robo-image {
              width: 60px;
              height: 60px;
            }
          }
          @media (min-width: 641px) and (max-width: 1024px) {
            .marquee-container {
              height: 3rem;
              width: 100vw;
            }
            .marquee-content {
              font-size: 0.8rem;
              padding: 0 0.75rem;
            }
            .robo-image {
              width: 80px;
              height: 80px;
            }
          }
          @media (min-width: 1025px) {
            .robo-image {
              width: 100px;
              height: 100px;
            }
          }
        `}
      </style>
      <section className="bg-gray-900 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex items-center justify-center w-full min-h-screen relative overflow-hidden">
        <div
          className="marquee-container"
          style={{
            top: '10%',
            left: '0',
            transform: 'rotate(6deg)',
            transformOrigin: 'center',
          }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 flex items-center w-full h-full shadow-lg shadow-purple-500/20">
            <div ref={marqueeRef} className="marquee-content text-white">
              {marqueeContent1}
              {marqueeContent1}
            </div>
          </div>
        </div>

        <div
          className="marquee-container"
          style={{
            bottom: '10%',
            left: '0',
            transform: 'rotate(-6deg)',
            transformOrigin: 'center',
          }}
        >
          <div className="bg-gradient-to-r from-green-600 to-purple-600 flex items-center w-full h-full shadow-lg shadow-green-500/20">
            <div ref={marqueeRef2} className="marquee-content text-white">
              {marqueeContent2}
              {marqueeContent2}
            </div>
          </div>
        </div>

        <div className="intersection-glow"></div>

        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between main-content relative z-10">
          <div className="space-y-6 text-left w-full lg:w-2/3">
            {/* Texte d'introduction repositionné plus bas */}
            <div className="intro-text text-purple-400 font-extrabold mt-16 sm:mt-20 md:mt-24 lg:mt-8" data-aos="fade-up">
              Bonjour, je suis Nandrianintsoa
            </div>

            <div className="flex items-center justify-between gap-4 lg:gap-6" data-aos="fade-up" data-aos-delay="100">
              <div className="relative flex-1">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-100 leading-tight select-none min-h-[1.2em] text-left font-extrabold tracking-tight">
                  <span className="bg-gradient-to-r from-slate-100 via-purple-200 to-slate-100 bg-clip-text text-transparent">
                    FullStack & AI
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-slate-100 via-purple-200 to-slate-100 bg-clip-text text-transparent">
                    Developer
                  </span>
                </h1>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-30 -z-10"></div>
              </div>
              <img
                src={robo}
                alt="Robo Illustration"
                className="robo-image flex-shrink-0"
                data-aos="fade-left"
                data-aos-delay="150"
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <div className="relative">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-lg">
                  <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                    Je conçois des expériences numériques exceptionnelles.
                  </span>
                </h2>
                <div className="absolute -left-4 top-1/2 w-2 h-8 bg-gradient-to-b from-green-400 to-blue-400 rounded-full transform -translate-y-1/2"></div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="max-w-xl">
              <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
                Développeur{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                    Fullstack & AI Developer
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 opacity-60"></span>
                </span>{' '}
                passionné par les interfaces modernes et les solutions intelligentes. Spécialisé dans la création d'applications web performantes et évolutives.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-start" data-aos="fade-up" data-aos-delay="400">
              <button
                onClick={handleDownloadCV}
                className="group relative px-6 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 text-white font-mono text-xs sm:text-sm rounded-lg
                           hover:shadow-lg hover:shadow-purple-400/25 hover:scale-105
                           transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden w-full sm:w-auto"
                aria-label="Télécharger CV"
              >
                <span className="relative z-10 font-bold">Télécharger CV</span>
                <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </button>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 justify-start" data-aos="fade-up" data-aos-delay="500">
              {[
                {
                  href: 'https://github.com/Seven4dr',
                  icon: <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: 'GitHub',
                  color: 'hover:text-green-400',
                },
                {
                  href: 'https://www.linkedin.com/in/nandrianintsoa-andrianirina-618724326',
                  icon: <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: 'LinkedIn',
                  color: 'hover:text-blue-400',
                },
                {
                  href: 'mailto:adrnandrianinstoa272@gmail.com',
                  icon: <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />,
                  label: 'Email',
                  color: 'hover:text-purple-400',
                },
              ].map(({ href, icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  className={`text-slate-400 ${color} hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-slate-800/50 relative group`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  {icon}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 sm:w-48 md:w-64 lg:w-72 h-32 sm:h-48 md:h-64 lg:h-72 bg-gradient-to-br from-green-400/10 via-blue-400/10 to-purple-400/10 rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-40 sm:w-64 md:w-80 lg:w-96 h-40 sm:h-64 md:h-80 lg:h-96 bg-gradient-to-tr from-purple-400/10 via-blue-400/10 to-green-400/10 rounded-full blur-3xl opacity-30 -z-10"></div>
        </div>
      </section>
    </>
  );
};

export default PortfolioHeader;