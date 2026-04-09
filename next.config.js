/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.digitaltechs.in',
        pathname: '/assets/**',
      },
    ],
  },
}

module.exports = nextConfig
