import type { NextConfig } from "next";

const BASE_PATH = '/sk-dev-studio';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: BASE_PATH,
  images: {
    unoptimized: true,
  },
  distDir: 'build',
};

export default nextConfig;


// --cname www.mywebsite.com