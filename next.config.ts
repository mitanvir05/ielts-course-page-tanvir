import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.ap-southeast-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.10minuteschool.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org', 
      },
    ],
  },
};

export default nextConfig;