"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaTiktok, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative shadow-md rounded-lg bg-black">
      <div className="flex items-center justify-between px-4 py-3">
        <h1 className="text-lg font-bold text-gray-100">Alpi Darul Hakim</h1>
        <button
          className="text-gray-100 md:hidden font-bold"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="px-4 pb-4 md:hidden animate-fade-in-down">
          <ul className="mb-2 space-y-2">
            <li className="text-gray-100 hover:text-gray-400">About</li>
            <li className="text-gray-100 hover:text-gray-400">Skill</li>
            <li className="text-gray-100 hover:text-gray-400">Project</li>
          </ul>
          <ul className="space-y-2 border-t border-gray-700 pt-3">
            <li className="flex items-center gap-2 text-gray-100 hover:text-pink-500">
              <Link
                href="https://www.linkedin.com/in/alpi-darul-hakim-331408308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="flex items-center"
              >
                <FaLinkedin className="mr-2" />
                Linkedin
              </Link>
            </li>
            <li className="flex items-center gap-2 text-gray-100 hover:text-pink-500">
              <Link
                href="https://www.tiktok.com/@osecret_?_t=ZS-8vkQENo3pho&_r=1"
                className="flex items-center"
              >
                <FaTiktok className="mr-2" /> TikTok
              </Link>
            </li>
            <li className="flex items-center gap-2 text-gray-100 hover:text-rose-400">
              <Link
                href="https://www.instagram.com/appleaither?igsh=cGpiaHQ4aHdxZnVo"
                className="flex items-center"
              >
                <FaInstagram className="mr-2" /> Instagram
              </Link>
            </li>
            <li className="flex items-center gap-2 text-gray-100 hover:text-gray-300">
              <Link
                href="https://github.com/aither30"
                className="flex items-center"
              >
                <FaGithub className="mr-2" />
                GitHub
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
