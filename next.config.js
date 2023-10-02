/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['api.nhasoc.io.vn', '172.18.108.243', 'localhost'],
    },
    env: {
        //BASE_URL: 'http://api.nhasoc.io.vn/api',
        BASE_URL: 'http://localhost:5000/api',
        BASE_IMAGE_URL: 'http://localhost:5000',
    },
};

module.exports = nextConfig;
