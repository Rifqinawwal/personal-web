// src/components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-blue-950 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Hubungi Saya</h2>
        <p className="mb-8">Saya terbuka untuk diskusi lebih lanjut atau peluang kolaborasi.</p>
        <a href="mailto:emailanda@example.com" className="bg-blue-800 hover:bg-blue-950 text-white font-bold py-3 px-6 rounded-lg shadow-lg">
          Kirim Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
