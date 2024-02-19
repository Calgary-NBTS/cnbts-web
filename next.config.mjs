/** @type {import('next').NextConfig} */
const __dirname = import.meta.dirname;
import path from 'path';

const nextConfig = {
    webpack: (config, {isServer}) => {
        config.resolve.alias['@'] = path.join(__dirname, 'src');
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: '**'
            }
        ]
    }
};
//http://localhost:3000/(https://cdn.sanity.io/images/9108qgzh/production/252678266721c7565a418909d8ea259f9dc389fb-3300x5100.png)
export default nextConfig;