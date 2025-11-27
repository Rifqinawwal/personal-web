// src/components/Navbar.js
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// 1. Impor motion dan AnimatePresence
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Variabel animasi menu
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20, // Mulai dari sedikit di atas
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0, // Turun ke posisi normal
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20, // Naik lagi ke atas saat tutup
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md p-4 shadow-lg border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center max-w-6xl px-6">
        {/* LOGO */}
        <a href="#hero" className="text-3xl font-extrabold text-yellow-400 font-['Parisienne']">
          Rifqinawwal
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-white hover:text-yellow-400 font-semibold transition duration-300">
            About
          </a>
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

        {/* TOMBOL HAMBURGER */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white hover:text-yellow-400 text-2xl focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MENU MOBILE DENGAN ANIMASI */}
      {/* 2. Bungkus dengan AnimatePresence agar animasi 'exit' jalan */}
      <AnimatePresence>
        {isOpen && (
          <motion.div variants={menuVariants} initial="hidden" animate="visible" exit="exit" className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-white/10 shadow-xl backdrop-blur-lg">
            <div className="flex flex-col items-center py-6 space-y-6">
              <a href="#tech" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400 text-lg font-semibold">
                Teknologi
              </a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400 text-lg font-semibold">
                Proyek
              </a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400 text-lg font-semibold">
                Kontak
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
