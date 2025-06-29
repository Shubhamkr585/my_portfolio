import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [active, setActive] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'achievements', 'contact'];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Shubham</h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <ul className="hidden md:flex gap-4">
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`text-sm md:text-base px-3 py-1 rounded-md transition-colors duration-300 ${
                  active === item.id ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-gray-800 px-4 pb-4">
          {navItems.map(item => (
            <li key={item.id} className="mb-2">
              <a
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-md text-sm transition-colors duration-300 ${
                  active === item.id ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}