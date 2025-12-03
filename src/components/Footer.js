// src/components/Footer.js
import React from "react";
import { FaWhatsapp, FaInstagram, FaTelegramPlane, FaTiktok, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Jika kamu ingin background kuning seperti di screenshotmu, ganti 'bg-black' jadi 'bg-yellow-500' dan 'text-white' jadi 'text-black'
    <footer className="bg-yellow-400 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* 👇 UBAH DI SINI: Tambahkan 'text-center md:text-left' */}
        {/* Ini bikin semua teks rata tengah di HP, tapi rata kiri di Laptop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-center md:text-left">
          {/* Kolom 1: Quote & Copyright */}
          <div className="lg:col-span-1">
            <p className="text-black italic mb-6 leading-relaxed">"Yuk jangan ragu lagi buat hubungi aku, laptop sama kopi udah siap nih ☕😆"</p>
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Rifqinawwal.
              <br />
              All Rights Reserved.
            </p>
          </div>

          {/* Kolom 2: Follow Me (Sosmed) */}
          <div>
            <h3 className="text-black font-bold text-lg mb-2">Follow Me</h3>
            {/* 👇 UBAH DI SINI: Tambahkan 'justify-center md:justify-start' */}
            {/* Ini bikin ikon sosmed ada di tengah pas di HP */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://wa.me/6287735030243" target="blank" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-200 hover:text-black transition duration-300">
                <FaWhatsapp size={20} />
              </a>
              <a href="https://www.instagram.com/rifqinawwal/" target="blank" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-200 hover:text-black transition duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="https://t.me/rifqinawwal" target="blank" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-200 hover:text-black transition duration-300">
                <FaTelegramPlane size={20} />
              </a>
              <a href="https://www.tiktok.com/@rfqnwl?_r=1&_t=ZS-91njaQ15igH" target="blank" className="bg-gray-800 p-3 rounded-full hover:bg-yellow-200 hover:text-black transition duration-300">
                <FaTiktok size={20} />
              </a>
            </div>
          </div>

          {/* Kolom 3: Quick Links */}
          <div>
            <h3 className="text-black font-bold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-black hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#tech" className="text-black hover:text-white transition">
                  Technology
                </a>
              </li>
              <li>
                <a href="#projects" className="text-black hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-black hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Services */}
          <div>
            <h3 className="text-black font-bold text-lg mb-2">Services</h3>
            <ul className="space-y-3">
              <li className="text-black">Web Development</li>
              <li className="text-black">UI/UX Design</li>
              <li className="text-black">Desain Grafis</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
