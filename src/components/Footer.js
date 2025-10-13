// src/components/Footer.js
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto text-center text-gray-500">
        <p>&copy; {currentYear} Nama Anda. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
