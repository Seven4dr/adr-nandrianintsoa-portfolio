import { useState } from 'react';
import { 
  FaReact, FaAngular, FaNodeJs, FaPython, FaJava, FaGitAlt 
} from 'react-icons/fa6';
import { 
  SiTailwindcss, SiNextdotjs, SiFlutter, SiNestjs, SiExpress, SiLaravel, SiPostgresql, SiMysql, 
  SiFastapi, SiNumpy, SiTypescript
} from 'react-icons/si';
import { bi } from '../../public/images';

const Competences = () => {
  const [selectedCategory, setSelectedCategory] = useState('Frontend');

  const skillCategories = [
    {
      title: "Développement Frontend",
      shortTitle: "Frontend",
      skills: [
        { name: "React", color: "text-blue-600", icon: <FaReact className="text-blue-600" />, progress: 90 },
        { name: "Angular", color: "text-red-600", icon: <FaAngular className="text-red-600" />, progress: 60 },
        { name: "Next.js", color: "text-gray-800", icon: <SiNextdotjs className="text-gray-800" />, progress: 50 },
        { name: "Flutter", color: "text-blue-400", icon: <SiFlutter className="text-blue-400" />, progress: 50 },
        { name: "Tailwind", color: "text-blue-400", icon: <SiTailwindcss className="text-blue-400" />, progress: 85 },
        { name: "TypeScript", color: "text-blue-500", icon: <SiTypescript className="text-blue-500" />, progress: 50 },
        { name: "JavaScript ES6+", color: "text-yellow-500", icon: <SiTypescript className="text-yellow-500" />, progress: 80 },
      ]
    },
    {
      title: "Développement Backend",
      shortTitle: "Backend",
      skills: [
        { name: "Node.js", color: "text-green-600", icon: <FaNodeJs className="text-green-600" />, progress: 75 },
        { name: "NestJS", color: "text-red-500", icon: <SiNestjs className="text-red-500" />, progress: 80 },
        { name: "Express", color: "text-gray-300", icon: <SiExpress className="text-gray-300" />, progress: 70 },
        { name: "Laravel", color: "text-red-500", icon: <SiLaravel className="text-red-500" />, progress: 65 },
        { name: "FastAPI", color: "text-green-700", icon: <SiFastapi className="text-green-700" />, progress: 60 },
        { name: "Python", color: "text-blue-600", icon: <FaPython className="text-blue-600" />, progress: 85 },
        { name: "Java", color: "text-red-600", icon: <FaJava className="text-red-600" />, progress: 80 },
      ]
    },
    {
      title: "Base de données",
      shortTitle: "Base de données",
      skills: [
        { name: "PostgreSQL", color: "text-blue-700", icon: <SiPostgresql className="text-blue-700" />, progress: 80 },
        { name: "MySQL", color: "text-blue-500", icon: <SiMysql className="text-blue-500" />, progress: 75 },
      ]
    },
    {
      title: "Outils & Analyse",
      shortTitle: "Outils et Analyse",
      skills: [
        { name: "Power BI", color: "text-yellow-600", icon: <img src={bi} alt="Power BI" className="w-6 h-6" />, progress: 70 },
        { name: "NumPy", color: "text-blue-500", icon: <SiNumpy className="text-blue-500" />, progress: 80 },
        { name: "Git", color: "text-orange-500", icon: <FaGitAlt className="text-orange-500" />, progress: 90 },
      ]
    }
  ];

  const displayedSkills = skillCategories.find(category => category.shortTitle === selectedCategory)?.skills || [];

  return (
    <>
      <style>{`
        .glare-hover {
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        .glare-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: all 0.6s ease;
          transform: skewX(-20deg);
        }
        .glare-hover:hover::before {
          left: 100%;
        }
        .progress-bar {
          height: 4px;
          border-radius: 2px;
          background-color: rgba(255, 255, 255, 0.2);
          overflow: hidden;
        }
        .progress-bar-inner {
          height: 100%;
          transition: width 0.3s ease;
          background: linear-gradient(90deg, #a78bfa, #7c3aed);
        }
        .filter-button {
          padding: 0.6rem 1.2rem;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          background: linear-gradient(135deg, #1e3a8a, #7c3aed);
          color: #ffffff;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
          box-shadow: 0 0 10px rgba(124, 58, 237, 0.5);
        }
        .filter-button:hover {
          background: linear-gradient(135deg, #3b82f6, #a78bfa);
          box-shadow: 0 0 15px rgba(124, 58, 237, 0.7);
          transform: translateY(-2px);
        }
        .filter-button.active {
          border-color: #ffffff;
          background: linear-gradient(135deg, #a78bfa, #ec4899);
          color: #ffffff;
          box-shadow: 0 0 20px rgba(236, 72, 153, 0.8);
        }
        .skill-card {
          border: 2px solid rgba(55, 65, 81, 0.5);
          background: rgba(31, 41, 55, 0.9);
        }
      `}</style>
      <div className="bg-gray-900 px-4 py-8 w-full">
        <div className="w-full max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-4 tracking-wider font-extrabold">
              MES COMPÉTENCES
            </h2>
            <div className="w-32 h-0.5 bg-purple-400 mx-auto"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {skillCategories.map((category, catIndex) => (
              <button
                key={catIndex}
                className={`filter-button ${selectedCategory === category.shortTitle ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.shortTitle)}
              >
                {category.shortTitle}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedSkills.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="competence-item p-4 rounded-lg skill-card hover:border-purple-400/50 transition-all duration-300 glare-hover flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-mono text-base text-slate-200">{skill.name}</span>
                  </div>
                  <span className="text-sm text-slate-400">{skill.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className={`progress-bar-inner ${skill.color}`}
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Competences;