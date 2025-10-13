// src/components/Tech.js
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaLaravel } from "react-icons/fa";
import { SiJavascript, SiMysql, SiTailwindcss } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";

// 1. Tambahkan properti 'color' dengan kode hex warna resmi
const technologies = [
  { name: "React", icon: <FaReact size={50} />, color: "#61DAFB" },
  { name: "JavaScript", icon: <SiJavascript size={50} />, color: "#F7DF1E" },
  { name: "HTML5", icon: <FaHtml5 size={50} />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt size={50} />, color: "#1572B6" },
  { name: "TailwindCSS", icon: <SiTailwindcss size={50} />, color: "#06B6D4" },
  { name: "Laravel", icon: <FaLaravel size={50} />, color: "#BF092F" },
  { name: "MySQL", icon: <SiMysql size={50} />, color: "#16476A" },
  { name: "Figma", icon: <IoLogoFigma size={50} />, color: "#FF3B00" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Tech = () => {
  return (
    <section id="tech" className="bg-gray-800 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Teknologi yang Saya Pelajari</h2>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap justify-center items-center gap-8 md:gap-12 px-4">
          {technologies.map((tech) => (
            <motion.div
              variants={itemVariants}
              key={tech.name}
              className="flex flex-col items-center gap-2"
              whileHover={{ scale: 1.1 }} // Efek hover hanya memperbesar
            >
              {/* 2. Terapkan warna menggunakan inline style */}
              <div style={{ color: tech.color }}>{tech.icon}</div>
              <p className="text-sm font-semibold text-white">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;
