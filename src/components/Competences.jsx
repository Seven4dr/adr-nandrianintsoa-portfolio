"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code2, Database, Server, Wrench, ChevronRight, Star, TrendingUp } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const Competences = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend")
  const [clickedSkills, setClickedSkills] = useState(new Set())
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const filtersRef = useRef(null)
  const skillsRef = useRef(null)
  const skillRefs = useRef([])

  const skillCategories = [
    {
      title: "Développement Frontend",
      shortTitle: "Frontend",
      icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-blue-600 to-purple-600",
      skills: [
        { name: "React", progress: 90, level: "Expert", color: "bg-gradient-to-r from-blue-500 to-blue-600" },
        { name: "Angular", progress: 60, level: "Intermédiaire", color: "bg-gradient-to-r from-red-500 to-red-600" },
        { name: "Next.js", progress: 50, level: "Intermédiaire", color: "bg-gradient-to-r from-gray-700 to-gray-800" },
        { name: "Flutter", progress: 50, level: "Intermédiaire", color: "bg-gradient-to-r from-blue-400 to-blue-500" },
        { name: "Tailwind CSS", progress: 85, level: "Expert", color: "bg-gradient-to-r from-teal-400 to-teal-500" },
        {
          name: "TypeScript",
          progress: 50,
          level: "Intermédiaire",
          color: "bg-gradient-to-r from-blue-600 to-blue-700",
        },
        {
          name: "JavaScript ES6+",
          progress: 80,
          level: "Avancé",
          color: "bg-gradient-to-r from-yellow-500 to-yellow-600",
        },
      ],
    },
    {
      title: "Développement Backend",
      shortTitle: "Backend",
      icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-green-600 to-emerald-600",
      skills: [
        { name: "Node.js", progress: 75, level: "Avancé", color: "bg-gradient-to-r from-green-500 to-green-600" },
        { name: "NestJS", progress: 80, level: "Avancé", color: "bg-gradient-to-r from-red-500 to-red-600" },
        { name: "Express", progress: 70, level: "Avancé", color: "bg-gradient-to-r from-gray-600 to-gray-700" },
        { name: "Laravel", progress: 50, level: "Intermédiaire", color: "bg-gradient-to-r from-red-600 to-red-700" },
        {
          name: "FastAPI",
          progress: 60,
          level: "Intermédiaire",
          color: "bg-gradient-to-r from-green-600 to-green-700",
        },
        { name: "Python", progress: 70, level: "Avancé", color: "bg-gradient-to-r from-blue-500 to-blue-600" },
        { name: "Java", progress: 80, level: "Avancé", color: "bg-gradient-to-r from-orange-500 to-orange-600" },
      ],
    },
    {
      title: "Base de données",
      shortTitle: "Base de données",
      icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-purple-600 to-indigo-600",
      skills: [
        { name: "PostgreSQL", progress: 80, level: "Avancé", color: "bg-gradient-to-r from-blue-600 to-blue-700" },
        { name: "MySQL", progress: 75, level: "Avancé", color: "bg-gradient-to-r from-blue-500 to-blue-600" },
      ],
    },
    {
      title: "Outils & Analyse",
      shortTitle: "Outils et Analyse",
      icon: <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-orange-600 to-red-600",
      skills: [
        {
          name: "Power BI",
          progress: 50,
          level: "Intermédiaire",
          color: "bg-gradient-to-r from-yellow-500 to-yellow-600",
        },
        { name: "NumPy", progress: 50, level: "Intermédiaire", color: "bg-gradient-to-r from-blue-400 to-blue-500" },
        { name: "Git", progress: 70, level: "Avancé", color: "bg-gradient-to-r from-orange-500 to-orange-600" },
      ],
    },
  ]

  const currentCategory = skillCategories.find((cat) => cat.shortTitle === selectedCategory)
  const displayedSkills = currentCategory?.skills || []

  const getLevelIcon = (level) => {
    switch (level) {
      case "Expert":
        return <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
      case "Avancé":
        return <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
      default:
        return <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
    }
  }

  const handleSkillClick = (skillIndex, skillName) => {
    const skillId = `${selectedCategory}-${skillName}`
    const skillCard = skillRefs.current[skillIndex]
    const glareElement = skillCard?.querySelector('.glare-overlay')

    if (skillCard && glareElement) {
      // Toggle clicked state
      setClickedSkills(prev => {
        const newSet = new Set(prev)
        if (newSet.has(skillId)) {
          newSet.delete(skillId)
        } else {
          newSet.add(skillId)
        }
        return newSet
      })

      // Glare animation
      gsap.set(glareElement, {
        x: '-100%',
        opacity: 1,
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)'
      })

      gsap.to(glareElement, {
        x: '100%',
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(glareElement, { opacity: 0 })
        }
      })

      // Card bounce effect
      gsap.to(skillCard, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      })
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

      // Animation des filtres
      gsap.fromTo(
        filtersRef.current.children,
        {
          y: 30,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: filtersRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    // Animation des cartes de compétences lors du changement de catégorie
    if (skillsRef.current) {
      gsap.fromTo(
        skillsRef.current.children,
        {
          y: 40,
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
          stagger: 0.1,
          ease: "power3.out",
        },
      )
    }
    
    // Clear clicked skills when category changes
    setClickedSkills(new Set())
  }, [selectedCategory])

  const handleCategoryChange = (category) => {
    if (category !== selectedCategory) {
      // Animation de sortie
      gsap.to(skillsRef.current.children, {
        y: -20,
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setSelectedCategory(category)
        },
      })
    }
  }

  return (
    <div
      ref={containerRef}
      className="bg-gray-900 min-h-screen px-3 sm:px-4 lg:px-6 py-8 sm:py-12 lg:py-16 w-full relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Titre principal */}
        <div ref={titleRef} className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight">
              MES COMPÉTENCES
            </h2>
          </div>
          <p className="text-sm sm:text-base lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            Découvrez mon expertise technique à travers différents domaines de développement
          </p>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>

        {/* Filtres de catégories */}
        <div
          ref={filtersRef}
          className="flex justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12 flex-wrap px-2"
        >
          {skillCategories.map((category, catIndex) => (
            <button
              key={catIndex}
              className={`group relative px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 border-2 overflow-hidden ${
                selectedCategory === category.shortTitle
                  ? "border-white bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25"
                  : "border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500 hover:bg-gray-700/50"
              }`}
              onClick={() => handleCategoryChange(category.shortTitle)}
            >
              <div className="flex items-center gap-1.5 sm:gap-2 relative z-10">
                {category.icon}
                <span className="whitespace-nowrap">{category.shortTitle}</span>
              </div>
              {selectedCategory !== category.shortTitle && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
          ))}
        </div>

        {/* Grille des compétences */}
        <div ref={skillsRef} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {displayedSkills.map((skill, skillIndex) => {
            const skillId = `${selectedCategory}-${skill.name}`
            const isClicked = clickedSkills.has(skillId)
            
            return (
              <div
                key={skillIndex}
                ref={el => skillRefs.current[skillIndex] = el}
                className={`group relative cursor-pointer select-none transition-all duration-500 hover:-translate-y-1 ${
                  isClicked 
                    ? 'bg-gradient-to-br from-purple-800/80 to-blue-800/80 border-purple-400/70 shadow-xl shadow-purple-500/25' 
                    : 'bg-gray-800/60 border-gray-700/50 hover:border-purple-500/50'
                } backdrop-blur-sm border rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 hover:shadow-xl hover:shadow-purple-500/10 overflow-hidden`}
                onClick={() => handleSkillClick(skillIndex, skill.name)}
              >
                {/* Glare overlay */}
                <div className="glare-overlay absolute inset-0 w-full h-full opacity-0 pointer-events-none z-20"></div>

                {/* Effet de brillance au survol */}
                <div className={`absolute inset-0 rounded-xl sm:rounded-2xl transition-opacity duration-500 ${
                  isClicked 
                    ? 'bg-gradient-to-r from-transparent via-purple-200/10 to-transparent opacity-100 animate-pulse'
                    : 'bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse'
                }`}></div>

                <div className="relative z-10">
                  {/* En-tête de la carte */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <div
                        className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg ${skill.color} flex items-center justify-center shadow-lg flex-shrink-0 ${
                          isClicked ? 'animate-pulse' : ''
                        }`}
                      >
                        <Code2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className={`font-bold text-sm sm:text-base lg:text-lg truncate ${
                          isClicked ? 'text-purple-100' : 'text-white'
                        }`}>{skill.name}</h3>
                        <div className={`flex items-center gap-1 text-xs sm:text-sm ${
                          isClicked ? 'text-purple-200' : 'text-gray-400'
                        }`}>
                          {getLevelIcon(skill.level)}
                          <span className="truncate">{skill.level}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className={`text-lg sm:text-xl lg:text-2xl font-black ${
                        isClicked ? 'text-purple-100' : 'text-white'
                      }`}>{skill.progress}%</div>
                    </div>
                  </div>

                  {/* Barre de progression */}
                  <div className="relative">
                    <div className="w-full h-2.5 sm:h-3 bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden ${
                          isClicked ? 'animate-pulse' : ''
                        }`}
                        style={{ width: `${skill.progress}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                    <div
                      className={`absolute -top-0.5 sm:-top-1 -bottom-0.5 sm:-bottom-1 rounded-full blur-sm transition-opacity duration-300 ${
                        isClicked 
                          ? 'bg-gradient-to-r from-purple-400/30 to-blue-400/30 opacity-100'
                          : 'bg-gradient-to-r from-purple-500/15 to-blue-500/15 opacity-0 group-hover:opacity-100'
                      }`}
                      style={{ width: `${skill.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Click indicator */}
                {isClicked && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
                )}
              </div>
            )
          })}
        </div>

        {/* Statistiques de la catégorie */}
        <div className="mt-8 sm:mt-12 lg:mt-16 px-2 flex justify-center items-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 w-full max-w-md sm:max-w-none mx-auto">
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl sm:text-2xl lg:text-3xl font-black text-white mb-1">
                {displayedSkills.length}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Technologies</div>
            </div>
            <div className="w-full h-px sm:w-px sm:h-8 lg:h-12 bg-gray-600"></div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl sm:text-2xl lg:text-3xl font-black text-white mb-1">
                {Math.round(displayedSkills.reduce((acc, skill) => acc + skill.progress, 0) / displayedSkills.length)}%
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Moyenne</div>
            </div>
            <div className="w-full h-px sm:w-px sm:h-8 lg:h-12 bg-gray-600"></div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl sm:text-2xl lg:text-3xl font-black text-white mb-1">
                {displayedSkills.filter((skill) => skill.level === "Expert").length}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Expert</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Competences