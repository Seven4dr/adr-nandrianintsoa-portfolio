import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { annexe1, annexe2, dashboard, epi1, epi2, epi4, home, mobile, order, portfolio, produits } from '../../public/images';
import { FaCode, FaEye, FaTimes } from 'react-icons/fa';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
      easing: 'ease-out',
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Mise en place d'un tableau de bord pour le suivi du patrimoine numérique sur Perfectnodes",
      image: home,
      technologies: ["REACT","EXPRESS", "TAILWINDCSS"],
      screenshots: [
        annexe1,
        annexe2
      ]
    },
    {
      id: 2,
      title: "Développement d'une plateforme e-commerce pour la gestion de l'espace commercial",
      image: dashboard,
      technologies: ["REACT", "NEST", "TAILWINDCSS"],
      screenshots: [
        produits,
        order
      ]
    },
    {
      id: 3,
      title: "Suivi d'Activité de Navigateur de PC",
      image: mobile,
      technologies: ["FLUTTER", "EXPRESS"],
      screenshots: []
    },
    {
      id: 4,
      title: "Gestion des épidémies incluant Big Data et IA",
      image: epi1,
      technologies: ["REACT", "FLASK"],
      screenshots: [
        epi2,
        epi4
      ]
    },
    {
      id: 5,
      title: "Mon Portfolio",
      image: portfolio,
      technologies: ["REACT", "TAILWINDCSS"],
      screenshots: []
    },
  ];

  const openImage = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Main title with animation */}
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 uppercase tracking-wide"
          data-aos="fade-down"
        >
          <span className="relative inline-block pb-2">
            Mes Projets
            {/* <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400"></span> */}
          </span>
        </h2>
        
        {/* Projects Grid - Responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="relative overflow-hidden rounded-lg shadow-lg"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={100}
            >
              {/* Project container with hover effect */}
              <div 
                className={`bg-gray-900 bg-opacity-80 p-4 sm:p-5 rounded-lg border-l-2 
                  ${project.id % 2 === 0 ? 'border-amber-400' : 'border-amber-400'} 
                  transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                {/* Project main image with hover effect */}
                <div 
                  className="mb-4 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => openImage(project.image)}
                  data-aos="zoom-in"
                  data-aos-delay={150}
                >
                  <div className="relative group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                      <span className="bg-amber-400 text-gray-900 p-2 rounded-full">
                        <FaEye className="text-lg" />
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Screenshots grid - Responsive and conditionally rendered */}
                {project.screenshots.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {project.screenshots.map((screenshot, idx) => (
                      <div 
                        key={idx} 
                        className="relative h-28 sm:h-32 md:h-36 rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => openImage(screenshot)}
                        data-aos="flip-up"
                        data-aos-delay={200 + (idx * 50)}
                      >
                        <div className="relative group h-full">
                          <img 
                            src={screenshot} 
                            alt={`${project.title} screenshot ${idx + 1}`}
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                            <span className="bg-amber-400 text-gray-900 p-2 rounded-full">
                              <FaEye className="text-sm" />
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Project title - Responsive font size */}
                <h3 
                  className="text-lg sm:text-xl font-bold mb-3 line-clamp-2 transition-colors duration-300 hover:text-amber-400"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  {project.title}
                </h3>
                
                {/* Technologies badges - Responsive design */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs flex items-center transition-all duration-300 hover:bg-amber-400 hover:text-gray-900"
                      data-aos="zoom-in"
                      data-aos-delay={250 + (idx * 50)}
                    >
                      <FaCode className="mr-1 text-xs" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Viewer Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={closeImage}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute -top-10 right-0 bg-gray-800 text-white p-2 rounded-full hover:bg-amber-400 hover:text-gray-900 transition-colors duration-300"
              onClick={closeImage}
            >
              <FaTimes />
            </button>
            <img 
              src={selectedImage} 
              alt="Projet agrandi" 
              className="w-full h-auto rounded-lg shadow-2xl" 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;