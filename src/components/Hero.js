// src/components/Hero.js
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    // 1. TAMBAHKAN: min-h-[60vh] (untuk tinggi minimal 60% layar)
    // 2. UBAH: flex-col md:flex-row menjadi 'flex' saja (karena hanya 1 anak)
    <section id="hero" className="container mx-auto flex items-center justify-center px-6 py-20 min-h-screen">
      {/* 3. UBAH: 'md:text-left' menjadi 'text-center' agar selalu di tengah */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} // Ubah animasi sedikit agar lebih halus
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center "
      >
        <h1 className="text-5xl font-bold mb-4">
          Halo Semua, Aku Rifqi <span className="inline-block animate-bounce">👋</span>
        </h1>
        <p className="text-xl font-bold text-yellow-400 mb-4">Web Developer | UI/UX | Desain Grafis</p>
        <p className="text-lg max-w-xl">Aku bikin website, desain UI/UX, dan hal-hal digital lain biar hidup makin aesthetic. Scroll aja ke bawah, siapa tahu jodoh—eh maksudnya, jodoh proyek 😄</p>
      </motion.div>
    </section>
  );
};

export default Hero;
