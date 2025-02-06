// NeonEffect.tsx (Client Component)
"use client";
import React from "react";

export default function NeonEffect() {
  return (
    <div className="fixed inset-0 grid grid-cols-12 grid-rows-12">
      {[...Array(144)].map((_, index) => (
        <div
          key={index}
          className={`w-full h-full border border-gray-700 opacity-25 relative`}
          style={{
            animation: `neonEffect ${Math.random() * 4 + 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`, // Random delay
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
          {/* Neon glow effect */}
          <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-r from-pink-500 to-yellow-500 animate-glow"></div>
        </div>
      ))}
    </div>
  );
}
