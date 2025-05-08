import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  const skills = [
    { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML' },
    { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS' },
    { icon: <FaBootstrap className="text-purple-500" />, name: 'Bootstrap' },
    { icon: <SiTailwindcss className="text-blue-500" />, name: 'Tailwind' },
    { icon: <FaJsSquare className="text-yellow-500" />, name: 'JavaScript' },
    { icon: <FaPython className="text-blue-600" />, name: 'Python' },
    { icon: <FaJava className="text-red-600" />, name: 'Java' },
    { icon: <FaPhp className="text-purple-600" />, name: 'PHP' },
    { icon: <FaReact className="text-blue-400" />, name: 'React' },
    { icon: <FaAngular className="text-red-600" />, name: 'Angular' },
    { icon: <SiNextdotjs className="text-white" />, name: 'Next.js' },
    { icon: <SiFlutter className="text-blue-400" />, name: 'Flutter' },
    { icon: <FaNodeJs className="text-green-600" />, name: 'Node.js' },
    { icon: <SiNestjs className="text-red-500" />, name: 'NestJS' },
    { icon: <SiExpress className="text-white" />, name: 'Express' },
    { icon: <SiLaravel className="text-red-500" />, name: 'Laravel' },
    { icon: <SiSpringboot className="text-green-600" />, name: 'SpringBoot' },
    { icon: <SiPostgresql className="text-blue-700" />, name: 'PostgreSQL' },
    { icon: <SiMysql className="text-blue-500" />, name: 'MySQL' },
    { 
      icon: (
        <div className="relative w-20 h-20">
          <img 
            src={figma}
            alt="Figma" 
            className="object-contain w-full h-full"
          />
        </div>
      ), 
      name: 'Figma' 
    },
    { 
      icon: (
        <div className="relative w-24 h-24">
          <img 
            src={adobxd}
            alt="Adobe XD" 
            className="object-contain w-full h-full"
          />
        </div>
      ), 
      name: 'Adobe XD'  
    },
    { icon: <FaGitAlt className="text-orange-500" />, name: 'Git' },
  ];

  return (
    <div className="py-6 px-4 ">
      <div 
        className="max-w-4xl mx-auto mb-8"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-white ">MES COMPETENCES</h2>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-8">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center p-2"
            data-aos="zoom-in"
            data-aos-delay={`${index * 50}`}
          >
            <div className="text-5xl mb-2 text-white">
              {skill.icon}
            </div>
            <p className="text-sm font-medium text-white">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competences;