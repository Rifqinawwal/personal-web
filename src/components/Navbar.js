// src/components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-cyan-400">
          Rifqinawwal
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="#tech" className="hover:text-cyan-400">
            Teknologi
          </a>
          <a href="#projects" className="hover:text-cyan-400">
            Proyek
          </a>
          <a href="#contact" className="hover:text-cyan-400">
            Kontak
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
