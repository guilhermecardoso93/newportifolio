/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["user-images.githubusercontent.co"],
  },
}

module.exports = nextConfig
