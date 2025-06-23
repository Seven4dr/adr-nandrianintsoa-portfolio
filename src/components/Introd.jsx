import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { FaLinkedin, FaGithub, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import cvFile from '../../public/images/cv.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PortfolioHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Nandrianintsoa_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
<section className="min-h-screen bg-gray-900 px-6 py-12 flex items-center justify-center w-full">
      <div className="w-full max-w-5xl mx-auto">
        <div className="space-y-8 text-left">
          {/* Greeting */}
          <div
            className={`text-emerald-400 font-mono text-sm md:text-base transition-transform duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Bonjour, je suis
          </div>

          {/* Name with Typewriter */}
          <div
            className={`transition-transform duration-700 delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-100 leading-tight select-none">
              <Typewriter
                options={{
                  strings: ['Nandrianintsoa', 'Fullstack & Artificial Intelligence Developer'],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                }}
              />
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`transition-transform duration-700 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <h2 className="text-lg md:text-xl text-slate-400 font-light max-w-lg">
              Je conçois des expériences numériques exceptionnelles.
            </h2>
          </div>

          {/* Description */}
          <div
            className={`transition-transform duration-700 delay-300 max-w-xl ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Développeur Fullstack & IA passionné par les interfaces modernes et les solutions intelligentes.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-5 justify-start transition-transform duration-700 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <button
              onClick={handleDownloadCV}
              className="group relative px-7 py-3 border-2 border-emerald-400 text-emerald-400 font-mono text-sm rounded-md
                         hover:bg-emerald-500 hover:text-white transition-colors duration-300 flex items-center gap-2 shadow-sm"
              aria-label="Télécharger CV"
            >
              Télécharger CV
              <FaExternalLinkAlt className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Social Links */}
          <div
            className={`flex items-center gap-6 justify-start transition-transform duration-700 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {[{
              href: "https://github.com/nandrianintsoa",
              icon: <FaGithub className="w-6 h-6" />,
              label: "GitHub"
            }, {
              href: "https://www.linkedin.com/in/nandrianintsoa-andrianirina-618724326",
              icon: <FaLinkedin className="w-6 h-6" />,
              label: "LinkedIn"
            }, {
              href: "mailto:adrnandrianinstoa272@gmail.com",
              icon: <FaEnvelope className="w-6 h-6" />,
              label: "Email"
            }].map(({href, icon, label}) => (
              <a
                key={label}
                href={href}
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHeader;
