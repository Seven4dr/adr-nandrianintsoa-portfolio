import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { alarm2, dashboard, epi1, home, mobile, predictia } from '../../public/images';
import { FaEye, FaTimes } from 'react-icons/fa';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
      easing: 'ease-out',
    });

    // Auto-scroll marquee effect (only for mobile)
    const interval = setInterval(() => {
      if (window.innerWidth < 1024) { // Only on mobile/tablet
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Tableau de bord patrimoine numérique",
      subtitle: "Dashboard Perfectnodes",
      image: home,
      technologies: ["REACT", "EXPRESS", "TAILWINDCSS"],
      screenshots: [],
      description: "Développement d'un tableau de bord complet pour le suivi et la gestion du patrimoine numérique avec des fonctionnalités de monitoring en temps réel. Cette solution permet aux entreprises de visualiser et gérer efficacement leurs actifs numériques.",
      features: ["Monitoring en temps réel", "Interface intuitive", "Gestion des actifs", "Rapports détaillés", "Alertes personnalisées", "Export de données"],
    },
    {
      id: 2,
      title: "Plateforme e-commerce complète",
      subtitle: "Gestion espace commercial",
      image: dashboard,
      technologies: ["REACT", "NEST", "TAILWINDCSS"],
      screenshots: [],
      description: "Plateforme e-commerce complète avec gestion des produits, commandes, paiements et analytics avancés. Solution robuste pour la gestion complète d'un espace commercial en ligne.",
      features: ["Gestion des produits", "Système de paiement", "Analytics avancés", "Interface d'administration", "Gestion des stocks", "CRM intégré"],
    },
    {
      id: 3,
      title: "Monitoring navigateur PC",
      subtitle: "Suivi d'activité",
      image: mobile,
      technologies: ["FLUTTER", "EXPRESS"],
      screenshots: [],
      description: "Application de monitoring pour suivre l'activité des navigateurs web avec des rapports détaillés d'utilisation. Outil professionnel pour l'analyse comportementale et la productivité.",
      features: ["Monitoring en temps réel", "Rapports d'activité", "Historique de navigation", "Alertes personnalisées", "Analytics comportementales", "Export de données"],
    },
      {
      id: 4,
      title: "Application mobile Alarm",
      subtitle: "Flutter App",
      image: alarm2, // Ici, l'image alarm2 est référencée
      technologies: ["FLUTTER", "DART", "MOBILE"],
      screenshots: [],
      description: "Application mobile d'alarme avec interface moderne et fonctionnalités avancées de personnalisation. Solution complète pour la gestion des alarmes et rappels.",
      features: ["Alarmes multiples", "Interface moderne", "Personnalisation avancée", "Notifications push", "Widgets personnalisés", "Synchronisation cloud"],
    },
    {
      id: 5,
      title: "Gestion épidémies IA",
      subtitle: "Big Data & Intelligence Artificielle",
      image: epi1,
      technologies: ["REACT", "FLASK", "IA"],
      screenshots: [],
      description: "Système de gestion et de prédiction des épidémies utilisant l'intelligence artificielle et l'analyse de big data. Solution innovante pour la santé publique.",
      features: ["Analyse prédictive", "Big Data processing", "Intelligence artificielle", "Visualisations interactives", "Alertes automatiques", "Rapports épidémiologiques"],
    },
    {
      id: 6,
      title: "Trading IA Dashboard",
      subtitle: "Prédiction de marché",
      image: predictia,
      technologies: ["REACT", "TAILWINDCSS", "RECHARTS"],
      screenshots: [],
      description: "Dashboard intelligent pour l'analyse et la prédiction des tendances de marché avec algorithmes d'IA avancés. Solution complète pour les traders professionnels.",
      features: ["Prédictions IA", "Analyse de marché", "Graphiques interactifs", "Signaux de trading", "Backtesting", "Alertes personnalisées"],
    }
  ];

  const openImage = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  const ProjectCard = ({ project, index }) => (
    <div
      className="w-full group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-all duration-700 hover:-translate-y-4 border border-purple-500/20"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Card Header with Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
        
        {/* Image Overlay Button */}
        <button
          onClick={() => openImage(project.image)}
          className="absolute top-4 right-4 bg-black/50 hover:bg-purple-600 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
        >
          <FaEye className="text-sm" />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-8">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-purple-300 text-sm font-medium">
            {project.subtitle}
          </p>
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed text-sm">
          {project.description.substring(0, 120)}...
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs border border-purple-500/30 hover:bg-purple-600/30 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>

      {/* Card Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-3xl transition-all duration-300"></div>
    </div>
  );

  return (
    <div className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Main title with animation */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-4 tracking-wider font-extrabold">
            MES PROJETS
          </h2>
          <div className="w-32 h-0.5 bg-purple-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Découvrez mes réalisations techniques</p>
        </div>
        
        {/* Desktop: All Cards Grid */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: Single Card Display */}
        <div className="lg:hidden">
          <div className="relative flex justify-center mb-8">
            <div className="w-full max-w-md">
              <ProjectCard project={projects[currentIndex]} index={0} />
            </div>
          </div>

          {/* Project Navigation Dots */}
          <div className="flex justify-center gap-3 mb-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`transition-all duration-300 hover:scale-110 ${
                  currentIndex === index 
                    ? 'w-12 h-3 bg-purple-500 rounded-full' 
                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500 rounded-full'
                }`}
              />
            ))}
          </div>

          {/* Project Counter */}
          <div className="text-center text-gray-400 text-sm">
            <span className="text-purple-400 font-bold">{currentIndex + 1}</span> sur <span className="text-purple-400 font-bold">{projects.length}</span> projets
          </div>
        </div>
      </div>

      {/* Image Viewer Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={closeImage}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 bg-gray-800 hover:bg-red-600 text-white p-3 rounded-full transition-colors duration-300"
              onClick={closeImage}
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage}
              alt="Projet agrandi"
              className="w-full h-auto rounded-2xl shadow-2xl ring-2 ring-purple-400/50"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;