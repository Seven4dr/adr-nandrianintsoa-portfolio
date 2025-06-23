import React, { useEffect, useState } from 'react';
import { FaMobileAlt, FaBook, FaUserPlus, FaCar, FaChartLine, FaServer, FaCalendarAlt, FaTrophy, FaRobot, FaCube, FaChartBar, FaGraduationCap } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { emihack, madigicom, manasoa } from '../../public/images';

const Experiences = () => {
    const [activeExperience, setActiveExperience] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            mirror: false
        });
    }, []);

    const experiences = [
        {
            icon: <FaBook className="text-2xl text-emerald-400" />,
            title: "Gestion de Bibliothèque",
            ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
            technologies: "Java",
            date: "2023",
            description: "Application de gestion complète pour bibliothèque universitaire. Développement d'une solution intégrée permettant le catalogage avancé des livres, la gestion des emprunts et des retours, le suivi des stocks, et la mise en place d'un système d'authentification pour différents profils d'utilisateurs.",
            companyLogo: null
        },
        {
            icon: <FaUserPlus className="text-2xl text-emerald-400" />,
            title: "Gestion d'Inscription - EMIT",
            ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
            technologies: "JavaScript / PHP",
            date: "2023",
            description: "Plateforme web de gestion des inscriptions conçue pour l'école EMIT. Implémentation d'un formulaire d'inscription en ligne complet avec validation des données, gestion des dossiers étudiants, système de paiement intégré et tableau de bord administratif personnalisé.",
            companyLogo: null
        },
        {
            icon: <FaCar className="text-2xl text-emerald-400" />,
            title: "Gestion de vente de Voiture",
            ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
            technologies: "C#",
            date: "2023",
            description: "Application de gestion de concession automobile développée en C#. Solution complète offrant un inventaire détaillé des véhicules, suivi précis des ventes et transactions, gestion des clients, génération de rapports de vente et mise en place d'un système de tarification dynamique.",
            companyLogo: null
        },
        {
            icon: <FaChartLine className="text-2xl text-emerald-400" />,
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
            icon: <FaGraduationCap className="text-2xl text-emerald-400" />,
            title: "Gestion de note-EMIT",
            ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
            technologies: "Angular / Express",
            date: "2024",
            description: "Développement d'une application facilitant la gestion des notes et le suivi disciplinaire des élèves, optimisant ainsi le processus de compilation des relevés de notes.",
            companyLogo: null
        },
        {
            icon: <FaServer className="text-2xl text-emerald-400" />,
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
            icon: <FaMobileAlt className="text-2xl text-emerald-400" />,
            title: "Suivi d'Activité de Navigateur de PC (Projet IoT)",
            ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
            technologies: "Flutter / Express",
            date: "Février - Mai 2025",
            description: "Application mobile innovante de suivi d'activité de navigateur à distance. Développement d'une solution IOT permettant le tracking en temps réel, la collecte et l'analyse des habitudes de navigation, avec une synchronisation cross-plateforme et une attention particulière à la sécurité et confidentialité des données.",
            companyLogo: null
        },
        {
            icon: <FaTrophy className="text-2xl text-emerald-400" />,
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
            featureIcons: [<FaRobot className="mr-2 text-emerald-400" />, <FaCube className="mr-2 text-emerald-400" />, <FaChartBar className="mr-2 text-emerald-400" />]
        }
    ];

    return (
       <div className="min-h-screen bg-gray-900 px-4 py-8 w-full">

            <div className="w-full max-w-6xl mx-auto">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-4 tracking-wider font-mono">
                        MES EXPÉRIENCES
                    </h2>
                    <div className="w-32 h-0.5 bg-emerald-400 mx-auto"></div>
                </div>

                {/* Experience List */}
                <div className="relative">
                    <div className="absolute left-8 top-0 h-full w-0.5 bg-emerald-400/30 hidden md:block"></div>
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative pl-16 md:pl-20 pr-4 group ${activeExperience === index ? 'bg-slate-800/20' : ''} rounded-lg transition-all duration-300`}
                                onClick={() => setActiveExperience(index)}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-6 md:left-7 top-4 w-4 h-4 rounded-full bg-emerald-400 border-2 border-slate-900 group-hover:scale-125 transition-transform duration-300"></div>

                                <div className="flex items-start gap-4">
                                    <div className="text-lg group-hover:scale-110 transition-transform duration-200">
                                        {exp.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-lg font-bold text-slate-200 group-hover:text-emerald-400 transition-colors duration-200">
                                                {exp.title}
                                            </h3>
                                            <span className="text-xs text-slate-400 flex items-center gap-1">
                                                <FaCalendarAlt className="text-emerald-400" />
                                                {exp.date}
                                            </span>
                                        </div>

                                        {exp.ecole && (
                                            <p className="text-sm text-slate-400 mt-1">{exp.ecole}</p>
                                        )}

                                        {exp.companyLogo && (
                                            <div className="mt-2">
                                                <img
                                                    src={exp.companyLogo.image}
                                                    alt={exp.companyLogo?.name || ' '}
                                                    className="h-8 object-contain"
                                                />
                                            </div>
                                        )}

                                        <p className="text-sm text-slate-400 mt-2">{exp.description}</p>

                                        {exp.features && (
                                            <ul className="mt-3 space-y-1 text-sm text-slate-400">
                                                {exp.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center">
                                                        {exp.featureIcons[i]}
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {exp.technologies.split('/').map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-sm group-hover:bg-emerald-400 group-hover:text-slate-900 transition-all duration-200"
                                                >
                                                    {tech.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-slate-800 rounded border border-slate-700">
                        <div className="text-2xl font-bold text-slate-200 font-mono">
                            {experiences.length}
                        </div>
                        <div className="text-sm text-slate-400 font-mono">Projets</div>
                    </div>
                    <div className="p-4 bg-slate-800 rounded border border-slate-700">
                        <div className="text-2xl font-bold text-slate-200 font-mono">
                            {experiences.filter(exp => !exp.ecole).length}
                        </div>
                        <div className="text-sm text-slate-400 font-mono">Stages</div>
                    </div>
                    <div className="p-4 bg-slate-800 rounded border border-slate-700">
                        <div className="text-2xl font-bold text-slate-200 font-mono">
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