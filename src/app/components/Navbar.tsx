"use client";

import { motion } from "framer-motion";
import { fadeFromUp } from "../variants";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub, FaTiktok } from "react-icons/fa";

interface AboutProps {
  scrolling: number; // Pastikan 'scrolling' adalah number
}
export default function Navbar({ scrolling }: AboutProps) {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/appleaither?igsh=cGpiaHQ4aHdxZnVo",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/alpi-darul-hakim-331408308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    { name: "GitHub", icon: <FaGithub />, href: "https://github.com/aither30" },
    {
      name: "Tiktok",
      icon: <FaTiktok />,
      href: "https://www.tiktok.com/@osecret_?_t=ZS-8vkQENo3pho&_r=1",
    },
  ];

  return (
    <motion.nav
      className="bg-black py-4 mx-auto h-20 flex justify-between items-center z-10 relative"
      initial="hidden"
      animate={scrolling > 300 ? "hidden" : "show"}
      variants={fadeFromUp}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Logo Section */}
      <motion.div variants={fadeFromUp}>
        <h1 className="ml-16 text-lg font-bold text-white border rounded-lg py-2 px-4">
          Alpi Darul Hakim
        </h1>
      </motion.div>

      {/* Navigation Links */}
      <motion.div>
        <motion.ul className="flex space-x-6 ">
          <motion.div variants={fadeFromUp}>
            <Link
              href="#projects"
              className="hover:text-gray-400 text-white text-xl"
            >
              Projects
            </Link>
          </motion.div>
          <motion.div variants={fadeFromUp}>
            <Link
              href="#skills"
              className="hover:text-gray-400 text-white text-xl"
            >
              Skills
            </Link>
          </motion.div>
          <motion.div variants={fadeFromUp}>
            <Link
              href="#contact"
              className="hover:text-gray-400 text-white text-xl"
            >
              Contact
            </Link>
          </motion.div>
          <motion.div variants={fadeFromUp}>
            <Link
              href="#about"
              className="hover:text-gray-400 text-white text-xl"
            >
              About
            </Link>
          </motion.div>
        </motion.ul>
      </motion.div>

      {/* Social Links */}
      <motion.div className="flex gap-2 mr-16" variants={fadeFromUp}>
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            className="flex items-center gap-2 px-2 py-2 rounded-lg 
              border border-gray-100 shadow-md shadow-black bg-black
              text-gray-100 text-xl transition-all duration-300 ease-in-out 
              hover:shadow-none active:shadow-none active:translate-y-1"
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.nav>
  );
}
