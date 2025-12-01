import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaLinkedin, FaDownload } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Container Utama dengan Grid 2 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* --- KOLOM KIRI: Informasi Kontak --- */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400">Let's Connect with me! 😎🤝</h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">Yuk mari ngobrol denganku 🙌</p>

            <div className="space-y-6">
              {/* Item Email */}
              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 p-3 rounded-full text-yellow-400">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:rifqinwl23@gmail.com" className="text-lg font-semibold hover:text-yellow-400 transition">
                    rifqinwl23@gmail.com
                  </a>
                </div>
              </div>

              {/* Item WhatsApp */}
              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 p-3 rounded-full text-yellow-400">
                  <FaWhatsapp size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <a href="https://wa.me/6287735030243" target="_blank" rel="noreferrer" className="text-lg font-semibold hover:text-yellow-400 transition">
                    +62 877-3503-0243
                  </a>
                </div>
              </div>

              {/* Item Lokasi */}
              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 p-3 rounded-full text-yellow-400">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <a href="https://maps.app.goo.gl/gXKwJdCJqRVrKW4YA" target="_blank" rel="noreferrer" className="text-lg font-semibold hover:text-yellow-400 transition">
                    Kudus, Jawa Tengah, Indonesia
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- KOLOM KANAN: QR Code & Download CV --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center text-center bg-gray-800/50 p-10 rounded-3xl border border-gray-700 shadow-2xl"
          >
            {/* Gambar QR Code */}
            <div className="bg-white p-4 rounded-xl mb-6">
              {/* Ganti src dengan gambar QR Code asli kamu */}
              <img src="/assets/qr-code.jpg" alt="QR Code LinkedIn" className="w-40 h-40" />
            </div>

            <p className="text-gray-300 mb-4 flex flex-col md:flex-row items-center justify-center gap-2 text-center">
              Scan atau klik buat connect di
              <a
                href="https://www.linkedin.com/in/rifqinawwal" // Pastikan link LinkedIn kamu benar
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-400 flex mt-0 items-center gap-1 hover:text-blue-300 transition"
              >
                LinkedIn! <FaLinkedin size={20} />
              </a>
            </p>

            {/* Tombol Download CV */}
            <a
              href="/assets/my-cv.pdf" // Pastikan file CV ada di folder public/assets
              download
              className="flex items-center gap-2 bg-yellow-400 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg shadow-yellow-400/20"
            >
              <FaDownload /> Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
