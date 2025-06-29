import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function App() {
  useEffect(() => {
    document.title = 'Shubham Kumar | Portfolio';
  }, []);

  return (
    <div className="font-sans bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white scroll-smooth">
       <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}