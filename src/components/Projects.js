import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// --- DATA PROYEK ---
const projectData = [
  // --- Kategori: WEB ---
  {
    id: 1,
    category: "web",
    title: "Balbalans - Website",
    description: "Balbalans adalah sebuah website yang menyediakan informasi tentang berita sepak bola, berita sepak bolanya akan update otomatis ⚽️",
    tags: ["HTML", "TailwindCSS", "Laravel"],
    images: ["/website/1.png", "/website/2.png", "/website/3.png", "/website/4.png", "/website/5.png"],
    links: { demo: "#", repo: "#" },
  },
  {
    id: 2,
    category: "web",
    title: "MovieFlix - Website",
    description: "MovieFlix merupakan sebuah website landing page yang menyediakan trailer sebuah film 🎬",
    tags: ["HTML", "CSS", "JavaScript"],
    images: ["/movie/1.png", "/movie/2.png"],
    links: { demo: "#", repo: "#" },
  },

  // --- Kategori: UI/UX ---
  {
    id: 3,
    category: "uiux",
    title: "Real Madrid App - UI/UX",
    description: "Ini merupakan design prototype aplikasi mobile dari sebuah tim yang merajai Eropa yang berasal dari negara Spanyol yaitu Real Madrid 👑",
    tags: ["Figma"],
    images: ["/madrid/1.png", "/madrid/2.png", "/madrid/3.png", "/madrid/4.png", "/madrid/5.png"],
    links: { demo: "#", repo: "#" },
  },
  {
    id: 4,
    category: "uiux",
    title: "Football Shop - UI/UX",
    description: "Sebuah design prototype aplikasi mobile toko online yang menyediakan segala hal yang berbau sepak bola 🕺🏼",
    tags: ["Figma"],
    images: ["/madrid/1.png", "/madrid/2.png", "/madrid/3.png", "/madrid/4.png", "/madrid/5.png"],
    links: { demo: "#", repo: "#" },
  },
];

// --- KOMPONEN KARTU (TANPA ANIMASI MUNCUL) ---
const ProjectCard = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    // 👇 PERBAIKAN: Hapus motion.div, initial, animate, transition. Ganti jadi div biasa.
    // Ini bikin kartu langsung muncul seketika tanpa loading.
    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
      {/* --- BAGIAN SLIDER GAMBAR --- */}
      <div className="relative w-full h-64 bg-gray-900 group">
        {/* Gambar (Langsung Tampil) */}
        <img src={project.images[currentImage]} alt={project.title} className="w-full h-full object-cover object-top" />

        {/* Tombol Panah */}
        <div className="absolute inset-0 flex justify-between items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button onClick={prevImage} className="bg-black/50 p-2 rounded-full text-white hover:bg-yellow-400 hover:text-black transition">
            <FaChevronLeft />
          </button>
          <button onClick={nextImage} className="bg-black/50 p-2 rounded-full text-white hover:bg-yellow-400 hover:text-black transition">
            <FaChevronRight />
          </button>
        </div>

        {/* Indikator Titik */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {project.images.map((_, idx) => (
            <div key={idx} className={`w-2 h-2 rounded-full transition-all ${idx === currentImage ? "bg-yellow-400 w-4" : "bg-white/50"}`} />
          ))}
        </div>
      </div>

      {/* --- BAGIAN DESKRIPSI --- */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">{project.title}</h3>
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
    </div>
  );
};

// --- KOMPONEN UTAMA ---
const Projects = () => {
  const [activeTab, setActiveTab] = useState("web");

  const filteredProjects = projectData.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-black min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Judul */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">My Projects ✍️</h2>
          <p className="text-gray-400 mt-4">Yuk kepoin beberapa karya yang pernah aku buat</p>
        </div>

        {/* --- TAB NAVIGASI --- */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["web", "uiux", "design"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-200 border-2 ${
                activeTab === tab ? "bg-yellow-400 text-black border-yellow-400 scale-105" : "bg-transparent text-gray-400 border-gray-600 hover:border-yellow-400 hover:text-yellow-400"
              }`}
            >
              {tab === "web" ? "🌐 Website" : tab === "uiux" ? "📱 UI/UX" : "🎨 Desain Grafis"}
            </button>
          ))}
        </div>

        {/* --- GRID PROYEK --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[400px]">
          {/* Render Biasa (Tanpa AnimatePresence) */}
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
          ) : (
            // Pesan Kosong
            <div className="col-span-1 md:col-span-2 text-center py-20 text-gray-500">
              <p>Belum ada proyek di kategori ini. Segera hadir! 🚧</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
