/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net','downloads.ctfassets.net'],
  },
  async redirects() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/sitemap_index.xml',
        permanent: true,
      },
      {
        source: '/careers',
        destination: 'https://tru.zohorecruit.ca/jobs/Careers',
        permanent: true,
      },
    ]
  },
  webpack(config, { isServer }) {
    // For the client side
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 20000, // Set the minimum size in bytes
        maxSize: 1000000, // Set the maximum size in bytes
      };
    }
    return config;
  },
};

module.exports = nextConfig;