import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import CircularGallery from "./CircularGallery"; // 1. Import komponen baru

// --- DATA PROYEK WEB & UI/UX ---
const projectData = [
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

// --- KOMPONEN KARTU (Untuk Web & UI/UX) ---
const ProjectCard = ({ project }) => {
  // ... (Kode ProjectCard biarkan sama seperti sebelumnya) ...
  // Agar tidak kepanjangan, copy paste kode ProjectCard yang lama ke sini
  const [currentImage, setCurrentImage] = useState(0);
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
      <div className="relative w-full h-64 bg-gray-900 group">
        <img src={project.images[currentImage]} alt={project.title} className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 flex justify-between items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button onClick={prevImage} className="bg-black/50 p-2 rounded-full text-white hover:bg-yellow-400 hover:text-black">
            <FaChevronLeft />
          </button>
          <button onClick={nextImage} className="bg-black/50 p-2 rounded-full text-white hover:bg-yellow-400 hover:text-black">
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-6 line-clamp-3">{project.description}</p>
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

  // Filter untuk Web & UI/UX
  const filteredProjects = projectData.filter((project) => project.category === activeTab);

  // 2. Data khusus untuk Circular Gallery (Desain Grafis)
  // Format: { image: "path/gambar", text: "Judul" }
  const designGalleryData = [
    { image: "/desain/1.png" },
    { image: "/desain/2.png" },
    { image: "/desain/3.png" },
    { image: "/desain/4.png" },
    { image: "/desain/5.png" },
    { image: "/desain/6.png" },
    // Tambahkan gambar desain kamu di sini
  ];

  return (
    <section id="projects" className="py-24 bg-black min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Judul */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">My Projects ✍️</h2>
          <p className="text-gray-400 mt-4">Pilih kategori untuk melihat karya saya</p>
        </div>

        {/* Tab Navigasi */}
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

        {/* --- LOGIKA TAMPILAN --- */}
        <div className="min-h-[500px]">
          {activeTab === "design" ? (
            // 3. TAMPILAN DESAIN GRAFIS (Circular Gallery)
            <div style={{ height: "600px", position: "relative" }} className="rounded-2xl overflow-hidden border border-gray-800 bg-gray-900">
              <CircularGallery
                items={designGalleryData} // Masukkan data gambar desain
                bend={3}
                textColor="#ffffff"
                borderRadius={0.05}
              />
            </div>
          ) : (
            // 4. TAMPILAN WEB & UI/UX (Grid Kartu Biasa)
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
              ) : (
                <div className="col-span-1 md:col-span-2 text-center py-20 text-gray-500">
                  <p>Belum ada proyek di kategori ini. 🚧</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
