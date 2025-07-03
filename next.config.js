/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Enable static optimization where possible
  output: 'standalone',
  // Configure runtime for API routes
  experimental: {
    serverActions: {},
  },
};

module.exports = nextConfig; 