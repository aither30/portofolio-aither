"use-client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeFromBottom } from "../variants";

interface SkillsProps {
  scrolling: number;
}

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
    name: "Yii",
    image: "/yii.png",
    category: "Frameworks",
    percentage: 60,
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
  {
    name: "postgreSQL",
    image: "/postgree.png",
    category: "Database",
    percentage: 60,
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
    percentage: 20,
  },
  { name: "Git", image: "/git.png", category: "Tools", percentage: 85 },
  {
    name: "HTML",
    image: "/html.png",
    category: "Other",
    percentage: 95,
  },
  {
    name: "CSS",
    image: "/css.png",
    category: "Other",
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
];
const getSkillLevel = (percentage: number) => {
  if (percentage >= 96) return "Expert";
  if (percentage >= 86) return "Advanced";
  if (percentage >= 71) return "Upper-Intermediate";
  if (percentage >= 51) return "Intermediate";
  if (percentage >= 31) return "Pre-Intermediate";
  return "Beginner";
};

export default function Skills({ scrolling }: SkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const thresholdStart = 1300;
  const thresholdEnd = 2100;

  const isScrolledUp = scrolling <= thresholdStart;
  const isScrolledDown = scrolling > thresholdStart && scrolling < thresholdEnd;
  const isScrolledBeyond = scrolling >= thresholdEnd;

  return (
    <motion.section
      id="skills"
      className="py-6 text-white relative z-10 "
      initial="show"
      animate={isScrolledDown ? "show" : isScrolledBeyond ? "hidden" : "hidden"}
      exit={isScrolledUp ? "show" : "hidden"}
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        variants={fadeFromBottom}
      >
        My Skills
      </motion.h2>

      <motion.div className="flex justify-center gap-4 mb-6">
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-300 ${
              selectedCategory === category
                ? "bg-white text-black border-black"
                : "bg-black text-white border-white hover:bg-gray-800"
            }`}
            onClick={() => setSelectedCategory(category)}
            variants={fadeFromBottom}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-8 max-w-7xl mx-auto">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-black border border-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            variants={fadeFromBottom}
          >
            <motion.div className="flex items-center gap-3 p-3 rounded-lg bg-black shadow">
              {skill.image && (
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain rounded-md"
                />
              )}

              <div className="flex flex-col">
                <motion.h3 className="text-sm font-semibold text-gray-100">
                  {skill.name}
                </motion.h3>
                <motion.p className="text-xs text-gray-200 ">
                  {getSkillLevel(skill.percentage)}
                </motion.p>
              </div>
            </motion.div>

            <motion.div className="w-full bg-black h-2 rounded-full mt-2 overflow-hidden border border-white">
              <motion.div
                className="h-full bg-white border border-white"
                style={{ width: `${skill.percentage}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${skill.percentage}%` }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
