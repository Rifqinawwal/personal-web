// src/components/About.js
import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    school: "Universitas Muria Kudus",
    major: "Teknik Informatika",
    year: "2021 - 2025",
    description:
      "Di masa kuliah ini, aku mulai benar-benar mengenal dunia teknologi yang sebelumnya sama sekali belum aku sentuh. Mulai dari web development, dasar-dasar pemrograman, sampai UI/UX. Semakin aku belajar, semakin terasa kalau bidang ini cocok banget buat aku. Di sini juga aku mulai menemukan minatku di dunia web, khususnya frontend dan backend development.",
  },
  {
    id: 2,
    school: "SMK Raden Umar Said",
    major: "Animasi",
    year: "2018 - 2021",
    description:
      "Waktu SMK aku memilih jurusan animasi karena sejak SMP sudah suka menggambar. Dari sini aku belajar banyak tentang teknik menggambar, animasi 2D/3D, sampai jadi 3D Animator untuk beberapa proyek sekolah. Pengalaman di SMK ini bikin sisi kreativitasku berkembang pesat dan sampai sekarang masih sangat membantu dalam desain, UI/UX, dan cara melihat visual secara lebih mendalam.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Judul Section */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-2">Riwayat Pendidikan 🎓</h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-4 border-yellow-400 ml-4 md:ml-6 space-y-12">
          {educationData.map((item, index) => (
            <motion.div key={item.id} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ once: true }} className="relative pl-8 md:pl-12">
              {/* Titik/Dot pada garis timeline */}
              <span className="absolute -left-[10px] top-2 h-5 w-5 rounded-full bg-gray-900 border-4 border-yellow-400"></span>

              {/* Kartu Konten */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-yellow-400/50 transition-shadow duration-300 border border-gray-700">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-yellow-400">
                    {item.school} {item.major && <span className="text-white">- {item.major}</span>}
                  </h3>
                  <span className="text-sm font-semibold bg-yellow-200/20 text-yellow-400 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">{item.year}</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
