import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll

export default function Navbar() {
  return (
    <div className="navbar text-white navbar-auto bg-slate-900 flex flex-row w-screen h-14 justify-end pr-8">
      <div>
        <Link
          to="about" // Match the "name" of the target Element
          smooth={true}
          duration={800}
        >
          <button className="mx-2 px-4 py-2 my-2 bg-green-700 text-center rounded-lg">
            About
          </button>
        </Link>
      </div>
      <div>
        <Link
          to="skills" // Match the "name" of the target Element
          smooth={true}
          duration={800}
        >
          <button className=
          "mx-2 px-4 py-2 my-2 bg-green-700 text-center rounded-lg">
            Skills
          </button>
        </Link>
      </div>
      <div>
        <Link
          to="projects" // Match the "name" of the target Element
          smooth={true}
          duration={800}
        >
          <button className="mx-2 px-4 py-2 my-2
           bg-green-700 text-center rounded-lg">
            Projects
          </button>
        </Link>
      </div>
      <div>
        <Link
          to="contact" // Match the "name" of the target Element
          smooth={true}
          duration={800}
        >
          <button className="mx-2 px-4 py-2 my-2
           bg-green-700 text-center rounded-lg">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
}
