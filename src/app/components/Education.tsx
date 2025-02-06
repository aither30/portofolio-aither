"use client";

import { motion } from "framer-motion";
import { FaSchool } from "react-icons/fa"; // Import icon sekolah

export default function Education() {
  return (
    <motion.div className="flex flex-col items-center gap-6 relative">
      {/* Judul */}
      <motion.div>
        <motion.h2 className="text-4xl font-bold text-white relative">
          Education
          <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
        </motion.h2>
      </motion.div>

      {/* Container Sekolah */}
      <motion.div className="flex flex-col justify-center gap-6 items-center mb-12 w-full p-8 rounded-lg shadow-xl z-10">
        {/* Kolom Kiri */}
        <motion.div className="flex gap-96 mr-64">
          <motion.div className="group bg-gray-800 p-4 rounded-lg shadow-lg z-10 flex items-center gap-3">
            <FaSchool className="text-blue-400 text-2xl group-hover:scale-110 transition duration-300" />
            <motion.p className="text-white text-lg font-semibold transition duration-300 group-hover:text-blue-400">
              Sekolah 1
            </motion.p>
          </motion.div>
          <motion.div className="group bg-gray-800 p-4 rounded-lg shadow-lg z-10 flex items-center gap-3">
            <FaSchool className="text-blue-400 text-2xl group-hover:scale-110 transition duration-300" />
            <motion.p className="text-white text-lg font-semibold transition duration-300 group-hover:text-blue-400">
              Sekolah 3
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Garis Tengah */}
        <motion.div
          className="w-4/5 border-4 border-white mx-6 rounded-full transition duration-500 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400"
          id="line"
        ></motion.div>

        {/* Kolom Kanan */}
        <motion.div className="flex gap-96 ml-72">
          <motion.div className="group bg-gray-800 p-4 rounded-lg shadow-lg z-10 flex items-center gap-3">
            <FaSchool className="text-blue-400 text-2xl group-hover:scale-110 transition duration-300" />
            <motion.p className="text-white text-lg font-semibold transition duration-300 group-hover:text-blue-400">
              Sekolah 2
            </motion.p>
          </motion.div>
          <motion.div className="group bg-gray-800 p-4 rounded-lg shadow-lg z-10 flex items-center gap-3">
            <FaSchool className="text-blue-400 text-2xl group-hover:scale-110 transition duration-300" />
            <motion.p className="text-white text-lg font-semibold transition duration-300 group-hover:text-blue-400">
              Sekolah 4
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
