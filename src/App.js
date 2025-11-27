import React from "react";
import LightningBackground from "./components/LightningBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechLoop from "./components/TechLoop";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      <LightningBackground />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
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
