// src/components/Hero.js
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    // 1. TAMBAHKAN: min-h-[60vh] (untuk tinggi minimal 60% layar)
    // 2. UBAH: flex-col md:flex-row menjadi 'flex' saja (karena hanya 1 anak)
    <section id="hero" className="container mx-auto flex items-center justify-center px-6 py-20 min-h-[60vh]">
      {/* 3. UBAH: 'md:text-left' menjadi 'text-center' agar selalu di tengah */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} // Ubah animasi sedikit agar lebih halus
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-2">Rifqinawwal</h1>
        <p className="text-xl text-cyan-400 mb-4">Frontend Developer | UI/UX Enthusiast</p>
        <p className="text-lg max-w-xl">Selamat datang di portofolio saya. Saya adalah seorang pengembang perangkat lunak dengan fokus pada pembuatan aplikasi web yang modern dan responsif.</p>
      </motion.div>
    </section>
  );
};

export default Hero;
