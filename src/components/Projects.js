// src/components/Projects.js
import React from "react";
import { motion } from "framer-motion"; // 1. Impor motion

const projectData = [
  { title: "Nama Proyek 1", description: "Deskripsi singkat mengenai proyek ini..." },
  { title: "Nama Proyek 2", description: "Deskripsi singkat mengenai proyek ini..." },
  { title: "Nama Proyek 3", description: "Deskripsi singkat mengenai proyek ini..." },
];

// 2. Kita bisa gunakan variants yang sama
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Proyek Saya</h2>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {projectData.map((project, index) => (
            <motion.div variants={itemVariants} key={index} className="bg-blue-950 p-6 rounded-lg shadow-lg text-left">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
