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
        ],
    },
    env: {
        BASE_URL: 'http://172.18.108.243:5046/api',
        BASE_IMAGE_URL: 'http://172.18.108.243:5046/',
    },
};

module.exports = nextConfig;
