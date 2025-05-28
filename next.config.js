/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you'll use
  },
  // Enable static optimization for better performance
  swcMinify: true,
}

module.exports = nextConfig 