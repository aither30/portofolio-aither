import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.cache = false; // Menonaktifkan caching Webpack untuk menghindari masalah memori
    return config;
  },
  images: {
    domains: ["cdn.jsdelivr.net"],
  },
};

export default nextConfig;
