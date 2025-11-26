// src/components/Navbar.js
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Pastikan sudah install react-icons

const Navbar = () => {
  // State untuk mengatur buka/tutup menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md p-4 shadow-lg border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}
        <a href="#hero" className="text-3xl font-extrabold text-yellow-400 font-['Akaya_Kanadaka']">
          Rifqinawwal
        </a>

        {/* MENU DESKTOP (Hanya muncul di layar besar 'md') */}
        <div className="hidden md:flex space-x-8">
          <a href="#tech" className="text-white hover:text-yellow-400 font-semibold transition duration-300">
            Teknologi
          </a>
          <a href="#projects" className="text-white hover:text-yellow-400 font-semibold transition duration-300">
            Proyek
          </a>
          <a href="#contact" className="text-white hover:text-yellow-400 font-semibold transition duration-300">
            Kontak
          </a>
        </div>

        {/* TOMBOL HAMBURGER (Hanya muncul di HP 'md:hidden') */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white hover:text-yellow-400 text-2xl focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MENU MOBILE (Muncul jika isOpen = true) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-white/10 shadow-xl">
          <div className="flex flex-col items-center py-6 space-y-6">
            <a
              href="#tech"
              onClick={() => setIsOpen(false)} // Tutup menu saat diklik
              className="text-white hover:text-yellow-400 text-lg font-semibold"
            >
              Teknologi
            </a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400 text-lg font-semibold">
              Proyek
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400 text-lg font-semibold">
              Kontak
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
