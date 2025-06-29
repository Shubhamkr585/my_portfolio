import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import shubham from '../assets/shubham.png';

export default function About() {
  const imageRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    gsap.fromTo(imageRef.current,
      { rotationY: 90, opacity: 0, scale: 0.7 },
      { rotationY: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }
    );
    gsap.fromTo(textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.6, duration: 0.8, ease: 'power2.out' }
    );
  }, []);

  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-gray-900 text-center">
      <h2 className="text-5xl font-extrabold mb-10 text-gradient bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="flex flex-col items-center gap-8">
        <img
          ref={imageRef}
          src={shubham}
          alt="Shubham Kumar"
          className="w-60 h-60 rounded-full object-cover shadow-lg"
        />
        <p
          ref={textRef}
          className="text-gray-300 text-lg max-w-2xl leading-relaxed"
        >
          👨‍💻 I'm a <span className="text-blue-400 font-semibold">full-stack developer</span> passionate about building scalable web applications,
          solving challenging problems, and turning ideas into reality. <br />
          🚀 With strong foundations in <span className="text-cyan-300 font-semibold">DSA</span> and experience in modern web tech,
          I'm driven by impact and continuous growth.
        </p>
      </div>
    </section>
  );
}
