// src/components/TechLoop.js

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// 1. Impor ikon-ikon Anda
import { FaHtml5, FaCss3Alt, FaLaravel, FaFigma } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMysql, SiAdobephotoshop, SiAutodeskmaya } from "react-icons/si";

const yourIcons = [
  <span style={{ color: "#F7DF1E" }}>
    <SiJavascript />
  </span>,
  <span style={{ color: "#E34F26" }}>
    <FaHtml5 />
  </span>,
  <span style={{ color: "#1572B6" }}>
    <FaCss3Alt />
  </span>,
  <span style={{ color: "#06B6D4" }}>
    <SiTailwindcss />
  </span>,
  <span style={{ color: "#FF2D20" }}>
    <FaLaravel />
  </span>,
  <span style={{ color: "#4479A1" }}>
    <SiMysql />
  </span>,
  <span style={{ color: "#F24E1E" }}>
    <FaFigma />
  </span>,
  <span style={{ color: "#31A8FF" }}>
    <SiAdobephotoshop />
  </span>,
  <span style={{ color: "#67B2D8" }}>
    <SiAutodeskmaya />
  </span>,
];

export const LogoLoop = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        key={isMobile ? "mobile-mode" : "desktop-mode"}
        // 👇 PERBAIKAN 1: Tambahkan 'w-max' agar lebar menyesuaikan isi (tidak terpotong)
        className="flex items-center gap-10 w-max"
        animate={{
          // 👇 PERBAIKAN 2: Geser dari 0 ke -50% saja
          // Karena kita menduplikasi array 2x, saat mencapai -50%,
          // posisi ikon set ke-2 akan tepat menggantikan set ke-1.
          x: [0, "-50%"],
          transition: {
            ease: "linear",
            duration: isMobile ? 30 : 30, // Atur kecepatan di sini
            repeat: Infinity,
          },
        }}
      >
        {/* 👇 PERBAIKAN 3: Duplikat ikon menjadi 4x (atau lebih) biar aman di layar lebar */}
        {[...yourIcons, ...yourIcons, ...yourIcons, ...yourIcons].map((icon, i) => (
          <div key={i} className="flex-shrink-0 text-7xl">
            {icon}
          </div>
        ))}
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />
    </div>
  );
};

// Komponen Utama
const TechLoop = () => {
  return (
    <section id="tech" className="bg-black py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-yellow-400">Skill & Teknologi yang Saya Pelajari 👨🏻‍💻</h2>
        <p className="text-gray-400 mt-4 mb-10">Berikut adalah beberapa teknologi yang saya gunakan dalam berkarya</p>
        <LogoLoop />
      </div>
    </section>
  );
};

export default TechLoop;
