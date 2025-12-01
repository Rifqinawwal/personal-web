// src/components/Hero.js
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      // 👇 PERUBAHAN DI SINI:
      // 1. 'justify-between' diganti 'justify-center' (biar konten ngumpul di tengah)
      // 2. 'gap-12 md:gap-24' ditambahkan (biar teks dan foto ga dempet)
      // 3. 'max-w-6xl' (supaya di layar lebar banget, kontennya ga terlalu lebar)
      className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-40 px-6 min-h-screen pt-24 md:pt-0 max-w-6xl"
    >
      {/* --- BAGIAN KIRI: TEKS & TOMBOL --- */}
      {/* Hapus 'max-w-xl' biar teksnya lebih fleksibel, atau biarkan jika ingin dibatasi */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left flex-1" // flex-1 agar mengambil ruang yang tersedia
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white leading-tight">
          Hey, aku Rifqi!!! <span className="inline-block animate-bounce">👋</span>
        </h1>

        <p className="text-xl md:text-xl font-bold text-yellow-400 mb-2"> Web Developer | UI/UX | Desain Grafis</p>

        <p className="text-lg text-gray-300 mb-8 leading-relaxed">Aku bikin website, desain UI/UX, dan hal-hal digital lain biar hidup makin aesthetic. Scroll aja ke bawah, siapa tahu jodoh—eh maksudnya, jodoh proyek 😄</p>

        <a href="#projects" className="inline-block bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-300 hover:shadow-yellow-400/30 transition-all transform hover:-translate-y-1">
          See My Projects
        </a>
      </motion.div>

      {/* --- BAGIAN KANAN: FOTO LINGKARAN --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative flex-1 flex justify-center" // flex-1 dan justify-center biar foto pas di tengah areanya
      >
        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-yellow-400/50 p-2 shadow-2xl shadow-yellow-400/20">
          <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
            <img
              src="/assets/aku.png" // Langsung arahkan ke folder public
              alt="Rifqi"
              className="w-full h-full object-cover"
              // 'center' = posisi horizontal (kiri-kanan) tetap di tengah.
              // '20%' = posisi vertikal (atas-bawah).
              // 0% itu paling atas, 50% itu tengah, 100% itu bawah.
              // Coba angka sekitar 15% sampai 30% biar pas.
              style={{ objectPosition: "center 20%" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
