import React from "react";
import LightningBackground from "./components/LightningBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechLoop from "./components/TechLoop";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen overflow-hidden">
      <LightningBackground />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <TechLoop />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
