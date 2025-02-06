"use-client";

import { motion } from "framer-motion";

interface AboutProps {
  scrolling: number;  // Pastikan 'scrolling' adalah number
}
export default function Contact({scrolling}: AboutProps) {
  return (
    <motion.section id="contact" className=" text-center py-16" initial="hidden"
    animate={scrolling > 100 ? "show" : "hidden"}
    transition={{ staggerChildren: 0.2 }} >
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p>Email: alpidarulhakim30@gmail.com</p>
      <p>Phone: +62 823-1757-8112</p>
    </motion.section>
  );
}
