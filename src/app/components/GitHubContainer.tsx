"use client";

import { motion } from "framer-motion";
import { fadeFromBottom } from "../variants";
import GitHubCalenderUi from "./GitHubCalendarUi";

interface GitHubContainerProps {
  scrolling: number;
}

export default function GitHubContainer({ scrolling }: GitHubContainerProps) {
  const thresholdStart = 2000;
  const thresholdEnd = 2800;

  const isScrolledUp = scrolling <= thresholdStart;
  const isScrolledDown = scrolling > thresholdStart && scrolling < thresholdEnd;
  const isScrolledBeyond = scrolling >= thresholdEnd;

  return (
    <motion.section
      id="GitHub"
      className="relative py-6 text-white flex items-center justify-center px-16 overflow-hidden"
      initial="show"
      animate={isScrolledDown ? "show" : isScrolledBeyond ? "hidden" : "hidden"} // Berbalik animasi
      exit={isScrolledUp ? "show" : "hidden"} // Berbalik animasi ketika scroll ke atas
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.div
        className="flex justify-center items-center w-full"
        variants={fadeFromBottom}
      >
        <GitHubCalenderUi />
      </motion.div>
    </motion.section>
  );
}
