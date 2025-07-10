import  { useState } from 'react';
import { FaMobileAlt, FaBook, FaUserPlus, FaCar, FaChartLine, FaServer, FaCalendarAlt, FaTrophy, FaRobot, FaCube, FaChartBar, FaGraduationCap } from 'react-icons/fa';
import { emihack, madigicom, manasoa } from '../../public/images';

// Import des images (vous devrez les remplacer par vos vraies images)
 // Remplacez par votre vraie image

const Experiences = () => {
    const [activeExperience, setActiveExperience] = useState(0);

    const experiences = [
        {
            icon: <FaBook className="text-xl text-purple-400" />,
            title: "Gestion de Bibliothèque",
            ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
            technologies: "Java",
            date: "2023",
            description: "Application de gestion complète pour bibliothèque universitaire. Développement d'une solution intégrée permettant le catalogage avancé des livres, la gestion des emprunts et des retours, le suivi des stocks, et la mise en place d'un système d'authentification pour différents profils d'utilisateurs.",
            companyLogo: null
        },
        {
            icon: <FaUserPlus className="text-xl text-purple-400" />,
            title: "Gestion d'Inscription - EMIT",
            ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
            technologies: "JavaScript / PHP / Css",
            date: "2023",
            description: "Plateforme web de gestion des inscriptions conçue pour l'école EMIT. Implémentation d'un formulaire d'inscription en ligne complet avec validation des données, gestion des dossiers étudiants, système de paiement intégré et tableau de bord administratif personnalisé.",
            companyLogo: null
        },
        {
            icon: <FaCar className="text-xl text-purple-400" />,
            title: "Gestion de vente de Voiture",
            ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
            technologies: "C#",
            date: "2023",
            description: "Application de gestion de concession automobile développée en C#. Solution complète offrant un inventaire détaillé des véhicules, suivi précis des ventes et transactions, gestion des clients, génération de rapports de vente et mise en place d'un système de tarification dynamique.",
            companyLogo: null
        },
        {
            icon: <FaChartLine className="text-xl text-purple-400" />,
            title: "Tableau de bord de suivi du patrimoine numerique - Perfectnodes (Plateform de portefeuille virtuelle)",
            ecole: null,
            technologies: "ReactJS/ TS / Express / Tailwindcss",
            date: "19 Juin - 19 Août 2023",
            description: "Développement d'un tableau de bord pour Perfectnodes durant un stage de L2. Création d'une interface interactive visualisant les métriques de patrimoine numérique, avec des graphiques de performance en temps réel et un système de rapport personnalisable.",
            companyLogo: {
                name: "MaDiGiCom",
                image: madigicom
            }
        },
        {
            icon: <FaGraduationCap className="text-xl text-purple-400" />,
            title: "Gestion de note-EMIT",
            ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
            technologies: "Angular / Express / Bootstrap",
            date: "2024",
            description: "Développement d'une application facilitant la gestion des notes et le suivi disciplinaire des élèves, optimisant ainsi le processus de compilation des relevés de notes.",
            companyLogo: null
        },
        {
            icon: <FaServer className="text-xl text-purple-400" />,
            title: "Gestion de l'espace commercial - Manasoa varotra (e-commerce)",
            ecole: null,
            technologies: "React / NestJS /Tailwindcss",
            date: "24 Juin - 24 Sept 2024",
            description: "Application web développée pour Manasoa Varotra pendant un stage de L3. Solution complète de gestion des espaces commerciaux, incluant le suivi des locations, un système de réservation avancé, analyse de l'occupation des espaces et un tableau de bord administratif détaillé.",
            companyLogo: {
                name: "MANASOA",
                image: manasoa
            }
        },
        {
            icon: <FaMobileAlt className="text-xl text-purple-400" />,
            title: "Suivi d'Activité de Navigateur de PC (Projet IoT)",
            ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
            technologies: "Flutter / Express",
            date: "Février - Mai 2025",
            description: "Application mobile innovante de suivi d'activité de navigateur à distance. Développement d'une solution IOT permettant le tracking en temps réel, la collecte et l'analyse des habitudes de navigation, avec une synchronisation cross-plateforme et une attention particulière à la sécurité et confidentialité des données.",
            companyLogo: null
        },
        {
            icon: <FaTrophy className="text-xl text-purple-400" />,
            title: "Emihack - TOP 3 (3ème place)",
            ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
            technologies: "ReactJS / Flask / Tailwindcss",
            date: "1 Mars 2025",
            description: "HACKATON organisé par notre établissement sur le thème 'Gestion des épidémies incluant Big Data et IA'. Notre solution propose un ChatBot pour tester les symptômes, une visualisation 3D et un tableau de bord analytique complet.",
            companyLogo: {
                name: "EMIHACK",
                image: emihack
            },
            features: ["ChatBot pour tester les symptômes", "Modélisation 3D", "Dashboard analytique"],
            featureIcons: [<FaRobot className="mr-2 text-purple-400" />, <FaCube className="mr-2 text-purple-400" />, <FaChartBar className="mr-2 text-purple-400" />]
        }
    ];

    return (
        <div className="min-h-screen  w-full">
            <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 py-8">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-200 mb-4 tracking-wider font-extrabold">
                        MES EXPÉRIENCES
                    </h2>
                    <div className="w-24 sm:w-32 h-0.5 bg-purple-400 mx-auto"></div>
                </div>

                {/* Timeline */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Main vertical line */}
                    <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-purple-400 opacity-40"></div>
                    
                    <div className="space-y-0">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative">
                                {/* Timeline node */}
                                <div className="absolute left-2 sm:left-4 lg:left-6 top-6 sm:top-8 w-5 h-5 rounded-full bg-purple-400 border-4 border-gray-900 z-10 shadow-lg shadow-purple-400/50"></div>
                                
                                {/* Content card */}
                                <div className="ml-10 sm:ml-12 lg:ml-16 pb-6 sm:pb-8">
                                    <div 
                                        className={`bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-opacity-70 transition-all duration-300 cursor-pointer border border-slate-700 ${
                                            activeExperience === index ? 'ring-2 ring-purple-400' : ''
                                        }`}
                                        onClick={() => setActiveExperience(index)}
                                    >
                                        <div className="flex flex-col sm:flex-row items-start gap-4">
                                            <div className="p-3 bg-slate-700 rounded-lg flex-shrink-0">
                                                {exp.icon}
                                            </div>
                                            
                                            <div className="flex-1 w-full">
                                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                                                    <h3 className="text-lg sm:text-xl font-bold text-slate-200 leading-tight">
                                                        {exp.title}
                                                    </h3>
                                                    <span className="text-xs text-purple-300 flex items-center gap-1 sm:ml-4">
                                                        <FaCalendarAlt className="text-purple-400" />
                                                        {exp.date}
                                                    </span>
                                                </div>

                                                {exp.ecole && (
                                                    <p className="text-sm text-slate-400 mb-3 opacity-80">{exp.ecole}</p>
                                                )}

                                                {exp.companyLogo && (
                                                    <div className="mb-3">
                                                        <img
                                                            src={exp.companyLogo.image}
                                                            alt={exp.companyLogo.name || ''}
                                                            className="h-8 object-contain"
                                                        />
                                                    </div>
                                                )}

                                                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                                                    {exp.description}
                                                </p>

                                                {exp.features && (
                                                    <ul className="mb-4 space-y-2 text-sm text-slate-300">
                                                        {exp.features.map((feature, i) => (
                                                            <li key={i} className="flex items-center">
                                                                {exp.featureIcons && exp.featureIcons[i]}
                                                                <span>{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}

                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.split('/').map((tech, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-2 sm:px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full hover:bg-purple-400 hover:text-slate-900 transition-all duration-200"
                                                        >
                                                            {tech.trim()}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Connecting line to next item */}
                                {index < experiences.length - 1 && (
                                    <div className="absolute left-4 sm:left-6 lg:left-8 top-12 sm:top-16 w-0.5 h-6 sm:h-8 bg-purple-400 opacity-40"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    <div className="p-4 sm:p-6 bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-lg border border-slate-700">
                        <div className="text-2xl sm:text-3xl font-bold text-slate-200 font-mono">
                            {experiences.length}
                        </div>
                        <div className="text-sm text-slate-400 font-mono">Projets</div>
                    </div>
                    <div className="p-4 sm:p-6 bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-lg border border-slate-700">
                        <div className="text-2xl sm:text-3xl font-bold text-slate-200 font-mono">
                            {experiences.filter(exp => !exp.ecole).length}
                        </div>
                        <div className="text-sm text-slate-400 font-mono">Stages</div>
                    </div>
                    <div className="p-4 sm:p-6 bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-lg border border-slate-700 sm:col-span-2 lg:col-span-1">
                        <div className="text-2xl sm:text-3xl font-bold text-slate-200 font-mono">
                            {new Set(experiences.flatMap(exp => exp.technologies.split('/').map(t => t.trim()))).size}
                        </div>
                        <div className="text-sm text-slate-400 font-mono">Technologies</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiences;