"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Smartphone,
  BookOpen,
  UserPlus,
  Car,
  TrendingUp,
  Server,
  Calendar,
  Trophy,
  Bot,
  CuboidIcon as Cube,
  BarChart3,
  GraduationCap,
  Building2,
  Code2,
  Briefcase,
  Award,
  MapPin,
} from "lucide-react"
import { madigicom, manasoa } from "../../public/images"

gsap.registerPlugin(ScrollTrigger)

const Experiences = () => {
  const [activeExperience, setActiveExperience] = useState(0)
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const timelineRef = useRef(null)
  const statsRef = useRef(null)

  const experiences = [
    {
      icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-400" />,
      title: "Gestion de Bibliothèque",
      ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
      technologies: "Java",
      date: "2023",
      type: "Projet Académique",
      description:
        "Application de gestion complète pour bibliothèque universitaire. Développement d'une solution intégrée permettant le catalogage avancé des livres, la gestion des emprunts et des retours, le suivi des stocks, et la mise en place d'un système d'authentification pour différents profils d'utilisateurs.",
      companyLogo: null,
      category: "academic",
    },
    {
      icon: <UserPlus className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-400" />,
      title: "Gestion d'Inscription - EMIT",
      ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
      technologies: "JavaScript / PHP / CSS",
      date: "2023",
      type: "Projet Académique",
      description:
        "Plateforme web de gestion des inscriptions conçue pour l'école EMIT. Implémentation d'un formulaire d'inscription en ligne complet avec validation des données, gestion des dossiers étudiants, système de paiement intégré et tableau de bord administratif personnalisé.",
      companyLogo: null,
      category: "academic",
    },
    {
      icon: <Car className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-400" />,
      title: "Gestion de vente de Voiture",
      ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
      technologies: "C#",
      date: "2023",
      type: "Projet Académique",
      description:
        "Application de gestion de concession automobile développée en C#. Solution complète offrant un inventaire détaillé des véhicules, suivi précis des ventes et transactions, gestion des clients, génération de rapports de vente et mise en place d'un système de tarification dynamique.",
      companyLogo: null,
      category: "academic",
    },
    {
      icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-400" />,
      title: "Tableau de bord de suivi du patrimoine numérique - Perfectnodes",
      ecole: null,
      company: "MaDiGiCom",
      technologies: "React / TypeScript / Express / Tailwind CSS",
      date: "19 Juin - 19 Août 2023",
      type: "Stage L2",
      description:
        "Développement d'un tableau de bord pour Perfectnodes durant un stage de L2. Création d'une interface interactive visualisant les métriques de patrimoine numérique, avec des graphiques de performance en temps réel et un système de rapport personnalisable.",
      companyLogo: {
        name: "MaDiGiCom",
        placeholder: madigicom,
      },
      category: "internship",
    },
    {
      icon: <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-400" />,
      title: "Gestion de note - EMIT",
      ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
      technologies: "Angular / Express / Bootstrap",
      date: "2024",
      type: "Projet Académique",
      description:
        "Développement d'une application facilitant la gestion des notes et le suivi disciplinaire des élèves, optimisant ainsi le processus de compilation des relevés de notes.",
      companyLogo: null,
      category: "academic",
    },
    {
      icon: <Server className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-400" />,
      title: "Gestion de l'espace commercial - Manasoa varotra",
      ecole: null,
      company: "MANASOA",
      technologies: "React / NestJS / Tailwind CSS",
      date: "24 Juin - 24 Sept 2024",
      type: "Stage L3",
      description:
        "Application web développée pour Manasoa Varotra pendant un stage de L3. Solution complète de gestion des espaces commerciaux, incluant le suivi des locations, un système de réservation avancé, analyse de l'occupation des espaces et un tableau de bord administratif détaillé.",
      companyLogo: {
        name: "MANASOA",
        placeholder: manasoa,
      },
      category: "internship",
    },
    {
      icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-400" />,
      title: "Suivi d'Activité de Navigateur de PC",
      ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
      technologies: "Flutter / Express",
      date: "Février - Mai 2025",
      type: "Projet Académique",
      description:
        "Application mobile innovante de suivi d'activité de navigateur à distance. Développement d'une solution IOT permettant le tracking en temps réel, la collecte et l'analyse des habitudes de navigation, avec une synchronisation cross-plateforme et une attention particulière à la sécurité et confidentialité des données.",
      companyLogo: null,
      category: "academic",
    },
    {
      icon: <Trophy className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400" />,
      title: "Emihack - TOP 3 (3ème place)",
      ecole: "ECOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE",
      technologies: "ReactJS / Flask / Tailwind CSS",
      date: "1 Mars 2025",
      type: "Hackathon",
      description:
        "HACKATON organisé par notre établissement sur le thème 'Gestion des épidémies incluant Big Data et IA'. Notre solution propose un ChatBot pour tester les symptômes, une visualisation 3D et un tableau de bord analytique complet.",
      companyLogo: {
        name: "EMIHACK",
        placeholder: "/placeholder.svg?height=40&width=120&text=EMIHACK",
      },
      features: ["ChatBot pour tester les symptômes", "Modélisation 3D", "Dashboard analytique"],
      featureIcons: [
        <Bot key="bot" className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />,
        <Cube key="cube" className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />,
        <BarChart3 key="barChart3" className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />,
      ],
      category: "competition",
    },
  ]

  const getCategoryColor = (category) => {
    switch (category) {
      case "internship":
        return "from-blue-600 to-cyan-600"
      case "competition":
        return "from-yellow-500 to-orange-600"
      case "academic":
        return "from-purple-600 to-indigo-600"
      default:
        return "from-gray-600 to-gray-700"
    }
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case "internship":
        return <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
      case "competition":
        return <Award className="w-3 h-3 sm:w-4 sm:h-4" />
      case "academic":
        return <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
      default:
        return <Code2 className="w-3 h-3 sm:w-4 sm:h-4" />
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation du titre principal
      gsap.fromTo(
        titleRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Animation de la timeline
      const timelineItems = timelineRef.current.querySelectorAll(".timeline-item")
      gsap.fromTo(
        timelineItems,
        {
          x: -50,
          opacity: 0,
          scale: 0.9,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Animation des statistiques
      gsap.fromTo(
        statsRef.current.children,
        {
          y: 30,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Animation de la ligne de timeline
      gsap.fromTo(
        ".timeline-line",
        {
          scaleY: 0,
          transformOrigin: "top",
        },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const handleExperienceClick = (index) => {
    setActiveExperience(index)
    // Animation de focus
    gsap.to(`.timeline-item-${index}`, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
    })
  }

  return (
    <div
      ref={containerRef}
      className="bg-gray-900 min-h-screen px-3 sm:px-4 lg:px-6 py-8 sm:py-12 lg:py-16 w-full relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Titre principal */}
        <div ref={titleRef} className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight">
              MES EXPÉRIENCES
            </h2>
          </div>
          <p className="text-sm sm:text-base lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            Découvrez mon parcours professionnel et académique à travers mes projets et expériences
          </p>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-6xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          {/* Ligne principale verticale - cachée sur mobile */}
          <div className="hidden sm:block absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-purple-600 via-blue-600 to-purple-600 rounded-full timeline-line opacity-60"></div>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`timeline-item timeline-item-${index} relative`}>
                {/* Noeud de timeline - adapté pour mobile */}
                <div className="hidden sm:block absolute left-2.5 sm:left-4.5 lg:left-6 top-6 sm:top-8 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 border-2 sm:border-4 border-gray-900 z-10 shadow-lg shadow-purple-500/50 flex items-center justify-center">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-white rounded-full animate-pulse"></div>
                </div>

                {/* Carte de contenu */}
                <div className="sm:ml-12 lg:ml-20">
                  <div
                    className={`group relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 cursor-pointer ${
                      activeExperience === index ? "ring-1 sm:ring-2 ring-purple-400 border-purple-400/50" : ""
                    }`}
                    onClick={() => handleExperienceClick(index)}
                  >
                    {/* Effet de brillance au survol */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>

                    <div className="relative z-10">
                      {/* En-tête */}
                      <div className="flex flex-col gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="p-2 sm:p-2.5 lg:p-3 bg-gray-700/50 rounded-lg sm:rounded-xl flex-shrink-0 group-hover:bg-purple-600/20 transition-colors duration-300">
                            {exp.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white leading-tight">
                                {exp.title}
                              </h3>
                              <div
                                className={`self-start px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getCategoryColor(
                                  exp.category,
                                )} flex items-center gap-1 flex-shrink-0`}
                              >
                                {getCategoryIcon(exp.category)}
                                <span className="hidden sm:inline">{exp.type}</span>
                              </div>
                            </div>

                            {exp.ecole && (
                              <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-400 mb-2">
                                <Building2 className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" />
                                <span className="leading-tight">{exp.ecole}</span>
                              </div>
                            )}

                            {exp.company && (
                              <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-400 mb-2">
                                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                <span>{exp.company}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-purple-300 flex-shrink-0">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="text-xs sm:text-sm font-medium">{exp.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Logo de l'entreprise */}
                      {exp.companyLogo && (
                        <div className="mb-3 sm:mb-4">
                          <img
                            src={exp.companyLogo.placeholder || "/placeholder.svg"}
                            alt={exp.companyLogo.name || ""}
                            className="h-6 sm:h-8 lg:h-10 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Fonctionnalités spéciales */}
                      {exp.features && (
                        <div className="mb-3 sm:mb-4">
                          <h4 className="text-xs sm:text-sm font-semibold text-white mb-2">Fonctionnalités clés :</h4>
                          <ul className="space-y-1.5 sm:space-y-2">
                            {exp.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                                {exp.featureIcons && exp.featureIcons[i]}
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {exp.technologies.split("/").map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 sm:px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full hover:bg-purple-600/20 hover:text-purple-300 transition-all duration-200 border border-gray-600/50"
                          >
                            {tech.trim()}
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

        {/* Statistiques */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto">
          <div className="group relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                <Code2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white">{experiences.length}</div>
                <div className="text-xs sm:text-sm text-gray-400">Projets</div>
              </div>
            </div>
          </div>

          <div className="group relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
                  {experiences.filter((exp) => exp.category === "internship").length}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Stages</div>
              </div>
            </div>
          </div>

          <div className="group relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                <Award className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
                  {experiences.filter((exp) => exp.category === "competition").length}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Compétitions</div>
              </div>
            </div>
          </div>

          <div className="group relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
                  {new Set(experiences.flatMap((exp) => exp.technologies.split("/").map((t) => t.trim()))).size}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiences
