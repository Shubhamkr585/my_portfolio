import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css'; // Import the CSS file for styles

export default function Hero() {
  const titleRef = useRef();
  const subtitleRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    gsap.fromTo(titleRef.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    gsap.fromTo(subtitleRef.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.5 });
    gsap.fromTo(buttonRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, delay: 1 });
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-6">
      <h1 ref={titleRef} className="fancy-title">Hi, I'm Shubham</h1>
      <p ref={subtitleRef} className="fancy-subtitle">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
      <a ref={buttonRef} href="#projects" className="fancy-button">
        View My Work
      </a>
    </section>
  );
}
