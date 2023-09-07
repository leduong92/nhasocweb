/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['fakestoreapi.com', 'images.pexels.com, '],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '5000',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
        ],
    },
};

module.exports = nextConfig;
