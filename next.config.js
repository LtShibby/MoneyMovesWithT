/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  // Enable static optimization for better performance
  swcMinify: true,
}

module.exports = nextConfig 