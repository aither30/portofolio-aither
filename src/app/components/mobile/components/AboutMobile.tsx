"use client";

// import Image from "next/image";

export default function AboutMobile() {
  return (
    <section id="about" className="relative  w-full text-white overflow-hidden">
      {/* Background Foto */}

      <div className="px-6 py-6 flex flex-col justify-center items-center text-center">
        {/* Judul */}
        <h2 className="text-2xl font-bold mb-2">About Me</h2>

        {/* Deskripsi */}
        <div className="bg-black/30 backdrop-blur-md px-5 pb-5 rounded-xl text-sm text-gray-100 leading-relaxed">
          Hi, I&apos;m Alpi Darul Hakim, a Full-Stack Developer and currently a
          student at the University of Siliwangi. I specialize in building
          modern web applications using PHP and Laravel for the backend, while
          leveraging Tailwind CSS and Alpine.js to create dynamic and responsive
          user interfaces. I also have experience with Next.js, JavaScript, and
          React for frontend development, ensuring fast and scalable
          applications.
        </div>
      </div>
    </section>
  );
}
