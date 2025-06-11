import React from 'react';
import { Element } from 'react-scroll';
import ProfileImage from './ProfileImage.jsx';
import shubham from '../assets/shubham.png';

export default function About() {
  return (
    <Element className="about">
      <div className="flex flex-col text-white my-3 mx-4">
        <h1 className="text-center font-semibold heading my-2">ABOUT ME</h1>

        <div className="flex flex-col md:flex-row items-start justify-between gap-6 mt-4">
          {/* Text Section - 65% */}
          <div className="w-full md:w-[65%]">
            <p className="para my-2">
              I'm a software engineer with a passion for technology and design. I am pursuing BTECH in computer science and engineering from Birla Institute of Technology, Mesra.

            </p>
            <p className="para my-2">
              My main interests include web development, graphic design,android development and competitive programming.
            </p>
            <p className="para my-2">
              I am a fast learner and a team player. I am always eager to learn new things and improve my skills.
              I am currently working to improve the people reach to the healthcare and services.
            </p>
           
          </div>

          {/* Image Section - 35% */}
          <div className="w-full md:w-[35%] flex justify-center md:justify-end mr-6">
            <ProfileImage src={shubham} size={70} />
          </div>
        </div>
      </div>
    </Element>
  );
}
