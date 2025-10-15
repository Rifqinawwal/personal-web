// src/App.js
import React from "react";

// Sesuaikan path impor ini dengan lokasi komponen Anda
// Benar (default import)
import SplashCursor from "./components/SplashCursor";

// Impor komponen-komponen halaman Anda yang lain
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechLoop from "./components/TechLoop";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    // Bungkus semua elemen dengan satu elemen induk jika belum ada
    <>
      <SplashCursor /> {/* Letakkan komponen cursor di sini */}
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <TechLoop />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
