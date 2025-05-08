import React, { useEffect } from 'react';
import { FaMobileAlt, FaBook, FaUserPlus, FaCar, FaChartLine, FaServer, FaCalendarAlt, FaTrophy, FaRobot, FaCube, FaChartBar, FaGraduationCap } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { emihack, madigicom, manasoa } from '../../public/images';

const Experiences = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false
    });
  }, []);

  const experiences = [
    {
      icon: <FaBook className="text-2xl" />,
      title: "Gestion de Bibliothèque",
      ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
      technologies: "Java",
      date: "2023",
      description: "Application de gestion complète pour bibliothèque universitaire. Développement d'une solution intégrée permettant le catalogage avancé des livres, la gestion des emprunts et des retours, le suivi des stocks, et la mise en place d'un système d'authentification pour différents profils d'utilisateurs.",
      companyLogo: null
    },
    {
      icon: <FaUserPlus className="text-2xl" />,
      title: "Gestion d'Inscription - EMIT",
      ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
      technologies: "JavaScript / PHP",
      date: "2023",
      description: "Plateforme web de gestion des inscriptions conçue pour l'école EMIT. Implémentation d'un formulaire d'inscription en ligne complet avec validation des données, gestion des dossiers étudiants, système de paiement intégré et tableau de bord administratif personnalisé.",
      companyLogo: null
    },
    {
      icon: <FaCar className="text-2xl" />,
      title: "Gestion de vente de Voiture",
      ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
      technologies: "C#",
      date: "2023",
      description: "Application de gestion de concession automobile développée en C#. Solution complète offrant un inventaire détaillé des véhicules, suivi précis des ventes et transactions, gestion des clients, génération de rapports de vente et mise en place d'un système de tarification dynamique.",
      companyLogo: null
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Tableau de bord de suivi du patrimoine numerique - Perfectnodes",
      ecole: null,
      technologies: "ReactJS / Express / Tailwindcss",
      date: "19 Juin - 19 Août 2023",
      description: "Développement d'un tableau de bord pour Perfectnodes durant un stage de L2. Création d'une interface interactive visualisant les métriques de patrimoine numérique, avec des graphiques de performance en temps réel et un système de rapport personnalisable.",
      companyLogo: {
        name: "MaDiGiCom",
        image: madigicom
      }
    },
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Gestion de note-EMIT",
      ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
      technologies:"Angular / Express",
      date: "2024",
      description: "Développement d'une application facilitant la gestion des notes et le suivi disciplinaire des élèves, optimisant ainsi le processus de compilation des relevés de notes.",
      companyLogo:null
    },
    {
      icon: <FaServer className="text-2xl" />,
      title: "Gestion de l'espace commercial - Manasoa varotra",
      ecole: null,
      technologies: "React / NestJS",
      date: "24 Juin - 24 Sept 2024",
      description: "Application web développée pour Manasoa Varotra pendant un stage de L3. Solution complète de gestion des espaces commerciaux, incluant le suivi des locations, un système de réservation avancé, analyse de l'occupation des espaces et un tableau de bord administratif détaillé.",
      companyLogo: {
        name: "MANASOA",
        image: manasoa
      }
    },
    {
      icon: <FaMobileAlt className="text-2xl" />,
      title: "Suivi d'Activité de Navigateur de PC (Projet IoT)",
      ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
      technologies: "Flutter / Express",
      date: "Février - Mai 2025",
      description: "Application mobile innovante de suivi d'activité de navigateur à distance. Développement d'une solution IOT permettant le tracking en temps réel, la collecte et l'analyse des habitudes de navigation, avec une synchronisation cross-plateforme et une attention particulière à la sécurité et confidentialité des données.",
      companyLogo: null
    },
    {
      icon: <FaTrophy className="text-2xl" />,
      title: "Emihack - TOP 3 (3ème place)",
      ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
      technologies: "Flask / ReactJS",
      date: "1 Mars 2025",
      description: "HACKATON organisé par notre établissement sur le thème 'Gestion des épidémies incluant Big Data et IA'. Notre solution propose un ChatBot pour tester les symptômes, une visualisation 3D et un tableau de bord analytique complet.",
      companyLogo: {
        name: "EMIHACK",
        image: emihack
      },
      features: ["ChatBot pour tester les symptômes", "Modélisation 3D", "Dashboard analytique"],
      featureIcons: [<FaRobot className="mr-2" />, <FaCube className="mr-2" />, <FaChartBar className="mr-2" />]
    }
  ];

  return (
    <div className="w-full px-4 py-12 sm:py-16 text-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 uppercase tracking-wide"
          data-aos="fade-down"
        >
          <span className="relative inline-block pb-2">
            Expériences Professionnelles
            {/* <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400"></span> */}
          </span>
        </h2>
        
        <div className="relative">
          {/* Ligne verticale - visible uniquement sur tablette et desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700 hidden sm:block"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="mb-12 sm:mb-16 relative" 
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={100}
            >
              {/* Cercle sur la timeline - visible sur tablette et desktop */}
              <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 border-2 border-amber-400 z-10 flex items-center justify-center hidden sm:flex shadow-md">
                {exp.icon}
              </div>
              
              {/* Layout responsive avec alternance */}
              <div className={`flex flex-col sm:flex-row ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                {/* Espace de séparation pour l'alignement */}
                <div className="w-0 sm:w-1/2"></div>
                
                {/* Contenu de l'expérience */}
                <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pl-8 md:pl-10' : 'sm:pr-8 md:pr-10'}`}>
                  <div className="bg-gray-900 bg-opacity-80 border-l-2 border-amber-400 p-4 sm:p-5 rounded shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                    {/* Icône visible uniquement sur mobile */}
                    <div className="flex justify-center mb-4 sm:hidden">
                      <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-amber-400 flex items-center justify-center shadow-md">
                        {exp.icon}
                      </div>
                    </div>
                    
                    {/* Date avec style amélioré */}
                    <div className="flex justify-center items-center mb-3">
                      <span className="bg-gray-800 px-3 py-1 rounded-full text-xs sm:text-sm flex items-center border border-gray-700">
                        <FaCalendarAlt className="mr-2 text-amber-400" />
                        {exp.date}
                      </span>
                    </div>
                    
                    {/* Logo de l'entreprise avec taille optimisée */}
                    {exp.companyLogo && (
                      <div className="flex justify-center mb-3">
                        <div className="px-3 py-1 rounded flex items-center justify-center">
                          {exp.companyLogo.image && (
                            <div className="overflow-hidden rounded group">
                              <img 
                                src={exp.companyLogo.image} 
                                alt={exp.companyLogo.name || "Company logo"} 
                                className="h-10 sm:h-12 md:h-16 object-contain transition-all duration-300 transform group-hover:scale-105"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {/* Titre optimisé pour éviter le débordement */}
                    <h3 className="text-lg sm:text-xl font-bold mb-2 transition-colors duration-300 hover:text-amber-400 line-clamp-2">
                      {exp.title}
                    </h3>
                    
                    {/* École avec taille optimisée */}
                    {exp.ecole && (
                      <p className="text-gray-300 font-medium text-sm leading-relaxed mb-2 text-left transition-colors duration-300 hover:text-amber-300">
                        {exp.ecole}
                      </p>
                    )}
                    
                    {/* Description avec taille de texte adaptative */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 text-left">
                      {exp.description}
                    </p>
                    
                    {/* Fonctionnalités spécifiques */}
                    {exp.features && (
                      <div className="mt-3 border-t border-gray-700 pt-3">
                        <p className="text-gray-300 font-medium text-sm mb-2">Fonctionnalités:</p>
                        <ul className="space-y-1 text-sm">
                          {exp.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-gray-400 transition-colors duration-300 hover:text-amber-300">
                              {exp.featureIcons[i]}
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Technologies avec badges optimisés */}
                    <div className="flex flex-wrap justify-center items-center mt-3 border-t border-gray-700 pt-3">
                      {exp.technologies.split('/').map((tech, i) => (
                        <span 
                          key={i} 
                          className="bg-gray-800 text-gray-300 px-2 py-1 rounded-full mx-1 my-1 text-xs flex items-center transition-all duration-300 hover:bg-amber-400 hover:text-gray-900"
                        >
                          <span>{tech.trim()}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Section des points jaunes supprimée */}
        </div>
      </div>
    </div>
  );
};

export default Experiences;