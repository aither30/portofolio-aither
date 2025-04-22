import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

export default function HeroMobile() {
  return (
    <div className="w-full flex flex-col items-center justify-center text-white relative">
      {/* Background Foto Full */}
      <div className="relative w-full">
        <Image
          src="/profile.jpg"
          width={1000}
          height={1000}
          alt="Alpi Darul Hakim"
          className="w-full h-96 object-cover rounded-b-2xl shadow-md"
        />

        {/* Overlay Nama, Role, dan Sosmed */}
        <div className="absolute bottom-0 left-0 w-full text-center px-4 py-6 bg-gradient-to-t from-black to-transparent z-10 rounded-b-2xl">
          <h1 className="text-2xl font-bold text-white drop-shadow-sm">
            Hi, I&apos;m Alpi Darul Hakim
          </h1>
          <p className="text-gray-300 text-sm mt-1">
            I build scalable web applications
          </p>

          {/* Sosial Media */}
          <div className="flex justify-center gap-8 mt-4 mb-4 text-xl">
            <a
              href="https://github.com/aither30"
              className="text-gray-400 hover:text-white transition transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/appleaither?igsh=cGpiaHQ4aHdxZnVo"
              className="text-pink-400 hover:text-pink-500 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/alpi-darul-hakim-331408308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-blue-400 hover:text-blue-600 transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.tiktok.com/@osecret_?_t=ZS-8vkQENo3pho&_r=1"
              className="text-white hover:text-white transition transform hover:scale-110"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Deskripsi */}
      <div className="w-full px-4 mt-2">
        <div className=" p-5 text-sm font-semibold text-gray-300  leading-relaxed text-center">
          As a Fullstack Developer, I build web applications that prioritize
          user experience, performance, and scalability. I&apos;m passionate
          about designing intuitive and efficient solutions, handling both
          frontend and backend development.
        </div>
      </div>
    </div>
  );
}
