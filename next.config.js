
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'logo.clearbit.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
    ],
  },
  // Ajout de la redirection pour l'API PHP locale
  async rewrites() {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost';
    return [
      {
        source: '/power_api/:path*',
        destination: `${apiBaseUrl}/power_api/:path*`,
      },
    ]
  },
};

module.exports = nextConfig;