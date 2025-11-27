// src/components/Footer.js
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-yellow-400 py-4">
      <div className="container mx-auto text-center text-gray-500 font-['Akaya_Kanadaka']">
        <p>&copy; {currentYear} Rifqinawwal</p>
      </div>
    </footer>
  );
};

export default Footer;
