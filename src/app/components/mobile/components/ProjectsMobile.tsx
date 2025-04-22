"use client";

import { useState } from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

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
    category: "Fullstack",
  },
  {
    title: "Steganography",
    image: "/steganography.png",
    link: "#",
    category: "Networking",
  },
  {
    title: "Digital Signature",
    image: "/digital-signature.png",
    link: "#",
    category: "Networking",
  },
];

export default function ProjectsMobile() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="py-3 text-white px-4 max-w-md mx-auto z-10 relative">
      <h2 className="text-2xl font-bold text-center mb-6">My Projects</h2>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
              selectedCategory === category
                ? "bg-white text-black border-black"
                : "bg-black text-white border-white hover:bg-white hover:text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="space-y-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg overflow-hidden shadow-md"
          >
            <div className="w-full h-48 relative">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold">{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600"
              >
                <FiExternalLink size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
