import React, { useEffect } from 'react';
import { FaMobileAlt, FaBook, FaUserPlus, FaCar, FaChartLine, FaServer, FaBuilding, FaCalendarAlt, FaTrophy, FaRobot, FaCube, FaChartBar, FaGraduationCap } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { emihack, madigicom, manasoa } from '../../public/images';

const Experiences = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const experiences = [
    {
      icon: <FaBook className="text-3xl" />,
      title: "Gestion de Bibliothèque",
      ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
      technologies: "Java",
      date: "2023",
      description: "Application de gestion complète pour bibliothèque universitaire. Développement d'une solution intégrée permettant le catalogage avancé des livres, la gestion des emprunts et des retours, le suivi des stocks, et la mise en place d'un système d'authentification pour différents profils d'utilisateurs.",
      companyLogo: null
    },
    {
      icon: <FaUserPlus className="text-3xl" />,
      title: "Gestion d'Inscription - EMIT",
      ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
      technologies: "JavaScript / PHP",
      date: "2023",
      description: "Plateforme web de gestion des inscriptions conçue pour l'école EMIT. Implémentation d'un formulaire d'inscription en ligne complet avec validation des données, gestion des dossiers étudiants, système de paiement intégré et tableau de bord administratif personnalisé.",
      companyLogo: null
    },
    {
      icon: <FaCar className="text-3xl" />,
      title: "Gestion de vente de Voiture",
      ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
      technologies: "C#",
      date: "2023",
      description: "Application de gestion de concession automobile développée en C#. Solution complète offrant un inventaire détaillé des véhicules, suivi précis des ventes et transactions, gestion des clients, génération de rapports de vente et mise en place d'un système de tarification dynamique.",
      companyLogo: null
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Conception et Realisation du tableau de bord de suivi du patrimoine numerique sur Perfectnodes(Plateform de portefeuille virtuelle)",
      ecole: null,
      technologies: "ReactJS / Tailwindcss",
      date: "19 Juin - 19 Août 2023",
      description: "Développement d'un tableau de bord pour Perfectnodes durant un stage de L2. Création d'une interface interactive visualisant les métriques de patrimoine numérique, avec des graphiques de performance en temps réel et un système de rapport personnalisable.",
      companyLogo: {
        name: "MaDiGiCom",
        image: madigicom
      }
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Gestion de note-EMIT",
      ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
      technologies:"Angular / Express",
      date: "2024",
      description: "Développement d'une application facilitant la gestion des notes et le suivi disciplinaire des élèves, optimisant ainsi le processus de compilation des relevés de notes.",
      companyLogo:null
    },
    {
      icon: <FaServer className="text-3xl" />,
      title: "Conception et realisation d'une application web pour la gestion de l'espace commercial du site Manasoa varotra",
      ecole: null,
      technologies: "React / NestJS",
      date: "24 Juin - 24 Septembre 2024",
      description: "Application web développée pour Manasoa Varotra pendant un stage de L3. Solution complète de gestion des espaces commerciaux, incluant le suivi des locations, un système de réservation avancé, analyse de l'occupation des espaces et un tableau de bord administratif détaillé.",
      companyLogo: {
        name: "MANASOA",
        image: manasoa
      }
    },
    {
      icon: <FaMobileAlt className="text-3xl" />,
      title: "Suivi d'Activité de Navigateur de PC (Projet IoT) ",
      ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
      technologies: "Flutter / Express",
      date: "Février - Mai 2025",
      description: "Application mobile innovante de suivi d'activité de navigateur à distance. Développement d'une solution IOT permettant le tracking en temps réel, la collecte et l'analyse des habitudes de navigation, avec une synchronisation cross-plateforme et une attention particulière à la sécurité et confidentialité des données.",
      companyLogo: null
    },
    {
      icon: <FaTrophy className="text-3xl" />,
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
    <div className="container mx-auto px-4 py-8 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12 uppercase tracking-wider">
        Expériences Professionnelles
      </h2>
      
      <div className="relative">
        {/* Ligne verticale - responsive */}
        <div className="absolute left-1/2 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-600 hidden md:block"></div>
        
        {experiences.map((exp, index) => (
          <div key={index} className="mb-16 relative" data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
            {/* Cercle sur la timeline avec icône - caché sur mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gray-800 border-4 border-gray-600 z-10 flex items-center justify-center hidden md:flex">
              {exp.icon}
            </div>
            
            {/* Contenu - responsive */}
            <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Espace vide pour le cercle - caché sur mobile */}
              <div className="w-0 md:w-1/2"></div>
              
              {/* Contenu de l'expérience - pleine largeur sur mobile */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10'}`}>
                <div className="bg-gray-900 border-l-4 border-gray-600 p-6 rounded shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  {/* Icône visible uniquement sur mobile */}
                  <div className="flex justify-center mb-4 md:hidden">
                    <div className="w-12 h-12 rounded-full bg-gray-800 border-4 border-gray-600 flex items-center justify-center">
                      {exp.icon}
                    </div>
                  </div>
                  
                  {/* Date dans la carte */}
                  <div className="flex justify-center items-center mb-3">
                    <span className="bg-gray-800 px-3 py-1 rounded-full text-sm flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      {exp.date}
                    </span>
                  </div>
                  
                  {/* Logo de l'entreprise pour les stages */}
                  {exp.companyLogo && (
                    <div className="flex justify-center mb-3">
                      <div className="px-4 py-2 rounded-lg text-sm flex items-center justify-center">
                        {exp.companyLogo.image && (
                          <div className="overflow-hidden rounded group">
                            <img 
                              src={exp.companyLogo.image} 
                              alt={exp.companyLogo.name || "Company logo"} 
                              className="h-12 sm:h-16 md:h-20 object-contain transition-all duration-300 transform group-hover:scale-125"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold mb-3">{exp.title}</h3>
                  
                  {/* Afficher l'école pour les projets non-stage avec effet hover */}
                  {exp.ecole && (
                    <p className="text-white font-bold text-lg leading-relaxed mb-2 text-left transition-colors duration-300 hover:text-blue-400">
                      {exp.ecole}
                    </p>
                  )}
                  
                  {/* Description alignée à gauche */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 text-left">
                    {exp.description}
                  </p>
                  
                  {/* Fonctionnalités spécifiques pour Emihack */}
                  {exp.features && (
                    <div className="mt-4 border-t border-gray-700 pt-4">
                      <p className="text-gray-300 font-semibold mb-2">Fonctionnalités:</p>
                      <ul className="space-y-2">
                        {exp.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-400 transition-colors duration-300 hover:text-blue-300">
                            {exp.featureIcons[i]}
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Technologies centrées */}
                  <div className="flex flex-wrap justify-center items-center mt-4 border-t border-gray-700 pt-4">
                    {exp.technologies.split('/').map((tech, i) => (
                      <span key={i} className="bg-gray-800 text-gray-300 px-3 py-1 rounded mx-1 my-1 text-sm flex items-center transition-all duration-300 hover:bg-gray-700 hover:text-white">
                        <span>{tech.trim()}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;