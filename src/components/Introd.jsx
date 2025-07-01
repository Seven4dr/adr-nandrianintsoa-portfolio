import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { FaLinkedin, FaGithub, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import cvFile from '../../public/images/cv.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Enregistrer le plugin TextPlugin
gsap.registerPlugin(TextPlugin);

const PortfolioHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const nameRef = useRef(null);
  const cursorRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (nameRef.current && cursorRef.current && isVisible) {
      const texts = ['Nandrianintsoa', 'Fullstack & AI Developer'];

      // Timeline principale
      const masterTimeline = gsap.timeline({ repeat: -1 });
      
      // Animation du curseur clignotant
      const cursorAnimation = gsap.to(cursorRef.current, {
        opacity: 0.3,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      const createTypewriterSequence = () => {
        const tl = gsap.timeline();
        
        texts.forEach((text) => {
          // Animation d'écriture
          tl.to(nameRef.current, {
            duration: text.length * 0.08,
            text: {
              value: text,
              delimiter: ""
            },
            ease: "none"
          })
          // Pause avant effacement
          .to({}, { duration: 2 })
          // Animation d'effacement
          .to(nameRef.current, {
            duration: text.length * 0.03,
            text: {
              value: "",
              delimiter: ""
            },
            ease: "none"
          })
          // Petite pause avant le texte suivant
          .to({}, { duration: 0.5 });
        });

        return tl;
      };

      masterTimeline.add(createTypewriterSequence());
      timelineRef.current = masterTimeline;

      return () => {
        if (timelineRef.current) {
          timelineRef.current.kill();
        }
        if (cursorAnimation) {
          cursorAnimation.kill();
        }
      };
    }
  }, [isVisible]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Nandrianintsoa_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-gray-900 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex items-center justify-center w-full ">
      <div className="w-full max-w-6xl mx-auto">
        <div className="space-y-6 sm:space-y-8 text-left">
          {/* Greeting */}
          <div
            className={`text-purple-400 font-mono text-xs sm:text-sm md:text-base transition-transform duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Bonjour, je suis
          </div>

          {/* Name with GSAP Typewriter Effect */}
          <div
            className={`transition-transform duration-700 delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="relative">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-100 leading-tight select-none min-h-[1.2em] flex items-center">
                <span 
                  ref={nameRef}
                  className="bg-gradient-to-r from-slate-100 via-purple-200 to-slate-100 bg-clip-text text-transparent"
                >
                  {/* Le texte sera animé par GSAP */}
                </span>
                <span 
                  ref={cursorRef}
                  className="text-purple-400 ml-1 font-thin opacity-60"
                  style={{ fontSize: '0.9em' }}
                >
                  |
                </span>
              </h1>
              
              {/* Effet de glow subtil */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-30 -z-10"></div>
            </div>
          </div>

          {/* Subtitle */}
          <div
            className={`transition-transform duration-700 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-light max-w-lg">
              Je conçois des <span className="text-purple-400 font-medium">expériences numériques</span> exceptionnelles.
            </h2>
          </div>

          {/* Description */}
          <div
            className={`transition-transform duration-700 delay-300 max-w-xl ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
              Développeur <span className="text-purple-300">Fullstack & IA</span> passionné par les interfaces modernes 
              et les solutions intelligentes. Spécialisé dans la création d'applications web performantes et évolutives.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-5 justify-start transition-transform duration-700 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <button
              onClick={handleDownloadCV}
              className="group relative px-6 sm:px-7 py-3 sm:py-3.5 border-2 border-purple-400 text-purple-400 font-mono text-xs sm:text-sm rounded-lg
                         hover:bg-purple-400 hover:text-gray-900 hover:shadow-lg hover:shadow-purple-400/25 
                         transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden w-full sm:w-auto"
              aria-label="Télécharger CV"
            >
              <span className="relative z-10">Télécharger CV</span>
              <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              
              {/* Effet de background animé */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 translate-x-[-100%] 
                              group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            </button>
          </div>

          {/* Social Links */}
          <div
            className={`flex items-center gap-4 sm:gap-6 justify-start transition-transform duration-700 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {[{
              href: "https://github.com/nandrianintsoa",
              icon: <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />,
              label: "GitHub"
            }, {
              href: "https://www.linkedin.com/in/nandrianintsoa-andrianirina-618724326",
              icon: <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
              label: "LinkedIn"
            }, {
              href: "mailto:adrnandrianinstoa272@gmail.com",
              icon: <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />,
              label: "Email"
            }].map(({href, icon, label}) => (
              <a
                key={label}
                href={href}
                className="text-slate-400 hover:text-purple-400 hover:scale-110 transition-all duration-300 
                          p-2 rounded-lg hover:bg-slate-800/50"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 sm:w-48 md:w-64 lg:w-72 h-32 sm:h-48 md:h-64 lg:h-72 bg-purple-500/10 rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-40 sm:w-64 md:w-80 lg:w-96 h-40 sm:h-64 md:h-80 lg:h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHeader;