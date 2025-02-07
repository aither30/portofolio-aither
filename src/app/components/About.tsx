"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeFromBottom,
  fadeFromLeft,
  fadeFromRight,
  fadeFromUp,
} from "../variants";

interface AboutProps {
  scrolling: number;
}

export default function About({ scrolling }: AboutProps) {
  const thresholdStart = 175;
  const thresholdEnd = 900;

  const isScrolledUp = scrolling <= thresholdStart;
  const isScrolledDown = scrolling > thresholdStart && scrolling < thresholdEnd;
  const isScrolledBeyond = scrolling >= thresholdEnd;

  return (
    <motion.section
      id="about"
      className="relative py-24 text-white flex items-center justify-between px-16 overflow-hidden"
      initial="show"
      animate={isScrolledDown ? "show" : isScrolledBeyond ? "hidden" : "hidden"} // Berbalik animasi
      exit={isScrolledUp ? "show" : "hidden"} // Berbalik animasi ketika scroll ke atas
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.div
        className="flex justify-center items-center gap-6"
        variants={fadeFromBottom}
      >
        <motion.div
          className="flex justify-center mr-12 relative z-10"
          variants={fadeFromBottom}
        >
          <motion.div className="absolute w-full h-full bg-white rounded-full opacity-10 blur-3xl"></motion.div>
          <motion.div className="relative z-10" variants={fadeFromLeft}>
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={375}
              height={375}
              className="w-full h-full object-cover border-8 p-2 border-white rounded-full drop-shadow-sm"
            />
          </motion.div>
        </motion.div>
        <motion.div className="w-2/3 mr-10 mb-4">
          <motion.h2
            className="text-4xl text-center mb-4 font-bold"
            variants={fadeFromUp}
          >
            About Me
          </motion.h2>
          <motion.p className="text-lg" variants={fadeFromRight}>
            Hi, I&apos;m Alpi Darul Hakim, a Full-Stack Developer and currently
            a student at the University of Siliwangi. I specialize in building
            modern web applications using PHP and Laravel for the backend, while
            leveraging Tailwind CSS and Alpine.js to create dynamic and
            responsive user interfaces. I also have experience with Next.js,
            JavaScript, and React for frontend development, ensuring fast and
            scalable applications. On the database side, I work with MySQL to
            manage structured data efficiently, and I use Python for automation
            and backend scripting. I&apos;m passionate about writing clean,
            maintainable code and developing scalable solutions that enhance
            user experience and performance. Always eager to learn and stay
            updated with the latest web technologies, I continuously explore new
            ways to improve my development skills. Feel free to explore my
            portfolio and see how I bring my ideas to life!
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
