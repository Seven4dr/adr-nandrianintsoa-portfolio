import  { useState } from 'react';

const Competences = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Frontend",
      shortTitle: "Frontend",
      skills: [
        { name: "HTML5", color: "bg-orange-500 hover:bg-orange-400 text-white" },
        { name: "CSS3", color: "bg-blue-500 hover:bg-blue-400 text-white" },
        { name: "Bootstrap", color: "bg-purple-600 hover:bg-purple-500 text-white" },
        { name: "Tailwind", color: "bg-blue-400 hover:bg-blue-300 text-white" },
        { name: "JavaScript", color: "bg-yellow-400 hover:bg-yellow-300 text-gray-900" },
        { name: "React", color: "bg-blue-600 hover:bg-blue-500 text-white" },
        { name: "Angular", color: "bg-red-600 hover:bg-red-500 text-white" },
        { name: "Next.js", color: "bg-gray-800 hover:bg-gray-700 text-white" },
        { name: "Flutter", color: "bg-blue-400 hover:bg-blue-300 text-white" }
      ]
    },
    {
      title: "Backend",
      shortTitle: "Backend",
      skills: [
        { name: "Python", color: "bg-blue-600 hover:bg-blue-500 text-white" },
        { name: "Java", color: "bg-red-600 hover:bg-red-500 text-white" },
        { name: "PHP", color: "bg-blue-800 hover:bg-blue-700 text-white" },
        { name: "Node.js", color: "bg-green-600 hover:bg-green-500 text-white" },
        { name: "NestJS", color: "bg-red-500 hover:bg-red-400 text-white" },
        { name: "Express", color: "bg-gray-300 hover:bg-gray-200 text-gray-900" },
        { name: "Laravel", color: "bg-red-500 hover:bg-red-400 text-white" },
        { name: "Spring Boot", color: "bg-green-600 hover:bg-green-500 text-white" }
      ]
    },
    {
      title: "Base de Données",
      shortTitle: "BD",
      skills: [
        { name: "PostgreSQL", color: "bg-blue-700 hover:bg-blue-600 text-white" },
        { name: "MySQL", color: "bg-blue-500 hover:bg-blue-400 text-white" }
      ]
    },
    {
      title: "Outils",
      shortTitle: "Outils",
      skills: [
        { name: "Figma", color: "bg-purple-500 hover:bg-purple-400 text-white" },
        { name: "Git", color: "bg-orange-500 hover:bg-orange-400 text-white" }
      ]
    }
  ];

  const currentCategory = skillCategories[activeCategory];

  return (
    <div className=" bg-gray-900 px-4 py-8 w-full">
      <div className="w-full max-w-6xl mx-auto">
        {/* Titre principal */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-4 tracking-wider font-mono">
            MES COMPÉTENCES
          </h2>
          <div className="w-32 h-0.5 bg-purple-400 mx-auto"></div>
        </div>

        {/* Menu de navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-4 py-2 text-sm font-mono rounded transition-all duration-300 border ${
                  activeCategory === index 
                    ? 'bg-purple-400/10 border-purple-400 text-purple-400' 
                    : 'border-slate-600 text-slate-400 hover:text-purple-400 hover:border-purple-400/50'
                }`}
              >
                {category.shortTitle}
              </button>
            ))}
          </div>
        </div>

        {/* Header de section */}
        <div className="border-l-4 border-purple-400 pl-4 mb-6">
          <h3 className="text-xl font-bold text-slate-200">
            {currentCategory.title}
          </h3>
          <p className="text-slate-400 text-sm">
            {currentCategory.skills.length} technologies disponibles
          </p>
        </div>

        {/* Liste des compétences en flex wrap, style bouton coloré */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {currentCategory.skills.map((skill, skillIndex) => (
            <button
              key={skillIndex}
              className={`px-4 py-2 rounded-md font-mono text-sm cursor-pointer transition-colors duration-300 ${skill.color}`}
              type="button"
              aria-label={skill.name}
            >
              {skill.name}
            </button>
          ))}
        </div>

        {/* Stats en bas */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`p-4 bg-slate-800 rounded border transition-all duration-300 cursor-pointer ${
                activeCategory === index 
                  ? 'border-purple-400 bg-purple-400/5' 
                  : 'border-slate-700 hover:border-purple-400/50'
              }`}
              onClick={() => setActiveCategory(index)}
            >
              <div className="text-2xl font-bold text-slate-200">
                {category.skills.length}
              </div>
              <div className="text-slate-400 text-sm">
                {category.shortTitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competences;
