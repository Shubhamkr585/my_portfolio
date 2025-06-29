import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

const projectData = [
  {
    id: 1,
    title: 'NotesNest',
    description: 'A MERN stack notes app with JWT auth, image uploads, and responsive UI.',
    tech: ['React', 'Node.js', 'MongoDB', 'Cloudinary', 'Tailwind CSS'],
    link: 'https://github.com/Shubhamkr585/NotesNest'
  },
//   {
//     id: 2,
//     title: 'FarmerConnect',
//     description: 'Empowering farmers with direct-to-vendor digital trade and voice support.',
//     tech: ['React', 'Express', 'MongoDB', 'Speech-to-Text'],
//     link: 'https://github.com/shubham/farmerconnect'
//   },
//   {
//     id: 3,
//     title: 'Ayushman Sahayak',
//     description: 'Search hospitals, check eligibility, book care with one-stop Ayushman Bharat tool.',
//     tech: ['React', 'Node.js', 'Mapbox', 'Twilio'],
//     link: 'https://github.com/shubham/ayushman-sahayak'
//   }
];

export default function Projects() {
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50, rotateY: -20 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%'
          }
        }
      );
    });
  }, []);

  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-gray-900 text-center">
      <h2 className="text-5xl font-extrabold mb-12 text-gradient bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        My Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        {projectData.map((project, index) => (
          <div
            key={project.id}
            ref={el => (cardRefs.current[index] = el)}
            className="bg-gray-800 rounded-xl shadow-xl hover:shadow-pink-500/30 transition-transform duration-300 transform hover:-translate-y-1 hover:rotate-1 flex flex-col p-6 h-full"
          >
            <div className="text-left flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-bold text-pink-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-sm text-blue-400">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="bg-blue-800 px-2 py-1 rounded-md text-blue-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-pink-400 hover:text-pink-300 font-medium text-sm"
              >
                View Project <ArrowUpRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
