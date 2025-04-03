import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { annexe1, annexe2, dashboard, epi1, epi2, epi4, home, mobile, order, produits } from '../../public/images';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-in-out',
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Mise en place d'un tableau de bord pour le suivi du patrimoine numérique sur Perfectnodes",
      image: home,
      technologies: ["REACT", "TAILWINDCSS"],
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
      technologies: ["REACT", "EXPRESS", "MongoDB"],
      screenshots: [
        epi2,
        epi4
      ]
    }
  ];

  return (
    <div className="bg-black text-white py-16 px-4 md:px-8 lg:px-16">
      {/* Main title */}
      <h1 
        className="text-4xl font-bold text-center mb-12 uppercase tracking-wider text-white"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        MES PROJETS
      </h1>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="relative overflow-hidden rounded-lg"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={200 + (index * 100)}
          >
            {/* Project container */}
            <div className={`bg-opacity-20 ${project.id % 2 === 0 ? 'bg-red-900' : 'bg-blue-900'} p-4 rounded-lg`}>
              {/* Project main image */}
              <div 
                className="mb-4 rounded-lg overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay={300 + (index * 100)}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto" 
                />
              </div>
              
              {/* Screenshots grid */}
              {project.screenshots.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {project.screenshots.map((screenshot, idx) => (
                    <div 
                      key={idx} 
                      className="relative h-48 md:h-40 lg:h-48 rounded-lg overflow-hidden"
                      data-aos="flip-up"
                      data-aos-delay={400 + (idx * 100)}
                    >
                      <img 
                        src={screenshot} 
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  ))}
                </div>
              )}
              
              {/* Project title */}
              <h2 
                className="text-xl md:text-2xl font-bold mt-4 mb-6"
                data-aos="fade-up"
                data-aos-delay={300 + (index * 100)}
              >
                {project.title}
              </h2>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="border border-white rounded-full px-4 py-1 text-sm"
                    data-aos="zoom-in"
                    data-aos-delay={500 + (idx * 100)}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;