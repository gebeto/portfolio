import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: ".",
  basePath: "/out",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
