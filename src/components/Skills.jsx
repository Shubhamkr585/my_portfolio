import React from "react";
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaInstagram, FaChess,FaAndroid } from "react-icons/fa"; // Java, HTML, CSS, JS, React
import { SiCplusplus, SiC, SiVite, SiFlutter, SiMongodb } from "react-icons/si"; // C++, C, Flutter, MongoDB
import { Element } from 'react-scroll'

function Skills() {
  return (
    <Element name="skills" >
    <div className="flex flex-col">
      <h1
        className="my-5"
        style={{
          color: "lavender",
          textAlign: "center",
          fontFamily: "cursive",
          fontWeight: "bold",
          fontSize: "28px", // Increase font size for larger screens
                         
        }}
      >
        SKILLS SEGMENT
      </h1>

      <div
        className="grid gap-8 my-3 mx-auto"
        style={{
         // Restrict container width
          gridTemplateColumns: "repeat(4,1fr)", // Responsive grid for both rows
        }}
      >
        {/* Top row - 5 icons */}
        <div className="text-center">
          <FaReact size={50} className="text-blue-400" />
        
        </div>
        <div className="text-center">
          <SiVite size={50} className="text-indigo-500" />
        
        </div>
        <div className="text-center">
          <FaJava size={50} className="text-red-600" />
        
        </div>
        <div className="text-center">
          <SiCplusplus size={50} className="text-blue-500" />
         
        </div>
        <div className="text-center">
          <SiC size={50} className="text-gray-700" />
        
        </div>

        {/* Bottom row - Remaining icons */}
        <div className="text-center">
          <SiFlutter size={50} className="text-blue-400" />
        
        </div>
        <div className="text-center">
          <FaHtml5 size={50} className="text-orange-600" />
        </div>
        <div className="text-center">
          <FaCss3Alt size={50} className="text-blue-500" />
         
        </div>
        <div className="text-center">
          <FaJs size={50} className="text-yellow-500" />
          
        </div>
        <div className="text-center">
          <SiMongodb size={50} className="text-green-500" />
          
        </div>
        <div className="text-center">
          <FaAndroid size={50} className="text-green-500" />
          
        </div>
        <div className="text-center">
          <FaChess size={50} className="text-red-500" />
          
        </div>

      </div>
    </div>
    </Element>
  );
}

export default Skills;
