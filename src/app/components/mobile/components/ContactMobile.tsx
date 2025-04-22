"use client";

import { MessageCircle, User, Globe, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "6282317578112";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      className="flex flex-col min-h-screen bg-black text-white px-4 py-8 relative z-10"
      id="contact"
    >
      <div className="text-center w-full max-w-md mx-auto">
        {/* Page Title */}
        <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
          <User size={28} /> Contact Me
        </h2>

        {/* Thank You Message */}
        <p className="text-base text-gray-300 mb-6 flex items-center justify-center gap-2">
          <Globe size={20} /> &quot;Thank you for visiting my portfolio!&quot;
        </p>

        {/* Contact Info */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <p className="flex items-center gap-2 text-gray-400">
            <Mail size={18} className="text-blue-400" />
            alpidarulhakim30@gmail.com
          </p>
          <p className="flex items-center gap-2 text-gray-400">
            <Phone size={18} className="text-green-400" />
            +62 823-1757-8112
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-6">
          If you have any questions, want to collaborate, or just say hello,
          feel free to send a message. I&apos;m always open to discussing web
          development, technology, or new project opportunities!
        </p>

        {/* Message Form */}
        <textarea
          placeholder="Write your message here..."
          className="w-full p-3 border border-gray-500 rounded-md focus:ring-2 focus:ring-gray-400 h-36 bg-black text-white text-sm"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        {/* Send Button */}
        <button
          onClick={handleWhatsAppRedirect}
          className="w-full mt-5 bg-white text-black py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-gray-300 transition"
        >
          <MessageCircle size={20} /> Send Message to WhatsApp
        </button>
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 mt-10">
        <p>
          © {new Date().getFullYear()} Alpi Darul Hakim | Built using Next.js
        </p>
      </footer>
    </section>
  );
}
