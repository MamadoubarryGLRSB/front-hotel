import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    REACT_BASE_API_URL_PRISMA: process.env.BASE_API_URL_PRISMA,
  }
};

export default nextConfig;
