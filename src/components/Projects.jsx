"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Eye,
  X,
  ExternalLink,
  Github,
  Play,
  ChevronLeft,
  ChevronRight,
  Folder,
  Code2,
  BarChart3,
  Shield,
  Zap,
  Database,
  Brain,
  TrendingUp,
  Monitor,
  Bell,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const gridRef = useRef(null)
  const carouselRef = useRef(null)
  const autoPlayRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: "Tableau de bord patrimoine numérique",
      subtitle: "Dashboard Perfectnodes",
      image: "/placeholder.svg?height=400&width=600&text=Dashboard+Patrimoine",
      technologies: ["REACT", "EXPRESS", "TAILWINDCSS"],
      category: "Dashboard",
      status: "Terminé",
      description:
        "Développement d'un tableau de bord complet pour le suivi et la gestion du patrimoine numérique avec des fonctionnalités de monitoring en temps réel. Cette solution permet aux entreprises de visualiser et gérer efficacement leurs actifs numériques.",
      features: [
        "Monitoring en temps réel",
        "Interface intuitive",
        "Gestion des actifs",
        "Rapports détaillés",
        "Alertes personnalisées",
        "Export de données",
      ],
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-blue-600 to-cyan-600",
    },
    {
      id: 2,
      title: "Plateforme e-commerce complète",
      subtitle: "Gestion espace commercial",
      image: "/placeholder.svg?height=400&width=600&text=E-commerce+Platform",
      technologies: ["REACT", "NEST", "TAILWINDCSS"],
      category: "E-commerce",
      status: "En cours",
      description:
        "Plateforme e-commerce complète avec gestion des produits, commandes, paiements et analytics avancés. Solution robuste pour la gestion complète d'un espace commercial en ligne.",
      features: [
        "Gestion des produits",
        "Système de paiement",
        "Analytics avancés",
        "Interface d'administration",
        "Gestion des stocks",
        "CRM intégré",
      ],
      icon: <Database className="w-6 h-6" />,
      color: "from-green-600 to-emerald-600",
    },
    {
      id: 3,
      title: "Monitoring navigateur PC",
      subtitle: "Suivi d'activité",
      image: "/placeholder.svg?height=400&width=600&text=Browser+Monitoring",
      technologies: ["FLUTTER", "EXPRESS"],
      category: "Monitoring",
      status: "Terminé",
      description:
        "Application de monitoring pour suivre l'activité des navigateurs web avec des rapports détaillés d'utilisation. Outil professionnel pour l'analyse comportementale et la productivité.",
      features: [
        "Monitoring en temps réel",
        "Rapports d'activité",
        "Historique de navigation",
        "Alertes personnalisées",
        "Analytics comportementales",
        "Export de données",
      ],
      icon: <Monitor className="w-6 h-6" />,
      color: "from-purple-600 to-indigo-600",
    },
    {
      id: 4,
      title: "Application mobile Alarm",
      subtitle: "Flutter App",
      image: "/placeholder.svg?height=400&width=600&text=Mobile+Alarm+App",
      technologies: ["FLUTTER", "DART", "MOBILE"],
      category: "Mobile",
      status: "Terminé",
      description:
        "Application mobile d'alarme avec interface moderne et fonctionnalités avancées de personnalisation. Solution complète pour la gestion des alarmes et rappels.",
      features: [
        "Alarmes multiples",
        "Interface moderne",
        "Personnalisation avancée",
        "Notifications push",
        "Widgets personnalisés",
        "Synchronisation cloud",
      ],
      icon: <Bell className="w-6 h-6" />,
      color: "from-orange-600 to-red-600",
    },
    {
      id: 5,
      title: "Gestion épidémies IA",
      subtitle: "Big Data & Intelligence Artificielle",
      image: "/placeholder.svg?height=400&width=600&text=AI+Epidemic+Management",
      technologies: ["REACT", "FLASK", "IA"],
      category: "IA & Big Data",
      status: "Terminé",
      description:
        "Système de gestion et de prédiction des épidémies utilisant l'intelligence artificielle et l'analyse de big data. Solution innovante pour la santé publique.",
      features: [
        "Analyse prédictive",
        "Big Data processing",
        "Intelligence artificielle",
        "Visualisations interactives",
        "Alertes automatiques",
        "Rapports épidémiologiques",
      ],
      icon: <Brain className="w-6 h-6" />,
      color: "from-pink-600 to-rose-600",
    },
    {
      id: 6,
      title: "Trading IA Dashboard",
      subtitle: "Prédiction de marché",
      image: "/placeholder.svg?height=400&width=600&text=Trading+AI+Dashboard",
      technologies: ["REACT", "TAILWINDCSS", "RECHARTS"],
      category: "Finance",
      status: "En cours",
      description:
        "Dashboard intelligent pour l'analyse et la prédiction des tendances de marché avec algorithmes d'IA avancés. Solution complète pour les traders professionnels.",
      features: [
        "Prédictions IA",
        "Analyse de marché",
        "Graphiques interactifs",
        "Signaux de trading",
        "Backtesting",
        "Alertes personnalisées",
      ],
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-yellow-600 to-orange-600",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Terminé":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "En cours":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
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

      // Animation de la grille desktop
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          {
            y: 60,
            opacity: 0,
            scale: 0.9,
            rotationX: 15,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      // Animation du carrousel mobile
      if (carouselRef.current) {
        gsap.fromTo(
          carouselRef.current,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: carouselRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  // Auto-play pour le carrousel
  useEffect(() => {
    if (isAutoPlay && window.innerWidth < 1024) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length)
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlay, projects.length])

  const openImage = (imageSrc) => {
    setSelectedImage(imageSrc)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const goToProject = (index) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000) // Reprendre l'auto-play après 10s
  }

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const ProjectCard = ({ project, index, isMobile = false }) => (
    <div
      className={`group relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 ${
        !isMobile ? "hover:-translate-y-2" : ""
      }`}
    >
      {/* Effet de brillance au survol */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>

      {/* Image du projet */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

        {/* Badge de statut */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>

        {/* Bouton d'agrandissement */}
        <button
          onClick={() => openImage(project.image)}
          className="absolute top-4 right-4 bg-black/50 hover:bg-purple-600 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Icône de catégorie */}
        <div className="absolute bottom-4 left-4">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center shadow-lg`}
          >
            {project.icon}
          </div>
        </div>
      </div>

      {/* Contenu de la carte */}
      <div className="p-6 relative z-10">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
              {project.title}
            </h3>
            <span className="text-xs text-purple-300 bg-purple-600/20 px-2 py-1 rounded-full">{project.category}</span>
          </div>
          <p className="text-purple-300 text-sm font-medium">{project.subtitle}</p>
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">{project.description}</p>

        {/* Fonctionnalités clés */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-white mb-2 opacity-80">Fonctionnalités clés :</h4>
          <div className="grid grid-cols-2 gap-1 text-xs text-gray-400">
            {project.features.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-1">
                <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full text-xs border border-gray-600/50 hover:bg-purple-600/20 hover:text-purple-300 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
            <Play className="w-4 h-4" />
            Démo
          </button>
          <button className="bg-gray-700/50 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-600/50 transition-all duration-300 flex items-center justify-center">
            <Github className="w-4 h-4" />
          </button>
          <button className="bg-gray-700/50 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-600/50 transition-all duration-300 flex items-center justify-center">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="bg-gray-900 min-h-screen px-4 py-16 w-full relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Titre principal */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
              <Folder className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">MES PROJETS</h2>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Découvrez mes réalisations techniques et créatives
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grille desktop */}
        <div ref={gridRef} className="hidden lg:block mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Carrousel mobile */}
        <div ref={carouselRef} className="lg:hidden mb-16">
          <div className="relative">
            {/* Carte principale */}
            <div className="flex justify-center mb-6">
              <div className="w-full max-w-md">
                <ProjectCard project={projects[currentIndex]} index={0} isMobile={true} />
              </div>
            </div>

            {/* Contrôles du carrousel */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={prevProject}
                className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 text-white p-3 rounded-full hover:border-purple-500/50 transition-all duration-300 hover:bg-purple-600/20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Indicateurs de navigation */}
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToProject(index)}
                    className={`transition-all duration-300 hover:scale-110 ${
                      currentIndex === index
                        ? "w-8 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                        : "w-2 h-2 bg-gray-600 hover:bg-gray-500 rounded-full"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextProject}
                className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 text-white p-3 rounded-full hover:border-purple-500/50 transition-all duration-300 hover:bg-purple-600/20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Compteur et contrôle auto-play */}
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <span>
                <span className="text-purple-400 font-bold">{currentIndex + 1}</span> sur{" "}
                <span className="text-purple-400 font-bold">{projects.length}</span> projets
              </span>
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`px-3 py-1 rounded-full text-xs transition-all duration-300 ${
                  isAutoPlay
                    ? "bg-purple-600/20 text-purple-400 border border-purple-500/30"
                    : "bg-gray-700/50 text-gray-400 border border-gray-600/50"
                }`}
              >
                {isAutoPlay ? "Auto" : "Manuel"}
              </button>
            </div>
          </div>
        </div>

        {/* Statistiques des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="group relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                <Folder className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-3xl font-black text-white">{projects.length}</div>
                <div className="text-sm text-gray-400">Projets</div>
              </div>
            </div>
          </div>

          <div className="group relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-3xl font-black text-white">
                  {projects.filter((p) => p.status === "Terminé").length}
                </div>
                <div className="text-sm text-gray-400">Terminés</div>
              </div>
            </div>
          </div>

          <div className="group relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-3xl font-black text-white">
                  {projects.filter((p) => p.status === "En cours").length}
                </div>
                <div className="text-sm text-gray-400">En cours</div>
              </div>
            </div>
          </div>

          <div className="group relative bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-600 to-orange-600 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-3xl font-black text-white">
                  {new Set(projects.flatMap((p) => p.technologies)).size}
                </div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal d'image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeImage}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 bg-gray-800/80 hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              onClick={closeImage}
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Projet agrandi"
              className="w-full h-auto rounded-2xl shadow-2xl ring-2 ring-purple-400/50"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
