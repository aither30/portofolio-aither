import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeFromBottom } from "../variants";

interface SkillsProps {
  scrolling: number;
}

const categories = [
  "All",
  "Tools",
  "Programming Languages",
  "Frameworks",
  "Other",
];

const skills = [
  {
    name: "React",
    image: "/react.png",
    category: "Frameworks",
    level: "Advanced",
    percentage: 90,
  },
  {
    name: "Next.js",
    image: "/nextjs.png",
    category: "Frameworks",
    level: "Intermediate",
    percentage: 80,
  },
  {
    name: "Node.js",
    image: "/node.png",
    category: "Frameworks",
    level: "Intermediate",
    percentage: 75,
  },
  {
    name: "JavaScript",
    image: "/js.png",
    category: "Programming Languages",
    level: "Advanced",
    percentage: 95,
  },
  {
    name: "Python",
    image: "/python.png",
    category: "Programming Languages",
    level: "Intermediate",
    percentage: 70,
  },
  {
    name: "PHP",
    image: "/php.png",
    category: "Programming Languages",
    level: "Intermediate",
    percentage: 75,
  },
  {
    name: "Laravel",
    image: "/laravel.png",
    category: "Frameworks",
    level: "Intermediate",
    percentage: 80,
  },
  {
    name: "Git",
    image: "/git.png",
    category: "Tools",
    level: "Advanced",
    percentage: 85,
  },
  {
    name: "Tailwind CSS",
    image: "/tailwindcss.png",
    category: "Frameworks",
    level: "Advanced",
    percentage: 90,
  },
  {
    name: "Alpine.js",
    image: "/alpinejs.png",
    category: "Frameworks",
    level: "Intermediate",
    percentage: 70,
  },
  {
    name: "HTML",
    image: "/html.png",
    category: "Programming Languages",
    level: "Advanced",
    percentage: 90,
  },
  {
    name: "CSS",
    image: "/css.png",
    category: "Programming Languages",
    level: "Advanced",
    percentage: 85,
  },
  {
    name: "TypeScript",
    image: "/typescript.png",
    category: "Programming Languages",
    level: "Intermediate",
    percentage: 80,
  },
  {
    name: "npm",
    image: "/npm.png",
    category: "Tools",
    level: "Intermediate",
    percentage: 75,
  },
  {
    name: "nmap",
    image: "/nmap.png",
    category: "Tools",
    level: "Intermediate",
    percentage: 70,
  },
];

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
      className="py-6 text-white relative z-10 bg-black"
      initial="show"
      animate={isScrolledDown ? "show" : isScrolledBeyond ? "hidden" : "hidden"}
      exit={isScrolledUp ? "show" : "hidden"}
      transition={{ staggerChildren: 0.3 }}
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

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-8 max-w-7xl mx-auto"
        initial="hidden"
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            variants={fadeFromBottom}
          >
            <motion.div className="w-16 h-16 flex justify-center items-center rounded-lg">
              {skill.image ? (
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain rounded-lg"
                />
              ) : null}
            </motion.div>
            <motion.h3 className="text-center mt-2 text-sm font-semibold text-black">
              {skill.name}
            </motion.h3>
            <motion.p className="text-xs text-gray-900">{skill.level}</motion.p>
            <motion.div className="w-full bg-white h-2 rounded-full mt-2 overflow-hidden">
              <motion.div
                className="h-full bg-black"
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
