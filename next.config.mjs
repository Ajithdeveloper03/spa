/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/foot-pulse',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
};

export default nextConfig;
