import React from 'react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiMongodb,  SiTailwindcss, SiCplusplus, SiJavascript, SiTypescript,SiExpress, SiNextdotjs } from 'react-icons/si';

export default function Skills() {
  const techRef = useRef([]);
  const langRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(techRef.current, { y: 30, opacity: 0 }, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.6
    });
    gsap.fromTo(langRef.current, { y: 30, opacity: 0 }, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.6,
      delay: 0.3
    });
  }, []);

  const technologies = [
    { name: 'React', icon: <FaReact className="text-cyan-300 text-3xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-3xl" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-400 text-3xl" /> },
    { name: 'Express', icon: <SiExpress className="text-yellow-400 text-3xl" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-yellow-400 text-3xl" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-500 text-3xl" /> },
  ];

  const languages = [
    { name: 'C++', icon: <SiCplusplus className="text-purple-400 text-3xl" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-300 text-3xl" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-400 text-3xl" /> },
    { name: 'Java', icon: <FaJava className="text-yellow-500 text-3xl" /> },
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-gray-800 text-center">
      <h2 className="text-5xl font-extrabold mb-12 text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
        🚀 Skills
      </h2>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-cyan-300 mb-6">🛠️ Tools & Technologies</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 gap-x-4 justify-items-center">
          {technologies.map((tech, i) => (
            <div key={tech.name} ref={el => techRef.current[i] = el} className="flex flex-col items-center space-y-2">
              {tech.icon}
              <span className="text-white font-medium text-lg">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-cyan-300 mb-6">💻 Programming Languages</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 gap-x-4 justify-items-center">
          {languages.map((lang, i) => (
            <div key={lang.name} ref={el => langRef.current[i] = el} className="flex flex-col items-center space-y-2">
              {lang.icon}
              <span className="text-white font-medium text-lg">{lang.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
