import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Achievements() {
  const listRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      listRef.current.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
        delay: 0.4
      }
    );
  }, []);

  return (
    <section id="achievements" className="py-20 px-6 md:px-20 bg-gray-800 text-center">
      <h2 className="text-5xl font-extrabold mb-10 text-gradient bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
        🏆 Achievements
      </h2>
      <ul ref={listRef} className="text-gray-200 space-y-4 text-lg max-w-3xl mx-auto">
        <li className="bg-gray-700 px-4 py-3 rounded-lg shadow-md">💡 Specialist on <span className="text-yellow-300 font-semibold">Codeforces</span></li>
        <li className="bg-gray-700 px-4 py-3 rounded-lg shadow-md">📈 Top <span className="text-green-400 font-semibold">5%</span> on <span className="text-orange-300 font-semibold">LeetCode</span> and earned <span className="text-orange-300 font-semibold">Knight Title</span></li>
        {/* <li className="bg-gray-700 px-4 py-3 rounded-lg shadow-md">🌍 Built a <span className="text-blue-400 font-semibold">social impact</span> app under <span className="text-pink-400 font-semibold">Ayushman Bharat</span> initiative</li> */}
      </ul>
    </section>
  );
}
