import { useState } from "react";
import { BsSunFill } from "react-icons/bs";

export function Navbar({setDarkMode :boolean}) {

  return (
    <nav className="py-4 mb-2 pt-4 flex justify-between">
      <button
        className="
                  text-2xl bg-gradient-to-r from-cyan-500 to-gray-700 text-white p-2 
          rounded-full md:text-4xl lg:text-4xl"
      >
        GC
        <span className="hidden hover:flex-inline"> - Guilherme Cardoso</span>
      </button>

      <ul className="flex items-center gap-4">
        <li>
          <a
            href="#"
            className="
              bg-gradient-to-r from-cyan-500 to-gray-700 text-white px-4 py-2 rounded-md font-bold"
          >
            Resume
          </a>
        </li>
        <li>
          <BsSunFill 
            className="cursor-pointer text-2xl" 
            onClick={() => setDarkMode(!darkMode)}
          />
        </li>
      </ul>
    </nav>
  );
}
