/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'northstarhomes.in',
        pathname: '/assets/images/**',
      },
    ],
  },
};

export default nextConfig;
