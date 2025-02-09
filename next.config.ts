import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false,
          },
        },
      ],
    });

    return config;
  },
  eslint: {
    dirs: ["src"],
    ignoreDuringBuilds: false, // Keep linting but don't fail on warnings
  },
};

export default nextConfig;
