import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// --- DATA PROYEK ---
const projectData = [
  {
    id: 1,
    title: "Gym Website - Gymso",
    description: "🔥 Gym Website – Landing page kece buat pecinta fitness! 💪🏋️‍♂️ Tampilannya keren, responsif, dan siap bikin semangat nge-gym makin naik! 🚀🔥",
    tags: ["HTML", "CSS", "JavaScript"],
    // Ganti URL gambar ini dengan gambar kamu sendiri
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop", // Gambar 1
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1469&auto=format&fit=crop", // Gambar 2
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1375&auto=format&fit=crop", // Gambar 3
    ],
    links: { demo: "#", repo: "#" },
  },
  {
    id: 2,
    title: "Sanggar Studio Website",
    description: "🎨 Sanggar Studio Website – Website keren buat sanggar seni! 🎭🎨 Tampilannya keren, responsif, dan siap bikin semangat berkarya makin tinggi! 🚀🔥",
    tags: ["HTML", "Bootstrap5", "JavaScript", "SASS"],
    images: ["https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1480&auto=format&fit=crop", "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1470&auto=format&fit=crop"],
    links: { demo: "#", repo: "#" },
  },
  {
    id: 3,
    title: "E-Commerce Dashboard",
    description: "🛒 Dashboard admin untuk toko online dengan fitur analitik lengkap. Manajemen produk jadi lebih mudah dan efisien! 📈💰",
    tags: ["React", "TailwindCSS", "Chart.js"],
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop", "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1374&auto=format&fit=crop"],
    links: { demo: "#", repo: "#" },
  },
];

// --- KOMPONEN KARTU ---
const ProjectCard = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300"
    >
      {/* --- BAGIAN SLIDER GAMBAR --- */}
      <div className="relative w-full h-64 bg-gray-900 group">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={project.images[currentImage]}
            alt={project.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover object-top"
          />
        </AnimatePresence>

        {/* Tombol Panah (Hanya muncul jika hover) */}
        <div className="absolute inset-0 flex justify-between items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button onClick={prevImage} className="bg-black/50 p-2 rounded-full text-white hover:bg-yellow-400 hover:text-black transition">
            <FaChevronLeft />
          </button>
          <button onClick={nextImage} className="bg-black/50 p-2 rounded-full text-white hover:bg-yellow-400 hover:text-black transition">
            <FaChevronRight />
          </button>
        </div>

        {/* Indikator Titik (Dots) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {project.images.map((_, idx) => (
            <div key={idx} className={`w-2 h-2 rounded-full transition-all ${idx === currentImage ? "bg-yellow-400 w-4" : "bg-white/50"}`} />
          ))}
        </div>
      </div>

      {/* --- BAGIAN DESKRIPSI --- */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">{project.title}</h3>
          <div className="flex space-x-3">
            <a href={project.links.github} className="text-gray-400 hover:text-white text-xl">
              <FaGithub />
            </a>
            <a href={project.links.demo} className="text-gray-400 hover:text-white text-xl">
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>

        <p className="text-gray-300 text-sm mb-6 leading-relaxed">{project.description}</p>

        {/* Tags Teknologi */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1 text-xs font-semibold text-white bg-cyan-600/20 border border-cyan-500/30 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// --- KOMPONEN UTAMA ---
const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">My Projects ✍️</h2>
          <p className="text-gray-400 mt-4">Mari lihat beberapa karya yang pernah aku buat</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
