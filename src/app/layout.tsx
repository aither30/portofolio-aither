import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alpi's Portfolio",
  description: "Full-Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative h-screen bg-black text-white overflow-x-hidden w-screen">
        {/* Background Grid Neon */}
        <div className="fixed inset-0 grid grid-cols-12 grid-rows-12">
          {[...Array(144)].map((_, index) => (
            <div
              key={index}
              className="w-full h-full bg-gradient-to-t from-black to-transparent border border-gray-600 opacity-25"
            ></div>
          ))}
        </div>

        {children}
      </body>
    </html>
  );
}
