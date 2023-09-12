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
    env: {
        BASE_URL: 'http://localhost:5046/api',
        BASE_IMAGE_URL: 'http://localhost:5046/',
    },
};

module.exports = nextConfig;
