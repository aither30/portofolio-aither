"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeFromLeft, fadeFromRight } from "../variants";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTiktok,
} from "react-icons/fa";

const words = [
  "As a Fullstack Developer, I build web applications that prioritize user experience, performance, and scalability. I'm passionate about designing intuitive and efficient solutions, handling both frontend and backend development. Check out my portfolio to see how I bring these ideas to life!",
];

interface AboutProps {
  scrolling: number;
}

export default function Hero({ scrolling }: AboutProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 20;
  const deletingSpeed = 10;

  useEffect(() => {
    const currentWord = words[index];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText((prev) => currentWord.slice(0, prev.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000); // Jeda sebelum menghapus
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  const socialLinks = [
    { name: "Facebook", icon: <FaFacebook />, href: "#" },
    { name: "Instagram", icon: <FaInstagram />, href: "#" },
    { name: "LinkedIn", icon: <FaLinkedin />, href: "#" },
    { name: "GitHub", icon: <FaGithub />, href: "#" },
    { name: "Tiktok", icon: <FaTiktok />, href: "#" },
  ];

  return (
    <motion.section
      className="relative py-20  text-white flex items-center justify-between px-16 overflow-hidden"
      initial="hidden"
      animate={scrolling > 350 ? "hidden" : "show"}
      exit="hidden"
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Konten Kiri */}
      <motion.div
        className="w-2/3 z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] ml-6"
        variants={fadeFromLeft}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h1
          className="text-6xl font-bold drop-shadow-md"
          variants={fadeFromLeft}
        >
          Hi, I&apos;m Alpi Darul Hakim
        </motion.h1>
        <motion.div variants={fadeFromLeft} className="flex items-center">
          <motion.p
            className=" mt-4 px-2 py-2 rounded-lg 
                 border border-gray-800 shadow-md shadow-white bg-white
                 text-gray-800 text-xl font-semibold transition-all duration-300 ease-in-out 
                hover:shadow-none 
                 active:shadow-none active:translate-y-1 inline-block "
          >
            Full-Stack Developer
          </motion.p>
          <motion.p className="text-white text-xl font-semibold mt-4 px-2 py-2">
            |
          </motion.p>
          <motion.p
            className=" mt-4 px-2 py-2 rounded-lg 
                 border border-gray-800 shadow-md shadow-white bg-white
                 text-gray-800 text-xl font-semibold transition-all duration-300 ease-in-out 
                hover:shadow-none 
                 active:shadow-none active:translate-y-1 inline-block "
          >
            Networking
          </motion.p>
        </motion.div>
        <motion.p
          className="text-lg text-gray-300 leading-relaxed w-4/5 py-6 "
          variants={fadeFromLeft}
        >
          {text}
        </motion.p>
        {/* Social Links */}
        <motion.div
          className="flex justify-evenly w-2/3"
          variants={fadeFromLeft}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="flex items-center gap-2 px-2 py-2 rounded-lg 
                 border border-gray-800 shadow-md shadow-white bg-white
                 text-gray-800 text-xl transition-all duration-300 ease-in-out 
                hover:shadow-none 
                 active:shadow-none active:translate-y-1"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Konten Kanan - Gambar Profil */}
      <motion.div
        className=" flex justify-center mr-12 relative z-10 "
        variants={fadeFromRight}
      >
        <div className="absolute w-full h-full bg-white opacity-25 rounded-full blur-3xl "></div>
        <motion.div className="relative z-10 " variants={fadeFromRight}>
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={375}
            height={375}
            className="w-full h-full object-cover border-8 p-2 border-white rounded-full drop-shadow-sm "
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
