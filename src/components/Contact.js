// src/components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-black py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Hubungi Saya</h2>
        <p className="mb-8">Saya terbuka untuk diskusi lebih lanjut atau peluang kolaborasi.</p>
        <a href="mailto:rifqinwl23@gmail.com" className="bg-yellow-400 hover:bg-white text-white font-bold hover:text-yellow-400 py-3 px-6 rounded-lg shadow-lg">
          Kirim Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
