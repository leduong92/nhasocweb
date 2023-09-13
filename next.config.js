/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '5000',
            },
            {
                protocol: 'http',
                hostname: '172.18.108.243',
                port: '5046',
            },
            {
                protocol: 'http',
                hostname: 'api.1live.io.vn',
                port: '5000',
            },
        ],
    },
    env: {
        BASE_URL: 'http://api.1live.io.vn/api',
        BASE_IMAGE_URL: 'http://api.1live.io.vn/',
    },
};

module.exports = nextConfig;
