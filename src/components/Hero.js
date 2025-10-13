// src/components/Hero.js
import React from "react";
import { motion } from "framer-motion";

// 1. Impor gambar Anda di sini. Pastikan path-nya benar.
import profilePic from "../assets/aku.png";

const Hero = () => {
  return (
    <section id="hero" className="container mx-auto flex flex-col md:flex-row items-center justify-center px-6 py-20">
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="w-48 h-48 rounded-full mb-8 md:mb-0 md:mr-10 border-4 border-cyan-400 bg-gray-700">
        {/* 2. Gunakan variabel 'profilePic' dan hapus tulisan "Foto Anda" */}
        <img src={profilePic} alt="Nama Anda" className="w-full h-full rounded-full object-cover" />
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center md:text-left">
        <h1 className="text-5xl font-bold mb-2">Nama Lengkap Anda</h1>
        <p className="text-xl text-cyan-400 mb-4">Frontend Developer | UI/UX Enthusiast</p>
        <p className="text-lg max-w-xl">Selamat datang di portofolio saya. Saya adalah seorang pengembang perangkat lunak dengan fokus pada pembuatan aplikasi web yang modern dan responsif.</p>
      </motion.div>
    </section>
  );
};

export default Hero;
