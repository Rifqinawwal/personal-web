// src/components/TechLoop.js

import { motion } from "framer-motion";

// 1. Impor ikon-ikon Anda
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaLaravel, FaFigma } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMysql } from "react-icons/si";

// 2. Buat array yang berisi komponen ikon Anda
const yourIcons = [<FaReact />, <SiJavascript />, <FaHtml5 />, <FaCss3Alt />, <SiTailwindcss />, <FaLaravel />, <SiMysql />, <FaFigma />, <FaNodeJs />];

export const LogoLoop = ({ className }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex items-center justify-center gap-10"
        animate={{
          x: ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          },
        }}
      >
        {/* 3. Ganti isinya dengan ikon Anda */}
        {[...yourIcons, ...yourIcons].map((icon, i) => (
          <div key={i} className="flex-shrink-0 text-7xl text-slate-400">
            {icon}
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900" />
    </div>
  );
};

// Ubah nama komponen utama agar mudah dipanggil
const TechLoop = () => {
  return (
    <section id="tech" className="bg-blue-950 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Teknologi yang Saya Pelajari</h2>
        <LogoLoop />
      </div>
    </section>
  );
};

export default TechLoop;
