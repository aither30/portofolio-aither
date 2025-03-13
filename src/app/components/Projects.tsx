"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { fadeFromBottom } from "../variants";

interface AboutProps {
  scrolling: number;
}

const categories = ["All", "Fullstack", "Networking"];

const projects = [
  {
    title: "MyPlanEt - Event Planning AI",
    image: "/myplanet.png",
    link: "#",
    category: "Fullstack",
  },
  {
    title: "SAWARGA - Wisata Desa Wakap",
    image: "/sawarga.png",
    link: "#",
    category: "fuullstack",
  },
  {
    title: "Steganography",
    image: "/steganography.png",
    link: "#",
    category: "Fullstack",
  },
  {
    title: "Digital Signature",
    image: "/digital-signature.png",
    link: "#",
    category: "Fullstack",
  },
];

export default function Projects({ scrolling }: AboutProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const thresholdStart = 700;
  const thresholdEnd = 1400;

  const isScrolledUp = scrolling <= thresholdStart;
  const isScrolledDown = scrolling > thresholdStart && scrolling < thresholdEnd;
  const isScrolledBeyond = scrolling >= thresholdEnd;

  return (
    <motion.section
      id="projects"
      className="py-6 text-white px-12 z-10"
      initial="show"
      animate={isScrolledDown ? "show" : isScrolledBeyond ? "hidden" : "hidden"} // Berbalik animasi
      exit={isScrolledUp ? "show" : "hidden"} // Berbalik animasi ketika scroll ke atas
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.div className="px-12">
        <motion.h2
          className="text-3xl font-bold text-center"
          variants={fadeFromBottom}
        >
          My Projects
        </motion.h2>
      </motion.div>

      {/* Kategori Filter */}
      <motion.div className="flex justify-center gap-4 relative z-10 py-6">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-white text-black border-2 border-black"
                : "bg-black text-white border-2 border-white hover:bg-gray-800"
            }`}
            variants={fadeFromBottom}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Menampilkan proyek */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 px-8 z-10">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-white text-black rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl group h-64 z-10"
            variants={fadeFromBottom}
          >
            {/* Gambar */}
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Overlay dengan teks & ikon */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-4">
              {/* Ikon Buka Tab */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full opacity-80 hover:opacity-100 transition-opacity duration-300 hover:scale-110 text-sm"
              >
                <FiExternalLink className="text-black text-xl" />
              </a>

              {/* Teks */}
              <h3 className="text-xl font-bold text-white mt-4 text-center">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
