"use client";

import { motion } from "framer-motion";
import { MessageCircle, User, Globe, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { fadeFromBottom } from "../variants";

interface AboutProps {
  scrolling: number;
}

export default function Contact({ scrolling }: AboutProps) {
  const thresholdStart = 2300;
  const thresholdEnd = 3500;

  const isScrolledUp = scrolling <= thresholdStart;
  const isScrolledDown = scrolling > thresholdStart && scrolling < thresholdEnd;
  const isScrolledBeyond = scrolling >= thresholdEnd;

  const [message, setMessage] = useState("");

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "6282317578112";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.section
      className="flex flex-col min-h-screen bg-black text-white"
      id="contact"
      initial="show"
      animate={isScrolledDown ? "show" : isScrolledBeyond ? "hidden" : "hidden"}
      exit={isScrolledUp ? "show" : "hidden"}
      transition={{ staggerChildren: 0.2 }}
      variants={fadeFromBottom}
    >
      {/* Contact Section */}
      <motion.section
        className="text-center py-6 px-8 w-screen-5xl max-w-5xl mx-auto bg-black text-white rounded-xl z-10 relative"
        variants={fadeFromBottom}
      >
        {/* Page Title */}
        <motion.h2
          className="text-4xl font-extrabold mb-6 flex items-center justify-center gap-3"
          variants={fadeFromBottom}
        >
          <User size={32} /> Contact Me
        </motion.h2>

        {/* Thank You Message */}
        <p className="text-lg text-gray-300 mb-6 flex items-center justify-center gap-2">
          <Globe size={24} /> &quot;Thank you for visiting my portfolio!&quot;
        </p>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-4 mb-8">
          <p className="flex items-center gap-2 text-gray-400">
            <Mail size={20} className="text-blue-400" />{" "}
            alpidarulhakim30@gmail.com
          </p>
          <p className="flex items-center gap-2 text-gray-400">
            <Phone size={20} className="text-green-400" /> +62 823-1757-8112
          </p>
        </div>

        {/* Contact Page Description */}
        <p className="text-gray-400 leading-relaxed mb-6">
          If you have any questions, want to collaborate, or just say hello,
          feel free to send a message. I&apos;m always open to discussing web
          development, technology, or new project opportunities!
        </p>

        {/* Message Form */}
        <textarea
          placeholder="Write your message here..."
          className="w-full p-4 border border-gray-500 rounded-md focus:ring-2 focus:ring-gray-400 h-40 bg-black text-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        {/* Send Button */}
        <button
          onClick={handleWhatsAppRedirect}
          className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-md hover:bg-gray-300 transition mt-6 w-full font-medium"
        >
          <MessageCircle size={22} /> Send Message to WhatsApp
        </button>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        <p>
          © {new Date().getFullYear()} Alpi Darul Hakim | Built using Next.js
        </p>
      </footer>
    </motion.section>
  );
}
