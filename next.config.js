/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["i.ibb.co"],
  },
  output: "standalone",
};

module.exports = nextConfig
