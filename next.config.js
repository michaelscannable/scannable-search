/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.scannable.io',
        port: '',
        pathname: '/**/*',
      },
    ],
  },
};

module.exports = nextConfig;
