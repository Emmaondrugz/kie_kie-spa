import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['172.20.10.7'],

  // Image configuration
  images: {
    qualities: [100, 50, 60, 75],
  },
};

export default nextConfig;