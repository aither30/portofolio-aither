"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  "All",
  "Programming Languages",
  "Frameworks",
  "Database",
  "Tools",
  "Other",
];

const skills = [
  {
    name: "PHP",
    image: "/php.png",
    category: "Programming Languages",
    percentage: 80,
  },
  {
    name: "Laravel",
    image: "/laravel.png",
    category: "Frameworks",
    percentage: 80,
  },
  {
    name: "Tailwind CSS",
    image: "/tailwindcss.png",
    category: "Frameworks",
    percentage: 90,
  },
  {
    name: "TypeScript",
    image: "/typescript.png",
    category: "Programming Languages",
    percentage: 65,
  },
  {
    name: "JavaScript",
    image: "/js.png",
    category: "Programming Languages",
    percentage: 65,
  },
  {
    name: "Alpine.js",
    image: "/alpinejs.png",
    category: "Frameworks",
    percentage: 50,
  },
  {
    name: "SQLite",
    image: "/sqlite.png",
    category: "Database",
    percentage: 80,
  },
  { name: "mysql", image: "/mysql.png", category: "Database", percentage: 80 },
  {
    name: "Next.js",
    image: "/next.jpeg",
    category: "Frameworks",
    percentage: 80,
  },
  {
    name: "React",
    image: "/react.png",
    category: "Frameworks",
    percentage: 60,
  },
  {
    name: "Node.js",
    image: "/node.png",
    category: "Frameworks",
    percentage: 90,
  },
  {
    name: "Python",
    image: "/python.png",
    category: "Programming Languages",
    percentage: 40,
  },
  { name: "Git", image: "/git.png", category: "Tools", percentage: 85 },
  {
    name: "HTML",
    image: "/html.png",
    category: "Programming Languages",
    percentage: 95,
  },
  {
    name: "CSS",
    image: "/css.png",
    category: "Programming Languages",
    percentage: 85,
  },
  { name: "npm", image: "/npm.png", category: "Tools", percentage: 75 },
  { name: "nmap", image: "/nmap.png", category: "Tools", percentage: 60 },
  {
    name: "Visual Studio Code",
    image: "/vscode.png",
    category: "Tools",
    percentage: 90,
  },
  { name: "GitHub", image: "/github.png", category: "Tools", percentage: 80 },
];

const getSkillLevel = (percentage: number) => {
  if (percentage >= 96) return "Expert";
  if (percentage >= 86) return "Advanced";
  if (percentage >= 71) return "Upper-Intermediate";
  if (percentage >= 51) return "Intermediate";
  if (percentage >= 31) return "Pre-Intermediate";
  return "Beginner";
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section className="py-6 text-white px-4 max-w-md mx-auto z-10 relative">
      <h2 className="text-2xl font-bold text-center mb-6">My Skills</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
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

      {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-black border border-white p-3 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-2">
              <Image
                src={skill.image}
                alt={skill.name}
                width={36}
                height={36}
                className="w-9 h-9 object-contain rounded-md"
              />
              <div>
                <h3 className="text-sm font-semibold">{skill.name}</h3>
                <p className="text-xs text-gray-300">
                  {getSkillLevel(skill.percentage)}
                </p>
              </div>
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-white"
                style={{ width: `${skill.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
