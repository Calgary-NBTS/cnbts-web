/** @type {import('next').NextConfig} */
const __dirname = import.meta.dirname;
import path from 'path';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '**',
      },
    ],
    minimumCacheTTL: 60 * 60 * 24, // 1 day
  },
  // assetPrefix: isProd ? 'https://cdn.calgarynbts.ca' : undefined,
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
