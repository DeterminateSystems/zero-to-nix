const withContentlayer = require("next-contentlayer").withContentlayer;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};

module.exports = withContentlayer(nextConfig);
