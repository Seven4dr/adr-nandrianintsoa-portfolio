import React from 'react';
import { 
  FaJsSquare, 
  FaPython, 
  FaJava, 
  FaPhp, 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaAngular, 
  FaNodeJs, 
  FaBootstrap,
  FaGitAlt
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiFlutter, 
  SiNestjs, 
  SiExpress, 
  SiLaravel, 
  SiSpringboot, 
  SiPostgresql, 
  SiMysql, 
  SiTailwindcss,
} from 'react-icons/si';

// Use absolute paths for public assets
const figma = '/images/figma.png';
const adobxd = '/images/adobxd.png';

const Competences = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
        { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
        { icon: <FaBootstrap className="text-purple-500" />, name: "Bootstrap" },
        { icon: <SiTailwindcss className="text-blue-500" />, name: "Tailwind" },
        { icon: <FaJsSquare className="text-yellow-500" />, name: "JavaScript" },
        { icon: <FaReact className="text-blue-400" />, name: "React" },
        { icon: <FaAngular className="text-red-600" />, name: "Angular" },
        { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
        { icon: <SiFlutter className="text-blue-400" />, name: "Flutter" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { icon: <FaPython className="text-blue-600" />, name: "Python" },
        { icon: <FaJava className="text-red-600" />, name: "Java" },
        { icon: <FaPhp className="text-purple-600" />, name: "PHP" },
        { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
        { icon: <SiNestjs className="text-red-500" />, name: "NestJS" },
        { icon: <SiExpress className="text-white" />, name: "Express" },
        { icon: <SiLaravel className="text-red-500" />, name: "Laravel" },
        { icon: <SiSpringboot className="text-green-600" />, name: "Spring Boot" }
      ]
    },
    {
      title: "Base de Données",
      skills: [
        { icon: <SiPostgresql className="text-blue-700" />, name: "PostgreSQL" },
        { icon: <SiMysql className="text-blue-500" />, name: "MySQL" }
      ]
    },
    {
      title: "Outils",
      skills: [
        { icon: <img src={figma} alt="Figma" className="w-8 h-8" />, name: "Figma" },
        { icon: <img src={adobxd} alt="Adobe XD" className="w-12 h-8" />, name: "Adobe XD" },
        { icon: <FaGitAlt className="text-orange-500" />, name: "Git" }
      ]
    }
  ];

  return (
    <div className="px-4 min-h-screen">
     <div className="max-w-7xl mx-auto mb-12 px-4">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-white tracking-wide">
          MES COMPETENCES
        </h2>
      </div>

      
      {/* Grid 2x2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category, categoryIndex) => (
          <div 
            key={categoryIndex}
            className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/60 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-center mb-6 text-white/90 border-b border-slate-600/50 pb-3">
              {category.title}
            </h3>
            
            <div className="grid grid-cols-3 gap-4 place-items-center">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className="flex flex-col items-center p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 border border-slate-600/30 hover:scale-105 min-w-[80px]"
                >
                  <div className="text-3xl mb-2">
                    {skill.icon}
                  </div>
                  <span className="text-xs text-white/80 text-center font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competences;