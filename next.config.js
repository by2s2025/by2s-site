/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you need
  },
  // Enable static optimization where possible
  output: 'standalone',
  // Configure runtime for API routes
  experimental: {
    serverActions: {},
  },
};

module.exports = nextConfig; 