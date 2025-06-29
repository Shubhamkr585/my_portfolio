import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-10 text-gradient bg-gradient-to-r from-pink-400 to-yellow-300 bg-clip-text text-transparent">
        📬 Contact Me
      </h2>

      <p className="text-gray-300 mb-10 text-lg">Feel free to connect with me on the platforms below:</p>
      <div className="flex justify-center gap-10 text-white text-3xl mb-14">
        <a href="https://github.com/Shubhamkr585" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/shubham-kumar-75181a280/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/shubhamprd585" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
          <FaInstagram />
        </a>
      </div>

      <form className="space-y-6 max-w-xl mx-auto">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-md bg-gray-800 text-white" />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-md bg-gray-800 text-white" />
        <textarea placeholder="Your Message" className="w-full px-4 py-2 rounded-md bg-gray-800 text-white" rows="5" />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
          Send Message
        </button>
      </form>
    </section>
  );
}